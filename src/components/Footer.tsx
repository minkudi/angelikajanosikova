import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { SITE } from "@/lib/site";
import { LogoMark } from "./Logo";
import { MailIcon, PinIcon } from "./icons";

// Évalué une fois par build/server : sûr pour les pages prérendues statiquement.
const YEAR = new Date().getFullYear();

export default function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {

  const serviceLinks = (["boutique", "app", "flux", "croissance"] as const).map((id) => ({
    label: dict.packages[id].name,
    href: href("services", locale),
  }));

  const navLinks = [
    { label: dict.nav.home, href: href("home", locale) },
    { label: dict.nav.services, href: href("services", locale) },
    { label: dict.nav.pricing, href: href("pricing", locale) },
    { label: dict.nav.payment, href: href("payment", locale) },
    { label: dict.nav.about, href: href("about", locale) },
    { label: dict.nav.contact, href: href("contact", locale) },
  ];

  const legalLinks = [
    { label: "Mentions légales & CGV", href: href("legal", locale) },
    { label: "Politique de confidentialité", href: href("privacy", locale) },
    { label: "Politique de remboursement", href: href("refund", locale) },
  ];

  return (
    <footer className="bg-ink text-zinc-300">
      <div className="wrap grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <div className="flex items-center gap-2.5 text-white">
            <LogoMark inverted />
            <span className="font-display text-lg font-bold tracking-tight sm:text-xl">Angelika Jánošíková</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-zinc-400">
            {dict.footer.tagline}
          </p>
          <p className="mt-6 text-xs text-zinc-500">{dict.footer.paymentsNote}</p>
        </div>

        <nav aria-label={dict.footer.servicesTitle}>
          <h2 className="text-sm font-semibold text-white">{dict.footer.servicesTitle}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-zinc-400 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={dict.footer.navTitle}>
          <h2 className="text-sm font-semibold text-white">{dict.footer.navTitle}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-zinc-400 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold text-white">{dict.footer.contactTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MailIcon className="mt-0.5 size-4 shrink-0 text-accent-light" />
              <a
                href={`mailto:${SITE.email}`}
                className="text-zinc-400 transition-colors hover:text-white"
              >
                {SITE.email}
              </a>
            </li>
            {/* Affiché uniquement quand SITE.operatingAddress est renseignée (src/lib/site.ts) */}
            {SITE.operatingAddress && (
              <li className="flex items-start gap-2.5">
                <PinIcon className="mt-0.5 size-4 shrink-0 text-accent-light" />
                <span className="text-zinc-400">
                  <span className="block font-medium text-zinc-300">{dict.footer.addressLabel}</span>
                  {SITE.operatingAddress}
                </span>
              </li>
            )}
          </ul>
          <h2 className="mt-6 text-sm font-semibold text-white">{dict.footer.legalTitle}</h2>
          <ul className="mt-4 space-y-2.5 text-sm">
            {legalLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-zinc-400 transition-colors hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap flex flex-col gap-2 py-6 text-xs leading-relaxed text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {YEAR} {SITE.legalName}. {dict.footer.rights}
          </p>
          {dict.footer.legalLine && (
            <p className="sm:text-right">{dict.footer.legalLine}</p>
          )}
        </div>
      </div>
    </footer>
  );
}
