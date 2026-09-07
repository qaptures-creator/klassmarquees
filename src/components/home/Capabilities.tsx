import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import CapabilityIcon from "./CapabilityIcon";
import { signatureCapabilities } from "@/config/process";

export default function Capabilities() {
  return (
    <section className="bg-navy py-24 text-ivory sm:py-28 lg:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Signature Capabilities"
              heading="Every layer of the space, in one hand."
              description="Structure, interior, lighting and furniture are designed together — so nothing feels bolted on."
              className="lg:sticky lg:top-32"
            />
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <ul className="divide-y divide-ivory/12 border-t border-ivory/12">
              {signatureCapabilities.map((cap, i) => (
                <li key={cap.title}>
                  <Reveal delay={i * 0.06}>
                    <div className="flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-8">
                      <div className="text-accent">
                        <CapabilityIcon name={cap.icon} />
                      </div>
                      <div>
                        <h3 className="font-serif text-h3 font-medium text-ivory">{cap.title}</h3>
                        <p className="mt-2 max-w-lg text-sm leading-relaxed text-ivory/65">
                          {cap.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
