import Link from 'next/link';

export function JobCard({ job }: { job: {
  id: string; slug: string; title: string; company: string;
  location: string; type: string; salary?: string; postedAt: string;
} }) {
  return (
    <Link
      href={`/jobs/${job.slug}`}
      className="block bg-white rounded-card p-5 sm:p-6 shadow-card hover:shadow-card-lg
                 transition-shadow border border-gray-100"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-heading text-base sm:text-lg text-navy mb-1 truncate">
            {job.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{job.company}</p>
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-2xs sm:text-xs text-gray-400">
            <span>{job.location}</span>
            <span className="text-gold/30 hidden sm:inline">|</span>
            <span>{job.type}</span>
            {job.salary && (
              <>
                <span className="text-gold/30 hidden sm:inline">|</span>
                <span className="text-gold font-medium">{job.salary}</span>
              </>
            )}
            <span className="text-gold/30 hidden sm:inline">|</span>
            <span className="text-gray-300 text-[9px]">Ref: BC-{job.id.substring(0, 8)}</span>
          </div>
        </div>
        <span className="text-[9px] sm:text-2xs tracking-wider text-gold uppercase whitespace-nowrap shrink-0">
          {job.postedAt}
        </span>
      </div>
    </Link>
  );
}
