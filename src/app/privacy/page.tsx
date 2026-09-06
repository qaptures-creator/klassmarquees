import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { phoneLines } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Klass Marquees handles enquiry and contact information.",
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <section className="bg-ivory pb-24 pt-40 sm:pb-28 lg:pb-32">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bronze">Privacy Policy</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-5 text-h1 font-serif font-medium text-ink">Privacy Policy</h1>
        </Reveal>

        <Reveal delay={0.16}>
          <div className="prose-content mt-10 space-y-6 text-ink/75">
            <p>
              This page is a placeholder pending a full privacy policy drafted
              for Klass Marquees. It is provided so the enquiry form can
              reference a privacy page from launch, and should be replaced
              with a complete, legally reviewed policy before relying on it
              for compliance purposes.
            </p>
            <h2 className="pt-4 font-serif text-h3 font-medium text-ink">What we collect</h2>
            <p>
              When you submit our enquiry form, we collect the details you
              provide — such as your name, email address, telephone number
              and information about your event — solely to respond to your
              enquiry and discuss your event with you.
            </p>
            <h2 className="pt-4 font-serif text-h3 font-medium text-ink">How we use it</h2>
            <p>
              Enquiry information is used only to contact you about your
              event and is not sold or shared with third parties for
              marketing purposes.
            </p>
            <h2 className="pt-4 font-serif text-h3 font-medium text-ink">Contact us</h2>
            <p>
              If you have questions about your data, please contact us by
              telephone: {phoneLines.map((line) => line.display).join(" · ")}.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
