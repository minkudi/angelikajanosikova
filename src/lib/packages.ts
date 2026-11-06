// Catalogue produits — prix publics fixes en centimes d'euro.
// 4 catégories : guides & outils digitaux, formations, certifications, conseil.
// La commande s'effectue par email (voir CartDrawer) en attendant l'intégration
// du processeur de paiement.

export type CategoryId = "guides" | "formations" | "certifications" | "conseil";

export const CATEGORY_ORDER: readonly CategoryId[] = [
  "guides",
  "formations",
  "certifications",
  "conseil",
];

export const PACKAGES: {
  id: PackageId;
  amount: number; // centimes d'euro
  category: CategoryId;
}[] = [
  // ——— Guides & outils digitaux ———
  { id: "guide-strategie-digitale", amount: 900, category: "guides" },
  { id: "checklist-gestion-administrative", amount: 1900, category: "guides" },
  { id: "manuel-leadership-situationnel", amount: 2400, category: "guides" },
  { id: "analyse-swot", amount: 2480, category: "guides" },
  { id: "templates-factures", amount: 2900, category: "guides" },
  { id: "plan-marketing-12-mois", amount: 2990, category: "guides" },
  { id: "pack-outils-excel", amount: 6000, category: "guides" },
  { id: "strategie-reseaux-b2b", amount: 6900, category: "guides" },

  // ——— Formations en ligne ———
  { id: "formation-projet-agile", amount: 4900, category: "formations" },
  { id: "webinaire-communication-crise", amount: 5900, category: "formations" },
  { id: "module-rh-digitale", amount: 6800, category: "formations" },
  { id: "programme-lean-management", amount: 8500, category: "formations" },
  { id: "atelier-planification-strategique", amount: 9900, category: "formations" },
  { id: "master-class-negociation", amount: 11500, category: "formations" },
  { id: "culture-entreprise", amount: 12900, category: "formations" },
  { id: "formation-gestion-crise", amount: 13900, category: "formations" },
  { id: "programme-leader-inclusif", amount: 26900, category: "formations" },
  { id: "formation-supply-chain", amount: 28900, category: "formations" },
  { id: "master-leadership", amount: 34900, category: "formations" },

  // ——— Certifications ———
  { id: "certification-okr", amount: 9500, category: "certifications" },
  { id: "certification-iso-9001", amount: 18900, category: "certifications" },
  { id: "certification-agile-master", amount: 29900, category: "certifications" },
  { id: "certification-manager", amount: 39000, category: "certifications" },

  // ——— Conseil & accompagnement ———
  { id: "audit-interne-processus", amount: 6500, category: "conseil" },
  { id: "diagnostic-strategique", amount: 7900, category: "conseil" },
  { id: "coaching-management-individuel", amount: 10500, category: "conseil" },
  { id: "audit-conformite-rgpd", amount: 10900, category: "conseil" },
  { id: "consulting-restructuration", amount: 14900, category: "conseil" },
  { id: "programme-transformation-digitale", amount: 17900, category: "conseil" },
  { id: "coaching-equipe", amount: 21900, category: "conseil" },
  { id: "strategie-marque", amount: 23900, category: "conseil" },
  { id: "consulting-expansion", amount: 29000, category: "conseil" },
  { id: "transformation-processus-finance", amount: 31900, category: "conseil" },
  { id: "strategie-e-commerce", amount: 37900, category: "conseil" },
  { id: "consulting-fusions", amount: 39900, category: "conseil" },
  { id: "programme-transformation-organisationnelle", amount: 47900, category: "conseil" },
  { id: "audit-strategique-complet", amount: 65000, category: "conseil" },
];

export type PackageId = keyof typeof import("@/lib/i18n/fr").fr.packages;

export const PACKAGE_IDS = PACKAGES.map((p) => p.id);

export function findPackage(id: string) {
  return PACKAGES.find((p) => p.id === id);
}

// Prix le plus bas d'une catégorie — utilisé pour les cartes « dès X € ».
export function categoryMinAmount(category: CategoryId): number {
  return Math.min(
    ...PACKAGES.filter((p) => p.category === category).map((p) => p.amount),
  );
}
