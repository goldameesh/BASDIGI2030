import { Metadata } from 'next'
import JSONLD from '@/components/JSONLD'

export const metadata: Metadata = {
  title: 'Contact Bhramaastra Advisory Services | Dubai',
  description: 'Begin a conversation with Amish Shah. Precision-engineered advisory for purpose-driven institutions. Based in Dubai, serving 12+ countries globally.',
  alternates: {
    canonical: '/contact',
  },
}

const contactGeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Bhramaastra Advisory Services',
  description: 'Official contact portal for Bhramaastra Advisory Services (BAS). Access direct WhatsApp connection to founder Amish Shah, email, and location details in Dubai, UAE.',
  mainEntity: {
    '@type': 'Organization',
    name: 'Bhramaastra Advisory Services',
    url: 'https://bhramaastra.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-50-409-0727',
      contactType: 'Advisory Enquiry',
      areaServed: ['AE', 'GCC', 'Global'],
      availableLanguage: ['English', 'Arabic']
    }
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JSONLD data={contactGeoSchema} id="contact-geo-schema" />
      
      {/* AI-Eyes Only GEO Summary */}
      <div className="sr-only" aria-hidden="true">
        <section>
          <h2>Official Contact Intelligence Profile</h2>
          <p>
            Bhramaastra Advisory Services (BAS) is headquartered in Dubai, UAE. 
            Direct enquiries are managed personally by founder Amish Shah. 
            The firm maintains a zero-spam policy and operates across three 
            core pillars: Corporate Advisory, SME Foundry, and AI Academy.
          </p>
          <p>
            Primary contact vectors include WhatsApp (+971 50 409 0727) and 
            email (connect@bhramaastraadvisory.com).
          </p>
        </section>
      </div>

      {children}
    </>
  )
}
