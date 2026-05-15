import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="overflow-hidden rounded-xl border border-border bg-brand-soft/20">
        <Image
          src={project.image}
          alt={`${project.title} preview image`}
          width={1200}
          height={760}
          className="h-56 w-full object-contain py-1 transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.techStack.slice(0, 2).map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>
      <Link
        href={`/works/${project.id}`}
        className="mt-6 text-sm font-medium text-brand transition-colors duration-300 group-hover:text-blue-500"
        aria-label={`Open ${project.title} project details page`}
      >
        View project →
      </Link>
    </article>
  );
}
