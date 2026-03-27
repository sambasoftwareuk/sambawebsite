'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { NavLink } from '../molecules/NavLink';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Work', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' }
] as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-black tracking-tight text-slate-900">Samba Software</div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.label} active={pathname === link.href} href={link.href} label={link.label} />
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button className="hidden md:inline-flex">Get a Free Consultation</Button>
          <button aria-label="Toggle menu" className="text-slate-900 md:hidden" onClick={() => setIsOpen((prev) => !prev)}>
            <Icon name={isOpen ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {isOpen ? (
        <div className="border-t border-slate-200 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <NavLink key={link.label} active={pathname === link.href} href={link.href} label={link.label} />
            ))}
            <Button className="w-full">Get a Free Consultation</Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
