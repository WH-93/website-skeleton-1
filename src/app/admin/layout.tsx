'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BcLogo } from '@/components/bc-logo';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? match[1] : null;
}

const navItems = [
  { label: 'DASHBOARD', href: '/admin' },
  { label: 'JOBS', href: '/admin/jobs' },
  { label: 'APPLICATIONS', href: '/admin/applications' },
  { label: 'PIPELINE', href: '/admin/pipeline' },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuthed(!!getCookie('admin_token'));
    setChecked(true);
  }, []);

  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  if (!checked || !authed) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-navy">
      <header className="bg-white sticky top-0 z-50 border-b border-navy/5">
        <div className="container-page flex items-center justify-between h-14 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-4 shrink-0">
            <BcLogo height={22} />
            <div className="hidden sm:block w-px h-8 bg-gold/30" />
            <div className="hidden sm:block leading-tight">
              <div className="text-[9px] tracking-widest text-gold font-medium">ADMIN</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href || (href !== '/admin' && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-2xs lg:text-xs tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    isActive ? 'text-gold' : 'text-navy/60 hover:text-gold'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.href = '/';
              }}
              className="btn-gold text-[9px] sm:text-2xs px-3 sm:px-5 py-1.5 sm:py-2.5 shrink-0"
            >
              &larr; <span className="hidden sm:inline">Back to </span>Site
            </button>
            <button
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.reload();
              }}
              className="hidden sm:inline text-2xs tracking-wider text-navy/40 hover:text-navy transition-colors shrink-0 px-2"
            >
              Sign Out
            </button>

            <button
              className="md:hidden flex flex-col gap-1 p-2"
              onClick={() => setOpen(!open)}
              aria-label="Menu"
            >
              <span className={`block w-5 h-0.5 bg-navy transition-transform ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block w-5 h-0.5 bg-navy transition-opacity ${open ? 'opacity-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-navy transition-transform ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-navy/5 pb-4 shadow-lg">
            <div className="px-5 py-3 border-b border-navy/5">
              <div className="text-[8px] tracking-widest text-gold font-medium mb-1">ADMIN</div>
            </div>
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href || (href !== '/admin' && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block w-full text-left px-5 py-3 text-xs tracking-wider transition-colors ${
                    isActive ? 'text-gold bg-warm-white' : 'text-navy/60 hover:text-gold hover:bg-warm-white'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="px-5 pt-3 mt-2 border-t border-navy/5">
              <button
                onClick={async () => {
                  await fetch('/api/auth/logout', { method: 'POST' });
                  window.location.reload();
                }}
                className="text-xs tracking-wider text-navy/40 hover:text-navy transition-colors"
              >
                Sign Out
              </button>
            </div>
          </div>
        )}
      </header>

      <div className="container-page py-8 sm:py-12">{children}</div>
    </div>
  );
}

