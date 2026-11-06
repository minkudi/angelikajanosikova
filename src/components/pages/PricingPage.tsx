import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { CATEGORY_ORDER } from "@/lib/packages";
import { ShieldIcon } from "@/components/icons";
import { CtaBand, PageHero, packagesView } from "./shared";

export default function PricingPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.pricing;
  const packages = packagesView(locale, dict);

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />
      <section className="wrap py-16 sm:py-20">
        {CATEGORY_ORDER.map((category) => (
          <div key={category} id={category} className="mb-16 scroll-mt-24">
            <h2 className="font-display text-2xl font-bold text-ink">{t.categories[category].name}</h2>
            <p className="mt-2 text-sm text-zinc-600">{t.categories[category].tagline}</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {packages.filter((pkg) => pkg.category === category).map((pkg) => (
                <div key={pkg.id} className="card flex flex-col p-7 transition-shadow hover:shadow-md">
                  <h3 className="font-display text-lg font-bold text-ink">{pkg.name}</h3>
                  <p className="mt-1.5 flex-1 text-sm text-zinc-500">{pkg.tagline}</p>
                  <p className="mt-5 font-display text-3xl font-bold tracking-tight text-ink">{pkg.priceLabel}</p>
                  <Link href={`${href("payment", locale)}?package=${pkg.id}`} className="btn btn-dark mt-7 w-full">
                    {t.choose}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="mt-8 text-center text-sm text-zinc-500">{t.paymentNote}</p>
        <div className="card mt-10 flex flex-col items-start gap-5 border-accent/20 bg-accent-soft/60 p-7 sm:flex-row sm:items-center">
          <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-accent shadow-sm"><ShieldIcon width={24} height={24} /></span>
          <div className="flex-1">
            <h2 className="font-display text-lg font-bold text-ink">{t.guarantee.title}</h2>
            <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{t.guarantee.text}</p>
          </div>
          <Link href={href("refund", locale)} className="btn btn-ghost shrink-0 border-accent/30 bg-white text-accent">{t.guarantee.link}</Link>
        </div>
      </section>
      <div className="pb-4"><CtaBand title={t.cta.text} button={t.cta.button} href={href("contact", locale)} /></div>
    </>
  );
}
