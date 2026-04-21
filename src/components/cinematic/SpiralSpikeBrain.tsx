'use client';

import React from 'react';
import { motion } from 'framer-motion';

const layers = [
    "Surface Framing", "Primary System", "Hidden Burden", "Reclassification", 
    "First-Order Opportunity", "Second-Order Value", "Value Creation vs Capture",
    "Legal Review", "Ethics & Trust", "Technical Feasibility", 
    "Economic Viability", "Operational Implementability", "Governance Requirements",
    "Stakeholder Map", "Time Horizon"
];

export default function SpiralSpikeBrain() {
    return (
        <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
            {/* ◈ Central Aperture ◈ */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-50 text-center"
            >
                <div className="w-24 h-24 md:w-44 md:h-44 rounded-full border border-[#C9A84C]/40 flex items-center justify-center relative bg-black/60 backdrop-blur-xl">
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.15, 1], 
                            opacity: [0.3, 0.7, 0.3],
                            boxShadow: [
                                "0 0 20px rgba(201,168,76,0.1)",
                                "0 0 60px rgba(201,168,76,0.3)",
                                "0 0 20px rgba(201,168,76,0.1)"
                            ]
                        }} 
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                        className="absolute inset-0 bg-[#C9A84C]/10 rounded-full blur-2xl" 
                    />
                    <div className="text-center">
                        <h2 className="text-[18px] md:text-[28px] font-black text-white tracking-[0.3em] font-playfair">DECISION</h2>
                        <h2 className="text-[12px] md:text-[14px] font-bold text-[#C9A84C] tracking-[0.5em] mt-1">MINE™</h2>
                    </div>
                </div>
            </motion.div>

            {/* ◈ The 15 Neural Spikes ◈ */}
            <div className="absolute inset-0 flex items-center justify-center">
                {layers.map((layer, i) => {
                    const angle = (i * 360) / 15;
                    return (
                        <motion.div
                            key={i}
                            initial={{ rotate: angle, scale: 0, opacity: 0 }}
                            animate={{ 
                                rotate: angle + 360, 
                                scale: 1, 
                                opacity: 1 
                            }}
                            transition={{ 
                                rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                                scale: { duration: 1, delay: i * 0.1, ease: "easeOut" },
                                opacity: { duration: 1, delay: i * 0.1 }
                            }}
                            className="absolute w-full h-full flex items-center justify-center origin-center"
                        >
                            <div className="relative h-[2px] w-[160px] md:w-[360px]" style={{ left: '50%', transform: 'translateX(-100%)' }}>
                                {/* The Spike (Tapered Gold Path) */}
                                <motion.div 
                                    className="absolute right-0 top-1/2 -translate-y-1/2 h-[4px] bg-gradient-to-l from-[#C9A84C] to-transparent rounded-full shadow-[0_0_15px_rgba(201,168,76,0.5)]"
                                    animate={{ 
                                        width: ["20px", "100%", "20px"],
                                        opacity: [0.4, 1, 0.4]
                                    }}
                                    transition={{ 
                                        duration: 4, 
                                        repeat: Infinity, 
                                        ease: "easeInOut",
                                        delay: i * 0.2
                                    }}
                                />
                                
                                {/* The Label Portal */}
                                <motion.div 
                                    className="absolute left-[-10px] top-1/2 -translate-y-1/2 transform -translate-x-full"
                                    animate={{
                                        x: [0, -10, 0]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                >
                                    <div className="flex flex-col items-center">
                                        <div className="bg-black/80 border border-[#C9A84C]/40 px-3 py-1.5 rounded-[4px] backdrop-blur-md">
                                            <span className="text-[9px] md:text-[11px] text-[#E2E8F0] uppercase tracking-[0.25em] font-medium whitespace-nowrap">
                                                {layer}
                                            </span>
                                        </div>
                                        <div className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full mt-2 shadow-[0_0_10px_#C9A84C]" />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* ◈ Atmospheric Spiral Rings ◈ */}
            {[1, 2, 3].map((ring) => (
                <motion.div
                    key={ring}
                    className="absolute border border-[#C9A84C]/10 rounded-full pointer-events-none"
                    style={{ 
                        width: `${ring * 300}px`, 
                        height: `${ring * 300}px` 
                    }}
                    animate={{ 
                        rotate: ring % 2 === 0 ? 360 : -360,
                        opacity: [0.05, 0.15, 0.05]
                    }}
                    transition={{ 
                        rotate: { duration: ring * 20, repeat: Infinity, ease: "linear" },
                        opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                />
            ))}

            <style jsx>{`
                .font-playfair { font-family: 'Playfair Display', serif; }
            `}</style>
        </div>
    );
}
