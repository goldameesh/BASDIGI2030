'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, Lock } from 'lucide-react';

export default function PrivacyShield() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-card p-6 md:p-8 rounded-2xl border-[1.5px] border-[rgba(201,168,76,0.3)] bg-gradient-to-br from-[#11204C] to-[#0B1B4D] max-w-2xl mx-auto my-12"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center shadow-[0_0_20px_rgba(201,168,76,0.3)]">
          <ShieldCheck color="#0B1B4D" size={24} />
        </div>
        <div>
          <h3 className="font-playfair text-[20px] text-white font-semibold">Zero-Trace Privacy Assurance</h3>
          <p className="font-inter text-[12px] text-[#C9A84C] uppercase tracking-[0.1em] font-bold">100% Anonymous · Ephemeral Session</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <div className="flex items-start gap-3">
          <EyeOff color="#94A3B8" size={18} className="mt-1" />
          <p className="font-inter text-[13px] text-[#CBD5E1] leading-[1.6]">
            No data is sent to our servers. Every strategic calculation and stress-test happens locally in your browser.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <Lock color="#94A3B8" size={18} className="mt-1" />
          <p className="font-inter text-[13px] text-[#CBD5E1] leading-[1.6]">
            Closing this tab instantly destroys the session. Nothing is cached, logged, or recoverable.
          </p>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-[rgba(255,255,255,0.05)] text-center">
        <p className="font-inter text-[11px] text-[#64748B]">
          Verified by BAS Intelligence Governance · UAE Federal Decree-Law No. 45-2021 Compliant
        </p>
      </div>
    </motion.div>
  );
}
