'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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
  const [checked, setChecked] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setAuthed(!!getCookie('admin_token'));
    setChecked(true);
  }, []);

  // Still allow /admin/login as a direct access point
  if (pathname === '/admin/login') {
    return <>{children}</>;
  }

  // Don't show header until we've checked auth, or if not authed
  if (!checked || !authed) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner — matches public site Header style */}
      <header className="bg-navy sticky top-0 z-50">
        <div className="container-page flex items-center justify-between h-16 sm:h-20">
          {/* BC Logo */}
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
                ADMIN
              </div>
            </div>
          </Link>

          {/* Desktop admin nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href || (href !== '/admin' && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  className={`text-[10px] lg:text-xs tracking-wider font-semibold whitespace-nowrap transition-colors ${
                    isActive ? 'text-gold' : 'text-white/70 hover:text-gold'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Back to site + Sign Out + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="btn-gold text-[10px] px-4 sm:px-5 py-2 sm:py-2.5 shrink-0"
            >
              ← Back to Site
            </Link>
            <button
              onClick={async () => {
                await fetch('/api/auth/logout', { method: 'POST' });
                window.location.reload();
              }}
              className="text-[10px] tracking-wider text-white/60 hover:text-white transition-colors shrink-0 px-2"
            >
              Sign Out
            </button>

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
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="md:hidden bg-navy-800 border-t border-gold/10 pb-4">
            {navItems.map(({ label, href }) => {
              const isActive = pathname === href || (href !== '/admin' && pathname.startsWith(href));
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block w-full text-left px-5 py-3 text-xs tracking-wider transition-colors ${
                    isActive ? 'text-gold bg-white/5' : 'text-white/70 hover:text-gold hover:bg-white/5'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        )}
      </header>

      <div className="container-page py-8 sm:py-12">{children}</div>
    </div>
  );
}
