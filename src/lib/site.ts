// Constantes légales et de contact de l'entreprise — affichées sur tout le site.
export const SITE = {
  legalName: "Angelika Jánošíková",
  jurisdiction: "Slovak Republic",
  jurisdictionFr: "Slovaquie",
  email: "contact@angelikajanosikova.com",
  // Domaine cible. Surchargé par NEXT_PUBLIC_SITE_URL (ex. https://www.angelikajanosikova.com).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.angelikajanosikova.com",
  // Numéro d'identification de l'entrepreneur (IČO — registre slovaque).
  // Ligne affichée sur la page À propos.
  registrationNumber: "IČO 57 935 092",

  // ─── ADRESSE ──────────────────────────────────────────────────────────────
  // Affichée dans le footer, sur la page Contact, la page À propos et les
  // mentions légales tant que la valeur est renseignée.
  operatingAddress: "Žihárec 209, 925 83 Žihárec, Slovaquie",

  // ─── NUMÉRO WHATSAPP À RENSEIGNER ICI ─────────────────────────────────────
  // Format international sans « + » ni espaces ni tirets :
  //   ex. "421901234567" (Slovaquie)
  // Vide = le bouton WhatsApp n'est pas affiché.
  whatsappNumber: "",
} as const;
