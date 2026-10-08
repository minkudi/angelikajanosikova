// Dictionnaire français — fichier de référence : la structure de ce fichier
// définit le type Dictionary que en.ts doit respecter à l'identique.

// Blocs des pages légales : paragraphe ou liste à puces.
export type LegalBlock = { type: "p"; text: string } | { type: "ul"; items: string[] };
export type LegalSection = { heading: string; blocks: LegalBlock[] };

export const fr = {
  meta: {
    siteName: "Angelika Jánošíková",
    tagline: "Agence de développement web & marketing digital",
    siteDescription:
      "Angelika Jánošíková conçoit des sites e-commerce, des applications web, des outils d'automatisation et pilote votre marketing digital. Forfaits à prix fixes, paiement sécurisé.",
  },

  nav: {
    home: "Accueil",
    services: "Services",
    pricing: "Tarifs",
    payment: "Paiement",
    about: "À propos",
    contact: "Contact",
    cta: "Démarrer un projet",
    menu: "Menu",
    close: "Fermer",
  },

  localeSwitcher: { label: "Changer de langue" },

  footer: {
    tagline: "Agence de développement web et de marketing digital : sites e-commerce, applications web, automatisation, croissance.",
    servicesTitle: "Nos services",
    navTitle: "Navigation",
    legalTitle: "Informations légales",
    contactTitle: "Contact",
    addressLabel: "Adresse",
    paymentsNote: "Paiements sécurisés.",
    // Ligne légale optionnelle en footer (vide = non affichée).
    legalLine: "Angelika Jánošíková — živnosť (entrepreneur individuel), IČO 57 935 092, Slovaquie.",
    rights: "Tous droits réservés.",
  },

  cart: {
    menuLabel: "Panier",
    title: "Votre panier",
    empty: "Votre panier est vide. Ajoutez un forfait pour démarrer votre projet.",
    add: "Ajouter au panier",
    added: "Ajouté au panier",
    quantity: "Quantité",
    decrease: "Réduire la quantité",
    increase: "Augmenter la quantité",
    remove: "Retirer du panier",
    clear: "Vider le panier",
    total: "Total",
    checkout: "Passer au paiement",
    checkingOut: "Redirection vers le paiement…",
  },

  whatsapp: {
    label: "Discuter sur WhatsApp",
    message: "Bonjour Angelika Jánošíková ! Je souhaite discuter d'un projet.",
  },

  notFound: {
    title: "Page introuvable",
    text: "Cette page n'existe pas ou a été déplacée.",
    back: "Retour à l'accueil",
  },

  // ——— Forfaits (partagés : accueil, tarifs, paiement, services) ———
  packages: {
    boutique: {
      name: "Boutique Essentiel",
      tagline: "Site e-commerce clé en main",
      features: [
        "Boutique en ligne complète : catalogue, panier, paiement en ligne",
        "Design sur mesure, responsive mobile / tablette / ordinateur",
        "Tableau de bord simple pour gérer vos produits et commandes",
        "Référencement de base et mise en ligne accompagnée",
      ],
    },
    app: {
      name: "App Sur-Mesure",
      tagline: "Application web développée pour vous",
      features: [
        "Application web sur-mesure selon votre cahier des charges",
        "Comptes utilisateurs, rôles et espace d'administration",
        "Base de données, API et intégrations tierces (paiement, email…)",
        "Recette complète et documentation de prise en main",
      ],
    },
    flux: {
      name: "Flux Automatisé",
      tagline: "Automatisation & traitement de données",
      features: [
        "Audit de vos processus et identification des gains possibles",
        "Automatisation des tâches répétitives entre vos outils",
        "Pipelines de collecte, de nettoyage et de traitement de données",
        "Tableaux de bord et rapports générés automatiquement",
      ],
    },
    croissance: {
      name: "Croissance Digitale",
      tagline: "Marketing digital — forfait semestriel",
      period: "6 mois de prestation",
      features: [
        "Stratégie digitale et plan d'action sur 6 mois",
        "Campagnes publicitaires en ligne (search et réseaux sociaux)",
        "Optimisation SEO de votre site et de vos contenus",
        "Animation des réseaux sociaux et reporting mensuel",
      ],
    },
  },

  home: {
    meta: {
      title: "Angelika Jánošíková — Agence web & marketing digital",
      description:
        "Sites e-commerce, applications web, automatisation et marketing digital. Forfaits à prix fixes affichés, paiement sécurisé, remboursement sous 14 jours.",
    },
    hero: {
      eyebrow: "Agence de développement web & marketing digital",
      titleA: "Des produits digitaux",
      titleAccent: "qui font grandir",
      titleB: "votre entreprise.",
      subtitle:
        "Angelika Jánošíková conçoit et développe des sites e-commerce, des applications web sur-mesure, des outils d'automatisation et des campagnes de marketing digital. Des forfaits clairs, une exécution soignée, un paiement sécurisé.",
      ctaPrimary: "Découvrir nos forfaits",
      ctaSecondary: "Nous contacter",
      badges: ["Paiement sécurisé", "Remboursement sous 14 jours"],
    },
    chipsTitle: "Ce que nous maîtrisons",
    chips: [
      "Sites e-commerce",
      "Applications web",
      "Automatisation",
      "Traitement de données",
      "Publicité en ligne",
      "SEO",
      "Réseaux sociaux",
      "Intégrations API & paiement",
    ],
    services: {
      eyebrow: "Nos services",
      title: "Quatre expertises, un seul interlocuteur.",
      subtitle:
        "De la boutique en ligne à la croissance marketing, nous couvrons l'ensemble de la chaîne digitale de votre entreprise.",
      cta: "Voir le détail des services",
    },
    why: {
      eyebrow: "Pourquoi Angelika Jánošíková",
      title: "Une agence directe, sans surprise.",
      items: [
        {
          title: "Prix publics et fermes",
          desc: "Nos forfaits sont affichés avec leur tarif : vous savez exactement ce que vous payez avant même de nous écrire.",
        },
        {
          title: "Exécution d'ingénieur",
          desc: "Du code propre, testé et documenté, avec des livrables que vous restez libres de faire évoluer.",
        },
        {
          title: "Un seul interlocuteur",
          desc: "De la première prise de contact à la mise en ligne, vous parlez directement à l'équipe qui conçoit et développe.",
        },
        {
          title: "Engagement 14 jours",
          desc: "Chaque forfait est couvert par notre politique de remboursement intégral de 14 jours.",
        },
      ],
    },
    process: {
      eyebrow: "Méthode",
      title: "Comment nous travaillons",
      steps: [
        {
          title: "Cadrage",
          desc: "Vous nous écrivez, nous échangeons sur vos objectifs et nous définissons ensemble le périmètre.",
        },
        {
          title: "Forfait",
          desc: "Vous choisissez le forfait correspondant : prix fixe, périmètre écrit, aucune mauvaise surprise.",
        },
        {
          title: "Réalisation",
          desc: "Nous développons avec des points d'avancement réguliers et des livraisons visibles.",
        },
        {
          title: "Lancement & suivi",
          desc: "Mise en production, prise en main des outils et accompagnement pour démarrer sereinement.",
        },
      ],
    },
    pricingTeaser: {
      eyebrow: "Forfaits",
      title: "Des prix clairs, affichés d'avance.",
      subtitle:
        "Quatre forfaits couvrant l'essentiel du digital, payables en ligne en toute sécurité. Le détail des prestations est écrit noir sur blanc.",
      cta: "Voir tous les tarifs",
    },
    cta: {
      title: "Un projet en tête ?",
      text: "Décrivez-nous votre besoin : nous revenons vers vous avec une proposition claire et un forfait adapté.",
      button: "Démarrer un projet",
    },
  },

  services: {
    meta: {
      title: "Services — Sites e-commerce, applications web, automatisation, marketing",
      description:
        "Découvrez les quatre offres d'Angelika Jánošíková : création de sites e-commerce, développement d'applications web sur-mesure, automatisation et traitement de données, marketing digital.",
    },
    hero: {
      eyebrow: "Nos services",
      title: "Ce que nous faisons, concrètement.",
      subtitle:
        "Quatre savoir-faire complémentaires pour construire, automatiser et faire croître votre présence digitale.",
    },
    items: {
      boutique: {
        title: "Sites e-commerce",
        tagline: "Vendez en ligne, proprement.",
        description:
          "Nous construisons des boutiques en ligne rapides, sécurisées et faciles à gérer au quotidien : catalogue produits, panier, paiement en ligne, gestion des commandes. Chaque boutique est pensée pour convertir vos visiteurs en clients et pour être trouvée sur les moteurs de recherche.",
        bullets: [
          "Catalogue, panier et paiement en ligne intégrés",
          "Design responsive sur mesure",
          "Espace d'administration simple pour vos produits et commandes",
          "Bonnes pratiques SEO et performance dès la conception",
          "Formation à la gestion de votre boutique",
        ],
        packageRef: "Forfait associé : Boutique Essentiel",
      },
      app: {
        title: "Applications web",
        tagline: "L'outil dont votre activité a besoin.",
        description:
          "Un espace client à créer, un outil métier à construire, un portail à ouvrir à vos partenaires ? Nous développons des applications web sur-mesure qui collent à votre façon de travailler : comptes utilisateurs, rôles, tableaux de bord, intégrations avec vos outils existants.",
        bullets: [
          "Cahier des charges cadré ensemble avant tout développement",
          "Comptes utilisateurs, rôles et administration",
          "Base de données, API et intégrations tierces",
          "Tests, recette et documentation de prise en main",
          "Code que vous restez libres de faire évoluer",
        ],
        packageRef: "Forfait associé : App Sur-Mesure",
      },
      flux: {
        title: "Automatisation & traitement de données",
        tagline: "Faites travailler les machines, pas vos équipes.",
        description:
          "Saisies répétitives, exports manuels, fichiers qui circulent par email : nous automatisons vos tâches chronophages et construisons des pipelines fiables pour collecter, nettoyer et exploiter vos données. Résultat : du temps gagné et des chiffres fiables, à portée de regard.",
        bullets: [
          "Audit de vos processus et des gains possibles",
          "Automatisation entre vos outils (CRM, site, tableurs, email…)",
          "Collecte, nettoyage et traitement de vos données",
          "Tableaux de bord et rapports automatiques",
          "Supervision et maintenance des flux livrés",
        ],
        packageRef: "Forfait associé : Flux Automatisé",
      },
      croissance: {
        title: "Marketing digital",
        tagline: "Être vu, puis choisi.",
        description:
          "Un bon produit ne suffit pas : il faut être trouvé, puis choisi. Nous pilotons votre acquisition digitale de bout en bout — publicité en ligne, référencement naturel, animation des réseaux sociaux — avec un reporting clair pour savoir ce qui rapporte.",
        bullets: [
          "Stratégie digitale et plan d'action sur 6 mois",
          "Campagnes publicitaires (search et réseaux sociaux)",
          "Optimisation SEO du site et des contenus",
          "Animation et cohérence de vos réseaux sociaux",
          "Reporting mensuel lisible et orienté résultats",
        ],
        packageRef: "Forfait associé : Croissance Digitale (semestriel)",
      },
    },
    cta: { text: "Un besoin qui ne rentre dans aucune case ?", button: "Discutons-en" },
  },

  pricing: {
    meta: {
      title: "Tarifs — Forfaits à prix fixes",
      description:
        "Les forfaits d'Angelika Jánošíková : Boutique Essentiel (1 200 €), App Sur-Mesure (2 200 €), Flux Automatisé (3 800 €), Croissance Digitale (1 800 €, semestriel). Paiement unique sécurisé.",
    },
    hero: {
      eyebrow: "Tarifs",
      title: "Quatre forfaits, quatre prix fixes.",
      subtitle:
        "Pas de devis opaque ni d'heures facturées à l'aveugle : vous choisissez un forfait, vous connaissez le prix et le périmètre. C'est tout.",
    },
    included: "Ce qui est inclus",
    choose: "Choisir ce forfait",
    periodSemestrial: "forfait semestriel",
    guarantee: {
      title: "Satisfait ou remboursé — 14 jours",
      text: "Chaque paiement est couvert par notre politique de remboursement : une demande par simple email dans les 14 jours suffit, le remboursement est intégral et traité sur votre moyen de paiement d'origine.",
      link: "Lire la politique de remboursement",
    },
    paymentNote:
      "Tous les prix sont affichés en euros (EUR, €). Paiement unique, sécurisé. Aucun abonnement, aucun frais caché.",
    cta: { text: "Vous hésitez entre deux forfaits ?", button: "Demandez-nous" },
  },

  payment: {
    meta: {
      title: "Paiement — Réglez vos forfaits en ligne",
      description:
        "Payez vos forfaits en ligne en toute sécurité. Prix en euros (EUR), paiement unique, données bancaires traitées directement par notre prestataire de paiement.",
    },
    hero: {
      eyebrow: "Paiement",
      title: "Réglez vos forfaits en toute sécurité.",
      subtitle:
        "Ajoutez un ou plusieurs forfaits au panier et réglez le tout en une fois — sans abonnement ni frais cachés. Le paiement en ligne sera actif très prochainement.",
    },
    steps: [
      "Choisissez vos forfaits",
      "Payez en toute sécurité en ligne",
      "Nous démarrons votre projet",
    ],
    cardsNote: "Cartes bancaires acceptées : Visa, Mastercard, American Express.",
    securityNote:
      "Vos données bancaires sont saisies directement sur la plateforme de paiement sécurisée et ne transitent jamais par nos serveurs. Un reçu vous est envoyé par email.",
    success:
      "Paiement confirmé — merci ! Votre commande est enregistrée, nous vous contactons pour démarrer votre projet.",
    canceled: "Paiement annulé. Votre panier est conservé, vous pouvez relancer quand vous le souhaitez.",
    notConfiguredTitle: "Paiement en cours d'activation",
    notConfigured:
      "Le paiement en ligne sera actif très prochainement. Pour commander dès maintenant, écrivez-nous :",
    error: "Une erreur est survenue lors de la création de la session de paiement. Réessayez dans un instant.",
    vatNote: "Prix nets en euros (EUR), paiement unique.",
  },

  contact: {
    meta: {
      title: "Contact — Parlons de votre projet",
      description:
        "Contactez Angelika Jánošíková : formulaire de contact et email contact@angelikajanosikova.com. Nous répondons à toutes les demandes de devis et de renseignement.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Parlons de votre projet.",
      subtitle:
        "Décrivez votre besoin en quelques lignes : ce que vous faites, ce que vous voulez obtenir, et votre échéance. Nous revenons vers vous avec une proposition claire.",
    },
    form: {
      name: "Votre nom",
      namePlaceholder: "Marie Dupont",
      email: "Votre email",
      emailPlaceholder: "marie@entreprise.com",
      message: "Votre message",
      messagePlaceholder: "Je cherche à lancer une boutique en ligne pour…",
      submit: "Envoyer le message",
      sending: "Envoi en cours…",
      success: "Message envoyé ! Nous vous répondrons à l'adresse indiquée.",
      error: "L'envoi a échoué. Réessayez dans un instant ou écrivez-nous directement par email.",
      required: "Champ obligatoire",
      invalidEmail: "Adresse email invalide",
      messageMin: "Message trop court (10 caractères minimum)",
      honeypot: "Ne pas remplir ce champ",
    },
    info: {
      title: "Coordonnées",
      emailLabel: "Email",
      addressLabel: "Adresse",
      legalLabel: "Société",
      legalValue: "Angelika Jánošíková",
      note: "Nous répondons à tous les messages.",
    },
  },

  about: {
    meta: {
      title: "À propos — Angelika Jánošíková",
      description:
        "Angelika Jánošíková est une agence de développement web et de marketing digital : sites e-commerce, applications web, automatisation et croissance digitale.",
    },
    hero: {
      eyebrow: "À propos",
      title: "L'agence qui exécute.",
      subtitle:
        "Angelika Jánošíková est une agence de développement web et de marketing digital. Nous concevons des produits digitaux qui font grandir les entreprises : boutiques en ligne, applications web, automatisation, croissance.",
    },
    mission: {
      eyebrow: "Notre mission",
      title: "Mettre la technologie au service de votre croissance.",
      text: "Les petites et moyennes entreprises n'ont pas toujours les moyens d'embaucher une équipe technique. Notre rôle : leur donner accès à la même qualité d'outils et d'exécution que les grandes — avec des forfaits à prix fixes et une relation directe, sans couches d'intermédiaires.",
    },
    axes: {
      eyebrow: "Nos axes de travail",
      title: "Quatre disciplines, une même exigence.",
      items: [
        {
          title: "Concevoir",
          desc: "Des interfaces claires et des sites e-commerce qui convertissent, pensés mobile d'abord.",
        },
        {
          title: "Développer",
          desc: "Des applications web fiables, du code propre et documenté, des intégrations solides.",
        },
        {
          title: "Automatiser",
          desc: "Des flux de données et des tâches répétitives délégués aux machines, avec supervision.",
        },
        {
          title: "Faire croître",
          desc: "De la publicité, du SEO et des réseaux sociaux pilotés par les résultats, pas par l'intuition.",
        },
      ],
    },
    principles: {
      eyebrow: "Nos principes",
      title: "Ce à quoi vous pouvez vous attendre.",
      items: [
        { title: "Transparence", desc: "Prix publics, périmètre écrit, pas de frais surprise en cours de route." },
        { title: "Rigueur", desc: "Des livrables testés et documentés, pas des prototypes fragiles." },
        { title: "Proximité", desc: "Une communication directe avec ceux qui construisent réellement votre projet." },
        { title: "Responsabilité", desc: "Un engagement simple : 14 jours pour changer d'avis, remboursé intégralement." },
      ],
    },
    identity: {
      eyebrow: "L'entreprise",
      title: "Angelika Jánošíková en bref",
      items: [
        { label: "Dénomination sociale", value: "Angelika Jánošíková" },
        { label: "Contact", value: "contact@angelikajanosikova.com" },
        { label: "Activité", value: "Développement web et marketing digital" },
        { label: "Paiement", value: "Paiement unique sécurisé" },
      ],
    },
    cta: { title: "Travaillons ensemble.", button: "Nous contacter" },
  },

  legal: {
    meta: {
      title: "Mentions légales & Conditions générales de vente",
      description:
        "Mentions légales et conditions générales de vente d'Angelika Jánošíková : éditeur, hébergement, commandes, prix, paiement en ligne et remboursement.",
    },
    pageTitle: "Mentions légales & CGV",
    updated: "Dernière mise à jour : 7 octobre 2026",
    sections: [
      {
        heading: "Éditeur du site",
        blocks: [
          {
            type: "p" as const,
            text: "Le présent site est édité par Angelika Jánošíková, entrepreneur individuel (živnosť) — IČO 57 935 092, Žihárec 209, 925 83 Žihárec, Slovaquie.",
          },
          {
            type: "p" as const,
            text: "Directeur de la publication : Angelika Jánošíková. Contact : contact@angelikajanosikova.com.",
          },
        ],
      },
      {
        heading: "Activité",
        blocks: [
          {
            type: "p" as const,
            text: "Angelika Jánošíková est une agence de développement web et de marketing digital. Son activité recouvre : la conception de sites internet et de sites de commerce électronique (boutiques en ligne), le développement d'applications web, la création d'outils d'automatisation et le traitement de données, ainsi que les prestations de marketing digital (publicité en ligne, référencement naturel, gestion des réseaux sociaux).",
          },
        ],
      },
      {
        heading: "Hébergement",
        blocks: [
          {
            type: "p" as const,
            text: "Le site est hébergé par Rapidenet Canada. Les communications avec le site sont chiffrées (HTTPS).",
          },
        ],
      },
      {
        heading: "Commandes et prix (conditions générales de vente)",
        blocks: [
          {
            type: "p" as const,
            text: "Les prestations sont commercialisées sous forme de forfaits à prix fixes, décrits et affichés en euros (EUR, €) sur la page « Tarifs » du présent site : Boutique Essentiel (1 200 €), App Sur-Mesure (2 200 €), Flux Automatisé (3 800 €) et Croissance Digitale (1 800 €, forfait semestriel couvrant six mois de prestation). Tous les prix sont nets, en euros ; le montant final à payer est affiché avant la confirmation du paiement.",
          },
          {
            type: "p" as const,
            text: "La commande s'effectue par paiement en ligne depuis la page « Paiement ». Le règlement est traité de manière sécurisée par notre prestataire de paiement ; Angelika Jánošíková n'a pas accès à vos données bancaires. Le paiement intégral du forfait vaut acceptation des présentes conditions générales de vente et déclenche le démarrage de la prestation commandée.",
          },
          {
            type: "p" as const,
            text: "Le contenu détaillé de chaque forfait est précisé sur la page « Tarifs ». Tout besoin hors périmètre fait l'objet d'un échange préalable et d'un accord écrit entre les parties.",
          },
        ],
      },
      {
        heading: "Exécution des prestations",
        blocks: [
          {
            type: "p" as const,
            text: "Les prestations sont exécutées à distance et livrées sous forme numérique (sites internet, applications web, automatisations, contenus, rapports). Elles démarrent après paiement intégral du forfait. Un calendrier indicatif et le détail des livrables sont confirmés par écrit (email) avant le démarrage ; les livrables sont remis par voie électronique au fur et à mesure de l'avancement.",
          },
        ],
      },
      {
        heading: "Paiement, sécurité et reçus",
        blocks: [
          {
            type: "p" as const,
            text: "Le paiement est traité de manière sécurisée par notre prestataire de paiement ; vos données bancaires sont saisies directement sur la plateforme de paiement et ne transitent jamais par nos serveurs. Un reçu vous est envoyé par email après chaque paiement. Aucun abonnement n'est proposé : chaque commande fait l'objet d'un paiement unique.",
          },
        ],
      },
      {
        heading: "Annulation d'une commande",
        blocks: [
          {
            type: "p" as const,
            text: "Vous pouvez annuler une commande et obtenir un remboursement intégral dans les conditions de la politique de remboursement (14 jours). Passé ce délai, une demande d'annulation est étudiée au cas par cas, en fonction de l'avancement de la prestation ; le cas échéant, seules les étapes déjà réalisées et convenues par écrit peuvent rester acquises.",
          },
        ],
      },
      {
        heading: "Restrictions et éligibilité",
        blocks: [
          {
            type: "p" as const,
            text: "Les services proposés (développement web, automatisation, traitement de données, marketing digital) ne relèvent d'aucune catégorie de produits ou services restreinte ou interdite. Ils sont fournis à distance, sans restriction géographique particulière ; il appartient au client de vérifier les éventuelles restrictions légales applicables à son propre activité et à sa juridiction.",
          },
        ],
      },
      {
        heading: "Droit de rétractation et remboursement",
        blocks: [
          {
            type: "p" as const,
            text: "Tout paiement peut être intégralement remboursé sur simple demande formulée par email dans un délai de 14 jours suivant la date du paiement. Les modalités pratiques sont décrites sur la page « Politique de remboursement ».",
          },
        ],
      },
      {
        heading: "Propriété intellectuelle",
        blocks: [
          {
            type: "p" as const,
            text: "L'ensemble des contenus du présent site (textes, éléments graphiques, logo, structure) est la propriété d'Angelika Jánošíková et ne peut être reproduit sans autorisation écrite.",
          },
          {
            type: "p" as const,
            text: "Les livrables produits dans le cadre d'un forfait (code, contenus, configurations) sont cédés au client pour l'exploitation de son activité, à réception du paiement intégral.",
          },
        ],
      },
      {
        heading: "Responsabilité",
        blocks: [
          {
            type: "p" as const,
            text: "Angelika Jánošíková met en œuvre les moyens nécessaires à la bonne exécution des prestations, mais ne saurait être tenue responsable des interruptions ou défaillances de services tiers (hébergeurs, plateformes publicitaires, passerelles de paiement) ni de l'usage fait des livrables par le client après livraison.",
          },
        ],
      },
      {
        heading: "Droit applicable et réclamations",
        blocks: [
          {
            type: "p" as const,
            text: "Les présentes conditions sont soumises au droit slovaque. Toute réclamation doit d'abord être adressée par email à contact@angelikajanosikova.com : nous étudions et traitons chaque demande.",
          },
        ],
      },
    ] as LegalSection[],
  },

  privacy: {
    meta: {
      title: "Politique de confidentialité",
      description:
        "Politique de confidentialité d'Angelika Jánošíková : données collectées via le formulaire de contact et les paiements en ligne, finalités, conservation et vos droits.",
    },
    pageTitle: "Politique de confidentialité",
    updated: "Dernière mise à jour : 7 octobre 2026",
    sections: [
      {
        heading: "Responsable du traitement",
        blocks: [
          {
            type: "p" as const,
            text: "Les données personnelles collectées sur ce site sont traitées sous la responsabilité d'Angelika Jánošíková — contact@angelikajanosikova.com.",
          },
        ],
      },
      {
        heading: "Données collectées",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Formulaire de contact : votre nom, votre adresse email et le contenu de votre message.",
              "Paiement : les informations de paiement sont collectées et traitées directement par notre prestataire de paiement. Nous recevons la confirmation du paiement et votre email, mais nous ne stockons aucune donnée bancaire.",
              "Communication par email : l'historique de nos échanges avec vous.",
            ],
          },
        ],
      },
      {
        heading: "Finalités",
        blocks: [
          {
            type: "p" as const,
            text: "Vos données sont utilisées uniquement pour : répondre à vos demandes, exécuter les prestations que vous commandez, assurer la facturation et le suivi client, et remplir nos obligations légales éventuelles.",
          },
          {
            type: "p" as const,
            text: "Vos données ne sont ni vendues, ni louées, ni transmises à des fins publicitaires.",
          },
        ],
      },
      {
        heading: "Cookies et traceurs",
        blocks: [
          {
            type: "p" as const,
            text: "Ce site n'utilise pas de cookies publicitaires ni d'outils statistiques tiers. Seuls les cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés.",
          },
        ],
      },
      {
        heading: "Destinataires et sous-traitants",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Prestataire de paiement : traitement des paiements en ligne.",
              "Rapidenet Canada : hébergement du site.",
            ],
          },
        ],
      },
      {
        heading: "Conservation",
        blocks: [
          {
            type: "p" as const,
            text: "Les demandes de contact sont conservées le temps nécessaire à leur traitement. Les données liées à une commande et à la facturation sont conservées conformément aux obligations comptables applicables.",
          },
        ],
      },
      {
        heading: "Sécurité des données",
        blocks: [
          {
            type: "p" as const,
            text: "Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger vos données : chiffrement HTTPS de l'ensemble du site, traitement des paiements par un prestataire spécialisé et absence totale de stockage de données bancaires. L'accès aux données que nous détenons (emails de contact, confirmations de commande) est limité aux personnes qui en ont besoin pour traiter vos demandes.",
          },
        ],
      },
      {
        heading: "Transferts internationaux",
        blocks: [
          {
            type: "p" as const,
            text: "Nos prestataires de paiement et Rapidenet Canada traitent certaines données depuis les États-Unis. Ces transferts sont encadrés par les mécanismes contractuels prévus par ces prestataires (notamment les clauses contractuelles types et leurs programmes de conformité) afin d'assurer un niveau de protection adapté.",
          },
        ],
      },
      {
        heading: "Vos droits",
        blocks: [
          {
            type: "p" as const,
            text: "Vous disposez de droits d'accès, de rectification, de suppression et de portabilité de vos données personnelles, ainsi que le droit de vous opposer à leur traitement. Pour les exercer, écrivez-nous à contact@angelikajanosikova.com : nous traitons chaque demande. Selon votre pays de résidence, vous pouvez également introduire une réclamation auprès de l'autorité de protection des données compétente.",
          },
        ],
      },
    ] as LegalSection[],
  },

  refund: {
    meta: {
      title: "Politique de remboursement — 14 jours",
      description:
        "Politique de remboursement d'Angelika Jánošíková : remboursement intégral sur demande dans les 14 jours suivant le paiement, traité sur votre moyen de paiement d'origine.",
    },
    pageTitle: "Politique de remboursement",
    updated: "Dernière mise à jour : 7 octobre 2026",
    sections: [
      {
        heading: "Délai de remboursement : 14 jours",
        blocks: [
          {
            type: "p" as const,
            text: "Tout paiement effectué sur ce site est couvert par une garantie de 14 jours : vous pouvez obtenir un remboursement intégral sur simple demande formulée dans les 14 jours suivant la date du paiement, sans avoir à justifier votre décision.",
          },
        ],
      },
      {
        heading: "Comment demander un remboursement",
        blocks: [
          {
            type: "p" as const,
            text: "Adressez-nous un email à contact@angelikajanosikova.com en précisant :",
          },
          {
            type: "ul" as const,
            items: [
              "votre nom et l'adresse email utilisée lors du paiement ;",
              "le forfait concerné et la date du paiement ;",
              "si vous le souhaitez, la raison de votre demande — elle nous aide à nous améliorer.",
            ],
          },
          {
            type: "p" as const,
            text: "Nous confirmons la réception de votre demande et son traitement.",
          },
        ],
      },
      {
        heading: "Modalités de remboursement",
        blocks: [
          {
            type: "p" as const,
            text: "Le remboursement est effectué sur le moyen de paiement utilisé lors de l'achat. Selon votre banque, le montant apparaît sur votre compte sous quelques jours ouvrés après le traitement de la demande.",
          },
        ],
      },
      {
        heading: "Passé le délai de 14 jours",
        blocks: [
          {
            type: "p" as const,
            text: "Au-delà du délai de 14 jours, écrivez-nous néanmoins : nous étudions chaque situation avec vous et cherchons la solution la plus adaptée (avancement du projet, ajustement du périmètre, geste commercial).",
          },
        ],
      },
    ] as LegalSection[],
  },
};

export type Dictionary = typeof fr;
