'use client';

import { m } from 'framer-motion';
import type { ChapterVisual } from './content';
import {
  dataPhaseVariants,
  dataTileVariants,
  filterRevealVariants,
  funnelStageVariants,
  funnelOutputVariants,
  signalPhaseVariants,
  signalCoreVariants,
  signalCardVariants,
  networkPhaseVariants,
  networkListVariants,
  networkCoreVariants,
  networkChipVariants,
  networkLineVariants,
  pipelinePhaseVariants,
  pipelineStageVariants,
  intertwinePhaseVariants,
  intertwineLeftVariants,
  intertwineRightVariants,
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

// ═══════════════════════════════════════════════════
// Chapter 1 — Data flood → automated filter → funnel
// ═══════════════════════════════════════════════════

const SURFACE_DATA = [
  'CV', 'Salary', 'Location', 'Experience', 'Qualifications',
  'Job Title', 'Industry', 'Education', 'Skills', 'Tenure',
  'Certifications', 'Languages', 'Availability', 'References', 'Notice',
];

const FUNNEL_STAGES = [
  { label: '15 applicants', width: '100%' },
  { label: '8 pass filter', width: '58%' },
  { label: '3 shortlisted', width: '30%' },
  { label: 'look identical', width: '18%' },
];

function DataFilterVisual({ labels: _labels, filterLabel }: { labels: string[]; filterLabel: string }) {
  return (
    <m.div
      className="about-story-visual about-story-data-visual"
      role="img"
      aria-label="Automated recruitment filters surface data but misses what matters"
      variants={dataPhaseVariants}
    >
      <div className="about-story-data-grid">
        {SURFACE_DATA.map((label, i) => (
          <m.div
            key={label}
            className={`about-story-data-tile${i >= 11 ? ' about-story-data-tile--dim' : ''}`}
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
      </m.div>

      <div className="about-story-funnel">
        {FUNNEL_STAGES.map((stage, i) => (
          <m.div
            key={stage.label}
            className="about-story-funnel-stage"
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
        <span className="about-story-output-card">Candidate A</span>
        <span className="about-story-output-card">Candidate B</span>
      </m.div>
    </m.div>
  );
}

// ═══════════════════════════════════════════════════
// Chapter 2 — Human factors / signal qualities
// ═══════════════════════════════════════════════════

function HumanFactorsVisual({ labels }: { labels: string[] }) {
  return (
    <m.div
      className="about-story-visual about-story-signals-visual"
      role="img"
      aria-label="Human qualities that distinguish good from great appointments"
      variants={signalPhaseVariants}
    >
      <m.div className="about-story-signal-core" variants={signalCoreVariants}>
        <span>Judgement</span>
      </m.div>
      <div className="about-story-signal-grid">
        {labels.slice(0, 6).map((label, index) => (
          <m.div
            key={label}
            className={`about-story-signal-card about-story-signal-card--${index + 1}`}
            variants={signalCardVariants}
          >
            <span className="about-story-signal-mark" />
            <span>{label}</span>
          </m.div>
        ))}
      </div>
    </m.div>
  );
}

// ═══════════════════════════════════════════════════
// Chapter 3 — Network graph: BC → sectors
// ═══════════════════════════════════════════════════

function NetworkGraphVisual({ centralLabel, sectorLabels }: { centralLabel: string; sectorLabels: string[] }) {
  return (
    <m.div
      className="about-story-visual about-story-network-visual"
      role="img"
      aria-label="Specialist network of relationships across financial sectors"
      variants={networkPhaseVariants}
    >
      <m.div className="about-story-network-core" variants={networkCoreVariants}>
        <span>{centralLabel}</span>
      </m.div>

      <m.div className="about-story-network-list" variants={networkListVariants}>
        {sectorLabels.slice(0, 7).map((label, index) => (
          <m.div
            key={label}
            className={`about-story-network-chip about-story-network-chip--${index + 1}`}
            variants={networkChipVariants}
            custom={index}
          >
            <m.span
              className="about-story-network-line"
              aria-hidden="true"
              variants={networkLineVariants}
              custom={index}
            />
            <span className="about-story-network-dot" />
            <span>{label}</span>
          </m.div>
        ))}
      </m.div>
    </m.div>
  );
}

// ═══════════════════════════════════════════════════
// Chapter 4 — Pipeline narrowing + intertwine reveal
// ═══════════════════════════════════════════════════

function TransformationVisual({ stageLabels, finalCards: _finalCards }: { stageLabels: string[]; finalCards: string[] }) {
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

      <m.div
        className="about-story-intertwine"
        variants={intertwinePhaseVariants}
      >
        <m.span className="about-story-intertwine-left" variants={intertwineLeftVariants}>
          Perfect Role
        </m.span>
        <span className="about-story-intertwine-slash" aria-hidden="true" />
        <m.span className="about-story-intertwine-right" variants={intertwineRightVariants}>
          Lasting Fit
        </m.span>
      </m.div>
    </div>
  );
}
