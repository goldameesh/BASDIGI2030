'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { MagneticLink } from '@/components/MagneticElements';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Ecosystem', href: '/ecosystem' },
    { name: 'Free Library', href: '/library' },
    { name: 'Academy', href: '/academy' },
    { name: 'Playground', href: '/playground' },
    { name: 'DecisionMine', href: '/decisionmine' },
    { name: 'Contact', href: '/contact' }
  ];

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleActivity = () => {
      setShowTooltip(false);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowTooltip(true);
      }, 30000);
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('click', handleActivity);
    window.addEventListener('scroll', handleActivity);
    window.addEventListener('keydown', handleActivity);
    
    handleActivity();

    return () => {
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('click', handleActivity);
      window.removeEventListener('scroll', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-[80] w-full bg-[rgba(11,27,77,0.88)] backdrop-blur-[20px] border-b border-[rgba(201,168,76,0.2)]">
        <div className="max-w-[1920px] mx-auto px-6 h-[80px] flex items-center justify-between">
          
          <Link href="/">
            <div className="relative h-[52px] w-[160px]">
              <Image 
                src="/images/brand/bas-logo.png" 
                alt="BAS Logo" 
                fill 
                className="object-contain object-left" 
                priority
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((target) => {
              const active = pathname === target.href;
              return (
                <Link 
                  key={target.name} 
                  href={target.href}
                  className={`font-inter text-[14px] transition-colors duration-200 py-2 ${
                    active 
                      ? "text-gold-primary border-b-2 border-gold-primary" 
                      : "text-soft-white hover:text-gold-primary"
                  }`}
                >
                  {target.name}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:block relative">
            <MagneticLink href="/contact" className="btn-gold">
              Begin a Conversation
            </MagneticLink>
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 5 }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-[120%] right-0 glass-card px-4 py-3 min-w-[max-content]"
                >
                  <span className="font-inter text-[13px] text-[#E2E8F0] block whitespace-nowrap">
                    Still exploring? Most visitors find what they need here →
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[90] bg-[rgba(9,21,64,0.97)] backdrop-blur-[20px] flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-6 text-white"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>

            {links.map((target) => (
              <Link 
                key={target.name} 
                href={target.href}
                onClick={() => setMobileOpen(false)}
                className="font-inter text-[28px] font-bold text-white hover:text-gold-primary transition-colors"
              >
                {target.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
