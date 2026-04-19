'use client';
export const dynamic = 'force-dynamic';

import CognitivePlayground from '@/components/playground/CognitivePlayground';
import { motion } from 'framer-motion';

export default function PlaygroundPage() {
  return (
    <main className="w-full flex flex-col min-h-screen bg-[#0B1B4D] py-24 relative overflow-hidden">
      
      {/* Immersive Background Shaders */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] bg-[#C9A84C] blur-[200px] opacity-[0.15] rounded-full"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.05, 0.15, 0.05],
            x: [0, -40, 0],
            y: [0, 60, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-1/4 -right-1/4 w-[1200px] h-[1200px] bg-[#050D2A] blur-[180px] opacity-[0.2] rounded-full"
        />
      </div>

      {/* The Core Experience */}
      <section className="relative z-10 w-full flex flex-col items-center">
        <CognitivePlayground />
      </section>

      {/* Footer / Disclaimer */}
      <section className="relative z-10 mt-12 py-10 px-6 border-t border-[rgba(255,255,255,0.05)] bg-[#050D2A]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left max-w-xl">
            <p className="font-inter text-[11px] text-[#64748B] leading-[1.6]">
              The Insight Forge is an interactive diagnostic module. All recommendations are advisory and should be reviewed by qualified professionals. Bhramaastra Advisory Services accept no liability for decisions made solely based on Playground outputs.
            </p>
          </div>
          <div className="flex items-center gap-8 opacity-40 grayscale pointer-events-none">
            {/* Branding logos or small icons if needed */}
            <span className="font-playfair text-[18px] text-white font-bold tracking-tighter">BASDIGI2030</span>
          </div>
        </div>
      </section>

    </main>
  );
}
