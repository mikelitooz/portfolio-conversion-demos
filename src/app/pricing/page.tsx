import Link from "next/link";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Plumbing Pricing Guide London",
  description:
    "Understand emergency plumbing and boiler service pricing expectations in London before booking.",
  path: "/pricing"
});

export default function PricingPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Pricing Guide</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Clear Pricing Expectations Before You Book
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            These ranges help set expectations. Final pricing is confirmed after diagnosis and before major work.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Typical Ranges"
        title="What London customers usually pay"
        subtitle="Use this as guidance for planning and comparison."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { item: "Emergency Callout", price: "From £89", note: "Urgent attendance and initial diagnosis." },
            { item: "Boiler Repair", price: "£140 to £520", note: "Depends on fault complexity and parts needed." },
            { item: "Blocked Drains", price: "£95 to £290", note: "Recurring issues may require CCTV diagnostics." },
            { item: "Leak Detection", price: "£150 to £430", note: "Non-invasive tracing preferred first." },
            { item: "Boiler Service", price: "£95 to £140", note: "Annual maintenance and safety checks." },
            { item: "Power Flushing", price: "£380 to £720", note: "Depends on radiator count and system condition." }
          ].map((entry) => (
            <article key={entry.item} className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-steel">{entry.item}</p>
              <p className="mt-2 font-display text-3xl font-semibold text-ink">{entry.price}</p>
              <p className="mt-2 text-sm leading-relaxed text-steel">{entry.note}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Pricing Policy"
        title="No hidden extras commitment"
        subtitle="If scope changes, we explain why and confirm revised pricing before continuing."
        className="bg-fog"
      >
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <p className="text-sm leading-relaxed text-steel">
            Pricing can vary based on access restrictions, parts availability, and structural constraints in older
            properties. Your engineer will always explain options and get approval first.
          </p>
          <Link href="/faq" className="mt-4 inline-flex text-sm font-semibold text-ink hover:text-accent">
            Read pricing FAQs →
          </Link>
        </div>
      </Section>

      <Section eyebrow="Book" title="Want a confirmed quote today?" subtitle="Call now or submit details in our quote form.">
        <CallToActionPanel
          title="Speak to our London team"
          subtitle="We will provide practical guidance and confirm the next available engineer."
        />
      </Section>
    </>
  );
}
