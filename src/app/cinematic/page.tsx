'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Playfair_Display, Inter, Alex_Brush, Montserrat } from 'next/font/google';
import dynamic from 'next/dynamic';

const Playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700', '900'] });
const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '700'] });
const AlexBrush = Alex_Brush({ subsets: ['latin'], weight: ['400'] });

const WebGLBackground = dynamic(() => import('@/components/hero/WebGLBackground'), { ssr: false });

// ◈ 15-Layer Third Brain™ Neural Mesh ◈
const ThirdBrainMesh = () => {
    const layers = [
        "Surface Framing", "Primary System", "Hidden Burden", "Reclassification", 
        "First-Order Opportunity", "Second-Order Value", "Value Creation vs Capture",
        "Legal Review", "Ethics & Trust", "Technical Feasibility", 
        "Economic Viability", "Operational Implementability", "Governance Requirements",
        "Stakeholder Map", "Time Horizon"
    ];

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => setIsVisible(true), []);

    return (
        <div className="relative w-[800px] h-[800px] flex items-center justify-center">
            {/* Central Neural Aperture */}
            <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="z-50 text-center"
            >
                <div className="w-48 h-48 rounded-full border border-gold-primary/30 flex items-center justify-center relative bg-black/40 backdrop-blur-md">
                     <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 4, repeat: Infinity }} className="absolute inset-0 bg-gold-primary/10 rounded-full blur-xl" />
                     <h2 className={`${Playfair.className} text-[24px] font-black text-gold-shimmer tracking-[0.2em]`}>THIRD<br/>BRAIN</h2>
                </div>
            </motion.div>
            
            {/* Orbiting Shards */}
            {layers.map((layer, i) => (
                <motion.div
                    key={i}
                    initial={{ rotate: i * (360 / 15), opacity: 0 }}
                    animate={{ rotate: i * (360 / 15) + 360, opacity: 1 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                    className="absolute w-full h-full flex items-center justify-end origin-center"
                    style={{ paddingRight: '120px' }} // Radius from center to shards
                >
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex flex-col items-center gap-2 group"
                    >
                        <span className="bg-black/60 border border-[#C9A84C]/30 px-3 py-1 rounded-[4px] text-[10px] text-white uppercase tracking-widest whitespace-nowrap group-hover:bg-[#C9A84C] group-hover:text-[#0B1B4D] transition-all">
                            {layer}
                        </span>
                        <div className="w-1.5 h-1.5 bg-gold-primary rounded-full shadow-[0_0_15px_#C9A84C]" />
                    </motion.div>
                </motion.div>
            ))}

            {/* Holographic Mesh Structure */}
            <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none stroke-[#C9A84C]" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="15" fill="none" strokeWidth="0.05" />
                <circle cx="50" cy="50" r="35" fill="none" strokeWidth="0.05" opacity="0.5" />
                {Array.from({length: 15}).map((_, i) => {
                    const angle = i * 2 * Math.PI / 15;
                    return <line key={i} x1="50" y1="50" x2={50 + 35 * Math.cos(angle)} y2={50 + 35 * Math.sin(angle)} strokeWidth="0.02" />;
                })}
            </svg>
        </div>
    );
}

// ◈ Celebratory Effects ◈

const GoldenDust = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current; if(!canvas) return;
        const ctx = canvas.getContext('2d'); if(!ctx) return;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const pArr = Array.from({length: 80}).map(() => ({ x: Math.random() * width, y: Math.random() * height, size: Math.random() * 3 + 1, speedX: (Math.random() - 0.5) * 1.5, speedY: (Math.random() - 0.5) * 0.5 - 0.5, opacity: Math.random() }));
        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            pArr.forEach(p => {
                p.x += p.speedX; p.y += p.speedY; p.opacity -= 0.002;
                if(p.opacity <= 0) { p.x = Math.random() * width; p.y = height + 10; p.opacity = 1; }
                ctx.fillStyle = `rgba(201, 168, 76, ${p.opacity})`;
                ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
            });
            requestAnimationFrame(draw);
        };
        draw();
    }, []);
    return <motion.canvas initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} ref={canvasRef} className="absolute inset-0 z-[1600] pointer-events-none" />;
};

const OpeningAura = () => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 0.6, 0], scale: 3.5 }}
        transition={{ duration: 4, ease: "easeOut" }}
        className="absolute inset-0 z-[1500] pointer-events-none flex items-center justify-center"
    >
        <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[#C9A84C] to-transparent rounded-full blur-[140px]" />
        <GoldenDust />
    </motion.div>
);

const ConfettiShower = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvas = canvasRef.current; if(!canvas) return;
        const ctx = canvas.getContext('2d'); if(!ctx) return;
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        const pArr = Array.from({length: 150}).map(() => ({ x: Math.random() * width, y: Math.random() * height - height, size: Math.random() * 5 + 2, color: Math.random() > 0.6 ? '#C9A84C' : '#FFFFFF', speed: Math.random() * 2 + 0.5, r: Math.random() * 360, rs: Math.random() * 2 - 1 }));
        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            pArr.forEach(p => {
                p.y += p.speed; p.r += p.rs; if(p.y > height) p.y = -20;
                ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r * Math.PI / 180); ctx.fillStyle = p.color; ctx.fillRect(-p.size/2, -p.size/2, p.size, p.size); ctx.restore();
            });
            requestAnimationFrame(draw);
        };
        draw();
    }, []);
    return <canvas ref={canvasRef} className="absolute inset-0 z-[2500] pointer-events-none" />;
}

const MatrixRain = () => {
    const [rainData, setRainData] = useState<any[]>([]);
    useEffect(() => setRainData(Array.from({length: 20}).map((_, i) => ({ id: i, delay: Math.random() * 5, dur: Math.random() * 10 + 10, x: i * 5 }))), []);
    return (
        <div className="absolute inset-0 opacity-10 pointer-events-none z-0 overflow-hidden">
            <div className="flex justify-around text-[10px] text-[#C9A84C] font-mono whitespace-nowrap opacity-20 transform -rotate-12 scale-150">
                {rainData.map((d) => (
                    <motion.div key={d.id} animate={{ y: [-1000, 1000] }} transition={{ duration: d.dur, repeat: Infinity, ease: "linear", delay: d.delay }}>
                        {Array.from({length: 30}).map((_, j) => ( <div key={j} className="my-2">BAS 2.0 {Math.random().toString(36).substring(7)}</div> ))}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const CurtainLayer = ({ open, closing }: { open: boolean, closing?: boolean }) => (
    <div className="absolute inset-0 z-[2000] flex pointer-events-none overflow-hidden">
        <motion.div initial={{ x: 0 }} animate={{ x: open && !closing ? '-100%' : 0 }} transition={{ duration: 2.5, ease: [0.77, 0, 0.175, 1] }} 
            className="w-1/2 h-full bg-gradient-to-r from-[#0B1B4D] via-[#091540] to-[#C9A84C]/20 border-r border-[#C9A84C]/30 shadow-[20px_0_50px_rgba(0,0,0,0.5)]" />
        <motion.div initial={{ x: 0 }} animate={{ x: open && !closing ? '100%' : 0 }} transition={{ duration: 2.5, ease: [0.77, 0, 0.175, 1] }} 
            className="w-1/2 h-full bg-gradient-to-l from-[#0B1B4D] via-[#091540] to-[#C9A84C]/20 border-l border-[#C9A84C]/30 shadow-[-20px_0_50px_rgba(0,0,0,0.5)]" />
    </div>
);

// ◈ Scenario Board v7.2 ◈

const SECTIONS = [
    { id: 'opening', type: 'ceremony', duration: 4000 },
    { id: 'start', type: 'title', audio: 'pulse', label: 'BHRAMAASTRA ADVISORY SERVICES', main: 'BASDIGI 2030', duration: 5000 },
    { id: 'flagship', type: 'editorial', audio: 'lyrics', label: 'BAS 2.0 · INSTITUTIONAL EVOLUTION', title: 'One Partner, Infinite Solutions', narration: 'Delivering Trusted Solutions across all domains', img: '/cinematic/hero_v2.png', duration: 7000 },
    { id: 'library', type: 'editorial', audio: 'lyrics', label: 'FREE LIBRARY', title: 'Open Intelligence', narration: 'Knowledge, Tools, Intelligence. All Free. Always.', img: '/cinematic/library_v2.png', duration: 9000 },
    { id: 'foundry', type: 'editorial', audio: 'lyrics', label: 'SME INITIATIVE', title: 'Digital Solutions', narration: 'An Initiative to support SMEs and local business', img: '/cinematic/ecosystem.png', duration: 9000 },
    { id: 'academy', type: 'editorial', audio: 'lyrics', label: 'AI LEADERSHIP', title: 'Responsible AI', narration: 'An Initiative to create Responsible AI Leaders - Free Resources Pre-Enabled', img: '/cinematic/academy_v2.png', duration: 9000 },
    { id: 'brain', type: 'climax-brain', audio: 'lyrics', main: 'DECISIONMINE', duration: 11000 },
    { id: 'signature', type: 'signature', audio: 'pulse', main: 'Amish Shah', duration: 7000 },
    { id: 'thanks', type: 'climax', audio: 'lyrics', main: 'THANK YOU', duration: 3000 },
    { id: 'close', type: 'close', duration: 5000 }
];

export default function MasterCeremonyReveal() {
    const [scene, setScene] = useState(-1);
    const [ceremonyState, setCeremonyState] = useState<'closed' | 'cut' | 'open' | 'closing'>('closed');
    const lyricsAudio = useRef<HTMLAudioElement>(null);
    const pulseAudio = useRef<HTMLAudioElement>(null);

    const startCeremony = () => {
        setCeremonyState('cut');
        pulseAudio.current?.play();
        pulseAudio.current!.volume = 1;

        setTimeout(() => {
            setCeremonyState('open');
            setScene(1);
            setTimeout(runSequence, SECTIONS[1].duration);
        }, SECTIONS[0].duration);
    };

    const runSequence = () => {
        let currentIdx = 1;
        const next = () => {
            currentIdx++; if (currentIdx >= SECTIONS.length) return;
            const s = SECTIONS[currentIdx]; setScene(currentIdx);

            if (s.audio === 'lyrics' && lyricsAudio.current?.paused) {
                lyricsAudio.current.currentTime = 0;
                lyricsAudio.current.play();
                let vol = 0;
                const fader = setInterval(() => { vol += 0.04; lyricsAudio.current!.volume = Math.min(1, vol); pulseAudio.current!.volume = Math.max(0.2, 1 - vol); if (vol >= 1) clearInterval(fader); }, 100);
            }
            if (s.id === 'signature' && pulseAudio.current) {
                let vol = 0.2;
                const riser = setInterval(() => { vol += 0.05; pulseAudio.current!.volume = Math.min(1, vol); if(lyricsAudio.current) lyricsAudio.current.volume -= 0.05; if (vol >= 1) clearInterval(riser); }, 100);
            }
            if (s.type === 'close') setCeremonyState('closing');
            else setTimeout(next, s.duration);
        };
        next();
    };

    return (
        <div className="fixed inset-0 bg-[#060D26] text-white overflow-hidden select-none font-inter">
            <audio ref={pulseAudio} src="/bas_pulse.mp3" preload="auto" loop={false} />
            <audio ref={lyricsAudio} src="/bas_lyrics.mp3" preload="auto" loop={false} />

            <MatrixRain />
            
            <div className="absolute inset-0 z-[1100] flex items-center justify-center pointer-events-none">
                <motion.div initial={{ scaleY: 1 }} animate={{ scaleY: ceremonyState !== 'closed' ? 0 : 1 }} transition={{ duration: 1 }} className="w-full h-12 bg-gradient-to-b from-[#C9A84C] to-[#cb9b51] shadow-2xl" />
            </div>

            <CurtainLayer open={ceremonyState === 'open' || ceremonyState === 'cut'} closing={ceremonyState === 'closing'} />
            
            {(ceremonyState === 'open' || ceremonyState === 'cut') && <OpeningAura />}

            {ceremonyState === 'closed' && (
                <div className="absolute inset-0 z-[3000] flex flex-col items-center justify-center bg-black/60 backdrop-blur-md">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 px-6">
                        <span className="label-gold mb-6 inline-block">BOARDROOM REVEAL</span>
                        <h1 className={`${Playfair.className} text-[44px] tracking-[0.4em] text-white font-black uppercase text-center`}>Welcome to Bhramaastra 2.0</h1>
                    </motion.div>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={startCeremony} className="w-24 h-24 bg-[#C9A84C] rounded-full flex items-center justify-center shadow-[0_0_100px_rgba(201,168,76,0.6)] border-2 border-white">
                         <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-12 h-12 text-[#0B1B4D]"><circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" /><line x1="8.12" y1="8.12" x2="12" y2="12" /></svg>
                    </motion.button>
                </div>
            )}

            <div className="relative w-full h-full">
                <AnimatePresence mode="wait">
                    {scene === 1 && (
                        <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="absolute inset-0 opacity-15"><WebGLBackground mousePos={{x:0,y:0}} /></div>
                            <span className="text-[14px] tracking-[1em] text-gold-shimmer mb-6 font-bold">BHRAMAASTRA ADVISORY SERVICES</span>
                            <h1 className={`${Playfair.className} text-[10vw] font-black glow-text`}>BASDIGI 2030</h1>
                        </motion.div>
                    )}

                    {(scene >= 2 && scene <= 5) && (
                        <motion.div key={`s${scene}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex">
                            <div className="w-[40%] h-full bg-[#0B1B4D] border-r border-[#C9A84C]/20 flex flex-col justify-center p-16 z-20">
                                <span className="label-gold block w-max mb-6">{SECTIONS[scene].label}</span>
                                <h2 className={`${Playfair.className} text-[3.5vw] font-bold text-white mb-6`}>{SECTIONS[scene].title}</h2>
                                <p className="text-[1.3vw] text-gold-primary tracking-widest leading-loose opacity-60 font-light italic">{SECTIONS[scene].narration}</p>
                            </div>
                            <div className="w-[60%] h-full relative overflow-hidden bg-[#0B1B4D] flex items-center justify-center">
                                 {scene === 2 ? (
                                     <div className="w-full h-full opacity-60"><WebGLBackground mousePos={{x:0,y:0}} /></div>
                                 ) : (
                                     <motion.img 
                                        src={SECTIONS[scene].img} 
                                        className="w-full h-full object-contain shadow-2xl filter brightness-90 px-12" 
                                        initial={{ scale: 1.05 }}
                                        animate={{ scale: 1 }} 
                                        transition={{ duration: SECTIONS[scene].duration / 1000, ease: "linear" }} 
                                      />
                                 )}
                            </div>
                        </motion.div>
                    )}

                    {scene === 6 && (
                        <motion.div key="s6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center">
                            <ThirdBrainMesh />
                            <h1 className={`${Playfair.className} text-[6vw] font-black text-gold-shimmer absolute top-20`}>DECISIONMINE™</h1>
                        </motion.div>
                    )}

                    {scene === 7 && (
                        <motion.div key="s7" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="absolute inset-0 flex flex-col items-center justify-center">
                             <div className="flex flex-col md:flex-row items-center gap-16">
                                <div className="w-[300px] h-[300px] relative">
                                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-[4px] border-[#C9A84C] clip-hexagon shadow-[0_0_40px_#C9A84C]" />
                                    <div className="absolute inset-[8px] bg-[#0B1B4D] clip-hexagon overflow-hidden">
                                        <img src="/images/founder/amish-shah.jpg" alt="Amish Shah" className="w-full h-full object-cover scale-110" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center md:items-start">
                                    <motion.svg viewBox="0 0 400 150" className="w-[450px] h-[180px] stroke-[#C9A84C] fill-none stroke-[2.5]">
                                        <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 5 }} d="M50,100 C80,20 110,40 240,70 C270,120 310,30 350,110 M100,85 L300,85" />
                                    </motion.svg>
                                    <p className={`${AlexBrush.className} text-[84px] text-gold-shimmer -mt-12`}>Amish Shah</p>
                                </div>
                             </div>
                             <a href="https://www.bhramaastra.com" className="mt-16 text-[32px] font-bold text-gold-shimmer border-b border-[#C9A84C] px-8 py-2">www.bhramaastra.com</a>
                        </motion.div>
                    )}

                    {scene === 8 && (
                        <motion.div key="s8" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex flex-col items-center justify-center z-[50]">
                            <ConfettiShower />
                            <h1 className={`${Playfair.className} text-[12vw] font-extrabold text-gold-shimmer`}>THANK YOU</h1>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx global>{`
                .gold-shimmer { background: linear-gradient(90deg, #462523, #f6f2c0 50%, #462523); -webkit-background-clip: text; background-clip: text; color: transparent; }
                .glow-text { text-shadow: 0 0 50px rgba(255,255,255,0.1); }
                .clip-hexagon { clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); }
                .label-gold { color: #C9A84C; font-size: 11px; border: 1px solid #C9A84C; padding: 4px 12px; border-radius: 4px; letter-spacing: 0.2em; text-transform: uppercase; }
            `}</style>
        </div>
    );
}

