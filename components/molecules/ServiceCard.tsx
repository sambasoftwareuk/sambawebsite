import { Icon } from '../atoms/Icon';

type ServiceCardProps = {
  icon: 'code' | 'shop' | 'bolt';
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <article className="rounded-2xl bg-white p-8 transition-all duration-300 hover:-translate-y-2">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-indigo-100 text-indigo-600">
        <Icon className="h-7 w-7" name={icon} />
      </div>
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      <p className="leading-relaxed text-slate-600">{description}</p>
    </article>
  );
}
