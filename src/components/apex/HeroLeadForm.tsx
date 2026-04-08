"use client";

import { useLeadCaptureSubmit } from "@/hooks/useLeadCaptureSubmit";

export function HeroLeadForm() {
  const { isSubmitting, errorMessage, handleLeadSubmit } = useLeadCaptureSubmit({
    source: "apex_home_hero_form"
  });

  return (
    <div className="rounded-3xl border border-slate-300/25 bg-white p-7 text-[#141b2b] shadow-2xl" data-reveal data-reveal-delay="120">
      <h2 className="font-display text-3xl font-semibold tracking-tight">Need an Engineer Now?</h2>
      <p className="mt-2 text-sm text-slate-600">We usually respond within 10 minutes during service hours.</p>
      <form className="mt-6 space-y-4" onSubmit={handleLeadSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Name</span>
            <input
              name="name"
              required
              type="text"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
              placeholder="John Doe"
            />
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Phone</span>
            <input
              name="phone"
              required
              type="tel"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
              placeholder="07XXX XXXXXX"
            />
          </label>
        </div>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Email</span>
          <input
            name="email"
            type="email"
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Postcode</span>
          <input
            name="postcode"
            required
            type="text"
            className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
            placeholder="NW1"
          />
        </label>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Problem Type</span>
            <select
              name="service"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
              defaultValue="Emergency Leak"
            >
              <option>Emergency Leak</option>
              <option>Boiler Repair</option>
              <option>Blocked Drain</option>
              <option>No Hot Water</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Urgency</span>
            <select
              name="urgency"
              className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
              defaultValue="Need help today"
            >
              <option>Need help today</option>
              <option>Need help now</option>
              <option>Within 24 hours</option>
              <option>Planned booking</option>
            </select>
          </label>
        </div>
        <label className="block">
          <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-600">Problem Details</span>
          <textarea
            name="message"
            className="h-24 w-full resize-none rounded-xl border border-slate-300 px-3 py-2.5 text-sm outline-none ring-2 ring-transparent transition focus:ring-[#ff9f1c]/30"
            placeholder="Briefly describe the issue."
          />
        </label>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cta-interactive w-full rounded-2xl bg-[#ff6b35] px-6 py-3.5 text-base font-semibold text-white transition hover:brightness-95 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Sending..." : "Get Help in 60 Minutes"}
        </button>
        {errorMessage ? <p className="text-sm font-semibold text-[#ba1a1a]">{errorMessage}</p> : null}
      </form>
    </div>
  );
}
