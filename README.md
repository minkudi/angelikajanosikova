# Site web Angelika Jánošíková

Site officiel d'**Angelika Jánošíková** — entrepreneur individuel (živnosť, Slovaquie),
agence de développement web et de marketing digital. Bilingue **français / anglais**,
construit avec Next.js (App Router), hébergé sur Vercel, paiements par **Stripe Checkout**.

- Exploitation : Žihárec 209, 925 83 Žihárec, Slovaquie
- IČO : 57 935 092 (registre des sociétés slovaque)
- Contact : contact@angelikajanosikova.com *(à adapter si besoin — `src/lib/site.ts`)*
- Domaine cible : https://www.angelikajanosikova.com *(à confirmer — `src/lib/site.ts`)*

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack) + **Tailwind CSS v4**
- **i18n maison** : dictionnaires FR/EN dans `src/lib/i18n/`, URLs localisées
  (`/fr/tarifs`, `/en/pricing`…), détection de langue par cookie + `Accept-Language`
- **Stripe Checkout** via API route (paiement unique, EUR) — aucune donnée bancaire
  ne transite par le site
- **Nodemailer** (SMTP) pour le formulaire de contact
- Déploiement : **Vercel**

## Démarrage local

```bash
npm install
cp .env.example .env.local   # puis remplir les variables
npm run dev                  # http://localhost:3000 → redirection vers /fr ou /en
```

Build de production : `npm run build && npm run start`.

## Variables d'environnement

Voir `.env.example`. Aucune clé n'est codée en dur ; en local, les variables vont
dans `.env.local` (jamais committé), sur Vercel dans *Settings → Environment Variables*.

| Variable | Rôle |
|---|---|
| `STRIPE_SECRET_KEY` | **Requis** pour activer le paiement (`sk_test_…` / `sk_live_…`) |
| `STRIPE_PRICE_ID_BOUTIQUE` | Price ID du forfait Boutique Essentiel (1 200 €) |
| `STRIPE_PRICE_ID_APP` | Price ID du forfait App Sur-Mesure (2 200 €) |
| `STRIPE_PRICE_ID_FLUX` | Price ID du forfait Flux Automatisé (3 800 €) |
| `STRIPE_PRICE_ID_CROISSANCE` | Price ID du forfait Croissance Digitale (1 800 €, semestriel) |
| `NEXT_PUBLIC_SITE_URL` | URL canonique (`https://www.angelikajanosikova.com` en prod) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` / `SMTP_SECURE` | SMTP du formulaire de contact |
| `SMTP_FROM` / `CONTACT_TO` | Optionnels (expéditeur / destinataire, défaut : `SMTP_USER`) |

> Sans `STRIPE_PRICE_ID_*`, l'API crée la session Checkout avec un `price_data`
> au montant public du forfait : le bouton fonctionne avec la seule clé secrète.
> Sans `STRIPE_SECRET_KEY`, le bouton Payer affiche un bandeau « Paiement en cours
> d'activation » avec l'email de contact (jamais de bouton mort).
> Sans SMTP configuré, les soumissions du formulaire sont journalisées côté serveur.

## Activer les paiements Stripe (une fois le compte créé)

1. **Stripe Dashboard → Product catalog** : créer 4 produits (un par forfait) aux
   prix indiqués, en euros, paiement **one-time** (pas d'abonnement).
2. Copier chaque `price_…` dans les variables `STRIPE_PRICE_ID_*` (Vercel + local).
3. Copier la clé secrète dans `STRIPE_SECRET_KEY`.
4. **Test mode** : payer un forfait avec la carte de test `4242 4242 4242 4242`,
   vérifier la redirection retour `?success=1` sur la page Paiement.
5. Passer les clés en **live** et activer les reçus par email dans
   *Settings → Emails* (utile pour la conformité et le remboursement 14 jours).
6. Les remboursements se font depuis le Dashboard (Payments → refund) sur le moyen
   de paiement d'origine, conformément à la page « Politique de remboursement ».

> **Conformité Stripe** : renseigner dans le Dashboard (*Settings → Public details*)
> le nom légal **Angelika Jánošíková** et l'adresse Žihárec 209, 925 83 Žihárec,
> Slovaquie — ils s'afficheront sur les pages de paiement Stripe.

## Déploiement Vercel + domaine

1. Pousser ce repo sur GitHub (fait) puis **Vercel → Add New Project → Import**.
2. Renseigner les variables d'environnement (cf. tableau ci-dessus) pour
   Production et Preview.
3. Une fois le premier déploiement passé : **Settings → Domains → Add** →
   le domaine choisi (ex. `angelikajanosikova.com` + `www`).
4. Chez le registrar, créer les enregistrements DNS indiqués par Vercel
   (Vercel affiche les valeurs exactes à copier — faire foi en cas de différence).
5. Le HTTPS (certificat Let's Encrypt) est émis automatiquement par Vercel.
6. Mettre `NEXT_PUBLIC_SITE_URL=https://www.angelikajanosikova.com` une fois le
   domaine actif (et ajuster `src/lib/site.ts` si le domaine diffère).

## Structure

```
src/
├── proxy.ts                     # redirection de langue (/ → /fr ou /en)
├── app/
│   ├── [locale]/[[...slug]]/    # toutes les pages (URLs localisées FR/EN)
│   ├── api/checkout/route.ts    # création de session Stripe Checkout
│   ├── api/contact/route.ts     # formulaire de contact (Nodemailer)
│   ├── sitemap.ts / robots.ts / icon.svg
├── components/
│   ├── Header / Footer / Logo / LocaleSwitcher / icons
│   └── pages/                   # composants de pages + registre de routage
└── lib/
    ├── i18n/                    # config, routes localisées, dictionnaires fr/en
    ├── packages.ts              # grille tarifaire (montants + env vars Stripe)
    ├── site.ts                  # identité légale affichée (conformité Stripe)
    ├── stripe.ts / smtp.ts      # clients serveur (lecture env uniquement)
    └── format.ts                # formatage des prix en euros
```

## Pages

Accueil · Services (4 offres) · Tarifs (4 forfaits à prix fixes) · Paiement
(Stripe Checkout) · Contact (formulaire + coordonnées) · À propos (corporate) ·
Mentions légales & CGV · Politique de confidentialité · Politique de remboursement
(14 jours).

## Conformité — récapitulatif

- ✅ Nom légal **Angelika Jánošíková** + IČO 57 935 092 visibles (footer, À propos,
  mentions légales)
- ✅ Description claire de l'activité (page Services + Mentions légales)
- ✅ Tarifs publics affichés (page Tarifs) et cohérents avec les Price IDs Stripe
- ✅ CGV (droit slovaque), politique de confidentialité et politique de
  remboursement en pages dédiées
- ✅ Bouton de paiement fonctionnel (Stripe Checkout via variables d'environnement)
- ✅ HTTPS automatique sur Vercel + domaine propre

## À compléter plus tard (aucun placeholder visible sur le site)

- **Email** : `contact@angelikajanosikova.com` est une proposition — si l'adresse
  réelle diffère, la changer dans `src/lib/site.ts` et `src/lib/smtp.ts`.
- **Numéro WhatsApp** : le renseigner dans `src/lib/site.ts` (`whatsappNumber`)
  pour afficher le bouton flottant.
- **Textes des forfaits** : le détail des prestations incluses est éditable dans
  `src/lib/i18n/fr.ts` et `en.ts` (`packages.*.features`).
