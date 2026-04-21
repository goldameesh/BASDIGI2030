'use client';

import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter, Alex_Brush } from 'next/font/google';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import SpiralSpikeBrain from '@/components/cinematic/SpiralSpikeBrain';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['300', '400', '700'] });
const alexBrush = Alex_Brush({ subsets: ['latin'], weight: ['400'] });

const WebGLBackground = dynamic(() => import('@/components/hero/WebGLBackground'), { ssr: false });

const SECTIONS = [
    { id: 'opening', type: 'ceremony', duration: 11000 },
    { 
        id: 'home', 
        label: 'THE FOUNDATION', 
        narration: 'One Partner, Infinite Solutions with AI augmentation and Human Led Intelligence.', 
        img: '/cinematic/v1.1/home.png', 
        duration: 8000 
    },
    { 
        id: 'foundry', 
        label: 'THE FOUNDRY', 
        narration: 'BAS Foundry Ecosystem - An Initiative to support SMEs and Local Businesses.', 
        img: '/cinematic/v1.1/ecosystem.png', 
        duration: 8000 
    },
    { 
        id: 'library', 
        label: 'OPEN WISDOM', 
        narration: 'Open Intelligence. Knowledge without Barriers.', 
        img: '/cinematic/v1.1/library.png', 
        duration: 8000 
    },
    { 
        id: 'academy', 
        label: 'RESPONSIBLE LEADERSHIP', 
        narration: 'Creative Leaders. AI Native Intelligence.', 
        img: '/cinematic/v1.1/academy.png', 
        duration: 8000 
    },
    { 
        id: 'playground', 
        label: 'THE STRESS-TEST', 
        narration: 'Relax and Stress-test your convictions with Zero Data Retention.', 
        img: '/cinematic/v1.1/playground.png', 
        duration: 8000 
    },
    { id: 'climax', type: 'climax', duration: 13000 },
    { id: 'visionary', type: 'signature', duration: 14000 },
    { id: 'finale', type: 'finale', duration: 5000 }
];

const CurtainLayer = ({ open, closing }: { open: boolean, closing?: boolean }) => (
    <div className="absolute inset-0 z-[2000] flex pointer-events-none overflow-hidden">
        <motion.div initial={{ x: 0 }} animate={{ x: open && !closing ? '-100%' : 0 }} transition={{ duration: 3.5, ease: [0.77, 0, 0.175, 1] }} 
            className="w-1/2 h-full bg-[#0B1B4D] border-r border-[#C9A84C]/30 shadow-[20px_0_50px_rgba(0,0,0,0.5)]" />
        <motion.div initial={{ x: 0 }} animate={{ x: open && !closing ? '100%' : 0 }} transition={{ duration: 3.5, ease: [0.77, 0, 0.175, 1] }} 
            className="w-1/2 h-full bg-[#0B1B4D] border-l border-[#C9A84C]/30 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]" />
    </div>
);

export default function CinematicMaster() {
    const [scene, setScene] = useState(-1);
    const [ceremonyState, setCeremonyState] = useState<'closed' | 'open' | 'closing'>('closed');
    const audioRef = useRef<HTMLAudioElement>(null);

    const startCeremony = () => {
        setCeremonyState('open');
        audioRef.current?.play();
        
        // Wait for opening ceremony duration before starting the first scene
        setTimeout(() => {
            setScene(1);
            runSequence();
        }, SECTIONS[0].duration);
    };

    const runSequence = () => {
        let currentIdx = 1;
        const next = () => {
            currentIdx++; 
            if (currentIdx >= SECTIONS.length) {
                setCeremonyState('closing');
                return;
            }
            setScene(currentIdx);
            setTimeout(next, SECTIONS[currentIdx].duration);
        };
        setTimeout(next, SECTIONS[1].duration);
    };

    return (
        <div className={`fixed inset-0 bg-[#060D26] text-white overflow-hidden select-none ${inter.className}`}>
            <audio ref={audioRef} src="/audio/bas-theme-2.mp3" preload="auto" />

            <CurtainLayer open={ceremonyState === 'open'} />

            {/* ◈ Entrance Ritual ◈ */}
            <AnimatePresence>
                {ceremonyState === 'closed' && (
                    <motion.div 
                        key="gate"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 z-[3000] flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl p-6"
                    >
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }} 
                            className="text-center mb-16"
                        >
                            <span className="text-[#C9A84C] tracking-[0.4em] uppercase text-[12px] mb-6 block border border-[#C9A84C] px-3 py-1 rounded inline-block">BOARDROOM REVEAL</span>
                            <h1 className={`${playfair.className} text-[38px] md:text-[56px] tracking-[0.2em] font-black uppercase text-gold-shimmer`}>Welcome to Bhramaastra 2.0</h1>
                        </motion.div>
                        <motion.button 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }} 
                            onClick={startCeremony} 
                            className="w-24 h-24 bg-[#C9A84C] rounded-full flex items-center justify-center shadow-[0_0_80px_rgba(201,168,76,0.4)] border-2 border-white/40"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="#0B1B4D" strokeWidth="2.5" className="w-10 h-10">
                                <path d="M5 3l14 9-14 9V3z" fill="currentColor" />
                            </svg>
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ◈ Reveal Text Persistence ◈ */}
            <AnimatePresence>
                {ceremonyState === 'open' && scene === -1 && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.5, duration: 2 }}
                        className="absolute inset-0 z-[3000] flex flex-col items-center justify-center pointer-events-none"
                    >
                        <span className="text-[#C9A84C] tracking-[0.4em] uppercase text-[12px] mb-6 block">BOARDROOM REVEAL</span>
                        <h1 className={`${playfair.className} text-[38px] md:text-[56px] tracking-[0.2em] font-black uppercase text-gold-shimmer`}>Welcome to Bhramaastra 2.0</h1>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="relative w-full h-full">
                {ceremonyState === 'open' && scene === -1 && (
                    <div className="absolute inset-0 z-0">
                        <video src="/videos/teaser.mp4" autoPlay muted loop className="w-full h-full object-cover opacity-60" />
                    </div>
                )}
                <AnimatePresence mode="wait">
                    {/* ◈ Split Screen Narrative (Scenes 1-5) ◈ */}
                    {scene >= 1 && scene <= 5 && (
                        <motion.div 
                            key={`s${scene}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex"
                        >
                            {/* Left: Narrative Canvas (40%) */}
                            <div className="w-[40%] h-full bg-[#060D26] border-r border-[#C9A84C]/10 flex flex-col justify-center p-12 md:p-20 z-20">
                                <motion.span 
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.8 }}
                                    className="text-[#C9A84C] text-[12px] tracking-[0.3em] font-bold uppercase mb-8 border-l-2 border-[#C9A84C] pl-4"
                                >
                                    {SECTIONS[scene].label}
                                </motion.span>
                                <motion.h2 
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1, delay: 0.3 }}
                                    className={`${playfair.className} text-[3.5vw] font-bold leading-[1.2] text-white`}
                                >
                                    {SECTIONS[scene].narration}
                                </motion.h2>
                                <motion.div 
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: SECTIONS[scene].duration / 1000, ease: "linear" }}
                                    className="h-[2px] bg-gold-shimmer w-full mt-12 origin-left"
                                />
                            </div>

                            {/* Right: Actual Page (60%) */}
                            <div className="w-[60%] h-full relative overflow-hidden flex items-center justify-center bg-[#0B1B4D]">
                                {scene === 1 && <div className="absolute inset-0 opacity-20"><WebGLBackground mousePos={{x:0,y:0}} /></div>}
                                <motion.div
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.9 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="relative w-full h-full px-10 py-10"
                                >
                                    <Image 
                                        src={SECTIONS[scene].img!} 
                                        alt={SECTIONS[scene].label!} 
                                        fill 
                                        className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.5)]" 
                                    />
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* ◈ Climax: Spiral Spike Brain (Scene 6) ◈ */}
                    {scene === 6 && (
                        <motion.div 
                            key="climax"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex items-center justify-center bg-[#060D26]"
                        >
                            <SpiralSpikeBrain />
                        </motion.div>
                    )}

                    {/* ◈ Signature Reveal (Scene 7) ◈ */}
                    {scene === 7 && (
                        <motion.div 
                            key="signature"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-[#060D26]"
                        >
                            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                                {/* Founder Hexagon */}
                                <div className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative">
                                    <motion.div 
                                        animate={{ rotate: 360 }} 
                                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }} 
                                        className="absolute inset-0 border-[3px] border-[#C9A84C]/50 clip-hexagon" 
                                    />
                                    <div className="absolute inset-[8px] bg-[#0B1B4D] clip-hexagon overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                                        <Image 
                                            src="/images/founder/amish-shah.jpg" 
                                            alt="Amish Shah" 
                                            fill 
                                            className="object-cover scale-105" 
                                        />
                                    </div>
                                </div>

                                {/* Signature & URL */}
                                <div className="text-center md:text-left">
                                    <svg viewBox="0 0 400 120" className="w-[300px] md:w-[450px] h-[100px] stroke-[#C9A84C] fill-none stroke-[2] opacity-80">
                                        <motion.path 
                                            initial={{ pathLength: 0 }} 
                                            animate={{ pathLength: 1 }} 
                                            transition={{ duration: 6, ease: "easeInOut" }} 
                                            d="M50,80 C100,20 150,40 250,60 C300,100 350,20 380,90 M120,70 L320,70" 
                                        />
                                    </svg>
                                    <motion.p 
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 2, duration: 2 }}
                                        className={`${alexBrush.className} text-[64px] md:text-[92px] text-gold-shimmer -mt-6`}
                                    >
                                        Amish Shah
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 4, duration: 1.5 }}
                                        className="mt-4 flex flex-col items-center md:items-start relative"
                                    >
                                        <span className="text-[#C9A84C] tracking-[0.5em] text-[14px] font-bold z-10">VISIT & EXPLORE</span>
                                        
                                        {/* ◈ Animated Gold Ring Highlight ◈ */}
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ 
                                                opacity: [0, 1, 1, 0],
                                                scale: [0.8, 1.1, 1.1, 0.8]
                                            }}
                                            transition={{ 
                                                delay: 5, 
                                                duration: 8, 
                                                times: [0, 0.2, 0.8, 1],
                                                ease: "easeOut"
                                            }}
                                            className="absolute -inset-x-12 -inset-y-6 border-2 border-[#C9A84C]/40 rounded-full z-0"
                                        >
                                            <motion.div 
                                                animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity }}
                                                className="absolute inset-0 border border-[#C9A84C]/20 rounded-full blur-md"
                                            />
                                        </motion.div>

                                        <a href="https://www.bhramaastra.com" className="relative z-10 text-white text-[24px] md:text-[32px] font-bold border-b-2 border-transparent hover:border-[#C9A84C] transition-all mt-2 tracking-[0.05em]">
                                            www.bhramaastra.com
                                        </a>

                                        {/* ◈ High-Visibility Animated Hand ◈ */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 200, y: 150, rotate: 15 }}
                                            animate={{ 
                                                opacity: [0, 1, 1, 0],
                                                x: [200, 40, 40, 200],
                                                y: [150, 0, 0, 150],
                                                scale: [1, 1, 0.85, 1],
                                            }}
                                            transition={{ 
                                                delay: 5, 
                                                duration: 5, 
                                                times: [0, 0.4, 0.7, 1],
                                                ease: "easeInOut" 
                                            }}
                                            className="absolute right-[-20px] top-[40px] pointer-events-none z-[100]"
                                        >
                                            <div className="relative">
                                                {/* Click Ripple Effect */}
                                                <motion.div 
                                                    animate={{ 
                                                        scale: [1, 2],
                                                        opacity: [0.5, 0]
                                                    }}
                                                    transition={{ delay: 7.5, duration: 0.8, repeat: 1 }}
                                                    className="absolute top-0 left-0 w-8 h-8 border-2 border-[#C9A84C] rounded-full -translate-x-1/2 -translate-y-1/2"
                                                />
                                                {/* The Hand Icon (Pointer) */}
                                                <svg viewBox="0 0 24 24" fill="#C9A84C" className="w-16 h-16 drop-shadow-[0_0_20px_rgba(201,168,76,0.8)]">
                                                    <path d="M12 21.5c-1.1 0-2-.9-2-2v-4.1H7c-1.7 0-3-1.3-3-3v-1.1c0-.9.4-1.7 1-2.2L9.6 4.3c.4-.4 1-.6 1.6-.6h1.1c1.4 0 2.5 1.1 2.5 2.5v9h2c1.7 0 3 1.3 3 3v1c0 1.4-1.1 2.5-2.5 2.5l-5.3.8z" />
                                                    <path d="M13 1v9h2V1h-2z" fill="white" opacity="0.3" />
                                                </svg>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* ◈ Finale: Thank You (Scene 8) ◈ */}
                    {scene === 8 && (
                        <motion.div 
                            key="finale"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-[#060D26]"
                        >
                             <h1 className={`${playfair.className} text-[10vw] font-black glow-text text-gold-shimmer`}>THANK YOU</h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx global>{`
                .text-gold-shimmer {
                    background: linear-gradient(to right, #C9A84C 20%, #F6F2C0 40%, #C9A84C 60%, #F6F2C0 80%);
                    background-size: 200% auto;
                    color: transparent;
                    -webkit-background-clip: text;
                    background-clip: text;
                    animation: shimmer 6s linear infinite;
                }
                @keyframes shimmer {
                    to { background-position: 200% center; }
                }
                .glow-text { text-shadow: 0 0 80px rgba(201,168,76,0.3); }
                .clip-hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
            `}</style>
        </div>
    );
}
