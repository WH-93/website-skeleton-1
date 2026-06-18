// BC Financial Search — About Page Proof Section Content
// Pure data model. No React imports. No JSX.
// Agent: DeepSeek. Consumed by AboutStory.tsx and StoryScene.tsx.

export interface Chapter {
  /** Semantic HTML id — used as <article id={id}> and for integration test assertions */
  id: string;
  /** Chapter headline */
  headline: string;
  /** Supporting copy line */
  supportingCopy: string;
  /** Visual data — chapter-specific */
  visual: ChapterVisual;
}

// ── Chapter 1: CV cards → CV limitation ──
export interface CVCardData {
  labels: string[];
  filterLabel: string;
}

// ── Chapter 2: Human qualities → hidden factors ──
export interface HumanFactorData {
  labels: string[];
}

// ── Chapter 3: Network graph → relationships ──
export interface NetworkNodeData {
  centralLabel: string;
  sectorLabels: string[];
}

// ── Chapter 4: Transformation → candidate collapse ──
export interface TransformationData {
  stageLabels: string[];
  finalCards: string[];
}

export type ChapterVisual =
  | { type: "cv-cards"; data: CVCardData }
  | { type: "human-factors"; data: HumanFactorData }
  | { type: "network-graph"; data: NetworkNodeData }
  | { type: "transformation"; data: TransformationData };

// ── Chapters ──

export const chapters: Chapter[] = [
  {
    id: "proof-cv",
    headline: "A CV tells you where someone has been.",
    supportingCopy: "Not whether they'll succeed.",
    visual: {
      type: "cv-cards",
      data: {
        labels: ["CV", "Salary", "Location", "Experience", "Qualifications"],
        filterLabel: "Filter",
      },
    },
  },
  {
    id: "proof-qualities",
    headline: "The qualities that matter most are rarely obvious.",
    supportingCopy:
      "The difference between a good appointment and a successful one often comes down to factors that never appear on a CV.",
    visual: {
      type: "human-factors",
      data: {
        labels: [
          "Motivation",
          "Dependability",
          "Leadership",
          "Timing",
          "Character",
          "Ambition",
        ],
      },
    },
  },
  {
    id: "proof-network",
    headline: "The best candidates are not always looking.",
    supportingCopy:
      "Relationships built over years create conversations that databases never will.",
    visual: {
      type: "network-graph",
      data: {
        centralLabel: "BC Financial",
        sectorLabels: [
          "CFOs",
          "Finance Directors",
          "Risk",
          "Compliance",
          "Treasury",
          "Banking",
          "Private Equity",
        ],
      },
    },
  },
  {
    id: "proof-shortlist",
    headline: "Anyone can send a shortlist.",
    supportingCopy: "The challenge is sending the right one.",
    visual: {
      type: "transformation",
      data: {
        stageLabels: [
          "20 candidates",
          "6 strong possibilities",
          "3 considered introductions",
        ],
        finalCards: ["Future CFO", "Finance Director", "Head of Risk"],
      },
    },
  },
];

// ── CTA ──

export const ctaCopy = "Looking for a more considered financial search partner?";
export const ctaButtonLabel = "Start a conversation";
