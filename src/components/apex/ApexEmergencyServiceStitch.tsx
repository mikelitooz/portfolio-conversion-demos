import Link from "next/link";
import { SchemaScript } from "@/components/SchemaScript";
import { areaServicePages, company, Service } from "@/lib/content";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/seo";

const recentJobs = [
  {
    title: "Urgent Boiler Repair in Islington",
    detail: "Restored heating for a family home in under 45 minutes.",
    area: "Islington"
  },
  {
    title: "Burst Pipe Containment in Fulham",
    detail: "Isolated and repaired a burst pipe before secondary damage spread.",
    area: "Fulham"
  },
  {
    title: "Blocked Drain in Chelsea",
    detail: "Cleared severe blockage and restored full drainage same visit.",
    area: "Chelsea"
  },
  {
    title: "Radiator Flush in Hackney",
    detail: "Removed heavy sludge buildup and improved heat distribution.",
    area: "Hackney"
  }
];

const whyChoosePoints = [
  {
    title: "60-Minute Arrival",
    detail: "Average emergency response target across key London boroughs."
  },
  {
    title: "Gas Safe Registered",
    detail: "All heating and gas work performed by certified engineers."
  },
  {
    title: "Transparent Pricing",
    detail: "Clear quote before major repair work begins."
  }
];

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

export function ApexEmergencyServiceStitch({ service }: { service: Service }) {
  const coverageAreas = areaServicePages
    .filter((entry) => entry.serviceKey === service.key || service.relatedAreas.includes(entry.areaSlug))
    .slice(0, 6);

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

      <section className="relative min-h-[74vh] overflow-hidden">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVJ-aT2ytKIycYkd6Il3eiQN2c1_fyyqk0tjxhypLgCG4dSWSgGOKyYt875ictQN1gMe0G1KwwJYtOePyJ-llfG2i46LwslUf8zUlydhDCIIdt4lY53-bw2-lGIGugfHUQITUG3VNfzskxpYDntsiL9PM1pRtC5TA7mkY8nqxJHznhoRW5Ur9ywgVTLU4rI8tJZNTEuebVRk_XZuAJQeasakwLTITV4Z7tCdh0xVLG1DOeGrKQ8eQ09uf1LivmSIeW4dbhlUZgg_mk"
          alt="Emergency plumber working in a London property"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141b2b]/90 via-[#141b2b]/60 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-[#ff9f1c] px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#2c1700]">
              24/7 Rapid Response
            </p>
            <h1 className="mt-6 font-display text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Emergency Plumber <span className="text-[#ff9f1c]">London</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-200 md:text-xl">
              Expert Gas Safe engineers arriving fast across London with clear pricing and no hidden fees.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href={`tel:${company.phoneRaw}`} className="inline-flex items-center justify-center rounded-full bg-[#ff9f1c] px-8 py-4 text-lg font-semibold text-[#2c1700] transition hover:brightness-95">
                Emergency Call Now
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/35 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white/10">
                View Fixed Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">
              London&apos;s trusted emergency response team
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              We do not just fix urgent plumbing failures. We restore confidence with fast arrival, clear diagnostics,
              and practical communication from first call to completion.
            </p>
            <div className="mt-8 space-y-5">
              {whyChoosePoints.map((item) => (
                <article key={item.title} className="rounded-2xl border border-slate-200 bg-[#f7f9ff] p-5">
                  <h3 className="font-display text-2xl font-semibold text-[#141b2b]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_teO1AXMQIF_HeTpdHEqvDJ1Ty5uko9jEGBRwKteH0nUfMUnAqvv62k9vJ1WeVhD8KZypTQg_4YpdMeVV3BwCzuDg9ivWfruzd3HyqzriAXah5kFMZOFwTihy3UpHVvzxd3nQeBTOejIrWkLXP8V9iNwXE974Uos-MYTIWJY5JetP6Njyi6hIvljx-Hpi8AbPqInqrO7XtGdhGLfrHSN0V7FXPc3yXGb1IjyRO0hw6Cywyac9Uq08e9KFg28ZvCD4EEl1cjtVy-PN"
              alt="Plumbing tool kit"
              className="h-64 w-full rounded-2xl object-cover shadow-soft"
            />
            <div className="rounded-2xl bg-[#141b2b] p-6 text-white shadow-soft">
              <p className="text-4xl font-semibold text-[#ff9f1c]">4.9/5</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-300">Google rating</p>
            </div>
            <div className="rounded-2xl bg-[#fff4e8] p-6 shadow-soft">
              <p className="text-4xl font-semibold text-[#895100]">15k+</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Jobs completed</p>
            </div>
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEpVP7RvuTQJi7boQJV86hFnoifa66R1O_VGBR4XYGuyLCxzDk9rOCCR32ySJwIcY1XCBcMpgvoW4vrggnufSx9L5cb4wtWlxHFBImO0-hwRaxQyZ6SYY5Iu-OS8SWhxuMfBxZ5EkmDfjhD2Fw2ZDm6dghfAcQfksUPRZRebAVdt9yRp_ll5S2oaPgRpJoQ-cRt_oAt8hq13WkM5yUsJawhdSZ85oEqBJ6J39eKlnW5lx-H8YCQo-EHFdx70CmJGEB9SoAqK5F55_-"
              alt="Engineer and satisfied customer"
              className="h-64 w-full rounded-2xl object-cover shadow-soft"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6ff] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">
            How our emergency plumbing works
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {service.process.map((step, index) => (
              <article key={step} className="rounded-2xl bg-white p-6 shadow-soft">
                <p className="text-5xl font-semibold text-slate-200">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-2xl font-semibold text-[#141b2b]">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">
            Pricing expectations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-600">
            Clear starting rates. Final quote confirmed on-site before major works begin.
          </p>
          <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-soft">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#141b2b] text-white">
                  <th className="px-5 py-4 text-left text-sm font-semibold">Service Type</th>
                  <th className="px-5 py-4 text-left text-sm font-semibold">Starting From</th>
                  <th className="px-5 py-4 text-right text-sm font-semibold">Availability</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="px-5 py-4 text-sm font-medium text-[#141b2b]">Emergency Call-Out</td>
                  <td className="px-5 py-4 text-sm font-semibold text-[#ff6b35]">{service.pricing.callout}</td>
                  <td className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">24/7 Live</td>
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="px-5 py-4 text-sm font-medium text-[#141b2b]">Typical Repair Range</td>
                  <td className="px-5 py-4 text-sm font-semibold text-[#ff6b35]">{service.pricing.typicalRange}</td>
                  <td className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em] text-emerald-700">24/7 Live</td>
                </tr>
                <tr className="border-t border-slate-200 bg-[#fff4e8]">
                  <td className="px-5 py-4 text-sm font-medium text-[#141b2b]">Late Night Priority</td>
                  <td className="px-5 py-4 text-sm font-semibold text-[#ff6b35]">From GBP 110</td>
                  <td className="px-5 py-4 text-right text-xs font-semibold uppercase tracking-[0.14em] text-amber-700">Priority</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-[#141b2b] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">Recent jobs in London</h2>
              <p className="mt-3 max-w-xl text-slate-300">Recent emergency and rapid-response jobs completed by our engineers.</p>
            </div>
            <Link href="/reviews" className="text-sm font-semibold text-[#ff9f1c] hover:text-white">
              View more case snapshots
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {recentJobs.map((job) => (
              <article key={job.title} className="rounded-2xl border border-slate-700 bg-[#1b2438] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#ff9f1c]">{job.area}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{job.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{job.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3ff] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">Areas we cover</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              We cover boroughs across London, with focused response in high-demand central and north zones.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {coverageAreas.map((area) => (
                <Link
                  key={area.title}
                  href={`/areas/${area.areaSlug}/${area.serviceRouteSegment}`}
                  className="rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#141b2b] shadow-soft transition hover:text-[#ff6b35]"
                >
                  {area.areaName}
                </Link>
              ))}
            </div>
          </div>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqUQUKQNP1pyhJ4ev6WjTG0JxRaEcrCdKycl6V6tpW80DsuIo899QN6kaVxWv1NSmsFrlQu2lmT-c8asZ91ggK5tC0-fDA-9dt8CAebjypZ9ajCG_IXW1dUmcccg29FDTa4a435Rl9LS5CVgTUzkR8rnKJ0UL826Hx-ckyOGgsr8ruZHIzbx3QU2C-BgR4DP4_tlakNH7LLr77NqpkIrUAvOaJI_Zrio3F6yL67uVY72GeyAfu6KrVaz14NZpuRLXRK1QxrhQFs3hl"
            alt="London coverage map"
            className="h-[380px] w-full rounded-[2rem] object-cover shadow-2xl"
          />
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#141b2b]">Frequently asked</h2>
          <div className="mt-10 space-y-4">
            {service.faqs.slice(0, 3).map((faq, index) => (
              <details key={faq.question} className="rounded-2xl border border-slate-200 bg-[#f9fbff] p-6 shadow-soft" open={index === 0}>
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#141b2b]">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#141b2b] px-8 py-14 text-center text-white shadow-2xl md:px-14 md:py-20">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">Need help right now?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-slate-200">
            Do not let a small leak become a major emergency. Our engineers are standing by.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`tel:${company.phoneRaw}`} className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#895100_0%,#ff9f1c_100%)] px-9 py-4 text-xl font-semibold text-white transition hover:brightness-95">
              Call {company.phoneDisplay}
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-9 py-4 text-xl font-semibold text-white transition hover:bg-white/20">
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
