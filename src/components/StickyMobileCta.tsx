import Link from "next/link";
import { company } from "@/lib/content";

export function StickyMobileCta() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
      <div className="mx-auto flex w-full max-w-6xl items-center gap-3">
        <Link
          href={`tel:${company.phoneRaw}`}
          className="btn-secondary flex-1"
        >
          Call Now
        </Link>
        <Link href="/contact" className="btn-primary flex-1">
          Get Quote
        </Link>
      </div>
    </div>
  );
}
