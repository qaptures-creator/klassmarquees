import EditorialImage from "@/components/ui/EditorialImage";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import Reveal from "@/components/ui/Reveal";

import type { GalleryCategory } from "@/types";

export default function ImageBreak({
  quote = "Every detail considered, so the moment feels effortless.",
  src = "/images/hero/image-break.jpg",
  alt = "Mirror disco balls suspended above a floral wedding stage inside a marquee",
  category = "weddings",
}: {
  quote?: string;
  src?: string;
  alt?: string;
  category?: GalleryCategory | "hero" | "process";
}) {
  return (
    <section className="relative h-[65vh] min-h-[26rem] overflow-hidden bg-navy">
      <Reveal variant="scale" className="absolute inset-0" once>
        <ParallaxWrapper>
          <EditorialImage src={src} alt={alt} category={category} className="h-full w-full" />
        </ParallaxWrapper>
      </Reveal>
      <div className="absolute inset-0 bg-navy/30" />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <Reveal>
          <p className="max-w-2xl text-balance font-serif text-display italic text-ivory">{quote}</p>
        </Reveal>
      </div>
    </section>
  );
}
