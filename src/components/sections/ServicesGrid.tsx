"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { HOME_PREVIEW_SERVICES } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="bg-[color:var(--bg-light)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-4xl">
            What I Can Help You With
          </h2>
          <p className="mt-4 text-lg text-[color:var(--text-secondary)]">
            Practical help around your home — booked quickly and delivered with
            care.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {HOME_PREVIEW_SERVICES.map((service, index) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: Math.min(index * 0.06, 0.35),
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <h3 className="text-xl font-bold text-[color:var(--primary)]">
                  {service.title}
                </h3>
                <p className="flex-1 text-sm leading-relaxed text-[color:var(--text-secondary)]">
                  {service.description}
                </p>
                <Link
                  href={`/services#${service.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--primary-light)] hover:text-[color:var(--primary)]"
                >
                  Learn more <span aria-hidden>→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
