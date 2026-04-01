"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { EmergencyBar } from "@/components/EmergencyBar";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollRevealManager } from "@/components/ScrollRevealManager";
import { StickyMobileCta } from "@/components/StickyMobileCta";

export function ChromeGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isNorthline = pathname.startsWith("/northline-desk");

  if (isNorthline) {
    return <>{children}</>;
  }

  return (
    <>
      <EmergencyBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyMobileCta />
      <ScrollRevealManager />
      <ExitIntentPopup />
    </>
  );
}
