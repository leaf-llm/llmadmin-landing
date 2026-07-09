"use client";

import { useEffect, useState } from "react";

const TOKEN_TTL_MS = 5 * 60 * 1000;        // matches server-side KV TTL
const TOKEN_FRESH_MS = 4 * 60 * 1000;      // treat as stale 1 min before expiry

let cachedToken: string | null = null;
let cachedAt = 0;
let pendingPromise: Promise<string> | null = null;

function fetchToken(): Promise<string> {
  if (pendingPromise) return pendingPromise;
  pendingPromise = fetch("/api/download-token")
    .then((res) => res.json())
    .then((data) => {
      cachedToken = data.token as string;
      cachedAt = Date.now();
      pendingPromise = null;
      return cachedToken;
    })
    .catch((err) => {
      pendingPromise = null;
      throw err;
    });
  return pendingPromise;
}

function ensureToken(): Promise<string> {
  if (cachedToken && Date.now() - cachedAt < TOKEN_FRESH_MS) {
    return Promise.resolve(cachedToken);
  }
  return fetchToken();
}

export function useDownloadToken(): {
  token: string | null;
  ensureToken: () => Promise<string>;
} {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const refresh = () => {
      ensureToken().then(setToken).catch(() => {});
    };
    refresh();

    // Refresh on tab becoming visible again so the href keeps a valid token
    // for ctrl+click / middle-click scenarios. Event-driven, not polling.
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        refresh();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return { token, ensureToken };
}
