import type { Locale } from "@/lib/i18n/config";

// Formatage des prix en euros : « 1 200 € » (fr) / « €1,200 » (en).
export function formatPrice(locale: Locale, amountCents: number): string {
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-IE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(amountCents / 100);
}
