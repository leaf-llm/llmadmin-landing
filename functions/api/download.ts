interface Env {
  DOWNLOAD_KV: KVNamespace;
  PACKAGES_BUCKET: R2Bucket;
}

const PLATFORM_MAP: Record<string, string> = {
  windows: "llm-admin.exe",
  macos: "llm-admin_x64.dmg",
  linux: "llm-admin_amd64.deb",
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

export async function onRequestGet({ request, env }: { request: Request; env: Env }) {
  const url = new URL(request.url);
  const platform = url.searchParams.get("platform")?.toLowerCase();

  if (!platform || !PLATFORM_MAP[platform]) {
    return new Response("Unknown platform", { status: 400 });
  }

  const token = url.searchParams.get("token");
  if (!token) {
    return new Response("Missing token", { status: 403 });
  }

  const tokenVal = await env.DOWNLOAD_KV.get(`token:${token}`);
  if (!tokenVal) {
    return new Response("Invalid or expired token", { status: 403 });
  }

  const ip = getClientIp(request);
  const rateCheck = await checkRateLimit(env, ip);
  if (!rateCheck.allowed) {
    return new Response("Rate limit exceeded", { status: 429 });
  }

  await incrementRateLimit(env, ip);

  const key = PLATFORM_MAP[platform];
  const object = await env.PACKAGES_BUCKET.get(key);

  if (!object) {
    return new Response("File not found", { status: 404 });
  }

  // Track download count in KV
  const val = await env.DOWNLOAD_KV.get(`downloads:${platform}`);
  const count = parseInt(val || "0", 10) + 1;
  await env.DOWNLOAD_KV.put(`downloads:${platform}`, String(count));

  const ext = key.slice(key.lastIndexOf("."));
  const headers = new Headers();
  headers.set("Content-Type", CONTENT_TYPES[ext] || "application/octet-stream");
  headers.set("Content-Disposition", `attachment; filename="${key}"`);
  object.writeHttpMetadata(headers);

  return new Response(object.body, { headers });
}
