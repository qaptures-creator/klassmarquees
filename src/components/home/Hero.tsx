import { headers } from "next/headers";
import { mediaExists } from "@/lib/media";
import EditorialImage from "@/components/ui/EditorialImage";
import ParallaxWrapper from "@/components/ui/ParallaxWrapper";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { siteConfig } from "@/config/site";

export default async function Hero() {
  const headersList = await headers();
  const saveData = headersList.get("save-data") === "on";
  const hasVideo = !saveData && mediaExists("/videos/hero.mp4");
  const posterSrc = "/images/hero/hero-poster.jpg";

  return (
    <section className="relative flex h-[100svh] min-h-[42rem] w-full items-end overflow-hidden bg-navy text-ivory">
      <div className="absolute inset-0">
        <ParallaxWrapper range={7}>
          <div className="h-full w-full motion-safe:animate-[heroZoom_25s_ease-out_forwards]">
            {hasVideo ? (
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster={mediaExists(posterSrc) ? posterSrc : undefined}
              >
                <source src="/videos/hero.mp4" type="video/mp4" />
              </video>
            ) : (
              <EditorialImage
                src={posterSrc}
                alt="A candlelit luxury marquee interior, set for an evening celebration"
                category="hero"
                priority
                className="h-full w-full"
              />
            )}
          </div>
        </ParallaxWrapper>
      </div>

      {/* Slow drifting light bloom — ambient "light shift" over the image */}
      <div
        className="pointer-events-none absolute -inset-y-1/4 -inset-x-1/4 opacity-45 mix-blend-screen motion-safe:animate-[heroLightShift_22s_ease-in-out_infinite]"
        style={{
          background:
            "radial-gradient(ellipse 40% 35% at 50% 50%, rgba(156,190,211,0.5), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy via-navy/35 to-navy/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-transparent" />

      <Container className="relative z-10 pb-24 pt-40 sm:pb-28">
        <Reveal variant="mask">
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accent-light">
            Luxury Marquee Hire · {siteConfig.location.city}, {siteConfig.location.region}
          </p>
        </Reveal>
        <Reveal variant="mask" delay={0.12}>
          <h1 className="mt-6 max-w-4xl text-hero font-serif font-medium text-ivory">
            Extraordinary spaces.
            <br />
            <span className="italic text-accent-light">Unforgettable</span> occasions.
          </h1>
        </Reveal>
        <Reveal delay={0.55}>
          <p className="mt-8 max-w-xl text-lead text-ivory/80 text-pretty">
            {siteConfig.description}
          </p>
        </Reveal>
        <Reveal delay={0.68}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/contact">Plan Your Event</Button>
            <Button href="/gallery" variant="outlineLight">
              Explore Our Work
            </Button>
          </div>
        </Reveal>
      </Container>

      <a
        href="#credibility"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] uppercase tracking-[0.2em] text-ivory/70 transition-colors hover:text-ivory sm:flex"
      >
        <span>Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ivory/70 to-transparent motion-safe:animate-pulse" />
      </a>
    </section>
  );
}
