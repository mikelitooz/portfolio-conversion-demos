import { ApexHomeStitch } from "@/components/apex/ApexHomeStitch";
import { SchemaScript } from "@/components/SchemaScript";
import { universalFaqs } from "@/lib/content";
import { buildMetadata, localBusinessSchema } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Emergency Plumber London | Apex Plumbing London",
  description:
    "Emergency plumbing and boiler repair across London with clear pricing, fast response, and trusted local engineers.",
  path: "/"
});

const homeFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: universalFaqs.slice(0, 6).map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function HomePage() {
  return (
    <>
      <SchemaScript data={localBusinessSchema()} />
      <SchemaScript data={homeFaqSchema} />
      <ApexHomeStitch faqs={universalFaqs} />
    </>
  );
}
