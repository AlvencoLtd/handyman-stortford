import { HOME_REVIEWS } from "@/lib/reviews";

export function ReviewsStrip() {
  return (
    <section className="bg-[color:var(--bg-light)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-4xl">
            Recent Feedback
          </h2>
          <p className="mt-4 text-[color:var(--text-secondary)]">
            Trusted by households across Hertfordshire and Essex.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {HOME_REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-[color:var(--border)] bg-white p-8 shadow-sm"
            >
              <p className="text-lg tracking-wide text-[color:var(--accent)]">
                ★★★★★
              </p>
              <blockquote className="mt-4 flex-1 text-[color:var(--text-primary)]">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-[color:var(--primary)]">
                {review.name}{" "}
                <span className="font-normal text-[color:var(--text-secondary)]">
                  · {review.location}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
