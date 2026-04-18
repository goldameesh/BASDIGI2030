'use client';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[100] pointer-events-none">
      <motion.div
        className="h-full bg-gold-primary origin-left"
        style={{ scaleX }}
      />
    </div>
  );
}
