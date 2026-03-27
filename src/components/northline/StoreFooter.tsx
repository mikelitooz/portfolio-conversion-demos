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
    <footer id="footer" className="border-t border-slate-200 bg-[#fafafa]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-display text-xl font-semibold text-[#111827]">Northline Desk</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Premium accessories for UK professionals, creators, and remote teams who want a cleaner, faster desk setup.
          </p>
        </div>
        {footerCols.map((column) => (
          <div key={column.title}>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">{column.title}</h4>
            <ul className="mt-3 space-y-2">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm font-semibold text-slate-700 transition hover:text-[#111827]">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-200">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>Copyright {new Date().getFullYear()} Northline Desk. All rights reserved.</p>
          <p>Built for conversion-focused ecommerce demos.</p>
        </div>
      </div>
    </footer>
  );
}
