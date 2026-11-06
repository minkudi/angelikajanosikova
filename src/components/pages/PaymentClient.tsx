"use client";

import { useEffect, useRef } from "react";
import type { Dictionary } from "@/lib/i18n/fr";
import { CATEGORY_ORDER } from "@/lib/packages";
import { useCart } from "@/components/cart/CartProvider";
import type { PackageView } from "./shared";
import { PlusIcon } from "@/components/icons";

export default function PaymentClient({ copy, cartCopy, categories, packages }: {
  copy: Dictionary["payment"];
  cartCopy: Dictionary["cart"];
  categories: Dictionary["pricing"]["categories"];
  packages: PackageView[];
}) {
  const cart = useCart();
  const handled = useRef(false);

  useEffect(() => {
    if (!cart.ready || handled.current) return;
    handled.current = true;
    const url = new URL(window.location.href);
    const pkg = packages.find((item) => item.id === url.searchParams.get("package"));
    if (pkg) {
      if (!cart.has(pkg.id)) cart.add(pkg.id);
      cart.openCart();
      url.searchParams.delete("package");
      window.history.replaceState(window.history.state, "", url);
    }
  }, [cart, packages]);

  return (
    <div>
      <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-zinc-600">{copy.emailNote}</p>
      {CATEGORY_ORDER.map((category) => (
        <section key={category} className="mb-12">
          <h2 className="font-display text-2xl font-bold text-ink">{categories[category].name}</h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {packages.filter((pkg) => pkg.category === category).map((pkg) => (
              <div key={pkg.id} className="card flex flex-col p-7">
                <h3 className="font-display text-lg font-bold text-ink">{pkg.name}</h3>
                <p className="mt-1 flex-1 text-sm text-zinc-500">{pkg.tagline}</p>
                <p className="mt-5 font-display text-3xl font-bold tracking-tight text-ink">{pkg.priceLabel}</p>
                <button type="button" onClick={() => { cart.add(pkg.id); cart.openCart(); }} className="btn btn-primary mt-6 w-full">
                  <PlusIcon className="size-4" /> {cartCopy.add}
                </button>
              </div>
            ))}
          </div>
        </section>
      ))}
      <p className="text-center text-xs text-zinc-400">{copy.vatNote}</p>
    </div>
  );
}
