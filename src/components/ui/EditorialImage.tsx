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
  className,
  imgClassName,
}: EditorialImageProps) {
  const exists = mediaExists(src);

  return (
    <div className={cn("relative overflow-hidden bg-obsidian-2", className)}>
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
        <Placeholder category={category} label={alt} />
      )}
    </div>
  );
}
