"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import type { PackageId } from "@/lib/packages";
import { useCart } from "@/components/cart/CartProvider";
import type { PackageView } from "./shared";
import { CheckIcon, LockIcon, PlusIcon } from "@/components/icons";

type PaymentCopy = Dictionary["payment"];
type CartCopy = Dictionary["cart"];

export default function PaymentClient({
  locale,
  copy,
  cartCopy,
  packages,
  contactEmail,
}: {
  locale: Locale;
  copy: PaymentCopy;
  cartCopy: CartCopy;
  packages: PackageView[];
  contactEmail: string;
}) {
  const cart = useCart();
  const [success, setSuccess] = useState(false);
  const [canceled, setCanceled] = useState(false);

  // Bouton momentanément marqué « ajouté » après un clic (feedback visuel).
  const [justAdded, setJustAdded] = useState<PackageId | null>(null);
  const addTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lecture directe de l'URL côté client : pas de useSearchParams, la page
  // s'affiche donc instantanément (plus besoin d'un second rafraîchissement).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSuccess(params.get("success") === "1");
    if (params.get("success") === "1") cart.clear();
    else setCanceled(params.get("canceled") === "1");

    const pkgParam = params.get("package");
    if (pkgParam && packages.some((p) => p.id === pkgParam)) {
      // « Choisir ce forfait » (depuis la page Tarifs) : on s'assure qu'il est
      // dans le panier et on ouvre le drawer pour un retour visuel immédiat.
      if (!cart.has(pkgParam as PackageId)) cart.add(pkgParam as PackageId);
      cart.openCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (addTimer.current) clearTimeout(addTimer.current);
    };
  }, []);

  function addToCart(id: PackageId) {
    cart.add(id);
    setJustAdded(id);
    if (addTimer.current) clearTimeout(addTimer.current);
    addTimer.current = setTimeout(() => setJustAdded(null), 1600);
    cart.openCart();
  }

  return (
    <div>
      {success && (
        <p className="mx-auto mb-8 flex max-w-3xl items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-sm text-emerald-800">
          <CheckIcon className="mt-0.5 size-4 shrink-0 text-emerald-600" />
          {copy.success}
        </p>
      )}
      {canceled && !success && (
        <p className="mx-auto mb-8 max-w-3xl rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-800">
          {copy.canceled}
        </p>
      )}

      {/* ——— Forfaits ——— */}
      <div className="grid gap-5 sm:grid-cols-2">
        {packages.map((pkg) => {
          const added = justAdded === pkg.id;
          return (
            <div key={pkg.id} className="card flex flex-col p-7">
              <h2 className="font-display text-lg font-bold text-ink">{pkg.name}</h2>
              <p className="mt-1 text-sm text-zinc-500">{pkg.tagline}</p>
              <p className="mt-5 font-display text-4xl font-bold tracking-tight text-ink">
                {pkg.priceLabel}
              </p>
              {pkg.periodLabel && (
                <p className="mt-1 text-xs font-medium text-accent">{pkg.periodLabel}</p>
              )}
              <button
                type="button"
                onClick={() => addToCart(pkg.id)}
                className={`btn mt-6 w-full ${added ? "btn-dark" : "btn-primary"}`}
              >
                {added ? (
                  <>
                    <CheckIcon className="size-4" />
                    {cartCopy.added}
                  </>
                ) : (
                  <>
                    <PlusIcon className="size-4" />
                    {cartCopy.add}
                  </>
                )}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-zinc-600">
          <LockIcon className="size-4 text-accent" />
          {copy.securityNote}
        </p>
        <p className="mt-2 text-xs text-zinc-400">{copy.cardsNote}</p>
        <p className="mt-1 text-xs text-zinc-400">{copy.vatNote}</p>
      </div>
    </div>
  );
}
