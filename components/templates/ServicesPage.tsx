import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';
import { Footer } from '../organisms/Footer';
import { Navbar } from '../organisms/Navbar';

const websiteFeatures = [
  {
    title: 'SME Bespoke Solutions',
    description: 'Customized experiences tailored to your specific business niche.'
  },
  {
    title: 'Modern CMS Architecture',
    description: 'Easy content management with headless or traditional platforms.'
  },
  {
    title: 'Real Estate Portals',
    description: 'Dynamic listing integrations and map-based search functionality.'
  },
  {
    title: 'Mobile-First Response',
    description: 'Pixel-perfect performance across all device dimensions.'
  }
] as const;

const ecommerceFeatures = [
  {
    title: 'Shopify Setup',
    description: 'Seamless store configuration, theme customization, and app integration.',
    icon: 'shop' as const
  },
  {
    title: 'Conversion-Focused',
    description: 'Optimized UX/UI designed to reduce cart abandonment and increase AOV.',
    icon: 'speed' as const
  },
  {
    title: 'Payment Integration',
    description: 'Secure, multi-currency payment gateways and streamlined inventory.',
    icon: 'sparkles' as const
  },
  {
    title: 'Product Strategy',
    description: 'Smart categorization and filter logic for massive product catalogs.',
    icon: 'bolt' as const
  }
] as const;

const automationFeatures = [
  {
    title: 'Lead Capture',
    description: 'AI-driven forms and chatbots that qualify leads and sync directly to your pipeline 24/7.',
    icon: 'sparkles' as const
  },
  {
    title: 'Email Workflows',
    description: 'Drip campaigns that adapt based on user behavior for maximum engagement and conversion.',
    icon: 'arrow' as const
  },
  {
    title: 'CRM Integrations',
    description: 'Connect HubSpot, Salesforce, or Pipedrive for a single source of truth.',
    icon: 'code' as const
  },
  {
    title: 'Process Automation',
    description: "From invoicing to fulfillment, we'll automate repetitive tasks end-to-end.",
    icon: 'mobile' as const
  }
] as const;

export function ServicesPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-24">
        <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-6">Digital Service Stack</Badge>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
              Digital Excellence, <span className="text-indigo-600">Engineered.</span>
            </h1>
            <p className="text-xl leading-relaxed text-slate-600">
              We build high-performance digital tools that transform how businesses operate and grow in the modern economy.
            </p>
          </div>
        </section>

        <section className="bg-slate-100 px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <Badge className="mb-6 bg-indigo-100 text-indigo-700">Core Development</Badge>
              <h2 className="mb-6 text-4xl font-extrabold">Website Development</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                We create digital storefronts that are not just beautiful, they are optimized for growth. From SMEs to high-stakes real
                estate platforms, our code is built to last.
              </p>
              <ul className="mb-10 space-y-4">
                {websiteFeatures.map((feature) => (
                  <li className="flex items-start gap-3" key={feature.title}>
                    <Icon className="mt-1 h-5 w-5 text-indigo-600" name="sparkles" />
                    <div>
                      <span className="block font-bold text-slate-900">{feature.title}</span>
                      <span className="text-sm text-slate-600">{feature.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="px-8 py-4 font-bold">
                Launch Your Project <Icon name="arrow" />
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative overflow-hidden rounded-3xl bg-white p-4 shadow-2xl">
                <img
                  alt="Website development interface"
                  className="h-[400px] w-full rounded-2xl object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy7QAlVMTyQer17W6uYVys0eLYfFw0MqiYYVLYEHcZyoVYi0985niZD4gJZ19PInjBlRiB7stgbQJGXX1v9SApvt5SDPnwAxgZ-oUA4Rmz6Z_tGa1tF-1osT0hhL93Heu6o4HLUt5hT1EPcAZ4aWg2WcIFz0SFqXMjZKmZGHi34Pivkzp1UVMilk1sZ0NqvKiPsLYyCzJ90cmGO9HY7xAvfNZ-JLZfmhnQs0KK1vK4-_mQEOKK_C0-z4pcCNz_vsywp8A_AaLdUVB4"
                />
                <div className="absolute bottom-6 left-6 hidden max-w-[200px] rounded-2xl border border-white/30 bg-white/80 p-6 shadow-xl backdrop-blur-xl md:block">
                  <Icon className="mb-2 h-8 w-8 text-indigo-600" name="speed" />
                  <div className="text-2xl font-extrabold">99/100</div>
                  <div className="text-xs font-bold tracking-widest text-slate-500 uppercase">Lighthouse Score</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-2xl">
              <img
                alt="Shopify store setup"
                className="h-[500px] w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7rllYoMJpWWuY9wkOLysGA8sni-Dzk0Kl85bZOYF4Ui27lVJI6ToJIJgjdsS3VA1w6w9breBazXMCMlEWdzF_brBwvwlrZ-OOMZQxP67vue77D1Pldjn-OKBcIvno2kNPB5sY_UH16Z2hVn4AKasRFqXgjC6uOxHoJrSfaDhNYDmpGaDwFE5oRbqiS0LDGvUcQhjuVzRvHiBtXqgOvCkApRPyismmc4kP-ewEnWceHo7BMlizE8aud7gnTEHI3t1lHZ6Ev4iWwNrG"
              />
              <div className="absolute right-8 top-8 rounded-full bg-violet-600 px-4 py-2 text-sm font-bold text-white shadow-lg">E-commerce Expert</div>
            </div>
            <div>
              <Badge className="mb-6 bg-violet-100 text-violet-700">Sales Focused</Badge>
              <h2 className="mb-6 text-4xl font-extrabold">Shopify &amp; E-commerce</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">
                We do not just build stores; we build revenue engines. Our e-commerce solutions prioritize the user journey from landing
                page to successful checkout.
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {ecommerceFeatures.map((feature) => (
                  <article className="rounded-2xl bg-slate-100 p-6" key={feature.title}>
                    <Icon className="mb-3 h-7 w-7 text-violet-700" name={feature.icon} />
                    <h4 className="mb-2 font-bold text-slate-900">{feature.title}</h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-4 mb-20 rounded-[3rem] bg-slate-950 px-6 py-20 text-white md:mx-10">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <Badge className="mb-6 bg-indigo-500/20 text-indigo-200">Intelligent Ops</Badge>
              <h2 className="mb-6 text-4xl font-extrabold">AI Automation</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Reclaim your time. We use artificial intelligence and practical integrations to automate repetitive tasks and scale the
                meaningful parts of your business.
              </p>
              <div className="rounded-2xl border border-indigo-400/20 bg-indigo-500/10 p-6">
                <p className="text-sm italic text-indigo-100">
                  Samba&apos;s automation reduced our lead response time from 4 hours to 4 seconds.
                </p>
                <p className="mt-4 text-xs font-bold text-white">- David K., COO</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-2">
              {automationFeatures.map((feature) => (
                <article className="rounded-3xl border border-white/5 bg-slate-800/60 p-8 transition-all hover:bg-slate-800" key={feature.title}>
                  <Icon className="mb-4 h-8 w-8 text-indigo-300" name={feature.icon} />
                  <h3 className="mb-3 text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl rounded-4xl border border-slate-200 bg-white p-12 shadow-xl">
            <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-5xl">
              Ready to build something <span className="text-indigo-600">extraordinary?</span>
            </h2>
            <p className="mb-10 text-lg text-slate-600">Let&apos;s discuss how our technical expertise can drive your business goals.</p>
            <div className="flex flex-col justify-center gap-4 md:flex-row">
              <Button className="px-10 py-4">Start Your Consultation</Button>
              <Button className="px-10 py-4" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
