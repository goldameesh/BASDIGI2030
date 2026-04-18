'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState("");
  const fullText = "One Partner, Infinite Solutions.";

  useEffect(() => {
    // We use session storage to prevent the loading screen from appearing on EVERY refresh/navigation during a session.
    // We use local storage to persist the "first ever visit" state.
    const isVisited = localStorage.getItem('bas-v1-visited') || sessionStorage.getItem('bas-v1-session-visited');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isVisited || prefersReducedMotion) {
      if (prefersReducedMotion && !isVisited) {
         localStorage.setItem('bas-v1-visited', '1');
      }
      return;
    }
    
    setIsVisible(true);

    let typeIndex = 0;
    let typeInterval: NodeJS.Timeout;

    const startTypewriter = setTimeout(() => {
      typeInterval = setInterval(() => {
        setTypewriterText(fullText.slice(0, typeIndex + 1));
        typeIndex++;
        if (typeIndex >= fullText.length) clearInterval(typeInterval);
      }, 40);
    }, 800);

    // Sequence timing: 800ms start + 1280ms typing + 100ms pause = 2180ms
    const finishSequence = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem('bas-v1-visited', '1');
      sessionStorage.setItem('bas-v1-session-visited', '1');
    }, 2400);

    // EMERGENCY FALLBACK: Force hide even if animations fail for any reason
    const emergencyHide = setTimeout(() => {
      setIsVisible(false);
    }, 3500);

    return () => {
      clearTimeout(startTypewriter);
      clearTimeout(finishSequence);
      clearTimeout(emergencyHide);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-royal-blue-deeper z-[9999] flex flex-col items-center justify-center p-6"
        >
          <div className="relative w-[200px] h-[80px]">
            <svg viewBox="0 0 200 80" className="w-full h-full">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                className="font-playfair font-bold text-5xl"
                fill="none"
                stroke="#C9A84C"
                strokeWidth="1.5"
                strokeDasharray="1000"
                strokeDashoffset="1000"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="1000"
                  to="0"
                  dur="2s"
                  fill="freeze"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1"
                  keyTimes="0;1"
                />
                <animate
                  attributeName="fill"
                  values="transparent;#C9A84C"
                  begin="2s"
                  dur="0.5s"
                  fill="freeze"
                />
                B◈S
              </text>
            </svg>
          </div>
          
          <div className="h-[24px] mt-6">
            <p className="font-inter text-[18px] text-soft-white">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
