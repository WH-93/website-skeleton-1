import { PrismaClient } from '@prisma/client';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ApplyButton } from '@/components/apply-button';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function JobDetailPage({ params }: { params: { slug: string } }) {
  const job = await prisma.job.findUnique({
    where: { slug: params.slug, status: 'Live' },
    include: { _count: { select: { applications: true } } },
  });

  if (!job) notFound();

  const { _count, ...data } = job;

  return (
    <>
      <section className="bg-navy pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="container-page">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/50 mb-4 sm:mb-6">
            <span>{data.location}</span>
            <span>·</span>
            <span>{data.type}</span>
            <span>·</span>
            <span>{data.sector}</span>
            <span>·</span>
            <span>{`Ref: BC-${data.id}`}</span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
            {data.title}
          </h1>
          <p className="text-white/60 text-sm sm:text-base">{data.company}</p>
          <div className="flex flex-wrap items-center gap-4 mt-4 sm:mt-6">
            <span className="text-gold font-semibold text-sm sm:text-base">{data.salary}</span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="text-white/50 text-xs sm:text-sm">
              Posted {new Date(data.createdAt).toISOString().split('T')[0]}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white section">
        <div className="container-page max-w-3xl">
          <div className="prose prose-sm sm:prose-base max-w-none text-gray-700 leading-relaxed
                          [&_strong]:text-navy [&_strong]:font-semibold
                          [&_ul]:list-disc [&_ul]:pl-5 [&_li]:mb-1">
            {data.description.split('\n\n').map((block, i) => {
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

          <div className="mt-10 sm:mt-12">
            <ApplyButton jobTitle={data.title} jobId={data.id} />
          </div>
        </div>
      </section>
    </>
  );
}
