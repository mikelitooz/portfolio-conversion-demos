import Link from "next/link";
import { company } from "@/lib/content";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3">
        <Link
          href={`tel:${company.phoneRaw}`}
          className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-ink transition hover:border-[#ff6b35] hover:text-[#ff6b35]"
        >
          Call Now
        </Link>
        <Link href="/contact" className="flex-1 rounded-full bg-[#ff6b35] px-4 py-3 text-center text-sm font-semibold text-white transition hover:brightness-95">
          Get Quote
        </Link>
      </div>
    </div>
  );
}
