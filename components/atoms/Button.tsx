import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  as?: 'button' | 'a';
  href?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-indigo-600 text-white hover:scale-[0.98] shadow-lg hover:bg-indigo-500 focus-visible:outline-indigo-600',
  secondary:
    'bg-slate-200 text-slate-900 hover:bg-slate-300 focus-visible:outline-slate-500',
  ghost: 'bg-transparent text-slate-700 hover:text-indigo-600 focus-visible:outline-indigo-600'
};

export function Button({ children, variant = 'primary', className = '', as = 'button', href }: ButtonProps) {
  const baseClass = `inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${className}`;

  if (as === 'a') {
    return (
      <a className={baseClass} href={href}>
        {children}
      </a>
    );
  }

  return <button className={baseClass}>{children}</button>;
}
