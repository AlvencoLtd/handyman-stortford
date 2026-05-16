"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [pulseKey, setPulseKey] = useState(0);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setPulseKey((k) => k + 1);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 right-6 z-40">
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={handleClick}
        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--primary)] text-white shadow-lg shadow-black/15 transition hover:bg-[color:var(--primary-light)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--accent)]"
      >
        <span
          key={pulseKey}
          className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/70 ring-pulse-animate"
          aria-hidden
        />
        <ChevronUp className="relative z-[1] h-6 w-6" strokeWidth={2.25} />
      </button>
    </div>
  );
}
