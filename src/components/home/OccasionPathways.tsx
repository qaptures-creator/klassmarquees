import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EditorialImage from "@/components/ui/EditorialImage";
import Reveal from "@/components/ui/Reveal";
import { servicePages } from "@/config/services";

const grow: Record<string, string> = {
  weddings: "lg:flex-[1.3]",
  "private-events": "lg:flex-1",
  corporate: "lg:flex-1",
};

export default function OccasionPathways() {
  return (
    <section className="bg-obsidian py-24 text-ivory sm:py-28 lg:py-32">
      <Container>
        <SectionHeading
          eyebrow="Occasions"
          heading="Every occasion, designed on its own terms."
          tone="light"
        />
        <div className="mt-14 flex flex-col gap-5 lg:flex-row lg:gap-6">
          {servicePages.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.1} className={`${grow[service.category]}`}>
              <Link
                href={`/${service.slug}`}
                className="group relative flex h-[26rem] flex-col justify-end overflow-hidden lg:h-[34rem]"
              >
                <EditorialImage
                  src={service.heroImage}
                  alt={service.heroHeadline}
                  category={service.galleryCategory}
                  fill
                  imgClassName="transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/90 via-obsidian/25 to-obsidian/10" />
                <div className="relative z-10 p-7 sm:p-9">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-bronze-light">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 max-w-xs font-serif text-h2 font-medium text-ivory text-balance">
                    {service.navLabel}
                  </h3>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] text-ivory/85 transition-colors group-hover:text-bronze-light">
                    Explore
                    <svg
                      aria-hidden="true"
                      width="14"
                      height="9"
                      viewBox="0 0 16 10"
                      fill="none"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <path
                        d="M0.5 5H15M15 5L11 1M15 5L11 9"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
