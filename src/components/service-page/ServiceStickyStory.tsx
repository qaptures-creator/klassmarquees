import StickyStoryClient, { type StoryBeat } from "./StickyStoryClient";
import { galleryImages } from "@/config/gallery";
import { mediaExists } from "@/lib/media";
import type { ServicePageContent } from "@/types";

/**
 * Pairs this service's first few capability options with imagery from its
 * gallery category — no new copy invented, just an alternate, cinematic
 * presentation of content that already exists elsewhere on the page.
 */
export default function ServiceStickyStory({ content }: { content: ServicePageContent }) {
  const images = galleryImages.filter((img) => img.category === content.galleryCategory).slice(0, 3);
  const optionCount = Math.min(3, content.options.length, images.length || content.options.length);

  const beats: StoryBeat[] = content.options.slice(0, optionCount).map((option, i) => {
    const image = images[i % Math.max(images.length, 1)];
    return {
      title: option.title,
      description: option.description,
      src: image?.src ?? content.heroImage,
      alt: image?.alt ?? option.title,
      category: content.galleryCategory,
      exists: image ? mediaExists(image.src) : mediaExists(content.heroImage),
    };
  });

  if (beats.length === 0) return null;

  return <StickyStoryClient beats={beats} />;
}
