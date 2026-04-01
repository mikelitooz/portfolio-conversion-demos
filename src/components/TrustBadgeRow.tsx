import { trustBadges } from "@/lib/content";

export function TrustBadgeRow() {
  return (
    <ul className="flex flex-wrap gap-2">
      {trustBadges.map((badge, index) => (
        <li
          key={badge}
          className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate"
          data-reveal
          data-reveal-delay={index * 100}
        >
          {badge}
        </li>
      ))}
    </ul>
  );
}
