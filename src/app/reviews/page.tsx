import { Section } from "@/components/Section";
import { TestimonialCards } from "@/components/TestimonialCards";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Verified Customer Reviews | Apex Plumbing London",
  description: "Read verified London customer reviews for emergency plumbing, boiler repair, and leak detection.",
  path: "/reviews"
});

export default function ReviewsPage() {
  return (
    <>
      <section className="bg-mesh">
        <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mint">Reviews</p>
          <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
            Verified Feedback from London Customers
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-steel md:text-lg">
            Read recent feedback from homeowners and landlords who booked emergency and boiler services with us.
          </p>
        </div>
      </section>
      <Section
        eyebrow="Social Proof"
        title="Recent customer outcomes"
        subtitle="See the service type, borough, and result for each completed job."
      >
        <TestimonialCards />
      </Section>
    </>
  );
}
