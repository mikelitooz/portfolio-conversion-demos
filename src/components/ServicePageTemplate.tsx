import Link from "next/link";
import { ApexEmergencyServiceStitch } from "@/components/apex/ApexEmergencyServiceStitch";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { FaqList } from "@/components/FaqList";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { SchemaScript } from "@/components/SchemaScript";
import { Section } from "@/components/Section";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import {
  Service,
  ServiceKey,
  areaServicePages,
  company,
  getServiceByKey,
  services,
  testimonials
} from "@/lib/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo";

type RecentJob = {
  title: string;
  detail: string;
  area: string;
  timeframe: string;
};

const recentJobsByService: Record<ServiceKey, RecentJob[]> = {
  "emergency-plumber": [
    {
      title: "Burst pipe emergency in Islington apartment",
      detail: "Isolated the leak, replaced failed section, and restored water safely.",
      area: "Islington",
      timeframe: "Resolved in 2.5 hours"
    },
    {
      title: "Night-time kitchen leak in Camden",
      detail: "Stopped active leak and prevented further cabinet and floor damage.",
      area: "Camden",
      timeframe: "Engineer on site in 52 minutes"
    }
  ],
  "boiler-repair": [
    {
      title: "No-heat callout in Hackney terrace",
      detail: "Diagnosed ignition failure and restored full heating service same visit.",
      area: "Hackney",
      timeframe: "Completed same day"
    },
    {
      title: "Pressure drop issue in Westminster flat",
      detail: "Found hidden seep leak and stabilised system after targeted repair.",
      area: "Westminster",
      timeframe: "Fixed in one visit"
    }
  ],
  "blocked-drains": [
    {
      title: "Recurring kitchen blockage in Greenwich",
      detail: "Cleared line and corrected trap setup to reduce repeat blockages.",
      area: "Greenwich",
      timeframe: "Attended within 70 minutes"
    },
    {
      title: "Overflow risk at Lambeth rental property",
      detail: "Emergency unblocked external line and completed flow test.",
      area: "Lambeth",
      timeframe: "Resolved before tenant handover"
    }
  ],
  "leak-detection": [
    {
      title: "Hidden wall leak in Camden conversion",
      detail: "Used non-invasive tracing to locate source with minimal opening work.",
      area: "Camden",
      timeframe: "Source identified in 90 minutes"
    },
    {
      title: "Pressure-loss case in Lambeth flat",
      detail: "Detected concealed manifold leak and prepared insurer-ready notes.",
      area: "Lambeth",
      timeframe: "Diagnosed same day"
    }
  ],
  "boiler-service": [
    {
      title: "Annual boiler service in Hackney",
      detail: "Completed full safety and efficiency checks before winter period.",
      area: "Hackney",
      timeframe: "Completed in 1 hour"
    },
    {
      title: "Landlord service visit in Greenwich",
      detail: "Serviced combi boiler and updated maintenance record for compliance.",
      area: "Greenwich",
      timeframe: "Completed same visit"
    }
  ],
  "boiler-installation": [
    {
      title: "Combi upgrade in Islington family home",
      detail: "Installed high-efficiency unit with new controls and commissioning.",
      area: "Islington",
      timeframe: "Two-day project"
    },
    {
      title: "Like-for-like swap in Westminster",
      detail: "Removed old system and installed replacement with minimal disruption.",
      area: "Westminster",
      timeframe: "Completed in 1 day"
    }
  ],
  "power-flushing": [
    {
      title: "Cold radiator issue in Camden",
      detail: "Power flushed heating system and improved circulation across all rooms.",
      area: "Camden",
      timeframe: "Completed in one afternoon"
    },
    {
      title: "Noisy system clean in Hackney",
      detail: "Removed sludge build-up and added inhibitor protection for longevity.",
      area: "Hackney",
      timeframe: "Same-day completion"
    }
  ]
};

function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: {
      "@type": "Plumber",
      name: company.name
    },
    areaServed: "London",
    description: service.summary
  };
}

function faqSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function ServicePageTemplate({ service }: { service: Service }) {
  if (service.key === "emergency-plumber") {
    return <ApexEmergencyServiceStitch service={service} />;
  }

  const relatedServices = service.relatedServices
    .map((key) => getServiceByKey(key))
    .filter((entry): entry is Service => Boolean(entry));
  const relatedAreas = areaServicePages.filter(
    (entry) => entry.serviceKey === service.key || service.relatedAreas.includes(entry.areaSlug)
  );
  const serviceTestimonials = testimonials.filter(
    (entry) =>
      entry.service.toLowerCase().includes(service.shortTitle.toLowerCase()) ||
      entry.service.toLowerCase().includes(service.key.split("-")[0])
  );
  const processTitle = `How our ${service.shortTitle.toLowerCase()} service works`;
  const recentJobs = recentJobsByService[service.key];
  const nearbyServices = services.filter((entry) => entry.key !== service.key).slice(0, 4);
  const internalServiceLinks = Array.from(
    new Map([...relatedServices, ...nearbyServices].map((entry) => [entry.slug, entry])).values()
  ).slice(0, 6);

  return (
    <>
      <SchemaScript data={localBusinessSchema()} />
      <SchemaScript data={serviceSchema(service)} />
      {service.faqs.length > 0 ? <SchemaScript data={faqSchema(service)} /> : null}
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` }
        ])}
      />

      <section className="bg-ink bg-hero-grid bg-[size:18px_18px] text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">24/7 London plumbing team</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">{service.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">{service.heroSubheadline}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${company.phoneRaw}`} className="btn-primary">
                Call Now - Immediate Response
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Get a Free Quote
              </Link>
            </div>
            <ul className="mt-7 grid gap-3 text-sm text-slate-100 md:grid-cols-2">
              {[company.responsePromise, company.rating, service.firstVisitStat, "No hidden fees and fixed pricing promise"].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-mint text-[11px] font-bold text-white">
                    v
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <MiniLeadForm compact />
        </div>
      </section>

      <Section
        eyebrow="Why Choose Us"
        title="Why choose us in London"
        subtitle="Local coverage, transparent communication, and practical outcomes for urgent and planned jobs."
        className="bg-fog"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Engineers positioned for fast arrival across key London boroughs.",
            "Clear quote and approval before major repair work begins.",
            "Completion summaries and practical aftercare advice for every visit."
          ].map((point) => (
            <article key={point} className="surface-card p-5">
              <p className="text-sm leading-relaxed text-slate">{point}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {serviceTestimonials.length > 0
            ? serviceTestimonials.map((testimonial) => (
                <article key={testimonial.name + testimonial.date} className="surface-card p-5">
                  <p className="text-sm leading-relaxed text-slate">{testimonial.quote}</p>
                  <p className="mt-3 text-sm font-semibold text-ink">
                    {testimonial.name} - {testimonial.area}
                  </p>
                  <p className="text-xs text-steel">{testimonial.date}</p>
                </article>
              ))
            : [
                "High first-visit resolution rates across London postcodes.",
                "Polite communication for homeowners, landlords, and tenants.",
                "Tidy working practices with clear handover notes."
              ].map((fallback) => (
                <article key={fallback} className="surface-card p-5">
                  <p className="text-sm leading-relaxed text-slate">{fallback}</p>
                </article>
              ))}
        </div>
        <div className="mt-6">
          <TrustBadgeRow />
        </div>
        <div className="mt-8">
          <Link href="/contact" className="btn-primary">
            Request Quote
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Process"
        title={processTitle}
        subtitle="A clear step-by-step process so you know what happens from first call to final fix."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {service.process.map((step, index) => (
            <article key={step} className="surface-card card-interactive p-5" data-reveal data-reveal-delay={index * 120}>
              <p className="text-xs font-semibold uppercase tracking-wider text-mint">Step {index + 1}</p>
              <p className="mt-2 text-sm font-semibold text-ink">{step}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing"
        title="Pricing expectations"
        subtitle="Typical cost ranges to help you plan before booking."
        className="bg-fog"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <article className="surface-card card-interactive p-5" data-reveal data-reveal-delay="0">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Callout Fee</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">{service.pricing.callout}</p>
          </article>
          <article className="surface-card card-interactive p-5" data-reveal data-reveal-delay="120">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Typical Repair Range</p>
            <p className="mt-2 font-display text-3xl font-semibold text-ink">{service.pricing.typicalRange}</p>
          </article>
          <article className="surface-card card-interactive p-5" data-reveal data-reveal-delay="240">
            <p className="text-xs font-semibold uppercase tracking-wider text-steel">Pricing Policy</p>
            <p className="mt-2 text-sm leading-relaxed text-slate">{service.pricing.note}</p>
          </article>
        </div>
        <CallToActionPanel
          className="mt-8"
          title="Need urgent support today?"
          subtitle="Call now for immediate triage and the earliest available engineer slot."
        />
      </Section>

      <Section
        eyebrow="Recent Jobs"
        title="Recent jobs in London"
        subtitle="Recent examples of how we solved similar issues across London."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {recentJobs.map((job, index) => (
            <article
              key={job.title}
              className="surface-card card-interactive p-6"
              data-reveal
              data-reveal-delay={index * 120}
            >
              <h3 className="text-base font-semibold text-ink">{job.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{job.detail}</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-mint">
                {job.area} - {job.timeframe}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {service.faqs.length > 0 ? (
        <Section
          eyebrow="FAQs"
          title={`${service.shortTitle} FAQs`}
          subtitle="Direct answers to common booking, timing, and pricing questions."
          className="bg-fog"
        >
          <FaqList items={service.faqs} />
        </Section>
      ) : null}

      <Section
        eyebrow="Coverage"
        title="Areas we cover"
        subtitle="Find nearby area pages and related services."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <article className="surface-card card-interactive p-6" data-reveal data-reveal-delay="0">
            <h3 className="font-display text-2xl font-semibold text-ink">London area pages</h3>
            <ul className="mt-4 space-y-2">
              {relatedAreas.slice(0, 6).map((area) => (
                <li key={`${area.areaSlug}-${area.serviceRouteSegment}`}>
                  <Link
                    href={`/areas/${area.areaSlug}/${area.serviceRouteSegment}`}
                    className="text-sm font-semibold text-ink transition hover:text-accent"
                  >
                    {area.title}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
          <article className="surface-card card-interactive p-6" data-reveal data-reveal-delay="120">
            <h3 className="font-display text-2xl font-semibold text-ink">Other plumbing services</h3>
            <ul className="mt-4 space-y-2">
              {internalServiceLinks.map((entry) => (
                <li key={entry.slug}>
                  <Link href={`/services/${entry.slug}`} className="text-sm font-semibold text-ink transition hover:text-accent">
                    {entry.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/pricing" className="text-sm font-semibold text-ink transition hover:text-accent">
                  View pricing guide
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-semibold text-ink transition hover:text-accent">
                  Request a quote
                </Link>
              </li>
            </ul>
          </article>
        </div>
      </Section>
    </>
  );
}
