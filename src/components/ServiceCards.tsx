import Link from "next/link";
import { Service } from "@/lib/content";

export function ServiceCards({ items }: { items: Service[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((service, index) => (
        <article
          key={service.slug}
          className="card-interactive flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
          data-reveal
          data-reveal-delay={index * 120}
        >
          <h3 className="font-display text-2xl font-semibold text-ink">{service.shortTitle}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel">{service.summary}</p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-mint">{service.firstVisitStat}</p>
          <Link
            href={`/services/${service.slug}`}
            className="mt-5 inline-flex items-center text-sm font-semibold text-ink transition hover:text-accent"
          >
            View service details →
          </Link>
        </article>
      ))}
    </div>
  );
}
