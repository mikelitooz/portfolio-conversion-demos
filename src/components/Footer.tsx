import Link from "next/link";
import { company, services, areaServicePages, trustBadges } from "@/lib/content";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" }
];

export function Footer() {
  const areaLinks = areaServicePages.map((page) => ({
    label: `${page.areaName} ${page.serviceRouteSegment.replace("-", " ")}`,
    href: `/areas/${page.areaSlug}/${page.serviceRouteSegment}`
  }));

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-lg font-semibold text-ink">{company.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-steel">{company.addressLine}</p>
          <p className="mt-2 text-sm text-steel">{company.openingHours}</p>
          <a className="mt-2 block text-sm font-semibold text-ink" href={`tel:${company.phoneRaw}`}>
            {company.phoneDisplay}
          </a>
          <p className="mt-2 text-sm text-steel">{company.rating}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Top Services</h4>
          <ul className="mt-3 space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link className="text-sm text-steel transition hover:text-ink" href={`/services/${service.slug}`}>
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Areas We Cover</h4>
          <ul className="mt-3 space-y-2">
            {areaLinks.slice(0, 6).map((area) => (
              <li key={area.href}>
                <Link className="text-sm text-steel transition hover:text-ink" href={area.href}>
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-ink">Trust & Legal</h4>
          <ul className="mt-3 space-y-2">
            {trustBadges.slice(0, 3).map((badge) => (
              <li key={badge} className="text-sm text-steel">
                {badge}
              </li>
            ))}
            <li>
              <Link className="text-sm text-steel transition hover:text-ink" href="/reviews">
                Verified Reviews
              </Link>
            </li>
          </ul>
          <div className="mt-4 flex flex-wrap gap-3">
            {legalLinks.map((link) => (
              <Link key={link.href} className="text-xs font-medium text-steel hover:text-ink" href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-steel sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>Emergency plumbing and boiler services across London.</p>
        </div>
      </div>
    </footer>
  );
}
