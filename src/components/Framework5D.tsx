'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Framework5D({ light = false }: { light?: boolean }) {
  const steps = [
    { num: "01", title: "DISCOVER", desc: "Understand context, challenges, and goals" },
    { num: "02", title: "DEFINE", desc: "Clarify scope, stakeholders, success metrics" },
    { num: "03", title: "DESIGN", desc: "Build the blueprint for transformation" },
    { num: "04", title: "DEVELOP", desc: "Create deliverables, frameworks, systems" },
    { num: "05", title: "DEPLOY", desc: "Implement, embed, ensure lasting adoption" }
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 items-stretch max-w-6xl mx-auto w-full">
      {steps.map((step, i) => (
        <div key={i} className="flex flex-col md:flex-row items-stretch md:items-center flex-1">
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className={`p-6 flex-1 text-center flex flex-col items-center justify-center h-full w-full rounded-xl border transition-all duration-300 ${
              light 
                ? "bg-[rgba(11,27,77,0.03)] border-[rgba(11,27,77,0.1)] hover:border-[#C9A84C]" 
                : "glass-card"
            }`}
          >
            <div className="font-playfair text-[52px] text-[#C9A84C] font-bold leading-none">{step.num}</div>
            <div className={`font-inter text-[16px] font-semibold mt-2 uppercase tracking-[0.1em] ${light ? "text-[#0B1B4D]" : "text-white"}`}>{step.title}</div>
            <div className={`font-inter text-[13px] mt-2 leading-[1.6] ${light ? "text-[#374151]" : "text-[#CBD5E1]"}`}>{step.desc}</div>
          </motion.div>
          {i < steps.length - 1 && (
            <div className="hidden md:flex flex-shrink-0 self-center mx-1 lg:mx-2">
              <ArrowRight color="#C9A84C" size={24} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
