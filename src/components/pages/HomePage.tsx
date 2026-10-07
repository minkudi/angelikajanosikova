import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { formatPrice } from "@/lib/format";
import { PACKAGES } from "@/lib/packages";
import {
  ArrowRightIcon,
  CheckIcon,
  SERVICE_ICONS,
} from "@/components/icons";
import { CtaBand, SectionHead } from "./shared";

const SERVICE_ORDER = ["boutique", "app", "flux", "croissance"] as const;
type ServiceId = (typeof SERVICE_ORDER)[number];

export default function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.home;

  return (
    <>
      {/* ——— Héros ——— */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="wrap relative py-24 text-center sm:py-32">
          <p className="eyebrow hero-anim hero-anim-1 text-accent-light">{t.hero.eyebrow}</p>
          <h1 className="hero-anim hero-anim-2 mx-auto mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            {t.hero.titleA}{" "}
            <span className="text-accent-light">{t.hero.titleAccent}</span>{" "}
            {t.hero.titleB}
          </h1>
          <p className="hero-anim hero-anim-3 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            {t.hero.subtitle}
          </p>
          <div className="hero-anim hero-anim-4 mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link href={href("pricing", locale)} className="btn btn-primary px-6 py-3">
              {t.hero.ctaPrimary}
            </Link>
            <Link href={href("contact", locale)} className="btn btn-ghost-light px-6 py-3">
              {t.hero.ctaSecondary}
            </Link>
          </div>
          <ul className="hero-anim hero-anim-5 mt-12 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs text-zinc-400">
            {t.hero.badges.map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <CheckIcon className="size-3.5 text-accent-light" />
                {badge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Compétences ——— */}
      <section className="border-b border-zinc-100">
        <div className="wrap py-10 text-center">
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-400">
            {t.chipsTitle}
          </h2>
          <ul className="mt-5 flex flex-wrap items-center justify-center gap-2">
            {t.chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-sm text-zinc-600"
              >
                {chip}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section className="wrap py-20 sm:py-24">
        <SectionHead eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {SERVICE_ORDER.map((id, i) => {
            const item = dict.services.items[id];
            const Icon = SERVICE_ICONS[id as ServiceId];
            return (
              <Link
                key={id}
                href={href("services", locale)}
                data-reveal
                style={{ transitionDelay: `${i * 80}ms` }}
                className="card group flex flex-col p-7 transition-all hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                  {t.services.cta}
                  <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ——— Pourquoi nous ——— */}
      <section className="bg-zinc-50/70">
        <div className="wrap py-20 sm:py-24">
          <SectionHead eyebrow={t.why.eyebrow} title={t.why.title} />
          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.why.items.map((item, i) => (
              <div key={item.title} data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
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

      {/* ——— Méthode ——— */}
      <section className="wrap py-20 sm:py-24">
        <SectionHead eyebrow={t.process.eyebrow} title={t.process.title} />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <li key={step.title} className="relative" data-reveal style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                {i < t.process.steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-zinc-200 lg:block" aria-hidden="true" />
                )}
              </div>
              <h3 className="mt-4 font-display text-base font-bold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ——— Aperçu des forfaits ——— */}
      <section className="hero-bg relative overflow-hidden text-white">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="wrap relative py-20 sm:py-24">
          <SectionHead
            eyebrow={t.pricingTeaser.eyebrow}
            title={t.pricingTeaser.title}
            subtitle={t.pricingTeaser.subtitle}
            dark
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p, i) => {
              const copy = dict.packages[p.id];
              return (
                <Link
                  key={p.id}
                  href={href("payment", locale)}
                  data-reveal
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition-colors hover:border-white/25 hover:bg-white/[0.09]"
                >
                  <h3 className="font-display text-base font-bold text-white">{copy.name}</h3>
                  <p className="mt-1.5 text-xs text-zinc-400">{copy.tagline}</p>
                  <p className="mt-5 font-display text-2xl font-bold text-white">
                    {formatPrice(locale, p.amount)}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-light">
                    {dict.pricing.choose}
                    <ArrowRightIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Link href={href("pricing", locale)} className="btn btn-primary px-6 py-3">
              {t.pricingTeaser.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* ——— CTA final ——— */}
      <div className="pt-20">
        <CtaBand
          title={t.cta.title}
          text={t.cta.text}
          button={t.cta.button}
          href={href("contact", locale)}
        />
      </div>
    </>
  );
}
