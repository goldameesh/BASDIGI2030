'use client';
import { useState, useEffect } from 'react';
import { useGoldContext } from '@/context/GoldContext';

const SYMBOLS = ['◈','◇','◆','✦','∞','▲','▸'];

type ScrambleTextProps = {
  text: string;
  delayMs: number;
  goldDuring: boolean;
  className?: string;
};

export default function ScrambleText({ text, delayMs, goldDuring, className = '' }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isScrambling, setIsScrambling] = useState(false);
  const { isGoldActive } = useGoldContext();

  useEffect(() => {
    const charIntervals: NodeJS.Timeout[] = [];
    const timeout = setTimeout(() => {
      setIsScrambling(true);
      setDisplayText(SYMBOLS[0].repeat(text.length));
      
      const targetChars = text.split('');
      const currentChars = new Array(text.length).fill('');
      
      targetChars.forEach((targetChar, index) => {
        const settleDelay = index * 40;
        
        // ensure we count iterations correctly
        let counter = 0;
        const targetCycles = 20 + Math.floor(settleDelay / 30);
        
        const interval = setInterval(() => {
          if (counter < targetCycles) {
            currentChars[index] = targetChar === ' ' ? ' ' : SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
            setDisplayText(currentChars.join(''));
            counter++;
          } else {
            currentChars[index] = targetChar;
            setDisplayText(currentChars.join(''));
            clearInterval(interval);
            if (index === text.length - 1) {
              setIsScrambling(false);
            }
          }
        }, 30);
        
        charIntervals.push(interval);
      });
      
    }, delayMs);
    
    return () => {
      clearTimeout(timeout);
      charIntervals.forEach(clearInterval);
    };
  }, [text, delayMs]);

  const isGoldNow = isGoldActive || (isScrambling && goldDuring);

  return (
    <span 
      className={`${className} transition-colors duration-300 ${isGoldNow ? 'text-[#C9A84C]' : ''}`}
    >
      {displayText}
    </span>
  );
}
