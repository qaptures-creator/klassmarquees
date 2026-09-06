import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import type { ServicePageContent } from "@/types";

export default function ServiceIntro({ content }: { content: ServicePageContent }) {
  return (
    <section className="bg-ivory py-24 sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Reveal>
              <Eyebrow>The Approach</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-h1 font-serif font-medium text-ink text-balance">
                {content.introHeading}
              </h2>
            </Reveal>
          </div>
          <div className="space-y-6 lg:col-span-7 lg:col-start-6">
            {content.introParagraphs.map((paragraph, i) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.1 + i * 0.08}>
                <p className="text-lead text-ink/70 text-pretty">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
