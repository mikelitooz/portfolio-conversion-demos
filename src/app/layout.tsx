import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import { ChromeGate } from "@/components/ChromeGate";
import { company } from "@/lib/content";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  variable: "--font-display"
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  title: `${company.name} | Emergency Plumbing & Boiler Services`,
  description:
    "Emergency plumbing and boiler repair across London. Fast response, transparent pricing, and trusted local engineers.",
  metadataBase: new URL("https://www.apexplumbinglondon.co.uk")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="font-body text-ink antialiased">
        <ChromeGate>{children}</ChromeGate>
      </body>
    </html>
  );
}
