'use client';

import { useState, FormEvent, useEffect } from 'react';
import Link from 'next/link';

function getCookie(name: string) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? match[1] : null;
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [liveCount, setLiveCount] = useState(0);
  const [totalApps, setTotalApps] = useState(0);

  useEffect(() => {
    setAuthed(!!getCookie('admin_token'));
    setChecked(true);
  }, []);

  useEffect(() => {
    if (authed) {
      fetch('/api/jobs')
        .then(r => r.json())
        .then((jobs: any[]) => {
          setLiveCount(jobs.filter((j: any) => j.status === 'Live').length);
          setTotalApps(jobs.reduce((sum: number, j: any) => sum + (j.applications || 0), 0));
        })
        .catch(() => {});
    }
  }, [authed]);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');
    setLoginLoading(true);

    const form = e.target as HTMLFormElement;
    const password = new FormData(form).get('password') as string;

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      window.location.reload();
    } else {
      setError('Invalid password');
    }

    setLoginLoading(false);
  }

  if (!checked) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <p className="text-gray-400 text-sm">Loading...</p>
      </div>
    );
  }

  if (authed) {
    const stats = [
      { label: 'Active Jobs', value: String(liveCount), href: '/admin/jobs' },
      { label: 'Total Applications', value: String(totalApps), href: '/admin/applications' },
      { label: 'Interviews This Week', value: '3', href: '/admin/pipeline' },
      { label: 'Placements This Month', value: '2', href: '#' },
    ];

    return (
      <div className="max-w-5xl">
        <h1 className="font-heading text-xl sm:text-2xl text-navy mb-8 sm:mb-10">Dashboard</h1>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12">
          {stats.map(s => (
            <Link key={s.label} href={s.href}
                  className="bg-white rounded-card p-5 sm:p-7 shadow-card hover:shadow-card-lg transition-shadow">
              <div className="font-heading text-2xl sm:text-3xl text-navy mb-2">{s.value}</div>
              <div className="text-[10px] sm:text-xs tracking-wider text-gray-400">{s.label}</div>
            </Link>
          ))}
        </div>

        <h2 className="font-heading text-lg sm:text-xl text-navy mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-3">
          <Link href="/admin/jobs/new" className="btn-gold-dark text-xs">+ New Job</Link>
          <Link href="/admin/pipeline" className="btn-outline-dark text-xs">View Pipeline</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <span className="font-sans text-2xl font-bold text-navy">B</span>
              <span className="absolute font-sans text-2xl font-bold text-gold"
                    style={{ top: '2px', left: '14px' }}>C</span>
            </div>
          </div>
          <h1 className="font-heading text-xl text-navy">Admin Login</h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-card p-6 sm:p-8 shadow-card-lg space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              autoFocus
              className="input-field"
              placeholder="Enter admin password"
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm">{error}</p>
          )}

          <button type="submit" disabled={loginLoading}
                  className="btn-gold-dark w-full text-center disabled:opacity-50">
            {loginLoading ? 'Signing in...' : 'Sign In'}
          </button>
        </form>

        <p className="text-center text-gray-400 text-xs mt-6">
          BC Financial Search — Admin
        </p>
      </div>
    </div>
  );
}
