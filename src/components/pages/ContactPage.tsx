import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { SITE } from "@/lib/site";
import ContactForm from "./ContactForm";
import { PageHero } from "./shared";
import { BuildingIcon, MailIcon, PinIcon } from "@/components/icons";

export default function ContactPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.contact;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="wrap grid gap-6 py-16 sm:py-20 lg:grid-cols-[1.25fr_1fr]">
        <div data-reveal>
          <ContactForm locale={locale} copy={t.form} />
        </div>

        <div className="card h-fit p-7 sm:p-8" data-reveal style={{ transitionDelay: "120ms" }}>
          <h2 className="font-display text-lg font-bold text-ink">{t.info.title}</h2>
          <ul className="mt-6 space-y-6">
            <li className="flex items-start gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <MailIcon />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">{t.info.emailLabel}</h3>
                <a
                  href={`mailto:${SITE.email}`}
                  className="mt-0.5 block text-sm font-medium text-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </li>
            {/* Adresse : alimentée par SITE.operatingAddress (src/lib/site.ts) */}
            {SITE.operatingAddress && (
              <li className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <PinIcon />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-900">{t.info.addressLabel}</h3>
                  <p className="mt-0.5 text-sm text-zinc-600">{SITE.operatingAddress}</p>
                </div>
              </li>
            )}
            <li className="flex items-start gap-4">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <BuildingIcon />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-zinc-900">{t.info.legalLabel}</h3>
                <p className="mt-0.5 text-sm text-zinc-600">{t.info.legalValue}</p>
              </div>
            </li>
          </ul>
          <p className="mt-8 border-t border-zinc-100 pt-6 text-sm text-zinc-500">{t.info.note}</p>
        </div>
      </section>
    </>
  );
}