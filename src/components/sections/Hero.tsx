"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const heroImage =
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <Image
        src={heroImage}
        alt="Professional handyman at work"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/40" />

      <div className="relative z-[1] mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-28 md:py-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-3xl space-y-8 text-white"
        >
          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight md:text-5xl lg:text-6xl"
          >
            Your Reliable Handyman in Bishop&apos;s Stortford
          </motion.h1>
          <motion.p
            variants={item}
            className="max-w-2xl text-lg leading-relaxed text-white/90 md:text-xl"
          >
            Small repairs, furniture assembly, painting touch-ups and property
            maintenance — done right, done fast.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-8 py-3.5 text-base font-semibold text-[color:var(--text-primary)] shadow-lg shadow-black/25 transition hover:bg-[color:var(--accent-hover)]"
            >
              Get a Free Quote
            </a>
            <a
              href="https://wa.me/393209708536"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/5 px-8 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              WhatsApp Us Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
