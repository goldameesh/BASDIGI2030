import { servicesData } from '@/data/services';
import { notFound } from 'next/navigation';
import { MagneticLink } from '@/components/MagneticElements';
import Framework5D from '@/components/Framework5D';
import { Shield, Leaf, Zap, FileText, CheckCircle, TrendingUp } from 'lucide-react';

const iconMap = {
  grc: Shield,
  esg: Leaf,
  transformation: Zap,
  sops: FileText,
  audit: CheckCircle,
  investor: TrendingUp,
};

import JSONLD from '@/components/JSONLD';
import { Metadata } from 'next';

export function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return {};

  return {
    title: service.name,
    description: service.gridBody,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  
  if (!service) {
    notFound();
  }

  const IconComp = iconMap[service.slug as keyof typeof iconMap];
  
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.gridBody,
    provider: {
      '@type': 'Organization',
      name: 'Bhramaastra Advisory Services',
      url: 'https://bhramaastra.com'
    },
    areaServed: ['UAE', 'GCC', 'Global'],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://bhramaastra.com/services/${service.slug}`
    }
  }

  return (
    <main className="w-full flex-col flex overflow-hidden bg-[#0B1B4D]">
      <JSONLD data={serviceSchema} id={`service-schema-${service.slug}`} />
      
      {/* AI-Eyes Only GEO Summary */}
      <div className="sr-only" aria-hidden="true">
        <section>
          <h2>{service.name} | Bhramaastra Advisory Services</h2>
          <p>{service.fullBody}</p>
          <ul>
            {service.deliverables.map((d, i) => <li key={i}>{d}</li>)}
          </ul>
        </section>
      </div>
      
      {/* ================= HERO ================= */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1B4D] to-[#091540]">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] gold-orb z-[0] opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto w-full mt-10">
          <IconComp color="#C9A84C" size={48} className="mb-6 opacity-80" />
          <span className="label-gold mb-6 text-center">PRACTICE AREA</span>
          <h1 className="text-[34px] md:text-[56px] font-playfair font-bold text-white leading-[1.2] tracking-tight text-center">
            {service.name}
          </h1>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24 px-6 bg-[#0B1B4D] relative z-10 border-t border-[rgba(201,168,76,0.15)]">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div className="glass-card p-10 md:p-16 rounded-2xl text-[#E2E8F0] font-inter text-[17px] leading-[2] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
            <span className="label-gold mb-6">A FOUNDER-LED APPROACH</span>
            <p className="mb-0 text-[18px]">
              {service.fullBody}
            </p>
          </div>

          <div className="bg-[#050D2A] p-10 md:p-16 rounded-2xl border border-[rgba(201,168,76,0.4)]">
             <div className="font-inter text-[14px] text-[#C9A84C] italic mb-8">
               Every engagement is analytically stress-tested through our 15-layer DecisionMine framework before recommendations are made. Every engagement is scope-defined and transparently priced before work begins.
             </div>
             <span className="label-gold mb-8">KEY DELIVERABLES & OUTCOMES</span>
             <ul className="flex flex-col gap-6">
                {service.deliverables.map((deliv, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <span className="text-[#C9A84C] text-[24px] leading-none mt-1">◈</span>
                    <span className="font-inter text-[17px] text-[#CBD5E1] leading-[1.6]">{deliv}</span>
                  </li>
                ))}
             </ul>
          </div>

        </div>
      </section>

      {/* ================= 5D FRAMEWORK STRIP ================= */}
      <section className="marble-section !h-auto py-16 px-6 border-y border-[rgba(0,0,0,0.1)] text-[#0B1B4D]">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <span className="font-inter text-[13px] uppercase tracking-[0.15em] font-semibold mb-4 text-[#0B1B4D] text-center">HOW WE DELIVER THIS</span>
          <h2 className="font-playfair text-[28px] md:text-[36px] text-[#0B1B4D] mb-12 text-center font-bold">The 5D Framework Protocol</h2>
          <Framework5D light={true} />
        </div>
      </section>

      {/* ================= BOTTOM CTA ================= */}
      <section className="py-20 px-6 bg-[#091540] text-center border-t border-[rgba(201,168,76,0.15)] relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-[32px] md:text-[40px] text-white font-bold">Ready to Discuss Your Challenge?</h2>
          <p className="font-inter text-[17px] text-[#CBD5E1] mt-4 mb-10 max-w-lg mx-auto">
            Every engagement begins with a conversation — not a proposal.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <MagneticLink href="/contact" className="btn-gold !font-bold">Begin a Conversation</MagneticLink>
            <MagneticLink href="/services" className="btn-glass">Back to All Services</MagneticLink>
          </div>
        </div>
      </section>

    </main>
  );
}
