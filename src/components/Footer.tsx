import Link from 'next/link';
import Image from 'next/image';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { MagneticLink } from '@/components/MagneticElements';

const YoutubeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#050D2A] relative">
      <div className="w-full h-px bg-gold-primary" />
      
      <div className="max-w-[1920px] mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="flex flex-col">
            <div className="relative h-[40px] w-full max-w-[120px] mb-4">
              <Image 
                src="/images/brand/bas-logo.png" 
                alt="BAS Logo" 
                fill 
                className="object-contain object-left" 
              />
            </div>
            <h3 className="font-playfair text-[20px] text-white">
              One Partner, Infinite Solutions.
            </h3>
            <div className="font-inter text-[13px] text-[#C9A84C] italic mt-1">
              AI-augmented advisory · Human judgment at the core
            </div>
            <p className="font-inter text-[14px] text-[#CBD5E1] mt-2 leading-[1.6]">
              Quietly redesigning ESG, GRC, SOPs & Transformation <br className="hidden lg:block"/>
              for purpose-driven institutions.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="mailto:connect@bhramaastraadvisory.com" className="text-gold-primary hover:text-white transition-colors"><Mail size={20} /></a>
              <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="text-gold-primary hover:text-white transition-colors"><MessageCircle size={20} /></a>
              <a href="https://youtube.com/@bhramaastra" target="_blank" rel="noopener noreferrer" className="text-gold-primary hover:text-white transition-colors"><YoutubeIcon /></a>
              <a href="https://linkedin.com/company/bhramaastra" target="_blank" rel="noopener noreferrer" className="text-gold-primary hover:text-white transition-colors"><LinkedinIcon /></a>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="label-gold mb-6">QUICK LINKS</span>
            <div className="flex flex-col gap-3">
              <Link href="/" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">Home</Link>
              <Link href="/about" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">About</Link>
              <Link href="/services" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">Services</Link>
              <Link href="/ecosystem" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">Ecosystem</Link>
              <Link href="/library" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">Free Library</Link>
              <Link href="/academy" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">Academy</Link>
              <Link href="/decisionmine" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">DecisionMine</Link>
              <Link href="/contact" className="font-inter text-[14px] text-[#CBD5E1] hover:text-gold-primary transition-colors">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col">
            <span className="label-gold mb-6">CONNECT</span>
            <div className="flex items-center gap-3 mb-3">
              <Mail size={16} className="text-gold-primary" />
              <span className="font-inter text-[14px] text-[#CBD5E1]">connect@bhramaastraadvisory.com</span>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Phone size={16} className="text-gold-primary" />
              <span className="font-inter text-[14px] text-[#CBD5E1]">+971 50 409 0727</span>
            </div>
            <div className="font-inter text-[14px] text-[#CBD5E1] mt-2">
              UAE · MENA · Global
            </div>
            <div className="mt-6">
              <MagneticLink href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-gold px-4 py-2 text-[14px]">
                Chat on WhatsApp →
              </MagneticLink>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-[rgba(201,168,76,0.15)] flex flex-col items-center gap-3">
          <div className="flex gap-4 font-inter text-[13px] text-[#94A3B8]">
            <Link href="/privacy" className="hover:text-[#C9A84C] transition-colors">Privacy Policy</Link>
            <span className="text-[rgba(201,168,76,0.3)]">|</span>
            <Link href="/terms" className="hover:text-[#C9A84C] transition-colors">Terms of Use</Link>
            <span className="text-[rgba(201,168,76,0.3)]">|</span>
            <Link href="/disclaimer" className="hover:text-[#C9A84C] transition-colors">Disclaimer</Link>
          </div>
          <p className="font-inter text-[13px] text-[#64748B] text-center">
            © 2026 Bhramaastra Advisory Services · All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
