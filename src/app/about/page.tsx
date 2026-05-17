import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description:
      "Meet the team behind QuickFix Property Maintenance — reliable, local and professional handyman services in Bishop's Stortford.",
    alternates: { canonical: "/about" },
    openGraph: {
      title: "About | QuickFix Property Maintenance",
      description:
        "Local handyman based in Bishop's Stortford with years of experience in property maintenance.",
      url: "/about",
      type: "website",
    },
  };
}

const portrait =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80";

export default function AboutPage() {
  return (
    <div className="bg-white pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-4 md:grid-cols-[280px_1fr] md:items-start md:gap-16">
        <div className="mx-auto w-full max-w-xs md:mx-0">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-[color:var(--border)] shadow-lg">
            <Image
              src={portrait}
              alt="QuickFix Property Maintenance team placeholder portrait"
              fill
              sizes="(max-width: 768px) 100vw, 280px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            About
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Straightforward help from QuickFix Property Maintenance
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            <p>
              QuickFix Property Maintenance is built around repeat customers —
              households and landlords who want punctual arrivals, respect for their
              home, and honest advice when something needs a qualified specialist,
              not a shortcut.
            </p>
            <p>
              From flats near Bishop&apos;s Stortford station to larger homes toward
              Sawbridgeworth, visits stay calm and organised: sheets where dust
              matters, tools matched to surfaces, and clear updates whenever plans
              shift mid-job.
            </p>
            <p>
              Property managers value concise snag lists cleared between lets;
              homeowners value guidance on urgent versus wait-and-see fixes —
              especially kitchens, shelving and damp-prone details.
            </p>
            <p className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-light)] p-6 text-[color:var(--text-primary)]">
              <span className="font-semibold text-[color:var(--primary)]">
                Satisfaction promise:
              </span>{" "}
              If something isn&apos;t right after we finish, reach out —
              we&apos;ll put it right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
