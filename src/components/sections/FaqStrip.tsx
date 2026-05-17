import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

const PREVIEW_QUESTIONS = [0, 1, 2, 5, 7];

export function FaqStrip() {
  return (
    <section className="bg-[color:var(--bg-light)] py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Quick Answers
          </p>
          <h2 className="mt-3 text-3xl font-extrabold text-[color:var(--primary)] md:text-4xl">
            Common Questions
          </h2>
        </div>
        <div className="mt-12 divide-y divide-[color:var(--border)]">
          {PREVIEW_QUESTIONS.map((idx) => {
            const item = FAQ_ITEMS[idx];
            return (
              <details key={idx} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <span className="font-semibold text-[color:var(--primary)] group-open:text-[color:var(--primary-mid)]">
                    {item.question}
                  </span>
                  <span className="mt-0.5 shrink-0 text-[color:var(--accent)] transition-transform group-open:rotate-45">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {item.answer}
                </p>
              </details>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-[color:var(--primary)] transition hover:bg-[color:var(--primary)] hover:text-white"
          >
            View all FAQs →
          </Link>
        </div>
      </div>
    </section>
  );
}
