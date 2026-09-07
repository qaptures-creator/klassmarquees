import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Eyebrow from "@/components/ui/Eyebrow";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialImage from "@/components/ui/EditorialImage";
import Button from "@/components/ui/Button";
import EnquiryCTA from "@/components/home/EnquiryCTA";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Klass Marquees designs and builds bespoke luxury marquees for weddings, private celebrations and corporate events from Slough, Berkshire.",
};

const values = [
  {
    title: "Personal consultation",
    description: "Every project begins with a real conversation about your occasion, not a form to fill in.",
  },
  {
    title: "Considered design",
    description: "Structure, interior and lighting are planned together, around your venue and guest count.",
  },
  {
    title: "Hands-on delivery",
    description: "Our own team installs, dresses and strikes each marquee — nothing is subcontracted out.",
  },
  {
    title: "Honest guidance",
    description: "If something isn't right for your site or budget, we'll tell you before it becomes a problem.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex h-[70vh] min-h-[28rem] items-end overflow-hidden bg-navy text-ivory">
        <EditorialImage
          src="/images/about/about-hero.jpg"
          alt="Klass Marquees team finishing the interior of a marquee ahead of an event"
          category="interiors"
          priority
          fill
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-navy/10" />
        <Container className="relative z-10 pb-20 pt-40">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-light">
              About Klass Marquees
            </p>
          </Reveal>
          <Reveal delay={0.1} variant="mask">
            <h1 className="mt-6 max-w-2xl text-display font-serif font-medium text-balance">
              A team built around design and delivery.
            </h1>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy-deep py-24 sm:py-28 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Reveal>
                <Eyebrow>Our Approach</Eyebrow>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="mt-5 text-h1 font-serif font-medium text-ivory text-balance">
                  Detail, not decoration.
                </h2>
              </Reveal>
            </div>
            <div className="space-y-6 lg:col-span-7 lg:col-start-6">
              <Reveal delay={0.1}>
                <p className="text-lead text-ivory/70 text-pretty">
                  Klass Marquees designs and builds bespoke marquees for
                  weddings, private celebrations and corporate events across
                  {" "}{siteConfig.location.city}, {siteConfig.location.region},
                  London and the Midlands. Every project starts with your venue
                  and your occasion, not a fixed package — the structure,
                  interior and lighting are planned as one composition around
                  what you actually need.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="text-lead text-ivory/70 text-pretty">
                  Because our own team carries a project from consultation
                  through to strike, design decisions stay grounded in what is
                  practical to build — and what is agreed at the first
                  conversation is what arrives on the day.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-24 text-ivory sm:py-28 lg:py-32">
        <Container>
          <SectionHeading eyebrow="What Guides Our Work" heading="Four principles, on every build." />
          <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-0 border-t border-ivory/12 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={(i % 2) * 0.08}>
                <div className={`border-b border-ivory/12 py-8 ${i % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                  <h3 className="font-serif text-h3 font-medium text-ivory">{value.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-ivory/65">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-elevated py-24 sm:py-28 lg:py-32">
        <Container className="max-w-3xl text-center">
          <Reveal>
            <Eyebrow className="justify-center">The People Behind It</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-5 text-h1 font-serif font-medium text-ivory text-balance">
              A dedicated team, on every build.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lead text-ivory/70 text-pretty">
              From design consultation to the final strike, your event is
              handled by our own in-house team. You can see more of the
              people and process behind each build on our Instagram.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-8 flex justify-center">
              <Button href={siteConfig.instagram} external variant="outlineLight">
                See {siteConfig.instagramHandle} on Instagram
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <EnquiryCTA heading="Come and talk to us." />
    </>
  );
}
