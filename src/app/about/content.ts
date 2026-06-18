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
    headline: "Algorithms can sort a CV. They cannot read a room.",
    supportingCopy:
      "Motivation, timing and judgement show up in conversation, not in a keyword match.",
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
    headline: "The best candidates often are not looking.",
    supportingCopy:
      "They are known, trusted and approached through relationships built over years.",
    visual: {
      type: "network-graph",
      data: {
        centralLabel: "BC Financial",
        sectorLabels: [
          "CFOs",
          "Directors",
          "Controllers",
          "Tax Leads",
          "Audit",
          "Treasury",
          "Risk",
          "Finance",
          "Tax",
          "Corporate",
          "FP&A",
          "Partners",
        ],
      },
    },
  },
  {
    id: "proof-shortlist",
    headline: "A shortlist is easy. A considered introduction is not.",
    supportingCopy: "Data can narrow a field. It takes judgement to know who belongs in the conversation.",
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
export const ctaKicker = "Private, practical advice";
export const ctaSupportingCopy =
  "Talk through the brief, the market and who is genuinely worth approaching.";
export const ctaButtonLabel = "Start a conversation";
