import React from 'react';
import { Toaster } from '@/components/ui/toaster';
import Navbar from './Navbar';
import Footer from './Footer';

interface BaseLayoutProps {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <section className="min-h-[100dvh] px-4 text-primary grid grid-rows-[auto_1fr_auto]">
      <Navbar />
      {children}
      <Footer />
      <Toaster />
    </section>
  );
}
