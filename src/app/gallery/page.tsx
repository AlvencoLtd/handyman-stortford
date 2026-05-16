import type { Metadata } from "next";
import Image from "next/image";
import { GALLERY_IMAGES } from "@/lib/gallery";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Gallery",
    description:
      "A visual sample of home maintenance, repairs and finishing work by Pasquale Rocchida Handyman.",
    alternates: {
      canonical: "/gallery",
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

        <div className="mt-14 columns-1 gap-6 md:columns-2 lg:columns-3">
          {GALLERY_IMAGES.map((img, index) => (
            <div
              key={img.src}
              className={`relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-[color:var(--border)] bg-white shadow-sm ${
                index % 3 === 1 ? "lg:translate-y-6" : ""
              }`}
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
