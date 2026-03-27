import Link from "next/link";
import { company } from "@/lib/content";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" }
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
            Apex Plumbing London
          </Link>
          <span className="hidden rounded-full bg-fog px-2 py-1 text-xs font-medium text-steel sm:inline-block">
            Rated Excellent
          </span>
        </div>
        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href={`tel:${company.phoneRaw}`}
            className="btn-secondary hidden px-4 py-2 sm:inline-flex"
          >
            {company.phoneDisplay}
          </Link>
          <Link href="/contact" className="btn-primary px-4 py-2">
            Request a Quote
          </Link>
        </div>
      </div>
      <nav className="border-t border-slate-200 px-4 py-3 lg:hidden sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-medium text-slate">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
