import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// See the note in robots.ts — static export has no request time.
export const dynamic = "force-static";

// Four pages, all static. The individual products are not listed here: they
// live on their own domains and are canonical there, so claiming them in this
// sitemap would be asserting ownership of URLs this site does not serve.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/work/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/stack/`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/about/`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
  ];
}
