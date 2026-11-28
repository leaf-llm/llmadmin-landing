interface Env {
  // Dedicated namespace preferred; falls back to the download namespace so the
  // demo works without another binding.
  DEMO_KV?: KVNamespace;
  DOWNLOAD_KV?: KVNamespace;
  DEMO_COLLECT_TOKEN?: string;
  LOGFLARE_API_KEY?: string;
  LOGFLARE_SOURCE_ID?: string;
}

const MAX_EVENTS = 500;
const DAY_TTL_SECONDS = 60 * 60 * 24 * 400;

// Only names the demo emits; anything else is ignored so a leaked collector
// URL cannot be used to write arbitrary keys.
const ALLOWED_EVENTS = new Set([
  'session_created',
  'session_closed',
  'key_generated',
  'key_revoked',
  'config_reset',
  'request',
]);

type DayStats = {
  events: Record<string, number>;
  requests: {
    total: number;
    ok: number;
    client_error: number;
    server_error: number;
    ms_total: number;
    ms_count: number;
  };
  updatedAt: string;
};

function emptyDay(): DayStats {
  return {
    events: {},
    requests: {
      total: 0,
      ok: 0,
      client_error: 0,
      server_error: 0,
      ms_total: 0,
      ms_count: 0,
    },
    updatedAt: new Date().toISOString(),
  };
}

function dayKey(date: Date): string {
  return `demo:day:${date.toISOString().slice(0, 10)}`;
}

function authorized(request: Request, env: Env): boolean {
  const expected = env.DEMO_COLLECT_TOKEN?.trim();
  // Fail closed: without a configured secret both endpoints are disabled, so a
  // forgotten variable can never expose demo stats to the internet.
  if (!expected) return false;
  const header = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match?.[1]?.trim() === expected;
}

function applyEvent(day: DayStats, event: { name?: unknown; props?: any }) {
  const name = typeof event?.name === 'string' ? event.name : '';
  if (!ALLOWED_EVENTS.has(name)) return;

  if (name === 'request') {
    const status = Number(event?.props?.status) || 0;
    const ms = Number(event?.props?.ms) || 0;
    day.requests.total += 1;
    if (status >= 200 && status < 300) day.requests.ok += 1;
    else if (status >= 500) day.requests.server_error += 1;
    else day.requests.client_error += 1;
    if (ms > 0) {
      day.requests.ms_total += ms;
      day.requests.ms_count += 1;
    }
    return;
  }

  day.events[name] = (day.events[name] || 0) + 1;
}

export async function onRequestPost({
  request,
  env,
  waitUntil,
}: {
  request: Request;
  env: Env;
  waitUntil: (promise: Promise<void>) => void;
}) {
  if (!env.DEMO_COLLECT_TOKEN?.trim()) {
    return new Response(
      JSON.stringify({
        ok: false,
        message: 'DEMO_COLLECT_TOKEN is not configured; collector disabled',
      }),
      {
        status: 503,
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      }
    );
  }

  if (!authorized(request, env)) {
    return new Response(JSON.stringify({ ok: false, message: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  let body: any;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ ok: false, message: 'Invalid JSON' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const events = Array.isArray(body?.events) ? body.events.slice(0, MAX_EVENTS) : [];
  const kv = env.DEMO_KV || env.DOWNLOAD_KV;
  if (!kv) {
    return new Response(JSON.stringify({ ok: false, message: 'KV not bound' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  const now = new Date();
  const key = dayKey(now);
  const [rawDay, rawTotals] = await Promise.all([
    kv.get(key),
    kv.get('demo:totals'),
  ]);

  const day: DayStats = rawDay ? JSON.parse(rawDay) : emptyDay();
  const totals: DayStats = rawTotals ? JSON.parse(rawTotals) : emptyDay();
  for (const event of events) {
    applyEvent(day, event);
    applyEvent(totals, event);
  }
  day.updatedAt = now.toISOString();
  totals.updatedAt = now.toISOString();

  waitUntil(
    Promise.all([
      kv.put(key, JSON.stringify(day), { expirationTtl: DAY_TTL_SECONDS }),
      kv.put('demo:totals', JSON.stringify(totals)),
    ]).catch(() => undefined)
  );

  // Optional: mirror raw events to Logflare when configured, same as the
  // download beacon, so existing dashboards can chart them too.
  if (env.LOGFLARE_API_KEY && env.LOGFLARE_SOURCE_ID) {
    const entries = events.map((event: any) => ({
      message: 'demo_event',
      metadata: {
        name: event?.name,
        props: event?.props ?? {},
        ts: event?.ts,
        source: body?.source,
        ip: request.headers.get('cf-connecting-ip') || 'unknown',
      },
    }));
    waitUntil(
      fetch(
        `https://api.logflare.app/logs/json?source=${env.LOGFLARE_SOURCE_ID}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-API-KEY': env.LOGFLARE_API_KEY,
          },
          body: JSON.stringify(entries),
        }
      ).catch(() => undefined)
    );
  }

  return new Response(null, {
    status: 204,
    headers: { 'Cache-Control': 'no-store' },
  });
}
