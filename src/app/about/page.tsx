import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description:
      "Meet Pasquale Rocchida — a reliable Bishop's Stortford handyman focused on tidy workmanship, clear communication and local service.",
    alternates: {
      canonical: "/about",
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
              alt="Pasquale Rocchida portrait placeholder"
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
            Straightforward help from someone who lives nearby
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            <p>
              I built my handyman practice around repeat customers — people who
              want someone punctual, respectful of their home, and honest when a
              job needs a specialist instead of a shortcut.
            </p>
            <p>
              From flats near the station to larger homes toward Sawbridgeworth, I
              keep visits calm and organised: dust sheets where needed, tools that
              suit the surface I&apos;m fixing, and updates if plans change mid-job.
            </p>
            <p>
              Property managers appreciate concise snag clearing between lets,
              while homeowners value guidance on what can wait versus what should be
              tackled now — especially around kitchens, shelving and moisture-prone
              areas.
            </p>
            <p className="rounded-2xl border border-[color:var(--border)] bg-[color:var(--bg-light)] p-6 text-[color:var(--text-primary)]">
              <span className="font-semibold text-[color:var(--primary)]">
                Satisfaction promise:
              </span>{" "}
              If something isn&apos;t right after I leave, tell me — I&apos;ll come
              back and make it right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
