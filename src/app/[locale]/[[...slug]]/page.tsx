import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { href, resolvePageKey } from "@/lib/i18n/routes";
import { pageRegistry } from "@/components/pages/registry";

type Props = {
  params: Promise<{ locale: string; slug?: string[] }>;
};

export function generateStaticParams() {
  const params: { locale: string; slug?: string[] }[] = [];
  for (const locale of ["fr", "en"] as const) {
    // Toutes les pages localisées : segment d'URL différent selon la langue.
    const slugs = new Map<string, { fr: string; en: string }>([
      ["home", { fr: "", en: "" }],
      ["services", { fr: "services", en: "services" }],
      ["pricing", { fr: "tarifs", en: "pricing" }],
      ["payment", { fr: "paiement", en: "payment" }],
      ["contact", { fr: "contact", en: "contact" }],
      ["about", { fr: "a-propos", en: "about" }],
      ["legal", { fr: "mentions-legales", en: "legal-notice" }],
      ["privacy", { fr: "politique-confidentialite", en: "privacy-policy" }],
      ["refund", { fr: "politique-remboursement", en: "refund-policy" }],
    ]);
    for (const [, segs] of slugs) {
      const seg = segs[locale];
      params.push(seg ? { locale, slug: seg.split("/") } : { locale });
    }
  }
  return params;
}

export async function generateMetadata({ params }: { params: Props["params"] }): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) return {};
  const pageKey = resolvePageKey(rawLocale, slug);
  if (!pageKey) return {};
  const dict = getDictionary(rawLocale);
  const meta = dict[pageKey].meta;
  const frPath = href(pageKey, "fr");
  const enPath = href(pageKey, "en");
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: href(pageKey, rawLocale),
      languages: { fr: frPath, en: enPath, "x-default": frPath },
    },
  };
}

export default async function Page({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  if (!isLocale(rawLocale)) notFound();
  const pageKey = resolvePageKey(rawLocale, slug);
  if (!pageKey) notFound();

  const dict = getDictionary(rawLocale);
  const PageComponent = pageRegistry[pageKey];
  return <PageComponent locale={rawLocale} dict={dict} />;
}
