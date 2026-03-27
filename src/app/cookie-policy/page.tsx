import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Cookie Policy | Apex Plumbing London",
  description: "Cookie usage policy for Apex Plumbing London.",
  path: "/cookie-policy"
});

export default function CookiePolicyPage() {
  return (
    <Section
      eyebrow="Legal"
      title="Cookie Policy"
      subtitle="Prototype cookie policy placeholder. Replace with CMP-integrated policy for production."
      className="bg-mesh"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-steel">
        <p>
          This prototype may use essential and analytics-style cookies to understand page performance and user journeys.
          A production site should include a compliant consent management layer.
        </p>
      </div>
    </Section>
  );
}
