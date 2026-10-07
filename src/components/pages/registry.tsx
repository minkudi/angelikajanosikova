import type { ComponentType } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/fr";
import type { PageKey } from "@/lib/i18n/routes";
import HomePage from "./HomePage";
import ServicesPage from "./ServicesPage";
import PricingPage from "./PricingPage";
import PaymentPage from "./PaymentPage";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import { LegalPage, PrivacyPage, RefundPage } from "./legal-pages";

export type PageProps = {
  locale: Locale;
  dict: Dictionary;
};

export const pageRegistry: Record<PageKey, ComponentType<PageProps>> = {
  home: HomePage,
  services: ServicesPage,
  pricing: PricingPage,
  payment: PaymentPage,
  contact: ContactPage,
  about: AboutPage,
  legal: LegalPage,
  privacy: PrivacyPage,
  refund: RefundPage,
};
