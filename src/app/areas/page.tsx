import { AreaCards } from "@/components/AreaCards";
import { CallToActionPanel } from "@/components/CallToActionPanel";
import { Section } from "@/components/Section";
import { areaServicePages } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Areas We Serve | Apex Plumbing London",
  description:
    "Explore local plumbing and boiler service pages for Camden, Islington, Hackney, Westminster, Greenwich, and Lambeth.",
  path: "/areas"
});

export default function AreasPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Areas We Serve</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Local Plumbing Coverage Across London Boroughs
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Find your borough to see local response details, recent jobs, and the fastest way to book help.
          </p>
        </div>
      </section>

      <Section
        eyebrow="Local Pages"
        title="Find your borough page"
        subtitle="Every area page includes local job examples, service coverage, and direct booking options."
      >
        <AreaCards items={areaServicePages} />
      </Section>

      <Section
        eyebrow="Need Urgent Help?"
        title="Call now for emergency dispatch"
        subtitle="For urgent leaks, no-water incidents, and heating failures, phone support is fastest."
        className="bg-fog"
      >
        <CallToActionPanel
          title="Emergency? Speak to our dispatch team"
          subtitle="Share your postcode and issue. We will confirm the earliest engineer slot."
        />
      </Section>
    </>
  );
}
