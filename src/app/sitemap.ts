import type { MetadataRoute } from "next";
import { areaServicePages, blogPosts, services } from "@/lib/content";

const base = "https://www.apexplumbinglondon.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "",
    "/about",
    "/services",
    "/areas",
    "/contact",
    "/faq",
    "/blog",
    "/thank-you",
    "/reviews",
    "/pricing",
    "/privacy-policy",
    "/terms",
    "/cookie-policy"
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7
  }));

  const servicePages = services.map((service) => ({
    url: `${base}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8
  }));

  const areaPages = areaServicePages.map((page) => ({
    url: `${base}/areas/${page.areaSlug}/${page.serviceRouteSegment}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.75
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.65
  }));

  return [...staticPages, ...servicePages, ...areaPages, ...blogPages];
}
