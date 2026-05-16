import type { Metadata } from "next";
import { AreasCovered } from "@/components/sections/AreasCovered";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { ReviewsStrip } from "@/components/sections/ReviewsStrip";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustBar } from "@/components/sections/TrustBar";

export async function generateMetadata(): Promise<Metadata> {
  return {
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
      <ContactForm />
    </>
  );
}
