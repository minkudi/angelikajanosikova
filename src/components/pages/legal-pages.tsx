import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { SITE } from "@/lib/site";
import LegalArticle from "./LegalArticle";

function addressLine(locale: Locale): string | null {
  if (!SITE.operatingAddress) return null;
  return locale === "fr"
    ? `Adresse : ${SITE.operatingAddress}.`
    : `Address: ${SITE.operatingAddress}.`;
}

export function LegalPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <LegalArticle
      pageTitle={dict.legal.pageTitle}
      updated={dict.legal.updated}
      sections={dict.legal.sections}
      addressLine={addressLine(locale)}
    />
  );
}

export function PrivacyPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <LegalArticle
      pageTitle={dict.privacy.pageTitle}
      updated={dict.privacy.updated}
      sections={dict.privacy.sections}
      addressLine={addressLine(locale)}
    />
  );
}

export function RefundPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <LegalArticle
      pageTitle={dict.refund.pageTitle}
      updated={dict.refund.updated}
      sections={dict.refund.sections}
      addressLine={addressLine(locale)}
    />
  );
}
