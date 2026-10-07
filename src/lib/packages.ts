// Grille tarifaire publique — montants fixes en centimes d'euro (tarifs affichés TTC-like nets).
// Le Price ID Stripe de chaque forfait est lu depuis l'environnement au moment du paiement ;
// si absent, l'API Stripe crée la session avec un price_data inline (montant ci-dessous).
export type PackageId = "boutique" | "app" | "flux" | "croissance";

export const PACKAGES: {
  id: PackageId;
  amount: number; // centimes d'euro
  priceIdEnv: string;
}[] = [
  { id: "boutique", amount: 120000, priceIdEnv: "STRIPE_PRICE_ID_BOUTIQUE" },
  { id: "app", amount: 220000, priceIdEnv: "STRIPE_PRICE_ID_APP" },
  { id: "flux", amount: 380000, priceIdEnv: "STRIPE_PRICE_ID_FLUX" },
  { id: "croissance", amount: 180000, priceIdEnv: "STRIPE_PRICE_ID_CROISSANCE" },
];

export const PACKAGE_IDS = PACKAGES.map((p) => p.id);

export function findPackage(id: string) {
  return PACKAGES.find((p) => p.id === id);
}
