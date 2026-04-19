'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { libraryResources, libraryCategories, LibraryResource } from '@/data/library';
import ExternalLinkModal from '@/components/ExternalLinkModal';
import Link from 'next/link';

export default function LibraryPage() {
  const [activeTab, setActiveTab] = useState<string>('All');
  const [selectedResource, setSelectedResource] = useState<LibraryResource | null>(null);

  const filteredResources = activeTab === 'All' 
    ? libraryResources 
    : libraryResources.filter(r => r.category === activeTab);

  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D] min-h-screen relative">
      
      {/* ================= HERO ================= */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540] py-24 px-6 border-b border-[rgba(201,168,76,0.2)]">
        
        <motion.div 
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] gold-orb z-[0] md:opacity-100 opacity-60 pointer-events-none"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto w-full mt-10"
        >
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}>
            <span className="label-gold mb-6 md:mb-8 text-center">BAS FREE LIBRARY</span>
          </motion.div>

          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="text-[34px] md:text-[56px] font-playfair font-bold text-white leading-[1.2] tracking-tight text-center"
          >
            Knowledge. Tools. Intelligence.<br/>
            <span className="shimmer-text">All Free. Always.</span>
          </motion.h1>

          <motion.p
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } } }}
            className="font-inter text-[18px] text-[#E2E8F0] max-w-2xl mx-auto text-center mt-6 leading-[1.7]"
          >
            Every free resource BAS has built — gathered in one place. Each one opens in its own space. To return, simply come back here.
          </motion.p>
        </motion.div>

        {/* Stats Row */}
        <div className="relative z-10 mt-12 flex gap-8 justify-center flex-wrap">
          <div className="glass-card px-6 py-3 rounded-full flex items-center justify-center border-t border-[rgba(255,255,255,0.1)]">
            <span className="font-inter text-[14px] text-[#E2E8F0] font-medium">{libraryResources.length} Resources</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center justify-center border-t border-[rgba(255,255,255,0.1)]">
            <span className="font-inter text-[14px] text-[#E2E8F0] font-medium">Zero Cost</span>
          </div>
          <div className="glass-card px-6 py-3 rounded-full flex items-center justify-center border-t border-[rgba(255,255,255,0.1)]">
            <span className="font-inter text-[14px] text-[#E2E8F0] font-medium">Open Access</span>
          </div>
        </div>

        {/* FILTER TABS */}
        <div className="relative z-10 mt-16 flex gap-3 justify-center flex-wrap">
          {libraryCategories.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full font-inter text-[14px] transition-all duration-300 ${
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
      </section>

      {/* ================= RESOURCE CARDS GRID ================= */}
      <section className="py-16 px-6 bg-[#0B1B4D] relative z-10 w-full flex flex-col items-center">
        <div className="max-w-6xl w-full">
          
          <div className="font-inter text-[13px] text-[#C9A84C] italic text-center mb-8">
             ◈ Each resource opens independently. This hub remains here when you return.
          </div>

          <AnimatePresence mode="wait">
            {filteredResources.length > 0 ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredResources.map((res, i) => (
                  <motion.div
                    key={res.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="glass-card p-8 flex flex-col rounded-2xl group transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.15)] overflow-hidden"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="glass-card px-3 py-1 rounded-full flex items-center justify-center">
                        <span className="font-inter font-semibold text-[11px] text-[#C9A84C] uppercase tracking-widest">{res.category}</span>
                      </div>
                      <div className="bg-[rgba(201,168,76,0.15)] border border-[#C9A84C] rounded-full px-3 py-1 flex items-center justify-center">
                        <span className="font-inter font-semibold text-[11px] text-[#C9A84C] tracking-[0.1em] uppercase">FREE</span>
                      </div>
                    </div>

                    <h3 className="font-playfair text-[22px] text-white font-bold mb-2 group-hover:text-[#E8C96D] transition-colors">{res.title}</h3>
                    <span className="label-gold mb-4 !normal-case tracking-normal !opacity-90">{res.subtitle}</span>
                    
                    <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] flex-1 mb-6">
                      {res.description}
                    </p>

                    {res.badge && (
                      <div className="glass-card px-4 py-2 rounded mb-6 max-w-full border-[rgba(255,255,255,0.08)]">
                        <span className="font-inter text-[12px] text-[#E2E8F0] tracking-wide block leading-relaxed break-words">{res.badge}</span>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2 mb-6">
                      {res.tags.map((tag, idx) => (
                        <div key={idx} className="glass-card px-2 py-1 rounded border-none bg-[rgba(255,255,255,0.04)]">
                          <span className="font-inter text-[11px] text-[#CBD5E1] tracking-wide">{tag}</span>
                        </div>
                      ))}
                    </div>

                    <button 
                      onClick={() => res.isExternal ? setSelectedResource(res) : window.location.assign(res.url)}
                      className="w-full btn-gold !mt-auto relative z-10 overflow-hidden group/btn text-center"
                    >
                      <span className="relative z-10 transition-colors group-hover/btn:text-[#0B1B4D]">Open Resource →</span>
                      <div className="absolute inset-0 bg-[#C9A84C] transform scale-x-0 origin-left transition-transform duration-300 group-hover/btn:scale-x-100 z-0"></div>
                    </button>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full flex justify-center py-16"
              >
                <div className="glass-card px-10 py-16 rounded-2xl flex flex-col items-center justify-center text-center max-w-lg">
                  <span className="font-inter text-[16px] text-[#CBD5E1] mb-2 font-medium">◈ No resources in this category yet.</span>
                  <span className="font-inter text-[13px] text-[#64748B]">More being added regularly.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="marble-section !h-auto py-20 px-6 border-t border-[rgba(0,0,0,0.1)] text-center">
        <div className="max-w-xl mx-auto flex flex-col items-center">
          <span className="font-inter text-[13px] uppercase tracking-[0.15em] font-semibold mb-4 text-[#0B1B4D]">HAVE SOMETHING TO ADD?</span>
          <h2 className="font-playfair text-[32px] md:text-[40px] text-[#0B1B4D] mb-4 font-bold leading-[1.2]">
            This library grows with every insight we build.
          </h2>
          <p className="font-inter text-[17px] text-[#374151] mt-4 mb-10 leading-[1.7]">
            New resources are added as Amish and the BAS team create them. Bookmark this page and return when you need it.
          </p>
          <Link 
            href="/contact"
            className="btn-glass !bg-[#0B1B4D] !text-[#E2E8F0]"
          >
            Tell us what you need →
          </Link>
        </div>
      </section>

      <ExternalLinkModal resource={selectedResource} onClose={() => setSelectedResource(null)} />
    </main>
  );
}
