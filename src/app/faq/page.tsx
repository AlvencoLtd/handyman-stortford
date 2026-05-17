import type { Metadata } from "next";
import Link from "next/link";
import { FAQ_ITEMS } from "@/lib/faq";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FAQ",
    description:
      "Frequently asked questions about QuickFix Property Maintenance handyman services in Bishop's Stortford. Pricing, availability, areas covered and more.",
    alternates: { canonical: "/faq" },
    openGraph: {
      title: "FAQ | QuickFix Property Maintenance",
      description:
        "Answers to the most common questions about our handyman service in Bishop's Stortford.",
      url: "/faq",
      type: "website",
    },
  };
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="bg-white pb-24 pt-16 md:pb-28 md:pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-3xl px-4">
        <header className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            FAQ
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Everything you need to know about QuickFix Property Maintenance —
            from booking a job to what areas we cover.
          </p>
        </header>

        <div className="mt-16 divide-y divide-[color:var(--border)]">
          {FAQ_ITEMS.map(({ question, answer }, i) => (
            <details key={i} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                <h2 className="text-lg font-semibold text-[color:var(--primary)] group-open:text-[color:var(--primary-mid)]">
                  {question}
                </h2>
                <span className="mt-1 shrink-0 text-[color:var(--accent)] transition-transform group-open:rotate-45">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                  </svg>
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-[color:var(--text-secondary)]">
                {answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-20 rounded-3xl bg-[color:var(--primary)] px-8 py-12 text-center text-white">
          <h2 className="text-2xl font-extrabold">Still have a question?</h2>
          <p className="mt-3 text-white/80">
            WhatsApp us directly — we usually reply within the hour.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://wa.me/447746187685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-7 py-3 font-semibold text-[color:var(--primary)] shadow transition hover:bg-[color:var(--accent-dark)]"
            >
              WhatsApp Us
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
