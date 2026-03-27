import Link from "next/link";
import { FaqList } from "@/components/FaqList";
import { Section } from "@/components/Section";
import { SchemaScript } from "@/components/SchemaScript";
import { universalFaqs } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "FAQ | Apex Plumbing London",
  description: "Answers about emergency plumbing response times, pricing, booking, and service coverage in London.",
  path: "/faq"
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: universalFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function FaqPage() {
  return (
    <>
      <SchemaScript data={faqSchema} />
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">FAQ</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Practical answers to common questions about coverage, timing, and pricing.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Answers"
        title="Booking and service FAQs"
        subtitle="If your question is urgent, calling is still the fastest route."
      >
        <FaqList items={universalFaqs} />
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#e95a28]"
          >
            Request Quote
          </Link>
        </div>
      </Section>
    </>
  );
}
