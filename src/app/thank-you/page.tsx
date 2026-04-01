import Link from "next/link";
import { Section } from "@/components/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Thank You | Apex Plumbing London",
  description: "Thanks for your quote request. We will contact you shortly with next steps.",
  path: "/thank-you"
});

export default function ThankYouPage() {
  return (
    <Section
      eyebrow="Request Received"
      title="Thank you. Your quote request has been received."
      subtitle="A member of the Apex team will contact you shortly. If your issue is urgent, call now for priority response."
      className="bg-mesh"
    >
      <div className="card-interactive rounded-2xl border border-slate-200 bg-white p-6" data-reveal>
        <p className="text-sm leading-relaxed text-steel">
          We have your details and will follow up with availability and next steps. For active leaks or no-heat/no-water
          emergencies, please call immediately.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="tel:02012345678"
            className="cta-interactive rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
          >
            Call Emergency Line
          </Link>
          <Link
            href="/"
            className="cta-interactive rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Return Home
          </Link>
        </div>
      </div>
    </Section>
  );
}
