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
      <rect className="about-story-panel" x="36" y="30" width="202" height="166" rx="10" />
      {labels.slice(0, 5).map((label, index) => (
        <g key={label} transform={`translate(${58 + index * 9} ${52 + index * 26})`}>
          <rect className="about-story-card" width="168" height="38" rx="7" />
          <text className="about-story-text-dark" x="18" y="24">{label}</text>
        </g>
      ))}
      <g transform="translate(252 70)">
        <rect className="about-story-filter" width="74" height="90" rx="10" />
        <path className="about-story-gold-stroke" d="M20 28h34M25 44h24M30 60h14" />
        <text className="about-story-label" x="37" y="78" textAnchor="middle">{filterLabel}</text>
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
  const stageDisplay = ['20 candidates', '6 strong', '3 intros'];

  return (
    <svg className="about-story-visual" viewBox="0 0 360 240" role="img" aria-label="Shortlist refinement">
      {stageLabels.slice(0, 3).map((label, index) => (
        <g key={label} transform={`translate(${68 + index * 18} ${34 + index * 42})`}>
          <rect
            className={index === 2 ? 'about-story-filter' : 'about-story-card'}
            width={224 - index * 36}
            height="34"
            rx="8"
          />
          <text className="about-story-label" x={(224 - index * 36) / 2} y="22" textAnchor="middle">
            {stageDisplay[index]}
          </text>
        </g>
      ))}
      <path className="about-story-gold-stroke" d="M114 158c38 18 94 18 132 0" />
      {finalCards.slice(0, 3).map((label, index) => (
        <g key={label} transform={`translate(${31 + index * 103} 178)`}>
          <rect className="about-story-final-card" width="92" height="42" rx="8" />
          {label === 'Finance Director' ? (
            <text className="about-story-label" x="46" y="18" textAnchor="middle">
              <tspan x="46" dy="0">Finance</tspan>
              <tspan x="46" dy="13">Director</tspan>
            </text>
          ) : (
            <text className="about-story-label" x="46" y="26" textAnchor="middle">{label}</text>
          )}
        </g>
      ))}
    </svg>
  );
}
