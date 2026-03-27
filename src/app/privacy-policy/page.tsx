import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | Apex Plumbing London",
  description: "Privacy policy for Apex Plumbing London website enquiries and customer communication.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <Section
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="This is a placeholder policy module for prototype purposes and should be replaced with legal-approved content."
      className="bg-mesh"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-steel">
        <p>
          We collect contact details submitted through our forms to respond to enquiries and manage service requests.
          Data is handled responsibly and only shared with trusted operational providers when necessary.
        </p>
        <p className="mt-3">
          For live deployment, replace this content with full GDPR-compliant legal text tailored to your business
          operations.
        </p>
      </div>
    </Section>
  );
}
