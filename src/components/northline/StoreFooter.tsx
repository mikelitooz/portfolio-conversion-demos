import Link from "next/link";

const footerCols = [
  {
    title: "Shop",
    links: [
      { label: "Magnetic Cable Dock", href: "/northline-desk/products/magnetic-cable-dock" },
      { label: "Bundles", href: "/northline-desk#bundle" },
      { label: "Best Sellers", href: "/northline-desk#shop" }
    ]
  },
  {
    title: "Support",
    links: [
      { label: "Shipping", href: "/northline-desk#reassurance" },
      { label: "Returns", href: "/northline-desk#reassurance" },
      { label: "FAQs", href: "/northline-desk#faq" }
    ]
  },
  {
    title: "Company",
    links: [
      { label: "About Northline", href: "/northline-desk" },
      { label: "Reviews", href: "/northline-desk#reviews" },
      { label: "Contact", href: "/northline-desk#footer" }
    ]
  }
];

export function StoreFooter() {
  return (
    <footer id="footer" className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-10 px-8 py-20 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-xl font-semibold text-zinc-900">Northline Desk</p>
          <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
            Copyright {new Date().getFullYear()} Northline Desk. London, UK.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {footerCols.flatMap((column) => column.links).slice(0, 4).map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 transition hover:text-[#111827]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <span className="text-xs font-semibold text-slate-400">IG</span>
          <span className="text-xs font-semibold text-slate-400">X</span>
        </div>
      </div>
    </footer>
  );
}
