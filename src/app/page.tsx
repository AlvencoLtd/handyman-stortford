import type { Metadata } from "next";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { ContactForm } from "@/components/sections/ContactForm";
import { FaqStrip } from "@/components/sections/FaqStrip";
import { Hero } from "@/components/sections/Hero";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustBar } from "@/components/sections/TrustBar";
import { SITE_META_DESCRIPTION } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: SITE_META_DESCRIPTION,
    alternates: {
      canonical: "/",
    },
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <AreasCovered />
      <ReviewsStrip />
      <FaqStrip />
      <ContactForm />
    </>
  );
}
