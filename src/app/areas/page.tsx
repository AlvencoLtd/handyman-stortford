import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Areas Covered",
    description:
      "Handyman coverage across Bishop's Stortford, Sawbridgeworth, Harlow, Stansted Mountfitchet, Hertford, Ware, Great Dunmow and nearby villages.",
    alternates: {
      canonical: "/areas",
    },
  };
}

const locations = [
  {
    name: "Bishop's Stortford",
    detail:
      "Local call-outs for town centre properties, Birchanger, Thorley and the Stort valley. Fast access for landlords and homeowners who need dependable help on short notice.",
  },
  {
    name: "Sawbridgeworth & High Wych",
    detail:
      "Quiet residential streets and larger family homes — ideal for assembly, shelving and seasonal maintenance visits.",
  },
  {
    name: "Harlow & surrounding estates",
    detail:
      "Snag lists between tenancies, minor repairs and reliable second visits when materials need ordering.",
  },
  {
    name: "Stansted Mountfitchet",
    detail:
      "Airport-adjacent homes and rental stock that need tidy, trustworthy workmanship with flexible timing.",
  },
  {
    name: "Hertford, Ware & Great Dunmow",
    detail:
      "Broader Hertfordshire and Essex coverage for slightly longer visits where bundling jobs makes sense.",
  },
];

export default function AreasPage() {
  return (
    <div className="bg-[color:var(--bg-light)] pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Areas
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Local coverage map
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            I keep my diary tight to Hertfordshire &amp; Essex because it means
            punctual arrivals, fair travel time, and pricing that stays
            competitive for customers who live nearby.
          </p>
        </header>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="space-y-8">
            {locations.map((loc) => (
              <article
                key={loc.name}
                className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-sm"
              >
                <h2 className="text-xl font-bold text-[color:var(--primary)]">
                  {loc.name}
                </h2>
                <p className="mt-3 text-[color:var(--text-secondary)]">
                  {loc.detail}
                </p>
              </article>
            ))}
          </div>

          <aside className="rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-md">
            <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--primary)]">
              Service area preview
            </p>
            <p className="mt-2 text-sm text-[color:var(--text-secondary)]">
              Stylised map placeholder — swap for an embedded map once the
              workshop address is confirmed.
            </p>
            <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-[color:var(--primary)]/15 via-white to-[color:var(--accent)]/15">
              <svg
                className="absolute inset-6 text-[color:var(--primary)]/35"
                viewBox="0 0 400 520"
                fill="none"
                aria-hidden
              >
                <path
                  d="M110 96C180 52 268 62 332 118C382 164 392 238 362 306C336 362 274 396 206 418C146 438 74 426 42 372C14 324 28 258 62 212C82 182 94 138 110 96Z"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeDasharray="10 12"
                />
                <circle cx="210" cy="240" r="7" fill="currentColor" />
                <circle cx="150" cy="160" r="5" fill="currentColor" />
                <circle cx="280" cy="200" r="5" fill="currentColor" />
                <circle cx="190" cy="340" r="5" fill="currentColor" />
              </svg>
              <p className="absolute bottom-8 left-8 rounded-full bg-white/90 px-4 py-2 text-xs font-bold text-[color:var(--primary)] shadow-sm backdrop-blur-sm">
                Bishop&apos;s Stortford hub
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
