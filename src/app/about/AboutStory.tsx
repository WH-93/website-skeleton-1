import Link from 'next/link';
import { chapters, ctaButtonLabel, ctaCopy } from './content';

export function AboutStory() {
  return (
    <section id="about-proof" className="section bg-navy text-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Proof Beyond Paper</p>
          <h2 id="about-proof-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Recruitment is about the evidence a CV cannot show.
          </h2>
          <span className="gold-rule" />
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="border border-white/15 bg-white/[0.03] p-6 min-h-[260px] flex flex-col"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                Proof {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-heading text-2xl leading-tight text-white">
                {chapter.headline}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/70">
                {chapter.supportingCopy}
              </p>
              <div
                className="mt-auto pt-8 text-[10px] font-bold uppercase tracking-[0.2em] text-white/35"
                aria-hidden="true"
              >
                {chapter.visual.type}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/15 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-heading text-2xl leading-tight text-white max-w-xl">
            {ctaCopy}
          </p>
          <Link href="/#contact" className="btn-gold self-start sm:self-auto">
            {ctaButtonLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
