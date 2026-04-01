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
      subtitle="How we collect, use, and protect your personal information."
      className="bg-mesh"
    >
      <div className="card-interactive rounded-2xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-steel" data-reveal>
        <p>
          We collect contact details submitted through our forms to respond to enquiries and manage service requests.
          Data is handled responsibly and only shared with trusted operational providers when necessary.
        </p>
        <p className="mt-3">
          You can request access, correction, or deletion of your data by contacting our team directly through the
          details on the Contact page.
        </p>
      </div>
    </Section>
  );
}
