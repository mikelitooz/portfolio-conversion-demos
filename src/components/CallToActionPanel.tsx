import Link from "next/link";
import { company } from "@/lib/content";

type CallToActionPanelProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function CallToActionPanel({ title, subtitle, className = "" }: CallToActionPanelProps) {
  return (
    <div
      className={`rounded-3xl border border-ink/10 bg-gradient-to-r from-ink to-slate p-8 text-white shadow-soft ${className}`}
      data-reveal
    >
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-100">{subtitle}</p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href={`tel:${company.phoneRaw}`} className="btn-primary cta-interactive">
          Call {company.phoneDisplay}
        </Link>
        <Link href="/contact" className="btn-ghost-light cta-interactive">
          Request Quote
        </Link>
      </div>
    </div>
  );
}
