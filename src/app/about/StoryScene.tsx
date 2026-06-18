'use client';

import { m } from 'framer-motion';
import type { ChapterVisual } from './content';
import {
  dataPhaseVariants,
  dataTileVariants,
  filterRevealVariants,
  fitPathVariants,
  funnelStageVariants,
  funnelOutputVariants,
  signalPhaseVariants,
  signalFocusVariants,
  signalPathVariants,
  networkPhaseVariants,
  networkListVariants,
  networkChipVariants,
  networkPathVariants,
  pipelinePhaseVariants,
  pipelineStageVariants,
} from './motionVariants';

interface StorySceneProps {
  visual: ChapterVisual;
}

export function StoryScene({ visual }: StorySceneProps) {
  switch (visual.type) {
    case 'cv-cards':
      return <DataFilterVisual labels={visual.data.labels} filterLabel={visual.data.filterLabel} />;
    case 'human-factors':
      return <HumanFactorsVisual labels={visual.data.labels} />;
    case 'network-graph':
      return <NetworkGraphVisual centralLabel={visual.data.centralLabel} sectorLabels={visual.data.sectorLabels} />;
    case 'transformation':
      return <TransformationVisual stageLabels={visual.data.stageLabels} finalCards={visual.data.finalCards} />;
  }
}

const SURFACE_DATA = [
  'CV', 'Salary', 'Location', 'Experience', 'Qualifications',
  'Job Title', 'Industry', 'Education', 'Skills', 'Tenure',
  'Certifications', 'Languages', 'Availability', 'References', 'Notice',
];

const DATA_STREAM = ['ATS', 'keywords', 'salary', 'location', 'years', 'score', 'match'];

const FUNNEL_STAGES = [
  { label: '40 algorithmically selected candidates', width: '100%', tone: 'neutral' },
  { label: '18 keyword matches', width: '62%', tone: 'neutral' },
  { label: '7 score almost the same', width: '38%', tone: 'warning' },
  { label: 'context missing', width: '22%', tone: 'danger' },
];

const CONTEXT_LOSS = ['Motivation', 'Ambition', 'Role fit'];

const SIGNAL_WEB_PATHS = [
  'M118 42 C214 14 426 14 522 42',
  'M104 168 C156 96 222 58 296 100',
  'M536 168 C484 96 418 58 344 100',
  'M118 298 C214 326 426 326 522 298',
  'M104 168 C156 244 222 282 296 240',
  'M536 168 C484 244 418 282 344 240',
];

const SIGNAL_PATHS = [
  'M118 42 C198 70 258 124 320 168',
  'M522 42 C442 70 382 124 320 168',
  'M520 168 C454 168 386 168 320 168',
  'M120 168 C186 168 254 168 320 168',
  'M118 298 C198 270 258 216 320 168',
  'M522 298 C442 270 382 216 320 168',
];

const NETWORK_BRANCH_PATHS = [
  'M188 66 C168 54 146 48 122 50',
  'M218 85 C192 90 171 101 150 116',
  'M318 93 C298 87 278 83 256 84',
  'M322 106 C346 100 368 98 390 102',
  'M452 66 C472 54 494 48 518 50',
  'M422 85 C448 90 469 101 490 116',
  'M452 256 C472 268 494 274 518 272',
  'M422 237 C448 232 469 221 490 206',
  'M318 234 C296 240 276 242 252 238',
  'M322 220 C346 226 368 228 392 224',
  'M188 263 C168 274 146 280 122 278',
  'M218 244 C192 239 171 228 150 213',
];

const NETWORK_TWIG_PATHS = [
  'M158 55 C138 45 120 42 98 45',
  'M174 71 C152 70 134 64 114 55',
  'M176 98 C153 102 134 112 114 128',
  'M202 103 C184 116 168 126 148 132',
  'M292 88 C272 77 253 72 232 72',
  'M350 98 C372 91 392 88 414 92',
  'M482 55 C502 45 520 42 542 45',
  'M466 71 C488 70 506 64 526 55',
  'M464 98 C487 102 506 112 526 128',
  'M438 103 C456 116 472 126 492 132',
  'M482 267 C502 277 520 280 542 277',
  'M466 251 C488 252 506 258 526 267',
  'M464 224 C487 220 506 210 526 194',
  'M438 219 C456 206 472 196 492 190',
  'M350 222 C372 229 392 232 414 228',
  'M292 232 C272 243 253 248 232 248',
  'M158 273 C138 283 120 286 98 283',
  'M174 257 C152 258 134 264 114 273',
  'M176 230 C153 226 134 216 114 200',
  'M202 225 C184 212 168 202 148 196',
];

const NETWORK_PATHS = [
  'M118 47 C174 58 238 100 300 142',
  'M320 47 C320 84 320 118 320 148',
  'M522 47 C466 58 402 100 340 142',
  'M522 275 C466 264 402 220 340 178',
  'M320 279 C320 242 320 204 320 172',
  'M118 282 C174 268 238 220 300 178',
];

function DataFilterVisual({ labels: _labels, filterLabel }: { labels: string[]; filterLabel: string }) {
  return (
    <m.div
      className="about-story-visual about-story-data-visual"
      role="img"
      aria-label="Automated recruitment filters surface data but misses what matters"
      variants={dataPhaseVariants}
    >
      <div className="about-story-data-stream" aria-hidden="true">
        {DATA_STREAM.map((label) => (
          <span key={label}>{label}</span>
        ))}
      </div>

      <div className="about-story-data-grid">
        {SURFACE_DATA.map((label, i) => (
          <m.div
            key={label}
            className={`about-story-data-tile about-story-data-tile--${(i % 5) + 1}${i >= 11 ? ' about-story-data-tile--dim' : ''}`}
            variants={dataTileVariants}
          >
            <span className="about-story-data-icon">{label.slice(0, 2).toUpperCase()}</span>
            <span>{label}</span>
          </m.div>
        ))}
      </div>

      <m.div className="about-story-filter-panel" variants={filterRevealVariants}>
        <span className="about-story-filter-lines" />
        <span>{filterLabel} by surface criteria</span>
        <span className="about-story-filter-scan" aria-hidden="true" />
      </m.div>

      <div className="about-story-funnel">
        {FUNNEL_STAGES.map((stage, i) => (
          <m.div
            key={stage.label}
            className={`about-story-funnel-stage about-story-funnel-stage--${stage.tone}`}
            variants={funnelStageVariants}
            custom={i}
          >
            <m.div
              className="about-story-funnel-bar"
              style={{ width: stage.width }}
            />
            <span className="about-story-funnel-label">{stage.label}</span>
          </m.div>
        ))}
      </div>

      <m.div className="about-story-output-row" variants={funnelOutputVariants}>
        <span className="about-story-output-card">Same score</span>
        <span className="about-story-output-card">Same profile</span>
      </m.div>

      <m.div className="about-story-loss-panel" variants={funnelOutputVariants}>
        <span>Context lost</span>
        <div>
          {CONTEXT_LOSS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>
      </m.div>
    </m.div>
  );
}

function HumanFactorsVisual({ labels }: { labels: string[] }) {
  return (
    <m.div
      className="about-story-visual about-story-signals-visual"
      role="img"
      aria-label="Human qualities that distinguish good from great appointments"
      variants={signalPhaseVariants}
    >
      <m.svg className="about-story-signal-lines" viewBox="0 0 640 340" aria-hidden="true">
        {SIGNAL_WEB_PATHS.map((path, index) => (
          <m.path
            key={path}
            className="about-story-signal-web-path"
            d={path}
            variants={signalPathVariants}
            custom={index}
          />
        ))}
        {SIGNAL_PATHS.map((path, index) => (
          <m.path
            key={path}
            className="about-story-signal-path"
            d={path}
            variants={signalPathVariants}
            custom={index}
          />
        ))}
      </m.svg>

      <m.div className="about-story-signal-focus" variants={signalFocusVariants} aria-hidden="true">
        <span />
      </m.div>

      <div className="about-story-signal-grid">
        {labels.slice(0, 6).map((label, index) => (
          <div
            key={label}
            className={`about-story-signal-card about-story-signal-card--${index + 1}`}
          >
            <span className="about-story-signal-mark" />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </m.div>
  );
}

function NetworkGraphVisual({ centralLabel, sectorLabels }: { centralLabel: string; sectorLabels: string[] }) {
  const labelPairs = Array.from({ length: 6 }, (_, index) => ({
    primary: sectorLabels[index] ?? '',
    secondary: sectorLabels[index + 6] ?? sectorLabels[index] ?? '',
  }));

  return (
    <m.div
      className="about-story-visual about-story-network-visual"
      role="img"
      aria-label="Specialist network of relationships across financial sectors"
      variants={networkPhaseVariants}
    >
      <m.svg className="about-story-network-lines" viewBox="0 0 640 320" aria-hidden="true">
        {NETWORK_TWIG_PATHS.map((path, index) => (
          <m.path
            key={path}
            className="about-story-network-twig-path"
            d={path}
            variants={networkPathVariants}
            custom={index}
          />
        ))}
        {NETWORK_BRANCH_PATHS.map((path, index) => (
          <m.path
            key={path}
            className="about-story-network-branch-path"
            d={path}
            variants={networkPathVariants}
            custom={index}
          />
        ))}
        {NETWORK_PATHS.map((path, index) => (
          <m.path
            key={path}
            className="about-story-network-path"
            d={path}
            variants={networkPathVariants}
            custom={index}
          />
        ))}
      </m.svg>

      <m.div className="about-story-network-logo" variants={networkListVariants}>
        <img src="/bc-financial-logo-full.svg" alt="" />
        <span className="sr-only">{centralLabel}</span>
      </m.div>

      <m.div className="about-story-network-list" variants={networkListVariants}>
        {labelPairs.map(({ primary, secondary }, index) => (
          <m.div
            key={primary}
            className={`about-story-network-chip about-story-network-chip--${index + 1}`}
            variants={networkChipVariants}
            custom={index}
          >
            <span className="about-story-network-dot" />
            <span className="about-story-network-title-stack">
              <span className="about-story-network-title about-story-network-title--primary">{primary}</span>
              <span className="about-story-network-title about-story-network-title--secondary">{secondary}</span>
            </span>
            <span className="about-story-network-offshoot about-story-network-offshoot--a" aria-hidden="true" />
            <span className="about-story-network-offshoot about-story-network-offshoot--b" aria-hidden="true" />
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
}

function TransformationVisual({ stageLabels, finalCards }: { stageLabels: string[]; finalCards: string[] }) {
  const stages = [
    { label: stageLabels[0] ?? '20 candidates', tone: 'many' as const },
    { label: stageLabels[1] ?? '6 strong possibilities', tone: 'few' as const },
    { label: stageLabels[2] ?? '3 considered introductions', tone: 'final' as const },
  ];

  return (
    <div
      className="about-story-visual about-story-pipeline-visual"
      role="img"
      aria-label="Recruitment pipeline narrowing to the perfect lasting fit"
    >
      <m.div
        className="about-story-pipeline-stages"
        variants={pipelinePhaseVariants}
      >
        {stages.map((stage, index) => (
          <m.div
            key={stage.label}
            className={`about-story-pipeline-stage about-story-pipeline-stage--${stage.tone} about-story-pipeline-stage--${index + 1}`}
            variants={pipelineStageVariants}
            custom={index}
          >
            <span className="about-story-pipeline-count">{stage.label}</span>
            <span className="about-story-pipeline-bar" />
          </m.div>
        ))}
      </m.div>

      <div className="about-story-pipeline-arrow" />

      <m.div className="about-story-fit-weave" variants={pipelinePhaseVariants}>
        <m.svg className="about-story-fit-lines" viewBox="0 0 640 230" aria-hidden="true">
          <m.path
            className="about-story-fit-path about-story-fit-path--role"
            d="M92 116 C156 26 278 26 320 116 C362 206 484 206 548 116"
            variants={fitPathVariants}
            custom={0}
          />
          <m.path
            className="about-story-fit-path about-story-fit-path--fit"
            d="M548 116 C484 26 362 26 320 116 C278 206 156 206 92 116"
            variants={fitPathVariants}
            custom={1}
          />
        </m.svg>

        <span className="about-story-fit-label about-story-fit-label--role">Perfect Role</span>
        <span className="about-story-fit-knot" aria-hidden="true" />
        <span className="about-story-fit-label about-story-fit-label--fit">Lasting fit</span>
        <span className="sr-only">{finalCards.join(' ')}</span>
      </m.div>
    </div>
  );
}
