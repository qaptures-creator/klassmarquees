import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { klassExperience } from "@/config/process";

export default function ProcessSection() {
  return (
    <section className="bg-navy-deep py-24 sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="The Klass Experience"
          heading="A considered process, from first call to final strike."
        />
        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {klassExperience.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.1}>
              <div className="border-l border-ivory/15 pl-6 lg:mr-6 lg:min-h-[13rem]">
                <span className="font-serif text-h2 text-accent">{step.index}</span>
                <h3 className="mt-4 font-serif text-h3 font-medium text-ivory">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/65">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
