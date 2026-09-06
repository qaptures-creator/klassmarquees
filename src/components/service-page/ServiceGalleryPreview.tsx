import Link from "next/link";
import Container from "@/components/ui/Container";
import EditorialImage from "@/components/ui/EditorialImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/config/gallery";
import type { GalleryCategory } from "@/types";

const widths = ["lg:col-span-5", "lg:col-span-4", "lg:col-span-3"];

export default function ServiceGalleryPreview({
  category,
  heading = "A closer look.",
}: {
  category: GalleryCategory;
  heading?: string;
}) {
  const images = galleryImages.filter((img) => img.category === category).slice(0, 3);
  if (images.length === 0) return null;

  return (
    <section className="bg-ivory py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="From The Gallery" heading={heading} className="mb-0" />
          <Reveal delay={0.2}>
            <Button href={`/gallery?category=${category}`} variant="outlineDark">
              View Gallery
            </Button>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:gap-6">
          {images.map((image, i) => (
            <Reveal key={image.id} delay={i * 0.08} className={widths[i] ?? "lg:col-span-4"}>
              <Link
                href={`/gallery?category=${category}`}
                className="group relative block aspect-[4/5] overflow-hidden"
              >
                <EditorialImage
                  src={image.src}
                  alt={image.alt}
                  category={image.category}
                  className="h-full w-full"
                  imgClassName="transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
