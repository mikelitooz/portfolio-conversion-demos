"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "apex-offer-dismissed-session";
const ANIMATION_MS = 300;

export function ExitIntentPopup() {
  const [isMounted, setIsMounted] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const hasTriggeredRef = useRef(false);
  const closeTimerRef = useRef<number | null>(null);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window === "undefined") {
      return;
    }

    const dismissed = window.sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) {
      return;
    }

    const showPopup = () => {
      if (hasTriggeredRef.current) {
        return;
      }

      hasTriggeredRef.current = true;
      setIsRendered(true);
      requestAnimationFrame(() => setIsVisible(true));
    };

    const timerId = window.setTimeout(showPopup, 5000);

    const handleScrollDepth = () => {
      if (window.scrollY >= window.innerHeight * 0.5) {
        window.clearTimeout(timerId);
        showPopup();
      }
    };

    window.addEventListener("scroll", handleScrollDepth, { passive: true });

    return () => {
      window.clearTimeout(timerId);
      window.removeEventListener("scroll", handleScrollDepth);
      if (closeTimerRef.current) {
        window.clearTimeout(closeTimerRef.current);
      }
    };
  }, []);

  const setDismissed = () => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem(STORAGE_KEY, "true");
    }
  };

  const close = () => {
    setDismissed();
    setIsVisible(false);
    if (typeof window !== "undefined") {
      closeTimerRef.current = window.setTimeout(() => {
        setIsRendered(false);
      }, ANIMATION_MS);
    }
  };

  const handleSubmit = (_event: FormEvent<HTMLFormElement>) => {
    setDismissed();
  };

  if (!isMounted || !isRendered) {
    return null;
  }

  return (
    <div
      data-popup-overlay
      className={`fixed inset-0 z-[80] flex items-center justify-center bg-ink/55 px-4 transition-opacity duration-300 ease-out ${
        isVisible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        data-popup-panel
        className={`w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 ease-out md:p-8 ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
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
        <form action="/thank-you" className="mt-5 grid gap-3 sm:grid-cols-2" onSubmit={handleSubmit}>
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
