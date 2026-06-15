import type { MetadataRoute } from "next";
import { tools } from "@/lib/tools";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://devtoolkit.cc";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/tools/`, changeFrequency: "weekly", priority: 0.9 },
    ...tools.map((tool) => ({
      url: `${siteUrl}/tools/${tool.id}/`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
