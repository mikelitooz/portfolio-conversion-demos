import Link from "next/link";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plumbing & Boiler Services in London",
  description:
    "Explore emergency plumbing, boiler repair, blocked drain, and leak detection services across London.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Services Overview</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Plumbing & Boiler Services Across London
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Choose a service page to view process details, pricing expectations, local coverage, and booking options.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Core Services"
        title="Find the right service quickly"
        subtitle="Choose the service that matches your issue, then book quickly with clear pricing and response details."
      >
        <ServiceCards items={services} />
      </Section>

      <Section
        eyebrow="Need Help Choosing?"
        title="Not sure which service applies?"
        subtitle="Tell us your symptoms and we will route you to the right engineer and service type."
        className="bg-fog"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm leading-relaxed text-steel">
            Common cross-over issues include boiler pressure drops linked to hidden leaks and blocked drains causing
            repeat plumbing callouts. We can triage by phone and recommend the right starting point.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-primary cta-interactive"
            >
              Request Quote
            </Link>
            <Link
              href="/faq"
              className="btn-secondary cta-interactive"
            >
              View FAQs
            </Link>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Book Now"
        title="Need same-day support?"
        subtitle="Call now for urgent plumbing or boiler issues."
      >
        <CallToActionPanel
          title="Speak to a London plumbing specialist"
          subtitle="We will confirm urgency, expected response time, and transparent pricing before dispatch."
        />
      </Section>
    </>
  );
}
