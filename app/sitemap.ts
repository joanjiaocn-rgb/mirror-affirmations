import type { MetadataRoute } from "next";
import { articlePages } from "@/lib/articles";
import { staticRoutes } from "@/lib/routes";
import { absoluteUrl, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(`${site.lastUpdated}T00:00:00.000Z`);

  return [
    ...staticRoutes.map((path) => ({
      url: absoluteUrl(path),
      lastModified
    })),
    ...articlePages.map((page) => ({
      url: absoluteUrl(`/${page.slug}`),
      lastModified
    }))
  ];
}
