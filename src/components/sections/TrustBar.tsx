"use client";

import Image from "next/image";
import { CheckCircle, Clock, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  {
    icon: CheckCircle,
    title: "Local Service",
    subtitle: "Based in Bishop's Stortford",
  },
  {
    icon: Clock,
    title: "Fast Response",
    subtitle: "Same day estimates available",
  },
  {
    icon: Shield,
    title: "Quality Work",
    subtitle: "Satisfaction guaranteed",
  },
  {
    icon: Star,
    title: "5★ Rated",
    subtitle: "Trusted by local homeowners",
  },
];

export function TrustBar() {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--primary)] py-14 text-white">
      <div className="relative z-[1] mx-auto max-w-6xl px-4">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="flex gap-4"
            >
              <span className="mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/25">
                <item.icon className="h-6 w-6 text-[color:var(--accent)]" />
              </span>
              <div className="leading-snug">
                <p className="text-lg font-bold">{item.title}</p>
                <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-10 flex min-h-[5.75rem] w-full justify-center sm:min-h-[6.5rem] md:mt-12 md:min-h-[7rem]"
        >
          <Image
            src="/images/site/trustbar-tools-strip.svg"
            alt=""
            width={612}
            height={306}
            className="mx-auto h-auto max-h-[5.75rem] w-full max-w-4xl object-contain object-center sm:max-h-[6.5rem] md:max-h-[8.5rem] lg:max-h-40 xl:max-h-[11rem]"
            sizes="(max-width: 1024px) 100vw, 896px"
            aria-hidden
          />
        </motion.div>
      </div>
    </section>
  );
}
