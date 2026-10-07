import type { Locale } from "./config";

// Clé de page -> segment d'URL par langue (URLs localisées).
export const ROUTES = {
  home: { fr: "", en: "" },
  services: { fr: "services", en: "services" },
  pricing: { fr: "tarifs", en: "pricing" },
  payment: { fr: "paiement", en: "payment" },
  contact: { fr: "contact", en: "contact" },
  about: { fr: "a-propos", en: "about" },
  legal: { fr: "mentions-legales", en: "legal-notice" },
  privacy: { fr: "politique-confidentialite", en: "privacy-policy" },
  refund: { fr: "politique-remboursement", en: "refund-policy" },
} as const;

export type PageKey = keyof typeof ROUTES;

const LOCALES: Locale[] = ["fr", "en"];

// slug -> pageKey, par langue (résolution du catch-all [locale]/[[...slug]]).
const REVERSE: Record<Locale, Record<string, PageKey>> = { fr: {}, en: {} };
for (const locale of LOCALES) {
  for (const [key, segs] of Object.entries(ROUTES)) {
    const seg = segs[locale as Locale];
    REVERSE[locale][seg] = key as PageKey;
  }
}

export function resolvePageKey(locale: Locale, slug: string[] | undefined): PageKey | undefined {
  const path = slug?.join("/") ?? "";
  return REVERSE[locale][path];
}

export function href(pageKey: PageKey, locale: Locale): string {
  const seg = ROUTES[pageKey][locale];
  return seg ? `/${locale}/${seg}` : `/${locale}`;
}
