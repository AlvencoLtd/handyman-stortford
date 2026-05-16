const areas = [
  "Bishop's Stortford",
  "Sawbridgeworth",
  "Harlow",
  "Stansted Mountfitchet",
  "Hertford",
  "Ware",
  "Great Dunmow",
];

export function AreasCovered() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-4xl">
          Serving Bishop&apos;s Stortford &amp; Surrounding Areas
        </h2>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="rounded-full border border-[color:var(--border)] bg-[color:var(--bg-light)] px-4 py-2 text-sm font-semibold text-[color:var(--text-primary)]"
            >
              {area}
            </span>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-relaxed text-[color:var(--text-secondary)]">
          I work locally to ensure fast response times, competitive rates, and a
          service you can count on.
        </p>
      </div>
    </section>
  );
}
