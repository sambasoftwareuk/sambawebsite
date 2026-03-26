import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';
import { Icon } from '../atoms/Icon';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 md:pb-32 md:pt-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="z-10">
          <Badge>UK &amp; EU SME Specialist</Badge>
          <h1 className="mb-6 mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
            We build websites that <span className="text-indigo-600">convert</span> — and automate your business with AI
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
            Mobile-first websites and smart automation for SMEs across the UK &amp; EU. Scale faster with technology that works for you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button className="px-8 py-4 text-lg font-bold">
              Get a Free Consultation <Icon name="arrow" />
            </Button>
            <Button className="px-8 py-4 text-lg font-bold" variant="secondary">
              View Our Work
            </Button>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 rounded-3xl bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:bg-indigo-500/20" />
          <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl">
            <img
              alt="Dashboard Analytics"
              className="w-full rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbVb1gXAo3UG8qnU45sElod9suJWjjL3UbA1IjRlyWEbPTif0JtNl3_4lPpL3RQ3fU8YORH-0oKoi27-rgF_Jc7pYP7EIPL4VAo_MFps3qo9Xa2PtfiAP56Lv9O49e-kdX5TkJDA7kmFgZzIckgYVqeFo_EFn4P0MKX-S1fmXSRatKmvCcFcVkGbeKYdS0F1HSCriOgaCI3SAwKnVYCrkhzvOZU19tmKPxSbQdOXazAIF_92CF0ElnpfABvCsmHOEA25C7K3LwoyFC"
            />
            <div className="absolute -bottom-6 -right-6 max-w-[200px] rounded-2xl bg-violet-600/90 p-6 text-white shadow-xl backdrop-blur-xl">
              <div className="mb-2 flex items-center gap-3">
                <Icon className="h-4 w-4" name="sparkles" />
                <span className="text-sm font-bold">AI Active</span>
              </div>
              <p className="text-xs font-medium leading-relaxed opacity-90">Automating 40+ hours of manual workflow per month.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
