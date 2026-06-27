'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface Job {
  id: string; title: string; company: string; location: string;
  type: string; status: string; applications: number;
}

export default function AdminJobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/jobs')
      .then(r => r.json())
      .then(setJobs)
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Link href="/admin" className="text-gold text-sm hover:underline inline-block mb-2">← Dashboard</Link>
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <h1 className="font-heading text-xl sm:text-2xl text-white">Jobs</h1>
        <Link href="/admin/jobs/new" className="btn-gold text-xs">+ New Job</Link>
      </div>

      {loading ? (
        <p className="text-white/30 text-sm py-8">Loading...</p>
      ) : (
        <>
          {/* Mobile: card list */}
          <div className="lg:hidden space-y-3">
            {jobs.map(job => (
              <Link key={job.id} href={`/admin/jobs/${job.id}`}
                    className="block bg-white rounded-card p-4 shadow-card">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-heading text-sm text-navy">{job.title}</h3>
                  <span className={`text-[9px] px-2 py-0.5 rounded font-medium shrink-0 ${job.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                    {job.status}
                  </span>
                </div>
                <p className="text-xs text-gray-500 mb-1">{job.company} · {job.location}</p>
                <p className="text-2xs text-gray-400">{job.type} · {job.applications} applications</p>
              </Link>
            ))}
          </div>

          {/* Desktop: table */}
          <div className="hidden lg:block bg-white rounded-card shadow-card overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">JOB TITLE</th>
                  <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">COMPANY</th>
                  <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">LOCATION</th>
                  <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">STATUS</th>
                  <th className="text-left px-6 py-4 text-2xs tracking-wider text-gray-400 font-semibold">APPS</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map(job => (
                  <tr key={job.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <Link href={`/admin/jobs/${job.id}`} className="font-semibold text-navy hover:text-gold">
                        {job.title}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{job.company}</td>
                    <td className="px-6 py-4 text-gray-500">{job.location}</td>
                    <td className="px-6 py-4">
                      <span className={`text-2xs px-2 py-0.5 rounded font-medium ${job.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'}`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{job.applications}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
