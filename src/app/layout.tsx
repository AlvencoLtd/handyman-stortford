import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import {
  SITE_META_DESCRIPTION,
  SITE_TITLE_DEFAULT,
  TITLE_TEMPLATE,
} from "@/lib/seo";
import { SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "QuickFix Property Maintenance",
  description: SITE_META_DESCRIPTION,
  url: SITE_URL,
  telephone: "07746 187685",
  sameAs: ["https://www.facebook.com/profile.php?id=61587750327501"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bishop's Stortford",
    addressRegion: "Hertfordshire",
    addressCountry: "GB",
  },
  areaServed: [
    "Bishop's Stortford",
    "Sawbridgeworth",
    "High Wych",
    "Harlow",
    "Stansted Mountfitchet",
    "Hertford",
    "Ware",
    "Great Dunmow",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Handyman Services",
    itemListElement: [
      "Small Repairs",
      "Furniture Assembly",
      "Wall Fixing & Shelving",
      "Painting & Decorating",
      "Plumbing",
      "Electrical",
      "Garden Maintenance",
      "Laminated Flooring",
      "Property Maintenance",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE_DEFAULT,
    template: TITLE_TEMPLATE,
  },
  description: SITE_META_DESCRIPTION,
  keywords: [
    "quickfix bishop's stortford",
    "handyman bishop's stortford",
    "property maintenance",
    "home maintenance",
    "plumbing handyman",
    "electrical small jobs",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: "QuickFix Property Maintenance",
    title: SITE_TITLE_DEFAULT,
    description: SITE_META_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE_DEFAULT,
    description: SITE_META_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
