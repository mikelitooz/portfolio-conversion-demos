"use client";

import Link from "next/link";
import { useLeadCaptureSubmit } from "@/hooks/useLeadCaptureSubmit";

export function MiniLeadForm({ compact = false }: { compact?: boolean }) {
  const { isSubmitting, errorMessage, handleLeadSubmit } = useLeadCaptureSubmit({
    source: compact ? "apex_compact_quote_form" : "apex_quote_form"
  });

  return (
    <div className={`surface-card p-5 ${compact ? "" : "md:p-6"}`} data-reveal>
      <h3 className="font-display text-xl font-semibold text-ink">Get a Free Quote in Minutes</h3>
      <p className="mt-2 text-sm text-steel">We usually respond within 10 minutes during service hours.</p>
      <form className="mt-4 space-y-3" onSubmit={handleLeadSubmit}>
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-steel">
            Name
            <input
              required
              name="name"
              type="text"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
            />
          </label>
          <label className="text-xs font-semibold uppercase tracking-wider text-steel">
            Phone
            <input
              required
              name="phone"
              type="tel"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
            />
          </label>
        </div>
        <label className="text-xs font-semibold uppercase tracking-wider text-steel">
          Postcode
          <input
            required
            name="postcode"
            type="text"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
          />
        </label>
        <label className="text-xs font-semibold uppercase tracking-wider text-steel">
          Problem Type
          <select
            name="service"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
            defaultValue="Emergency Leak"
          >
            <option>Emergency Leak</option>
            <option>Boiler Repair</option>
            <option>Blocked Drains</option>
            <option>Leak Detection</option>
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-wider text-steel">
          Urgency
          <select
            name="urgency"
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
            defaultValue="Need help today"
          >
            <option>Need help now</option>
            <option>Need help today</option>
            <option>Within 48 hours</option>
            <option>Flexible timing</option>
          </select>
        </label>
        <label className="text-xs font-semibold uppercase tracking-wider text-steel">
          Problem Details
          <textarea
            name="message"
            rows={3}
            className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-ink outline-none ring-accent/30 transition focus:ring"
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn-primary cta-interactive w-full disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Get a Free Quote"}
        </button>
        {errorMessage ? <p className="text-sm font-semibold text-[#ba1a1a]">{errorMessage}</p> : null}
      </form>
      <p className="mt-4 text-xs text-steel">
        Prefer to speak now?{" "}
        <Link href="tel:02012345678" className="font-semibold text-ink">
          Call us directly
        </Link>
        .
      </p>
    </div>
  );
}
