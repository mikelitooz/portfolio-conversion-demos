import Link from "next/link";
import { areaServicePages, company, services } from "@/lib/content";

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookie Policy", href: "/cookie-policy" }
];

export function Footer() {
  const areaLinks = areaServicePages.slice(0, 6).map((page) => ({
    label: page.areaName,
    href: `/areas/${page.areaSlug}/${page.serviceRouteSegment}`
  }));

  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-2xl font-semibold text-white">Apex Plumbing London</h3>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            London&apos;s rapid-response plumbing service for emergency and planned repairs.
          </p>
          <p className="mt-4 text-sm text-slate-400">{company.addressLine}</p>
          <a href={`tel:${company.phoneRaw}`} className="mt-3 inline-flex text-sm font-semibold text-[#ff9f1c]">
            {company.phoneDisplay}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Services</h4>
          <ul className="mt-4 space-y-2">
            {services.slice(0, 6).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-sm text-slate-400 transition hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Areas</h4>
          <ul className="mt-4 space-y-2">
            {areaLinks.map((area) => (
              <li key={area.href}>
                <Link href={area.href} className="text-sm text-slate-400 transition hover:text-white">
                  {area.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">Company</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/about" className="text-sm text-slate-400 transition hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-slate-400 transition hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/reviews" className="text-sm text-slate-400 transition hover:text-white">
                Reviews
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {new Date().getFullYear()} {company.name}. Gas Safe Registered.</p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-slate-300">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
