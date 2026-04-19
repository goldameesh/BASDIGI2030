'use client';
export const dynamic = 'force-dynamic';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Layers, Users, Eye, FileX, Zap, Heart, Mail, Phone } from 'lucide-react';
import Link from 'next/link';

import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { MagneticLink } from '@/components/MagneticElements';

function UnifiedCounter({ endValue, suffix = "" }: { endValue: number, suffix?: string }) {
  const { ref, displayValue } = useCounterAnimation(endValue, 2000);
  return <span ref={ref}>{displayValue}{suffix}</span>;
}

const products = [
  { id: '01', category: 'Get Found', name: 'Digital Service Menu', tagline: 'Know Your Prices Instantly', hrs: '8–12 hrs/wk', isFree: false },
  { id: '02', category: 'Revenue', name: 'WhatsApp Connect Page', tagline: 'Never Miss a Lead', hrs: '3–5 hrs/wk', isFree: false },
  { id: '03', category: 'Bookings', name: 'Online Booking Form', tagline: 'Bookings While You Sleep', hrs: '6–8 hrs/wk', isFree: false },
  { id: '04', category: 'Get Found', name: 'Google Business Profile', tagline: 'Get Found on Google for Free', hrs: 'Passive discovery', isFree: true },
  { id: '05', category: 'Get Found', name: 'Post-Service Review System', tagline: 'More Google Reviews, Automatically', hrs: '4–6 hrs/wk', isFree: false },
  { id: '06', category: 'Keep Clients', name: 'Instagram Link-in-Bio Hub', tagline: 'Turn Instagram Into a Sales Page', hrs: '3–4 hrs/wk', isFree: false },
  { id: '07', category: 'Revenue', name: 'Packages & Membership Sales', tagline: 'Sell Packages Before They Arrive', hrs: '5–7 hrs/wk', isFree: false },
  { id: '08', category: 'Keep Clients', name: 'Staff Profiles & Specialities', tagline: 'Show Who Clients Are Booking', hrs: '3–4 hrs/wk', isFree: false },
  { id: '09', category: 'Bookings', name: 'Bridal & Group Booking Page', tagline: 'Capture Bridal & Events Business', hrs: '6–8 hrs/wk', isFree: false },
  { id: '10', category: 'Keep Clients', name: 'Digital Loyalty Stamp Card', tagline: 'Keep Clients Coming Back', hrs: '2–3 hrs/wk', isFree: false },
  { id: '11', category: 'Keep Clients', name: 'Appointment Reminder System', tagline: 'Cut No-Shows by 40%', hrs: '4–6 hrs/wk', isFree: false },
  { id: '12', category: 'Get Found', name: 'QR Code System', tagline: 'Put Your Business on Every Surface', hrs: '2–3 hrs/wk', isFree: true },
];

const tabs = ["✦ All", "◈ Get Found", "◇ Bookings", "◉ Keep Clients", "◆ Revenue"];

export default function EcosystemPage() {
  const [activeTab, setActiveTab] = useState("✦ All");

  const filteredProducts = activeTab === "✦ All" 
    ? products 
    : products.filter(p => p.category === activeTab.split(" ")[1] + (activeTab.split(" ")[2] ? " " + activeTab.split(" ")[2] : ""));

  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      
      {/* ================= SECTION A: HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540]">
        
        <motion.div 
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] gold-orb z-[0] md:opacity-100 opacity-60 pointer-events-none"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 max-w-3xl mx-auto w-full mt-10"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}>
            <span className="label-gold mb-6 md:mb-8 text-center">THE BAS ECOSYSTEM</span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="text-[34px] md:text-[56px] font-playfair font-bold text-white leading-[1.2] tracking-tight text-center"
          >
            One Intelligence.<br/>
            <span className="shimmer-text">Multiple Expressions.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="font-inter text-[18px] text-[#E2E8F0] max-w-2xl mx-auto text-center mt-6 leading-[1.7]"
          >
            From enterprise governance to SME digital tools — one thinking framework, applied at every scale of business.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SECTION B: BAS FOUNDRY INTRO ================= */}
      <section className="marble-section !h-auto py-24 px-6 border-y border-[rgba(0,0,0,0.1)] text-[#0B1B4D]">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <span className="font-inter text-[13px] uppercase tracking-[0.15em] font-semibold mb-4 text-center">BAS FOUNDRY</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] mb-4 text-center font-bold">Practical Intelligence for Growing Businesses</h2>
          <p className="font-inter text-[17px] text-[#374151] max-w-2xl text-center mb-16 leading-[1.8]">
            An integral part of Bhramaastra Advisory Services. BAS Foundry helps SMEs, founders, and local businesses move from business problem to practical digital solution — demand-led, scope-defined, and built to work.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-[16px] p-8 text-left">
              <Target color="#C9A84C" size={28} className="mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Demand-Led</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">No preloaded shelf. Every solution is shaped around your specific business need and context.</p>
            </div>
            
            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-[16px] p-8 text-left">
              <Layers color="#C9A84C" size={28} className="mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Right-Sized</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">Fits your stage, your priorities, and your operating reality — not enterprise complexity you don&apos;t need yet.</p>
            </div>

            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-[16px] p-8 text-left">
              <Users color="#C9A84C" size={28} className="mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">SME-Focused</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">Built for founders and local businesses — not adapted from enterprise systems downward.</p>
            </div>

            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-[16px] p-8 text-left">
              <Eye color="#C9A84C" size={28} className="mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Transparent</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">Scope-defined from the start. No hidden cost creep. No ambiguity on what is and is not included.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION C: STATS BAR ================= */}
      <section className="bg-[#050D2A] py-12 px-6 border-b border-[rgba(201,168,76,0.2)]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(201,168,76,0.3)]">
          <div className="text-center py-4 flex flex-col items-center justify-center">
            <span className="font-playfair text-[48px] md:text-[56px] text-[#C9A84C] font-bold leading-none"><UnifiedCounter endValue={12} /></span>
            <span className="font-inter text-[14px] text-[#E2E8F0] mt-2 uppercase tracking-[0.1em] font-medium">Digital Products</span>
          </div>
          <div className="text-center py-4 flex flex-col items-center justify-center">
            <span className="font-playfair text-[48px] md:text-[56px] text-[#C9A84C] font-bold leading-none"><UnifiedCounter endValue={40} suffix="+" /> hrs</span>
            <span className="font-inter text-[14px] text-[#E2E8F0] mt-2 uppercase tracking-[0.1em] font-medium">Saved Per Week</span>
          </div>
          <div className="text-center py-4 flex flex-col items-center justify-center">
            <span className="font-playfair text-[48px] md:text-[56px] text-[#C9A84C] font-bold leading-none">◈ No</span>
            <span className="font-inter text-[14px] text-[#E2E8F0] mt-2 uppercase tracking-[0.1em] font-medium">Upfront Commitment</span>
          </div>
          <div className="text-center py-4 flex flex-col items-center justify-center">
            <span className="font-playfair text-[48px] md:text-[56px] text-[#C9A84C] font-bold leading-none">2–6 wks</span>
            <span className="font-inter text-[14px] text-[#E2E8F0] mt-2 uppercase tracking-[0.1em] font-medium">Ready for You</span>
          </div>
        </div>
      </section>

      {/* ================= SECTION D: PRODUCT CATALOGUE ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <span className="label-gold mb-4 text-center">THE FOUNDRY CATALOGUE · 2025</span>
          <h2 className="font-playfair text-[28px] md:text-[48px] text-white mb-4 leading-[1.2] font-bold">
            Tailored Solutions for Today&#39;s Complex Business Challenges
          </h2>
          <span className="font-inter text-[14px] text-[#C9A84C] text-center mb-12 block">Each pathway is scoped, built, and delivered around your specific business need.</span>

          <div className="flex gap-3 justify-center flex-wrap mb-12">
            {tabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-[30px] font-inter text-[14px] transition-all duration-300 ${
                    isActive 
                      ? "bg-[#C9A84C] text-[#0B1B4D] font-semibold" 
                      : "glass-card text-[#E2E8F0] hover:border-gold-primary"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full mb-6">
            <AnimatePresence>
              {filteredProducts.map((p, i) => (
                <motion.div
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="glass-card p-6 flex flex-col min-h-[288px] rounded-xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="label-gold">Pathway {p.id}</span>
                  </div>
                  
                  <h3 className="font-playfair text-[18px] text-white font-semibold mb-2">{p.name}</h3>
                  <p className="font-inter italic text-[13px] text-[#E2E8F0] mb-4">&quot;{p.tagline}&quot;</p>
                  
                  <div className="w-full h-px bg-[rgba(201,168,76,0.2)] mb-4" />
                  
                  <div className="flex-1" />
                  
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <div className="bg-[rgba(255,255,255,0.05)] rounded px-2 py-1 flex items-center justify-center">
                      <span className="font-inter text-[12px] text-white">⏱ {p.hrs} saved*</span>
                    </div>
                  </div>

                  <a 
                    href={`https://wa.me/971504090727?text=${encodeURIComponent(`Hi BAS Foundry, I would like a scope-based quote for: ${p.name}`)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-inter text-[13px] text-[#C9A84C] hover:underline font-semibold w-max block mt-auto"
                  >
                    Request a Scope-Based Quote →
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Disclaimer for Outcomes */}
          <div className="font-inter text-[12px] text-[#64748B] text-center max-w-4xl mx-auto mt-4 px-4 leading-[1.6]">
            * Outcomes are indicative and vary by business context, implementation quality, and team adoption. All solutions are demand-led and scope-defined. BAS Foundry does not operate a preloaded product marketplace.
          </div>
        
        </div>
      </section>

      {/* ================= SECTION E: IMPLEMENTATION ROADMAP ================= */}
      <section className="py-24 px-6 bg-[#091540] border-t border-[rgba(255,255,255,0.05)] relative overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="label-gold mb-4 text-center">IMPLEMENTATION PATH</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] text-white mb-4 text-center font-bold">A Suggested Implementation Path</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] text-center mb-16 leading-[1.7] max-w-2xl mx-auto">
            Sequencing is a guide, not a commitment. Your path is shaped around your actual needs.
          </p>

          <div className="relative w-full flex flex-col md:flex-row gap-8 items-stretch md:items-start">
            
            <div className="hidden md:block absolute top-[24px] left-[10%] right-[10%] h-[2px] bg-[rgba(201,168,76,0.3)] z-0" />

            {/* Phase 1 */}
            <div className="flex-1 glass-card p-8 flex flex-col items-center text-center z-10 relative">
              <div className="w-[48px] h-[48px] rounded-full border-2 border-[#C9A84C] bg-[#11204C] flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(201,168,76,0.3)]">
                <span className="font-playfair text-[22px] text-[#C9A84C] font-bold">1</span>
              </div>
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-4">Foundation</h3>
              <p className="font-inter text-[13px] text-[#CBD5E1] mb-6 leading-[1.6]">#01 Digital Service Menu<br/>#02 WhatsApp Connect<br/>#04 Google Business Profile<br/>#12 QR Code System</p>
              <div className="mt-auto">
                <span className="font-inter text-[14px] text-white font-semibold">Scope-defined · No surprise costs</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex-1 glass-card p-8 flex flex-col items-center text-center z-10 relative mt-0 md:mt-0">
              <div className="w-[48px] h-[48px] rounded-full border-2 border-[#C9A84C] bg-[#11204C] flex items-center justify-center mb-6">
                <span className="font-playfair text-[22px] text-[#C9A84C] font-bold">2</span>
              </div>
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-4">Get More Bookings</h3>
              <p className="font-inter text-[13px] text-[#CBD5E1] mb-6 leading-[1.6]">#03 Online Booking Form<br/>#05 Google Review System<br/>#06 Instagram Bio Hub</p>
              <div className="mt-auto">
                <span className="font-inter text-[14px] text-white font-semibold">Scope-defined · No surprise costs</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex-1 glass-card p-8 flex flex-col items-center text-center z-10 relative">
              <div className="w-[48px] h-[48px] rounded-full border-2 border-[#C9A84C] bg-[#11204C] flex items-center justify-center mb-6">
                <span className="font-playfair text-[22px] text-[#C9A84C] font-bold">3</span>
              </div>
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-4">Grow Revenue</h3>
              <p className="font-inter text-[13px] text-[#CBD5E1] mb-6 leading-[1.6]">#07 Packages Sales<br/>#08 Staff Profiles<br/>#09 Bridal Page<br/>#10 Loyalty Card</p>
              <div className="mt-auto">
                <span className="font-inter text-[14px] text-white font-semibold">Scope-defined · No surprise costs</span>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex-1 glass-card p-8 flex flex-col items-center text-center z-10 relative">
              <div className="w-[48px] h-[48px] rounded-full border-2 border-[#C9A84C] bg-[#11204C] flex items-center justify-center mb-6">
                <span className="font-playfair text-[22px] text-[#C9A84C] font-bold">4</span>
              </div>
              <h3 className="font-playfair text-[22px] text-white font-semibold mb-4">Automate & Retain</h3>
              <p className="font-inter text-[13px] text-[#CBD5E1] mb-6 leading-[1.6]">#11 Appointment Reminders<br/>Analytics Dashboards<br/>Auto follow-ups</p>
              <div className="mt-auto">
                <span className="font-inter text-[14px] text-white font-semibold">Scope-defined · No surprise costs</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION F: ESG PROMISE ================= */}
      <section className="marble-section !h-auto py-20 px-6 border-y border-[rgba(0,0,0,0.1)] text-[#0B1B4D]">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="font-inter text-[13px] uppercase tracking-[0.15em] font-semibold mb-4 text-[#0B1B4D] text-center">OUR RESPONSIBILITY</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] mb-4 text-center font-bold leading-[1.2]">Good for your business.<br/>Good for the world.</h2>
          <p className="font-inter text-[17px] text-[#374151] max-w-2xl text-center mb-16 leading-[1.8]">
            Every digital product we build eliminates paper waste, reduces unnecessary travel, and helps local businesses compete with digital confidence.
          </p>

          <div className="flex flex-col md:flex-row gap-6 w-full">
            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 flex-1 text-center">
              <FileX color="#C9A84C" size={32} className="mx-auto mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Less Paper Waste</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">Digital menus, loyalty cards, booking forms — no more printing. One update and everyone sees it instantly.</p>
            </div>
            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 flex-1 text-center">
              <Zap color="#C9A84C" size={32} className="mx-auto mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Less Energy Wasted</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">Automated reminders reduce no-shows. Fewer empty chairs mean less wasted electricity and staff time.</p>
            </div>
            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 flex-1 text-center">
              <Heart color="#C9A84C" size={32} className="mx-auto mb-4" />
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-3 leading-tight">Supports Local Business</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">When your business thrives — it keeps money in the community and keeps people employed.</p>
            </div>
          </div>

          <div className="mt-12 text-center text-[#374151] font-inter text-[13px] font-semibold leading-[1.8]">
            Aligned with UN SDGs: SDG 8 · SDG 9 · SDG 11 · SDG 12 · SDG 16<br/>
            We help businesses grow responsibly.
          </div>
        </div>
      </section>

      {/* ================= SECTION G: AI-FIRST INTELLIGENCE STRIP ================= */}
      <section className="bg-[#050D2A] py-16 px-6 border-b border-[rgba(201,168,76,0.2)]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="label-gold mb-4 text-center">HOW BAS THINKS</span>
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white mb-6 font-bold leading-tight">Advisory Augmented by Intelligence.</h2>
          <p className="font-inter text-[17px] text-[#E2E8F0] leading-[1.9] mb-10 max-w-3xl">
            Every recommendation BAS makes is stress-tested through the same 15-layer analytical framework that powers the DecisionMine Third Brain™ — examining legal, ethical, operational, economic, and governance dimensions simultaneously, before a single word of advice is given.
          </p>

          <div className="flex flex-col md:flex-row gap-6 w-full items-stretch">
            <div className="glass-card p-8 rounded-xl flex-1 text-left flex flex-col shadow-none">
              <span className="label-gold mb-3 block">THE THIRD BRAIN™</span>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7] flex-1 mb-6">
                15 analytical layers. Every decision examined simultaneously. GO · PILOT · CAUTION · REDESIGN · STOP.
              </p>
              <Link href="/decisionmine" className="font-inter text-[13px] text-[#C9A84C] hover:underline font-semibold w-max block mt-auto">See it think →</Link>
            </div>

            <div className="glass-card p-8 rounded-xl flex-1 text-left flex flex-col shadow-none">
              <span className="label-gold mb-3 block">BAS ACADEMY</span>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7] flex-1 mb-6">
                Building AI-native teams. M365 Copilot mastery — from Work IQ to Multi-Agent orchestration.
              </p>
              <Link href="/academy" className="font-inter text-[13px] text-[#C9A84C] hover:underline font-semibold w-max block mt-auto">Build your AI capability →</Link>
            </div>

            <div className="glass-card p-8 rounded-xl flex-1 text-left flex flex-col shadow-none">
              <span className="label-gold mb-3 block">BAS ADVISORY</span>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7] flex-1 mb-6">
                AI-augmented strategy. Human judgment at the core. Founder-led. Evidence-based. Always.
              </p>
              <Link href="/services" className="font-inter text-[13px] text-[#C9A84C] hover:underline font-semibold w-max block mt-auto">Where we focus our intelligence →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION H: BOTTOM CTA ================= */}
      <section className="py-20 px-6 bg-[#0B1B4D] text-center border-t border-[rgba(201,168,76,0.15)] relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold">Ready to save time starting today?</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mt-4 mb-6 max-w-lg mx-auto leading-[1.7]">
            Tell us about your business and we&apos;ll tell you exactly which products to start with.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-gold !font-bold">WhatsApp Us Now →</a>
            <MagneticLink href="/contact" className="btn-glass">Tell us what you&apos;re navigating</MagneticLink>
          </div>

          <div className="mt-8 flex gap-6 justify-center flex-wrap items-center">
            <span className="font-inter text-[14px] text-[#CBD5E1] flex items-center gap-2">
              <Mail size={16} /> connect@bhramaastraadvisory.com
            </span>
            <span className="font-inter text-[14px] text-[#CBD5E1] flex items-center gap-2">
              <Phone size={16} /> +971 50 409 0727
            </span>
            <span className="font-inter text-[14px] text-[#CBD5E1]">
              🇦🇪 Serving businesses across UAE
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
