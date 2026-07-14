interface Env {}

const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW_MS = 60_000;
const TRUNCATE_LEN = 100;

interface RateEntry {
  count: number;
  resetAt: number;
}

const rateMap = new Map<string, RateEntry>();

function getClientIP(request: Request): string {
  return (
    request.headers.get("CF-Connecting-IP") ||
    request.headers.get("X-Forwarded-For")?.split(",")[0]?.trim() ||
    "127.0.0.1"
  );
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, remaining: RATE_LIMIT_MAX - 1 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, remaining: 0 };
  }

  entry.count++;
  return { allowed: true, remaining: RATE_LIMIT_MAX - entry.count };
}

function truncate(text: string): string {
  if (text.length <= TRUNCATE_LEN) return text;
  return text.slice(0, TRUNCATE_LEN) + "…";
}

async function handlePOST(request: Request): Promise<Response> {
  const ip = getClientIP(request);
  const rate = checkRateLimit(ip);

  if (!rate.allowed) {
    return new Response(
      JSON.stringify({
        error: { message: "Too many requests", type: "rate_limit_error" },
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          "X-RateLimit-Remaining": "0",
        },
      },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return new Response(
      JSON.stringify({
        error: { message: "Invalid JSON", type: "invalid_request_error" },
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      },
    );
  }

  const messages = (body.messages as Array<{ role: string; content: string }>) || [];
  const model = (body.model as string) || "unknown";

  const contentParts: string[] = [];
  for (const msg of messages) {
    contentParts.push(
      typeof msg.content === "string" ? msg.content : JSON.stringify(msg.content),
    );
  }

  const response = {
    id: "chatcmpl-echo-" + crypto.randomUUID().slice(0, 8),
    object: "chat.completion",
    created: Math.floor(Date.now() / 1000),
    model,
    choices: [
      {
        index: 0,
        message: {
          role: "assistant",
          content: truncate(contentParts.join("\n\n")),
        },
        finish_reason: "stop",
      },
    ],
    usage: {
      prompt_tokens: 0,
      completion_tokens: 0,
      total_tokens: 0,
    },
  };

  return new Response(JSON.stringify(response, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "X-RateLimit-Remaining": String(rate.remaining),
    },
  });
}

function handleOPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request } = context;
  switch (request.method) {
    case "POST":
      return handlePOST(request);
    case "OPTIONS":
      return handleOPTIONS();
    default:
      return new Response(
        JSON.stringify({
          error: { message: "Method not allowed", type: "method_not_allowed" },
        }),
        {
          status: 405,
          headers: { "Content-Type": "application/json; charset=utf-8" },
        },
      );
  }
}