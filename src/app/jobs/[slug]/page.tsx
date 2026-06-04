'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ApplyForm } from '@/components/apply-form';
import { getJobsArray } from '@/lib/jobs';

export default function JobDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [showApply, setShowApply] = useState(false);

  const job = getJobsArray().find(j => j.slug === slug);

  if (!job) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-2xl text-navy mb-4">Job Not Found</h1>
          <p className="text-gray-500 mb-6">This role may have been filled or removed.</p>
          <Link href="/jobs" className="btn-gold-dark text-sm">View all jobs</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="bg-navy pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">
            <span>{job.location}</span>
            <span>·</span>
            <span>{job.type}</span>
            <span>·</span>
            <span>{job.sector}</span>
            <span>·</span>
            <span>{`Ref: BC-${job.id.padStart(3, '0')}`}</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
            {job.title}
          </h1>
          <p className="text-white/60 text-sm sm:text-base">{job.company}</p>
          <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6">
            <span className="text-gold font-semibold text-sm sm:text-base">{job.salary}</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white/50 text-xs sm:text-sm">Posted {job.createdAt}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white section">
        <div className="container-page max-w-3xl">
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed
                          [&_strong]:text-navy [&_strong]:font-semibold
                          [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1">
            {job.description.split('\n\n').map((block, i) => {
              const strongHtml = block.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
              if (block.includes('\n• ')) {
                const intro = strongHtml.split('\n• ')[0];
                const items = block.split('\n• ').slice(1);
                const listItems = items.map(item => `<li>${item.trim()}</li>`).join('');
                const html = (intro ? `<p class="mb-3">${intro}</p>` : '') + `<ul>${listItems}</ul>`;
                return <div key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: html }} />;
              }
              return <p key={i} className="mb-4" dangerouslySetInnerHTML={{ __html: strongHtml.replace(/\n/g, '<br/>') }} />;
            })}
          </div>

          {/* Apply */}
          <div className="mt-10 sm:mt-12">
            {!showApply ? (
              <button onClick={() => setShowApply(true)}
                      className="btn-gold-dark text-sm sm:text-base px-10">
                Discuss this role
              </button>
            ) : (
              <ApplyForm jobTitle={job.title} jobId={job.id}
                         onClose={() => setShowApply(false)} />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
