// The Insight Forge: Dynamic Strategic Provocations & Logic
// Master Deck for the "Dynamic Brain" of Version 1.1

export interface DiagnosticQuestion {
  id: string;
  dimension: 'Discover' | 'Define' | 'Design' | 'Develop' | 'Deploy';
  text: string;
  lowLabel: string;
  highLabel: string;
}

export interface InsightFragment {
  type: 'Verdict' | 'Advisory' | 'NextMove';
  text: string;
  intensity: 'Low' | 'Medium' | 'High';
}

export const MASTER_DECK: DiagnosticQuestion[] = [
  // DISCOVER
  { id: 'd01', dimension: 'Discover', text: 'How clearly has the primary institutional blind spot been identified?', lowLabel: 'Surface Level', highLabel: 'Deep Identification' },
  { id: 'd02', dimension: 'Discover', text: 'What level of "Institutional Conviction" exists behind this move?', lowLabel: 'Weak/Forming', highLabel: 'Absolute/Sovereign' },
  { id: 'd03', dimension: 'Discover', text: 'To what degree is the current framing influenced by legacy thinking?', lowLabel: 'Legacy Bound', highLabel: 'Clean Frame' },
  { id: 'd04', dimension: 'Discover', text: 'Is the "Hidden Burden" of this decision fully visible to the board?', lowLabel: 'Invisible', highLabel: 'Fully Transparent' },
  { id: 'd05', dimension: 'Discover', text: 'How much of this context is based on internal assumptions vs external reality?', lowLabel: 'Purely Internal', highLabel: 'Market Calibrated' },

  // DEFINE
  { id: 'df01', dimension: 'Define', text: 'How rigid are the "Success Metrics" for this intervention?', lowLabel: 'Vague/Fluid', highLabel: 'Rigid/Sovereign' },
  { id: 'df02', dimension: 'Define', text: 'What is the level of stakeholder "Friction" anticipated in the first 90 days?', lowLabel: 'High Friction', highLabel: 'Zero Friction' },
  { id: 'df03', dimension: 'Define', text: 'Is the scope defined by the technology or by the business outcome?', lowLabel: 'Tech-Driven', highLabel: 'Value-Driven' },
  { id: 'df04', dimension: 'Define', text: 'What is the "Minimum Viable Intervention" required to prove value?', lowLabel: 'Bloated', highLabel: 'Streamlined' },
  { id: 'df05', dimension: 'Define', text: 'Are the "Stop Conditions" clearly defined and agreed upon?', lowLabel: 'Undefined', highLabel: 'Gated & Clear' },

  // DESIGN
  { id: 'ds01', dimension: 'Design', text: 'How sovereign is the proposed architecture (Ownership & Control)?', lowLabel: 'Dependent', highLabel: 'Sovereign' },
  { id: 'ds02', dimension: 'Design', text: 'To what extent does the design leverage "AI-Native" thinking?', lowLabel: 'Layered-On', highLabel: 'AI-Native' },
  { id: 'ds03', dimension: 'Design', text: 'Is the blueprint built for current scale or 10x future state?', lowLabel: 'Current Only', highLabel: 'Infinite Scale' },
  { id: 'ds04', dimension: 'Design', text: 'How resilient is the logic to regulatory or market shifts?', lowLabel: 'Fragile', highLabel: 'Anti-Fragile' },
  { id: 'ds05', dimension: 'Design', text: 'Is the "Cognitive Density" of the solution appropriate for the audience?', lowLabel: 'Low Density', highLabel: 'High Density' },

  // DEVELOP
  { id: 'dv01', dimension: 'Develop', text: 'What is the speed-to-value for the first tangible deliverable?', lowLabel: 'Slow (Months)', highLabel: 'Rapid (Weeks)' },
  { id: 'dv02', dimension: 'Develop', text: 'How robust is the "Feedback Loop" between development and leadership?', lowLabel: 'Disconnected', highLabel: 'Real-Time Sync' },
  { id: 'dv03', dimension: 'Develop', text: 'Is the build quality "Oscar-Grade" or Minimum Viable?', lowLabel: 'MVP', highLabel: 'Elite/Purnam' },
  { id: 'dv04', dimension: 'Develop', text: 'How well are the "Technical Gaps" being managed or bridged?', lowLabel: 'Unknown', highLabel: 'Tracked & Mitigated' },

  // DEPLOY
  { id: 'dp01', dimension: 'Deploy', text: 'How prepared is the organization for "Lasting Adoption"?', lowLabel: 'Resistant', highLabel: 'AI-Ready' },
  { id: 'dp02', dimension: 'Deploy', text: 'What is the post-deployment "Governance Score"?', lowLabel: 'Zero Oversight', highLabel: 'Total Governance' },
  { id: 'dp03', dimension: 'Deploy', text: 'Has the "Second-Order Value" been mapped for the next H2 phase?', lowLabel: 'Unmapped', highLabel: 'Planned & Clear' },
  { id: 'dp04', dimension: 'Deploy', text: 'Is there a "Safe-Exit" or Rollback strategy in place?', lowLabel: 'None', highLabel: 'Atomic Security' },
];

export const INSIGHT_FRAGMENTS: InsightFragment[] = [
  { type: 'Verdict', text: 'The strategy shows high conceptual clarity but operational fragility.', intensity: 'Medium' },
  { type: 'Verdict', text: 'A sovereign approach is detectable, yet stakeholder friction is underestimated.', intensity: 'High' },
  { type: 'Verdict', text: 'Innovation density is high; however, the governance layer is currently transparent.', intensity: 'Low' },
  { type: 'Advisory', text: 'Re-interrogate your assumptions regarding "Lasting Adoption" before finalizing the Design phase.', intensity: 'Medium' },
  { type: 'Advisory', text: 'Prioritize a "Clean Frame" approach to strip away legacy bias from the core objective.', intensity: 'High' },
  { type: 'Advisory', text: 'Consider a "Pilot Phase" to test the Minimum Viable Intervention in a safe-zone.', intensity: 'Low' },
  { type: 'NextMove', text: 'Shift focus to "Hidden Burden" analysis to reveal invisible costs of the current path.', intensity: 'Medium' },
  { type: 'NextMove', text: 'Initiate a "Founding Circle" of internal stakeholders to neutralize friction early.', intensity: 'High' },
  { type: 'NextMove', text: 'Map the "Second-Order Value" to secure long-term ROI beyond the initial launch.', intensity: 'Low' },
];
