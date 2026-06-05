'use client';

import { useState } from 'react';
import { ApplyForm } from '@/components/apply-form';

export function ApplyButton({ jobTitle, jobId }: { jobTitle: string; jobId: string }) {
  const [showApply, setShowApply] = useState(false);

  if (!showApply) {
    return (
      <button onClick={() => setShowApply(true)}
              className="btn-gold-dark text-sm sm:text-base px-10">
        Discuss this role
      </button>
    );
  }

  return (
    <ApplyForm jobTitle={jobTitle} jobId={jobId}
               onClose={() => setShowApply(false)} />
  );
}
