export interface ServiceItem {
  slug: string;
  name: string;
  gridBody: string;
  fullBody: React.ReactNode | string;
  deliverables: string[];
  ctaText: string;
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'grc',
    name: 'Governance, Risk & Compliance',
    gridBody: "We architect integrated GRC ecosystems that elevate governance, manage risk proactively, and ensure resilient regulatory alignment across your entire enterprise.",
    fullBody: "Governance, Risk & Compliance (GRC) forms the bedrock of institutional longevity. We architect integrated GRC ecosystems that elevate governance from a checkbox exercise into a strategic asset. By managing risk proactively rather than reactively, we build systems that identify blind spots before they realize. Our approach ensures resilient regulatory alignment across your entire enterprise, translating complex multi-jurisdictional mandates into clear, actionable frameworks that protect margin, reputation, and leadership.",
    deliverables: [
      "Risk framework design and implementation",
      "Regulatory mapping and compliance architecture",
      "Governance dashboards and reporting systems"
    ],
    ctaText: "See how we anchor trust →"
  },
  {
    slug: 'esg',
    name: 'ESG & Sustainability Strategy',
    gridBody: "We embed ESG at the core of business, enabling compliance, stakeholder trust, and climate-conscious strategic advantage that creates long-term enterprise value.",
    fullBody: "Environmental, Social, and Governance criteria have evolved from ethical markers into primary drivers of capital allocation and operational resilience. We embed ESG at the core of business rather than on its periphery. This enables authentic compliance, builds unshakeable stakeholder trust, and creates climate-conscious strategic advantage. Our blueprint goes beyond the report to establish real systemic change, unlocking green capital and creating long-term enterprise value that withstands future regulatory pressure.",
    deliverables: [
      "ESG baseline assessments and gap analysis",
      "Sustainability frameworks aligned to global standards",
      "SDG alignment and ESG rating improvement programs"
    ],
    ctaText: "See our earth-first blueprint →"
  },
  {
    slug: 'transformation',
    name: 'Strategic & Digital Transformation',
    gridBody: "We unlock growth through strategy-led transformation, blending innovation, digitization, and operational redesign for measurable, lasting impact across the enterprise.",
    fullBody: "Transformation fails when it is treated as an IT project rather than a business imperitave. We unlock growth through strategy-led transformation, ensuring that every technological shift serves a defined business goal. By blending agile innovation, intelligent digitization, and rigorous operational redesign, we deliver measurable, lasting impact across the enterprise. We work side-by-side with leadership to dissolve silos, upskill teams, and architect resilient operating models that thrive in volatility.",
    deliverables: [
      "Transformation roadmaps and change management",
      "Digital readiness assessments and technology advisory",
      "KPI design and performance measurement frameworks"
    ],
    ctaText: "Step into our transformation lens →"
  },
  {
    slug: 'sops',
    name: 'Process Design & SOPs',
    gridBody: "We engineer streamlined, audit-ready processes and SOPs that drive consistency, operational control, and enterprise-wide accountability at every level.",
    fullBody: "Without formalized processes, scale brings chaos. We engineer streamlined, audit-ready processes and Standard Operating Procedures (SOPs) that drive absolute consistency. By mapping the reality of the ground floor and aligning it with the vision of the boardroom, we instill operational control and enterprise-wide accountability at every level. Our deliverables aren’t dense unread manuals; they are dynamic, usable tools that eliminate friction and protect your most valuable workflows.",
    deliverables: [
      "End-to-end process mapping and analysis",
      "SOP libraries and operational procedure design",
      "Control frameworks and accountability structures"
    ],
    ctaText: "See how we bring clarity →"
  },
  {
    slug: 'audit',
    name: 'Internal Audit & Assurance',
    gridBody: "We deliver future-focused audit programs that strengthen controls, elevate assurance quality, and align with evolving risk landscapes and regulatory expectations.",
    fullBody: "Assurance is more than looking backward; it is about predicting vulnerabilities before they compound. We deliver future-focused internal audit programs that strengthen systemic controls and elevate overall assurance quality. Our methodologies align strictly with evolving risk landscapes and complex regulatory expectations across multiple borders. By focusing on root-cause analysis rather than superficial symptomatic fixes, we provide boards and committees with the transparent, uncompromising intelligence they require.",
    deliverables: [
      "Risk-based audit planning and execution",
      "Control testing and deficiency remediation",
      "Assurance reporting and board-level communication"
    ],
    ctaText: "Explore how we assure integrity →"
  },
  {
    slug: 'investor',
    name: 'Investor Relations & Start-up Consultancy',
    gridBody: "We guide founders and growing businesses through funding strategy, investor readiness, and the capital relationships that create sustainable growth trajectories.",
    fullBody: "Securing capital requires more than a compelling narrative; it demands institutional-grade readiness. We guide founders and high-growth businesses through complex funding strategies, ensuring absolute investor readiness before entering the room. By organizing data rooms, clarifying underlying unit economics, and formalizing governance, we build the capital relationships that create sustainable growth trajectories. We bridge the gap between entrepreneurial vision and institutional expectation.",
    deliverables: [
      "Investor deck design and narrative development",
      "Due diligence preparation and data room support",
      "Funding strategy and capital raise advisory"
    ],
    ctaText: "See how we open doors →"
  }
];
