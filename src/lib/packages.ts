// Grille tarifaire publique — montants fixes en centimes d'euro (tarifs affichés TTC-like nets).
export type PackageId = "boutique" | "app" | "flux" | "croissance";

export const PACKAGES: {
  id: PackageId;
  amount: number; // centimes d'euro
}[] = [
  { id: "boutique", amount: 120000 },
  { id: "app", amount: 220000 },
  { id: "flux", amount: 380000 },
  { id: "croissance", amount: 180000 },
];

export const PACKAGE_IDS = PACKAGES.map((p) => p.id);

export function findPackage(id: string) {
  return PACKAGES.find((p) => p.id === id);
}
