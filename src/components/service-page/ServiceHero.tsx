import EditorialImage from "@/components/ui/EditorialImage";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { primaryPhone } from "@/config/site";
import type { ServicePageContent } from "@/types";

export default function ServiceHero({ content }: { content: ServicePageContent }) {
  return (
    <section className="relative flex h-[85vh] min-h-[34rem] w-full items-end overflow-hidden bg-obsidian text-ivory">
      <EditorialImage
        src={content.heroImage}
        alt={content.heroHeadline}
        category={content.galleryCategory}
        priority
        className="absolute inset-0"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/35 to-obsidian/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-obsidian/55 via-transparent to-transparent" />

      <Container className="relative z-10 pb-20 pt-40">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bronze-light">
            {content.eyebrow}
          </p>
        </Reveal>
        <Reveal variant="mask" delay={0.1}>
          <h1 className="mt-6 max-w-3xl text-display font-serif font-medium text-balance text-ivory">
            {content.heroHeadline}
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="mt-7 max-w-xl text-lead text-ivory/80 text-pretty">{content.heroSubhead}</p>
        </Reveal>
        <Reveal delay={0.52}>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="/contact">Plan Your Event</Button>
            <a
              href={`tel:${primaryPhone.tel}`}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory/80 transition-colors hover:text-bronze-light"
            >
              Call {primaryPhone.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
