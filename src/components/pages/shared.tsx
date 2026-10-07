import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { PACKAGES, type PackageId } from "@/lib/packages";
import { formatPrice } from "@/lib/format";

// En-tête de section réutilisable.
export function SectionHead({
  eyebrow,
  title,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center" data-reveal>
      <p className={`eyebrow ${dark ? "text-accent-light" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Héros standard des pages internes (fond clair).
export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-zinc-100 bg-zinc-50/60">
      <div className="wrap py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 text-base leading-relaxed text-zinc-600 sm:text-lg">{subtitle}</p>
          )}
        </div>
      </div>
    </section>
  );
}

export type PackageView = {
  id: PackageId;
  amount: number;
  name: string;
  tagline: string;
  priceLabel: string;
  periodLabel?: string;
  features: readonly string[];
};

// Les 4 forfaits enrichis des libellés localisés et du prix formaté.
export function packagesView(locale: Locale, dict: Dictionary): PackageView[] {
  return PACKAGES.map((p) => {
    const copy = dict.packages[p.id];
    return {
      id: p.id,
      amount: p.amount,
      name: copy.name,
      tagline: copy.tagline,
      priceLabel: formatPrice(locale, p.amount),
      periodLabel: "period" in copy ? (copy.period as string) : undefined,
      features: copy.features,
    };
  });
}

// Bandeau d'appel à l'action final.
export function CtaBand({
  title,
  text,
  button,
  href,
}: {
  title: string;
  text?: string;
  button: string;
  href: string;
}) {
  return (
    <section className="wrap pb-20">
      <div className="hero-bg relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="relative" data-reveal>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {text && <p className="mx-auto mt-4 max-w-xl text-zinc-300">{text}</p>}
          <Link href={href} className="btn btn-primary mt-8">
            {button}
          </Link>
        </div>
      </div>
    </section>
  );
}
