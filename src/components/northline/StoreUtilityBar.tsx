import Link from "next/link";
import { northlineBrand } from "@/lib/northline/content";

export function StoreUtilityBar() {
  return (
    <div className="bg-[#111827] px-6 py-2.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white md:text-xs">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-2 md:flex-row md:gap-10">
        <p>{northlineBrand.shippingMessage}</p>
        <span className="hidden opacity-30 md:inline">|</span>
        <p>{northlineBrand.dispatchMessage}</p>
        <span className="hidden opacity-30 md:inline">|</span>
        <Link
          href="/northline-desk/products/magnetic-cable-dock"
          className="underline underline-offset-4 transition hover:opacity-80"
        >
          Shop Cable Dock
        </Link>
      </div>
    </div>
  );
}
