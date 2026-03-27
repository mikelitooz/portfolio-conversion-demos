import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms & Conditions | Apex Plumbing London",
  description: "Terms and service conditions for Apex Plumbing London.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <Section
      eyebrow="Legal"
      title="Terms & Conditions"
      subtitle="Prototype placeholder terms. Replace with legally reviewed terms before production launch."
      className="bg-mesh"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-steel">
        <p>
          Service pricing is confirmed after diagnosis and before major work. Emergency attendance windows are estimated
          and may vary due to traffic or active high-priority incidents.
        </p>
        <p className="mt-3">
          Warranty, payment, cancellation, and liability clauses should be finalised with legal review for live use.
        </p>
      </div>
    </Section>
  );
}
