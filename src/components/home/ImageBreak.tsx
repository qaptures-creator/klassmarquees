import EditorialImage from "@/components/ui/EditorialImage";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";

import type { GalleryCategory } from "@/types";

export default function ImageBreak({
  quote = "Every detail considered, so the moment feels effortless.",
  src = "/images/hero/image-break.jpg",
  alt = "Guests gathered beneath draped lighting inside a marquee at dusk",
  category = "night-events",
}: {
  quote?: string;
  src?: string;
  alt?: string;
  category?: GalleryCategory | "hero" | "process";
}) {
  return (
    <section className="relative h-[65vh] min-h-[26rem] overflow-hidden bg-obsidian">
      <ParallaxWrapper>
        <EditorialImage src={src} alt={alt} category={category} className="h-full w-full" />
      </ParallaxWrapper>
      <div className="absolute inset-0 bg-obsidian/30" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <p className="max-w-2xl text-balance font-serif text-display italic text-ivory">{quote}</p>
      </div>
    </section>
  );
}
