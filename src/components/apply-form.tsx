'use client';

import { useState, FormEvent } from 'react';

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(',')[1]);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function ApplyForm({ jobTitle, jobId, onClose }: {
  jobTitle: string;
  jobId: string;
  onClose: () => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSending(true);
    setError('');

    const form = e.target as HTMLFormElement;
    const fd = new FormData(form);

    try {
      const cvData = file ? await fileToBase64(file) : null;
      const cvKey = file ? `cvs/${Date.now()}-${file.name}` : null;

      const res = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jobId,
          firstName: fd.get('firstName'),
          lastName: fd.get('lastName'),
          email: fd.get('email'),
          phone: fd.get('phone') || null,
          cvKey,
          cvName: file?.name || null,
          cvData,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Submission failed');
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gold/10 rounded-card text-center">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-gold mb-2">
          Application submitted
        </h3>
        <p className="text-gray-600 text-sm">We'll be in touch within 48 hours.</p>
      </div>
    );
  }

  return (
    <div className="mt-6 sm:mt-8 card-white shadow-card-lg">
      <div className="flex items-center justify-between mb-5 sm:mb-6">
        <h3 className="font-heading text-lg sm:text-xl font-semibold text-navy">
          Apply for {jobTitle}
        </h3>
        <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-sm">
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">First Name *</label>
            <input name="firstName" required className="input-field" placeholder="Jane" />
          </div>
          <div>
            <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Last Name *</label>
            <input name="lastName" required className="input-field" placeholder="Smith" />
          </div>
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input name="email" type="email" required className="input-field" placeholder="jane@company.co.uk" />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">Phone</label>
          <input name="phone" className="input-field" placeholder="07700 000000" />
        </div>

        <div>
          <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">CV </label>
          <input
            type="file" required accept=".pdf,.doc,.docx"
            onChange={e => setFile(e.target.files?.[0] || null)}
            className="block w-full text-xs sm:text-sm text-gray-500
                       file:mr-4 file:py-2 file:px-4 file:rounded file:border-0
                       file:text-xs file:font-semibold file:bg-gold/10 file:text-gold
                       hover:file:bg-gold/20"
          />
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" required className="mt-1 shrink-0" />
          <label className="text-[10px] sm:text-xs text-gray-500">
            I consent to BC Financial Search storing my data in accordance with the{' '}
            <a href="/privacy" className="text-gold underline">Privacy Policy</a>.
          </label>
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button type="submit" disabled={sending}
                className="btn-gold-dark w-full text-center disabled:opacity-50">
          {sending ? 'Submitting...' : 'Submit Application'}
        </button>
      </form>
    </div>
  );
}
