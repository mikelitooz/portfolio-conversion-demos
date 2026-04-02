import Link from "next/link";
import { CountUp } from "@/components/CountUp";
import { HeroLeadForm } from "@/components/apex/HeroLeadForm";
import { company } from "@/lib/content";

const serviceCards = [
  {
    title: "Emergency Plumbing",
    summary:
      "Burst pipes, flooding, or persistent leaks. We arrive quickly with tools to stop damage immediately.",
    href: "/services/emergency-plumber-london",
    style: "md:col-span-7 bg-white"
  },
  {
    title: "Boiler Repair",
    summary:
      "No hot water or no heating. Gas Safe engineers diagnose and fix common faults on the first visit.",
    href: "/services/boiler-repair-london",
    style: "md:col-span-5 bg-[#141b2b] text-white"
  },
  {
    title: "Leak Detection",
    summary:
      "Thermal and acoustic tracing to locate hidden leaks with minimal disruption to finishes.",
    href: "/services/leak-detection-london",
    style: "md:col-span-6 bg-[#eef3ff]"
  },
  {
    title: "Blocked Drains",
    summary:
      "High-pressure jetting and practical prevention advice to resolve repeat drainage issues.",
    href: "/services/blocked-drains-london",
    style: "md:col-span-6 bg-[#fff4e8]"
  }
];

const londonAreas = [
  "North London",
  "West London",
  "South London",
  "East London",
  "Central London",
  "City of London"
];

const testimonialCards = [
  {
    quote:
      "Burst pipe at 3 AM in Camden. Apex was here in under an hour and stopped the damage fast. Clear pricing and tidy finish.",
    name: "John D.",
    area: "Camden, NW1"
  },
  {
    quote:
      "Our boiler failed on a freezing evening. Engineer diagnosed quickly and fixed it same visit with no upsell pressure.",
    name: "Sarah M.",
    area: "Chelsea, SW3"
  },
  {
    quote:
      "They found a hidden leak behind a wall without unnecessary damage. Professional from first call to completion.",
    name: "Robert K.",
    area: "Richmond, TW10"
  }
];

type FaqItem = {
  question: string;
  answer: string;
};

export function ApexHomeStitch({ faqs }: { faqs: FaqItem[] }) {
  return (
    <>
      <section className="bg-[#141b2b] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.08)_1px,transparent_0)] bg-[size:18px_18px] px-4 py-14 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4fd1c5]">London Emergency Plumbing Team</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              Emergency Plumber London - 24/7 Fast Response in Under 60 Minutes
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
              Boiler breakdown, leaks, blocked drains? Our certified engineers are on call across London with same-day
              service and transparent pricing.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={`tel:${company.phoneRaw}`} className="cta-interactive inline-flex items-center justify-center rounded-full bg-[#ff9f1c] px-7 py-4 text-base font-semibold text-[#2c1700] transition hover:brightness-95">
                Call Now - Immediate Response
              </Link>
              <Link href="/contact" className="cta-interactive inline-flex items-center justify-center rounded-full border border-white/35 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10">
                Get a Free Quote
              </Link>
            </div>
            <ul className="mt-8 grid gap-3 text-sm text-slate-100">
              {[
                <>
                  <CountUp end={4.9} decimals={1} className="font-semibold" /> star rated by{" "}
                  <CountUp end={500} suffix="+" className="font-semibold" /> London customers
                </>,
                "Gas Safe Registered Engineers",
                "No Hidden Fees - Fixed Pricing"
              ].map((item, index) => (
                <li key={typeof item === "string" ? item : `stat-${index}`} className="flex items-center gap-2">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#ff9f1c] text-[11px] font-bold text-[#2c1700]">
                    +
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <HeroLeadForm />
        </div>
      </section>

      <section className="bg-[#eef3ff] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-4 md:grid-cols-3">
          {[
            ["4.9 Rated", "by 500+ London customers"],
            ["Gas Safe Registered", "Qualified engineers"],
            ["No Hidden Fees", "Fixed pricing guarantee"]
          ].map(([title, subtitle], index) => (
            <article
              key={title}
              className="card-interactive rounded-2xl bg-white p-5 shadow-soft"
              data-reveal
              data-reveal-delay={index * 120}
            >
              <p className="font-display text-2xl font-semibold text-[#141b2b]">
                {index === 0 ? (
                  <>
                    <CountUp end={4.9} decimals={1} /> Rated
                  </>
                ) : (
                  title
                )}
              </p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">{subtitle}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b35]" data-reveal>
            Expertise and Solutions
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">
            Comprehensive London Plumbing
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-12">
            {serviceCards.map((card, index) => (
              <article
                key={card.title}
                className={`card-interactive rounded-[2rem] p-8 shadow-soft ${card.style}`}
                data-reveal
                data-reveal-delay={index * 120}
              >
                <h3 className="font-display text-3xl font-semibold tracking-tight">{card.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">{card.summary}</p>
                <Link href={card.href} className="mt-7 inline-flex text-sm font-semibold text-[#ff6b35] hover:text-[#141b2b]">
                  View service details
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#141b2b] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight md:text-5xl" data-reveal>
            How We Respond
          </h2>
          <p className="mt-3 text-center text-sm uppercase tracking-[0.16em] text-slate-400">Call - Dispatch - Arrival</p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              ["1", "Call", "Speak to dispatch in seconds and confirm postcode and urgency."],
              ["2", "Dispatch", "Nearest certified engineer is assigned and routed immediately."],
              ["3", "Arrival", "On-site response target under 60 minutes for urgent London callouts."]
            ].map(([step, title, detail], index) => (
              <article
                key={title}
                className="card-interactive rounded-2xl border border-slate-700 bg-[#1b2438] p-8 text-center"
                data-reveal
                data-reveal-delay={index * 120}
              >
                <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[#ff9f1c] text-2xl font-bold text-[#2c1700]">
                  {step}
                </span>
                <h3 className="mt-6 font-display text-3xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">
                  {index === 2 ? (
                    <>
                      On-site response target under <CountUp end={60} suffix=" minutes" /> for urgent London callouts.
                    </>
                  ) : (
                    detail
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Transparent Estimates</p>
              <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">No Hidden Extras. Ever.</h2>
            </div>
            <p className="max-w-sm text-sm italic text-slate-600">
              Prices vary by complexity. Final fixed quote is confirmed after diagnosis.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              ["Tap/Leak Repair", "From GBP 85", "Same-day visits available"],
              ["Blocked Drain", "From GBP 110", "Jetting and clean-up included"],
              ["Boiler Service", "Fixed GBP 125", "Gas Safe certificate included"],
              ["Boiler Install", "From GBP 1800", "Survey and warranty options"]
            ].map(([title, price, detail], index) => (
              <article
                key={title}
                className={`card-interactive rounded-2xl border p-6 ${index === 2 ? "border-[#ff9f1c] bg-[#fff4e8]" : "border-slate-200 bg-white"}`}
                data-reveal
                data-reveal-delay={index * 120}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-[#141b2b]">{title}</h3>
                <p className="mt-3 text-3xl font-semibold text-[#141b2b]">{price}</p>
                <p className="mt-4 text-sm text-slate-600">{detail}</p>
                <Link href="/contact" className="cta-interactive mt-6 inline-flex rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-[#141b2b] transition hover:border-[#ff9f1c] hover:text-[#ff6b35]">
                  Book This
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eef3ff] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[390px] overflow-hidden rounded-[2rem] shadow-2xl">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSIZp8B_B_fND_et5UrAMj1oD9upEzqD2CRWwgxkdDKQPPTIAC5aODBSclkYjj89NaT9GVlcI6uwwCzi4HcNwQP0xbTKy2_A69DyURZJx-aBsfwVRwXUYTxCCLoggpljMIl0SSa84tozz_nG796izsADKqw4vg3bFc-JjA6LymrGzBUtU0vt9aNzqm7ECzvSbVnleLHGiuWBZ-jRmEi7uS9ODKphEYa5OnxaT9cr2QnB2TdUjPzbsHP2DuHqjqqWWthNPLtvkCCFe3"
              alt="London service map"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-3 text-sm font-semibold text-[#141b2b] shadow-lg">
              <CountUp end={14} /> engineers active now
            </div>
          </div>
          <div>
            <h2 className="font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">We Serve All London Postcodes</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Our distributed engineer network covers key boroughs and nearby areas for fast same-day response.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {londonAreas.map((area, index) => (
                <Link
                  key={area}
                  href="/areas"
                  className="card-interactive rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#141b2b] shadow-soft transition hover:text-[#ff6b35]"
                  data-reveal
                  data-reveal-delay={index * 90}
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff6b35]">Testimonials</p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#141b2b] md:text-5xl">What Londoners Say</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonialCards.map((card, index) => (
              <article
                key={card.name}
                className="card-interactive rounded-3xl bg-[#f6f8ff] p-7 shadow-soft"
                data-reveal
                data-reveal-delay={index * 120}
              >
                <p className="text-sm leading-relaxed text-slate-700">&quot;{card.quote}&quot;</p>
                <p className="mt-6 text-sm font-semibold text-[#141b2b]">{card.name}</p>
                <p className="text-xs uppercase tracking-[0.14em] text-slate-500">{card.area}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f3f6ff] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#141b2b]">Common Questions</h2>
          <div className="mt-10 space-y-4">
            {faqs.slice(0, 3).map((faq, index) => (
              <details
                key={faq.question}
                className="card-interactive rounded-2xl border border-slate-200 bg-white p-6 shadow-soft"
                open={index === 0}
                data-reveal
                data-reveal-delay={index * 120}
              >
                <summary className="cursor-pointer list-none text-lg font-semibold text-[#141b2b]">{faq.question}</summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#895100_0%,#ff9f1c_100%)] px-8 py-14 text-center text-white shadow-2xl md:px-14 md:py-20">
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">Ready for Professional Help?</h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/90 md:text-2xl">
            Do not wait for damage to get worse. Our engineers are on standby across London.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link href={`tel:${company.phoneRaw}`} className="cta-interactive inline-flex items-center justify-center rounded-full bg-[#141b2b] px-9 py-4 text-xl font-semibold text-white transition hover:bg-[#0f1421]">
              Call {company.phoneDisplay}
            </Link>
            <Link href="/contact" className="cta-interactive inline-flex items-center justify-center rounded-full border border-white/40 bg-white/15 px-9 py-4 text-xl font-semibold text-white transition hover:bg-white/25">
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
