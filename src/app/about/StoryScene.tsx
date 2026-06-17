import type { ChapterVisual } from './content';

interface StorySceneProps {
  visual: ChapterVisual;
}

export function StoryScene({ visual }: StorySceneProps) {
  switch (visual.type) {
    case 'cv-cards':
      return <CvCardsVisual labels={visual.data.labels} filterLabel={visual.data.filterLabel} />;
    case 'human-factors':
      return <HumanFactorsVisual labels={visual.data.labels} />;
    case 'network-graph':
      return <NetworkGraphVisual centralLabel={visual.data.centralLabel} sectorLabels={visual.data.sectorLabels} />;
    case 'transformation':
      return <TransformationVisual stageLabels={visual.data.stageLabels} finalCards={visual.data.finalCards} />;
  }
}

function CvCardsVisual({ labels, filterLabel }: { labels: string[]; filterLabel: string }) {
  return (
    <svg className="about-story-visual" viewBox="0 0 360 240" role="img" aria-label="CV data cards">
      <rect className="about-story-panel" x="28" y="28" width="214" height="156" rx="6" />
      {labels.slice(0, 5).map((label, index) => (
        <g key={label} transform={`translate(${48 + index * 16} ${50 + index * 24})`}>
          <rect className="about-story-card" width="154" height="36" rx="5" />
          <line className="about-story-line" x1="16" y1="14" x2="104" y2="14" />
          <text className="about-story-text-dark" x="16" y="27">{label}</text>
        </g>
      ))}
      <g transform="translate(224 72)">
        <rect className="about-story-filter" width="96" height="88" rx="8" />
        <path className="about-story-gold-stroke" d="M24 28h48M32 44h32M40 60h16" />
        <text className="about-story-label" x="48" y="78" textAnchor="middle">{filterLabel}</text>
      </g>
    </svg>
  );
}

function HumanFactorsVisual({ labels }: { labels: string[] }) {
  const points = [
    [94, 62],
    [178, 42],
    [258, 76],
    [76, 154],
    [188, 174],
    [284, 148],
  ];

  return (
    <svg className="about-story-visual" viewBox="0 0 360 240" role="img" aria-label="Human qualities around a candidate">
      <circle className="about-story-halo" cx="180" cy="116" r="52" />
      <circle className="about-story-node-main" cx="180" cy="116" r="30" />
      <path className="about-story-line" d="M154 101 94 62M181 86 178 42M207 101 258 76M154 130 76 154M183 146 188 174M207 131 284 148" />
      {labels.slice(0, 6).map((label, index) => {
        const [x, y] = points[index];
        return (
          <g key={label}>
            <circle className="about-story-node" cx={x} cy={y} r="9" />
            <text className="about-story-text" x={x} y={y + 27} textAnchor="middle">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function NetworkGraphVisual({ centralLabel, sectorLabels }: { centralLabel: string; sectorLabels: string[] }) {
  const nodes = [
    [68, 70],
    [144, 44],
    [250, 58],
    [294, 122],
    [244, 184],
    [130, 194],
    [58, 142],
  ];

  return (
    <svg className="about-story-visual" viewBox="0 0 360 240" role="img" aria-label="Relationship network">
      <g>
        {nodes.map(([x, y], index) => (
          <path key={`${x}-${y}`} className="about-story-line" d={`M180 120 ${x} ${y}`} />
        ))}
      </g>
      <circle className="about-story-node-main" cx="180" cy="120" r="34" />
      <text className="about-story-centre-text" x="180" y="128" textAnchor="middle">{centralLabel}</text>
      {sectorLabels.slice(0, 7).map((label, index) => {
        const [x, y] = nodes[index];
        return (
          <g key={label}>
            <circle className="about-story-node" cx={x} cy={y} r="11" />
            <text className="about-story-text" x={x} y={y + 28} textAnchor="middle">{label}</text>
          </g>
        );
      })}
    </svg>
  );
}

function TransformationVisual({ stageLabels, finalCards }: { stageLabels: string[]; finalCards: string[] }) {
  return (
    <svg className="about-story-visual" viewBox="0 0 360 240" role="img" aria-label="Shortlist refinement">
      {stageLabels.slice(0, 3).map((label, index) => (
        <g key={label} transform={`translate(${28 + index * 96} 36)`}>
          <rect className={index === 2 ? 'about-story-filter' : 'about-story-card'} width="76" height="58" rx="7" />
          <text className="about-story-label" x="38" y="30" textAnchor="middle">{label}</text>
        </g>
      ))}
      <path className="about-story-gold-stroke" d="M66 112c46 34 184 34 230 0" />
      {finalCards.slice(0, 3).map((label, index) => (
        <g key={label} transform={`translate(${42 + index * 94} 148)`}>
          <rect className="about-story-final-card" width="88" height="48" rx="7" />
          <text className="about-story-label" x="44" y="29" textAnchor="middle">{label}</text>
        </g>
      ))}
    </svg>
  );
}
