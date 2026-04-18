export type LibraryResource = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Knowledge' | 'Academy' | 'Intelligence' | 'Digital Tools' | 'Frameworks';
  url: string;
  isExternal: boolean;
  isFree: boolean;
  badge?: string;
  tags: string[];
  addedDate: string;
}

export const libraryResources: LibraryResource[] = [
  {
    id: 'grc-playbook',
    title: "The Leader's Playbook: GRC",
    subtitle: "A Timeless Guide · 27 Pages",
    description: "16 essential GRC concepts. Real-world examples. Decision-ready frameworks. Built for executives who lead with clarity, accountability, and integrity. Available in English and Arabic.",
    category: 'Knowledge',
    url: 'https://grcplaybook.bhramaastra.com',
    isExternal: true,
    isFree: true,
    badge: '16 Concepts · Interactive Quiz · AI Advisory',
    tags: ['GRC', 'Governance', 'Risk', 'Compliance', 'Leadership'],
    addedDate: '2025'
  },
  {
    id: 'm365-copilot',
    title: "M365 Copilot Mastery",
    subtitle: "BAS Academy · 5 Modules",
    description: "A professional L&D course on Microsoft 365 Copilot — built using Harvard-style chunked learning, Stanford design thinking, and Feynman simplification. From Work IQ to Multi-Agent Mastery.",
    category: 'Academy',
    url: 'https://learn-m365-copliot.bhramaastra.com',
    isExternal: true,
    isFree: true,
    badge: '5 Modules · 39 Lesson Cards · 21 Quizzes',
    tags: ['AI', 'Microsoft 365', 'Copilot', 'Productivity', 'L&D'],
    addedDate: '2025'
  },
  {
    id: 'decisionmine',
    title: "DecisionMine — The Third Brain™",
    subtitle: "By Invitation · First Circle",
    description: "Submit any real decision. The Third Brain runs 15 analytical layers simultaneously — legal, ethical, economic, operational, governance — and returns a verdict with a reasoning chain.",
    category: 'Intelligence',
    url: 'https://firstcircle.bhramaastra.com',
    isExternal: true,
    isFree: true,
    badge: '15 Analytical Layers · GO · PILOT · CAUTION · STOP',
    tags: ['AI', 'Decision Intelligence', 'Strategy', 'Leadership'],
    addedDate: '2026'
  }
];

export const libraryCategories = [
  'All', 'Knowledge', 'Academy', 'Intelligence', 'Digital Tools', 'Frameworks'
] as const;
