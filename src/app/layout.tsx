import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { GoldProvider } from '@/context/GoldContext'
import JSONLD from '@/components/JSONLD'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Bhramaastra Advisory Services',
  alternateName: 'BAS',
  url: 'https://bhramaastra.com',
  logo: 'https://bhramaastra.com/images/brand/bas-logo.png',
  sameAs: [
    'https://linkedin.com/company/bhramaastra',
    'https://youtube.com/@bhramaastra',
    'https://wa.me/971504090727'
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dubai',
    addressCountry: 'UAE'
  },
  description: 'Precision-engineered advisory for purpose-driven institutions. Specialist GRC, ESG, and Strategic Transformation advisory.',
  areaServed: ['UAE', 'GCC', 'Middle East', 'Global']
}

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Bhramaastra Advisory Services | Private Institutional Advisory',
    template: '%s | BAS'
  },
  description: 'Precision-engineered advisory for purpose-driven institutions. Redesigning ESG, GRC, and Strategic Transformation across 12+ countries.',
  metadataBase: new URL('https://bhramaastra.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/images/brand/bas-logo.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/brand/bas-logo.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/brand/bas-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'Bhramaastra Advisory Services',
    description: 'Precision-engineered advisory for purpose-driven institutions. World-class ESG, GRC, and Transformation strategy.',
    url: 'https://bhramaastra.com',
    siteName: 'Bhramaastra Advisory Services',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'BAS Branding'
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bhramaastra Advisory Services',
    description: 'Precision-engineered advisory for visionary leaders.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0B1B4D',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-royal-blue-deep text-soft-white selection:bg-gold-primary selection:text-royal-blue-dark relative w-full overflow-x-hidden min-h-screen flex flex-col`}>
        <JSONLD data={organizationSchema} id="org-schema" />
        <GoldProvider>
          {children}
        </GoldProvider>
      </body>
    </html>
  )
}
