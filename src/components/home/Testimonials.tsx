import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { testimonials } from "@/config/testimonials";
import { siteConfig } from "@/config/site";

export default function Testimonials() {
  const hasTestimonials = testimonials.length > 0;

  return (
    <section className="bg-elevated py-24 sm:py-28 lg:py-32">
      <Container className="max-w-4xl text-center">
        <SectionHeading eyebrow="Client Experience" heading="What it's like to work with us." align="center" />

        {hasTestimonials ? (
          <div className="mt-14 space-y-14">
            {testimonials.map((t) => (
              <Reveal key={t.quote}>
                <blockquote>
                  <p className="text-balance font-serif text-display italic text-ivory">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                    {t.attribution}
                    {t.context ? <span className="text-ivory/50"> — {t.context}</span> : null}
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal delay={0.1}>
            <div className="mx-auto mt-14 max-w-xl">
              <p className="text-lead text-ivory/70 text-pretty">
                Recent work and client feedback are shared regularly on our
                Instagram — the most current place to see the detail of what
                we build.
              </p>
              <div className="mt-8 flex justify-center">
                <Button href={siteConfig.instagram} external variant="outlineLight">
                  View {siteConfig.instagramHandle} on Instagram
                </Button>
              </div>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
