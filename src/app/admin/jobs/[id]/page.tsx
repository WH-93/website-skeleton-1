'use client';

import Link from 'next/link';
import { useRouter, useParams } from 'next/navigation';
import { useState, useEffect, FormEvent } from 'react';
import { JOBS, type Job } from '@/lib/jobs';

export default function JobDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [job, setJob] = useState<Job | null>(null);
  const [editing, setEditing] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const found = JOBS[id];
    if (found) setJob({ ...found });
  }, [id]);

  if (!job) {
    return (
      <div className="max-w-2xl">
        <Link href="/admin/jobs" className="text-gold text-sm hover:underline">← Back to Jobs</Link>
        <div className="bg-white rounded-card shadow-card p-8 text-center mt-6">
          <h2 className="font-heading text-xl text-navy mb-2">Job Not Found</h2>
          <p className="text-gray-400 text-sm">The job you're looking for doesn't exist or has been removed.</p>
          <Link href="/admin/jobs" className="btn-gold-dark text-xs mt-6 inline-block">Back to Jobs</Link>
        </div>
      </div>
    );
  }

  function handleSave(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (!job) return;

    const updates: Partial<Job> = {
      title: (fd.get('title') as string) || job.title,
      company: (fd.get('company') as string) || job.company,
      location: (fd.get('location') as string) || job.location,
      salary: (fd.get('salary') as string) || job.salary,
      type: (fd.get('type') as string) || job.type,
      sector: (fd.get('sector') as string) || job.sector,
      status: (fd.get('status') as string) || job.status,
      description: (fd.get('description') as string) || job.description,
    };

    setSaving(true);
    const updated = { ...job, ...updates };
    JOBS[id] = updated; // shared store — visible to jobs list
    setJob(updated);
    setEditing(false);
    setSaving(false);
  }

  function handleDelete() {
    delete JOBS[id];
    router.push('/admin/jobs');
  }

  return (
    <div className="max-w-3xl">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Link href="/admin/jobs" className="text-gold text-sm hover:underline">← Back</Link>
        <h1 className="font-heading text-xl sm:text-2xl text-navy">
          {editing ? 'Edit ' : ''}{job.title}
        </h1>
      </div>

      <div className="bg-white rounded-card shadow-card p-5 sm:p-8 space-y-6">

        {!editing ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {[
                { label: 'Company', value: job.company },
                { label: 'Location', value: job.location },
                { label: 'Type', value: job.type },
                { label: 'Sector', value: job.sector },
                { label: 'Salary', value: job.salary },
                { label: 'Status', value: job.status },
                { label: 'Applications', value: String(job.applications) },
                { label: 'Posted', value: job.createdAt },
              ].map(item => (
                <div key={item.label}>
                  <p className="text-[10px] tracking-wider text-gray-400 font-semibold mb-0.5">{item.label.toUpperCase()}</p>
                  <p className={`text-sm ${item.label === 'Status' ? (job.status === 'Live' ? 'text-green-600 font-medium' : 'text-gray-500') : 'text-navy font-medium'}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-6">
              <h3 className="text-[10px] tracking-wider text-gray-400 font-semibold mb-3">DESCRIPTION</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{job.description}</p>
            </div>

            <div className="border-t border-gray-100 pt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={() => setEditing(true)} className="btn-gold-dark text-sm text-center">Edit Job</button>
              <button onClick={() => setShowDelete(true)} className="btn-outline-dark text-sm text-center">Delete Job</button>
            </div>
          </>
        ) : (
          <form onSubmit={handleSave} className="space-y-4 sm:space-y-5">
            {[
              { name: 'title', label: 'Job Title *', type: 'text', defaultValue: job.title },
              { name: 'company', label: 'Company', type: 'text', defaultValue: job.company },
              { name: 'location', label: 'Location', type: 'text', defaultValue: job.location },
              { name: 'salary', label: 'Salary', type: 'text', defaultValue: job.salary },
            ].map(f => (
              <div key={f.name}>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">{f.label}</label>
                <input name={f.name} type={f.type} required={f.label.includes('*')}
                       className="input-field" defaultValue={f.defaultValue} />
              </div>
            ))}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Type</label>
                <select name="type" className="input-field" defaultValue={job.type}>
                  <option>Full-time</option><option>Part-time</option><option>Contract</option>
                </select>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Sector</label>
                <select name="sector" className="input-field" defaultValue={job.sector}>
                  <option>Practice</option><option>Tax</option><option>In-House Tax</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Status</label>
              <select name="status" className="input-field" defaultValue={job.status}>
                <option>Live</option><option>Draft</option><option>Closed</option>
              </select>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Description</label>
              <textarea name="description" rows={8} required className="input-field" defaultValue={job.description} />
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button type="submit" disabled={saving} className="btn-gold-dark text-sm flex-1 sm:flex-none">
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
              <button type="button" onClick={() => setEditing(false)} className="btn-outline-dark text-sm text-center flex-1 sm:flex-none">
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Delete confirmation modal */}
      {showDelete && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-5">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowDelete(false)} />
          <div className="relative bg-white rounded-card shadow-card-lg p-6 sm:p-8 max-w-sm w-full">
            <h3 className="font-heading text-lg text-navy mb-2">Delete this job?</h3>
            <p className="text-sm text-gray-500 mb-6">
              This will permanently remove <strong className="text-navy">{job.title}</strong>. This action cannot be undone.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={handleDelete} className="btn-gold-dark text-sm flex-1">Yes, Delete</button>
              <button onClick={() => setShowDelete(false)} className="btn-outline-dark text-sm flex-1">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
