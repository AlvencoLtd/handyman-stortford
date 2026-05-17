import type { Metadata } from "next";
import Image from "next/image";
import { GALLERY_ITEMS } from "@/lib/gallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery",
    description:
      "Browse completed handyman jobs by QuickFix Property Maintenance — shelving, painting, repairs and more across Bishop's Stortford.",
    alternates: { canonical: "/gallery" },
    openGraph: {
      title: "Gallery | QuickFix Property Maintenance",
      description:
        "Photos of completed handyman jobs in Bishop's Stortford and surrounding areas.",
      url: "/gallery",
      type: "website",
    },
  };
}

export default function GalleryPage() {
  return (
    <div className="bg-[color:var(--bg-light)] pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-6xl px-4">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--accent)]">
            Gallery
          </p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[color:var(--primary)] md:text-5xl">
            Recent moods &amp; craftsmanship
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-secondary)]">
            Placeholder photography sourced from Unsplash — swap with site photos
            once projects are documented on-site.
          </p>
        </header>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_ITEMS.map((item) => (
            <figure key={item.src} className="m-0">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm">
                <Image
                  src={item.src}
                  alt={item.caption}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-2 text-center text-sm text-[color:var(--text-secondary)]">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
