import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

const variantClasses = {
  primary:
    "bg-brand text-white shadow-lg shadow-blue-200 hover:-translate-y-0.5 hover:bg-blue-500",
  secondary:
    "border border-border bg-surface text-foreground hover:-translate-y-0.5 hover:border-brand/30 hover:bg-brand-soft/50",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const commonClassName = `inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 ${variantClasses[variant]} ${className}`;
  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClassName}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={commonClassName}>
      {children}
    </Link>
  );
}
