"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import { formatPrice } from "@/lib/format";
import { useCart, MAX_QTY } from "./CartProvider";
import type { PackageView } from "@/components/pages/shared";
import { CloseIcon, LockIcon, MinusIcon, PlusIcon, TrashIcon } from "@/components/icons";

type CartCopy = Dictionary["cart"];
type PaymentCopy = Dictionary["payment"];

// Drawer latéral du panier : s'ouvre à l'ajout d'un forfait et via le bouton
// panier du header. Responsive (pleine largeur sur mobile), fermeture par la
// croix, le fond ou la touche Échap ; paiement de l'ensemble via Stripe.
export default function CartDrawer({
  locale,
  cartCopy,
  paymentCopy,
  packages,
  contactEmail,
}: {
  locale: Locale;
  cartCopy: CartCopy;
  paymentCopy: PaymentCopy;
  packages: PackageView[];
  contactEmail: string;
}) {
  const cart = useCart();
  const [checkingOut, setCheckingOut] = useState(false);
  const [error, setError] = useState<"error" | "not_configured" | null>(null);

  // Échap pour fermer + verrouille le défilement de la page quand ouvert.
  useEffect(() => {
    if (!cart.isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") cart.closeCart();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [cart.isOpen, cart.closeCart]);

  async function checkout() {
    setError(null);
    setCheckingOut(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cart.items.map((it) => ({ packageId: it.id, quantity: it.qty })),
          locale,
        }),
      });
      const data: { url?: string; error?: string } | null = await res
        .json()
        .catch(() => null);
      if (res.ok && data?.url) {
        window.location.href = data.url;
        return; // redirection vers Stripe Checkout
      }
      setError(
        res.status === 503 || data?.error === "stripe_not_configured"
          ? "not_configured"
          : "error",
      );
    } catch {
      setError("error");
    }
    setCheckingOut(false);
  }

  return (
    <>
      {/* Fond assombri */}
      <div
        aria-hidden="true"
        onClick={cart.closeCart}
        className={`fixed inset-0 z-[65] bg-ink/50 backdrop-blur-[2px] transition-opacity duration-300 ${
          cart.isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      {/* Panneau latéral */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={cartCopy.title}
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
          cart.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
          <h2 className="font-display text-lg font-bold text-ink">{cartCopy.title}</h2>
          <button
            type="button"
            onClick={cart.closeCart}
            aria-label={cartCopy.remove}
            title={cartCopy.remove}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-ink"
          >
            <CloseIcon />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {error === "error" && (
            <p className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {paymentCopy.error}
            </p>
          )}
          {error === "not_configured" && (
            <div className="mb-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              <p className="font-semibold">{paymentCopy.notConfiguredTitle}</p>
              <p className="mt-1">
                {paymentCopy.notConfigured}{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="font-semibold underline underline-offset-2"
                >
                  {contactEmail}
                </a>
              </p>
            </div>
          )}

          {cart.items.length === 0 ? (
            <p className="text-sm text-zinc-500">{cartCopy.empty}</p>
          ) : (
            <ul className="divide-y divide-zinc-100">
              {cart.items.map((item) => {
                const pkg = packages.find((p) => p.id === item.id);
                if (!pkg) return null;
                return (
                  <li key={item.id} className="flex items-center gap-3 py-4">
                    <div className="min-w-0 flex-1">
                      <h3 className="text-sm font-semibold text-zinc-900">{pkg.name}</h3>
                      <p className="text-xs text-zinc-500">
                        {pkg.priceLabel}
                        {item.qty > 1 && ` × ${item.qty}`}{" "}
                        <span className="font-medium text-zinc-700">
                          = {formatPrice(locale, pkg.amount * item.qty)}
                        </span>
                      </p>
                    </div>
                    <div
                      className="flex items-center gap-1 rounded-full border border-zinc-200 p-0.5"
                      role="group"
                      aria-label={cartCopy.quantity}
                    >
                      <button
                        type="button"
                        aria-label={cartCopy.decrease}
                        onClick={() => cart.setQty(item.id, item.qty - 1)}
                        className="flex size-7 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100"
                      >
                        <MinusIcon className="size-3.5" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold tabular-nums">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        aria-label={cartCopy.increase}
                        disabled={item.qty >= MAX_QTY}
                        onClick={() => cart.setQty(item.id, item.qty + 1)}
                        className="flex size-7 cursor-pointer items-center justify-center rounded-full text-zinc-600 transition-colors hover:bg-zinc-100 disabled:opacity-40"
                      >
                        <PlusIcon className="size-3.5" />
                      </button>
                    </div>
                    <button
                      type="button"
                      aria-label={cartCopy.remove}
                      title={cartCopy.remove}
                      onClick={() => cart.remove(item.id)}
                      className="cursor-pointer text-zinc-400 transition-colors hover:text-red-600"
                    >
                      <TrashIcon className="size-4.5" />
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {cart.items.length > 0 && (
          <footer className="border-t border-zinc-100 px-6 py-5">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-zinc-900">{cartCopy.total}</span>
              <span className="font-display text-2xl font-bold text-ink">
                {formatPrice(locale, cart.totalCents)}
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={checkout}
                disabled={checkingOut}
                className="btn btn-primary flex-1 py-3"
              >
                {checkingOut ? cartCopy.checkingOut : cartCopy.checkout}
              </button>
              <button type="button" onClick={cart.clear} className="btn btn-ghost">
                {cartCopy.clear}
              </button>
            </div>
            <p className="mt-4 flex items-center gap-2 text-xs text-zinc-500">
              <LockIcon className="size-3.5 text-accent" />
              {paymentCopy.securityNote}
            </p>
          </footer>
        )}
      </aside>
    </>
  );
}
