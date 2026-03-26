import { Icon } from '../atoms/Icon';
import { ProcessStep } from '../molecules/ProcessStep';
import { ProjectCard } from '../molecules/ProjectCard';
import { ServiceCard } from '../molecules/ServiceCard';
import { Footer } from '../organisms/Footer';
import { HeroSection } from '../organisms/HeroSection';
import { Navbar } from '../organisms/Navbar';

const processSteps = [
  ['Understand', 'We dive deep into your business model and goals.'],
  ['Build', 'Design and develop your high-converting website.'],
  ['Automate', 'Implement AI workflows to save time and costs.'],
  ['Launch', 'Go live, optimize, and watch your business grow.']
] as const;

export function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <HeroSection />

        <section className="bg-slate-100 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 max-w-2xl">
              <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">Core Expertise</h2>
              <p className="text-slate-600">
                We do not just build sites; we build growth engines powered by the latest web standards and AI capabilities.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <ServiceCard description="High-performance, mobile-first websites tailored for speed and high conversion rates." icon="code" title="Website Development" />
              <ServiceCard description="Custom Shopify stores designed to showcase your products and streamline the path to purchase." icon="shop" title="Shopify & E-commerce" />
              <ServiceCard description="Custom AI workflows that save your team hours of manual work and optimize business processes." icon="bolt" title="AI Automation" />
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-12">
            <div className="flex flex-col justify-center md:col-span-12 lg:col-span-5">
              <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">Why Samba Software?</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                We bridge the gap between high-end digital agency quality and the practical needs of growing SMEs.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-8 md:col-span-6 lg:col-span-3">
              <Icon className="mb-4 h-10 w-10 text-indigo-600" name="mobile" />
              <h4 className="mb-2 text-xl font-bold">Mobile-first approach</h4>
              <p className="text-sm text-slate-600">Designed for the 80% of users browsing on their phones.</p>
            </div>
            <div className="relative overflow-hidden rounded-3xl bg-indigo-600 p-8 text-white md:col-span-6 lg:col-span-4">
              <Icon className="mb-4 h-10 w-10" name="speed" />
              <h4 className="mb-2 text-xl font-bold">Fast delivery</h4>
              <p className="text-sm opacity-90">From concept to launch in weeks, not months. We value your time.</p>
            </div>
            <div className="rounded-3xl bg-slate-200 p-8 md:col-span-7 lg:col-span-7">
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-bold">Built for SMEs</h4>
                  <p className="text-slate-600">Scalable solutions that grow as your business grows without breaking the bank.</p>
                </div>
                <div className="flex-1">
                  <h4 className="mb-2 text-xl font-bold">Website + AI</h4>
                  <p className="text-slate-600">The only agency combining stunning front-ends with smart back-end automation.</p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border-2 border-dashed border-violet-300 bg-violet-50 p-8 text-center md:col-span-5 lg:col-span-5">
              <h4 className="mb-2 text-3xl font-black text-violet-700">99.9%</h4>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-600">Uptime & Reliability</p>
            </div>
          </div>
        </section>

        <section className="bg-slate-200 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-4xl font-extrabold">The Samba Way</h2>
              <p className="text-slate-600">A streamlined process to get you from idea to results.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              {processSteps.map(([title, description], index) => (
                <ProcessStep description={description} index={index + 1} key={title} title={title} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 flex items-end justify-between">
              <div>
                <h2 className="mb-4 text-4xl font-extrabold">Latest Work</h2>
                <p className="text-slate-600">Successful transformations we have led recently.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <ProjectCard
                description="Shopify Plus migration and custom AI inventory management for a premium fashion label."
                imageAlt="E-commerce project"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAylUcPNVLQ7MuCvTLEaR0C55by7Q3WOG7FVJisH1MKNjyJB19P4vYkr52jLJTDokXnGEUqyfYgI2qPlmADC7Jw4H3DVR8UvqCoxPqA9q7OInH02AMBkYMO4UGlgluS2PKlR-wiV8kB7OEh8reebh8Sw7o5Rh4y74dbHWU724qQxkicCMCxw1iGbtw54E4H8qn_E49CqXXWUAnb_4JyUrbau91AM06mwHZUiHigDsKwQc9MNpwhHYgnh6pzVmVnjCjTW-ZUPg9CLBK-"
                tags={['E-commerce', 'AI Automation']}
                title="Luminary Brands"
              />
              <ProjectCard
                description="Custom business portal with automated route optimization for a pan-European fleet."
                imageAlt="SaaS platform"
                imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuA0fAG9XF8a5-XI1oxtPOCO7ScPBZaLO_bTf7BH4I2pFv-21sWQtpjnDvWA2__po4un3rTdB6nx2CygTgN45jv8e-QXXZqQrDPjDA-fh8EqHgPl61OaFap1ky3rpc4ereEAWwCjkuWzJdoCRPTyqlIuDVS4UrtUWVw1N-t1u23FS4sUkI7NBAHK8B5nN43FvSLV2bvPaqx2fjxn_CqlqIkrPalxuNRvvx5MiOUA3V73uzzxR4WjzlEjCMhhf_JlHwfBImYYAvbAAoUw"
                tags={['Web App', 'Logistics']}
                title="Nexus Logistics"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-indigo-600 py-24 text-center text-white">
          <div className="mx-auto max-w-4xl px-6">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight md:text-6xl">Ready to modernize your business?</h2>
            <p className="mb-12 text-xl text-white/80">
              Book a 15-minute discovery call to discuss your project and see how AI can work for you.
            </p>
            <button className="rounded-2xl bg-white px-10 py-5 text-xl font-black text-indigo-600 shadow-2xl transition-transform hover:scale-105">
              Book a Call
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
