import Image from "next/image";
import Placeholder from "@/components/ui/Placeholder";
import { cn } from "@/lib/utils";
import type { GalleryCategory } from "@/types";

/**
 * Client-safe image frame: takes a pre-computed `exists` flag (resolved
 * server-side via mediaExists) instead of touching the filesystem itself,
 * so it can be rendered from the interactive gallery grid and lightbox.
 */
export default function GalleryFrame({
  src,
  alt,
  category,
  exists,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  category: GalleryCategory;
  exists: boolean;
  sizes?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <span className={cn("relative block overflow-hidden bg-obsidian-2", className)}>
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
        <Placeholder category={category} label={alt} className="absolute inset-0" />
      )}
    </span>
  );
}
