import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/lib/services";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Services",
    description:
      "Handyman services in Bishop's Stortford: repairs, assembly, shelving, painting touch-ups, maintenance and general household jobs.",
    alternates: {
      canonical: "/services",
    },
  };
}

export default function ServicesPage() {
  return (
    <div className="bg-white pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Services
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Practical help for every room
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Clear estimates, tidy workmanship and honest guidance — whether it is
            a quick fix or a longer snag list for your property.
          </p>
        </header>

        <div className="mt-20 flex flex-col gap-24 md:mt-24 md:gap-28">
          {SERVICES.map((service, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <section
                key={service.slug}
                id={service.slug}
                className="scroll-mt-28 grid gap-10 md:grid-cols-2 md:items-center md:gap-14"
              >
                <div
                  className={`relative aspect-[16/11] overflow-hidden rounded-3xl border border-[color:var(--border)] shadow-md md:aspect-[5/4] ${
                    imageLeft ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <Image
                    src={service.image.replace("w=600", "w=960")}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div
                  className={`space-y-6 ${imageLeft ? "md:order-2" : "md:order-1"}`}
                >
                  <h2 className="text-3xl font-extrabold text-[color:var(--primary)]">
                    {service.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-[color:var(--text-secondary)]">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex gap-3 text-[color:var(--text-primary)]"
                      >
                        <span className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-[color:var(--accent)]" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-7 py-3 text-base font-semibold text-[color:var(--text-primary)] shadow-sm transition hover:bg-[color:var(--accent-hover)]"
                  >
                    Get a Quote
                  </Link>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
