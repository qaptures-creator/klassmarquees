import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { phoneLines, siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Klass Marquees to begin planning your wedding, private celebration or corporate event.",
};

export default function ContactPage() {
  return (
    <>
      <section className="flex min-h-[24rem] flex-col justify-end bg-navy px-6 pb-16 pt-40 text-ivory sm:px-8 lg:px-12">
        <Container>
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-light">Contact</p>
          </Reveal>
          <Reveal delay={0.1} variant="mask">
            <h1 className="mt-6 max-w-2xl text-display font-serif font-medium text-balance">
              Tell us about your occasion.
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-xl text-lead text-ivory/75 text-pretty">
              Share a few details below, or call the team directly — either
              way, a real person will get back to you personally.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-deep py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Speak To Us Directly</Eyebrow>
              </Reveal>
              <div className="mt-8 space-y-6">
                {phoneLines.map((line) => (
                  <Reveal key={line.tel} delay={0.05}>
                    <div className="border-b border-ivory/10 pb-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        {line.label}
                      </p>
                      <a
                        href={`tel:${line.tel}`}
                        className="mt-2 block font-serif text-2xl text-ivory transition-colors hover:text-accent"
                      >
                        {line.display}
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={0.2}>
                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Follow Along</p>
                  <a
                    href={siteConfig.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block font-serif text-2xl text-ivory transition-colors hover:text-accent"
                  >
                    {siteConfig.instagramHandle}
                  </a>
                </div>
                <p className="mt-8 text-sm leading-relaxed text-ivory/60">
                  {siteConfig.location.city}, {siteConfig.location.region}
                  <br />
                  United Kingdom
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <EnquiryForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
