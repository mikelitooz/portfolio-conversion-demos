import type { Metadata } from "next";
import { StoreFooter } from "@/components/northline/StoreFooter";
import { StoreHeader } from "@/components/northline/StoreHeader";
import { StoreUtilityBar } from "@/components/northline/StoreUtilityBar";

export const metadata: Metadata = {
  title: "Northline Desk | Premium Workspace Accessories",
  description:
    "High-converting Shopify-style storefront demo for minimalist desk setup accessories focused on UK professionals."
};

export default function NorthlineLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white text-[#111827]">
      <StoreUtilityBar />
      <StoreHeader />
      <main>{children}</main>
      <StoreFooter />
    </div>
  );
}
