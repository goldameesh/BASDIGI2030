'use client';
import React, { useEffect, useState } from 'react';

type WarmShimmerTextProps = {
  text: string;
  delay: number;
  className?: string;
  baseColor?: string;
};

/**
 * BHRAMAASTRA ELITE BRANDING: Guaranteed Visibility Component
 * Uses CSS keyframes to ensure text reveals even if Framer Motion is blocked.
 */
export default function WarmShimmerText({ 
  text, 
  delay, 
  className = "",
  baseColor = "text-white"
}: WarmShimmerTextProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <span
      className={`relative inline-block ${className} ${baseColor}`}
      style={{
        opacity: isMounted ? 1 : 0,
        transform: isMounted ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.8s ease-out ${delay}s, transform 0.8s ease-out ${delay}s`,
      }}
    >
      <span className="relative z-10">{text}</span>
      
      {/* Shimmer Overlay: Subtle gold sweep */}
      <span
        className="absolute inset-0 z-20 pointer-events-none opacity-0 animate-[shimmer-sweep_2s_ease-in-out_forwards]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.3) 50%, transparent 100%)',
          animationDelay: `${delay + 0.4}s`,
        }}
      />
    </span>
  );
}
