import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-20 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(37,99,235,0.18),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.16),transparent_34%)]" />
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Premium Web Agency
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            We craft high-performance websites that turn visitors into paying clients.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            Samba Website delivers modern web development, Shopify e-commerce solutions,
            UI/UX design, and SEO-ready frontend systems tailored for business growth.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact">Get a Quote</ButtonLink>
            <ButtonLink href="/works" variant="secondary">
              View Our Work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
