import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { CheckIcon, ShieldIcon } from "@/components/icons";
import { CtaBand, PageHero, packagesView } from "./shared";

export default function PricingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.pricing;
  const packages = packagesView(locale, dict);

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="wrap py-16 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => (
            <div
              key={pkg.id}
              className="card flex flex-col p-7 transition-shadow hover:shadow-md"
              data-reveal
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h2 className="font-display text-lg font-bold text-ink">{pkg.name}</h2>
              <p className="mt-1.5 text-sm text-zinc-500">{pkg.tagline}</p>
              <p className="mt-5 font-display text-4xl font-bold tracking-tight text-ink">
                {pkg.priceLabel}
              </p>
              {pkg.periodLabel && (
                <p className="mt-1 text-xs font-medium text-accent">{pkg.periodLabel}</p>
              )}
              <h3 className="mt-6 border-t border-zinc-100 pt-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400">
                {t.included}
              </h3>
              <ul className="mt-4 flex-1 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm text-zinc-700">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href={`${href("payment", locale)}?package=${pkg.id}`}
                className="btn btn-dark mt-7 w-full"
              >
                {t.choose}
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-zinc-500">{t.paymentNote}</p>

        {/* Garantie 14 jours — info clé pour la conformité */}
        <div
          className="card mt-10 flex flex-col items-start gap-5 border-accent/20 bg-accent-soft/60 p-7 transition-shadow hover:shadow-md sm:flex-row sm:items-center"
          data-reveal
        >
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm">
            <ShieldIcon width={24} height={24} />
          </span>
          <div className="flex-1">
            <h2 className="font-display text-lg font-bold text-ink">{t.guarantee.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{t.guarantee.text}</p>
          </div>
          <Link
            href={href("refund", locale)}
            className="btn btn-ghost shrink-0 border-accent/30 bg-white text-accent hover:border-accent hover:text-accent-strong"
          >
            {t.guarantee.link}
          </Link>
        </div>
      </section>

      <div className="pb-4">
        <CtaBand title={t.cta.text} button={t.cta.button} href={href("contact", locale)} />
      </div>
    </>
  );
}
