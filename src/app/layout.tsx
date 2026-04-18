import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import CustomCursor from '@/components/CustomCursor'
import ScrollProgress from '@/components/ScrollProgress'
import Navbar from '@/components/Navbar'
import PageTransition from '@/components/PageTransition'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import LoadingScreen from '@/components/LoadingScreen'
import Footer from '@/components/Footer'
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
  description: 'One Partner, Infinite Solutions. Quietly redesigning ESG, GRC, SOPs & Transformation for purpose-driven institutions.',
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
          <LoadingScreen />
          <ScrollProgress />
          <CustomCursor />
          <Navbar />
          <div className="flex-1 w-full relative">
            <PageTransition>
              {children}
            </PageTransition>
          </div>
          <FloatingWhatsApp />
          <Footer />
        </GoldProvider>
      </body>
    </html>
  )
}
