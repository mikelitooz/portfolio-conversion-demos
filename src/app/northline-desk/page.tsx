import Link from "next/link";
import { FaqAccordion } from "@/components/northline/FaqAccordion";
import { ImageSlot } from "@/components/northline/ImageSlot";
import { ProductCard } from "@/components/northline/ProductCard";
import { RatingStars } from "@/components/northline/RatingStars";
import { StoreSection } from "@/components/northline/StoreSection";
import {
  bundleOffer,
  heroCopy,
  magneticCableDock,
  northlineBrand,
  socialProofLogos,
  supportingProducts
} from "@/lib/northline/content";

const faqPreview = [
  {
    question: "How fast is UK shipping?",
    answer: "Most orders arrive within 1-3 working days after dispatch."
  },
  {
    question: "Can I return my order?",
    answer: "Yes. You have 30 days to return products for a full refund."
  },
  {
    question: "Will this work with my current cables?",
    answer: "Yes. Northline products are built for common charging and desk cable setups."
  },
  {
    question: "Is checkout secure?",
    answer: "Yes. All checkout sessions are encrypted and payment is processed securely."
  }
];

export default function NorthlineHomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f8f7f3]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Revenue-focused homepage</p>
            <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-[#111827] md:text-6xl">
              {heroCopy.headline}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">{heroCopy.subheadline}</p>
            <p className="mt-3 text-sm font-semibold text-slate-700">
              Trusted by 1,000+ UK professionals upgrading their workspace.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/northline-desk/products/magnetic-cable-dock"
                className="nl-btn-primary"
              >
                {heroCopy.primaryCta}
              </Link>
              <Link
                href="/northline-desk/products/magnetic-cable-dock#buy-box"
                className="nl-btn-secondary"
              >
                {heroCopy.secondaryCta}
              </Link>
            </div>
            <p className="mt-5 inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-600">
              {heroCopy.guarantee}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <RatingStars rating={4.8} count={2300} />
              <p className="text-sm font-semibold text-slate-600">{northlineBrand.trustLine}</p>
            </div>
          </div>
          <div className="space-y-4">
            <ImageSlot label="Hero Product Shot" className="aspect-[5/4]" />
            <div className="grid gap-4 sm:grid-cols-2">
              <ImageSlot label="Material Detail" className="aspect-[4/3]" />
              <ImageSlot label="Workspace Context" className="aspect-[4/3]" />
            </div>
          </div>
        </div>
      </section>

      <StoreSection
        eyebrow="Identity"
        title="Built for people who take their workspace seriously"
        subtitle="The setup system for users who care about speed, focus, and clean visual order."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Remote professionals",
              text: "Cleaner desks for sharper client calls and better day-to-day workflow."
            },
            {
              title: "Designers and creators",
              text: "Less cable noise, more visual control, and faster setup resets."
            },
            {
              title: "Anyone tired of clutter",
              text: "Simple tools that remove the daily friction of tangled cables."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        id="reviews"
        eyebrow="Social Proof"
        title="Trusted on 18,000+ UK workstations"
        subtitle="Used by founders, editors, designers, and remote teams that care about clean performance setups."
      >
        <div className="grid gap-4 md:grid-cols-4">
          {socialProofLogos.map((logo) => (
            <article key={logo} className="rounded-2xl border border-slate-200 bg-white p-5 text-center">
              <p className="text-sm font-semibold text-slate-600">{logo}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        id="shop"
        eyebrow="Featured Product"
        title="The One Upgrade Your Desk Needs"
        subtitle="Magnetic Cable Dock. Clean cables in seconds. No tools. No setup."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <ImageSlot label="Featured Product" className="aspect-[4/3]" />
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Best seller</p>
            <h3 className="mt-2 font-display text-3xl font-semibold text-[#111827]">{magneticCableDock.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              The one product most customers start with. Snap cables into place, reduce visual clutter, and keep your
              desk ready for work.
            </p>
            <ul className="mt-5 space-y-2">
              {magneticCableDock.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="text-sm text-slate-600">
                  - {bullet}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">{magneticCableDock.price}</p>
              <Link
                href="/northline-desk/products/magnetic-cable-dock"
                className="nl-btn-primary px-5"
              >
                Add to Cart - Ships Today
              </Link>
            </div>
          </div>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Benefits"
        title="Built for daily use, not desk photos"
        subtitle="Engineered details that save time every day."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Performance-first design",
              text: "Every product removes daily friction, not just visual mess."
            },
            {
              title: "Premium materials",
              text: "Durable finishes and reliable construction built for long-term use."
            },
            {
              title: "System thinking",
              text: "Products work together so your setup feels unified and intentional."
            },
            {
              title: "Fast setup reset",
              text: "Keep your desk client-ready in under a minute."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Lifestyle"
        title="From first call to late-night edits, your setup stays clean"
        subtitle="One system for remote work, client calls, and creative sessions."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ImageSlot label="Founder Workflow" className="aspect-[4/3]" />
          <ImageSlot label="Creator Edit Session" className="aspect-[4/3]" />
          <ImageSlot label="Remote Team Calls" className="aspect-[4/3]" />
        </div>
      </StoreSection>

      <StoreSection id="bundle" eyebrow="Bundle Offer" title={bundleOffer.title} subtitle={bundleOffer.subtitle}>
        <div className="rounded-3xl border border-slate-200 bg-[#f8f7f3] p-8">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="space-y-4">
              <ImageSlot label="Bundle Hero" className="aspect-[4/3]" />
              <div className="grid gap-4 sm:grid-cols-2">
                <ImageSlot label="Dock" className="aspect-[4/3]" />
                <ImageSlot label="Desk Mat + Tray" className="aspect-[4/3]" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">{bundleOffer.savings}</p>
              <p className="mt-3 text-lg font-semibold text-slate-700">{bundleOffer.price}</p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">One clear savings reason. One conversion-focused bundle path.</p>
              <Link
                href="/northline-desk/products/magnetic-cable-dock"
                className="nl-btn-primary mt-6"
              >
                {bundleOffer.cta}
              </Link>
            </div>
          </div>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Before vs After"
        title="Before vs After Desk"
        subtitle="Less clutter. More focus."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Before</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[#111827]">Messy cables, constant distractions</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>- Chargers slip behind the desk.</li>
              <li>- Tangled cables break workflow focus.</li>
              <li>- Setup looks cluttered in calls and content.</li>
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600">After</p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-[#111827]">Clean, controlled, and ready to work</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>- Cables stay exactly where you need them.</li>
              <li>- Desk resets in seconds between sessions.</li>
              <li>- Workspace looks premium and intentional.</li>
            </ul>
          </article>
        </div>
      </StoreSection>

      <StoreSection
        id="reassurance"
        eyebrow="Trust and Reassurance"
        title="Order with confidence"
        subtitle="Fast UK shipping, easy returns, and secure checkout."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-4 md:grid-cols-4">
          {[
            "Free UK delivery over GBP 60",
            "Order by 3pm for same-day dispatch",
            "30-day risk-free returns",
            "1-year product warranty"
          ].map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-slate-700">
              {item}
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        id="faq"
        eyebrow="FAQ Preview"
        title="Popular Questions"
        subtitle="Quick answers before you buy."
      >
        <FaqAccordion items={faqPreview} />
      </StoreSection>

      <StoreSection
        eyebrow="Email Capture"
        title="Get 10% off your first order"
        subtitle="Join Northline and get our Desk Reset Guide instantly."
        className="bg-[#111827] text-white"
      >
        <div className="rounded-3xl border border-white/20 bg-white/5 p-7">
          <form className="grid gap-3 sm:grid-cols-[1fr_auto]" action="#">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/40 bg-white/90 px-5 py-3 text-sm font-semibold text-[#111827] outline-none ring-2 ring-transparent transition focus:ring-white/70"
            />
            <button type="submit" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#111827]">
              Unlock My Discount
            </button>
          </form>
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-200">No spam. Unsubscribe any time.</p>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Complete Setup"
        title="Supporting products built for the same workflow"
        subtitle="Upsell and cross-sell modules designed to increase average order value without feeling pushy."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {supportingProducts.map((product) => (
            <ProductCard key={product.title} title={product.title} price={product.price} href={product.href} />
          ))}
        </div>
      </StoreSection>
    </>
  );
}
