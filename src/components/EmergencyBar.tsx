import Link from "next/link";
import { company } from "@/lib/content";

export function EmergencyBar() {
  return (
    <div className="bg-ink text-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-2 text-xs sm:px-6 lg:px-8 sm:text-sm">
        <p className="font-medium">
          24/7 Emergency Plumber in London. Fast response. Clear pricing. Fully insured engineers.
        </p>
        <Link className="btn-primary shrink-0 px-4 py-1.5 text-xs sm:text-sm" href={`tel:${company.phoneRaw}`}>
          Call {company.phoneDisplay}
        </Link>
      </div>
    </div>
  );
}
