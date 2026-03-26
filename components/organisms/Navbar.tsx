'use client';

import { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { Icon } from '@/components/atoms/Icon';
import { NavLink } from '@/components/molecules/NavLink';

const links = ['Home', 'Services', 'Work', 'About', 'Contact'];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="text-xl font-black tracking-tight text-slate-900">Samba Software</div>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <NavLink key={link} active={index === 0} label={link} />
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
            {links.map((link, index) => (
              <NavLink key={link} active={index === 0} label={link} />
            ))}
            <Button className="w-full">Get a Free Consultation</Button>
          </div>
        </div>
      ) : null}
    </nav>
  );
}
