import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { CtaSection } from "@/sections/cta-section";
import { HeroSection } from "@/sections/hero-section";
import { PortfolioSection } from "@/sections/portfolio-section";
import { ServicesSection } from "@/sections/services-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection limit={4} showViewAll />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
