import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/areas", label: "Areas" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--border)] bg-[color:var(--bg-light)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image
            src="/images/site/quickfix-house-tools-mark.svg"
            alt="QuickFix Property Maintenance"
            width={612}
            height={612}
            className="h-40 w-auto max-w-full object-contain object-left sm:h-44 md:h-48"
          />
          <p className="mt-3 max-w-md text-sm leading-relaxed text-[color:var(--text-secondary)]">
            Professional handyman services in Bishop&apos;s Stortford and
            surrounding areas.
          </p>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[color:var(--primary)]">
            Quick links
          </p>
          <ul className="mt-4 space-y-2">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm font-medium text-[color:var(--text-primary)] hover:text-[color:var(--primary-mid)]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[color:var(--primary)]">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-4 text-[color:var(--primary)]">
            <a
              href="tel:+447746187685"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[color:var(--primary-mid)]"
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </span>
              07746 187685
            </a>
            <a
              href="https://wa.me/447746187685"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-[color:var(--primary-mid)]"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/15">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  aria-hidden
                  fill="#25D366"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              WhatsApp
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61587750327501"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="QuickFix Property Maintenance on Facebook"
              className="inline-flex items-center gap-2 text-[color:var(--primary)] transition-opacity hover:opacity-80"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-sm font-semibold">Facebook</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[color:var(--border)] bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-[color:var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 QuickFix Property Maintenance. All rights reserved.</p>
          <p>
            Website by{" "}
            <Link
              href="https://alvenco.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[color:var(--primary)] hover:underline"
            >
              Alvenco Ltd
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
