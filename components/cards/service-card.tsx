import type { Service } from "@/lib/types";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h3 className="text-xl font-semibold text-foreground">{service.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{service.description}</p>
      <ul className="mt-6 space-y-2 text-sm text-foreground/90">
        {service.bullets.map((bullet) => (
          <li key={bullet} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand transition-transform duration-300 group-hover:scale-125" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
