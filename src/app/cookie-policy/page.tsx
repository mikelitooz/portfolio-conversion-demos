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
      subtitle="How we use cookies to improve site performance and customer experience."
      className="bg-mesh"
    >
      <div className="card-interactive rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-steel" data-reveal>
        <p>
          We use essential cookies to keep core website functions working and analytics cookies to understand how visitors
          use the site so we can improve performance.
        </p>
      </div>
    </Section>
  );
}
