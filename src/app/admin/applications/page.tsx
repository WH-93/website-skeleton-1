'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Application {
  id: string;
  firstName: string; lastName: string; email: string;
  phone: string | null; cvKey: string; cvName: string;
  jobTitle: string; jobCompany: string;
  status: string; createdAt: string;
}

const STATUS_COLORS: Record<string, string> = {
  Applied:   'bg-blue-100 text-blue-700',
  Screened:  'bg-yellow-100 text-yellow-700',
  Interview: 'bg-purple-100 text-purple-700',
  Offer:     'bg-green-100 text-green-700',
  Hired:     'bg-emerald-100 text-emerald-700',
  Rejected:  'bg-red-100 text-red-700',
};

export default function ApplicationsPage() {
  const [apps, setApps] = useState<Application[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetch('/api/applications/list')
      .then(r => r.json())
      .then(setApps);
  }, []);

  const filtered = filter
    ? apps.filter(a =>
        `${a.firstName} ${a.lastName} ${a.email} ${a.jobTitle} ${a.jobCompany}`
          .toLowerCase().includes(filter.toLowerCase()))
    : apps;

  return (
    <div>
      <Link href="/admin" className="text-gold text-sm hover:underline inline-block mb-2">← Dashboard</Link>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="font-heading text-xl sm:text-2xl text-white">Applications & CVs</h1>
          <p className="text-white/40 text-xs sm:text-sm mt-1">
            {apps.length} total applications - click a CV name to download.
          </p>
        </div>
        <input
          type="text"
          placeholder="Filter by name, email, or job..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          className="input-field max-w-xs"
        />
      </div>

      {/* Mobile: card list */}
      <div className="lg:hidden space-y-3">
        {filtered.map(app => (
          <div key={app.id} className="bg-white rounded-card p-4 shadow-card">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div>
                <h3 className="font-sans text-sm font-semibold text-navy">
                  {app.firstName} {app.lastName}
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">{app.email}</p>
                {app.phone && <p className="text-xs text-gray-400">{app.phone}</p>}
              </div>
              <span className={`text-[9px] px-2 py-0.5 rounded font-medium shrink-0 ${STATUS_COLORS[app.status] || 'bg-gray-100 text-gray-500'}`}>
                {app.status}
              </span>
            </div>

            <div className="text-xs text-gray-400 mt-2">
              Applied for: <span className="text-gray-600 font-medium">{app.jobTitle}</span>
              <span className="mx-1">·</span>
              {app.jobCompany}
            </div>

            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
              <span className="text-2xs text-gray-400">
                {new Date(app.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
              </span>
              <a
                href={`/api/cv/${app.cvKey}`}
                className="text-2xs font-semibold text-gold hover:underline flex items-center gap-1"
              >
                📄 {app.cvName}
              </a>
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-10">No applications match your filter.</p>
        )}
      </div>

      {/* Desktop: table */}
      <div className="hidden lg:block bg-white rounded-card shadow-card overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">CANDIDATE</th>
              <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">JOB</th>
              <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">STATUS</th>
              <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">CV</th>
              <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">DATE</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(app => (
              <tr key={app.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-semibold text-navy">{app.firstName} {app.lastName}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{app.email}</div>
                  {app.phone && <div className="text-xs text-gray-400">{app.phone}</div>}
                </td>
                <td className="px-6 py-4">
                  <div className="text-gray-700">{app.jobTitle}</div>
                  <div className="text-xs text-gray-400">{app.jobCompany}</div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-2xs px-2 py-0.5 rounded font-medium ${STATUS_COLORS[app.status] || 'bg-gray-100 text-gray-500'}`}>
                    {app.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <a
                    href={`/api/cv/${app.cvKey}`}
                    className="text-gold hover:underline font-medium text-xs flex items-center gap-1"
                  >
                    📄 {app.cvName}
                  </a>
                </td>
                <td className="px-6 py-4 text-xs text-gray-400">
                  {new Date(app.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 py-10">No applications match your filter.</p>
        )}
      </div>
    </div>
  );
}
