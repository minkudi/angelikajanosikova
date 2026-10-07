import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { CheckIcon, SERVICE_ICONS } from "@/components/icons";
import { CtaBand, PageHero } from "./shared";

const SERVICE_ORDER = ["boutique", "app", "flux", "croissance"] as const;

export default function ServicesPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.services;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

      <div>
        {SERVICE_ORDER.map((id, i) => {
          const item = t.items[id];
          const Icon = SERVICE_ICONS[id];
          const pkg = dict.packages[id];
          return (
            <section
              key={id}
              id={id}
              className={i % 2 === 1 ? "border-y border-zinc-100 bg-zinc-50/60" : ""}
            >
              <div
                className="wrap grid items-start gap-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16"
                data-reveal
              >
                <div>
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
                    <Icon width={24} height={24} />
                  </span>
                  <h2 className="mt-6 font-display text-3xl font-bold tracking-tight text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-accent">{item.tagline}</p>
                  <p className="mt-5 leading-relaxed text-zinc-600">{item.description}</p>
                  <p className="mt-6 inline-flex rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white">
                    {item.packageRef}
                  </p>
                </div>

                <div className="card p-7 sm:p-8">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-400">
                    {dict.pricing.included}
                  </h3>
                  <ul className="mt-5 space-y-3.5">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-700">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-accent" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-7 flex flex-col gap-3 border-t border-zinc-100 pt-6 sm:flex-row">
                    <Link href={`${href("payment", locale)}?package=${id}`} className="btn btn-dark flex-1">
                      {pkg.name} — {dict.pricing.choose}
                    </Link>
                    <Link href={href("contact", locale)} className="btn btn-ghost flex-1">
                      {t.cta.button}
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <div className="pt-20">
        <CtaBand title={t.cta.text} button={t.cta.button} href={href("contact", locale)} />
      </div>
    </>
  );
}
