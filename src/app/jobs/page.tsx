'use client';

import { useEffect, useState, useMemo } from 'react';
import { JobCard } from '@/components/job-card';

interface Job {
  id: string;
  slug: string;
  title: string;
  company: string;
  location: string;
  type: string;
  sector: string;
  salary: string;
  createdAt: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    fetch('/api/jobs')
      .then(r => r.json())
      .then(data => setJobs(data.filter((j: any) => j.status !== 'Draft')))
      .catch(() => setJobs([]));
  }, []);

  const filtered = useMemo(() => {
    const kw = keyword.toLowerCase().trim();
    const loc = location.toLowerCase().trim();

    return jobs.filter(job => {
      if (kw && !job.title.toLowerCase().includes(kw)
            && !job.company.toLowerCase().includes(kw)
            && !job.sector.toLowerCase().includes(kw)) {
        return false;
      }
      if (loc && !job.location.toLowerCase().includes(loc)) {
        return false;
      }
      return true;
    });
  }, [jobs, keyword, location]);

  return (
    <>
      <section className="bg-navy pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="container-page">
          <h1 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
            Current Opportunities
          </h1>
          <p className="text-white/60 text-sm sm:text-base max-w-lg">
            Every role listed here has been briefed directly to us. No scraping, no aggregation — real jobs from real clients.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 section">
        <div className="container-page">
          <div className="bg-white rounded-card shadow-card p-4 sm:p-6 flex flex-col sm:flex-row gap-3 mb-4">
            <input
              type="text"
              placeholder="Job title, skill or keyword..."
              className="input-field flex-1"
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location..."
              className="input-field flex-1"
              value={location}
              onChange={e => setLocation(e.target.value)}
            />
            <button
              className="btn-gold-dark shrink-0"
              onClick={() => { setKeyword(''); setLocation(''); }}
            >
              Clear
            </button>
          </div>

          <p className="text-xs text-gray-400 mb-6">
            {filtered.length} role{filtered.length !== 1 ? 's' : ''} found
            {filtered.length !== jobs.length && ` (from ${jobs.length})`}
          </p>

          {filtered.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <p className="text-lg mb-1">No roles match your search</p>
              <p className="text-sm">Try different keywords or clear the filters</p>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {filtered.map(job => (
                <JobCard key={job.id} job={{
                  id: job.id,
                  slug: job.slug,
                  title: job.title,
                  company: job.company,
                  location: job.location,
                  type: job.type,
                  salary: job.salary || '',
                  postedAt: new Date(job.createdAt).toISOString().split('T')[0],
                }} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
