'use client';
import { motion } from 'framer-motion';
import { Shield, Leaf, Zap, FileText, CheckCircle, TrendingUp } from 'lucide-react';
import Framework5D from '@/components/Framework5D';
import { servicesData } from '@/data/services';
import { MagneticLink } from '@/components/MagneticElements';

const iconMap = {
  grc: Shield,
  esg: Leaf,
  transformation: Zap,
  sops: FileText,
  audit: CheckCircle,
  investor: TrendingUp,
};

export default function ServicesPage() {
  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      
      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540]">
        
        {/* Layer 1: Orb (bottom-right) */}
        <motion.div 
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] gold-orb z-[0] md:opacity-100 opacity-60 pointer-events-none"
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
            <span className="label-gold mb-6 md:mb-8 text-center">WHAT WE DO</span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="text-[34px] md:text-[56px] font-playfair font-bold text-white leading-[1.2] tracking-tight text-center"
          >
            Tailored Solutions for Today&apos;s<br/>
            Complex Business Challenges
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="font-inter text-[17px] md:text-[18px] text-[#CBD5E1] max-w-2xl mx-auto text-center mt-6 leading-[1.7]"
          >
            Six practice areas. One integrated partner. Every engagement founder-led and evidence-based.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {servicesData.map((srv) => {
              const IconComp = iconMap[srv.slug as keyof typeof iconMap];
              return (
                <motion.div 
                  key={srv.slug}
                  variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                  className="glass-card p-10 flex flex-col rounded-2xl h-full border-l-[3px] border-l-gold-primary"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <IconComp color="#C9A84C" size={36} />
                    <h2 className="font-playfair text-[24px] text-white font-semibold leading-tight">{srv.name}</h2>
                  </div>
                  
                  <div className="w-full h-px bg-[rgba(201,168,76,0.2)] mb-6" />
                  
                  <span className="label-gold mb-3">ABOUT THIS PRACTICE</span>
                  <p className="font-inter text-[15px] text-[#E2E8F0] leading-[1.8] mb-8 flex-1">
                    {srv.gridBody}
                  </p>
                  
                  <div className="w-full h-px bg-[rgba(201,168,76,0.2)] mb-6" />
                  
                  <span className="label-gold mb-4">KEY DELIVERABLES</span>
                  <div className="flex flex-col gap-3 flex-1 mb-8">
                    {srv.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-[#C9A84C] text-[18px] leading-none">◈</span>
                        <span className="font-inter text-[14px] text-[#CBD5E1] leading-[1.5]">{deliv}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                    <MagneticLink href={`/services/${srv.slug}`} className="font-inter text-[14px] text-[#C9A84C] font-semibold hover:text-white transition-colors flex items-center group">
                      {srv.ctaText}
                    </MagneticLink>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        
        </div>
      </section>

      {/* ================= 5D FRAMEWORK STRIP ================= */}
      <section className="marble-section !h-auto py-16 px-6 border-y border-[rgba(0,0,0,0.1)] text-[#0B1B4D]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="font-inter text-[13px] uppercase tracking-[0.15em] font-semibold mb-4 text-[#0B1B4D] text-center">OUR METHODOLOGY</span>
          <h2 className="font-playfair text-[32px] md:text-[40px] text-[#0B1B4D] mb-12 text-center font-bold">The 5D Framework in Every Engagement</h2>
          <Framework5D light={true} />
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="py-20 px-6 bg-[#091540] text-center border-t border-[rgba(201,168,76,0.15)] relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold">Ready to Discuss Your Challenge?</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mt-4 mb-10 max-w-lg mx-auto">
            Every engagement begins with a conversation — not a proposal.
          </p>
          <div className="flex justify-center">
            <MagneticLink href="/contact" className="btn-gold !font-bold">Begin a Conversation</MagneticLink>
          </div>
        </div>
      </section>

    </main>
  );
}
