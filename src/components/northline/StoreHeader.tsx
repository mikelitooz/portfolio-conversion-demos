import Link from "next/link";
import { primaryNav } from "@/lib/northline/content";

export function StoreHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/northline-desk" className="font-display text-xl font-semibold tracking-tight text-[#111827]">
          Northline Desk
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-semibold text-slate-700 transition hover:text-[#111827]">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700">Search</button>
          <button className="rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">View Cart</button>
        </div>
      </div>
      <nav className="border-t border-slate-200 px-4 py-3 md:hidden sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center gap-4 overflow-x-auto">
          {primaryNav.map((item) => (
            <Link key={item.href} href={item.href} className="whitespace-nowrap text-sm font-semibold text-slate-700">
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
