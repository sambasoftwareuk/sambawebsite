import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PortfolioSection } from "@/sections/portfolio-section";

export default function WorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <PortfolioSection />
      </main>
      <Footer />
    </>
  );
}
