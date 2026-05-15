import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeading } from "@/components/common/section-heading";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { projects } from "@/data/projects";

type PortfolioSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function PortfolioSection({ limit, showViewAll = false }: PortfolioSectionProps) {
  const visibleProjects = typeof limit === "number" ? projects.slice(0, limit) : projects;

  return (
    <section id="portfolio" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects built for real clients."
          description="A focused showcase of our recent work across nonprofit, e-commerce, and corporate websites."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {visibleProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {showViewAll ? (
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/works" variant="secondary">
              View All Works
            </ButtonLink>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
