interface Env {}

async function handleGET(): Promise<Response> {
  return new Response(
    JSON.stringify({
      data: [
        {
          id: "echo",
          object: "model",
          owned_by: "anthropic",
        },
      ],
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    },
  );
}

function handleOPTIONS(): Response {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}

export async function onRequest(context: { request: Request; env: Env }): Promise<Response> {
  const { request } = context;
  switch (request.method) {
    case "GET":
      return handleGET();
    case "OPTIONS":
      return handleOPTIONS();
    default:
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });
  }
}