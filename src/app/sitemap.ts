import type { MetadataRoute } from "next";
import { ARTICLES, SERVICES, SITE, articleHref, serviceHref } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/insights", "/careers", "/contact", "/privacy", "/terms", "/disclaimer"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...SERVICES.map((x) => ({ url: `${SITE.url}${serviceHref(x.slug)}`, changeFrequency: "monthly" as const, priority: 0.9 })),
    ...ARTICLES.map((a) => ({ url: `${SITE.url}${articleHref(a.slug)}`, lastModified: a.isoDate, priority: 0.6 })),
  ];
}
