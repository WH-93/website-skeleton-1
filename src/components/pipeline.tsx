'use client';

import { useState } from 'react';

const STAGES = ['Applied', 'Screened', 'Interview', 'Offer', 'Hired', 'Rejected'] as const;

type Candidate = { id: string; firstName: string; lastName: string; email: string; status: string };

export function Pipeline({ candidates: initial }: { candidates: Candidate[] }) {
  const [candidates, setCandidates] = useState(initial);

  async function moveStage(id: string, newStatus: string) {
    setCandidates(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
    await fetch(`/api/applications/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus }),
    });
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
      {STAGES.map(stage => {
        const items = candidates.filter(c => c.status === stage);
        return (
          <div key={stage} className="bg-gray-50 rounded-card p-3 sm:p-4 min-h-[200px]">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-[9px] sm:text-2xs font-semibold text-gray-400 uppercase tracking-wider">
                {stage}
              </h4>
              <span className="text-[9px] sm:text-2xs font-medium bg-white px-2 py-0.5 rounded text-gray-500">
                {items.length}
              </span>
            </div>
            <div className="space-y-2">
              {items.map(c => (
                <div key={c.id} className="bg-white rounded p-2.5 sm:p-3 shadow-sm border border-gray-100">
                  <p className="text-xs sm:text-sm font-semibold text-gray-800">
                    {c.firstName} {c.lastName}
                  </p>
                  <p className="text-2xs sm:text-xs text-gray-400 mt-0.5">{c.email}</p>
                  <div className="flex gap-1 mt-2">
                    {STAGES[STAGES.indexOf(stage) - 1] && (
                      <button onClick={() => moveStage(c.id, STAGES[STAGES.indexOf(stage) - 1])}
                              className="text-2xs text-gray-400 hover:text-gray-600 px-1">←</button>
                    )}
                    {STAGES[STAGES.indexOf(stage) + 1] && (
                      <button onClick={() => moveStage(c.id, STAGES[STAGES.indexOf(stage) + 1])}
                              className="text-2xs text-gold hover:text-gold-500 ml-auto px-1">→</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
