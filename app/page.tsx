"use client";

import dynamic from 'next/dynamic';
import Navigation from "@/components/Navigation";
import MarqueeSection from "@/components/MarqueeSection";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const CTA = dynamic(() => import("@/components/CTA"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <Hero />
      <MarqueeSection />
      <Features />
      <WhyChooseUs />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}