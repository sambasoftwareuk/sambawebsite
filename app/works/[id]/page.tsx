import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

import { projects } from "@/data/projects";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

type ProjectDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <Link
              href="/works"
              className="text-sm font-medium text-brand transition-colors hover:text-blue-500"
            >
              ← Back to works
            </Link>

            <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
              <Image
                src={project.image}
                alt={`${project.title} large preview image`}
                width={1200}
                height={760}
                className="h-auto max-h-[70vh] w-full object-contain bg-brand-soft/20 py-2"
              />
            </div>

            <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-4 text-base leading-8 text-muted sm:text-lg">
              {project.description}
            </p>

            <section className="mt-10">
              <h2 className="text-xl font-semibold text-foreground">Tech stack</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-surface px-4 py-2 text-sm text-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            <div className="mt-10">
              <ButtonLink href={project.link} className="px-7" variant="primary">
                Visit Website
              </ButtonLink>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
