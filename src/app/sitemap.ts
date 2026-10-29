import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://tyler-portfolio-site.vercel.app", priority: 1 },
    { url: "https://tyler-portfolio-site.vercel.app/resume", priority: 0.8 },
  ];
}
