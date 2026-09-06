"use client";

import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import GalleryFrame from "./GalleryFrame";
import Lightbox from "./Lightbox";
import { galleryFilters } from "@/config/gallery";
import type { GalleryImage } from "@/types";

const aspectByOrientation: Record<GalleryImage["orientation"], string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

export default function GalleryClient({
  images,
  initialCategory,
}: {
  images: (GalleryImage & { exists: boolean })[];
  initialCategory: string;
}) {
  const validCategories = galleryFilters.map((f) => f.value);
  const [filter, setFilter] = useState<string>(
    validCategories.includes(initialCategory as (typeof validCategories)[number])
      ? initialCategory
      : "all",
  );
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(
    () => (filter === "all" ? images : images.filter((img) => img.category === filter)),
    [images, filter],
  );

  function closeLightbox() {
    setOpenIndex(null);
    triggerRef.current?.focus();
  }

  return (
    <>
      <div role="group" aria-label="Filter gallery by category" className="flex flex-wrap gap-2 sm:gap-3">
        {galleryFilters.map((f) => {
          const active = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(f.value)}
              className={cn(
                "min-h-[44px] rounded-full border px-5 py-2 text-sm font-medium uppercase tracking-[0.06em] transition-colors duration-300",
                active
                  ? "border-bronze bg-bronze text-obsidian"
                  : "border-ink/20 text-ink/70 hover:border-ink hover:text-ink",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-16 text-center text-ink/60">No images in this category yet.</p>
      ) : (
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-6">
          {filtered.map((image, i) => (
            <button
              key={image.id}
              type="button"
              onClick={(e) => {
                triggerRef.current = e.currentTarget;
                setOpenIndex(i);
              }}
              className="group mb-4 block w-full break-inside-avoid text-left lg:mb-6"
              aria-label={`Open image: ${image.caption}`}
            >
              <span className={cn("relative block w-full", aspectByOrientation[image.orientation])}>
                <GalleryFrame
                  src={image.src}
                  alt={image.alt}
                  category={image.category}
                  exists={image.exists}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  priority={i < 3}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-obsidian/55 via-transparent to-transparent opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-ivory opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {image.caption}
                </span>
              </span>
            </button>
          ))}
        </div>
      )}

      <Lightbox images={filtered} index={openIndex} onClose={closeLightbox} onNavigate={setOpenIndex} />
    </>
  );
}
