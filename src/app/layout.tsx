import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { GoldProvider } from '@/context/GoldContext'

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
  title: 'Bhramaastra Advisory Services',
  description: 'One Partner, Infinite Solutions. Quitely redesigning ESG, GRC, SOPs & Transformation for purpose-driven institutions.',
  metadataBase: new URL('https://bhramaastra.com'),
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
    description: 'One Partner, Infinite Solutions. Precision-engineered advisory for visionary leaders.',
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
        <GoldProvider>
          {children}
        </GoldProvider>
      </body>
    </html>
  )
}
