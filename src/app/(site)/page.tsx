'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Shield, Globe, Layers, TrendingUp, Leaf, Zap, FileText, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import dynamic from 'next/dynamic';
import WarmShimmerText from '@/components/hero/WarmShimmerText';
import { useGoldContext } from '@/context/GoldContext';
import { MagneticLink } from '@/components/MagneticElements';

const WebGLBackground = dynamic(() => import('@/components/hero/WebGLBackground'), { ssr: false });

function CounterStat({ endValue, suffix, label }: { endValue: number, suffix: string, label: string }) {
  const { ref, displayValue } = useCounterAnimation(endValue, 2000);
  return (
    <motion.div 
      ref={ref} 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center py-8 px-6 sm:[&:not(:nth-child(2n))]:border-r xl:[&:not(:last-child)]:border-r border-[rgba(201,168,76,0.2)]"
    >
      <div className="font-playfair text-[56px] md:text-[72px] text-gold-primary font-bold">
        {displayValue}{suffix}
      </div>
      <div className="font-inter text-[16px] text-[#E2E8F0] mt-2">
        {label}
      </div>
    </motion.div>
  );
}

export default function Home() {
  const { setGoldActive } = useGoldContext();
  const shouldReduceMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [orbOffset, setOrbOffset] = useState({ x: 0, y: 0 });

  const scrollStoryRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: scrollStoryProgress } = useScroll({ target: scrollStoryRef });
  const storyX = useTransform(scrollStoryProgress, [0, 1], ["0%", "-80%"]);
  
  const activeScaleX = useTransform(scrollStoryProgress, [0, 1], [0.2, 1]);

  useEffect(() => {
    setOrbOffset({ x: Math.random() * 100 - 50, y: Math.random() * 100 - 50 });
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width * 2 - 1;
    const y = -(e.clientY - rect.top) / rect.height * 2 + 1;
    if (!window.matchMedia('(max-width:768px)').matches) {
       setMousePos({ x, y });
    }
  };

  return (
    <main className="w-full flex font-inter flex-col">
      
      {/* ================= SECTION 1: HERO (7D) ================= */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#091540]"
        onMouseMove={handleMouseMove}
      >
        {/* Layer 1: WebGL Background (Entrance Fade 800ms) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <WebGLBackground mousePos={mousePos} />
        </motion.div>
        
        {/* Layer 2: Gold Orb Parallax */}
        <motion.div 
          animate={{ x: [0, 15, -10, 0], scale: [1, 1.1, 1.05, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] md:w-[700px] md:h-[700px] gold-orb z-[1] md:opacity-100 opacity-60 pointer-events-none"
          style={{
            transform: `translate(calc(${orbOffset.x}px + ${-mousePos.x * 20}px), calc(${orbOffset.y}px + ${mousePos.y * 15}px))`
          }}
        />

        {/* Layer 3: Content Sequence (Warm Reveal) */}
        <div 
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32 max-w-4xl mx-auto w-full"
          style={{
             transform: `translate(${mousePos.x * 4}px, ${-mousePos.y * 4}px)`
          }}
        >
          {/* Eyebrow: Opacity 0->1, y: 12->0, 600ms, 400ms delay */}
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <span className="label-gold mb-6 md:mb-8 tracking-widest uppercase block">
              BHRAMAASTRA ADVISORY SERVICES · EST. IN PURPOSE
            </span>
          </motion.div>

          <h1 className="text-[38px] md:text-[72px] font-playfair font-bold text-white leading-[1.1] tracking-tight select-none">
            <WarmShimmerText 
              text="One Partner," 
              delay={2.6} 
              className="block opacity-0 animate-[fade-in-up_0.8s_ease-out_2.6s_forwards]" 
            />
            <WarmShimmerText 
              text="Infinite Solutions." 
              delay={2.8} 
              className="mt-2 block opacity-0 animate-[fade-in-up_0.8s_ease-out_2.8s_forwards]"
              baseColor="text-white hover-gold-trigger"
            />
          </h1>

          {/* Subtitle: Clean fade, 500ms, 3.4s delay */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 3.4, ease: "linear" }}
            className="text-[18px] md:text-[20px] text-[#E2E8F0] mt-6 max-w-xl leading-[1.7]"
          >
            Quietly redesigning ESG, GRC, SOPs & Transformation for purpose-driven institutions across 12+ countries.
          </motion.p>

          {/* Buttons: Scale spring, 3.8s delay */}
          <motion.div 
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 100, 
              damping: 15, 
              delay: 3.8 
            }}
            className="flex flex-wrap gap-4 mt-10 justify-center w-full relative z-20"
            onMouseEnter={() => setGoldActive(true)}
            onMouseLeave={() => setGoldActive(false)}
          >
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-gold !font-bold">WhatsApp Us Now →</a>
              <MagneticLink href="/contact" className="btn-glass">Tell us what you&apos;re navigating</MagneticLink>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 4.2 }}
            className="mt-16"
          >
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <ChevronDown color="#C9A84C" size={28} />
            </motion.div>
          </motion.div>
        </div>
        
      </section>

      {/* ================= SECTION 2: MARQUEE STRIP ================= */}
      <section className="w-full h-[52px] bg-[#050D2A] border-y border-[rgba(201,168,76,0.15)] overflow-hidden flex items-center relative">
        <div className="absolute whitespace-nowrap inline-block animate-[marquee-scroll_40s_linear_infinite]">
          <span className="font-inter text-[13px] text-[#C9A84C] tracking-[0.08em] uppercase">
            Governance, Risk & Compliance ◈ ESG & Sustainability Strategy ◈ Business Transformation ◈ Process Design & SOPs ◈ Internal Audit & Assurance ◈ Digital Advisory ◈ BAS Foundry ◈ BAS Academy ◈ DecisionMine Engine ◈ Investor Relations ◈ Data Governance ◈ Procurement Optimization ◈ 
            Governance, Risk & Compliance ◈ ESG & Sustainability Strategy ◈ Business Transformation ◈ Process Design & SOPs ◈ Internal Audit & Assurance ◈ Digital Advisory ◈ BAS Foundry ◈ BAS Academy ◈ DecisionMine Engine ◈ Investor Relations ◈ Data Governance ◈ Procurement Optimization ◈
          </span>
        </div>
      </section>

      {/* ================= SECTION 3: IMPACT NUMBERS ================= */}
      <div className="marble-section" />
      <section className="bg-[#0B1B4D] py-20 px-6">
        <div className="max-w-[1440px] mx-auto text-center">
          <span className="label-gold mb-4 mx-auto">BY THE NUMBERS</span>
          <p className="font-inter text-[16px] text-[#CBD5E1] text-center mb-16 mx-auto">
            Two decades of delivering measurable outcomes<br className="hidden md:block" />
            across the world&apos;s most complex institutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-px max-w-6xl mx-auto">
            <CounterStat endValue={20} suffix="+" label="Years of Leadership" />
            <CounterStat endValue={12} suffix="+" label="Countries Served" />
            <CounterStat endValue={5} suffix="D" label="Proprietary Framework" />
            <CounterStat endValue={100} suffix="%" label="Founder-Led Delivery" />
          </div>
        </div>
      </section>
      <div className="marble-section" />

      {/* ================= SECTION 4: WHY BAS ================= */}
      <section className="bg-[#091540] py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <span className="label-gold mb-4">TRUST & CREDIBILITY</span>
          <h2 className="font-playfair text-[28px] md:text-[48px] text-white mb-6 max-w-2xl leading-[1.2] font-bold">
            Why Global Clients Choose Bhramaastra
          </h2>
          <p className="font-inter text-[18px] text-[#CBD5E1] mb-16 max-w-xl">
            Founder-led, evidence-based, and built around your context. Never templated. Never outsourced.
          </p>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[
              {
                icon: Shield,
                title: "Founder-Led Strategy",
                desc: "Fortune 500 insight delivered personally by Amish Shah — analytically augmented by the DecisionMine Third Brain™. No junior consultants. No templated thinking."
              },
              {
                icon: Globe,
                title: "12+ Countries of Delivery",
                desc: "Projects across MENA, Asia, Africa, and Europe — with genuine regulatory fluency and cultural awareness built from real in-market experience."
              },
              {
                icon: Layers,
                title: "Proprietary 5D Framework",
                desc: "Discover · Define · Design · Develop · Deploy. A tested end-to-end methodology for transformation that creates lasting institutional change — not just reports."
              },
              {
                icon: TrendingUp,
                title: "Proven, Measurable ROI",
                desc: "Audit value uplift, improved ESG ratings, and operational efficiency gains — delivered with evidence and reported transparently."
              }
            ].map((box, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="glass-card p-8 rounded-xl"
              >
                <box.icon color="#C9A84C" size={32} className="mb-4" />
                <h3 className="font-playfair text-[22px] text-white mb-3 font-semibold">{box.title}</h3>
                <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">{box.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 5: SCROLL STORYTELLING ================= */}
      <section className="bg-[#0B1B4D]">
        
        {/* DESKTOP (Pinned Horizontal Scroll) */}
        <div ref={scrollStoryRef} className="hidden lg:block relative h-[500vh]">
          <div className="sticky top-0 h-[100vh] w-full overflow-hidden flex items-center">
            
            <motion.div style={{ x: storyX }} className="flex w-[500vw] h-full">
              
              {/* Panel 1 */}
              <div className="w-[100vw] h-full flex flex-col items-center justify-center text-center px-20">
                 <h2 className="font-playfair text-[80px] text-white mb-8 font-bold">We Listen</h2>
                 <svg width="120" height="120" viewBox="0 0 100 100" className="mb-8 overflow-visible">
                    <path d="M20 50 A 30 30 0 1 1 80 50" fill="none" stroke="#C9A84C" strokeWidth="4" strokeLinecap="round" strokeDasharray="100" strokeDashoffset="0">
                       <animate attributeName="stroke-dashoffset" from="100" to="0" dur="2s" fill="freeze" repeatCount="indefinite" />
                    </path>
                 </svg>
                 <p className="text-[20px] text-[#E2E8F0] max-w-2xl">Every engagement begins with understanding — your context, your constraints, your goals.</p>
              </div>

              {/* Panel 2 */}
              <div className="w-[100vw] h-full flex flex-col items-center justify-center text-center px-20">
                 <h2 className="font-playfair text-[80px] text-white mb-8 font-bold">We Understand</h2>
                 <svg width="120" height="120" viewBox="0 0 100 100" className="mb-8">
                    <circle cx="20" cy="50" r="6" fill="#C9A84C" />
                    <circle cx="50" cy="20" r="6" fill="#C9A84C" />
                    <circle cx="80" cy="50" r="6" fill="#C9A84C" />
                    <circle cx="50" cy="80" r="6" fill="#C9A84C" />
                    <circle cx="50" cy="50" r="8" fill="#C9A84C" />
                    <path d="M20 50 L50 20 L80 50 L50 80 Z M20 50 L50 50 L80 50 M50 20 L50 80" fill="none" stroke="#C9A84C" strokeWidth="2" strokeDasharray="200" strokeDashoffset="0">
                        <animate attributeName="stroke-dashoffset" from="200" to="0" dur="3s" fill="freeze" repeatCount="indefinite" />
                    </path>
                 </svg>
                 <p className="text-[20px] text-[#E2E8F0] max-w-2xl">We map the full picture — stakeholders, risks, interdependencies — before making a single recommendation.</p>
              </div>

              {/* Panel 3 */}
              <div className="w-[100vw] h-full flex flex-col items-center justify-center text-center px-20">
                 <h2 className="font-playfair text-[80px] text-white mb-8 font-bold">We Design</h2>
                 <svg width="120" height="120" viewBox="0 0 100 100" className="mb-8">
                    <path d="M10 33 L90 33 M10 66 L90 66 M33 10 L33 90 M66 10 L66 90 M10 10 L90 10 L90 90 L10 90 Z" fill="none" stroke="#C9A84C" strokeWidth="2" strokeDasharray="400" strokeDashoffset="0">
                        <animate attributeName="stroke-dashoffset" from="400" to="0" dur="4s" fill="freeze" repeatCount="indefinite" />
                    </path>
                 </svg>
                 <p className="text-[20px] text-[#E2E8F0] max-w-2xl">Strategy without structure is ambition without direction. We build the blueprint that makes change possible.</p>
              </div>

              {/* Panel 4 */}
              <div className="w-[100vw] h-full flex flex-col items-center justify-center text-center px-20">
                 <h2 className="font-playfair text-[80px] text-white mb-8 font-bold">We Deliver</h2>
                 <div className="flex items-center justify-center gap-12 mb-8">
                    <CounterStat endValue={20} suffix="+" label="years" />
                    <CounterStat endValue={12} suffix="+" label="countries" />
                 </div>
                 <p className="text-[20px] text-[#E2E8F0] max-w-2xl">Two decades. Twelve countries. Every deliverable accountable to the founder.</p>
              </div>

              {/* Panel 5 */}
              <div className="w-[100vw] h-full flex flex-col items-center justify-center text-center px-20">
                 <h2 className="font-playfair text-[80px] text-white mb-8 font-bold">We Transform</h2>
                 <div className="flex items-center justify-center gap-4 mb-8 text-[#C9A84C] font-inter font-bold text-[24px]">
                    <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.4}}>D1</motion.span> → 
                    <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:0.8}}>D2</motion.span> → 
                    <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.2}}>D3</motion.span> → 
                    <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:1.6}}>D4</motion.span> → 
                    <motion.span initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:2.0}}>D5</motion.span>
                 </div>
                 <p className="text-[20px] text-[#E2E8F0] max-w-2xl">Transformation is not a project. It is a permanent shift in how an institution operates.</p>
              </div>

            </motion.div>

            {/* Progress Bar (Desktop) */}
            <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="flex gap-4">
                 {[0,1,2,3,4].map((i) => (
                    <motion.div key={i} className="w-2 h-2 rounded-full" 
                                style={{ backgroundColor: '#C9A84C', opacity: 0.3 }} />
                 ))}
              </div>
              <div className="w-[200px] h-[2px] bg-[rgba(201,168,76,0.2)] rounded-full overflow-hidden">
                 <motion.div className="h-full bg-gold-primary origin-left" style={{ scaleX: activeScaleX }} />
              </div>
            </div>

          </div>
        </div>

        {/* MOBILE (Vertical Flow) */}
        <div className="lg:hidden flex flex-col py-24 px-6 gap-24">
           {[
            { title: "We Listen", desc: "Every engagement begins with understanding — your context, your constraints, your goals." },
            { title: "We Understand", desc: "We map the full picture — stakeholders, risks, interdependencies — before making a single recommendation." },
            { title: "We Design", desc: "Strategy without structure is ambition without direction. We build the blueprint that makes change possible." },
            { title: "We Deliver", desc: "Two decades. Twelve countries. Every deliverable accountable to the founder." },
            { title: "We Transform", desc: "Transformation is not a project. It is a permanent shift in how an institution operates." },
           ].map((p, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="text-center w-full"
             >
               <h2 className="font-playfair text-[40px] text-white mb-4 font-bold">{p.title}</h2>
               <p className="text-[17px] text-[#E2E8F0]">{p.desc}</p>
             </motion.div>
           ))}
        </div>

      </section>

      {/* ================= SECTION 6: SERVICES PREVIEW ================= */}
      <section className="bg-[#091540] py-24 px-6 border-t border-[rgba(201,168,76,0.15)]">
        <div className="max-w-6xl mx-auto">
          <span className="label-gold mb-4 text-center md:text-left block">WHAT WE DO</span>
          <h2 className="font-playfair text-[28px] md:text-[48px] text-white mb-4 leading-[1.2] font-bold text-center md:text-left">
            Tailored Solutions for Today&apos;s Complex Business Challenges
          </h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mb-16 max-w-2xl text-center md:text-left">
            Six practice areas. One integrated partner. Delivered with precision across every engagement.
          </p>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Shield, title: "Governance, Risk & Compliance", desc: "We architect integrated GRC ecosystems that elevate governance, manage risk proactively, and ensure resilient regulatory alignment.", href: "/services/grc" },
              { icon: Leaf, title: "ESG & Sustainability Strategy", desc: "We embed ESG at the core of business, enabling compliance, stakeholder trust, and climate-conscious strategic advantage.", href: "/services/esg" },
              { icon: Zap, title: "Strategic & Digital Transformation", desc: "We unlock growth through strategy-led transformation, blending innovation, digitization, and operational redesign for measurable impact.", href: "/services/transformation" },
              { icon: FileText, title: "Process Design & SOPs", desc: "We engineer streamlined, audit-ready processes and SOPs that drive consistency, operational control, and enterprise-wide accountability.", href: "/services/sops" },
              { icon: CheckCircle, title: "Internal Audit & Assurance", desc: "We deliver future-focused audit programs that strengthen controls, elevate assurance, and align with evolving risk landscapes.", href: "/services/audit" },
              { icon: TrendingUp, title: "Investor Relations & Start-up", desc: "We guide founders and growing businesses through funding strategy, investor readiness, and capital relationships.", href: "/services/investor" }
            ].map((srv, i) => (
              <motion.div 
                key={i}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className="glass-card p-8 rounded-xl border-l-4 border-l-gold-primary relative overflow-hidden group cursor-pointer"
                onClick={() => window.location.href = srv.href}
              >
                <srv.icon color="#C9A84C" size={28} className="mb-4" />
                <h3 className="font-playfair text-[20px] text-white mb-3 font-semibold group-hover:text-gold-primary transition-colors">{srv.title}</h3>
                <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] pb-4">{srv.desc}</p>
                <div className="absolute bottom-0 left-0 w-full px-8 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[rgba(9,21,64,0.95)]">
                  <span className="font-inter text-[13px] text-[#C9A84C] font-semibold">See how we work →</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= SECTION 7: ECOSYSTEM PREVIEW ================= */}
      <section className="bg-marble-bg bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20L20 0H10L0 10V20Z\' fill=\'rgba(100,100,100,0.06)\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] py-24 px-6 border-y border-[rgba(0,0,0,0.1)]">
        <div className="max-w-6xl mx-auto">
          <span className="font-inter text-[13px] font-semibold text-[#0B1B4D] uppercase tracking-[0.15em] block mb-4 text-center md:text-left">THE BAS ECOSYSTEM</span>
          <h2 className="font-playfair text-[32px] md:text-[48px] text-[#0B1B4D] font-bold mb-4 text-center md:text-left">One Family. Multiple Solutions.</h2>
          <p className="font-inter text-[18px] text-[#374151] mb-16 max-w-2xl text-center md:text-left">
            From enterprise advisory to SME digital tools — one family of solutions built for every stage of business.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            {[
              { label: "BAS FOUNDRY", title: "Practical Digital Solutions for SMEs", desc: "Demand-led, scope-defined digital support — built around real business needs, not a preloaded shelf.", cta: "Explore Foundry →", href: "/ecosystem" },
              { label: "BAS ACADEMY", title: "M365 Copilot Mastery", desc: "From Work IQ to Multi-Agent — a professional L&D course built with Harvard, Stanford, and Feynman methods.", cta: "Enter Academy →", href: "/academy" },
              { label: "DECISIONMINE ENGINE", title: "The Third Brain™", desc: "15-layer simultaneous decision intelligence. GO · PILOT · CAUTION · REDESIGN · STOP.", cta: "Discover Third Brain →", href: "/decisionmine" },
            ].map((eco, i) => (
              <div key={i} className="flex-1 bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 hover:border-[rgba(201,168,76,0.8)] hover:shadow-[0_8px_32px_rgba(11,27,77,0.3)] transition-all flex flex-col justify-between">
                <div>
                  <span className="label-gold mb-4">{eco.label}</span>
                  <h3 className="font-playfair text-[22px] text-white mb-3 font-semibold">{eco.title}</h3>
                  <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.6]">{eco.desc}</p>
                </div>
                <Link href={eco.href} className="text-[#C9A84C] font-inter text-[14px] mt-6 font-semibold inline-block hover:text-white transition-colors">
                  {eco.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: VISION + MISSION ================= */}
      <section className="bg-[#0B1B4D] py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <span className="label-gold mb-4 mx-auto">OUR NORTH STAR</span>
          <h2 className="font-playfair text-[38px] md:text-[48px] text-white font-bold mb-16 text-center">Purpose. Delivered.</h2>

          <div className="flex flex-col md:flex-row gap-8 relative items-stretch w-full">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 flex-1 rounded-2xl"
            >
              <span className="label-gold mb-4">VISION</span>
              <p className="font-inter text-[16px] text-[#E2E8F0] leading-[1.9]">
                To become a purpose-led, trusted advisory partner that transforms businesses into sustainable, resilient, and ethically driven enterprises — where performance is guided by purpose, and every engagement creates meaningful impact.
              </p>
            </motion.div>

            <div className="hidden md:block w-px bg-[rgba(201,168,76,0.3)] self-stretch mx-2" />

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card p-10 flex-1 rounded-2xl"
            >
              <span className="label-gold mb-4">MISSION</span>
              <p className="font-inter text-[16px] text-[#E2E8F0] leading-[1.9]">
                At Bhramaastra Advisory Services, our mission is to deliver honest, transparent, and high-impact consulting solutions across GRC, ESG, Process Excellence, and Business Transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: CONTACT TEASER ================= */}
      <section className="bg-[#091540] py-24 px-6 border-t border-[rgba(201,168,76,0.15)] relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <span className="label-gold mb-4 mx-auto">REACH US</span>
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold mb-4">Have Questions? We&apos;re Just a Message Away</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mb-12">
            We listen before we respond. Share what&apos;s on your mind.
          </p>

          <form action="https://formspree.io/f/xbdqonrw" method="POST" className="flex flex-col gap-4 text-left">
            <input type="text" name="name" required placeholder="Who may we humbly address?" className="input-glass" />
            <input type="email" name="email" required placeholder="Your email (never shared)" className="input-glass" />
            <input type="text" name="organization" placeholder="Organisation (optional)" className="input-glass" />
            <input type="text" name="subject" required placeholder="Subject" className="input-glass" />
            <textarea name="message" required rows={5} placeholder="Your message..." className="input-glass resize-none" />
            <button type="submit" className="btn-gold w-full mt-4 !font-bold">
              Send Message →
            </button>
          </form>
        </div>
      </section>

    </main>
  );
}
