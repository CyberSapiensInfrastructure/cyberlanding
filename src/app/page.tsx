"use client";

import React from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Documents from '@/components/Documents';
import FAQ from '@/components/FAQ';
import TerminalInfo from '@/components/TerminalInfo';
import TerminalContact from '@/components/TerminalContact';
import Footer from '@/components/Footer';
import AnimatedFeatures from '@/components/AnimatedFeatures';
import Stats from '@/components/Stats';
import Header from '@/components/Header';
import ScrollingBrands from '@/components/ScrollingBrands';

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black to-gray-900">
      <Header />
      <Hero />
      <ScrollingBrands />
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <Services />
      </div>
      <div className="bg-black">
        <Stats />
      </div>
      <div className="bg-gradient-to-b from-black to-gray-900">
        <AnimatedFeatures />
      </div>
      <div className="bg-gray-900">
        <Documents />
      </div>
      <FAQ />
      <div className="bg-gradient-to-b from-gray-900 to-black">
        <TerminalInfo />
      </div>
      <div className="bg-black">
        <TerminalContact />
      </div>
      <Footer />
    </main>
  );
} 