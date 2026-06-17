import Link from 'next/link';
import { chapters, ctaButtonLabel, ctaCopy } from './content';
import { StoryScene } from './StoryScene';
import './aboutStory.css';

export function AboutStory() {
  return (
    <section id="about-proof" className="section about-story-section text-white">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">Proof Beyond Paper</p>
          <h2 id="about-proof-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Recruitment is about the evidence a CV cannot show.
          </h2>
          <span className="gold-rule" />
        </div>

        <div className="about-story-grid">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              id={chapter.id}
              className="about-story-card-shell"
            >
              <div className="about-story-scene" aria-hidden="true">
                <StoryScene visual={chapter.visual} />
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                Proof {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-5 font-heading text-2xl leading-tight text-white">
                {chapter.headline}
              </h3>
              <p className="mt-4 text-sm leading-6 text-white/70">
                {chapter.supportingCopy}
              </p>
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
