"use client";

import { useEffect, useState } from "react";

export function StickyAddToCart({ title, price }: { title: string; price: string }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 560);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur transition duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#111827]">{title}</p>
          <p className="text-xs text-slate-500">{price}</p>
        </div>
        <a href="#buy-box" className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white">
          Add to Cart
        </a>
      </div>
    </div>
  );
}
