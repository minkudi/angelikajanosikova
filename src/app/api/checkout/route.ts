import { NextResponse, type NextRequest } from "next/server";
import { getStripe } from "@/lib/stripe";
import { findPackage } from "@/lib/packages";
import { normalizeLocale } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { href } from "@/lib/i18n/routes";

// Crée une session Stripe Checkout (paiement unique, EUR) pour une liste de
// forfaits — le panier peut contenir plusieurs forfaits et quantités.
// Clés lues depuis l'environnement uniquement :
//   STRIPE_SECRET_KEY                          (obligatoire)
//   STRIPE_PRICE_ID_BOUTIQUE / _APP / _FLUX / _CROISSANCE   (recommandé)
// Sans STRIPE_PRICE_ID_*, la session est créée avec des price_data inline aux
// montants publics — le bouton reste donc fonctionnel avec la seule clé secrète.
type IncomingItem = { packageId?: unknown; quantity?: unknown };

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const data = (body ?? {}) as {
    items?: IncomingItem[];
    packageId?: string;
    locale?: string;
  };
  const locale = normalizeLocale(data.locale);

  // Format panier : { items: [{ packageId, quantity }] } — compat. mono-forfait.
  const incoming: IncomingItem[] =
    Array.isArray(data.items) && data.items.length > 0
      ? data.items
      : data.packageId
        ? [{ packageId: data.packageId, quantity: 1 }]
        : [];
  if (incoming.length === 0 || incoming.length > 20) {
    return NextResponse.json({ error: "invalid_package" }, { status: 400 });
  }

  const items: { id: string; quantity: number }[] = [];
  for (const raw of incoming) {
    const pkg = typeof raw.packageId === "string" ? findPackage(raw.packageId) : undefined;
    if (!pkg) return NextResponse.json({ error: "invalid_package" }, { status: 400 });
    const rawQty = typeof raw.quantity === "number" ? Math.floor(raw.quantity) : 1;
    const quantity = Math.min(Math.max(Number.isFinite(rawQty) ? rawQty : 1, 1), 10);
    const existing = items.find((it) => it.id === pkg.id);
    if (existing) existing.quantity = Math.min(existing.quantity + quantity, 10);
    else items.push({ id: pkg.id, quantity });
  }

  const stripe = getStripe();
  if (!stripe) return NextResponse.json({ error: "stripe_not_configured" }, { status: 503 });

  const dict = getDictionary(locale);
  const origin =
    process.env.NEXT_PUBLIC_SITE_URL ?? req.headers.get("origin") ?? req.nextUrl.origin;
  const paymentPath = href("payment", locale);

  try {
    const lineItems: import("stripe").Stripe.Checkout.SessionCreateParams.LineItem[] = items.map(
      (item) => {
        const pkg = findPackage(item.id)!;
        const copy = dict.packages[pkg.id];
        const priceId = process.env[pkg.priceIdEnv];
        return priceId
          ? { price: priceId, quantity: item.quantity }
          : {
              quantity: item.quantity,
              price_data: {
                currency: "eur",
                unit_amount: pkg.amount,
                product_data: { name: `${copy.name} — Angelika Jánošíková`, description: copy.tagline },
              },
            };
      },
    );

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      locale: locale === "fr" ? "fr" : "en",
      metadata: {
        items: items.map((it) => `${it.id}x${it.quantity}`).join(",").slice(0, 499),
        locale,
      },
      success_url: `${origin}${paymentPath}?success=1`,
      cancel_url: `${origin}${paymentPath}?canceled=1`,
    });

    if (!session.url) {
      return NextResponse.json({ error: "stripe_error" }, { status: 500 });
    }
    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[checkout] Stripe error:", error);
    return NextResponse.json({ error: "stripe_error" }, { status: 500 });
  }
}
