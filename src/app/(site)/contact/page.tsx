'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    organisation: '',
    email: '',
    topic: '',
    source: ''
  });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/xbdqonrw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Contact Form Submission — ${formData.name}${formData.organisation ? ` from ${formData.organisation}` : ''}`,
          source: 'BASDIGI2030 Contact Form'
        })
      });
      
      if (response.ok) {
        setFormState('success');
      } else {
        setFormState('error');
      }
    } catch (err) {
      console.error(err);
      setFormState('error');
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative min-h-[50vh] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540] pt-24 pb-12 text-center px-6">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] gold-orb z-[0] md:opacity-40 pointer-events-none"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative z-10 max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="label-gold mb-6 inline-block tracking-[0.2em]">CONTACT</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-[44px] md:text-[64px] font-playfair font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Let&apos;s begin.
          </motion.h1>

          <motion.p variants={fadeUp} className="font-inter text-[18px] text-[#CBD5E1] max-w-2xl mx-auto leading-[1.8]">
            Every engagement starts with a conversation. Tell us what you are navigating — we will tell you honestly if and how we can help.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= SECTION 2: FORM & DIRECT CONTACT ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] border-t border-[rgba(201,168,76,0.15)] relative z-10 flex justify-center">
        <div className="max-w-[1100px] w-full grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12">
          
          {/* LEFT COLUMN — Contact Form */}
          <div className="glass-card p-8 md:p-12 rounded-2xl relative shadow-[0_20px_60px_rgba(0,0,0,0.3)] bg-gradient-to-br from-[#11204C] to-[#0B1B4D]">
            {formState !== 'success' ? (
              <form onSubmit={handleContactSubmit} className="flex flex-col gap-5">
                <input 
                  type="text" 
                  required 
                  placeholder="Your full name" 
                  className="input-glass w-full"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <input 
                  type="text" 
                  placeholder="Where do you work?" 
                  className="input-glass w-full"
                  value={formData.organisation}
                  onChange={(e) => setFormData({...formData, organisation: e.target.value})}
                />
                <input 
                  type="email" 
                  required 
                  placeholder="your@email.com" 
                  className="input-glass w-full"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                
                <textarea 
                  required
                  rows={5} 
                  placeholder="Describe your challenge, goal, or question. Be as specific as you can." 
                  className="input-glass w-full resize-none"
                  value={formData.topic}
                  onChange={(e) => setFormData({...formData, topic: e.target.value})}
                />

                <select 
                  className="input-glass w-full appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23CBD5E1%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_1rem_center] bg-no-repeat text-[#CBD5E1]"
                  value={formData.source}
                  onChange={(e) => setFormData({...formData, source: e.target.value})}
                >
                  <option value="" disabled className="text-gray-500">How did you hear about BAS?</option>
                  <option value="Referral from someone" className="bg-[#0B1B4D] text-white">Referral from someone</option>
                  <option value="LinkedIn or social media" className="bg-[#0B1B4D] text-white">LinkedIn or social media</option>
                  <option value="Search engine" className="bg-[#0B1B4D] text-white">Search engine</option>
                  <option value="Existing client referral" className="bg-[#0B1B4D] text-white">Existing client referral</option>
                  <option value="Other" className="bg-[#0B1B4D] text-white">Other</option>
                </select>

                {formState === 'error' && (
                  <div className="font-inter text-[13px] text-red-400 mt-2 text-center border border-red-500/20 bg-red-500/10 p-3 rounded">
                    Something went wrong. Please try again or WhatsApp us directly at +971 50 409 0727.
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={formState === 'loading'}
                  className="btn-gold !font-bold w-full mt-4 flex justify-center items-center h-[56px] text-[16px]"
                >
                  {formState === 'loading' ? 'Sending...' : 'Begin the Conversation →'}
                </button>

                <p className="font-inter text-[11px] text-[#64748B] mt-4 leading-[1.6]">
                  Your information is handled in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection. We do not share, sell, or distribute your data. Submitted information is used solely to respond to your enquiry.
                </p>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
                <h2 className="font-playfair text-[32px] text-[#C9A84C] mb-4 font-bold">◈ Message received.</h2>
                <p className="font-inter text-[16px] text-[#E2E8F0] mb-10 leading-[1.7]">
                  Thank you. We will be in touch within one business day.
                </p>
                <button 
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setFormState('idle');
                    setFormData({ name: '', organisation: '', email: '', topic: '', source: '' });
                  }}
                  className="btn-glass"
                >
                  Return Home →
                </button>
              </motion.div>
            )}
          </div>

          {/* RIGHT COLUMN — Direct Contact Information */}
          <div className="flex flex-col h-full lg:pt-8">
            <h2 className="font-playfair text-[28px] md:text-[36px] text-white mb-8 font-bold">Or reach us directly</h2>
            
            <div className="glass-card p-8 rounded-2xl bg-[#11204C] border-[rgba(201,168,76,0.3)] shadow-none flex flex-col gap-8 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.1)] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.3)]">
                  <MessageCircle size={20} color="#C9A84C" />
                </div>
                <div>
                  <span className="block font-inter text-[12px] text-[#94A3B8] uppercase tracking-[0.1em] mb-1 font-semibold">WhatsApp</span>
                  <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="font-inter text-[16px] text-white hover:text-[#C9A84C] transition-colors">
                    Message Amish on WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.1)] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.3)]">
                  <Mail size={20} color="#C9A84C" />
                </div>
                <div>
                  <span className="block font-inter text-[12px] text-[#94A3B8] uppercase tracking-[0.1em] mb-1 font-semibold">Email</span>
                  <a href="mailto:connect@bhramaastraadvisory.com" className="font-inter text-[16px] text-white hover:text-[#C9A84C] transition-colors break-all">
                    connect@bhramaastraadvisory.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.1)] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.3)]">
                  <Phone size={20} color="#C9A84C" />
                </div>
                <div>
                  <span className="block font-inter text-[12px] text-[#94A3B8] uppercase tracking-[0.1em] mb-1 font-semibold">Phone</span>
                  <a href="tel:+971504090727" className="font-inter text-[16px] text-white hover:text-[#C9A84C] transition-colors">
                    +971 50 409 0727
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.1)] flex items-center justify-center shrink-0 border border-[rgba(201,168,76,0.3)]">
                  <MapPin size={20} color="#C9A84C" />
                </div>
                <div>
                  <span className="block font-inter text-[12px] text-[#94A3B8] uppercase tracking-[0.1em] mb-1 font-semibold">Location</span>
                  <span className="font-inter text-[16px] text-white">
                    Dubai, UAE · Serving 12+ countries
                  </span>
                </div>
              </div>
            </div>

            <p className="font-inter text-[13px] text-[#94A3B8] italic leading-[1.6]">
              We typically respond within one business day. For urgent matters, WhatsApp is fastest.
            </p>
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: BOTTOM NOTE ================= */}
      <section className="marble-section !h-auto py-24 px-6 text-[#0B1B4D]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h2 className="font-playfair text-[32px] md:text-[40px] mb-6 font-bold">How we work with enquiries</h2>
          <p className="font-inter text-[18px] text-[#374151] max-w-2xl leading-[1.8]">
            BAS does not cold-call, spam, or follow up without permission. If you submit this form, we will respond once. The next move is always yours.
          </p>
        </div>
      </section>

    </main>
  );
}
