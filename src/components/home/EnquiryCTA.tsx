import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { primaryPhone } from "@/config/site";

export default function EnquiryCTA({
  heading = "Let’s talk about your occasion.",
  description = "Share a few details and we’ll arrange a consultation — no obligation, just an honest conversation about what’s possible for your date and venue.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy py-24 text-ivory sm:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />
      </div>
      <Container className="relative z-10 max-w-3xl text-center">
        <Reveal variant="mask">
          <h2 className="text-display font-serif font-medium text-balance">{heading}</h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-6 max-w-xl text-lead text-ivory/75 text-pretty">{description}</p>
        </Reveal>
        <Reveal delay={0.28}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Button href="/contact">Plan Your Event</Button>
            <a
              href={`tel:${primaryPhone.tel}`}
              className="text-sm font-semibold uppercase tracking-[0.12em] text-ivory/80 transition-colors hover:text-accent-light"
            >
              Or call {primaryPhone.display}
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
