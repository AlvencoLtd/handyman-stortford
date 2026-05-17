import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Areas Covered",
    description:
      "QuickFix Property Maintenance covers Bishop's Stortford, Sawbridgeworth, Harlow, Stansted Mountfitchet, Hertford, Ware and Great Dunmow. Fast local handyman service.",
    alternates: { canonical: "/areas" },
    openGraph: {
      title: "Areas Covered | QuickFix Property Maintenance",
      description:
        "Local handyman serving Bishop's Stortford and a 5km radius including Sawbridgeworth, Harlow and Hertford.",
      url: "/areas",
      type: "website",
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
            <div
              className="mt-6 w-full overflow-hidden rounded-2xl shadow-md"
              style={{ height: "480px" }}
            >
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40000!2d0.1607!3d51.8714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk&markers=color:red%7Clabel:B%7C51.8714,0.1607&markers=color:blue%7Clabel:S%7C51.8174,0.1586&markers=color:blue%7Clabel:H%7C51.7699,0.0942&markers=color:blue%7Clabel:M%7C51.8999,0.1996&markers=color:blue%7Clabel:R%7C51.7959,0.0026&markers=color:blue%7Clabel:W%7C51.8010,0.0197&markers=color:blue%7Clabel:D%7C51.8733,0.3690'
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service area map — Bishop's Stortford and surrounding areas"
              />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
