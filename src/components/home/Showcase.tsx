import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialImage from "@/components/ui/EditorialImage";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/config/gallery";

const featured = galleryImages.filter((img) => img.featured);
const [big, tall, small1, small2] = featured;

function Tile({
  image,
  className,
  imgClassName,
}: {
  image: (typeof featured)[number];
  className: string;
  imgClassName?: string;
}) {
  return (
    <Link
      href="/gallery"
      className={`group relative block aspect-[4/3] overflow-hidden lg:aspect-auto ${className}`}
    >
      <EditorialImage
        src={image.src}
        alt={image.alt}
        category={image.category}
        className="h-full w-full"
        imgClassName={`transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06] ${imgClassName ?? ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/0 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
      <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.18em] text-ivory">
        {image.caption}
      </span>
    </Link>
  );
}

export default function Showcase() {
  if (!big || !tall || !small1 || !small2) return null;

  return (
    <section className="bg-elevated py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            eyebrow="Selected Work"
            heading="Recent occasions, designed and delivered."
            size="h1"
            className="mb-0"
          />
          <Reveal delay={0.2}>
            <Button href="/gallery" variant="outlineLight">
              View Full Gallery
            </Button>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-12 lg:grid-rows-[26rem_18rem] lg:gap-6">
            <Tile image={big} className="col-span-2 lg:col-span-8 lg:col-start-1 lg:row-start-1" />
            <Tile
              image={tall}
              className="col-span-2 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:row-start-1"
            />
            <Tile image={small1} className="col-span-1 lg:col-span-4 lg:col-start-1 lg:row-start-2" />
            <Tile image={small2} className="col-span-1 lg:col-span-4 lg:col-start-5 lg:row-start-2" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
