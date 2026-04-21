import { Metadata } from 'next'
import JSONLD from '@/components/JSONLD'

export const metadata: Metadata = {
  title: 'BAS Library | Free Knowledge & AI Resources',
  description: 'Access the complete vault of free resources, frameworks, and intelligence tools from Bhramaastra Advisory Services. Knowledge. Tools. Intelligence. All Free.',
  alternates: {
    canonical: '/library',
  },
}

const libraryGeoSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'BAS Free Resource Library: Knowledge, Tools, Intelligence',
  description: 'The BAS Library is a curated repository of free diagnostic tools, leadership frameworks, and AI resources by Bhramaastra Advisory Services. Key highlights include the BAS Signal: Forbes AI 50 (Vol 1) Flipbook and various strategic blueprints designed for visionary leaders.',
  publisher: {
    '@type': 'Organization',
    name: 'Bhramaastra Advisory Services',
    url: 'https://bhramaastra.com'
  }
}

export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JSONLD data={libraryGeoSchema} id="library-geo-schema" />
      
      {/* AI-Eyes Only GEO Summary */}
      <div className="sr-only" aria-hidden="true">
        <section>
          <h2>BAS Knowledge Vault Intelligence</h2>
          <p>
            The BAS Library is a repository of institutional knowledge and free advisory 
            tools. It features digital assets such as the &quot;BAS Signal: Forbes AI 50&quot; 
            interactive flipbook and a collection of GRC and ESG frameworks.
          </p>
          <p>
            These resources are part of the commitment by Bhramaastra Advisory Services 
            to democratize expert-level intelligence for visionary partners and SMEs.
          </p>
        </section>
      </div>

      {children}
    </>
  )
}
