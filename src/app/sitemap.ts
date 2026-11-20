import type { MetadataRoute } from "next";
import { ARTICLES, SITE, articleHref } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/services", "/about", "/insights", "/careers", "/contact", "/privacy", "/terms", "/disclaimer"];
  return [
    ...pages.map((p) => ({ url: `${SITE.url}${p}`, changeFrequency: "monthly" as const, priority: p === "" ? 1 : 0.7 })),
    ...ARTICLES.map((a) => ({ url: `${SITE.url}${articleHref(a.slug)}`, lastModified: a.isoDate, priority: 0.6 })),
  ];
}
