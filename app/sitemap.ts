import type { MetadataRoute } from "next";
import { articles, caseStudies, industries, services, site } from "@/lib/content";

const baseUrl = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industries",
    "/case-studies",
    "/resources",
    "/about",
    "/contact",
    "/privacy",
    "/cookies",
    "/terms",
  ];
  const dynamicRoutes = [
    ...services.map((item) => `/services/${item.slug}`),
    ...industries.map((item) => `/industries/${item.slug}`),
    ...caseStudies.map((item) => `/case-studies/${item.slug}`),
    ...articles.map((item) => `/resources/${item.slug}`),
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
