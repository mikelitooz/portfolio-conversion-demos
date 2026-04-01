import Link from "next/link";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { Section } from "@/components/Section";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { company } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Apex Plumbing London",
  description:
    "Learn how Apex Plumbing London delivers transparent, high-quality emergency plumbing and boiler support across London.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">About Apex</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Trusted London Plumbing Support with Clear, Practical Service
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Apex Plumbing London exists to make urgent and planned plumbing work less stressful. We combine fast
            response, transparent quotes, and clear communication so customers always understand what is being fixed and
            why.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Our Promise"
        title="Built for reliability, clarity, and long-term trust"
        subtitle="A practical service model for homeowners, landlords, and local businesses."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Fast emergency response across London",
            "Transparent costs before major work",
            "Certified engineers and insured workmanship"
          ].map((item, index) => (
            <article
              key={item}
              className="card-interactive rounded-2xl border border-slate-200 bg-white p-6"
              data-reveal
              data-reveal-delay={index * 120}
            >
              <p className="text-sm leading-relaxed text-slate">{item}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Why Clients Stay"
        title="Professional standards from first call to final report"
        subtitle="Our process focuses on technical quality and customer confidence."
        className="bg-fog"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="card-interactive rounded-2xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="0">
            <h3 className="font-display text-2xl font-semibold text-ink">Transparent Communication</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              Every job starts with a practical discussion of urgency, possible causes, and expected costs before work
              begins.
            </p>
          </article>
          <article className="card-interactive rounded-2xl border border-slate-200 bg-white p-6" data-reveal data-reveal-delay="120">
            <h3 className="font-display text-2xl font-semibold text-ink">Accountable Completion</h3>
            <p className="mt-3 text-sm leading-relaxed text-steel">
              We provide concise completion summaries and follow-up guidance so customers can make informed maintenance
              decisions.
            </p>
          </article>
        </div>
        <div className="mt-6">
          <TrustBadgeRow />
        </div>
      </Section>

      <Section
        eyebrow="Coverage"
        title="Service coverage across London"
        subtitle="We support emergency and planned jobs in key boroughs with practical dispatch planning."
      >
        <div className="card-interactive rounded-2xl border border-slate-200 bg-white p-6" data-reveal>
          <p className="text-sm leading-relaxed text-steel">
            {company.name} operates across major London boroughs including Camden, Islington, Hackney, Westminster,
            Greenwich, and Lambeth, with additional nearby coverage depending on demand.
          </p>
          <Link href="/areas" className="mt-4 inline-flex text-sm font-semibold text-ink hover:text-accent">
            Explore area pages →
          </Link>
        </div>
      </Section>

      <Section
        eyebrow="Book"
        title="Need support today?"
        subtitle="Call for urgent issues or request a quote for planned work."
        className="bg-fog"
      >
        <CallToActionPanel
          title="Speak to Apex Plumbing London"
          subtitle="We will confirm availability, expected arrival window, and clear next steps."
        />
      </Section>
    </>
  );
}
