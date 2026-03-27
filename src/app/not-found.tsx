import Link from "next/link";
import { Section } from "@/components/Section";

export default function NotFound() {
  return (
    <Section
      eyebrow="404"
      title="Page not found"
      subtitle="The page may have moved or the URL may be incorrect."
      className="bg-mesh"
    >
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-ink px-5 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </Section>
  );
}
