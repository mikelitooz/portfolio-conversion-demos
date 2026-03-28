import Link from "next/link";
import { primaryNav } from "@/lib/northline/content";

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between gap-4 px-6 md:px-8">
        <Link href="/northline-desk" className="font-display text-xl font-semibold tracking-tight text-[#111827]">
          Northline Desk
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-tight text-slate-600 transition hover:text-[#111827]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="rounded-lg p-2.5 text-sm font-semibold text-[#111827] transition hover:bg-slate-100">Search</button>
          <button className="rounded-lg bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">Cart</button>
        </div>
      </div>
      <nav className="border-t border-slate-200 px-6 py-3 md:hidden">
        <div className="mx-auto flex max-w-[1440px] items-center gap-4 overflow-x-auto">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.1em] text-slate-700">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
