'use client';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/971504090727"
      target="_blank"
      rel="noopener noreferrer"
      animate={{ y: [0, -5, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className="fixed bottom-[16px] right-1/2 translate-x-1/2 md:translate-x-0 md:bottom-[24px] md:right-[24px] z-[50]"
      aria-label="Chat with BAS on WhatsApp"
    >
      <div className="glass-card px-4 py-3 flex items-center justify-center gap-3 rounded-full md:rounded-lg">
        <MessageCircle size={22} color="#25D366" />
        <span className="hidden md:inline font-inter text-[13px] text-soft-white font-medium">
          Chat with BAS
        </span>
      </div>
    </motion.a>
  );
}
