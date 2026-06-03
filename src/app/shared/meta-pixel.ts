/**
 * Kleiner, DNT-sicherer Wrapper um den Meta Pixel (fbq).
 *
 * Der Pixel wird in src/index.html nur initialisiert, wenn Do-Not-Track
 * nicht aktiv ist. Diese Helfer prüfen das zusätzlich, damit Events auch
 * dann nicht feuern, wenn fbq fehlt oder DNT gesetzt ist.
 */

type Fbq = (...args: unknown[]) => void;

function dntEnabled(): boolean {
  if (typeof navigator === 'undefined') return false;
  const nav = navigator as Navigator & { msDoNotTrack?: string };
  const win = (typeof window !== 'undefined' ? window : undefined) as
    | (Window & { doNotTrack?: string })
    | undefined;
  return (
    nav.doNotTrack === '1' ||
    nav.msDoNotTrack === '1' ||
    win?.doNotTrack === '1'
  );
}

function getFbq(): Fbq | null {
  if (typeof window === 'undefined') return null;
  const fbq = (window as unknown as { fbq?: Fbq }).fbq;
  return typeof fbq === 'function' ? fbq : null;
}

/** Standard-Event (Lead, InitiateCheckout, ViewContent, …). */
export function trackMetaEvent(event: string, params?: Record<string, unknown>): void {
  if (dntEnabled()) return;
  const fbq = getFbq();
  if (!fbq) return;
  fbq('track', event, params ?? {});
}

/** Custom-Event (eigene Bezeichnungen, z. B. TicketCTAClick). */
export function trackMetaCustom(event: string, params?: Record<string, unknown>): void {
  if (dntEnabled()) return;
  const fbq = getFbq();
  if (!fbq) return;
  fbq('trackCustom', event, params ?? {});
}
