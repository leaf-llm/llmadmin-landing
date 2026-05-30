interface Env {
  DOWNLOAD_KV: KVNamespace;
  PACKAGES_BUCKET: R2Bucket;
  LOGFLARE_API_KEY?: string;
  LOGFLARE_SOURCE_ID?: string;
}

const PLATFORM_MAP: Record<string, string> = {
  windows: "llm-admin.exe",
  macos: "llm-admin_x64.dmg",
  linux: "llm-admin_0.1.0_amd64.deb",
};

const CONTENT_TYPES: Record<string, string> = {
  ".exe": "application/vnd.microsoft.portable-executable",
  ".dmg": "application/x-apple-diskimage",
  ".deb": "application/vnd.debian.binary-package",
};

const RATE_LIMIT = 5;
const RATE_WINDOW_SECONDS = 60;

function getClientIp(request: Request): string {
  const cf = request.cf;
  if (cf && typeof cf === "object" && "requestClientIp" in cf) {
    return cf.requestClientIp as string;
  }
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    return xForwardedFor.split(",")[0].trim();
  }
  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) {
    return xRealIp;
  }
  return "unknown";
}

function checkSuspiciousReferer(request: Request): boolean {
  const referer = request.headers.get("Referer");
  const host = request.headers.get("Host");

  if (!referer) {
    return true;
  }

  try {
    const refererUrl = new URL(referer);
    return refererUrl.host !== host;
  } catch {
    return true;
  }
}

async function checkRateLimit(env: Env, ip: string): Promise<{ allowed: boolean; remaining: number }> {
  const key = `rate:${ip}`;
  const val = await env.DOWNLOAD_KV.get(key);
  const count = parseInt(val || "0", 10);

  if (count >= RATE_LIMIT) {
    return { allowed: false, remaining: 0 };
  }

  return { allowed: true, remaining: RATE_LIMIT - count - 1 };
}

async function incrementRateLimit(env: Env, ip: string): Promise<void> {
  const key = `rate:${ip}`;
  const val = await env.DOWNLOAD_KV.get(key);
  const count = parseInt(val || "0", 10) + 1;

  if (count === 1) {
    await env.DOWNLOAD_KV.put(key, String(count), { expirationTtl: RATE_WINDOW_SECONDS });
  } else {
    await env.DOWNLOAD_KV.put(key, String(count));
  }
}

async function logToLogflare(
  env: Env,
  data: { platform: string; ip: string; referer: string | null; userAgent: string | null; blocked: boolean; suspiciousReferer: boolean }
): Promise<void> {
  const apiKey = env.LOGFLARE_API_KEY;
  const sourceId = env.LOGFLARE_SOURCE_ID;

  if (!apiKey || !sourceId) {
    return;
  }

  const logEntry = {
    message: data.blocked ? "Download blocked" : "Download started",
    metadata: {
      platform: data.platform,
      ip: data.ip,
      referer: data.referer,
      userAgent: data.userAgent,
      blocked: data.blocked,
      suspiciousReferer: data.suspiciousReferer,
      timestamp: new Date().toISOString(),
    },
  };

  try {
    await fetch(`https://api.logflare.app/logs/json?source=${sourceId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "X-API-KEY": apiKey,
      },
      body: JSON.stringify([logEntry]),
    });
  } catch {
    // Silently fail logging - don't block the download
  }
}

export async function onRequestGet({ request, env, waitUntil }: { request: Request; env: Env; waitUntil: (promise: Promise<void>) => void }) {
  const url = new URL(request.url);
  const platform = url.searchParams.get("p")?.toLowerCase();
  const ip = getClientIp(request);
  const referer = request.headers.get("Referer");
  const userAgent = request.headers.get("User-Agent");
  const suspiciousReferer = checkSuspiciousReferer(request);

  if (!platform || !PLATFORM_MAP[platform]) {
    return new Response("Unknown platform", { status: 400 });
  }

  const rateCheck = await checkRateLimit(env, ip);
  if (!rateCheck.allowed) {
    waitUntil(logToLogflare(env, {
      platform,
      ip,
      referer,
      userAgent,
      blocked: true,
      suspiciousReferer,
    }));
    return new Response("Rate limit exceeded", { status: 429 });
  }

  await incrementRateLimit(env, ip);

  const key = PLATFORM_MAP[platform];
  const object = await env.PACKAGES_BUCKET.get(key);

  if (!object) {
    return new Response("File not found", { status: 404 });
  }

  const val = await env.DOWNLOAD_KV.get(`downloads:${platform}`);
  const count = parseInt(val || "0", 10) + 1;
  await env.DOWNLOAD_KV.put(`downloads:${platform}`, String(count));

  waitUntil(logToLogflare(env, {
    platform,
    ip,
    referer,
    userAgent,
    blocked: false,
    suspiciousReferer,
  }));

  const ext = key.slice(key.lastIndexOf("."));
  const headers = new Headers();
  headers.set("Content-Type", CONTENT_TYPES[ext] || "application/octet-stream");
  headers.set("Content-Disposition", `attachment; filename="${key}"`);
  object.writeHttpMetadata(headers);

  return new Response(object.body, { headers });
}
