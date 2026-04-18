'use client';
import { useEffect, useState, useRef } from 'react';
import { useInView, useMotionValue, animate } from 'framer-motion';

export function useCounterAnimation(endValue: number, duration: number = 2000) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    if (inView) {
      const controls = animate(motionValue, endValue, {
        duration: duration / 1000,
        ease: "easeOut",
        onUpdate: (latest) => {
          setDisplayValue(Math.round(latest).toString());
        }
      });
      return controls.stop;
    }
  }, [inView, endValue, duration, motionValue]);

  return { ref, displayValue };
}
