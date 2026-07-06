import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeSection from "@/components/MarqueeSection";
import Features from "@/components/Features";
import WhyChooseUs from "@/components/WhyChooseUs";
import RecentUpdates from "@/components/RecentUpdates";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { getRecentReleases } from "@/utils/releaseLog";

export default function Home() {
  const recentReleases = getRecentReleases(3);

  return (
    <main className="min-h-screen bg-[#f9f9ff] text-[#151c27]">
      <Navigation />
      <Hero />
      <MarqueeSection />
      <Features />
      <WhyChooseUs />
      <RecentUpdates entries={recentReleases} />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}