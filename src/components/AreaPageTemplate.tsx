import Link from "next/link";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { FaqList } from "@/components/FaqList";
import { MiniLeadForm } from "@/components/MiniLeadForm";
import { SchemaScript } from "@/components/SchemaScript";
import { Section } from "@/components/Section";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import {
  AreaServicePage,
  company,
  getServiceByKey,
  services,
  testimonials
} from "@/lib/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo";

const areaReferences: Record<string, string[]> = {
  camden: ["Camden Town", "Kentish Town", "Regent's Canal"],
  islington: ["Angel", "Upper Street", "Clerkenwell edge"],
  hackney: ["London Fields", "Hackney Central", "Hackney Wick"],
  westminster: ["Pimlico", "Marylebone", "Victoria"],
  greenwich: ["Greenwich Peninsula", "SE10 town centre", "Maze Hill"],
  lambeth: ["Brixton", "Clapham edge", "Waterloo belt"]
};

function areaServiceSchema(page: AreaServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    areaServed: page.areaName,
    provider: {
      "@type": "Plumber",
      name: company.name
    },
    description: page.intro
  };
}

function areaFaqSchema(page: AreaServicePage) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

export function AreaPageTemplate({ page }: { page: AreaServicePage }) {
  const service = getServiceByKey(page.serviceKey);
  const localTestimonials = testimonials.filter((item) => item.area === page.areaName).slice(0, 2);
  const additionalServices = services.filter((item) => item.key !== page.serviceKey).slice(0, 4);
  const localReferenceItems = areaReferences[page.areaSlug] ?? [page.areaName];

  return (
    <>
      <SchemaScript data={localBusinessSchema()} />
      <SchemaScript data={areaServiceSchema(page)} />
      {page.faq.length > 0 ? <SchemaScript data={areaFaqSchema(page)} /> : null}
      <SchemaScript
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Areas", path: "/areas" },
          { name: page.areaName, path: `/areas/${page.areaSlug}/${page.serviceRouteSegment}` }
        ])}
      />

      <section className="bg-ink text-white">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Area service page</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">{page.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">{page.intro}</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href={`tel:${company.phoneRaw}`} className="btn-primary">
                Call Now
              </Link>
              <Link href="/contact" className="btn-ghost-light">
                Request Quote
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-100">
              Typical response in {page.areaName}: 45 to 90 minutes depending on demand and traffic.
            </p>
          </div>
          <MiniLeadForm compact />
        </div>
      </section>

      <Section
        eyebrow="Local Intro"
        title={`How we help in ${page.areaName}`}
        subtitle="Area-specific context that avoids duplicate or keyword-stuffed content."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {page.localScenarios.map((scenario) => (
            <article key={scenario} className="surface-card p-5">
              <p className="text-sm leading-relaxed text-slate">{scenario}</p>
            </article>
          ))}
        </div>
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-mint">Local references</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {localReferenceItems.map((reference) => (
              <li key={reference} className="rounded-full bg-fog px-3 py-1.5 text-xs font-semibold text-ink">
                {reference}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section
        eyebrow="Services"
        title={`Services available in ${page.areaName}`}
        subtitle="Internal service links that help users and improve SEO crawl paths."
        className="bg-fog"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="surface-card p-6">
            <h3 className="font-display text-2xl font-semibold text-ink">{service?.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel">{service?.summary}</p>
            <Link href={`/services/${service?.slug}`} className="mt-4 inline-flex text-sm font-semibold text-ink transition hover:text-accent">
              View full service page
            </Link>
          </article>
          <article className="surface-card p-6">
            <h3 className="font-display text-2xl font-semibold text-ink">Other services in this area</h3>
            <ul className="mt-3 space-y-2">
              {additionalServices.map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`} className="text-sm font-semibold text-ink transition hover:text-accent">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Section>

      <Section
        eyebrow="Recent Jobs"
        title={`Recent jobs in ${page.areaName}`}
        subtitle="Local examples that make this page useful and conversion-ready."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {page.recentJobs.map((job) => (
            <article key={job.title} className="surface-card p-6">
              <h3 className="text-base font-semibold text-ink">{job.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">{job.detail}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Coverage Map"
        title={`Coverage map placeholder for ${page.areaName}`}
        subtitle="Reserved map module for local trust and geo relevance."
        className="bg-fog"
      >
        <div className="surface-card p-4">
          <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-300 bg-gradient-to-br from-fog to-white text-center">
            <div>
              <p className="font-display text-2xl font-semibold text-ink">Interactive map placeholder</p>
              <p className="mt-2 text-sm text-steel">
                Embed Google Map, service radius, and borough landmarks here during production rollout.
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-mint">
                Local focus: {localReferenceItems.join(" | ")}
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Local Trust"
        title={`Local testimonials from ${page.areaName} and nearby areas`}
        subtitle="Trust proof that supports conversion without bloated copy."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {localTestimonials.length > 0 ? (
            localTestimonials.map((item) => (
              <article key={item.name + item.date} className="surface-card p-6">
                <p className="text-sm leading-relaxed text-slate">{item.quote}</p>
                <p className="mt-3 text-sm font-semibold text-ink">
                  {item.name} - {item.area}
                </p>
              </article>
            ))
          ) : (
            <article className="surface-card p-6 md:col-span-2">
              <p className="text-sm leading-relaxed text-slate">
                Verified reviews from nearby London jobs are displayed here to provide local confidence.
              </p>
            </article>
          )}
        </div>
        <div className="mt-6">
          <TrustBadgeRow />
        </div>
      </Section>

      <Section
        eyebrow="Area FAQ"
        title={`${page.areaName} service FAQs`}
        subtitle="Answers tailored to local property types, access, and callout expectations."
        className="bg-fog"
      >
        <FaqList items={page.faq} />
      </Section>

      <Section
        eyebrow="Book Now"
        title={`Need help in ${page.areaName} today?`}
        subtitle="Phone for urgent issues or request a quote for planned jobs."
      >
        <CallToActionPanel
          title={`Speak to a ${page.areaName} plumbing specialist`}
          subtitle="Share your postcode, issue type, and urgency level. We will confirm the next available slot."
        />
      </Section>
    </>
  );
}
