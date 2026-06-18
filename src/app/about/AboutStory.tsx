'use client';

import Link from 'next/link';
import { LazyMotion, MotionConfig, domAnimation, m } from 'framer-motion';
import { chapters, ctaButtonLabel, ctaCopy } from './content';
import {
  aboutStoryCardVariants,
  aboutStoryCardChildVariants,
  aboutStoryCtaVariants,
  aboutStoryIntroVariants,
  aboutStorySceneVariants,
} from './motionVariants';
import { StoryScene } from './StoryScene';

export function AboutStory() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <section
          id="about-proof"
          className="section about-story-section text-white"
        >
          <div className="container-page">
            <m.div
              className="about-story-intro"
              variants={aboutStoryIntroVariants}
              initial="idle"
              whileInView="ready"
              viewport={{ once: true, amount: 0.3 }}
            >
              <p className="eyebrow mb-4">Proof Beyond Data</p>
              <h2 id="about-proof-heading" className="font-heading text-3xl sm:text-4xl lg:text-5xl leading-tight">
                Recruitment is about the evidence a CV cannot show.
              </h2>
              <span className="gold-rule" />
            </m.div>

            <div className="about-story-grid">
              {chapters.map((chapter, index) => (
                <m.article
                  key={chapter.id}
                  id={chapter.id}
                  className="about-story-card-shell"
                  variants={aboutStoryCardVariants}
                  initial="idle"
                  whileInView="ready"
                  viewport={{ once: true, amount: 0.35 }}
                >
                  <m.div className="about-story-card-copy" variants={aboutStoryCardChildVariants}>
                    <h3 className="about-story-heading font-heading text-white">
                      {chapter.headline}
                    </h3>
                    <p className="about-story-copy text-white/70">
                      {chapter.supportingCopy}
                    </p>
                  </m.div>
                  <m.div
                    className="about-story-scene"
                    aria-hidden="true"
                    variants={aboutStorySceneVariants}
                  >
                    <StoryScene visual={chapter.visual} />
                  </m.div>
                </m.article>
              ))}
            </div>

            <m.div
              className="about-story-cta"
              variants={aboutStoryCtaVariants}
              initial="idle"
              whileInView="ready"
              viewport={{ once: true, amount: 0.4 }}
            >
              <p className="about-story-cta-copy font-heading text-white">
                {ctaCopy}
              </p>
              <Link href="/#contact" className="btn-gold about-story-cta-link">
                {ctaButtonLabel}
              </Link>
            </m.div>
          </div>
        </section>
      </LazyMotion>
    </MotionConfig>
  );
}
