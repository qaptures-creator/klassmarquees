import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import type { FAQ } from "@/types";

const surfaces = {
  navy: "bg-navy",
  "navy-deep": "bg-navy-deep",
  elevated: "bg-elevated",
};

export default function FAQSection({
  faqs,
  heading = "Frequently asked questions.",
  eyebrow = "Good To Know",
  surface = "navy-deep",
}: {
  faqs: FAQ[];
  heading?: string;
  eyebrow?: string;
  surface?: keyof typeof surfaces;
}) {
  return (
    <section className={`${surfaces[surface]} py-24 sm:py-28 lg:py-32`}>
      <Container className="max-w-4xl">
        <SectionHeading eyebrow={eyebrow} heading={heading} align="left" />
        <div className="mt-12">
          <FAQAccordion faqs={faqs} />
        </div>
      </Container>
    </section>
  );
}
