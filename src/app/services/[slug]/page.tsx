import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { getServiceBySlug, services } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      path: "/services"
    });
  }

  return buildMetadata({
    title: `${service.title} | Apex Plumbing London`,
    description: `${service.summary} Fast London response, transparent pricing, and trusted engineers.`,
    path: `/services/${service.slug}`
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return <ServicePageTemplate service={service} />;
}
