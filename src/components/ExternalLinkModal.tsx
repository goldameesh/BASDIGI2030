'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { LibraryResource } from '@/data/library';

type ExternalLinkModalProps = {
  resource: LibraryResource | null;
  onClose: () => void;
};

export default function ExternalLinkModal({ resource, onClose }: ExternalLinkModalProps) {
  if (!resource) return null;

  const handleOpen = () => {
    window.open(resource.url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const domain = (() => {
    try {
      return new URL(resource.url).hostname;
    } catch {
      return resource.url;
    }
  })();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(9,21,64,0.92)] backdrop-blur-xl p-4"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="glass-card max-w-md w-full p-10 text-center"
        >
          <div className="font-playfair text-[32px] text-[#C9A84C] mb-4">◈</div>
          <h2 className="font-playfair text-[24px] text-white mb-3">You&apos;re stepping into the BAS Knowledge Ecosystem</h2>
          
          <p className="font-inter text-[15px] text-[#E2E8F0] leading-[1.8] mb-8">
            This resource opens in a new tab. It is part of the broader Bhramaastra knowledge universe — created by BAS, for you. To return to this hub, simply come back to this tab or revisit us directly.
          </p>

          <div className="glass-card p-4 mb-8 text-left bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)]">
            <h3 className="font-playfair text-[18px] text-white font-semibold">{resource.title}</h3>
            <div className="label-gold mt-1 !normal-case tracking-normal border-none bg-transparent p-0">{resource.subtitle}</div>
            <div className="font-inter text-[12px] text-[#64748B] mt-2 tracking-wide font-medium">{domain}</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={handleOpen} className="btn-gold !w-full sm:!w-auto justify-center">Open Resource →</button>
            <button onClick={onClose} className="btn-glass !w-full sm:!w-auto justify-center">Stay here</button>
          </div>

          <p className="font-inter text-[11px] text-[#64748B] mt-6 leading-relaxed">
            Opens in a new tab.
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
