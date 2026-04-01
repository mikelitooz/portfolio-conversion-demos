"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
      return () => {
        document.body.classList.remove("mobile-menu-open");
        document.body.style.overflow = "";
      };
    }

    document.body.classList.remove("mobile-menu-open");
    document.body.style.overflow = "";
    return undefined;
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto w-full max-w-7xl px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 rounded-full bg-white px-5 py-3 shadow-sm ring-1 ring-slate-200">
            <div className="flex items-center gap-3">
              <Link href="/" className="font-display text-lg font-semibold tracking-tight text-ink sm:text-xl">
                Apex Plumbing London
              </Link>
              <span className="hidden rounded-full bg-fog px-2 py-1 text-xs font-medium text-steel sm:inline-block">
                Rated Excellent
              </span>
            </div>

            <nav className="hidden min-[769px]:flex items-center gap-6">
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

            <div className="hidden min-[769px]:flex items-center gap-2">
              <Link
                href={`tel:${company.phoneRaw}`}
                className="cta-interactive rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-ink transition hover:border-[#ff6b35] hover:text-[#ff6b35]"
              >
                {company.phoneDisplay}
              </Link>
              <Link
                href="/contact"
                className="cta-interactive rounded-full bg-[#ff6b35] px-4 py-2 text-sm font-semibold text-white transition hover:brightness-95"
              >
                Request a Quote
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate transition hover:border-[#ff6b35] hover:text-[#ff6b35] min-[769px]:hidden"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open menu</span>
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[70] min-[769px]:hidden ${isMenuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!isMenuOpen}
      >
        <button
          type="button"
          onClick={() => setIsMenuOpen(false)}
          className={`absolute inset-0 bg-ink/55 transition-opacity duration-300 ease-out ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close mobile menu overlay"
        />

        <aside
          className={`absolute right-0 top-0 flex h-full w-[min(88vw,22rem)] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <p className="font-display text-lg font-semibold text-ink">Menu</p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 text-slate transition hover:border-[#ff6b35] hover:text-[#ff6b35]"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12" />
                <path d="M18 6l-12 12" />
              </svg>
            </button>
          </div>

          <nav className="mt-5 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-3 py-3 text-base font-semibold text-ink transition hover:bg-fog hover:text-[#ff6b35]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto space-y-3 border-t border-slate-200 pt-5">
            <Link
              href={`tel:${company.phoneRaw}`}
              className="cta-interactive inline-flex w-full items-center justify-center rounded-full border border-slate-300 px-4 py-3 text-sm font-semibold text-ink transition hover:border-[#ff6b35] hover:text-[#ff6b35]"
            >
              Call {company.phoneDisplay}
            </Link>
            <Link
              href="/contact"
              className="cta-interactive inline-flex w-full items-center justify-center rounded-full bg-[#ff6b35] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
            >
              Request a Quote
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}
