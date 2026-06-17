'use client';

import Link from 'next/link';
import { LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion';
import { chapters, ctaButtonLabel, ctaCopy } from './content';
import {
  aboutStoryCardVariants,
  aboutStoryCtaVariants,
  aboutStoryGridVariants,
  aboutStoryIntroVariants,
  aboutStorySceneVariants,
  aboutStorySectionVariants,
  aboutStoryViewport,
} from './motionVariants';
import { StoryScene } from './StoryScene';

export function AboutStory() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <m.section
          id="about-proof"
          className="section about-story-section text-white"
          variants={aboutStorySectionVariants}
          initial="idle"
          whileInView="ready"
          viewport={aboutStoryViewport}
        >
          <div className="container-page">
            <m.div className="about-story-intro" variants={aboutStoryIntroVariants}>
              <p className="eyebrow mb-4">Proof Beyond Paper</p>
              <h2 id="about-proof-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Recruitment is about the evidence a CV cannot show.
              </h2>
              <span className="gold-rule" />
            </m.div>

            <m.div className="about-story-grid" variants={aboutStoryGridVariants}>
              {chapters.map((chapter, index) => (
                <m.article
                  key={chapter.id}
                  id={chapter.id}
                  className="about-story-card-shell"
                  variants={aboutStoryCardVariants}
                  custom={index}
                >
                  <m.div className="about-story-scene" aria-hidden="true" variants={aboutStorySceneVariants}>
                    <StoryScene visual={chapter.visual} />
                  </m.div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                    Proof {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="about-story-heading font-heading text-white">
                    {chapter.headline}
                  </h3>
                  <p className="about-story-copy text-white/70">
                    {chapter.supportingCopy}
                  </p>
                </m.article>
              ))}
            </m.div>

            <m.div className="about-story-cta" variants={aboutStoryCtaVariants}>
              <p className="about-story-cta-copy font-heading text-white">
                {ctaCopy}
              </p>
              <Link href="/#contact" className="btn-gold about-story-cta-link">
                {ctaButtonLabel}
              </Link>
            </m.div>
          </div>
        </m.section>
      </LazyMotion>
    </MotionConfig>
  );
}
