import {
  projects,
  appStoreProjects,
  webProjects,
  noAccountProjects,
  TOTAL,
} from "./work";

// ── Site constants ────────────────────────────────────────────────────────────
// This is a GitHub user site, so it is served from the domain root.
export const SITE_URL = "https://mrinalsinghraja.github.io";
export const NAME = "Mrinal Singh Raja";
export const HANDLE = "mrinalsinghraja";
export const EMAIL = "mrinalsinghraja@gmail.com";
export const LOCATION = "Bengaluru, India";

export const PERSON_ID = `${SITE_URL}/#person`;

export const SOCIALS = {
  github: `https://github.com/${HANDLE}`,
  linkedin: `https://www.linkedin.com/in/${HANDLE}/`,
  x: `https://x.com/${HANDLE}`,
  appStore: "https://apps.apple.com/us/developer/mrinal-singh-raja/id1879524280",
  msrx: "https://www.msrx.co.in",
};

/** Absolute URL for a site-relative path. Schema and OG both require absolute. */
export function abs(path: string): string {
  return new URL(path, SITE_URL).toString();
}

/**
 * Builds a page's Open Graph block.
 *
 * Next shallow-merges metadata, so a child page that declares `openGraph`
 * replaces the parent's object outright — which silently dropped og:image and
 * og:type from every interior page. Routing all pages through this helper means
 * the shared fields cannot be lost by forgetting to repeat them.
 */
export function og({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  return {
    type: "profile" as const,
    siteName: NAME,
    locale: "en_US",
    url: path,
    title,
    description,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: NAME }],
  };
}

// Counts are read from the catalog so the copy cannot drift from the data.
export const COUNTS = {
  total: TOTAL,
  web: webProjects.length,
  appStore: appStoreProjects.length,
  noAccount: noAccountProjects.length,
};

/** One sentence, reused as the meta description and the hero subhead. */
export const POSITIONING = `Independent software engineer in ${LOCATION}. I design and ship production apps end to end — ${COUNTS.total} live now across the web, macOS and iOS, every one of them free.`;

// ── Structured data ───────────────────────────────────────────────────────────
// A Person graph rather than an Organization: this site is the individual, and
// MSRX is named as the brand the work ships under.
//
// No jobTitle, no employer, no award and no aggregate rating are asserted here.
// Schema is read by machines that cannot check, which is exactly why it should
// only ever carry things a human could verify.
export const personJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: NAME,
      alternateName: HANDLE,
      url: SITE_URL,
      email: `mailto:${EMAIL}`,
      description: POSITIONING,
      knowsAbout: [
        "Software engineering",
        "iOS development",
        "macOS development",
        "Swift",
        "SwiftUI",
        "TypeScript",
        "Next.js",
        "React",
        "Product engineering",
      ],
      homeLocation: { "@type": "Place", name: LOCATION },
      sameAs: [
        SOCIALS.github,
        SOCIALS.linkedin,
        SOCIALS.x,
        SOCIALS.appStore,
        SOCIALS.msrx,
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${NAME} — software engineer`,
      description: POSITIONING,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
};

/** Every shipped product as an ItemList. Used on /work. */
export const workJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: `Software shipped by ${NAME}`,
  numberOfItems: projects.length,
  itemListElement: projects.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.name,
      description: p.summary,
      url: p.href,
      applicationCategory: p.platform === "web" ? "WebApplication" : "MobileApplication",
      operatingSystem:
        p.platform === "web"
          ? p.macAppStoreHref
            ? "Any (web browser), macOS"
            : "Any (web browser)"
          : p.platform === "macos"
            ? "macOS"
            : "iOS",
      author: { "@id": PERSON_ID },
      // Asserted for all twenty because all twenty were checked: every App
      // Store listing reports "price":0, and no web app has a payment step.
      // Schema is read by machines that cannot verify, so it only ever carries
      // claims that were verified first.
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  })),
};

export function breadcrumbJsonLd(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: abs(c.path),
    })),
  };
}
