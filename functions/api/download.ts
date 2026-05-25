interface Env {
  DOWNLOAD_KV: KVNamespace;
  PACKAGES_BUCKET: R2Bucket;
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

export async function onRequestGet({ request, env }: { request: Request; env: Env }) {
  const url = new URL(request.url);
  const platform = url.searchParams.get("platform")?.toLowerCase();

  if (!platform || !PLATFORM_MAP[platform]) {
    return new Response("Unknown platform", { status: 400 });
  }

  const key = PLATFORM_MAP[platform];
  const object = await env.PACKAGES_BUCKET.get(key);

  if (!object) {
    return new Response("File not found", { status: 404 });
  }

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
