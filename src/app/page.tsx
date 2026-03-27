import Link from "next/link";
import { AreaCards } from "@/components/AreaCards";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { FaqList } from "@/components/FaqList";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { ResponseTimeline } from "@/components/ResponseTimeline";
import { SchemaScript } from "@/components/SchemaScript";
import { Section } from "@/components/Section";
import { ServiceCards } from "@/components/ServiceCards";
import { TestimonialCards } from "@/components/TestimonialCards";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { areaServicePages, company, services, universalFaqs } from "@/lib/content";
import { buildMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Emergency Plumber London | Apex Plumbing London",
  description:
    "Emergency plumbing and boiler repair across London with clear pricing, fast response, and trusted local engineers.",
  path: "/"
});

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: universalFaqs.slice(0, 6).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

const trustItems = [
  "4.9-star rated by 500+ London customers",
  "Gas Safe Registered Engineers",
  "No Hidden Fees - Fixed Pricing"
];

export default function HomePage() {
  return (
    <>
      <SchemaScript data={localBusinessSchema()} />
      <SchemaScript data={homeFaqSchema} />

      <section className="bg-ink bg-hero-grid bg-[size:18px_18px] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">London Emergency Plumbing Team</p>
            <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold leading-tight md:text-6xl">
              Emergency Plumber London - 24/7 Fast Response in Under 60 Minutes
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
              Boiler breakdown, leaks, blocked drains? Our certified engineers are on call across London with same-day
              service and transparent pricing.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${company.phoneRaw}`} className="btn-primary">
                Call Now - Immediate Response
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Get a Free Quote
              </Link>
            </div>
            <p className="mt-4 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-100">
              60-minute response target or GBP 25 off callout
            </p>
            <ul className="mt-8 grid gap-3 text-sm text-slate-100">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint text-[11px] font-bold text-white">
                    v
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-slate-200">{company.responsePromise}</p>
          </div>
          <MiniLeadForm />
        </div>
      </section>

      <Section
        eyebrow="Response Speed"
        title="What happens right after you call"
        subtitle="A fast-response timeline that removes uncertainty for urgent customers."
      >
        <ResponseTimeline />
      </Section>

      <Section
        eyebrow="Trust"
        title="Trusted by London Homeowners, Landlords, and Small Businesses"
        subtitle="Verified reviews, accredited engineers, and practical communication from first call to completion."
        className="bg-fog"
      >
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="surface-card p-6">
            <p className="text-sm leading-relaxed text-slate">
              Professional, quick, and transparent on price. Apex resolved our leak same-day and left everything tidy.
            </p>
            <p className="mt-3 text-sm font-semibold text-ink">Verified Customer - South London</p>
          </div>
          <div className="surface-card p-6">
            <p className="font-display text-3xl font-semibold text-ink">4.9 star average</p>
            <p className="mt-1 text-sm text-steel">Average rating from verified local reviews</p>
            <Link href="/reviews" className="mt-4 inline-flex text-sm font-semibold text-ink hover:text-accent">
              Read reviews
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <TrustBadgeRow />
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title="Plumbing & Boiler Services"
        subtitle="Specialist support for urgent and planned jobs across London."
      >
        <ServiceCards items={services.slice(0, 6)} />
        <div className="mt-8">
          <Link href="/services" className="btn-secondary">
            View All Services
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="How It Works"
        title="How Apex Plumbing Works"
        subtitle="Simple, transparent steps from first call to completed fix."
        className="bg-fog"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "1. Call and Quick Triage",
              detail: "We identify urgency, gather key details, and give immediate next steps."
            },
            {
              title: "2. Diagnose and Quote",
              detail: "Engineer confirms fault and pricing before major work starts."
            },
            {
              title: "3. Fix and Completion Report",
              detail: "We complete the job safely and share clear aftercare guidance."
            }
          ].map((item) => (
            <article key={item.title} className="surface-card p-6">
              <h3 className="text-base font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel">{item.detail}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 text-sm font-semibold text-mint">Upfront quote before work starts.</p>
      </Section>

      <Section
        eyebrow="Pricing"
        title="Clear Pricing, No Surprise Costs"
        subtitle="You'll get a confirmed quote before major work begins."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Emergency Callout</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">From GBP 89</p>
          </article>
          <article className="surface-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Typical Repair Range</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">GBP 120 to GBP 520</p>
          </article>
          <article className="surface-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Policy</p>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              No hidden extras. If scope changes, we explain and re-confirm before continuing.
            </p>
          </article>
        </div>
        <div className="mt-8">
          <Link href="/pricing" className="btn-primary">
            Get a Quote
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Areas"
        title="Serving Homes and Businesses Across London"
        subtitle="Fast response in key boroughs and nearby areas."
        className="bg-fog"
      >
        <AreaCards items={areaServicePages.slice(0, 6)} />
        <div className="mt-8">
          <Link href="/areas" className="btn-secondary">
            See Areas We Cover
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Reviews"
        title="What London Customers Say"
        subtitle="Recent verified feedback from emergency and boiler jobs."
      >
        <TestimonialCards />
        <div className="mt-8">
          <Link href="/reviews" className="btn-secondary">
            View More Reviews
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Straight answers before you book."
        className="bg-fog"
      >
        <FaqList items={universalFaqs.slice(0, 6)} />
        <div className="mt-8">
          <Link href="/faq" className="btn-secondary">
            View All FAQs
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Book Today"
        title="Need a Plumber in London Today?"
        subtitle="Call now for urgent help or send a quick quote request."
      >
        <CallToActionPanel
          title="Speak to a local engineer now"
          subtitle="For urgent issues, call immediately. For planned jobs, request a quote and preferred time slot."
        />
      </Section>
    </>
  );
}
