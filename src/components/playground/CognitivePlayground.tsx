'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, ArrowRight, RefreshCw, ChevronLeft, Info } from 'lucide-react';
import { MASTER_DECK, INSIGHT_FRAGMENTS, DiagnosticQuestion } from '@/data/playground';
import DiagnosticRadar from './DiagnosticRadar';
import PrivacyShield from './PrivacyShield';

type Step = 'intro' | 'mode-select' | 'diagnostic' | 'verdict';

export default function CognitivePlayground() {
  const [step, setStep] = useState<Step>('intro');
  const [isDeepMode, setIsDeepMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [activeDeck, setActiveDeck] = useState<DiagnosticQuestion[]>([]);

  // 1. Initial Shuffle Logic (Dynamic Brain)
  useEffect(() => {
    if (step === 'diagnostic') {
      const shuffled = [...MASTER_DECK].sort(() => Math.random() - 0.5);
      const count = isDeepMode ? 15 : 5;
      setActiveDeck(shuffled.slice(0, count));
    }
  }, [step, isDeepMode]);

  const currentQuestion = activeDeck[currentQuestionIndex];
  const progress = (currentQuestionIndex / activeDeck.length) * 100;

  // 2. Calculation Logic
  const results = useMemo(() => {
    const scores = {
      Discover: 0, Define: 0, Design: 0, Develop: 0, Deploy: 0
    };
    const counts = { ...scores };

    activeDeck.forEach(q => {
      const val = answers[q.id] || 0.5;
      scores[q.dimension] += val;
      counts[q.dimension] += 1;
    });

    return Object.keys(scores).map(dim => ({
      dimension: dim,
      score: counts[dim as keyof typeof scores] > 0 
        ? scores[dim as keyof typeof scores] / counts[dim as keyof typeof scores] 
        : 0.5
    }));
  }, [activeDeck, answers]);

  // 3. Verdict Synthesis (Non-Repetitive Logic)
  const synthesis = useMemo(() => {
    const verdictPool = INSIGHT_FRAGMENTS.filter(f => f.type === 'Verdict');
    const advisoryPool = INSIGHT_FRAGMENTS.filter(f => f.type === 'Advisory');
    const movePool = INSIGHT_FRAGMENTS.filter(f => f.type === 'NextMove');

    return {
      verdict: verdictPool[Math.floor(Math.random() * verdictPool.length)].text,
      advisory: advisoryPool[Math.floor(Math.random() * advisoryPool.length)].text,
      move: movePool[Math.floor(Math.random() * movePool.length)].text
    };
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 relative min-h-[600px] flex flex-col justify-center">
      
      <AnimatePresence mode="wait">
        
        {/* STEP: INTRO */}
        {step === 'intro' && (
          <motion.div 
            key="intro"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            className="text-center"
          >
            <span className="label-gold mb-6 inline-block">THE INSIGHT FORGE</span>
            <h1 className="font-playfair text-[40px] md:text-[64px] text-white leading-tight mb-8">
              Stress-test your <span className="text-[#C9A84C]">convictions.</span>
            </h1>
            <p className="font-inter text-[18px] text-[#CBD5E1] max-w-2xl mx-auto mb-12 leading-[1.8]">
              Welcome to a zero-risk professional laboratory. This tool is designed to isolate blind spots in your strategic thinking through an adaptive, non-repetitive diagnostic engine.
            </p>
            
            <div className="flex justify-center gap-4 flex-wrap">
              <button 
                onClick={() => setStep('mode-select')} 
                className="btn-gold !px-12 !py-5 !text-[18px] !font-bold"
              >
                Enter the Forge →
              </button>
            </div>
            <PrivacyShield />
          </motion.div>
        )}

        {/* STEP: MODE SELECT */}
        {step === 'mode-select' && (
          <motion.div 
            key="modes"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col items-center"
          >
            <h2 className="font-playfair text-[32px] md:text-[44px] text-white mb-12 text-center">Select Diagnostic Intensity</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
              <button 
                onClick={() => { setIsDeepMode(false); setStep('diagnostic'); }}
                className="glass-card p-10 rounded-2xl border border-[rgba(201,168,76,0.2)] hover:border-[#C9A84C] transition-all text-left flex flex-col group"
              >
                <div className="w-14 h-14 rounded-xl bg-[rgba(201,168,76,0.1)] flex items-center justify-center mb-6 border border-[rgba(201,168,76,0.3)] group-hover:bg-[#C9A84C] transition-colors">
                  <Zap className="text-[#C9A84C] group-hover:text-[#0B1B4D] transition-colors" size={28} />
                </div>
                <h3 className="font-playfair text-[24px] text-white font-bold mb-3">Fast Pulse</h3>
                <p className="font-inter text-[15px] text-[#94A3B8] leading-[1.6]">
                  5 critical interventions. Designed for a high-speed strategic sanity check. (~2 mins)
                </p>
              </button>

              <button 
                onClick={() => { setIsDeepMode(true); setStep('diagnostic'); }}
                className="glass-card p-10 rounded-2xl border border-[rgba(201,168,76,0.2)] hover:border-[#C9A84C] transition-all text-left flex flex-col group"
              >
                <div className="w-14 h-14 rounded-xl bg-[rgba(201,168,76,0.1)] flex items-center justify-center mb-6 border border-[rgba(201,168,76,0.3)] group-hover:bg-[#C9A84C] transition-colors">
                  <Brain className="text-[#C9A84C] group-hover:text-[#0B1B4D] transition-colors" size={28} />
                </div>
                <h3 className="font-playfair text-[24px] text-white font-bold mb-3">Deep Diagnostic</h3>
                <p className="font-inter text-[15px] text-[#94A3B8] leading-[1.6]">
                  15-point professional interrogation. A rigorous calibration across all 5 dimensions. (~8 mins)
                </p>
              </button>
            </div>
            
            <button onClick={() => setStep('intro')} className="mt-12 text-[#94A3B8] font-inter text-[14px] flex items-center gap-2 hover:text-white transition-colors">
              <ChevronLeft size={16} /> Back to Start
            </button>
          </motion.div>
        )}

        {/* STEP: DIAGNOSTIC */}
        {step === 'diagnostic' && currentQuestion && (
          <motion.div 
            key="diag"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto w-full"
          >
            {/* Header / Progress */}
            <div className="flex justify-between items-center mb-8">
              <span className="label-gold !text-[12px]">STAGE: {currentQuestion.dimension}</span>
              <span className="font-inter text-[12px] text-[#94A3B8] uppercase">Question {currentQuestionIndex + 1} of {activeDeck.length}</span>
            </div>
            <div className="w-full h-[2px] bg-[rgba(255,255,255,0.05)] mb-16 overflow-hidden rounded-full">
              <motion.div 
                animate={{ width: `${progress}%` }}
                className="h-full bg-[#C9A84C] shadow-[0_0_10px_#C9A84C]"
              />
            </div>

            {/* Question */}
            <motion.div 
              key={currentQuestion.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-16"
            >
              <h3 className="font-playfair text-[28px] md:text-[36px] text-white font-bold leading-tight mb-12">
                {currentQuestion.text}
              </h3>

              <div className="relative pt-10 pb-8">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-playfair text-[18px] text-[#C9A84C] font-bold tracking-tight italic">
                    Strategic Maturity Index: {Math.round((answers[currentQuestion.id] || 0.5) * 100)}%
                  </span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <div 
                        key={star} 
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          (answers[currentQuestion.id] || 0.5) * 5 >= star 
                            ? "bg-[#C9A84C] shadow-[0_0_8px_#C9A84C]" 
                            : "bg-[rgba(255,255,255,0.1)]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <input 
                  type="range" min="0" max="1" step="0.1" 
                  value={answers[currentQuestion.id] || 0.5}
                  onChange={(e) => setAnswers({...answers, [currentQuestion.id]: parseFloat(e.target.value)})}
                  className="w-full h-1 bg-[#091540] rounded-lg appearance-none cursor-pointer accent-[#C9A84C]"
                />
                <div className="flex justify-between mt-6 text-[#94A3B8] font-inter text-[12px] uppercase tracking-widest font-bold">
                  <span>{currentQuestion.lowLabel}</span>
                  <span>{currentQuestion.highLabel}</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Buttons */}
            <div className="flex justify-between items-center border-t border-[rgba(255,255,255,0.05)] pt-8">
              <button 
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="text-[#94A3B8] disabled:opacity-0 transition-opacity flex items-center gap-2"
              >
                <ChevronLeft size={18} /> Previous
              </button>
              
              <button 
                onClick={() => {
                  if (currentQuestionIndex < activeDeck.length - 1) {
                    setCurrentQuestionIndex(prev => prev + 1);
                  } else {
                    setStep('verdict');
                  }
                }}
                className="btn-gold !px-8"
              >
                {currentQuestionIndex < activeDeck.length - 1 ? 'Next Step →' : 'Generate Verdict →'}
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP: VERDICT */}
        {step === 'verdict' && (
          <motion.div 
            key="verdict"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
              
              {/* Radar Column */}
              <div className="flex flex-col items-center glass-card p-10 rounded-2xl border border-[rgba(201,168,76,0.15)] order-2 lg:order-1">
                <h3 className="label-gold mb-10">Strategic Readiness Radar</h3>
                <DiagnosticRadar data={results} />
                <p className="mt-10 font-inter text-[12px] text-[#94A3B8] text-center max-w-[300px]">
                  Visualizing your project&apos;s strength across the 5 dimensions of the BAS Framework.
                </p>
              </div>

              {/* Insights Column */}
              <div className="flex flex-col items-start order-1 lg:order-2">
                <span className="label-gold mb-6">THE FORGE VERDICT</span>
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="font-playfair text-[32px] md:text-[44px] text-white font-bold leading-tight mb-8"
                >
                  {synthesis.verdict}
                </motion.h2>

                <div className="space-y-6 mb-12">
                  <div className="flex gap-4 items-start p-6 bg-[rgba(201,168,76,0.05)] border-l-2 border-[#C9A84C] rounded-r-xl">
                    <Info className="text-[#C9A84C] shrink-0" size={20} />
                    <p className="font-inter text-[15px] text-[#E2E8F0] leading-[1.6]">
                      <strong className="text-white block mb-1">Advisory Directive:</strong>
                      {synthesis.advisory}
                    </p>
                  </div>
                  <div className="flex gap-4 items-start p-6 bg-[rgba(255,255,255,0.02)] border-l-2 border-[#94A3B8] rounded-r-xl">
                    <ArrowRight className="text-[#94A3B8] shrink-0" size={20} />
                    <p className="font-inter text-[15px] text-[#E2E8F0] leading-[1.6]">
                      <strong className="text-white block mb-1">Immediate Next Move:</strong>
                      {synthesis.move}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 w-full flex-wrap">
                  <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-gold flex-1 text-center">
                    Discuss Verdict →
                  </a>
                  <button onClick={() => window.location.reload()} className="btn-glass flex-1 flex items-center justify-center gap-2">
                    <RefreshCw size={16} /> Re-Forge Session
                  </button>
                </div>
              </div>

            </div>

            <div className="mt-16 w-full max-w-2xl text-center border-t border-[rgba(255,255,255,0.05)] pt-12">
              <p className="font-inter text-[13px] text-[#64748B] italic mb-4">
                &ldquo;Calculations performed locally in-browser. No data retained.&rdquo;
              </p>
              <div className="flex justify-center items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="font-inter text-[11px] text-[#94A3B8] uppercase tracking-widest font-bold">Privacy Shield Active</span>
              </div>
            </div>

          </motion.div>
        )}

      </AnimatePresence>

    </div>
  );
}
