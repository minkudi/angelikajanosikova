"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { href } from "@/lib/i18n/routes";
import { useCart } from "@/components/cart/CartProvider";
import { Logo } from "./Logo";
import LocaleSwitcher from "./LocaleSwitcher";
import { CartIcon, CloseIcon, MenuIcon } from "./icons";

export default function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() ?? `/${locale}`;
  const [open, setOpen] = useState(false);
  const cart = useCart();

  const links = [
    { key: "services" as const, label: dict.nav.services },
    { key: "pricing" as const, label: dict.nav.pricing },
    { key: "about" as const, label: dict.nav.about },
    { key: "contact" as const, label: dict.nav.contact },
  ];

  const isActive = (pageKey: "services" | "pricing" | "about" | "contact") => {
    const target = href(pageKey, locale);
    return pathname === target || pathname.startsWith(`${target}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur-md">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link
          href={href("home", locale)}
          className="text-ink transition-opacity hover:opacity-80"
          aria-label="Angelika Jánošíková — Accueil"
          onClick={() => setOpen(false)}
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label={dict.nav.menu}>
          {links.map((l) => (
            <Link
              key={l.key}
              href={href(l.key, locale)}
              className={`text-sm font-medium transition-colors ${
                isActive(l.key)
                  ? "text-accent"
                  : "text-zinc-600 hover:text-ink"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher locale={locale} label={dict.localeSwitcher.label} />
          <button
            type="button"
            onClick={cart.openCart}
            className="relative inline-flex size-10 cursor-pointer items-center justify-center rounded-full border border-zinc-200 text-ink transition-colors hover:border-zinc-400"
            aria-label={dict.cart.menuLabel}
            title={dict.cart.menuLabel}
          >
            <CartIcon />
            {cart.ready && cart.count > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
                {cart.count}
              </span>
            )}
          </button>
          <Link href={href("contact", locale)} className="btn btn-primary">
            {dict.nav.cta}
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher locale={locale} label={dict.localeSwitcher.label} />
          <button
            type="button"
            onClick={cart.openCart}
            className="relative inline-flex size-10 cursor-pointer items-center justify-center rounded-xl border border-zinc-200 text-ink"
            aria-label={dict.cart.menuLabel}
          >
            <CartIcon />
            {cart.ready && cart.count > 0 && (
              <span className="absolute -top-1 -right-1 flex size-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-white">
                {cart.count}
              </span>
            )}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-ink"
            aria-expanded={open}
            aria-label={open ? dict.nav.close : dict.nav.menu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="border-t border-zinc-200/70 bg-white px-5 pt-2 pb-5 md:hidden"
          aria-label={dict.nav.menu}
        >
          {links.map((l) => (
            <Link
              key={l.key}
              href={href(l.key, locale)}
              onClick={() => setOpen(false)}
              className={`block rounded-lg px-3 py-3 text-base font-medium ${
                isActive(l.key) ? "text-accent" : "text-zinc-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={href("contact", locale)}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-3 w-full"
          >
            {dict.nav.cta}
          </Link>
        </nav>
      )}
    </header>
  );
}
