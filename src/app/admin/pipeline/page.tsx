'use client';

import Link from 'next/link';
import { Pipeline } from '@/components/pipeline';

const DEMO_CANDIDATES = [
  { id: '1', firstName: 'Sarah', lastName: 'Chen', email: 'sarah@email.com', status: 'Applied' },
  { id: '2', firstName: 'James', lastName: 'Wright', email: 'james@email.com', status: 'Applied' },
  { id: '3', firstName: 'Amina', lastName: 'Hassan', email: 'amina@email.com', status: 'Applied' },
  { id: '4', firstName: 'Tom', lastName: 'Barker', email: 'tom@email.com', status: 'Screened' },
  { id: '5', firstName: 'Elena', lastName: 'Rossi', email: 'elena@email.com', status: 'Interview' },
  { id: '6', firstName: 'David', lastName: 'Kim', email: 'david@email.com', status: 'Interview' },
  { id: '7', firstName: 'Rachel', lastName: 'Okafor', email: 'rachel@email.com', status: 'Offer' },
  { id: '8', firstName: 'Mark', lastName: 'Jones', email: 'mark@email.com', status: 'Rejected' },
  { id: '9', firstName: 'Lucy', lastName: 'Patel', email: 'lucy@email.com', status: 'Hired' },
];

export default function PipelinePage() {
  return (
    <div>
      <Link href="/admin" className="text-gold text-sm hover:underline inline-block mb-2">← Dashboard</Link>
      <div className="flex items-center justify-between mb-6 sm:mb-8">
        <div>
          <h1 className="font-heading text-xl sm:text-2xl text-navy">Candidate Pipeline</h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">Drag candidates between stages or use the arrow buttons.</p>
        </div>
      </div>
      <Pipeline candidates={DEMO_CANDIDATES} />
    </div>
  );
}
