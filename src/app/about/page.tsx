'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Framework5D from '@/components/Framework5D';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import { MagneticLink } from '@/components/MagneticElements';

function StatCounter({ value, label }: { value: number; label: string }) {
  const { ref, displayValue } = useCounterAnimation(value, 2000);
  return (
    <div ref={ref} className="glass-card px-6 py-3 rounded flex items-baseline gap-2">
      <span className="font-playfair text-[32px] text-[#C9A84C] font-bold leading-none">{displayValue}+</span>
      <span className="font-inter text-[14px] text-white">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      
      {/* ================= SECTION A: HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540]">
        
        {/* Layer 1: Orb (top-left) */}
        <motion.div 
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] gold-orb z-[0] md:opacity-100 opacity-60"
        />

        {/* Layer 2: Content */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24 max-w-3xl mx-auto w-full mt-10"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}>
            <span className="label-gold mb-6 md:mb-8 text-center">ABOUT US</span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="text-[34px] md:text-[56px] font-playfair font-bold text-white leading-[1.2] tracking-tight text-center max-w-3xl mx-auto"
          >
            Founded on Purpose.<br/>
            Built on Trust.
          </motion.h1>
        </motion.div>
      </section>

      {/* ================= SECTION B: FOUNDER ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] border-t border-[rgba(201,168,76,0.15)] relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center md:items-stretch">
          
          <div className="w-full md:w-[40%] flex flex-col items-center justify-start">
            <div className="relative w-[220px] h-[220px] rounded-full border-2 border-[#C9A84C] shadow-[0_0_40px_rgba(201,168,76,0.2)] overflow-hidden flex items-center justify-center bg-gradient-to-br from-[#1a3066] to-[#0B1B4D]">
              <Image 
                src="/images/founder/amish-shah.jpg" 
                alt="Amish Shah - Founder" 
                fill 
                className="object-cover"
              />
              <span className="absolute z-[-1] font-playfair text-[48px] text-[#C9A84C]">AS</span>
            </div>
            <h2 className="font-playfair text-[20px] text-white text-center mt-6 font-semibold">Amish Shah</h2>
            <div className="font-inter text-[13px] text-[#C9A84C] uppercase tracking-[0.1em] text-center mt-1 font-semibold">
              Founder · Bhramaastra Advisory Services
            </div>
          </div>

          <div className="w-full md:w-[60%] flex flex-col justify-center">
            <p className="font-inter text-[17px] text-[#E2E8F0] leading-[1.9]">
              Amish Shah is an Investor, Owner, and AI Architect with over 20 years of leadership across governance, transformation, and strategic advisory — spanning MENA, Asia, Africa, and Europe.
            </p>
            <p className="font-inter text-[17px] text-[#E2E8F0] leading-[1.9] mt-6">
              Bhramaastra Advisory Services was built on one belief: that honest, transparent, high-impact consulting — delivered with genuine empathy — creates institutions that outlast trends and withstand scrutiny.
            </p>
            <p className="font-inter text-[17px] text-[#E2E8F0] leading-[1.9] mt-6">
              We do not outsource our thinking. We do not template our solutions. Every engagement is founder-designed, founder-accountable, and built around the specific context of the client in front of us.
            </p>

            <div className="w-full h-px bg-[rgba(201,168,76,0.3)] mt-8 mb-6" />

            <div className="flex gap-6 mt-2 flex-wrap">
              <StatCounter value={20} label="Years" />
              <StatCounter value={12} label="Countries" />
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION C: VISION & MISSION ================= */}
      <section className="marble-section !h-auto py-24 px-6 border-y border-[rgba(0,0,0,0.1)] text-[#0B1B4D]">
        <div className="max-w-5xl mx-auto flex flex-col">
          <span className="font-inter text-[13px] uppercase tracking-[0.15em] font-semibold mb-4 text-center">OUR NORTH STAR</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] mb-16 text-center font-bold">Purpose. Defined.</h2>

          <div className="flex flex-col md:flex-row gap-8 items-stretch w-full">
            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-10 flex-1">
              <span className="label-gold mb-4">VISION</span>
              <h3 className="hidden">Vision</h3>
              <p className="font-inter text-[16px] text-[#E2E8F0] leading-[1.9]">
                To become a purpose-led, trusted advisory partner that transforms businesses into sustainable, resilient, and ethically driven enterprises — where performance is guided by purpose, and every engagement creates meaningful impact.
              </p>
            </div>

            <div className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-10 flex-1">
              <span className="label-gold mb-4">MISSION</span>
              <h3 className="hidden">Mission</h3>
              <p className="font-inter text-[16px] text-[#E2E8F0] leading-[1.9]">
                At Bhramaastra Advisory Services, our mission is to deliver honest, transparent, and high-impact consulting solutions across GRC, ESG, Process Excellence, and Business Transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION D: 5D FRAMEWORK ================= */}
      <section className="py-24 px-6 bg-[#091540]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="label-gold mb-4 text-center">THE FRAMEWORK</span>
          <h2 className="font-playfair text-[32px] md:text-[44px] text-white mb-4 text-center font-bold">The Framework That Guides Everything</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mb-16 text-center">
            Proprietary · Tested · Transformation-Ready
          </p>

          <Framework5D />
        </div>
      </section>

      {/* ================= SECTION E: VALUES MARQUEE ================= */}
      <section className="w-full h-[52px] bg-[#050D2A] border-y border-[rgba(201,168,76,0.5)] overflow-hidden flex items-center relative">
        <div className="absolute whitespace-nowrap inline-block animate-[marquee-scroll_35s_linear_infinite]">
          <span className="font-inter text-[13px] text-[#C9A84C] tracking-[0.08em] uppercase font-semibold">
            We Listen ◈ We Understand ◈ We Deliver ◈ Honest ◈ Transparent ◈ High-Impact ◈ Purpose-Led ◈ Founder-Guided ◈ No Junior Consultants ◈ No Templates ◈ Every Engagement is Unique ◈ 
            We Listen ◈ We Understand ◈ We Deliver ◈ Honest ◈ Transparent ◈ High-Impact ◈ Purpose-Led ◈ Founder-Guided ◈ No Junior Consultants ◈ No Templates ◈ Every Engagement is Unique ◈
          </span>
        </div>
      </section>

      {/* ================= SECTION F: CTA ================= */}
      <section className="py-20 px-6 bg-[#0B1B4D] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold">Ready to Begin a Conversation?</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mt-4 mb-10 max-w-lg mx-auto">
            Tell us what you are navigating. We will tell you honestly whether and how we can help.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticLink href="/contact" className="btn-gold !font-bold">Begin a Conversation</MagneticLink>
            <MagneticLink href="/services" className="btn-glass">Explore Our Services</MagneticLink>
          </div>
        </div>
      </section>

    </main>
  );
}
