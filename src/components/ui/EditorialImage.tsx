import Image from "next/image";
import { mediaExists } from "@/lib/media";
import { cn } from "@/lib/utils";
import Placeholder from "./Placeholder";
import type { GalleryCategory } from "@/types";

interface EditorialImageProps {
  src: string;
  alt: string;
  category?: GalleryCategory | "hero" | "process";
  priority?: boolean;
  sizes?: string;
  /**
   * true: absolutely fills a positioned parent that already defines the
   * size (e.g. inset-0 inside a relatively-positioned, fixed-height
   * section). false (default): sits relative and fills via h-full/w-full,
   * for parents that size themselves (e.g. an aspect-ratio box).
   *
   * Deliberately a boolean prop rather than a raw className — passing
   * "absolute inset-0" through className would collide with this
   * component's own position class and silently collapse to zero height,
   * since Tailwind resolves conflicting utilities by stylesheet order, not
   * by className order.
   */
  fill?: boolean;
  className?: string;
  imgClassName?: string;
}

/**
 * Drop a real file at the exact `src` path under /public and this
 * automatically switches from the placeholder to the real photo — no code
 * changes needed. See MEDIA_CHECKLIST.md for expected filenames.
 */
export default function EditorialImage({
  src,
  alt,
  category = "interiors",
  priority = false,
  sizes = "100vw",
  fill = false,
  className,
  imgClassName,
}: EditorialImageProps) {
  const exists = mediaExists(src);

  return (
    <div
      className={cn(
        fill ? "absolute inset-0" : "relative h-full w-full",
        "overflow-hidden bg-navy-deep",
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
        <Placeholder category={category} label={alt} seed={src} />
      )}
    </div>
  );
}
