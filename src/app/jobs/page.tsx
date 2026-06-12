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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = new Promise(resolve => setTimeout(resolve, 1600));
    const fetchJobs = fetch('/api/jobs')
      .then(r => r.json())
      .then(data => setJobs(data.filter((j: any) => j.status !== 'Draft')))
      .catch(() => setJobs([]));

    Promise.all([timer, fetchJobs]).then(() => setLoading(false));
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

  if (loading) {
    return (
      <div className="min-h-screen bg-navy flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin h-10 w-10 text-gold" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          <p className="text-white/40 text-xs tracking-wider">Loading vacancies...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="bg-navy pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="container-page">
          <h1 className="hero-title hero-title-reveal text-white mb-5">
            <span className="hero-title-line">Current</span>
            <span className="hero-title-line text-gold">Opportunities.</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base leading-7 max-w-xl">
            Every role has been discussed with my clients - please don&apos;t hesitate to contact me to discuss one, or quiz my market knowledge if the right fit isn&apos;t listed here.
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
