'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter } from 'next/font/google';

const Playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

// ◈ Atmospheric "Digital Silk" Particles ◈
const AtmosphericShards = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current; if(!canvas) return;
        const ctx = canvas.getContext('2d'); if(!ctx) return;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        
        const pArr = Array.from({length: 120}).map(() => ({ 
            x: Math.random() * width, 
            y: Math.random() * height, 
            size: Math.random() * 2 + 1, 
            speedX: (Math.random() - 0.5) * 0.8, 
            speedY: (Math.random() - 0.5) * 1.2 - 0.5, 
            opacity: Math.random() 
        }));

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            pArr.forEach(p => {
                p.x += p.speedX; p.y += p.speedY; p.opacity -= 0.001;
                if(p.opacity <= 0) { p.x = Math.random() * width; p.y = height + 10; p.opacity = 1; }
                ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity * 0.4})`; // Subtle gold shimmer
                ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
            });
            requestAnimationFrame(draw);
        };
        draw();
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 z-20 pointer-events-none" />;
};

export default function TeaserEngine() {
    const [currentTime, setCurrentTime] = useState(0);
    const [isStarted, setIsStarted] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (videoRef.current) {
                setCurrentTime(videoRef.current.currentTime);
            }
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const startRecordingFlow = () => {
        setIsStarted(true);
        videoRef.current?.play();
    };

    return (
        <div className="fixed inset-0 bg-black text-white overflow-hidden font-inter select-none">
            {/* ◈ BASE LAYER: Source Video ◈ */}
            <video 
                ref={videoRef}
                src="/videos/teaser.mp4" 
                className="w-full h-full object-cover"
                muted
                playsInline
            />

            {/* ◈ ATMOSPHERIC LAYER: Digital Shards ◈ */}
            <AtmosphericShards />

            {/* ◈ BRAND LAYER: Ghost Watermark (Top-Right) ◈ */}
            <div className="absolute top-8 right-8 z-30 opacity-54">
                <div className="w-32 h-32 overflow-hidden rounded-[16px]">
                    <img 
                        src="/videos/teaser-logo.png" 
                        alt="BAS Logo" 
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>

            {/* ◈ INTERACTIVE LAYER: Website Pop-up (Starts at 99s) ◈ */}
            <AnimatePresence>
                {currentTime >= 99 && (
                    <motion.div 
                        initial={{ x: 300, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 300, opacity: 0 }}
                        className="absolute bottom-12 right-12 z-40"
                    >
                        <div className="bg-[#0B1B4D] border-l-4 border-[#C9A84C] px-8 py-4 shadow-2xl flex items-center gap-6">
                            <div className="w-12 h-12 bg-[#C9A84C] rounded-full flex items-center justify-center">
                                <span className="text-[#0B1B4D] font-bold">◈</span>
                            </div>
                            <div>
                                <p className="text-[#C9A84C] text-[10px] tracking-widest font-bold uppercase mb-1">VISIT NOW</p>
                                <p className={`${Playfair.className} text-xl font-bold tracking-wider`}>www.bhramaastra.com</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ◈ CLIMAX LAYER: Final "Watch Out" (Last 5s) ◈ */}
            <AnimatePresence>
                {currentTime >= 122 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 z-50 bg-[#0B1B4D]/60 backdrop-blur-sm flex flex-col items-center justify-center text-center p-12"
                    >
                        <motion.span 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-[#C9A84C] text-[12px] tracking-[0.5em] uppercase mb-8 font-bold"
                        >
                            THE COUNTDOWN IS ALIVE
                        </motion.span>
                        <motion.h1 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className={`${Playfair.className} text-[4vw] font-black leading-tight text-white mb-12`}
                        >
                            Watch out for the launch video, <br/>coming out anytime soon.
                        </motion.h1>
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: "200px" }}
                            transition={{ delay: 0.6, duration: 1 }}
                            className="h-[2px] bg-[#C9A84C]" 
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ◈ PRODUCTION TRIGGER (For Automation) ◈ */}
            {!isStarted && (
                <div className="absolute inset-0 z-[100] bg-black flex items-center justify-center">
                    <button 
                        onClick={startRecordingFlow}
                        className="bg-[#C9A84C] text-[#0B1B4D] px-12 py-4 font-black tracking-widest text-sm uppercase rounded-[4px] hover:scale-110 transition-transform"
                    >
                        START TEASER PRODUCTION
                    </button>
                </div>
            )}

            <style jsx global>{`
                .opacity-54 { opacity: 0.54; }
                .text-gold-shimmer { background: linear-gradient(90deg, #462523, #f6f2c0 50%, #462523); -webkit-background-clip: text; background-clip: text; color: transparent; }
            `}</style>
        </div>
    );
}
