import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { SITE } from "@/lib/site";
import { CtaBand, PageHero } from "./shared";

export default function AboutPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.about;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

      {/* Mission */}
      <section className="wrap grid gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16" data-reveal>
        <div>
          <p className="eyebrow">{t.mission.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.mission.title}
          </h2>
        </div>
        <p className="text-lg leading-relaxed text-zinc-600 lg:pt-9">{t.mission.text}</p>
      </section>

      {/* Axes de travail */}
      <section className="border-y border-zinc-100 bg-zinc-50/60">
        <div className="wrap py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{t.axes.eyebrow}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {t.axes.title}
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.axes.items.map((item, i) => (
              <div
                key={item.title}
                className="card p-7 transition-shadow hover:shadow-md"
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="font-display text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="wrap py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{t.principles.eyebrow}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {t.principles.title}
          </h2>
        </div>
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.principles.items.map((item, i) => (
            <div key={item.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Identité de l'entreprise — informations factuelles */}
      <section className="wrap pb-20">
        <div className="card mx-auto max-w-3xl p-7 sm:p-9" data-reveal>
          <p className="eyebrow">{t.identity.eyebrow}</p>
          <h2 className="mt-3 font-display text-2xl font-bold text-ink">{t.identity.title}</h2>
          <dl className="mt-7 divide-y divide-zinc-100">
            {t.identity.items.map((item) => (
              <div key={item.label} className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-zinc-900">{item.label}</dt>
                <dd className="text-sm text-zinc-600">{item.value}</dd>
              </div>
            ))}
            {/* Adresse : alimentée par SITE.operatingAddress (src/lib/site.ts) */}
            {SITE.operatingAddress && (
              <div className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-zinc-900">
                  {locale === "fr" ? "Adresse" : "Address"}
                </dt>
                <dd className="text-sm text-zinc-600">{SITE.operatingAddress}</dd>
              </div>
            )}
            {SITE.registrationNumber && (
              <div className="grid gap-1 py-4 sm:grid-cols-[220px_1fr] sm:gap-6">
                <dt className="text-sm font-semibold text-zinc-900">
                  {locale === "fr" ? "Numéro d'enregistrement" : "Registration number"}
                </dt>
                <dd className="text-sm text-zinc-600">{SITE.registrationNumber}</dd>
              </div>
            )}
          </dl>
        </div>
      </section>

      <CtaBand title={t.cta.title} button={t.cta.button} href={href("contact", locale)} />
    </>
  );
}
