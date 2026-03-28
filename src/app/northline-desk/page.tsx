import Link from "next/link";
import { FaqAccordion } from "@/components/northline/FaqAccordion";
import { ImageSlot } from "@/components/northline/ImageSlot";
import { StoreSection } from "@/components/northline/StoreSection";
import { bundleOffer, magneticCableDock, socialProofLogos } from "@/lib/northline/content";

const faqPreview = [
  {
    question: "When will my order ship?",
    answer: "Orders before 3pm Monday to Friday ship same-day from our UK warehouse."
  },
  {
    question: "Do you ship internationally?",
    answer: "We currently focus on UK delivery for speed. EU shipping is planned in a later release."
  },
  {
    question: "Are the magnets electronics-safe?",
    answer: "Yes. The dock uses shielded magnets sized for desk cable control."
  }
];

const identityCards = [
  {
    title: "Remote Professionals",
    text: "Engineered for long hours where your setup directly impacts output."
  },
  {
    title: "Designers and Creators",
    text: "Visual tools that keep your desk clean without sacrificing aesthetic quality."
  },
  {
    title: "Cable-Free Minimalists",
    text: "For anyone tired of cable chaos and ready for a permanent workspace reset."
  }
];

const benefits = [
  {
    title: "Performance-first",
    text: "Every curve is chosen to improve the speed of your workflow."
  },
  {
    title: "Premium Build",
    text: "CNC materials and clean finishes designed to last."
  },
  {
    title: "Modular System",
    text: "Products work together as one intentional desk ecosystem."
  },
  {
    title: "Instant Reset",
    text: "Return your desk to clean in under 30 seconds."
  }
];

const reassuranceItems = [
  "Free UK shipping over GBP 60",
  "3pm dispatch cut-off",
  "30-day returns",
  "1-year warranty"
];

const supportingShowcase = [
  {
    title: "Precision Desk Mat",
    subtitle: "Merino Wool",
    price: "£45",
    href: "/northline-desk/products/precision-desk-mat",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCT9faf4VIu5kkgGThx71HDqrdF5HiU9LBjqBN6Ao7Fc25lZ6fPFRh_TR_798s9ot-enBwF7Hpfeq1XmLEP0kvq_Z1GAtBDBMFFUidnoKrKr7t7qc9aWkMbwDy_9_S_wnbC1nhrCL3un1ty-AGW-clOZaN-wWnbkVyHpT5HCptfMJ81p23M4iaRoSIjXcdIXpZHn1btn1xqJD055UTufvn9h_MjtB3XDOtSxijKIUpJMxDKMDL5Ij-wCQVANpeXOgF4LkzpuS_s_WY"
  },
  {
    title: "Monitor Riser",
    subtitle: "Solid Walnut",
    price: "£89",
    href: "/northline-desk/products/monitor-riser",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgfXycv-ZRewjzP7cLAN2IsTOnNOn2YGgV5flXXIt1XjoHcGHPyVUCNwdXGMbsu8KwMnljqBASr7xpqxIU59H7YZA6oDS1nm_gd3owkaZ4UkZpTqXXnWT2lvUkGgIoCmYJBpPK6LZ8wNAEMBuCCXFoNNhByX9bR9TELNQAl8bjL5NYLUzRNB-JSf2ixis8isgO83RpliOOccCa0TrYB5IGf-exoBGcCvEMShA3pK3Dh3erH8gwrrpfjduIoMoC62iV8iNJvo24RKI"
  },
  {
    title: "Laptop Stand",
    subtitle: "Aluminum",
    price: "£55",
    href: "/northline-desk/products/laptop-stand",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_Y2XQiLDnANACazJdOqN7OCrcFs2WCV7Nnu--Wqetavzf167P-PsNy8TvJmgPDAvBWvi9SM3wTHv02rw-YCVK_P-4FaLjxn0IQ-I52MrsUMOyPmm9X6vqmZXaXxEyGsjrayctvF0FiNZRsgvIZXUaaz6tSU6TyjqEFnmrdAiKDbi5-YDx2ZgdV2HGbNPunaaECBEMf7yi0pTvCtCUP_chswQYJVij_Y9JbblFuaiEEvzE6b6HOCLCtgh7nMrAbGychwvoePrw3wo"
  },
  {
    title: "Cable Kit",
    subtitle: "Set of 12",
    price: "£19",
    href: "/northline-desk/products/cable-organizer-kit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMQRU1zLsVrS99JPVfzQBhR5QuCCMBClIQ3dz7Mux7aAUShuVIOU-SenEnfuhhKjlqSlMdp3fWkm6ZTaWkxjFHosz17ewNHKBWERPRDst-442noKbokRw5rFm3sI2XlI3E9VgaAjVZlCXxXym34LZwxO5aMHJoiCPx8BxKCUWfTmj-RsCMRBqJSYy64cZaojlnrX5IyiwrFJ4pdWLYi6d5miMsuAV2UGbg69gmipy4h2Z71JrwjLsNNYWmAWXdB93QZJS2fZBAaqM"
  },
  {
    title: "Charging Tray",
    subtitle: "Fast Charge",
    price: "£65",
    href: "/northline-desk/products/wireless-charging-tray",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBYAZheOur5uK55jG11zKeOW4oj6RIvVuU9BTiCCc7tfLwt2u8g3Kk_qm-NpYchhgUn_5EyaLIP9JoqHDlYzgraaMfRIhNRJFWU3_TyuAHYLqWLGOhXwMrsymUPS_pCUte_uzYLAkgLZ1flf6mAHq9_Gvf0UIDXWMbO8tRgQvnytfPqXg3VG3BeO1DGyibuBLESCW18cq06EuqwPiieOH4rukwSDU_jAdqitlC-oYhNGEiKZpDeg9ERRqqv-O4FghqMIxhWjLJfRWU"
  }
];

const heroImages = {
  main:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAfbThIj-xXnuL-akZAr279igRUmwrOiHKNh9y3Qtq7diYOPFK7WEMARlOpAcCExylk9izOjTQCGszGOveTMzuL7rurMFYH1CrNlo8VN7q6he5if6099sK8sQbE-XuESYeNim0XASRXJIzMFjtFjj3WKb_AUSrZ_KQ5iXlx36ZocWx04mvRZIdgUkLSCirxFImSNlotxYOeta9XntSTIB8x9ximv3mp4rROf9GxqnkaDYb4KszC8FJn5P1eFYvoczqdXc3OqgaIjB8",
  detail:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC-r_NYdsbTlLN0nYvxy5GRSd4Djuvd0e4fC5NPKcqVQzQ7w9xM7e1x-MJpKavB-pEfXAncs_jyJlGbVVo5RrJZ5qVarvyCM7AGOK9Cf55DkOrWHTOTMWo-oguFFylPSmf8BMcWij0eAbyi_wdieJytyUzKHuDkUWJIRhMREmuSMb_jZmdignsXufGTmhHLgJdaf1Sb99982nvvbOhvG8cn42Md1CEusx4iP-H_qg0EO3QvBsGo1Cj5yL9tpP9PG5PUTLzZRD_E-5g",
  context:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDjwBJTC5Zln074pUOi7Ihi0fVKrk5fCpCLjmhxOrk-lkJQKYVE2vLYJ1tfPZdUQ9qeF4KP66V3BpvjBxqT43ypJnx9dJy_EJkEXWGb2hQWKVtHEpxjBwZOA5_3GX3YusYEZADdOlWAJN9uS_GcOyt_IMnNrIjYaTBeKr-PPJOndC7CdsgtFwZngLBsIE2qKvwjSltUyUjOIpHKbGj3LLiIvXySNPxlkX3I7dl6i7qbXGVeedA1LIHhzJjDV2t_2BEmDUaryF4qw_s"
};

const avatarImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBM2j9jO1hNH8ipN1lMGSU3gJ2klK_o2eR6DgErQZU-SRG23l6cWNPY0nfSbEQXwF9go5UOyP81K-2x_ZUPwMxcqHjl1XvwmNhLKiaeG7TnnnxihJMbdbSOYtyykQ0ZKt9FIyCADF-ZRPWgpiUfomv_OWppRDqGCD43nma8e8ptyhhSuJNglu4i39d51_Xko6DYbl3DKCFvsGhtcyvR2GPzgVS6epPJ1kpEp0fMFxLKmwV2FUjhmlsyiVpNOhXUp5vMgPusH4bqwyg",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAvNyrMUWQgIAYQDYdE1sow_bygm3eNBIO48MNlVI28muC3Doqz7CeD6pyY9vEndaBoPuvSvEhtDHRzsSqbzbpSgTqvcmMYGU1kbLaGivS8-ZLD6vm5dAhfumYU_c2n4YqB9ObrTpevjK-ZV-Map8jQSn57AniICXVxbdQVWAQ_zWi5bPnobU5V6nS7gwCUGzXA0J6tKXUPdUmwAPCMfqT6YWX_-nl7kRDPtzvP3my84A8jPPby9HpX-3E5mkQ-vFTzowqM1XgM_q4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCq2NGX80UNU66dh4b6iyxjb-VbqjVXhvG_RUxrXre0UpRbYuHqecKU-Ngt96uoSbi1FekUIYHSBDCXS4owxK9nigh6P8zNe4BcIfZUjZM0gX20CNy4LhS8IwqMLcjqkb9Gfddvwx97S0Zb6biXmubcHKDVtJEdyLEz8pKfCxolDu6c8agvHJvrjH2c_ZtRFmNOL4TPJabEgZnHnGGo3mBvqFGPowqtBrCpDejOyGIuhB9AMiu5Gk42q86XE2apRyZWr6zxCReS0B8"
];

export default function NorthlineHomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-zinc-100 px-6 pb-32 pt-20 md:px-8 md:pb-40 md:pt-28">
        <div className="mx-auto grid w-full max-w-[1440px] items-center gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <p className="inline-block rounded-full bg-zinc-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-600">
              UK Original
            </p>
            <h1 className="mt-8 font-display text-5xl font-semibold tracking-tight text-[#111827] md:text-7xl md:leading-[1.03]">
              Build a Desk That Works as Clean as You Think
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-600 md:text-xl">
              Minimal tools designed to remove clutter, reduce distraction, and upgrade your workspace.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/northline-desk/products/magnetic-cable-dock" className="nl-btn-primary px-9 py-4">
                Shop the Setup
              </Link>
              <Link href="/northline-desk/products/magnetic-cable-dock#buy-box" className="nl-btn-secondary px-9 py-4">
                Learn More
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">
                {avatarImages.map((avatar, index) => (
                  <span
                    key={avatar}
                    className="h-9 w-9 rounded-full border-2 border-white bg-cover bg-center"
                    style={{ backgroundImage: `url('${avatar}')`, zIndex: avatarImages.length - index }}
                  />
                ))}
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-slate-600">
                Trusted by 1,000+ UK professionals upgrading their workspace
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-6 lg:col-span-7">
            <ImageSlot label="Minimalist desk setup" src={heroImages.main} className="col-span-12 h-[460px]" hideLabel />
            <ImageSlot label="Material detail" src={heroImages.detail} className="col-span-6 h-[260px]" hideLabel />
            <ImageSlot label="Workspace context" src={heroImages.context} className="col-span-6 h-[260px]" hideLabel />
          </div>
        </div>
      </section>

      <StoreSection
        eyebrow="Who this is for"
        title="Built for deep focus."
        subtitle="Our system supports those who take their workspace seriously."
        className="bg-zinc-50/60"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {identityCards.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-zinc-100 bg-white p-8 shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        id="reviews"
        eyebrow="Social Proof"
        title="Trusted in 18,000+ UK offices"
        className="border-y border-zinc-100 bg-white"
      >
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
          {socialProofLogos.map((logo) => (
            <p key={logo} className="text-lg font-semibold tracking-tight text-slate-500">
              {logo}
            </p>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        id="shop"
        eyebrow="Featured Product"
        title="The Upgrade Your Desk Deserves."
        subtitle="The One Upgrade Your Desk Needs"
      >
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
          <ImageSlot
            label="Magnetic Cable Dock"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgZ33623rXi8suJXi6kb8cZinTpF0O7kR1jl-7CaFpZ4WyxxtAPTIkvD3fpMTu0ZXFadjUi2SItMdUX6x1ScQSLShaHupP0OoVBcR-cvDmOQaO7U7Q2sjFv0kQPaVymcnWazyaPy19KcsLTAhxBfLqd0ZgRLJQJec9aRtqjdCsTnogkgtVoFRJHV5rQ_xJZ-bUZkHI6SIxMMN14ZqV8OkqPcGmPg1R-A_xvCX9sNi6LW_5L29EF9Fw-q3sYFq0_1e5oHnt0lNZgGk"
            className="aspect-square"
            hideLabel
          />

          <div>
            <div className="rounded-[1.5rem] border border-zinc-100 bg-zinc-50 p-8 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl font-semibold text-[#111827]">{magneticCableDock.title}</h3>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-slate-500">
                    Space Grey / Matte Black
                  </p>
                </div>
                <p className="text-3xl font-semibold text-[#111827]">£29.99</p>
              </div>
              <p className="mt-6 text-sm leading-relaxed text-slate-600">
                Solid zinc construction with N52 magnets. Keeps your cables exactly where you left them.
              </p>
              <Link href="/northline-desk/products/magnetic-cable-dock" className="nl-btn-primary mt-8 w-full justify-center py-4">
                Add to Cart - Ships Today
              </Link>
            </div>

            <ul className="mt-8 space-y-4">
              <li className="text-sm font-semibold text-slate-600">✓ Fits USB-C and Lightning cables</li>
              <li className="text-sm font-semibold text-slate-600">✓ Weighted micro-suction base</li>
              <li className="text-sm font-semibold text-slate-600">✓ Precision CNC-machined finish</li>
            </ul>
          </div>
        </div>
      </StoreSection>

      <StoreSection eyebrow="Rational Proof" title={magneticCableDock.whyItWorks.title} className="bg-zinc-50/60">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-zinc-100 bg-white p-10 text-center shadow-soft md:p-16">
          <p className="text-lg leading-relaxed text-slate-600 md:text-xl">{magneticCableDock.whyItWorks.body}</p>
          <p className="mt-8 text-sm font-semibold text-[#111827]">{magneticCableDock.returnsReassurance}</p>
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Benefits"
        title="Tactile tools for daily use."
        subtitle="We focus on small details that make a massive difference to your day."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article key={item.title} className="rounded-[1.5rem] border border-zinc-100 bg-white p-8 text-center shadow-soft">
              <h3 className="font-display text-2xl font-semibold text-[#111827]">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection
        eyebrow="Lifestyle"
        title="Clean workspace. Clear mind."
        subtitle="Designed for founder workflows, deep work sessions, and daily remote collaboration."
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <ImageSlot
            label="Founder Workflow"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiB8qi9pWcBJ5BEXLEYxHtD5F_8MXoWL78l6LvOIhfUiQlnb_cY0jHqkYgFRbNeCSZJHGTQJEsa7sNnPMz2U3Bgih_sJ5EAbGOg5p3QfgaDObhYLJxHg_wHQcyLAqPqi3ZfejSJe9L3kVo-oSn3hKmjhZ-yljE_PnlxhYAIitGSLgNbYIM1fjvyzvBxj05evdBDStYev5slRKE0Q99aIlaa6lETL3olgOqDzhFVNPJRpBpQRumJUndNi4RFOmVegjbW3SJMQEzACU"
            className="md:col-span-8 md:h-[620px]"
            hideLabel
          />
          <div className="flex flex-col gap-8 md:col-span-4">
            <ImageSlot
              label="Creative Session"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCm-4BVzXH-Cf9XIoUf2Mk_4NvP4dJ6wboRZjw0zMiYBeSnQ3ropw3tGcxY3lsKbYHWEhQvW8qYvNAXElmxccY6_XEeeyPQkyREO9eBiiOC9l25epykU8ll-lWkO4HBhR2U1YhE8yeRmpM1gWqXbdnoWls0pGNHKCLOBaIBSyAVsfQmfIleXpFrGRksqvS_6lbEnG7K1-wjZggTrnmvlH0UOpERFy34hr-Y8Vp7ii9AoQYE84DPU4xdJugrGxhLIgkUFpKHpwRIgE8"
              className="h-[295px]"
              hideLabel
            />
            <ImageSlot
              label="Global Connect"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUujwQRP5Q2l9UewkujlZMRxB42OfM46VzC89bgq0qtnQ4Qhi8h9QGj-aD99raMSa4FNjv6fMefsDTsUJ5TTvQUbPmKvdQGU2GakEgzTpYjT7VH6rvW5ZCA2apmnbNWFmbGoIVccrc2UbeU7jpCHDy9HkoM_TF2-_AMGZPfPvkh21PKPFKCwJJoFe9JNZcNRUK-9zNCdmTMuy_PfocsbsnciMRBkDHhlYoeB5NY6w3T5y8vioPZSclDNjJx7f7UKSWZNpIme85Iws"
              className="h-[295px]"
              hideLabel
            />
          </div>
        </div>
      </StoreSection>

      <StoreSection
        id="bundle"
        eyebrow={bundleOffer.savings}
        title={bundleOffer.title}
        subtitle={bundleOffer.subtitle}
        className="bg-[#111827] text-white"
      >
        <div className="grid gap-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 lg:grid-cols-[1fr_1fr] lg:items-center lg:p-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-300">{bundleOffer.price}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300">
              Transform your workspace into a deep-work station with the three core essentials.
            </p>
            <Link href="/northline-desk/products/magnetic-cable-dock" className="mt-8 inline-flex rounded-lg bg-white px-8 py-3 text-sm font-semibold text-[#111827] transition hover:bg-zinc-100">
              {bundleOffer.cta}
            </Link>
          </div>
          <ImageSlot
            label="Focus Bundle"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9SK7kGSZsKaPIrdJuATD2uXWSpJ1JnDRjVTLMyR7WCvnxmXxvTvCjYE3brEp-lXnjxE6UwoYIn7X3UvBz_gj2sEmlC23hMwQcrQSLaolAHVgOISTcHTT80kjnFJQNBdqd29FOBL8grVFB2tx_UZ_tWDkaNIpLuSEHPamg2F1rkAkYKKtjF2M1MRDa9UFp97NEtDa3n7sMI8kf07uB6amnDZFWSyXmQ_wReN9HW7hn-6QBxu2h4fSK-pwRLh-BmmzVoxfWyND3GQI"
            className="aspect-square border-white/20"
            hideLabel
          />
        </div>
      </StoreSection>

      <StoreSection eyebrow="Before vs After" title="Less clutter. More focus." subtitle="The difference is immediate and lasting.">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-soft">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500">Before</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-[#111827]">Tangled wires, constant distraction</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              Chaos creates cognitive load. Every tangled cable becomes a friction point.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-zinc-200 bg-white p-8 shadow-soft">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">After</p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-[#111827]">Clean, controlled, and ready</h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              We handle cable mess so your attention stays on the work that matters.
            </p>
          </article>
        </div>
      </StoreSection>

      <StoreSection
        id="reassurance"
        eyebrow="Confidence Guarantee"
        title="Order with confidence"
        subtitle="Fast UK fulfilment and risk-free reassurance at every step."
        className="bg-zinc-50/60"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reassuranceItems.map((item) => (
            <article key={item} className="rounded-2xl border border-zinc-100 bg-white p-6 text-sm font-semibold text-slate-700">
              {item}
            </article>
          ))}
        </div>
      </StoreSection>

      <StoreSection id="faq" eyebrow="FAQ Preview" title="Popular Questions" subtitle="Straight answers before checkout.">
        <FaqAccordion items={faqPreview} />
      </StoreSection>

      <StoreSection
        eyebrow="Email Capture"
        title="Join Northline Desk."
        subtitle="Get the Desk Reset Guide and 10% off your first order."
        className="bg-[#111827] text-white"
      >
        <div className="rounded-[2rem] border border-white/15 bg-white/5 p-8">
          <form className="grid gap-4 sm:grid-cols-[1fr_auto]" action="#">
            <input
              type="email"
              required
              placeholder="Email address"
              className="w-full rounded-lg border border-white/30 bg-white/10 px-6 py-4 text-sm font-semibold text-white placeholder:text-white/50 outline-none ring-2 ring-transparent transition focus:ring-white/50"
            />
            <button type="submit" className="rounded-lg bg-white px-8 py-4 text-sm font-semibold text-[#111827]">
              Join Now
            </button>
          </form>
        </div>
      </StoreSection>

      <StoreSection eyebrow="Supporting Products" title="Ecosystem Essentials">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {supportingShowcase.map((product) => (
            <Link key={product.title} href={product.href} className="group">
              <ImageSlot label={product.title} src={product.image} className="aspect-[4/5]" hideLabel />
              <h3 className="mt-4 text-sm font-semibold text-[#111827]">{product.title}</h3>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">{product.subtitle}</p>
              <p className="mt-3 text-sm font-semibold text-[#111827]">{product.price}</p>
            </Link>
          ))}
        </div>
      </StoreSection>
    </>
  );
}
