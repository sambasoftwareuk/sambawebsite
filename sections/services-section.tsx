import { ServiceCard } from "@/components/cards/service-card";
import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything you need to launch and scale your digital presence."
          description="From frontend engineering to conversion-led e-commerce experiences, we deliver complete, growth-focused implementation."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
