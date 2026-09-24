export type MetricProvenance = 
  | "CALCULATED RESULT"
  | "MODELLED SCENARIO"
  | "SYNTHETIC DEMONSTRATION"
  | "VERIFIED CASE STUDY"
  | "TECHNICAL SPECIFICATION"
  | "CONTRACTUAL GUARANTEE";

export interface BusinessProblem {
  id: string;
  department: "Sales" | "Operations" | "Customer Service" | "HR & L&D" | "Finance" | "Leadership" | string;
  title: string;
  symptoms: string[];
  rootCause: string;
  solution: string;
  roi: string;
}

export interface CoreLaunchService {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  capabilities: string[];
  businessOutcome: string;
  timeline: string;
  roi: string;
  provenance?: MetricProvenance;
  targetICP?: string;
  deliverables?: string[];
  priceRange?: string;
}

export interface BusinessMaturityLevel {
  level: number;
  name: string;
  scoreRange: string;
  minScore: number;
  maxScore: number;
  description: string;
  characteristics: string;
  action: string;
}

export interface TransformationPhase {
  phase: string;
  timeframe: string;
  title: string;
  objective: string;
  initiatives: string[];
  expectedOutcome: string;
}

export interface PainPointItem {
  id: string;
  category: string;
  title: string;
  legacySymptom: string;
  legacyImpact: string;
  stratisionSolution: string;
  aiNativeBenefit: string;
  metricGain: string;
  iconName: string;
  caseStudyRef?: string;
}

export interface AgentSystem {
  id: string;
  name: string;
  tagline: string;
  category: string;
  description: string;
  capabilities: string[];
  sampleTrigger: string;
  sampleAction: string;
  latency: string;
  accuracy: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  clientIndustry: string;
  companyScale: string;
  challenge: string;
  solution: string;
  metrics: {
    primaryGain: string;
    primaryLabel: string;
    secondaryGain: string;
    secondaryLabel: string;
    paybackTime: string;
  };
  testimonial: {
    quote: string;
    author: string;
    title: string;
  };
}

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  idealFor: string;
  timeline: string;
  priceModel: string;
  description: string;
  deliverables: string[];
  guarantee: string;
  popular?: boolean;
}

export interface BlueprintResult {
  architectureName?: string;
  executiveSummary: string;
  projectedSavings?: string;
  hoursSavedPerMonth?: number;
  roiTimeline?: string;
  recommendedAgentSwarm?: Array<{
    name: string;
    role: string;
    techStack: string;
  }>;
  implementationMilestones?: Array<{
    phase: string;
    title: string;
  }>;
  readinessScore?: number;
  projectedROI?: {
    estimatedTimeSavedHoursPerWeek: number;
    projectedAnnualCostSavings: string;
    paybackPeriodMonths: number;
    efficiencyMultiplier: string;
  };
}

export type InsightCategory = 
  | "AI & Business"
  | "Systems & Operations"
  | "Governance & Leadership"
  | "Industry Perspectives";

export type InsightTerritory = InsightCategory;

export type InsightType =
  | "Major Perspective"
  | "Standard Insight"
  | "Point of View"
  | "Industry Perspective";

export interface InsightArticle {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: InsightCategory;
  type: InsightType;
  docRef: string;
  readTime: string;
  date: string;
  shortDescriptor: string;
  thesis: string;
  editorialIntro: string;
  question: {
    title: string;
    paragraphs: string[];
  };
  reality: {
    title: string;
    paragraphs: string[];
    callouts?: string[];
  };
  argument: {
    title: string;
    paragraphs: string[];
    diagramType?: 
      | "workflow-friction" 
      | "tool-vs-system" 
      | "information-handoffs" 
      | "opportunity-areas" 
      | "build-buy-configure" 
      | "adoption-vs-deployment" 
      | "governance-boundaries" 
      | "executive-funnel";
  };
  implication: {
    title: string;
    paragraphs: string[];
    keyTakeaways?: string[];
  };
  questionsToAsk: {
    title: string;
    questions: string[];
  };
  closingThought: {
    title: string;
    principle: string;
    context?: string;
  };
  seoDescription: string;
}
