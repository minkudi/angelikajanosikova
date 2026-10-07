import Stripe from "stripe";

// Client Stripe serveur — initialisé paresseusement à partir de l'environnement.
// Aucune clé n'est codée en dur : STRIPE_SECRET_KEY doit être fournie (local .env
// ou variables Vercel). Sans clé, l'API checkout renvoie stripe_not_configured.
export function getStripe(): Stripe | null {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return null;
  return new Stripe(key);
}
