import { Metadata } from 'next'
import JSONLD from '@/components/JSONLD'

export const metadata: Metadata = {
  title: 'About Amish Shah & Advisory Philosophy',
  description: 'Learn about Amish Shah, Founder of Bhramaastra Advisory Services. Two decades of transformation leadership across UAE, GCC, and Global markets.',
  alternates: {
    canonical: '/about',
  },
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Amish Shah',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: 'Bhramaastra Advisory Services'
  },
  url: 'https://bhramaastra.com/about',
  image: 'https://bhramaastra.com/images/founder/amish-shah.jpg',
  sameAs: [
    'https://linkedin.com/in/amishshah', // Placeholder - verified in DNA if possible
    'https://bhramaastra.com'
  ],
  description: 'Investor, Owner, and AI Architect with over 20 years of leadership across governance, transformation, and strategic advisory.'
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <JSONLD data={personSchema} id="person-schema" />
      {children}
    </>
  )
}
