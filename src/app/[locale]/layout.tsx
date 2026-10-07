import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/i18n/config";
import { getDictionary } from "@/lib/i18n/dictionaries";
import { SITE } from "@/lib/site";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CartProvider } from "@/components/cart/CartProvider";
import CartDrawer from "@/components/cart/CartDrawer";
import ScrollReveal from "@/components/ScrollReveal";
import WhatsAppButton from "@/components/WhatsAppButton";
import { packagesView } from "@/components/pages/shared";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  display: "swap",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: `${dict.meta.siteName} — ${dict.meta.tagline}`,
      template: "%s",
    },
    description: dict.meta.siteDescription,
    applicationName: SITE.legalName,
    openGraph: {
      siteName: dict.meta.siteName,
      type: "website",
      locale: locale === "fr" ? "fr_FR" : "en_US",
    },
    alternates: { canonical: `/${locale}` },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = getDictionary(locale);

  return (
    <html lang={locale} className={`${inter.variable} ${grotesk.variable}`}>
      <body className="bg-white font-sans text-zinc-900 antialiased">
        <CartProvider>
          <a
            href="#contenu"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
          >
            {locale === "fr" ? "Aller au contenu" : "Skip to content"}
          </a>
          <Header locale={locale} dict={dict} />
          <main id="contenu">{children}</main>
          <Footer locale={locale} dict={dict} />
          <ScrollReveal />
          <WhatsAppButton dict={dict} />
          <CartDrawer
            locale={locale}
            cartCopy={dict.cart}
            paymentCopy={dict.payment}
            packages={packagesView(locale, dict)}
            contactEmail={SITE.email}
          />
        </CartProvider>
      </body>
    </html>
  );
}
