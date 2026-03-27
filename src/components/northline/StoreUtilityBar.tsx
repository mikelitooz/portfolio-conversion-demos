import Link from "next/link";
import { northlineBrand } from "@/lib/northline/content";

export function StoreUtilityBar() {
  return (
    <div className="bg-[#111827] text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <p className="font-semibold">{northlineBrand.shippingMessage}</p>
        <p className="text-slate-200">{northlineBrand.dispatchMessage}</p>
        <Link href="/northline-desk/products/magnetic-cable-dock" className="font-semibold text-white underline-offset-2 hover:underline">
          Shop Magnetic Cable Dock
        </Link>
      </div>
    </div>
  );
}
