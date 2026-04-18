'use client';
export const dynamic = 'force-dynamic';
// DecisionMine: The Third Brain™ AI Engine

import { motion } from 'framer-motion';
import { MagneticLink } from '@/components/MagneticElements';

export default function DecisionMinePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const layers = [
    { num: "01", title: "Surface Framing", desc: "what the idea really is beneath your framing" },
    { num: "02", title: "Primary System", desc: "visible activity and core function" },
    { num: "03", title: "Hidden Burden", desc: "secondary outputs and invisible costs" },
    { num: "04", title: "Reclassification", desc: "waste, signal, asset, or risk?" },
    { num: "05", title: "First-Order Opportunity", desc: "minimum viable intervention" },
    { num: "06", title: "Second-Order Value", desc: "what becomes visible after step one" },
    { num: "07", title: "Value Creation vs Capture", desc: "are both actually present?" },
    { num: "08", title: "Legal Review", desc: "GREEN / AMBER / RED gate" },
    { num: "09", title: "Ethics & Trust", desc: "public scrutiny test" },
    { num: "10", title: "Technical Feasibility", desc: "under real-world conditions" },
    { num: "11", title: "Economic Viability", desc: "cost, margin, payback horizon" },
    { num: "12", title: "Operational Implementability", desc: "with real people, real constraints" },
    { num: "13", title: "Governance Requirements", desc: "stop conditions and oversight" },
    { num: "14", title: "Stakeholder Map", desc: "beneficiaries, blockers, risk bearers" },
    { num: "15", title: "Time Horizon", desc: "H1 through H4 placement" }
  ];

  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540] pt-24 text-center px-6">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#C9A84C] blur-[140px] opacity-[0.15] pointer-events-none rounded-full"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="label-gold mb-6 inline-block tracking-[0.2em]">DECISIONMINE · THE THIRD BRAIN™ · EARLY ACCESS</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-[44px] md:text-[80px] font-playfair font-bold text-white leading-[1] mb-2 tracking-tight">
            Fifteen Layers.
          </motion.h1>
          <motion.h2 variants={fadeUp} className="font-playfair text-[32px] md:text-[56px] text-[#C9A84C] mb-8 italic leading-[1.1]">
            One Verdict. Freely Open — For Now.
          </motion.h2>

          <motion.p variants={fadeUp} className="font-inter text-[18px] text-[#CBD5E1] max-w-3xl mx-auto mb-10 leading-[1.8]">
            The Third Brain is an early-stage AI decision engine built by Bhramaastra Advisory Services. It is currently open to a limited number of leaders globally — free, unrestricted, and unlike anything available in the market. This window will close.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap mb-14 w-full">
            <MagneticLink href="https://firstcircle.bhramaastra.com" className="btn-gold !px-8 !py-4 !text-[16px] !font-bold">
              Enter the Third Brain →
            </MagneticLink>
            <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-glass !px-8 !py-4 !text-[16px]">
              Begin a Conversation →
            </a>
          </motion.div>

          {/* Pulse Badge */}
          <motion.div 
            variants={fadeUp}
            className="border border-[#C9A84C] text-[#C9A84C] font-inter text-[12px] uppercase tracking-[0.2em] px-4 py-2 font-semibold rounded-full animate-[pulse-opacity_2s_ease-in-out_infinite]"
          >
            ◈ EARLY ACCESS · OPEN NOW · LIMITED WINDOW
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: WHAT THIS IS ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] border-t border-[rgba(201,168,76,0.15)] relative z-10 flex justify-center">
        <div className="max-w-[800px] w-full glass-card p-10 md:p-16 rounded-2xl relative shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#11204C] to-[#0B1B4D]">
          <h2 className="font-playfair text-[28px] md:text-[36px] text-[#C9A84C] mb-8 font-bold text-center">
            This is not a chatbot.<br/>This is not a search engine.
          </h2>
          
          <div className="flex flex-col gap-6 font-inter text-[16px] md:text-[18px] text-[#E2E8F0] leading-[1.9]">
            <p>
              The Third Brain was built to solve a problem no AI assistant currently solves: the systematic blind spots that cost leaders their best decisions.
            </p>
            <p>
              Every AI you have used answers the question you asked. If you did not ask about legal risk — it does not appear. If you did not ask about stakeholder resistance — silence. The frame you bring is the frame you get back. The Third Brain works differently. All 15 analytical layers run automatically — regardless of what you submitted. The frame you bring is the first thing interrogated. What you believe, and what is actually true, are treated as separate questions.
            </p>
            <p className="text-[#C9A84C] font-semibold">
              It returns a verdict: GO · PILOT · CAUTION · REDESIGN · STOP — with the specific reasoning chain behind it, and what would need to change to move the verdict.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE 15 LAYERS ================= */}
      <section className="bg-[#050D2A] py-24 px-6 border-y border-[rgba(201,168,76,0.15)]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="label-gold mb-4 text-center">THE ARCHITECTURE</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] text-white mb-4 text-center font-bold">Every analysis. Every time. No exceptions.</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] text-center mb-16 leading-[1.7] max-w-3xl">
            All 15 layers run simultaneously — regardless of what you submit. You cannot skip the uncomfortable ones. That is not a feature. That is the entire point.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full">
            {layers.map((layer, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="bg-[#0B1B4D] border border-[rgba(201,168,76,0.3)] hover:border-[#C9A84C] hover:shadow-[0_0_15px_rgba(201,168,76,0.15)] transition-all duration-300 p-5 rounded-xl flex flex-col items-start min-h-[160px] group"
              >
                <span className="font-playfair text-[24px] text-[#C9A84C] font-bold mb-3 drop-shadow-[0_0_8px_rgba(201,168,76,0.5)] group-hover:drop-shadow-[0_0_12px_rgba(201,168,76,0.8)] transition-all">{layer.num}</span>
                <span className="font-inter text-[14px] text-white font-semibold mb-2 leading-[1.3]">{layer.title}</span>
                <p className="font-inter text-[12px] text-[#94A3B8] leading-[1.5] mt-auto group-hover:text-[#CBD5E1] transition-colors">{layer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: EARLY ACCESS CONTEXT ================= */}
      <section className="marble-section !h-auto py-24 px-6 text-[#0B1B4D]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <h2 className="font-playfair text-[32px] md:text-[44px] mb-8 text-center font-bold">Why is this freely open right now?</h2>
          
          <div className="flex flex-col gap-6 font-inter text-[17px] text-[#374151] leading-[1.8] max-w-3xl text-center mb-16">
            <p>
              The Third Brain is in active development. We are refining its reasoning layers, calibrating its verdict thresholds, and testing its output against decisions that actually matter — in real organisations, across real contexts.
            </p>
            <p>
              To do that with integrity, we are inviting a select group of global leaders to use it, challenge it, and tell us exactly where it is right and where it falls short. Their feedback shapes every iteration. This is not a beta test. It is a founding circle — and what they experience now will be what the engine is built around permanently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="bg-[#0B1B4D] border border-[rgba(201,168,76,0.4)] rounded-2xl p-8 text-left">
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Real Decisions Only</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">
                Submit something you are actually carrying — a live decision, an untested conviction, a challenge without a clear answer. The quality of output is proportional to the specificity of input.
              </p>
            </div>
            <div className="bg-[#0B1B4D] border border-[rgba(201,168,76,0.4)] rounded-2xl p-8 text-left">
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Your Feedback Shapes It</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">
                After you use the engine, you are asked five questions. Your perspective — where it was right, where it fell short — is the only intelligence that cannot be generated automatically.
              </p>
            </div>
            <div className="bg-[#0B1B4D] border border-[rgba(201,168,76,0.4)] rounded-2xl p-8 text-left">
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">This Window Closes</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">
                Once the engine moves to its next phase, access will be by invitation and subscription only. What is freely available today will not remain so.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: ACCESS CTA ================= */}
      <section className="py-24 px-6 bg-[#050D2A] border-t border-[rgba(201,168,76,0.15)] relative overflow-hidden flex justify-center items-center">
        {/* Glow */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C9A84C] blur-[150px] opacity-[0.1] z-0 pointer-events-none rounded-[100%]" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-playfair text-[40px] md:text-[56px] text-white font-bold mb-4 drop-shadow-lg">This is your window.</h2>
          <p className="font-inter text-[18px] md:text-[20px] text-[#E2E8F0] mb-3 leading-[1.6]">
            Submit a real decision. Experience 15 analytical layers working simultaneously. Then tell us what you found.
          </p>
          <p className="font-inter text-[15px] text-[#94A3B8] mb-10 max-w-xl mx-auto">
            No login. No installation. No commitment. Just a decision worth examining — and the most rigorous analytical framework currently available to examine it.
          </p>
          
          <MagneticLink href="https://firstcircle.bhramaastra.com" className="btn-gold !px-10 !py-5 !text-[18px] !font-bold mb-10 shadow-[0_0_30px_rgba(201,168,76,0.3)] text-center text-[#0B1B4D]">
            Enter the Third Brain →
          </MagneticLink>

          <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mt-4">
            <span className="font-inter text-[13px] text-[#CBD5E1] flex items-center gap-2 justify-center"><span className="text-[#C9A84C] text-[16px]">◈</span> Freely open — no cost, no login required</span>
            <span className="font-inter text-[13px] text-[#CBD5E1] flex items-center gap-2 justify-center"><span className="text-[#C9A84C] text-[16px]">◈</span> Your submission is confidential</span>
            <span className="font-inter text-[13px] text-[#CBD5E1] flex items-center gap-2 justify-center"><span className="text-[#C9A84C] text-[16px]">◈</span> Feedback goes directly to Amish Shah</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: WHO THIS IS FOR ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] border-t border-[rgba(201,168,76,0.1)] relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white mb-12 text-center font-bold">Built for leaders who cannot afford to be wrong.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="glass-card p-8 rounded-xl border-l-[3px] border-[#C9A84C]">
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-3">Board Members</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Decisions with reputational and fiduciary consequence — where a blind spot costs more than the decision itself.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-[3px] border-[#C9A84C]">
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-3">Founders</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Strategic pivots, partnership calls, market entry moves — decisions where conviction alone is not enough.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-[3px] border-[#C9A84C]">
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-3">GRC Professionals</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Compliance-sensitive decisions with regulatory exposure — where the wrong call has institutional consequence.
              </p>
            </div>
            <div className="glass-card p-8 rounded-xl border-l-[3px] border-[#C9A84C]">
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-3">Senior Executives</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Complex organisational decisions where the political, strategic, and operational dimensions must be held simultaneously.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: DISCLAIMER ================= */}
      <section className="bg-[#050D2A] py-8 px-6 border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-5xl mx-auto">
          <p className="font-inter text-[11px] text-[#64748B] leading-[1.6] text-justify md:text-center">
            DecisionMine Third Brain™ is an early-stage AI-augmented analytical framework developed by Bhramaastra Advisory Services. It is currently in active development and refinement. All outputs are advisory in nature and do not constitute legal, financial, regulatory, or professional advice. Verdicts should be reviewed by qualified professionals in relevant fields before any action is taken. Bhramaastra Advisory Services accepts no liability for decisions made solely on the basis of Third Brain outputs. Access and availability may change at any time.
          </p>
        </div>
      </section>

    </main>
  );
}
