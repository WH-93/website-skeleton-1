import type { Variants } from 'framer-motion';

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeSmooth = [0.4, 0, 0.2, 1] as const;

export const aboutStoryIntroVariants: Variants = {
  idle: { opacity: 0, y: 28 },
  ready: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

// ── Card-level — slide up + scale, then children flow down ──

export const aboutStoryCardVariants: Variants = {
  idle: { opacity: 0, y: 44, scale: 0.96 },
  ready: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: easeSmooth,
      staggerChildren: 0.15,
      delayChildren: 0.14,
    },
  },
};

export const aboutStoryCardChildVariants: Variants = {
  idle: { opacity: 0, y: 18 },
  ready: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: easeOut },
  },
};

export const aboutStorySceneVariants: Variants = {
  idle: { opacity: 0, scale: 0.92 },
  ready: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.62,
      ease: easeOut,
      delay: 0.08,
      staggerChildren: 0.1,
    },
  },
};

export const aboutStoryCtaVariants: Variants = {
  idle: { opacity: 0, y: 28 },
  ready: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

// ═══════════════════════════════════════════════════
// Chapter 1 — Data flood → filter → funnel
// ═══════════════════════════════════════════════════

export const dataPhaseVariants: Variants = {
  idle: { opacity: 0 },
  ready: {
    opacity: 1,
    transition: { staggerChildren: 0.03, delayChildren: 0.2 },
  },
};

export const dataTileVariants: Variants = {
  idle: { opacity: 0, y: 8, scale: 0.92 },
  ready: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.28, ease: easeSmooth },
  },
};

export const filterRevealVariants: Variants = {
  idle: { opacity: 0, x: 24 },
  ready: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut, delay: 0.35 },
  },
};

export const fitPathVariants: Variants = {
  idle: { opacity: 0, pathLength: 0 },
  ready: (i: number) => ({
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.95, ease: easeSmooth, delay: 0.64 + i * 0.12 },
  }),
};

export const funnelStageVariants: Variants = {
  idle: { opacity: 0, scaleX: 0, originX: 0.5 },
  ready: (i: number) => ({
    opacity: 1,
    scaleX: 1,
    transition: { duration: 0.4, ease: easeSmooth, delay: 0.7 + i * 0.18 },
  }),
};

export const funnelOutputVariants: Variants = {
  idle: { opacity: 0, y: 14 },
  ready: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut, delay: 1.2 },
  },
};

// ═══════════════════════════════════════════════════
// Chapter 2 — Human factors / signal qualities
// ═══════════════════════════════════════════════════

export const signalPhaseVariants: Variants = {
  idle: { opacity: 0 },
  ready: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const signalCoreVariants: Variants = {
  idle: { opacity: 0, scale: 0.8, y: -10 },
  ready: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const signalCardVariants: Variants = {
  idle: { opacity: 0, y: 12 },
  ready: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export const signalFocusVariants: Variants = {
  idle: { opacity: 0, scale: 0.72 },
  ready: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: easeOut, delay: 0.62 },
  },
};

export const signalPathVariants: Variants = {
  idle: { opacity: 0, pathLength: 0 },
  ready: (i: number) => ({
    opacity: 1,
    pathLength: 1,
    transition: { duration: 0.48, ease: easeSmooth, delay: 0.34 + i * 0.08 },
  }),
};

// ═══════════════════════════════════════════════════
// Chapter 3 — Network graph: BC → sectors
// ═══════════════════════════════════════════════════

export const networkPhaseVariants: Variants = {
  idle: { opacity: 0 },
  ready: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const networkListVariants: Variants = {
  idle: {},
  ready: {
    transition: { staggerChildren: 0.09 },
  },
};

export const networkCoreVariants: Variants = {
  idle: { opacity: 0, scale: 0.5 },
  ready: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export const networkChipVariants: Variants = {
  idle: { opacity: 0, y: 8 },
  ready: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut, delay: 0.22 + i * 0.08 },
  }),
};

export const networkPathVariants: Variants = {
  idle: { opacity: 0, pathLength: 0 },
  ready: (i: number) => ({
    opacity: 1,
    pathLength: 1,
    transition: { duration: 1.05, ease: easeSmooth, delay: 0.22 + i * 0.045 },
  }),
};

export const networkLineVariants: Variants = {
  idle: { scaleX: 0, originX: 0 },
  ready: (i: number) => ({
    scaleX: 1,
    transition: { duration: 0.32, ease: easeSmooth, delay: 0.22 + i * 0.1 },
  }),
};

// ═══════════════════════════════════════════════════
// Chapter 4 — Pipeline narrowing + intertwine reveal
// ═══════════════════════════════════════════════════

export const pipelinePhaseVariants: Variants = {
  idle: { opacity: 0 },
  ready: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const pipelineStageVariants: Variants = {
  idle: { opacity: 0, y: 12 },
  ready: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.38, ease: easeOut, delay: 0.2 + i * 0.16 },
  }),
};

export const intertwinePhaseVariants: Variants = {
  idle: { opacity: 0 },
  ready: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.6 },
  },
};

export const intertwineLeftVariants: Variants = {
  idle: { opacity: 0, x: -28 },
  ready: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export const intertwineRightVariants: Variants = {
  idle: { opacity: 0, x: 28 },
  ready: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};
