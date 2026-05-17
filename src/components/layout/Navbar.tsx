"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/reviews", label: "Reviews" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 overflow-visible border-b transition-colors duration-300 ${
        scrolled
          ? "border-[color:var(--border)] bg-white/85 backdrop-blur-md shadow-sm"
          : "border-transparent bg-white/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center px-4 py-1 lg:py-1">
        <Link
          href="/"
          className="group shrink-0 transition-opacity hover:opacity-90"
        >
          <Image
            src="/images/site/quickfix-house-tools-mark.svg"
            alt="QuickFix Property Maintenance"
            width={612}
            height={612}
            className="h-[8.5rem] w-auto object-contain object-left sm:h-[9.5rem] lg:h-[12.5rem]"
            priority
          />
        </Link>

        <nav className="ml-1 hidden items-center gap-4 text-sm lg:gap-5 xl:gap-5 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="shrink-0 font-medium whitespace-nowrap text-[color:var(--text-primary)] transition hover:text-[color:var(--primary)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto hidden shrink-0 lg:block">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-2.5 text-sm font-semibold text-[color:var(--text-primary)] shadow-sm transition hover:bg-[color:var(--accent-dark)]"
          >
            Get a Quote
          </Link>
        </div>

        <button
          type="button"
          className="ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--border)] text-[color:var(--primary)] lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`border-t border-[color:var(--border)] bg-white lg:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden transition-all duration-300 ease-out`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-[color:var(--text-primary)] hover:bg-[color:var(--bg-light)]"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[color:var(--accent)] px-5 py-3 text-base font-semibold text-[color:var(--text-primary)] hover:bg-[color:var(--accent-dark)]"
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}
