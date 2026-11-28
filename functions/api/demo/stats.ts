interface Env {
  DEMO_KV?: KVNamespace;
  DOWNLOAD_KV?: KVNamespace;
  DEMO_COLLECT_TOKEN?: string;
}

const MAX_DAYS = 31;

function authorized(request: Request, env: Env): boolean {
  const expected = env.DEMO_COLLECT_TOKEN?.trim();
  if (!expected) return true;
  const header = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(header.trim());
  return match?.[1]?.trim() === expected;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export async function onRequestGet({
  request,
  env,
}: {
  request: Request;
  env: Env;
}) {
  if (!authorized(request, env)) return json({ ok: false, message: 'Unauthorized' }, 401);

  const kv = env.DEMO_KV || env.DOWNLOAD_KV;
  if (!kv) return json({ ok: false, message: 'KV not bound' }, 500);

  const url = new URL(request.url);
  const requested = Number(url.searchParams.get('days') || '7');
  const days = Math.min(Math.max(Number.isFinite(requested) ? requested : 7, 1), MAX_DAYS);

  const now = new Date();
  const keys: string[] = [];
  const labels: string[] = [];
  for (let offset = 0; offset < days; offset += 1) {
    const d = new Date(now.getTime() - offset * 86_400_000);
    const iso = d.toISOString().slice(0, 10);
    labels.push(iso);
    keys.push(`demo:day:${iso}`);
  }

  const [totalsRaw, ...dailyRaw] = await Promise.all([
    kv.get('demo:totals'),
    ...keys.map((key) => kv.get(key)),
  ]);

  return json({
    ok: true,
    totals: totalsRaw ? JSON.parse(totalsRaw) : null,
    days: labels
      .map((date, index) => {
        const raw = dailyRaw[index];
        return raw ? { date, ...JSON.parse(raw) } : { date, events: {}, requests: null };
      })
      .reverse(),
  });
}
