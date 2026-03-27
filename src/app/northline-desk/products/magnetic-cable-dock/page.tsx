import Link from "next/link";
import { DispatchCountdown } from "@/components/northline/DispatchCountdown";
import { FaqAccordion } from "@/components/northline/FaqAccordion";
import { ImageSlot } from "@/components/northline/ImageSlot";
import { ProductCard } from "@/components/northline/ProductCard";
import { RatingStars } from "@/components/northline/RatingStars";
import { StickyAddToCart } from "@/components/northline/StickyAddToCart";
import { StoreSection } from "@/components/northline/StoreSection";
import { magneticCableDock, supportingProducts } from "@/lib/northline/content";

export default function MagneticCableDockPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Home / Desk Accessories / Magnetic Cable Dock
          </p>
        </div>
      </section>

      <section className="bg-[#f8f7f3]">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-14">
          <div className="space-y-4">
            <ImageSlot label="Primary Product Image" className="aspect-[4/3]" />
            <div className="grid grid-cols-3 gap-3">
              <ImageSlot label="In-hand scale" className="aspect-square" />
              <ImageSlot label="Material macro" className="aspect-square" />
              <ImageSlot label="Desk context" className="aspect-square" />
            </div>
          </div>

          <div id="buy-box" className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Best seller</p>
            <h1 className="mt-2 font-display text-4xl font-semibold tracking-tight text-[#111827]">
              {magneticCableDock.title}
            </h1>
            <p className="mt-3 text-base leading-relaxed text-slate-600">{magneticCableDock.subtitle}</p>

            <div className="mt-4 flex items-center gap-3">
              <p className="text-2xl font-semibold text-[#111827]">{magneticCableDock.price}</p>
              <p className="text-sm font-semibold text-slate-400 line-through">{magneticCableDock.compareAtPrice}</p>
              <RatingStars rating={magneticCableDock.rating} count={magneticCableDock.reviewsCount} />
            </div>
            <p className="mt-1 text-sm font-semibold text-emerald-700">{magneticCableDock.shippingLabel}</p>

            <ul className="mt-5 space-y-2">
              {magneticCableDock.bullets.map((bullet) => (
                <li key={bullet} className="text-sm text-slate-600">
                  v {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Finish</span>
                <select className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-700">
                  {magneticCableDock.variants.map((variant) => (
                    <option key={variant}>{variant}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Quantity</span>
                <select className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm font-semibold text-slate-700">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </label>

              <button className="w-full rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white">
                Add to Cart - Ships Today
              </button>
              <Link href="/northline-desk" className="block w-full rounded-full border border-[#111827] px-5 py-3 text-center text-sm font-semibold text-[#111827]">
                Shop the Setup
              </Link>
              <p className="rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-sm font-semibold text-amber-800">
                {magneticCableDock.microUrgency}
              </p>
            </div>

            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              {magneticCableDock.trustBadges.map((badge) => (
                <p key={badge} className="rounded-xl border border-slate-200 bg-[#fafafa] px-3 py-2 text-xs font-semibold text-slate-700">
                  {badge}
                </p>
              ))}
            </div>

            <div className="mt-6 space-y-3">
              <DispatchCountdown />
              <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
                {magneticCableDock.stockNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <StoreSection
        eyebrow="The Problem and Solution"
        title="The Problem"
        subtitle={magneticCableDock.problemSection.body}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">The Problem</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{magneticCableDock.problemSection.body}</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{magneticCableDock.solutionSection.title}</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{magneticCableDock.solutionSection.body}</p>
          </article>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Logical Justification"
        title={magneticCableDock.whyItWorks.title}
        subtitle={magneticCableDock.whyItWorks.body}
        className="bg-[#fafafa]"
      >
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <p className="text-sm leading-relaxed text-slate-600">{magneticCableDock.whyItWorks.body}</p>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Product Description"
        title="Designed to remove friction from every work session"
        subtitle={magneticCableDock.description}
      >
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <p className="rounded-3xl border border-slate-200 bg-white p-6 text-sm leading-relaxed text-slate-600 shadow-soft">
            {magneticCableDock.descriptionExtended}
          </p>
          <ImageSlot label="Lifestyle Product Use" className="aspect-[4/3]" />
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Feature Breakdown"
        title="Premium details that justify premium positioning"
        subtitle="Feature blocks engineered for conversion-minded shoppers comparing alternatives."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          {magneticCableDock.featureBlocks.map((block) => (
            <article key={block.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-[#111827]">{block.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{block.detail}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Lifestyle"
        title="How it fits your day"
        subtitle="From first call to late-night edits, your setup stays clean and ready."
      >
        <div className="grid gap-4 md:grid-cols-3">
          <ImageSlot label="Morning Standup Setup" className="aspect-[4/3]" />
          <ImageSlot label="Client Call Desk View" className="aspect-[4/3]" />
          <ImageSlot label="Evening Focus Session" className="aspect-[4/3]" />
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Why It Is Better"
        title={magneticCableDock.whyBetter.title}
        subtitle="This is where premium value beats low-cost alternatives."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-rose-600">Standard clips</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {magneticCableDock.whyBetter.standard.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">Northline Dock</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {magneticCableDock.whyBetter.northline.map((item) => (
                <li key={item}>v {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Reviews"
        title="Verified customer feedback"
        subtitle="Social proof built to convert paid traffic into first-time buyers."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {magneticCableDock.reviews.map((review) => (
            <article key={review.name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{review.meta}</p>
              <p className="mt-2 text-sm font-semibold text-[#111827]">{review.name}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Rating: {review.rating}/5
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{review.body}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Objections"
        title="Before you buy"
        subtitle="Answers that remove hesitation right before checkout."
        className="bg-[#fafafa]"
      >
        <FaqAccordion items={magneticCableDock.objectionHandling} />
      </StoreSection>

      <StoreSection eyebrow="FAQ" title="Product FAQs" subtitle="Quick answers before checkout.">
        <FaqAccordion items={magneticCableDock.faq} />
      </StoreSection>

      <StoreSection
        eyebrow="Shipping and Returns"
        title="Order with confidence"
        subtitle="Clear reassurance at the final conversion stage."
        className="bg-[#fafafa]"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-[#111827]">Shipping reassurance</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{magneticCableDock.shippingReassurance}</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h3 className="font-display text-2xl font-semibold text-[#111827]">Return policy reassurance</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{magneticCableDock.returnsReassurance}</p>
          </article>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Cross Sell"
        title="Complete your setup"
        subtitle="Shopify-style add-on module designed to increase average order value."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {supportingProducts.slice(0, 4).map((product) => (
            <ProductCard key={product.title} title={product.title} price={product.price} href={product.href} badge="Add-on" />
          ))}
        </div>
      </StoreSection>

      <section className="border-t border-slate-200 bg-[#111827] py-16 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-semibold tracking-tight">Ready for a cleaner desk today?</h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-300">
            Try it for 30 days. If it doesn&apos;t improve your setup, we&apos;ll refund you. No questions asked.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {magneticCableDock.ctaVariants.map((cta) => (
              <button key={cta} className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#111827]">
                {cta}
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-slate-300">
            Need bundle pricing? <Link href="/northline-desk#bundle" className="font-semibold text-white underline">View bundle offer</Link>
          </p>
        </div>
      </section>

      <StickyAddToCart title={magneticCableDock.title} price={magneticCableDock.price} />
    </>
  );
}
