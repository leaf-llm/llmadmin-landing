type Platform = "windows" | "macos" | "linux";
type Component = "hero" | "cta";

interface DownloadBeaconPayload {
  platform: Platform;
  component: Component;
  sw: number;
  sh: number;
}

export function sendDownloadBeacon(platform: Platform, component: Component): void {
  if (typeof navigator === "undefined" || typeof navigator.sendBeacon !== "function") {
    return;
  }

  try {
    const payload: DownloadBeaconPayload = {
      platform,
      component,
      sw: screen.width,
      sh: screen.height,
    };
    const blob = new Blob([JSON.stringify(payload)], { type: "application/json" });
    navigator.sendBeacon("/api/beacon", blob);
  } catch {
    // Silently fail — analytics must never block the download
  }
}

export async function handleDownloadClick(
  e: React.MouseEvent<HTMLAnchorElement>,
  platform: Platform,
  component: Component,
  ensureToken: () => Promise<string>,
): Promise<void> {
  const isNormalClick = e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey;

  // Beacon fires for every click variant (normal, ctrl/cmd/shift, middle-click).
  sendDownloadBeacon(platform, component);

  if (!isNormalClick) {
    // Let the browser handle it (new tab, etc.) using the token already in href.
    return;
  }

  // Must run synchronously before any await, otherwise the browser navigates first.
  e.preventDefault();

  try {
    const token = await ensureToken();
    window.location.href = `/api/download?platform=${platform}&token=${token}`;
  } catch {
    // Fallback: try the (possibly stale) token already in the href.
    window.location.href = e.currentTarget.href;
  }
}
