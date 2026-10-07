import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { SITE } from "@/lib/site";
import PaymentClient from "./PaymentClient";
import { PageHero, packagesView } from "./shared";

export default function PaymentPage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const t = dict.payment;

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} subtitle={t.hero.subtitle} />

      <section className="wrap py-14 sm:py-16">
        <ol
          className="mx-auto mb-12 flex max-w-3xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-center sm:gap-6"
          data-reveal
        >
          {t.steps.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink font-display text-xs font-bold text-white">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-zinc-700">{step}</span>
              {i < t.steps.length - 1 && (
                <span
                  className="ml-2 hidden h-px w-8 bg-zinc-200 sm:block"
                  aria-hidden="true"
                />
              )}
            </li>
          ))}
        </ol>

        <PaymentClient
          locale={locale}
          copy={t}
          cartCopy={dict.cart}
          packages={packagesView(locale, dict)}
          contactEmail={SITE.email}
        />
      </section>
    </>
  );
}
