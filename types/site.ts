export type LinkItem = {
  label: string;
  href: string;
  isPlaceholder?: boolean;
};

export type Metric = {
  value: string;
  label: string;
  note?: string;
};

export type Experience = {
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  tags: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  outcome: string;
  role: string;
  stack: string[];
  highlights: string[];
  context: string;
  constraints: string[];
  architecture: string[];
  challenges: string[];
  tradeoffs: string[];
  results: string[];
  lessons: string[];
  future: string[];
  featured?: boolean;
};

export type Publication = {
  title: string;
  venue: string;
  year: string;
  type: "Journal" | "Conference" | "Service" | "Placeholder";
  area: string;
  doi: string;
  link: string;
  citationCount: string;
  bibtex: string;
};
