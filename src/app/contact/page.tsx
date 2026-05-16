import type { Metadata } from "next";
import Link from "next/link";
import { ContactFormClient } from "@/components/sections/ContactFormClient";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description:
      "Contact Pasquale Rocchida Handyman for quotes via WhatsApp or the enquiry form — Bishop's Stortford and nearby.",
    alternates: {
      canonical: "/contact",
    },
  };
}

export default function ContactPage() {
  return (
    <div className="bg-[color:var(--bg-light)] pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Contact
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Let&apos;s plan your visit
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Send photos if it helps — I&apos;ll confirm scope, timing and pricing
            before any work begins.
          </p>
        </header>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="rounded-3xl border border-[color:var(--border)] bg-white p-8 shadow-md md:p-10">
            <h2 className="text-2xl font-bold text-[color:var(--primary)]">
              Enquiry form
            </h2>
            <p className="mt-3 text-[color:var(--text-secondary)]">
              Prefer WhatsApp for pictures? Tap the floating button anytime.
            </p>
          <ContactFormClient surface="light" />
          </div>

          <aside className="space-y-8 rounded-3xl border border-[color:var(--border)] bg-[color:var(--primary)] p-10 text-white shadow-xl">
            <div>
              <h2 className="text-xl font-bold">WhatsApp</h2>
              <p className="mt-3 text-white/85">
                Fastest route for photos and flexible scheduling.
              </p>
              <Link
                href="https://wa.me/393209708536"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-[color:var(--text-primary)] hover:bg-[color:var(--accent-hover)]"
              >
                Message on WhatsApp
              </Link>
            </div>

            <div className="border-t border-white/15 pt-8">
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="mt-2 text-white/75">
                hello@handymanstortford.example — placeholder inbox until your
                domain is live.
              </p>
            </div>

            <div className="border-t border-white/15 pt-8">
              <h3 className="text-lg font-semibold">Hours</h3>
              <p className="mt-2 text-white/85">Monday – Saturday</p>
              <p className="text-2xl font-extrabold">8am – 6pm</p>
              <p className="mt-3 text-sm text-white/70">
                Sunday emergencies only by arrangement.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
