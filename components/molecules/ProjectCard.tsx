type ProjectCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  tags: string[];
};

export function ProjectCard({ title, description, imageSrc, imageAlt, tags }: ProjectCardProps) {
  return (
    <article className="group cursor-pointer">
      <div className="mb-6 overflow-hidden rounded-3xl bg-slate-100">
        <img alt={imageAlt} className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105" src={imageSrc} />
      </div>
      <h3 className="mb-2 text-2xl font-bold">{title}</h3>
      <p className="mb-4 text-slate-600">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-slate-200 px-3 py-1 text-xs font-semibold">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
