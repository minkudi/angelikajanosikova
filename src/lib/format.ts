import type { Locale } from "@/lib/i18n/config";

// Formatage des prix en euros : « 1 200 € » / « 24,80 € » (fr) — « €1,200 » / « €24.80 » (en).
// Les décimales n'apparaissent que lorsque le prix en comporte (9 €, mais 24,80 €).
export function formatPrice(locale: Locale, amountCents: number): string {
  const decimals = amountCents % 100 === 0 ? 0 : 2;
  return new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-IE", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amountCents / 100);
}
