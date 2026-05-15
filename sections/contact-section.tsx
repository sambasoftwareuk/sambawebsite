import { SectionHeading } from "@/components/common/section-heading";
import { Container } from "@/components/ui/container";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Tell us about your project."
          description="Share your goals and timeline, and we will come back with a practical roadmap and quote."
        />
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
          <form className="grid gap-5 sm:grid-cols-2" action="#" method="post">
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Full name
              <input
                name="name"
                type="text"
                required
                placeholder="John Doe"
                className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground">
              Email address
              <input
                name="email"
                type="email"
                required
                placeholder="john@company.com"
                className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium text-foreground sm:col-span-2">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Briefly describe your goals, audience, and timeline."
                className="rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand"
              />
            </label>
            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
