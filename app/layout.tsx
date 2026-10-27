import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NAME, POSITIONING, SITE_URL, personJsonLd, HANDLE, og } from "@/lib/site";

// Archivo carries the display voice. The width axis is loaded because the
// nameplate sets it to 125% — without `axes`, font-stretch silently does nothing.
// Self-hosted from @fontsource (OFL) rather than next/font/google: the Google variant
// downloads fonts during `next build`, and a failed download fails the whole deploy.
const archivo = localFont({
  src: "../node_modules/@fontsource-variable/archivo/files/archivo-latin-standard-normal.woff2",
  weight: "100 900",
  variable: "--font-archivo",
  display: "swap",
});

// IBM Plex was drawn for an engineering company and reads like it: precise,
// unfussy, and it has a mono sibling that shares its skeleton — which is what
// makes the ledger columns sit correctly beside body text.
const plexSans = localFont({
  src: "../node_modules/@fontsource-variable/ibm-plex-sans/files/ibm-plex-sans-latin-wght-normal.woff2",
  weight: "100 700",
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} — IT professional, maker of MSRX`,
    template: `%s — ${NAME}`,
  },
  description: POSITIONING,
  applicationName: NAME,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  // Searchers look for the person, the handle, and the things he built. These
  // are the terms a real query would use, not a keyword pile.
  keywords: [
    NAME,
    HANDLE,
    "IT professional",
    "iOS developer",
    "macOS developer",
    "Swift",
    "SwiftUI",
    "Next.js",
    "TypeScript",
    "MSRX",
    "Bengaluru",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    ...og({
      title: `${NAME} — IT professional, maker of MSRX`,
      description: POSITIONING,
      path: "/",
    }),
    firstName: "Mrinal",
    lastName: "Singh Raja",
    username: HANDLE,
  },
  twitter: {
    card: "summary_large_image",
    title: `${NAME} — IT professional, maker of MSRX`,
    description: POSITIONING,
    creator: `@${HANDLE}`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0d10" },
  ],
};

// Runs before first paint, so the correct theme is already on <html> when the
// first pixel lands and neither theme flashes. A saved choice always wins; the
// OS preference is consulted only when there is no saved choice.
const themeInit = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="light"}})()`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is scoped to <html> alone: the theme script
    // mutates this element before React hydrates, and nothing else.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
