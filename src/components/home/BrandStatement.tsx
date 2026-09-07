import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

export default function BrandStatement() {
  return (
    <section className="bg-navy py-28 text-ivory sm:py-36">
      <Container className="max-w-5xl text-center">
        <Reveal variant="mask">
          <p className="text-display font-serif text-balance">
            Not simply a marquee.
            <br />
            <span className="italic text-accent-light">A venue designed from the ground up.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
