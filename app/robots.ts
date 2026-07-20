import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// Metadata routes are request-time handlers by default. Under `output: export`
// there is no request time, so they must be pinned static or the build fails.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
