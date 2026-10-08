import { NextResponse, type NextRequest } from "next/server";
import { findPackage } from "@/lib/packages";
import { normalizeLocale } from "@/lib/i18n/config";

type IncomingItem = { packageId?: unknown; quantity?: unknown };

// Le paiement en ligne est temporairement désactivé le temps d'intégrer le
// nouveau processeur de paiement. L'API reste compatible avec le panier : elle
// valide la payload puis renvoie un code "payment_not_configured" que l'interface
// affiche comme un bandeau "Paiement en cours d'activation".
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

  const incoming: IncomingItem[] =
    Array.isArray(data.items) && data.items.length > 0
      ? data.items
      : data.packageId
        ? [{ packageId: data.packageId, quantity: 1 }]
        : [];

  if (incoming.length === 0 || incoming.length > 20) {
    return NextResponse.json({ error: "invalid_package" }, { status: 400 });
  }

  for (const raw of incoming) {
    const pkg = typeof raw.packageId === "string" ? findPackage(raw.packageId) : undefined;
    if (!pkg) return NextResponse.json({ error: "invalid_package" }, { status: 400 });
  }

  // Locale conservée pour d'éventuelles redirections futures.
  normalizeLocale(data.locale);

  return NextResponse.json({ error: "payment_not_configured" }, { status: 503 });
}
