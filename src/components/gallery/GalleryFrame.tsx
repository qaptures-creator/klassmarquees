import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/types";

/**
 * Client-safe image frame: takes a pre-computed `exists` flag (resolved
 * server-side via mediaExists) instead of touching the filesystem itself,
 * so it can be rendered from the interactive gallery grid and lightbox.
 *
 * `fill` chooses position:absolute+inset-0 (for a parent that already
 * defines its size) vs position:relative+h-full/w-full (for a parent sized
 * by its own aspect-ratio box) — see EditorialImage for why this is a
 * boolean prop rather than a raw className.
 */
export default function GalleryFrame({
  src,
  alt,
  category,
  exists,
  fill = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  category: GalleryCategory;
  exists: boolean;
  fill?: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <span
      className={cn(
        fill ? "absolute inset-0" : "relative block h-full w-full",
        "overflow-hidden bg-obsidian-2",
        className,
      )}
    >
      {exists ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={cn("object-cover", imgClassName)}
        />
      ) : (
        <Placeholder category={category} label={alt} seed={src} className="absolute inset-0" />
      )}
    </span>
  );
}
