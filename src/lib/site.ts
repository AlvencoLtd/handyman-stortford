export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://handyman-stortford.vercel.app";

export function absoluteUrl(pathname: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${base}${path}`;
}
