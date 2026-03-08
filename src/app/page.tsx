"use client";

import React from 'react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { ImpactStats } from '@/components/landing/ImpactStats';
import { DoctorNetwork } from '@/components/landing/DoctorNetwork';
import { BlueSolutions } from '@/components/landing/BlueSolutions';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';
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
