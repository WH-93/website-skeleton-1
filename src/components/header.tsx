'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CANDIDATES', href: '/candidates' },
    { label: 'CLIENTS', href: '/clients' },
  ];

  return (
    <header className="bg-navy sticky top-0 z-50">
      <div className="container-page flex items-center justify-between h-16 sm:h-20">
        {/* Logo mark */}
        <Link href="/" className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center">
            <span className="font-sans text-xl sm:text-2xl font-bold text-white">B</span>
            <span className="absolute font-sans text-xl sm:text-2xl font-bold text-gold"
                  style={{ top: '2px', left: '11px' }}>C</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-gold/30" />
          <div className="hidden sm:block leading-tight">
            <div className="text-[10px] sm:text-[11px] tracking-wider text-white font-semibold">
              BC FINANCIAL
            </div>
            <div className="text-[8px] sm:text-[9px] tracking-widest text-gold font-medium">
              SEARCH
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[10px] lg:text-xs tracking-wider text-white/70 hover:text-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-gold text-[10px] px-5 py-2.5">
            Contact
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-white transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-navy-800 border-t border-gold/10 pb-4">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="mobile-nav-link"
            >
              {item.label}
            </Link>
          ))}
          <div className="px-5 pt-3">
            <Link href="/contact" onClick={() => setOpen(false)}
                  className="btn-gold w-full text-center text-xs py-2.5">
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
