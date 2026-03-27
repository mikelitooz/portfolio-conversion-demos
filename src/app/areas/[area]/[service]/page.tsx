import { Metadata } from "next";
import { notFound } from "next/navigation";
import { AreaPageTemplate } from "@/components/AreaPageTemplate";
import { areaServicePages, getAreaServicePage } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";

type AreaServicePageProps = {
  params: Promise<{ area: string; service: string }>;
};

export async function generateStaticParams() {
  return areaServicePages.map((entry) => ({
    area: entry.areaSlug,
    service: entry.serviceRouteSegment
  }));
}

export async function generateMetadata({ params }: AreaServicePageProps): Promise<Metadata> {
  const { area, service } = await params;
  const page = getAreaServicePage(area, service);

  if (!page) {
    return buildMetadata({
      title: "Area Page Not Found",
      description: "The requested area service page could not be found.",
      path: "/areas"
    });
  }

  return buildMetadata({
    title: `${page.title} | Apex Plumbing London`,
    description: `${page.intro} Local response, clear pricing, and trusted engineers.`,
    path: `/areas/${page.areaSlug}/${page.serviceRouteSegment}`
  });
}

export default async function AreaServiceDetailPage({ params }: AreaServicePageProps) {
  const { area, service } = await params;
  const page = getAreaServicePage(area, service);

  if (!page) {
    notFound();
  }

  return <AreaPageTemplate page={page} />;
}
