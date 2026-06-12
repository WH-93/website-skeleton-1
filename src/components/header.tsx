'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { BcLogo } from '@/components/bc-logo';

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleMobileNav = (href: string) => {
    router.push(href);
  };

  // Close mobile menu when navigation completes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'ABOUT', href: '/about' },
    { label: 'SERVICES', href: '/services' },
    { label: 'CANDIDATES', href: '/candidates' },
    { label: 'CLIENTS', href: '/clients' },
    { label: 'JOBS', href: '/jobs' },
  ];

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-navy/5">
      <div className="container-page flex items-center justify-between h-20 sm:h-24">
        <Link href="/" className="flex items-center shrink-0" aria-label="BC Financial Search home">
          <BcLogo height={52} />
        </Link>

        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {navItems.map(item => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-[10px] font-bold tracking-wider transition-colors border-b pb-1 ${
                  active ? 'text-gold border-gold' : 'text-navy border-transparent hover:text-gold'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/#contact" className="btn-gold text-[10px] px-5 py-3">
            Contact
          </Link>
        </nav>

        <button
          className="lg:hidden flex flex-col gap-1 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className={`block w-5 h-0.5 bg-navy transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-navy transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-navy/5 pb-4 shadow-card">
          {navItems.map(item => (
            <button
              key={item.label}
              onClick={() => handleMobileNav(item.href)}
              className="mobile-nav-link"
            >
              {item.label}
            </button>
          ))}
          <div className="px-5 pt-3">
            <button onClick={() => handleMobileNav('/#contact')} className="btn-gold w-full text-center text-xs py-3">
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

