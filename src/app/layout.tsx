import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
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
  name: "Pasquale Rocchida Handyman",
  description: "Professional handyman services in Bishop's Stortford",
  telephone: "TBD",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bishop's Stortford",
    addressRegion: "Hertfordshire",
    addressCountry: "GB",
  },
  areaServed: [
    "Bishop's Stortford",
    "Sawbridgeworth",
    "Harlow",
    "Stansted Mountfitchet",
    "Hertford",
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pasquale Rocchida | Handyman Bishop's Stortford",
    template: "%s | Pasquale Rocchida Handyman",
  },
  description:
    "Reliable local handyman in Bishop's Stortford for repairs, furniture assembly, painting touch-ups and property maintenance.",
  keywords: [
    "handyman bishop's stortford",
    "local handyman",
    "home maintenance",
    "property maintenance",
  ],
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
