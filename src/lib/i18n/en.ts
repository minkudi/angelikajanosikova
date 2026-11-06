import type { Dictionary } from "./fr";

// English dictionary — must match the fr.ts structure exactly (type-checked).
export const en: Dictionary = {
  meta: {
    siteName: "Angelika Jánošíková",
    tagline: "Web development & digital marketing agency",
    siteDescription:
      "Angelika Jánošíková builds e-commerce websites, web applications and automation tools, and runs your digital marketing. Explore our catalogue and published prices.",
  },

  nav: {
    home: "Home",
    services: "Services",
    pricing: "Pricing",
    payment: "Order",
    about: "About",
    contact: "Contact",
    cta: "Start a project",
    menu: "Menu",
    close: "Close",
  },

  localeSwitcher: { label: "Switch language" },

  footer: {
    tagline: "Web development and digital marketing agency: e-commerce sites, web applications, automation, growth.",
    servicesTitle: "Our services",
    navTitle: "Navigation",
    legalTitle: "Legal information",
    contactTitle: "Contact",
    addressLabel: "Address",
    paymentsNote: "Orders by email.",
    // Optional footer legal line (empty = not displayed).
    legalLine: "Angelika Jánošíková — sole proprietorship (živnosť), IČO 57 935 092, Slovakia.",
    rights: "All rights reserved.",
  },

  cart: {
    menuLabel: "Cart",
    title: "Your cart",
    empty: "Your cart is empty. Add a product to get started.",
    add: "Add to cart",
    added: "Added to cart",
    quantity: "Quantity",
    decrease: "Decrease quantity",
    increase: "Increase quantity",
    remove: "Remove from cart",
    clear: "Clear cart",
    total: "Total",
    checkout: "Order by email",
    checkingOut: "Opening your email app…",
    orderSubject: "Order — Angelika Jánošíková",
    orderGreeting: "Hello,",
    orderIntro: "I would like to order the following products:",
    orderTotalLabel: "Order total",
    orderOutro:
      "Please confirm availability and payment instructions.",
  },

  whatsapp: {
    label: "Chat on WhatsApp",
    message: "Hello Angelika Jánošíková! I'd like to discuss a project.",
  },

  notFound: {
    title: "Page not found",
    text: "This page does not exist or has been moved.",
    back: "Back to home",
  },

  // ——— Product catalogue (shared: home, pricing, payment) ———
  packages: {
    // Guides & digital tools
    "templates-factures": {
      name: "5 Professional Invoice Templates",
      tagline: "Five templates to prepare professional invoices.",
    },
    "plan-marketing-12-mois": {
      name: "12-Month Marketing Plan",
      tagline: "A turnkey marketing action calendar for the whole year.",
    },
    "pack-outils-excel": {
      name: "Excel Financial Management Pack",
      tagline: "Ready-to-use workbooks to keep your numbers under control.",
    },
    "strategie-reseaux-b2b": {
      name: "B2B Social Media Strategy",
      tagline: "The complete guide to building a B2B presence that generates leads.",
    },

    // Online trainings
    "formation-projet-agile": {
      name: "Agile Project Management Training",
      tagline: "Master agile methodologies, from theory to practice.",
    },
    "webinaire-communication-crise": {
      name: "Crisis Communication Webinar",
      tagline: "Explore the principles of communication during a crisis.",
    },
    "module-rh-digitale": {
      name: "Digital HR Module",
      tagline: "Automate your HR processes, from recruitment to reporting.",
    },
    "programme-lean-management": {
      name: "Lean Management Program",
      tagline: "The fundamentals to eliminate waste and streamline operations.",
    },
    "atelier-planification-strategique": {
      name: "Strategic Planning Workshop",
      tagline: "An interactive session to build your plan for the year.",
    },
    "master-class-negociation": {
      name: "Commercial Negotiation Master Class",
      tagline: "Advanced negotiation techniques, in an intensive format.",
    },
    "culture-entreprise": {
      name: "Coherent Company Culture",
      tagline: "A three-month program to instill a strong, lasting culture.",
    },
    "formation-gestion-crise": {
      name: "Crisis Management Training",
      tagline: "Prepare for and handle any critical situation, end to end.",
    },
    "programme-leader-inclusif": {
      name: "Responsible & Inclusive Leader Program",
      tagline: "A certified training on leadership that means something.",
    },
    "formation-supply-chain": {
      name: "Supply Chain & Logistics Training",
      tagline: "A complete master class on optimizing your logistics chain.",
    },
    "master-leadership": {
      name: "Transformational Leadership Master",
      tagline: "Fourteen hours of intensive curriculum to lead change.",
    },

    // Certifications
    "certification-okr": {
      name: "OKR Method Certification",
      tagline: "The certified training on Objectives and Key Results.",
    },
    "certification-iso-9001": {
      name: "ISO 9001 Quality Certification",
      tagline: "Understand and implement ISO 9001 in your company.",
    },
    "certification-agile-master": {
      name: "Agile Master Certification",
      tagline: "The professional certification in advanced agile project management.",
    },
    "certification-manager": {
      name: "Business Manager Certification",
      tagline: "A program covering strategy, finance, HR and operations.",
    },

    // Consulting & support
    "audit-interne-processus": {
      name: "Internal Process Audit",
      tagline: "A complete analysis of your internal workflows and their gaps.",
    },
    "diagnostic-strategique": {
      name: "Custom Strategic Diagnostic",
      tagline: "A half-day consultation to assess your real position.",
    },
    "coaching-management-individuel": {
      name: "Individual Management Coaching",
      tagline: "Three one-hour sessions to grow your skills as a manager.",
    },
    "audit-conformite-rgpd": {
      name: "GDPR Compliance Audit",
      tagline: "A complete diagnostic of your personal-data compliance.",
    },
    "consulting-restructuration": {
      name: "Organizational Restructuring Consulting",
      tagline: "Rethink your internal structure, roles and responsibilities.",
    },
    "programme-transformation-digitale": {
      name: "Bespoke Digital Transformation Program",
      tagline: "Four months of tailored program for your digital transition.",
    },
    "coaching-equipe": {
      name: "Intensive Team Coaching",
      tagline: "Six sessions to grow your team's collective performance.",
    },
    "strategie-marque": {
      name: "Brand Strategy & Positioning",
      tagline: "Clarify and assert your brand to be chosen, not just seen.",
    },
    "consulting-expansion": {
      name: "International Expansion Consulting",
      tagline: "Expert support to enter new markets with confidence.",
    },
    "transformation-processus-finance": {
      name: "Finance Process Transformation",
      tagline: "Modernize and automate your financial processes end to end.",
    },
    "strategie-e-commerce": {
      name: "E-commerce & Digital Transformation Strategy",
      tagline: "Complete consulting to launch or transform your online business.",
    },
    "consulting-fusions": {
      name: "Mergers & Acquisitions Consulting",
      tagline: "Evaluate, structure and integrate your acquisition safely.",
    },
    "programme-transformation-organisationnelle": {
      name: "Organizational Transformation Program",
      tagline: "Six months to transform your organization in depth.",
    },
    "audit-strategique-complet": {
      name: "Complete Business Strategy Audit",
      tagline: "Two weeks of in-depth audit to assess your competitiveness. Our flagship offer.",
    },
  },

  home: {
    meta: {
      title: "Angelika Jánošíková — Web development & digital marketing agency",
      description:
        "E-commerce sites, web applications, automation and digital marketing. Explore our catalogue and contact us by email.",
    },
    hero: {
      eyebrow: "Web development & digital marketing agency",
      titleA: "Digital products",
      titleAccent: "that grow",
      titleB: "your business.",
      subtitle:
        "Angelika Jánošíková designs and builds e-commerce websites, custom web applications, automation tools and digital marketing campaigns — and offers a catalogue of guides, trainings and support programs to grow your business. Clear prices, careful execution.",
      ctaPrimary: "Browse the catalogue",
      ctaSecondary: "Contact us",
      badges: ["Order by email", "14-day refund policy"],
    },
    chipsTitle: "What we master",
    chips: [
      "E-commerce sites",
      "Web applications",
      "Automation",
      "Data processing",
      "Online advertising",
      "SEO",
      "Social media",
      "API & payment integrations",
    ],
    services: {
      eyebrow: "Our services",
      title: "Four areas of expertise, one point of contact.",
      subtitle:
        "From your online store to marketing growth, we cover the entire digital chain of your business.",
      cta: "See services in detail",
    },
    why: {
      eyebrow: "Why Angelika Jánošíková",
      title: "A direct agency, no surprises.",
      items: [
        {
          title: "Public, firm prices",
          desc: "Our products are published with their price: you know exactly what you pay before you even write to us.",
        },
        {
          title: "Engineer-grade execution",
          desc: "Clean, tested and documented code, with deliverables you remain free to evolve.",
        },
        {
          title: "One point of contact",
          desc: "From the first message to the launch, you talk directly with the team that designs and builds.",
        },
        {
          title: "14-day commitment",
          desc: "Every product is covered by our full 14-day refund policy.",
        },
      ],
    },
    process: {
      eyebrow: "Method",
      title: "How we work",
      steps: [
        {
          title: "Scoping",
          desc: "You write to us, we discuss your goals and define the scope together.",
        },
        {
          title: "Order",
          desc: "You pick the matching products: published prices, written scope, no bad surprises.",
        },
        {
          title: "Build",
          desc: "We develop with regular check-ins and visible, incremental deliveries.",
        },
        {
          title: "Launch & support",
          desc: "Production rollout, onboarding on the tools and support to start with confidence.",
        },
      ],
    },
    pricingTeaser: {
      eyebrow: "Catalogue",
      title: "Clear prices, published upfront.",
      subtitle:
        "Guides and digital tools, trainings, certifications and support: everything is published, from €29 invoice templates to the €650 complete strategic audit.",
      cta: "See the whole catalogue",
    },
    cta: {
      title: "Have a project in mind?",
      text: "Tell us what you need: we come back to you with a clear proposal and a matching product.",
      button: "Start a project",
    },
  },

  services: {
    meta: {
      title: "Services — E-commerce sites, web applications, automation, marketing",
      description:
        "Explore the four offerings of Angelika Jánošíková: e-commerce website creation, custom web application development, automation and data processing, digital marketing.",
    },
    hero: {
      eyebrow: "Our services",
      title: "What we do, concretely.",
      subtitle:
        "Four complementary skills to build, automate and grow your digital presence.",
    },
    items: {
      boutique: {
        title: "E-commerce sites",
        tagline: "Sell online, the clean way.",
        description:
          "We build online stores that are fast, secure and easy to run day to day: product catalog, cart, online payments, order management. Every store is designed to convert visitors into customers and to be found on search engines.",
        bullets: [
          "Catalog, cart and online payments integrated",
          "Custom responsive design",
          "Simple admin area for your products and orders",
          "SEO best practices and performance from day one",
          "Training on running your store",
        ],
        packageRef: "See the catalogue and pricing",
      },
      app: {
        title: "Web applications",
        tagline: "The tool your business actually needs.",
        description:
          "A client portal to create, an internal tool to build, a dashboard to open up to your partners? We develop custom web applications that fit the way you work: user accounts, roles, dashboards, integrations with your existing tools.",
        bullets: [
          "Specifications scoped together before any development",
          "User accounts, roles and administration",
          "Database, API and third-party integrations",
          "Testing, QA and onboarding documentation",
          "Code you remain free to evolve",
        ],
        packageRef: "See the catalogue and pricing",
      },
      flux: {
        title: "Automation & data processing",
        tagline: "Let the machines work, not your teams.",
        description:
          "Repetitive data entry, manual exports, files bouncing over email: we automate your time-consuming tasks and build reliable pipelines to collect, clean and exploit your data. The result: time saved and reliable numbers, at a glance.",
        bullets: [
          "Audit of your processes and possible gains",
          "Automation across your tools (CRM, website, spreadsheets, email…)",
          "Collection, cleaning and processing of your data",
          "Automatic dashboards and reports",
          "Monitoring and maintenance of delivered flows",
        ],
        packageRef: "See the catalogue and pricing",
      },
      croissance: {
        title: "Digital marketing",
        tagline: "Get seen, then get chosen.",
        description:
          "A good product is not enough: you have to be found, then chosen. We run your digital acquisition end to end — online advertising, search engine optimization, social media management — with clear reporting on what actually pays off.",
        bullets: [
          "Digital strategy and 6-month action plan",
          "Advertising campaigns (search and social media)",
          "SEO optimization of your website and content",
          "Consistent social media management",
          "Clear, results-driven monthly reporting",
        ],
        packageRef: "See the catalogue and pricing",
      },
    },
    cta: { text: "A need that fits none of these boxes?", button: "Let's discuss it" },
  },

  pricing: {
    meta: {
      title: "Pricing — Guides, trainings, certifications and consulting",
      description:
        "The Angelika Jánošíková catalogue: guides and digital tools from €29, online trainings, certifications and consulting up to €650. Prices displayed in euros.",
    },
    hero: {
      eyebrow: "Pricing",
      title: "A whole catalogue, published prices.",
      subtitle:
        "No opaque quotes, no blindly billed hours: every product has a public price and a written scope. You order by email, we confirm and we start.",
    },
    included: "What's included",
    choose: "Order",
    fromPrice: "from",
    categories: {
      guides: {
        name: "Guides & digital tools",
        tagline: "Ready-to-use resources you can apply as early as this week.",
      },
      formations: {
        name: "Online trainings",
        tagline: "Practical curricula to level up at your own pace.",
      },
      certifications: {
        name: "Certifications",
        tagline: "Training and certification programs to develop your skills.",
      },
      conseil: {
        name: "Consulting & support",
        tagline: "Tailored services, from the diagnostic to the full transformation.",
      },
    },
    guarantee: {
      title: "Money-back guarantee — 14 days",
      text: "Every payment is covered by our refund policy: a simple email within 14 days is enough, the refund is full and processed to your original payment method.",
      link: "Read the refund policy",
    },
    paymentNote:
      "All prices are displayed in euros (EUR, €). No subscription, no hidden fees.",
    cta: { text: "Undecided between two products?", button: "Ask us" },
  },

  payment: {
    meta: {
      title: "Order — Digital products, trainings and consulting",
      description:
        "Build your cart and send your order by email. Prices in euros (EUR); payment instructions provided after confirmation.",
    },
    hero: {
      eyebrow: "Order",
      title: "Three steps, no surprises.",
      subtitle:
        "Add your products to the cart, then send your order by email: we confirm availability and payment instructions, and we get started.",
    },
    steps: [
      "Choose your products",
      "Send your order by email",
      "We confirm and start",
    ],
    emailNote:
      "Your order opens in your email app: send the email to forward it to us, and we reply with the payment instructions.",
    securityNote:
      "Do not send card details by email. Payment instructions will be provided after confirmation.",
    vatNote: "Net prices in euros (EUR).",
  },

  contact: {
    meta: {
      title: "Contact — Let's talk about your project",
      description:
        "Contact Angelika Jánošíková: contact form and email contact@angelikajanosikova.com. We answer every quote and information request.",
    },
    hero: {
      eyebrow: "Contact",
      title: "Let's talk about your project.",
      subtitle:
        "Describe your need in a few lines: what you do, what you want to achieve, and your timeline. We come back to you with a clear proposal.",
    },
    form: {
      name: "Your name",
      namePlaceholder: "Jane Smith",
      email: "Your email",
      emailPlaceholder: "jane@company.com",
      message: "Your message",
      messagePlaceholder: "I'm looking to launch an online store for…",
      submit: "Send the message",
      sending: "Sending…",
      success: "Message sent! We will reply to the address you provided.",
      error: "Sending failed. Please try again in a moment or email us directly.",
      required: "Required field",
      invalidEmail: "Invalid email address",
      messageMin: "Message too short (10 characters minimum)",
      honeypot: "Do not fill in this field",
    },
    info: {
      title: "Contact details",
      emailLabel: "Email",
      addressLabel: "Address",
      legalLabel: "Company",
      legalValue: "Angelika Jánošíková",
      note: "We answer every message.",
    },
  },

  about: {
    meta: {
      title: "About — Angelika Jánošíková",
      description:
        "Angelika Jánošíková is a web development and digital marketing agency: e-commerce sites, web applications, automation and digital growth.",
    },
    hero: {
      eyebrow: "About",
      title: "The agency that executes.",
      subtitle:
        "Angelika Jánošíková is a web development and digital marketing agency. We design digital products that help businesses grow: online stores, web applications, automation, growth.",
    },
    mission: {
      eyebrow: "Our mission",
      title: "Putting technology to work for your growth.",
      text: "Small and medium businesses cannot always afford an in-house technical team. Our role: give them access to the same quality of tools and execution as the big players — with published fixed prices and a direct relationship, without layers of middlemen.",
    },
    axes: {
      eyebrow: "What we focus on",
      title: "Four disciplines, one standard.",
      items: [
        {
          title: "Design",
          desc: "Clear interfaces and e-commerce sites that convert, mobile-first by design.",
        },
        {
          title: "Develop",
          desc: "Reliable web applications, clean and documented code, solid integrations.",
        },
        {
          title: "Automate",
          desc: "Data flows and repetitive tasks delegated to machines, with monitoring.",
        },
        {
          title: "Grow",
          desc: "Advertising, SEO and social media driven by results, not by intuition.",
        },
      ],
    },
    principles: {
      eyebrow: "Our principles",
      title: "What you can expect from us.",
      items: [
        { title: "Transparency", desc: "Public prices, written scope, no surprise fees along the way." },
        { title: "Rigor", desc: "Tested and documented deliverables, not fragile prototypes." },
        { title: "Proximity", desc: "Direct communication with the people who actually build your project." },
        { title: "Accountability", desc: "A simple commitment: 14 days to change your mind, fully refunded." },
      ],
    },
    identity: {
      eyebrow: "The company",
      title: "Angelika Jánošíková at a glance",
      items: [
        { label: "Legal name", value: "Angelika Jánošíková" },
        { label: "Contact", value: "contact@angelikajanosikova.com" },
        { label: "Activity", value: "Web development and digital marketing" },
        { label: "Order", value: "By email" },
      ],
    },
    cta: { title: "Let's work together.", button: "Contact us" },
  },

  legal: {
    meta: {
      title: "Legal notice & Terms of Service",
      description:
        "Legal notice and terms of service of Angelika Jánošíková: publisher, hosting, orders, prices, online payments and refunds.",
    },
    pageTitle: "Legal notice & Terms of Service",
    updated: "Last updated: October 7, 2026",
    sections: [
      {
        heading: "Site publisher",
        blocks: [
          {
            type: "p" as const,
            text: "This website is published by Angelika Jánošíková, a sole proprietorship (živnosť) — IČO 57 935 092, Žihárec 209, 925 83 Žihárec, Slovakia.",
          },
          {
            type: "p" as const,
            text: "Publication director: Angelika Jánošíková. Contact: contact@angelikajanosikova.com.",
          },
        ],
      },
      {
        heading: "Business activity",
        blocks: [
          {
            type: "p" as const,
            text: "Angelika Jánošíková is a web development and digital marketing agency. Its activity covers: the design of websites and e-commerce sites (online stores), the development of web applications, the creation of automation tools and data processing, as well as digital marketing services (online advertising, search engine optimization, social media management).",
          },
        ],
      },
      {
        heading: "Hosting",
        blocks: [
          {
            type: "p" as const,
            text: "The website is hosted by Rapidenet Canada. Communications with the website are encrypted (HTTPS).",
          },
        ],
      },
      {
        heading: "Orders and prices (terms of service)",
        blocks: [
          {
            type: "p" as const,
            text: "Products and services are sold at fixed prices, displayed in euros (EUR, €) on the “Pricing” page of this website. The catalogue covers four families: guides and digital tools (€29 to €69), online trainings (€49 to €349), certifications (€95 to €390) and consulting services (€65 to €650). All prices are net, in euros; the final amount to pay is confirmed before payment.",
          },
          {
            type: "p" as const,
            text: "Orders are placed from the “Order” page: you build your cart and then forward your order by email. Payment is arranged securely after written confirmation of the order; Angelika Jánošíková has no access to your card details. Full payment constitutes acceptance of these terms of service and triggers the start of the ordered service.",
          },
          {
            type: "p" as const,
            text: "The detailed content of each product is specified on the “Pricing” page. Any need outside this scope is subject to a prior discussion and a written agreement between the parties.",
          },
        ],
      },
      {
        heading: "Performance of services",
        blocks: [
          {
            type: "p" as const,
            text: "Services are performed remotely and delivered digitally (websites, web applications, automations, content, reports). Work starts after the order is validated and paid in full. An indicative timeline and the detail of deliverables are confirmed in writing (email) before the start; deliverables are provided electronically as the project progresses.",
          },
        ],
      },
      {
        heading: "Payment, security and receipts",
        blocks: [
          {
            type: "p" as const,
            text: "Orders are sent by email. Payment instructions are provided after order confirmation. Please do not send card details by email.",
          },
        ],
      },
      {
        heading: "Order cancellation",
        blocks: [
          {
            type: "p" as const,
            text: "You may cancel an order and obtain a full refund under the conditions of the refund policy (14 days). After that window, a cancellation request is reviewed case by case, based on the progress of the service; where applicable, only the stages already completed and agreed in writing may remain due.",
          },
        ],
      },
      {
        heading: "Restrictions and eligibility",
        blocks: [
          {
            type: "p" as const,
            text: "The services offered (web development, automation, data processing, digital marketing) do not fall under any restricted or prohibited category of goods or services. They are provided remotely, with no particular geographic restriction; clients are responsible for checking any legal restrictions that apply to their own business and jurisdiction.",
          },
        ],
      },
      {
        heading: "Withdrawal and refunds",
        blocks: [
          {
            type: "p" as const,
            text: "Any payment can be fully refunded upon request sent by email within 14 days of the payment date. Practical details are described on the “Refund policy” page.",
          },
        ],
      },
      {
        heading: "Intellectual property",
        blocks: [
          {
            type: "p" as const,
            text: "All content on this website (texts, graphic elements, logo, structure) is the property of Angelika Jánošíková and may not be reproduced without written permission.",
          },
          {
            type: "p" as const,
            text: "Deliverables produced under an order (code, content, configurations) are transferred to the client for the operation of their business, upon receipt of full payment.",
          },
        ],
      },
      {
        heading: "Liability",
        blocks: [
          {
            type: "p" as const,
            text: "Angelika Jánošíková implements the means required for the proper performance of its services, but cannot be held liable for interruptions or failures of third-party services (hosting providers, advertising platforms, payment gateways) nor for the use made of the deliverables by the client after delivery.",
          },
        ],
      },
      {
        heading: "Governing law and claims",
        blocks: [
          {
            type: "p" as const,
            text: "These terms are governed by the laws of Slovakia. Any claim must first be sent by email to contact@angelikajanosikova.com: we review and handle every request.",
          },
        ],
      },
    ],
  },

  privacy: {
    meta: {
      title: "Privacy policy",
      description:
        "Privacy policy of Angelika Jánošíková: data collected through the contact form and online payments, purposes, retention and your rights.",
    },
    pageTitle: "Privacy policy",
    updated: "Last updated: September 13, 2026",
    sections: [
      {
        heading: "Data controller",
        blocks: [
          {
            type: "p" as const,
            text: "Personal data collected on this website is processed under the responsibility of Angelika Jánošíková — contact@angelikajanosikova.com.",
          },
        ],
      },
      {
        heading: "Data we collect",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Contact form: your name, your email address and the content of your message.",
              "Orders: order details are sent by email. Do not send card data by email.",
              "Email communication: the history of our exchanges with you.",
            ],
          },
        ],
      },
      {
        heading: "Purposes",
        blocks: [
          {
            type: "p" as const,
            text: "Your data is used only to: answer your requests, deliver the services you order, handle invoicing and client follow-up, and meet any legal obligations.",
          },
          {
            type: "p" as const,
            text: "Your data is never sold, rented or shared for advertising purposes.",
          },
        ],
      },
      {
        heading: "Cookies and trackers",
        blocks: [
          {
            type: "p" as const,
            text: "This website uses no advertising cookies and no third-party analytics tools. Only strictly necessary technical cookies may be set for the website to function.",
          },
        ],
      },
      {
        heading: "Recipients and sub-processors",
        blocks: [
          {
            type: "ul" as const,
            items: [
              "Email services: processing order requests by email.",
              "Rapidenet Canada: website hosting.",
            ],
          },
        ],
      },
      {
        heading: "Retention",
        blocks: [
          {
            type: "p" as const,
            text: "Contact requests are kept for the time needed to handle them. Data related to an order and invoicing is kept in accordance with applicable accounting obligations.",
          },
        ],
      },
      {
        heading: "Data security",
        blocks: [
          {
            type: "p" as const,
            text: "We apply reasonable technical and organizational measures to protect your data. This website does not collect card data. Access to the data we hold (contact emails, order confirmations) is limited to the people who need it to handle your requests.",
          },
        ],
      },
      {
        heading: "International transfers",
        blocks: [
          {
            type: "p" as const,
            text: "Information about international data transfers depends on the providers used. Please contact us by email with any questions.",
          },
        ],
      },
      {
        heading: "Your rights",
        blocks: [
          {
            type: "p" as const,
            text: "You have rights of access, rectification, deletion and portability of your personal data, as well as the right to object to its processing. To exercise them, write to contact@angelikajanosikova.com: we handle every request. Depending on your country of residence, you may also lodge a complaint with the competent data protection authority.",
          },
        ],
      },
    ],
  },

  refund: {
    meta: {
      title: "Refund policy — 14 days",
      description:
        "Refund policy of Angelika Jánošíková: full refund upon request within 14 days of payment, processed to your original payment method.",
    },
    pageTitle: "Refund policy",
    updated: "Last updated: September 13, 2026",
    sections: [
      {
        heading: "Refund window: 14 days",
        blocks: [
          {
            type: "p" as const,
            text: "Every payment made on this website is covered by a 14-day guarantee: you can obtain a full refund by simply requesting it within 14 days of the payment date, without having to justify your decision.",
          },
        ],
      },
      {
        heading: "How to request a refund",
        blocks: [
          {
            type: "p" as const,
            text: "Send us an email at contact@angelikajanosikova.com including:",
          },
          {
            type: "ul" as const,
            items: [
              "your name and the email address used for the payment;",
              "the product concerned and the payment date;",
              "optionally, the reason for your request — it helps us improve.",
            ],
          },
          {
            type: "p" as const,
            text: "We confirm receipt of your request and its processing.",
          },
        ],
      },
      {
        heading: "Refund method",
        blocks: [
          {
            type: "p" as const,
            text: "The refund is issued to the payment method used for the purchase. Depending on your bank, the amount appears on your account within a few business days after the request is processed.",
          },
        ],
      },
      {
        heading: "After the 14-day window",
        blocks: [
          {
            type: "p" as const,
            text: "Beyond the 14-day window, write to us anyway: we review every situation with you and look for the most suitable solution (project progress, scope adjustment, goodwill gesture).",
          },
        ],
      },
    ],
  },
};
