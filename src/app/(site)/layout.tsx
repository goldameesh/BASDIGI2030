import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import CustomCursor from '@/components/CustomCursor';
import ScrollProgress from '@/components/ScrollProgress';
import LoadingScreen from '@/components/LoadingScreen';
import PageTransition from '@/components/PageTransition';

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
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
    </>
  );
}
