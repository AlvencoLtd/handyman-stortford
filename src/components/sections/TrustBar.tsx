"use client";

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
    <section className="bg-[color:var(--primary)] py-14 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 lg:grid-cols-4">
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
            <div>
              <p className="text-lg font-bold">{item.title}</p>
              <p className="mt-1 text-sm text-white/80">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
