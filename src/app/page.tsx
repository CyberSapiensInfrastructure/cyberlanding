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

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Stats />
      <AnimatedFeatures />
      <Documents />
      <FAQ />
      <TerminalInfo />
      <TerminalContact />
      <Footer />
    </main>
  );
} 