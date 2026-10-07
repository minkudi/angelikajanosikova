import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { ROUTES } from "@/lib/i18n/routes";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const [pageKey, segments] of Object.entries(ROUTES)) {
    const languages: Record<string, string> = {};
    for (const locale of locales) {
      const seg = segments[locale];
      languages[locale] = `${SITE.url}/${locale}${seg ? `/${seg}` : ""}`;
    }
    for (const locale of locales) {
      const seg = segments[locale];
      entries.push({
        url: languages[locale],
        lastModified,
        changeFrequency: pageKey === "home" ? "weekly" : "monthly",
        priority: pageKey === "home" ? 1 : pageKey === "pricing" || pageKey === "payment" ? 0.9 : 0.6,
        alternates: { languages },
      });
    }
  }

  return entries;
}
