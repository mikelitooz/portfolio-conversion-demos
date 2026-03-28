import Link from "next/link";
import { company } from "@/lib/content";

export function EmergencyBar() {
  return (
    <div className="bg-[#0f1930] text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-2 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] sm:flex-row sm:px-6 lg:px-8">
        <p>24/7 Emergency Plumber in London. Fast response. Clear pricing. Fully insured engineers.</p>
        <Link
          className="inline-flex rounded-full bg-[#ff6b35] px-4 py-1.5 text-[11px] font-semibold normal-case tracking-normal text-white transition hover:brightness-95"
          href={`tel:${company.phoneRaw}`}
        >
          Call {company.phoneDisplay}
        </Link>
      </div>
    </div>
  );
}
