import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

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