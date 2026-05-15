import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/sections/about-section";
import { CtaSection } from "@/sections/cta-section";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
