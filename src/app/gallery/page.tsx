import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import GalleryClient from "@/components/gallery/GalleryClient";
import { galleryImages } from "@/config/gallery";
import { mediaExists } from "@/lib/media";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A gallery of marquee weddings, private celebrations and corporate events designed and built by Klass Marquees.",
};

export default async function GalleryPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const imagesWithExistence = galleryImages.map((image) => ({
    ...image,
    exists: mediaExists(image.src),
  }));

  return (
    <>
      <section className="flex min-h-[26rem] flex-col justify-end bg-navy px-6 pb-16 pt-40 text-ivory sm:px-8 lg:px-12">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-light">
              Gallery
            </p>
          </Reveal>
          <Reveal delay={0.1} variant="mask">
            <h1 className="mt-6 max-w-2xl text-display font-serif font-medium text-balance">
              A closer look at our work.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-lead text-ivory/75 text-pretty">
              Weddings, private celebrations, corporate events, interiors and
              evenings after dark — filter by occasion or browse everything
              in one place. New photography from {siteConfig.instagramHandle}
              {" "}is added as each event is completed.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-deep py-16 sm:py-20">
        <Container>
          <GalleryClient images={imagesWithExistence} initialCategory={params.category ?? "all"} />
        </Container>
      </section>
    </>
  );
}
