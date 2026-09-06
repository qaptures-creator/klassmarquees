import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-obsidian px-6 py-32 text-center text-ivory">
      <Container className="max-w-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-bronze-light">404</p>
        <h1 className="mt-6 text-display font-serif font-medium text-balance">
          This page has been struck.
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lead text-ivory/70 text-pretty">
          The page you&rsquo;re looking for doesn&rsquo;t exist, or has moved.
          Let&rsquo;s get you back to somewhere useful.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="/">Return Home</Button>
          <Button href="/contact" variant="outlineLight">
            Plan Your Event
          </Button>
        </div>
      </Container>
    </section>
  );
}
