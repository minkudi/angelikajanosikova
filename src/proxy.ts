import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, isLocale, locales } from "@/lib/i18n/config";

// Redirection de la racine vers la langue préférée du visiteur
// (cookie NEXT_LOCALE, sinon en-tête Accept-Language, sinon français).
function detectLocale(req: NextRequest): string {
  const cookie = req.cookies.get("NEXT_LOCALE")?.value;
  if (isLocale(cookie)) return cookie;

  const accept = req.headers.get("accept-language") ?? "";
  const preferences = accept
    .split(",")
    .map((part) => part.split(";")[0]?.trim().toLowerCase() ?? "");
  const wantsFr = preferences.some((p) => p === "fr" || p.startsWith("fr-"));
  const wantsEn = preferences.some((p) => p === "en" || p.startsWith("en-"));
  if (wantsFr && !wantsEn) return "fr";
  if (wantsEn && !wantsFr) return "en";
  return defaultLocale;
}

export default function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Tout sauf : API, fichiers internes Next, et fichiers avec extension.
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|robots.txt|sitemap.xml|.*\\..*).*)"],
};
