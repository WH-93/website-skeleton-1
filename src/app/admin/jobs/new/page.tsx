'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

export default function NewJobPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));
    const slug = (data.title as string).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    await fetch('/api/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data, slug }),
    });

    router.push('/admin/jobs');
  }

  const fields = [
    { name: 'title', label: 'Job Title *', type: 'text', placeholder: 'Audit Senior Manager' },
    { name: 'company', label: 'Company', type: 'text', placeholder: 'Top 20 Accountancy Practice' },
    { name: 'location', label: 'Location', type: 'text', placeholder: 'London' },
    { name: 'salary', label: 'Salary', type: 'text', placeholder: '£75,000 — £90,000' },
  ];

  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <Link href="/admin/jobs" className="text-gold text-sm hover:underline">← Back</Link>
        <h1 className="font-heading text-xl sm:text-2xl text-navy">New Job</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-card shadow-card p-5 sm:p-8 space-y-4 sm:space-y-5">
        {fields.map(f => (
          <div key={f.name}>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">{f.label}</label>
            <input name={f.name} type={f.type} required={f.label.includes('*')}
                   className="input-field" placeholder={f.placeholder} />
          </div>
        ))}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Type</label>
            <select name="type" className="input-field">
              <option>Full-time</option><option>Part-time</option><option>Contract</option>
            </select>
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Sector</label>
            <select name="sector" className="input-field">
              <option>Practice</option><option>Tax</option><option>In-House Tax</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea name="description" rows={10} required
                    className="input-field" placeholder="Full job description..." />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button type="submit" disabled={saving}
                  className="btn-gold-dark text-sm flex-1 sm:flex-none disabled:opacity-50">
            {saving ? 'Posting...' : 'Post Job'}
          </button>
          <Link href="/admin/jobs"
                className="btn-outline-dark text-sm text-center flex-1 sm:flex-none">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
