"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "apex-exit-intent-dismissed";

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
    if (typeof window === "undefined") {
      return;
    }

    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      return;
    }

    const handleMouseLeave = (event: MouseEvent) => {
      if (window.innerWidth < 1024) {
        return;
      }
      if (event.clientY <= 8) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!isReady || !isVisible) {
    return null;
  }

  const close = () => {
    setIsVisible(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "true");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/55 px-4">
      <div className="w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-soft md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Limited Offer</p>
            <h3 className="mt-2 font-display text-3xl font-semibold tracking-tight text-ink">
              Get GBP 25 off your first service
            </h3>
          </div>
          <button
            type="button"
            onClick={close}
            className="rounded-full border border-slate-300 px-2.5 py-1 text-sm font-semibold text-slate transition hover:border-slate-500 hover:text-ink"
            aria-label="Close offer popup"
          >
            X
          </button>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-steel">
          Leave your details and postcode now. We will apply the discount when your first service is booked.
        </p>
        <form action="/thank-you" className="mt-5 grid gap-3 sm:grid-cols-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-steel sm:col-span-2">
            Email
            <input
              required
              type="email"
              name="email"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
            />
          </label>
          <label className="text-xs font-semibold uppercase tracking-wider text-steel">
            Postcode
            <input
              required
              type="text"
              name="postcode"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
            />
          </label>
          <label className="text-xs font-semibold uppercase tracking-wider text-steel">
            Problem Type
            <select
              name="problemType"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
              defaultValue="Emergency Leak"
            >
              <option>Emergency Leak</option>
              <option>Boiler Breakdown</option>
              <option>Blocked Drain</option>
              <option>Leak Detection</option>
            </select>
          </label>
          <button type="submit" className="btn-primary sm:col-span-2">
            Claim Discount + Get Quote
          </button>
        </form>
        <div className="mt-4 flex items-center justify-between gap-3">
          <button
            type="button"
            onClick={close}
            className="text-xs font-semibold uppercase tracking-wider text-steel transition hover:text-ink"
          >
            No thanks
          </button>
          <Link href="/contact" className="text-sm font-semibold text-ink transition hover:text-accent">
            Prefer full quote form?
          </Link>
        </div>
      </div>
    </div>
  );
}
