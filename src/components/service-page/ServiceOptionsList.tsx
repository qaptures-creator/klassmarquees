import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import type { ServicePageContent } from "@/types";

export default function ServiceOptionsList({ content }: { content: ServicePageContent }) {
  return (
    <section className="bg-obsidian py-24 text-ivory sm:py-28 lg:py-32">
      <Container>
        <SectionHeading eyebrow="What's Included" heading="Designed and built as one space." tone="light" />
        <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 border-t border-ivory/12 sm:grid-cols-2">
          {content.options.map((option, i) => (
            <Reveal key={option.title} delay={(i % 2) * 0.08}>
              <div
                className={`border-ivory/12 py-8 sm:border-b ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"} border-b`}
              >
                <h3 className="font-serif text-h3 font-medium text-ivory">{option.title}</h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/65">
                  {option.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
