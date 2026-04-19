'use client';
export const dynamic = 'force-dynamic';
// BAS Academy: Elite AI Leadership learning path

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, Brain, Languages } from 'lucide-react';

export default function AcademyPage() {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: '',
    details: ''
  });

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    try {
      const response = await fetch('https://formspree.io/f/xrerkgvj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `BAS Academy Waitlist — ${formData.name} · ${formData.topic}`,
          source: 'BAS Academy Waitlist · /academy'
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

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540] pt-24 text-center px-6">
        <motion.div 
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[20%] w-[500px] h-[500px] gold-orb z-[0] md:opacity-40 pointer-events-none"
        />

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp}>
            <span className="label-gold mb-6 inline-block">BAS ACADEMY</span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-[36px] md:text-[64px] font-bold text-white leading-[1.1] mb-2 tracking-tight">
            Building AI-Native Teams.
          </motion.h1>
          <motion.h2 variants={fadeUp} className="font-playfair text-[28px] md:text-[40px] text-[#C9A84C] mb-8 italic">
            One skill at a time.
          </motion.h2>

          <motion.p variants={fadeUp} className="font-inter text-[18px] text-[#CBD5E1] max-w-2xl mx-auto mb-10 leading-[1.7]">
            Practical, founder-led learning. Built for professionals navigating the AI-first world of work — without the theory overload.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex justify-center gap-4 flex-wrap">
            <button 
              onClick={() => document.getElementById('programmes')?.scrollIntoView({ behavior: 'smooth' })} 
              className="btn-gold !font-bold"
            >
              Explore Programmes →
            </button>
            <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-glass">
              Talk to Amish →
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= SECTION 2: PHILOSOPHY ================= */}
      <section className="marble-section !h-auto py-24 px-6 border-y border-[rgba(0,0,0,0.1)] text-[#0B1B4D]">
        <div className="max-w-6xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-playfair text-[32px] md:text-[44px] mb-6 font-bold leading-tight max-w-2xl">
            We don&apos;t train. We transform.
          </h2>
          <p className="font-inter text-[17px] text-[#374151] mb-16 leading-[1.8] max-w-3xl">
            Most corporate training teaches tools. BAS Academy teaches thinking. Every programme is built around how AI actually changes the way decisions get made — not how software vendors want you to use their products.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 text-left h-full">
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-4 leading-tight">AI-First Thinking</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">
                Before tools, we rewire how your team frames problems, gathers context, and makes decisions.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} transition={{ delay: 0.1 }} className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 text-left h-full">
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-4 leading-tight">Real-World Application</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">
                Every lesson is drawn from live client work — not case studies. What we teach, we have already done.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} transition={{ delay: 0.2 }} className="bg-[#0B1B4D] border-[1.5px] border-[rgba(201,168,76,0.4)] rounded-2xl p-8 text-left h-full">
              <h3 className="font-playfair text-[20px] text-white font-semibold mb-4 leading-tight">Arabic + English</h3>
              <p className="font-inter text-[14px] text-[#CBD5E1] leading-[1.7]">
                All content delivered in both languages. No professional left behind because of language access.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: PROGRAMMES ================= */}
      <section id="programmes" className="py-24 px-6 bg-[#0B1B4D] relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-[32px] md:text-[44px] text-white font-bold mb-4">What We&apos;re Teaching Right Now</h2>
            <p className="font-inter text-[17px] text-[#CBD5E1]">
              One programme is live. More are forming. Join the ones that matter to you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Programme 0 - AI Basics - LIVE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="glass-card p-8 rounded-2xl border-[1.5px] border-[#C9A84C] relative flex flex-col">
              <div className="mb-6 flex justify-start">
                <span className="bg-[#C9A84C] text-[#0B1B4D] font-inter text-[12px] uppercase tracking-[0.1em] px-3 py-1 font-bold rounded-full">
                  FOUNDATION · OPEN NOW
                </span>
              </div>
              <h3 className="font-playfair text-[24px] text-white font-semibold mb-3">AI Basics for Professionals</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] mb-6 flex-1">
                The definitive entry point for visionary partners. A fast-paced, jargon-free interactive trajectory designed for executives who demand absolute clarity on the &apos;Why&apos; and &apos;How&apos; of cognitive transformation.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {['Interactive', 'Bilingual', 'Foundation', 'Free'].map((tag) => (
                  <span key={tag} className="font-inter text-[12px] text-[#94A3B8] bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a href="https://ai-basics.bhramaastra.com" target="_blank" rel="noopener noreferrer" className="btn-gold !font-bold w-full text-center inline-block">
                  Access Foundation →
                </a>
                <p className="font-inter text-[12px] text-[#64748B] text-center mt-3">
                  Opens the Interactive Foundation in a new tab.
                </p>
              </div>
            </motion.div>

            {/* Programme 1 - LIVE */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="glass-card p-8 rounded-2xl border-[1.5px] border-[#C9A84C] relative flex flex-col">
              <div className="mb-6 flex justify-start">
                <span className="bg-[#C9A84C] text-[#0B1B4D] font-inter text-[12px] uppercase tracking-[0.1em] px-3 py-1 font-bold rounded-full">
                  FLAGSHIP · OPEN NOW
                </span>
              </div>
              <h3 className="font-playfair text-[24px] text-white font-semibold mb-3">M365 Copilot Mastery</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] mb-6 flex-1">
                5 modules. 39 lesson cards. 21 quizzes. Built using Harvard chunked learning, Stanford design thinking, and Feynman simplification. From Work IQ to Multi-Agent Mastery.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {['AI', 'Microsoft 365', 'Copilot', 'Productivity', 'L&D'].map((tag) => (
                  <span key={tag} className="font-inter text-[12px] text-[#94A3B8] bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <a href="https://learn-m365-copilot.bhramaastra.com" target="_blank" rel="noopener noreferrer" className="btn-gold !font-bold w-full text-center inline-block">
                  Access Free →
                </a>
                <p className="font-inter text-[12px] text-[#64748B] text-center mt-3">
                  Opens the BAS Academy course platform in a new tab.
                </p>
              </div>
            </motion.div>

            {/* Programme 2 - WAITLIST */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(201,168,76,0.3)] relative flex flex-col">
              <div className="mb-6 flex justify-start">
                <span className="border border-[#C9A84C] text-[#C9A84C] font-inter text-[12px] uppercase tracking-[0.1em] px-3 py-1 font-semibold rounded-full">
                  FORMING NOW · JOIN WAITLIST
                </span>
              </div>
              <h3 className="font-playfair text-[24px] text-white font-semibold mb-3">AI for GRC Professionals</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] mb-6 flex-1">
                How to embed AI tools into governance, risk, and compliance workflows — without violating audit trails, regulatory boundaries, or professional ethics.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {['GRC', 'AI', 'Compliance', 'Risk', 'Audit'].map((tag) => (
                  <span key={tag} className="font-inter text-[12px] text-[#94A3B8] bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="btn-glass w-full text-center">
                  Join the Waitlist →
                </button>
              </div>
            </motion.div>

            {/* Programme 3 - WAITLIST */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} className="glass-card p-8 rounded-2xl border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-colors relative flex flex-col">
              <div className="mb-6 flex justify-start">
                <span className="border border-[#C9A84C] text-[#C9A84C] font-inter text-[12px] uppercase tracking-[0.1em] px-3 py-1 font-semibold rounded-full">
                  FORMING NOW · JOIN WAITLIST
                </span>
              </div>
              <h3 className="font-playfair text-[24px] text-white font-semibold mb-3">DecisionMine for Teams</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] mb-6 flex-1">
                Train your leadership team to use the Third Brain — and understand how to read, challenge, and act on its output. Build your organisation&apos;s AI-native decision culture.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {['Decision Intelligence', 'Leadership', 'AI', 'Strategy'].map((tag) => (
                  <span key={tag} className="font-inter text-[12px] text-[#94A3B8] bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="btn-glass w-full text-center">
                  Join the Waitlist →
                </button>
              </div>
            </motion.div>

            {/* Programme 4 - WAITLIST */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp} transition={{ delay: 0.1 }} className="glass-card p-8 rounded-2xl border border-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.3)] transition-colors relative flex flex-col">
              <div className="mb-6 flex justify-start">
                <span className="border border-[#C9A84C] text-[#C9A84C] font-inter text-[12px] uppercase tracking-[0.1em] px-3 py-1 font-semibold rounded-full">
                  FORMING NOW · JOIN WAITLIST
                </span>
              </div>
              <h3 className="font-playfair text-[24px] text-white font-semibold mb-3">Online Learning Cohorts</h3>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7] mb-6 flex-1">
                Live cohort-based learning is coming. Structured programmes. Peer cohorts. Real accountability. Delivered online for professionals across the region.
              </p>
              <div className="flex gap-2 flex-wrap mb-8">
                {['Online', 'Cohort', 'Live Sessions', 'Professional Development'].map((tag) => (
                  <span key={tag} className="font-inter text-[12px] text-[#94A3B8] bg-[rgba(255,255,255,0.05)] px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto">
                <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })} className="btn-glass w-full text-center">
                  Join the Waitlist →
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY BAS ACADEMY ================= */}
      <section className="bg-[#050D2A] py-24 px-6 border-y border-[rgba(201,168,76,0.15)]">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white mb-12 font-bold leading-tight">
            Not a training company.<br/>An intelligence partner.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full text-left">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <BookOpen color="#C9A84C" size={24} />
                <h3 className="font-playfair text-[20px] text-white font-semibold">Founder teaches</h3>
              </div>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Every programme carries Amish Shah&apos;s direct thinking — not outsourced trainers.
              </p>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Target color="#C9A84C" size={24} />
                <h3 className="font-playfair text-[20px] text-white font-semibold">No fluff</h3>
              </div>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                If it does not change how you work on Monday, it does not make the curriculum.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Brain color="#C9A84C" size={24} />
                <h3 className="font-playfair text-[20px] text-white font-semibold">AI-augmented delivery</h3>
              </div>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Courses are built using AI and teach AI. The medium matches the message.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Languages color="#C9A84C" size={24} />
                <h3 className="font-playfair text-[20px] text-white font-semibold">Bilingual always</h3>
              </div>
              <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                Arabic and English. Because inclusion is not optional in our region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: WAITLIST FORM ================= */}
      <section id="waitlist" className="py-24 px-6 bg-[#091540]">
        <div className="max-w-[640px] mx-auto">
          <div className="glass-card p-10 md:p-14 rounded-2xl relative shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            
            {formState !== 'success' ? (
              <>
                <div className="text-center mb-10">
                  <h2 className="font-playfair text-[32px] text-white mb-3 font-bold">Reserve Your Place.</h2>
                  <p className="font-inter text-[15px] text-[#CBD5E1] leading-[1.7]">
                    Cohorts open when enough intent exists. Tell us what you want to learn — we build around demand.
                  </p>
                </div>

                <form onSubmit={handleWaitlistSubmit} className="flex flex-col gap-5">
                  <input 
                    type="text" 
                    required 
                    placeholder="Your full name" 
                    className="input-glass w-full"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                  <input 
                    type="email" 
                    required 
                    placeholder="your@email.com" 
                    className="input-glass w-full"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                  <input 
                    type="tel" 
                    placeholder="+971 50 000 0000" 
                    className="input-glass w-full"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                  
                  <select 
                    required
                    className="input-glass w-full appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23CBD5E1%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25em_1.25em] bg-[right_1rem_center] bg-no-repeat text-[#CBD5E1]"
                    value={formData.topic}
                    onChange={(e) => setFormData({...formData, topic: e.target.value})}
                  >
                    <option value="" disabled className="text-gray-500">What topic do you want to learn?</option>
                    <option value="AI for GRC Professionals" className="bg-[#0B1B4D] text-white">AI for GRC Professionals</option>
                    <option value="DecisionMine for Teams" className="bg-[#0B1B4D] text-white">DecisionMine for Teams</option>
                    <option value="Online Learning Cohort" className="bg-[#0B1B4D] text-white">Online Learning Cohort</option>
                    <option value="Microsoft 365 & Copilot (Advanced)" className="bg-[#0B1B4D] text-white">Microsoft 365 &amp; Copilot (Advanced)</option>
                    <option value="Something else" className="bg-[#0B1B4D] text-white">Something else — I will describe below</option>
                  </select>

                  <textarea 
                    rows={4} 
                    placeholder="Any specific goals, team size, or timing preferences. The more specific, the better we can plan." 
                    className="input-glass w-full resize-none"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                  />

                  {formState === 'error' && (
                    <div className="font-inter text-[13px] text-red-400 mt-2 text-center border border-red-500/20 bg-red-500/10 p-3 rounded">
                      Something went wrong. Please try again or WhatsApp us directly at +971 50 409 0727.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formState === 'loading'}
                    className="btn-gold !font-bold w-full mt-4 flex justify-center items-center h-[52px]"
                  >
                    {formState === 'loading' ? 'Submitting...' : 'Reserve My Place →'}
                  </button>

                  <p className="font-inter text-[12px] text-[#64748B] mt-4 leading-[1.6]">
                    Your information is handled in accordance with UAE Federal Decree-Law No. 45 of 2021 on Personal Data Protection. We use it only to notify you when your selected programme opens. We do not share, sell, or spam.
                  </p>
                </form>
              </>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10">
                <h2 className="font-playfair text-[32px] text-[#C9A84C] mb-4 font-bold">◈ You&apos;re on the list.</h2>
                <p className="font-inter text-[16px] text-[#E2E8F0] mb-10 leading-[1.7]">
                  We will reach out when your programme is forming. In the meantime, explore what&apos;s already open.
                </p>
                <a href="https://learn-m365-copilot.bhramaastra.com" target="_blank" rel="noopener noreferrer" className="btn-gold !font-bold">
                  Explore M365 Copilot Mastery →
                </a>
              </motion.div>
            )}

          </div>
        </div>
      </section>

      {/* ================= SECTION 6: BOTTOM CTA ================= */}
      <section className="py-20 px-6 bg-[#050D2A] text-center border-t border-[rgba(201,168,76,0.15)] relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[300px] bg-[#C9A84C] blur-[150px] opacity-[0.07] z-0 pointer-events-none rounded-[100%]" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold mb-4">Ready to build your AI-native capability?</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mt-2 mb-10 max-w-lg mx-auto">
            Tell us where your team is starting from. We&apos;ll tell you where to go.
          </p>
          <a href="https://wa.me/971504090727" target="_blank" rel="noopener noreferrer" className="btn-glass !bg-[rgba(201,168,76,0.1)] !border-[#C9A84C] hover:!bg-[#C9A84C] hover:!text-[#0B1B4D]">
            Begin the Conversation →
          </a>
        </div>
      </section>

    </main>
  );
}
