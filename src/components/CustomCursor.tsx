'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isTouch, setIsTouch] = useState(true);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const springConfig = { stiffness: 150, damping: 15 };
  const smoothX = useSpring(-100, springConfig);
  const smoothY = useSpring(-100, springConfig);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const moveHandler = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      smoothX.set(e.clientX - 20); 
      smoothY.set(e.clientY - 20);
    };

    const downHandler = () => setIsClicking(true);
    const upHandler = () => setIsClicking(false);

    const overHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('mousedown', downHandler);
    window.addEventListener('mouseup', upHandler);
    window.addEventListener('mouseover', overHandler);

    return () => {
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('mousedown', downHandler);
      window.removeEventListener('mouseup', upHandler);
      window.removeEventListener('mouseover', overHandler);
    };
  }, [smoothX, smoothY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
        }}
        animate={{
          scale: isClicking ? [1, 0.75, 1.2, 1] : isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(201,168,76,0.1)' : 'transparent',
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 w-[40px] h-[40px] border-[1.5px] border-[#C9A84C] rounded-full opacity-60 pointer-events-none z-[9999]"
      />
      <div
        style={{
          transform: `translate3d(${mousePos.x - 3}px, ${mousePos.y - 3}px, 0)`,
        }}
        className="fixed top-0 left-0 w-[6px] h-[6px] bg-[#C9A84C] rounded-full pointer-events-none z-[9999] transition-none"
      />
    </>
  );
}
