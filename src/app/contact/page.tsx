import { MiniLeadForm } from "@/components/MiniLeadForm";
import { Section } from "@/components/Section";
import { TrustBadgeRow } from "@/components/TrustBadgeRow";
import { company, ctaVariants } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Apex Plumbing London",
  description:
    "Call Apex Plumbing London for urgent help or request a quote for plumbing and boiler services.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Contact Us</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Book a London Plumber Fast
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
              For emergencies, calling is quickest. For planned work, send a quote request and preferred time.
            </p>
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-steel">Call Us</p>
              <a href={`tel:${company.phoneRaw}`} className="mt-2 block font-display text-3xl font-semibold text-ink">
                {company.phoneDisplay}
              </a>
              <p className="mt-3 text-sm text-steel">{company.openingHours}</p>
              <p className="mt-1 text-sm text-steel">{company.addressLine}</p>
            </div>
          </div>
          <MiniLeadForm />
        </div>
      </section>

      <Section
        eyebrow="Trust"
        title="Why customers convert on this page"
        subtitle="Clear next step, transparent response promise, and visible trust signals."
      >
        <TrustBadgeRow />
        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm leading-relaxed text-steel">
            CTA variations tested for service businesses:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {ctaVariants.map((cta) => (
              <li key={cta} className="rounded-full bg-fog px-3 py-1.5 text-xs font-semibold text-ink">
                {cta}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
