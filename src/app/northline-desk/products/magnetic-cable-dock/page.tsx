import Link from "next/link";
import { DispatchCountdown } from "@/components/northline/DispatchCountdown";
import { FaqAccordion } from "@/components/northline/FaqAccordion";
import { ImageSlot } from "@/components/northline/ImageSlot";
import { StickyAddToCart } from "@/components/northline/StickyAddToCart";
import { compareRows, magneticCableDock, supportingProducts } from "@/lib/northline/content";

const galleryImages = {
  main:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAYxeHM60GifJxftbYAF27u92s3RJuLK3N1RPJS1QlTCoJvt9pbWcXbPja7XBLMwARKH4-NC2PC7rUu-GMsYTUb3MUEOZBEm8FwBK7SjbWhXQYkrkLoubfIa4fANCjXrQzdz5pwpZPhtzU-GKHmtgRE0Edngazm19KnrWjrMIwqg97_BLsxphMGaDW9TYln7BCOgHNVOh8eTMOVZ4fRz9gQCeGTcd8lewXD4Tr42UGQZo5v_G-SIEW7p9NnKJ2fORiKGKm3I5kQ_O8",
  thumb1:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBXQoFmwvEEr0P41yFqPoAO6DJEmiiubNMcU7QeWTZt_ZDjJ4YvOq6-8RAjk6XX3bVBMFTp8IkowBeCz1Hwe_wsAl1r-zTzTmNNsTmcAJT1QAAs-rH82LZu3Bgnqu6bJpB_G-hqfYgMN4RWxZ42jzAcFlPREgHQomXfvGoeEFNJaRzSLHAKztFQOQqveLYn9rIxdGYOj-j-54CKUlFYAptCmTTAGhPUdS-QLnJnOP85bRorcUrlCnObb4yFy8xZVK0TpeSv1kquhqs",
  thumb2:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBcvwj5tPIZtsH9bqVTU9jmhy6y1iZY4LEV_95JpuQbTTAYe-sXkcIL4tJLDC1wpkpS7m4zhh6upS44quwzfbqIGPu9y0yHhugtIWCNtWQshVE7mdCU8S7olusQimemaTU_3Qiz699UI3ndGCtpUUs82N7YVPjTj_Y9fAFkWhHVEyiiUH-mpEAJX7b9ZsulkKuUg1XNt7b3tVRn-4lVvv_UvLJnLtKa9xGpRAgC1BsXIU6g_4RbSlLRlqgbMBxAl4ZOCQVb9taB9V0",
  thumb3:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBUdACBYc5PPE9JsVfOQm7piCvrGsY9wtLxlt3L6_IFQuCR1BmvduBtjWeXlCTZgr4vvrfx2eGgeKMFjdnfxiE0YuQ6WvYKcQSa-RIzDMmZoonjoJN277EFBLJfFu9b5Wahv5xHmkdRZBS080uzrtnJHOUX8fQVk4JWlYbLNXMSLRFTzMqqK14I0gdaBkVvS_GF0PsRR4VqVf5pUdelnsnibuhEybh0JN-9lT-kJ9yw34GNRoDrm192t5RXe2X1fTzK3RfKHP1QiPA",
  before:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAuU6FXqooAJ7xgFaPko0TKD7lTTejSIqX1m9XBHOaWcs3NF0SkQRayKP7fY0QUbj-SQClZNxyBnnR6iEug9YGII-2WJW0JTCPOxBNU3FDiBWd6ZgM25ZtRGRHsKoM4pyzo2459fdC-4jrUwIM6SF24IGjHougdQrB_NdJcFmfPAOjKH5DPGThoRN1_TlnQZMJFeK6APYvrma9cx2TdSoK-GdJg_A2wjGw0BCA57Jkeae4Z8fHTQqfHBbHzPquze-4EHdERED8BFK4"
};

const proofCards = [
  {
    title: "N52 Neodymium",
    detail: "Industrial-grade magnets provide a secure, satisfying snap every time you dock."
  },
  {
    title: "220g Zinc Core",
    detail: "A weighted metal body resists cable tension so placement stays fixed."
  },
  {
    title: "Micro-Suction Base",
    detail: "Washable, reusable nano-base grips cleanly without damaging your desk."
  }
];

const crossSellImages: Record<string, string> = {
  "Precision Desk Mat":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAJtbQX9f8i9unpcFOBTCGlHSnkOI5gL5VAyPlG5jWHZ1Vd1hwKTbrl7TscKWKPtIEOeoUbpHYWroVeekZsf_fkLuUXNMuYW5qzRZCyfYdv2byA9I6Wrct3osQodS7KXAjTUErH1P7XB8ZRhzH7SeXbFqtBib96piS-uE7VXK4esq84MBEbjsp2P1DJeIKQiVY80PtpmPTVP_6L3kTPWxNTg3WoTr08FiveMOXIcBCsG9dQA4B0XUEb_16KgT5EzMfWCntWNvtImE8",
  "Wireless Charging Tray":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCN7tntgJsBEGSF0hXkuy2kLPLgs9XoAMKGBDQJEIWG3zMm9I-Ogb0AXPlCGWKaCvc02AA1cD92Ktbkm-voOIQoOWxvxyPm0W_fYlA2u97TV0I0PPfy68Xa--LjwrhvbN8bY3FitKXlzoxh8EcztW-fXXUJRl56Epd5NiFNCN03FQY43akQbPHPz9dkpxDaa3-wsuPAK0gDC_P0D_N9q9apF-EXUkgwqNqNO1z5T60kMbsF5C373Ou5VxEL_MU_S0vjPBbYsjsVy5U",
  "Monitor Riser":
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAgfXycv-ZRewjzP7cLAN2IsTOnNOn2YGgV5flXXIt1XjoHcGHPyVUCNwdXGMbsu8KwMnljqBASr7xpqxIU59H7YZA6oDS1nm_gd3owkaZ4UkZpTqXXnWT2lvUkGgIoCmYJBpPK6LZ8wNAEMBuCCXFoNNhByX9bR9TELNQAl8bjL5NYLUzRNB-JSf2ixis8isgO83RpliOOccCa0TrYB5IGf-exoBGcCvEMShA3pK3Dh3erH8gwrrpfjduIoMoC62iV8iNJvo24RKI"
};

export default function MagneticCableDockPage() {
  const faqItems = [...magneticCableDock.objectionHandling.slice(0, 4), ...magneticCableDock.faq.slice(0, 4)];

  return (
    <>
      <section className="border-b border-zinc-100 bg-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-6 md:px-8">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">
            Shop / Accessories / Magnetic Cable Dock
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-6 lg:col-span-7">
            <ImageSlot label="Magnetic Cable Dock" src={galleryImages.main} className="aspect-[4/5]" hideLabel />
            <div className="grid grid-cols-3 gap-4">
              <ImageSlot label="Dock Detail" src={galleryImages.thumb1} className="aspect-square" hideLabel />
              <ImageSlot label="Desk Context" src={galleryImages.thumb2} className="aspect-square" hideLabel />
              <ImageSlot label="Base Texture" src={galleryImages.thumb3} className="aspect-square" hideLabel />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div id="buy-box" className="sticky top-32 rounded-[1.5rem] border border-zinc-100 bg-white p-8 shadow-soft">
              <h1 className="font-display text-4xl font-semibold tracking-tight text-[#111827] md:text-5xl">
                {magneticCableDock.title}
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">{magneticCableDock.subtitle}</p>

              <div className="mt-7 flex items-center gap-3">
                <p className="text-3xl font-semibold text-[#111827]">£29.99</p>
                <p className="rounded-full border border-zinc-200 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">
                  {magneticCableDock.shippingLabel}
                </p>
              </div>

              <ul className="mt-8 space-y-3">
                {magneticCableDock.bullets.map((bullet) => (
                  <li key={bullet} className="text-sm font-medium text-slate-700">
                    ✓ {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-800">{magneticCableDock.microUrgency}</p>
              </div>

              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Finish</span>
                  <select className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-3 text-sm font-semibold text-slate-700">
                    {magneticCableDock.variants.map((variant) => (
                      <option key={variant}>{variant}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500">Quantity</span>
                  <select className="mt-2 w-full rounded-lg border border-zinc-300 px-3 py-3 text-sm font-semibold text-slate-700">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                  </select>
                </label>

                <button className="nl-btn-primary w-full justify-center py-4 text-base">Add to Cart - Ships Today</button>
                <Link href="/northline-desk" className="nl-btn-secondary w-full justify-center py-4 text-base">
                  Shop the Setup
                </Link>
              </div>

              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {magneticCableDock.trustBadges.map((badge) => (
                  <p key={badge} className="rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-[11px] font-semibold text-slate-700">
                    {badge}
                  </p>
                ))}
              </div>

              <div className="mt-6 space-y-3">
                <DispatchCountdown />
                <p className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-700">
                  {magneticCableDock.stockNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50/60 px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <ImageSlot label="Before" src={galleryImages.before} className="h-[420px]" hideLabel />
            <span className="absolute left-6 top-6 rounded-full bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#111827]">
              Before
            </span>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">The Problem</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#111827]">The desk mess that breaks focus</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{magneticCableDock.problemSection.body}</p>

            <div className="mt-8 rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-soft">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{magneticCableDock.solutionSection.title}</p>
              <p className="mt-4 text-base leading-relaxed text-slate-600">{magneticCableDock.solutionSection.body}</p>
            </div>

            <div className="mt-8 flex gap-12">
              <div>
                <p className="text-4xl font-semibold text-[#111827]">0</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Cables Lost</p>
              </div>
              <div>
                <p className="text-4xl font-semibold text-[#111827]">1s</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Dock Time</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Logical Justification</p>
            <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-[#111827]">{magneticCableDock.whyItWorks.title}</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">{magneticCableDock.whyItWorks.body}</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {proofCards.map((item) => (
              <article key={item.title} className="rounded-[1.5rem] border border-zinc-100 bg-white p-8 shadow-soft">
                <h3 className="font-display text-2xl font-semibold text-[#111827]">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-6 py-20 text-white md:px-8">
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 md:grid-cols-4">
          {[
            "Aerospace-grade finish",
            "Universal cable fit",
            "Reusable setup control",
            "Built for daily use"
          ].map((item) => (
            <p key={item} className="text-center text-sm font-semibold uppercase tracking-[0.14em] text-slate-200">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-5xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#111827]">
            Why Northline Over Standard Clips
          </h2>
          <div className="mt-10 overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-50">
                  <th className="px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">Feature</th>
                  <th className="px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.15em] text-[#111827]">Northline Dock</th>
                  <th className="px-6 py-5 text-left text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500">Standard Clips</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t border-zinc-100">
                    <td className="px-6 py-5 text-sm font-semibold text-[#111827]">{row.label}</td>
                    <td className="px-6 py-5 text-sm text-slate-700">{row.northline}</td>
                    <td className="px-6 py-5 text-sm text-slate-500">{row.generic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50/60 px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#111827]">Verified customer feedback</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {magneticCableDock.reviews.slice(0, 3).map((review) => (
              <article key={review.name} className="rounded-[1.5rem] border border-zinc-100 bg-white p-8 shadow-soft">
                <p className="text-sm text-[#111827]">★★★★★</p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">&quot;{review.body}&quot;</p>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-slate-500">
                  {review.name} · {review.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-center font-display text-4xl font-semibold tracking-tight text-[#111827]">Common questions</h2>
          <div className="mt-10">
            <FaqAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="border-y border-zinc-100 bg-zinc-50 px-6 py-20 md:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Risk Reversal</p>
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-[#111827]">
            Try it risk-free for 30 days.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{magneticCableDock.returnsReassurance}</p>
          <p className="mt-6 text-sm font-semibold text-slate-600">{magneticCableDock.shippingReassurance}</p>
        </div>
      </section>

      <section className="px-6 py-24 md:px-8 md:py-32">
        <div className="mx-auto w-full max-w-[1440px]">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-[#111827]">Complete your setup</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {supportingProducts.slice(0, 3).map((product) => (
              <article key={product.title} className="rounded-[1.5rem] border border-zinc-100 bg-white p-6 shadow-soft">
                <ImageSlot
                  label={product.title}
                  src={crossSellImages[product.title] ?? galleryImages.thumb2}
                  className="aspect-[4/3]"
                  hideLabel
                />
                <h3 className="mt-5 font-display text-2xl font-semibold text-[#111827]">{product.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{product.price}</p>
                <Link href={product.href} className="mt-5 inline-block text-xs font-bold uppercase tracking-[0.15em] text-[#111827] underline underline-offset-4">
                  Add to Bundle
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111827] px-6 py-20 text-white md:px-8">
        <div className="mx-auto w-full max-w-[1440px] text-center">
          <h2 className="font-display text-4xl font-semibold tracking-tight">Ready for a cleaner desk today?</h2>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
            {magneticCableDock.returnsReassurance}
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="nl-btn-primary bg-white px-8 py-4 text-[#111827] hover:bg-zinc-100">Add to Cart - Ships Today</button>
            <Link href="/northline-desk#bundle" className="nl-btn-secondary border-white px-8 py-4 text-white hover:bg-white hover:text-[#111827]">
              View Bundle Offer
            </Link>
          </div>
        </div>
      </section>

      <StickyAddToCart title={magneticCableDock.title} price="£29.99" />
    </>
  );
}
