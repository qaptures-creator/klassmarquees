import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import { phoneLines } from "@/config/site";

export default function CredibilityIntro() {
  return (
    <section id="credibility" className="bg-ivory py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>Klass Marquees</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-h1 font-serif font-medium text-ink text-balance">
                Considered event design, delivered without compromise.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal delay={0.12}>
              <p className="text-lead text-ink/70 text-pretty">
                We design and build bespoke marquees for clients who want their
                event to feel entirely their own — not selected from a
                brochure. Every structure, interior and finish is planned
                around your venue, your guests and your occasion, with our
                team managing the detail so you don&rsquo;t have to.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 grid grid-cols-1 gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
                {phoneLines.slice(0, 3).map((line) => (
                  <div key={line.tel}>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze">
                      {line.label}
                    </p>
                    <a
                      href={`tel:${line.tel}`}
                      className="mt-2 block font-serif text-xl text-ink transition-colors hover:text-bronze"
                    >
                      {line.display}
                    </a>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
