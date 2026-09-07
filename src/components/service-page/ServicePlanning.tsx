import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { ServicePageContent } from "@/types";

export default function ServicePlanning({ content }: { content: ServicePageContent }) {
  return (
    <section className="bg-navy-deep py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading eyebrow="The Planning Experience" heading="What happens after you get in touch." />
        <div className="mt-16 space-y-0 border-t border-ivory/10">
          {content.planningSteps.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.06}>
              <div className="flex flex-col gap-3 border-b border-ivory/10 py-8 sm:flex-row sm:items-baseline sm:gap-10">
                <span className="w-12 shrink-0 font-serif text-h3 text-accent">{step.index}</span>
                <div>
                  <h3 className="font-serif text-h3 font-medium text-ivory">{step.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ivory/65">{step.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
