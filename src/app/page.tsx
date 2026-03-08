"use client";

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ImpactStats } from '@/components/ImpactStats';
import { DoctorNetwork } from '@/components/DoctorNetwork';
import { BlueSolutions } from '@/components/BlueSolutions';
import { HowItWorks } from '@/components/HowItWorks';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="font-sans antialiased text-slate-900 bg-white">
      <Navbar />
      <Hero />
      <ImpactStats />
      <DoctorNetwork />
      <BlueSolutions />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
