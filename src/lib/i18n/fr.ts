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
      "Angelika Jánošíková conçoit des sites e-commerce, des applications web, des outils d'automatisation et pilote votre marketing digital. Découvrez nos produits et services à prix affichés.",
  },

  nav: {
    home: "Accueil",
    services: "Services",
    pricing: "Tarifs",
    payment: "Commander",
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
    paymentsNote: "Commandes par email.",
    // Ligne légale optionnelle en footer (vide = non affichée).
    legalLine: "Angelika Jánošíková — živnosť (entrepreneur individuel), IČO 57 935 092, Slovaquie.",
    rights: "Tous droits réservés.",
  },

  cart: {
    menuLabel: "Panier",
    title: "Votre panier",
    empty: "Votre panier est vide. Ajoutez un produit pour commencer.",
    add: "Ajouter au panier",
    added: "Ajouté au panier",
    quantity: "Quantité",
    decrease: "Réduire la quantité",
    increase: "Augmenter la quantité",
    remove: "Retirer du panier",
    clear: "Vider le panier",
    total: "Total",
    checkout: "Commander par email",
    checkingOut: "Ouverture de votre messagerie…",
    orderSubject: "Commande — Angelika Jánošíková",
    orderGreeting: "Bonjour,",
    orderIntro: "Je souhaite commander les produits suivants :",
    orderTotalLabel: "Total de la commande",
    orderOutro:
      "Merci de me confirmer la disponibilité ainsi que les modalités de paiement.",
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

  // ——— Catalogue produits (partagé : accueil, tarifs, paiement) ———
  packages: {
    // Guides & outils digitaux
    "templates-factures": {
      name: "5 Modèles de Factures Professionnels",
      tagline: "Cinq modèles pour préparer vos factures professionnelles.",
    },
    "plan-marketing-12-mois": {
      name: "Plan Marketing 12 Mois",
      tagline: "Un calendrier d'actions marketing clé en main pour toute l'année.",
    },
    "pack-outils-excel": {
      name: "Pack Excel Gestion Financière",
      tagline: "Des classeurs prêts à l'emploi pour piloter vos chiffres sereinement.",
    },
    "strategie-reseaux-b2b": {
      name: "Stratégie Réseaux Sociaux B2B",
      tagline: "Le guide complet pour bâtir une présence B2B qui génère des contacts.",
    },

    // Formations en ligne
    "formation-projet-agile": {
      name: "Piloter ses projets avec la méthode agile",
      tagline: "Maîtrisez les méthodologies agiles, de la théorie à la pratique.",
    },
    "webinaire-communication-crise": {
      name: "Communiquer face à une crise : webinaire",
      tagline: "Découvrez les principes de communication en situation de crise.",
    },
    "module-rh-digitale": {
      name: "Module RH Digitale",
      tagline: "Automatisez vos processus RH, du recrutement aux comptes rendus.",
    },
    "programme-lean-management": {
      name: "Programme Lean Management",
      tagline: "Les fondamentaux pour éliminer les gaspillages et fluidifier vos opérations.",
    },
    "atelier-planification-strategique": {
      name: "Atelier Planification Stratégique",
      tagline: "Une session interactive pour construire votre plan de l'année.",
    },
    "master-class-negociation": {
      name: "Négociation commerciale : formation intensive",
      tagline: "Les techniques de négociation avancées, en format intensif.",
    },
    "culture-entreprise": {
      name: "Culture d'Entreprise Cohérente",
      tagline: "Un programme de trois mois pour installer une culture forte et durable.",
    },
    "formation-gestion-crise": {
      name: "Préparer et gérer les situations de crise",
      tagline: "Préparez et pilotez toute situation critique, de A à Z.",
    },
    "programme-leader-inclusif": {
      name: "Programme Leader Responsable & Inclusif",
      tagline: "Une formation certifiante sur le leadership qui a du sens.",
    },
    "formation-supply-chain": {
      name: "Piloter la chaîne logistique : formation",
      tagline: "Une master class complète sur l'optimisation de la chaîne logistique.",
    },
    "master-leadership": {
      name: "Développer son leadership pour conduire le changement",
      tagline: "Quatorze heures de cursus intensif pour diriger le changement.",
    },

    // Certifications
    "certification-okr": {
      name: "Déployer la méthode OKR : formation certifiante",
      tagline: "La formation certifiante sur les Objectifs et Résultats Clés.",
    },
    "certification-iso-9001": {
      name: "Certification Qualité ISO 9001",
      tagline: "Comprendre et implémenter ISO 9001 dans votre entreprise.",
    },
    "certification-agile-master": {
      name: "Certification Agile Master",
      tagline: "La certification professionnelle de la gestion de projet agile avancée.",
    },
    "certification-manager": {
      name: "Certification Manager d'Entreprise",
      tagline: "Un programme couvrant stratégie, finance, RH et opérations.",
    },

    // Conseil & accompagnement
    "audit-interne-processus": {
      name: "Audit Interne des Processus",
      tagline: "Une analyse complète de vos workflows internes et de leurs failles.",
    },
    "diagnostic-strategique": {
      name: "Diagnostic Stratégique Personnalisé",
      tagline: "Une demi-journée de consultation pour évaluer votre position réelle.",
    },
    "coaching-management-individuel": {
      name: "Coaching individuel pour managers",
      tagline: "Trois sessions d'une heure pour développer vos compétences de manager.",
    },
    "audit-conformite-rgpd": {
      name: "Audit de conformité des données personnelles",
      tagline: "Un diagnostic complet de votre conformité aux données personnelles.",
    },
    "consulting-restructuration": {
      name: "Réinventer votre organisation : accompagnement",
      tagline: "Repensez votre structure interne, les rôles et les responsabilités.",
    },
    "programme-transformation-digitale": {
      name: "Programme Transformation Digitale Sur-Mesure",
      tagline: "Quatre mois de programme personnalisé pour votre transition digitale.",
    },
    "coaching-equipe": {
      name: "Développer la performance de votre équipe",
      tagline: "Six sessions pour développer la performance collective de votre équipe.",
    },
    "strategie-marque": {
      name: "Construire sa stratégie de marque",
      tagline: "Clarifiez et affirmez votre marque pour être choisie, pas seulement vue.",
    },
    "consulting-expansion": {
      name: "Consulting Expansion Internationale",
      tagline: "Un accompagnement expert pour aborder de nouveaux marchés sereinement.",
    },
    "transformation-processus-finance": {
      name: "Transformation des Processus Finance",
      tagline: "Modernisez et automatisez vos processus financiers de bout en bout.",
    },
    "strategie-e-commerce": {
      name: "Stratégie E-commerce & Transformation Digitale",
      tagline: "Un consulting complet pour lancer ou transformer votre activité en ligne.",
    },
    "consulting-fusions": {
      name: "Consulting Fusions & Acquisitions",
      tagline: "Évaluez, structurez et intégrez votre acquisition en toute sécurité.",
    },
    "programme-transformation-organisationnelle": {
      name: "Programme Transformation Organisationnelle",
      tagline: "Six mois pour transformer votre organisation en profondeur.",
    },
    "audit-strategique-complet": {
      name: "Bilan stratégique complet de votre entreprise",
      tagline: "Deux semaines d'audit approfondi pour évaluer votre compétitivité. Notre offre phare.",
    },
  },

  home: {
    meta: {
      title: "Angelika Jánošíková — Agence web & marketing digital",
      description:
        "Sites e-commerce, applications web, automatisation et marketing digital. Découvrez notre catalogue et contactez-nous par email.",
    },
    hero: {
      eyebrow: "Agence de développement web & marketing digital",
      titleA: "Des produits digitaux",
      titleAccent: "qui font grandir",
      titleB: "votre entreprise.",
      subtitle:
        "Angelika Jánošíková conçoit et développe des sites e-commerce, des applications web sur-mesure, des outils d'automatisation et des campagnes de marketing digital — et met à votre disposition un catalogue de guides, formations et accompagnements pour faire grandir votre entreprise. Des prix clairs, une exécution soignée.",
      ctaPrimary: "Découvrir le catalogue",
      ctaSecondary: "Nous contacter",
      badges: ["Commande par email", "Remboursement sous 14 jours"],
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
          desc: "Nos produits sont affichés avec leur tarif : vous savez exactement ce que vous payez avant même de nous écrire.",
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
          desc: "Chaque produit est couvert par notre politique de remboursement intégral de 14 jours.",
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
          title: "Commande",
          desc: "Vous choisissez les produits correspondants : prix affichés, périmètre écrit, aucune mauvaise surprise.",
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
      eyebrow: "Catalogue",
      title: "Des prix clairs, affichés d'avance.",
      subtitle:
        "Guides et outils digitaux, formations, certifications et accompagnement : tout est affiché, des modèles de factures à 29 € à l'audit stratégique complet à 650 €.",
      cta: "Voir tout le catalogue",
    },
    cta: {
      title: "Un projet en tête ?",
      text: "Décrivez-nous votre besoin : nous revenons vers vous avec une proposition claire et un produit adapté.",
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
        packageRef: "Voir le catalogue et les tarifs",
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
        packageRef: "Voir le catalogue et les tarifs",
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
        packageRef: "Voir le catalogue et les tarifs",
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
        packageRef: "Voir le catalogue et les tarifs",
      },
    },
    cta: { text: "Un besoin qui ne rentre dans aucune case ?", button: "Discutons-en" },
  },

  pricing: {
    meta: {
      title: "Tarifs — Guides, formations, certifications et conseil",
      description:
        "Le catalogue d'Angelika Jánošíková : guides et outils digitaux dès 29 €, formations en ligne, certifications et prestations de conseil jusqu'à 650 €. Prix affichés en euros.",
    },
    hero: {
      eyebrow: "Tarifs",
      title: "Un catalogue entier, des prix affichés.",
      subtitle:
        "Pas de devis opaque ni d'heures facturées à l'aveugle : chaque produit a un prix public et un périmètre écrit. Vous commandez par email, nous confirmons et nous démarrons.",
    },
    included: "Ce qui est inclus",
    choose: "Commander",
    fromPrice: "dès",
    categories: {
      guides: {
        name: "Guides & outils digitaux",
        tagline: "Des ressources prêtes à l'emploi, applicables dès cette semaine.",
      },
      formations: {
        name: "Formations en ligne",
        tagline: "Des cursus concrets pour monter en compétence à votre rythme.",
      },
      certifications: {
        name: "Certifications",
        tagline: "Des programmes de formation et de certification pour développer vos compétences.",
      },
      conseil: {
        name: "Conseil & accompagnement",
        tagline: "Des prestations sur mesure, du diagnostic à la transformation complète.",
      },
    },
    guarantee: {
      title: "Satisfait ou remboursé — 14 jours",
      text: "Chaque paiement est couvert par notre politique de remboursement : une demande par simple email dans les 14 jours suffit, le remboursement est intégral et traité sur votre moyen de paiement d'origine.",
      link: "Lire la politique de remboursement",
    },
    paymentNote:
      "Tous les prix sont affichés en euros (EUR, €). Aucun abonnement, aucun frais caché.",
    cta: { text: "Vous hésitez entre deux produits ?", button: "Demandez-nous" },
  },

  payment: {
    meta: {
      title: "Commander — Produits digitaux, formations et conseil",
      description:
        "Constituez votre panier et envoyez votre commande par email. Prix en euros (EUR) ; modalités de paiement communiquées après confirmation.",
    },
    hero: {
      eyebrow: "Commander",
      title: "Trois étapes, aucune surprise.",
      subtitle:
        "Ajoutez vos produits au panier puis envoyez votre commande par email : nous confirmons la disponibilité et les modalités de paiement, puis nous démarrons.",
    },
    steps: [
      "Choisissez vos produits",
      "Envoyez votre commande par email",
      "Nous confirmons et démarrons",
    ],
    emailNote:
      "Votre commande s'ouvre dans votre messagerie : envoyez l'email pour nous la transmettre, nous répondons avec les modalités de paiement.",
    securityNote:
      "N'envoyez aucune donnée bancaire par email. Les modalités de paiement vous seront communiquées après confirmation.",
    vatNote: "Prix nets en euros (EUR).",
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
      text: "Les petites et moyennes entreprises n'ont pas toujours les moyens d'embaucher une équipe technique. Notre rôle : leur donner accès à la même qualité d'outils et d'exécution que les grandes — avec des prix fixes affichés et une relation directe, sans couches d'intermédiaires.",
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
        { label: "Commande", value: "Par email" },
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
            text: "Les produits et prestations sont commercialisés à prix fixes, affichés en euros (EUR, €) sur la page « Tarifs » du présent site. Le catalogue couvre quatre familles : guides et outils digitaux (de 29 € à 69 €), formations en ligne (de 49 € à 349 €), certifications (de 95 € à 390 €) et prestations de conseil et accompagnement (de 65 € à 650 €). Tous les prix sont nets, en euros ; le montant final à payer est confirmé avant le paiement.",
          },
          {
            type: "p" as const,
            text: "La commande s'effectue depuis la page « Commander » : vous constituez votre panier puis transmettez votre commande par email. Le paiement est organisé de manière sécurisée après confirmation écrite de la commande ; Angelika Jánošíková n'a pas accès à vos données bancaires. Le paiement intégral vaut acceptation des présentes conditions générales de vente et déclenche le démarrage de la prestation commandée.",
          },
          {
            type: "p" as const,
            text: "Le contenu détaillé de chaque produit est précisé sur la page « Tarifs ». Tout besoin hors périmètre fait l'objet d'un échange préalable et d'un accord écrit entre les parties.",
          },
        ],
      },
      {
        heading: "Exécution des prestations",
        blocks: [
          {
            type: "p" as const,
            text: "Les prestations sont exécutées à distance et livrées sous forme numérique (sites internet, applications web, automatisations, contenus, rapports). Elles démarrent après validation et paiement intégral de la commande. Un calendrier indicatif et le détail des livrables sont confirmés par écrit (email) avant le démarrage ; les livrables sont remis par voie électronique au fur et à mesure de l'avancement.",
          },
        ],
      },
      {
        heading: "Paiement, sécurité et reçus",
        blocks: [
          {
            type: "p" as const,
            text: "La commande est transmise par email. Les modalités de paiement sont communiquées après confirmation de la commande. Aucune donnée bancaire ne doit être envoyée par email.",
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
            text: "Les livrables produits dans le cadre d'une commande (code, contenus, configurations) sont cédés au client pour l'exploitation de son activité, à réception du paiement intégral.",
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
              "Commande : les informations de commande sont transmises par email. N'envoyez aucune donnée bancaire par email.",
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
              "Messagerie : traitement des demandes de commande par email.",
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
            text: "Nous appliquons des mesures techniques et organisationnelles raisonnables pour protéger vos données. Le site ne collecte pas de données bancaires. L'accès aux données que nous détenons (emails de contact, confirmations de commande) est limité aux personnes qui en ont besoin pour traiter vos demandes.",
          },
        ],
      },
      {
        heading: "Transferts internationaux",
        blocks: [
          {
            type: "p" as const,
            text: "Les informations relatives aux transferts internationaux dépendent des prestataires utilisés. Pour toute question, contactez-nous par email.",
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
              "le produit concerné et la date du paiement ;",
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
