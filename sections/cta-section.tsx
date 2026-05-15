import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-600 to-sky-500 px-6 py-10 text-white shadow-xl sm:px-10 sm:py-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
              Start Your Project
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Need a website that looks premium and performs even better?
            </h2>
            <p className="mt-4 text-base text-blue-100 sm:text-lg">
              Let&apos;s build a digital experience that earns trust, drives leads, and
              supports your growth goals.
            </p>
            <div className="mt-8">
              <ButtonLink
                href="/contact"
                className="!bg-white !text-blue-700 hover:!bg-blue-50 hover:!text-blue-800"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
