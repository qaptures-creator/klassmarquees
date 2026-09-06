import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FAQAccordion from "@/components/ui/FAQAccordion";
import type { FAQ } from "@/types";

export default function FAQSection({
  faqs,
  heading = "Frequently asked questions.",
  eyebrow = "Good To Know",
  tone = "dark",
}: {
  faqs: FAQ[];
  heading?: string;
  eyebrow?: string;
  tone?: "dark" | "light";
}) {
  return (
    <section className={tone === "light" ? "bg-obsidian py-24 sm:py-28 lg:py-32" : "bg-ivory py-24 sm:py-28 lg:py-32"}>
      <Container className="max-w-4xl">
        <SectionHeading eyebrow={eyebrow} heading={heading} tone={tone} align="left" />
        <div className="mt-12">
          <FAQAccordion faqs={faqs} tone={tone} />
        </div>
      </Container>
    </section>
  );
}
