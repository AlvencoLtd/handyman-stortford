import type { Metadata } from "next";
import { ALL_REVIEWS } from "@/lib/reviews";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Reviews",
    description:
      "Customer reviews for Pasquale Rocchida Handyman across Bishop's Stortford and nearby towns.",
    alternates: {
      canonical: "/reviews",
    },
  };
}

export default function ReviewsPage() {
  return (
    <div className="bg-white pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Reviews
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Trusted on the doorstep
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Placeholder testimonials for layout and SEO — replace with verified
            Google Reviews once live.
          </p>
        </header>

        <div className="mx-auto mt-12 max-w-xl rounded-3xl border border-[color:var(--border)] bg-[color:var(--bg-light)] p-8 text-center shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-[color:var(--primary)]">
            Google Reviews
          </p>
          <p className="mt-3 text-lg font-extrabold text-[color:var(--text-primary)]">
            4.9 average (placeholder)
          </p>
          <p className="mt-2 text-2xl tracking-widest text-[color:var(--accent)]">
            ★★★★★
          </p>
          <p className="mt-4 text-sm text-[color:var(--text-secondary)]">
            Badge placeholder — link to your public Google Business Profile after
            verification.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {ALL_REVIEWS.map((review) => (
            <article
              key={`${review.name}-${review.date}`}
              className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white p-8 shadow-sm"
            >
              <p className="text-lg tracking-wide text-[color:var(--accent)]">
                ★★★★★
              </p>
              <p className="mt-4 flex-1 text-[color:var(--text-primary)]">
                “{review.quote}”
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-2 text-sm text-[color:var(--text-secondary)]">
                <span className="font-semibold text-[color:var(--primary)]">
                  {review.name}
                </span>
                <span>·</span>
                <span>{review.location}</span>
                <span>·</span>
                <span>{review.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
