
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Programs } from '@/components/Programs';
import { About } from '@/components/About';
import { News } from '@/components/News';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <Stats />
      <Programs />
      <About />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
