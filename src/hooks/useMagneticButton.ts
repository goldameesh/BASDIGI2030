'use client';
import { useRef, useEffect } from 'react';

export function useMagneticButton<T extends HTMLElement>(range = 80) {
  const ref = useRef<T>(null);

  useEffect(() => {
    // Desktop only touch guard
    if (window.matchMedia('(max-width: 768px)').matches) return;
    
    const element = ref.current;
    if (!element) return;

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const elementCenterX = rect.left + rect.width / 2;
      const elementCenterY = rect.top + rect.height / 2;

      const deltaX = e.clientX - elementCenterX;
      const deltaY = e.clientY - elementCenterY;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

      if (distance < range) {
        // max bounds
        targetX = Math.max(-8, Math.min(8, deltaX * 0.2));
        targetY = Math.max(-6, Math.min(6, deltaY * 0.2));
      } else {
        targetX = 0;
        targetY = 0;
      }
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    const render = () => {
      // Spring physics dampening (Stiffness 300 / Dampening 25 approximation in custom loop)
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;

      if (Math.abs(currentX) > 0.01 || Math.abs(currentY) > 0.01 || Math.abs(targetX) > 0) {
        element.style.transform = `translate(${currentX}px, ${currentY}px)`;
      } else {
        element.style.transform = '';
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [range]);

  return ref;
}
