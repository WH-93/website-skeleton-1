import type { Variants, ViewportOptions } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;

export const aboutStoryViewport: ViewportOptions = {
  once: true,
  amount: 0.24,
};

export const aboutStorySectionVariants: Variants = {
  idle: {},
  ready: {
    transition: {
      delayChildren: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const aboutStoryIntroVariants: Variants = {
  idle: {
    opacity: 0,
    y: 24,
  },
  ready: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.72,
      ease: easeOut,
    },
  },
};

export const aboutStoryGridVariants: Variants = {
  idle: {},
  ready: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const aboutStoryCardVariants: Variants = {
  idle: {
    opacity: 0,
    y: 30,
    scale: 0.98,
  },
  ready: (index: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.03,
      duration: 0.64,
      ease: easeOut,
    },
  }),
};

export const aboutStorySceneVariants: Variants = {
  idle: {
    opacity: 0,
    scale: 0.96,
  },
  ready: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOut,
    },
  },
};

export const aboutStoryCtaVariants: Variants = {
  idle: {
    opacity: 0,
    y: 18,
  },
  ready: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};
