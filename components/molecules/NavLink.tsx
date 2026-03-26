type NavLinkProps = {
  label: string;
  active?: boolean;
};

export function NavLink({ label, active = false }: NavLinkProps) {
  return (
    <a
      className={`py-1 font-bold tracking-tight transition-colors ${
        active ? 'border-b-2 border-indigo-600 text-indigo-600' : 'text-slate-600 hover:text-indigo-500'
      }`}
      href="#"
    >
      {label}
    </a>
  );
}
