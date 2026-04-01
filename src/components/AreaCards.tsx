import Link from "next/link";
import { AreaServicePage } from "@/lib/content";

export function AreaCards({ items }: { items: AreaServicePage[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {items.map((areaPage, index) => (
        <article
          key={`${areaPage.areaSlug}-${areaPage.serviceRouteSegment}`}
          className="card-interactive rounded-2xl border border-slate-200 bg-white p-6"
          data-reveal
          data-reveal-delay={index * 120}
        >
          <h3 className="font-display text-2xl font-semibold text-ink">{areaPage.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel">{areaPage.intro}</p>
          <Link
            className="mt-5 inline-flex items-center text-sm font-semibold text-ink transition hover:text-accent"
            href={`/areas/${areaPage.areaSlug}/${areaPage.serviceRouteSegment}`}
          >
            View local page →
          </Link>
        </article>
      ))}
    </div>
  );
}
