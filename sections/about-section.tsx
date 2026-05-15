import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button-link";

const values = [
  {
    title: "Small team, senior execution",
    description:
      "You work directly with the people building your product experience, without layers of account management.",
  },
  {
    title: "Quality over volume",
    description:
      "We intentionally take on fewer projects so each client gets focused thinking, clean implementation, and fast iteration.",
  },
  {
    title: "Built for growth",
    description:
      "Every project is structured to support performance, SEO foundations, and future feature expansion.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="A startup web agency focused on practical results."
          description="Samba Website is an independent team helping startups and small businesses launch modern websites, e-commerce experiences, and conversion-ready interfaces."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{value.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact">Let&apos;s Talk About Your Project</ButtonLink>
        </div>
      </Container>
    </section>
  );
}
