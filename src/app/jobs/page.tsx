import { PrismaClient } from '@prisma/client';
import { JobCard } from '@/components/job-card';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function JobsPage() {
  const jobs = await prisma.job.findMany({
    where: { status: 'Live' },
    orderBy: { createdAt: 'desc' },
    include: { _count: { select: { applications: true } } },
  });

  const mapped = jobs.map(({ _count, ...job }) => ({
    ...job,
    applications: _count.applications,
  }));

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
          <div className="bg-white rounded-card shadow-card p-4 sm:p-6 flex flex-col sm:flex-row gap-3 mb-8">
            <input type="text" placeholder="Job title, skill or keyword..." className="input-field flex-1" />
            <input type="text" placeholder="Location..." className="input-field flex-1" />
            <button className="btn-gold-dark shrink-0">Search Jobs</button>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {mapped.map(job => (
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
        </div>
      </section>
    </>
  );
}
