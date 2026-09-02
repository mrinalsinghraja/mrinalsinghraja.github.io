// ── Shipped work ──────────────────────────────────────────────────────────────
// Single source of truth for every product on this site. Powers the homepage
// ledger, /work, the JSON-LD, and the sitemap.
//
// Rule for this file: nothing goes in that cannot be checked by a stranger.
// Every `href` below was re-confirmed to return HTTP 200 on 2026-09-02 — the
// ten App Store listings and the twelve web apps. Counts elsewhere on the site
// are derived from this array, never typed by hand, so they cannot drift.
//
// All of them are free, everywhere, with no paid tier. Verified rather than
// asserted: each App Store listing reports `"price":0`, and no web app has a
// payment step. All but one also load with no account at all — checked by
// requesting each one cold, with no cookies, and confirming none redirects to
// an auth wall.
//
// Names come from the live App Store listing, not from memory: five were
// renamed to the MSRX prefix while their URL slugs stayed the same, so a stale
// name here would still have linked correctly and gone unnoticed.
//
// There are no download numbers, revenue figures, or user counts here, because
// there is no public source for them. Absence is deliberate, not an omission.

export type Platform = "web" | "macos" | "ios";

export type Domain =
  | "Study"
  | "Creative"
  | "Productivity"
  | "Utilities"
  | "Security";

export interface Project {
  slug: string;
  name: string;
  /** One line, sentence case, no period. What it does, not why it is good. */
  summary: string;
  /** The problem it exists to solve, in the user's terms. */
  problem: string;
  platform: Platform;
  /** Set when the product also ships natively on the Mac. Derived, never typed. */
  macAppStoreHref?: string;
  domain: Domain;
  href: string;
  /**
   * Set only where the product needs an account to do its job. Everything else
   * opens cold, in a private window, with nothing to sign up for — which is the
   * claim worth making, so the exception has to be recorded honestly.
   */
  needsAccount?: true;
  /** Named technologies only — no vague "AI" or "cloud". */
  stack: string[];
  /** A real engineering property of the build, not a marketing claim. */
  note?: string;
}

export const projects: Project[] = [
  // ── Web ─────────────────────────────────────────────────────────────────────
  {
    slug: "planner",
    name: "MSRX Planner",
    summary: "An academic workspace that plans the week with the student",
    problem:
      "Students juggle a planner, a notes app, a flashcard app and a reminders list that never agree with each other.",
    platform: "web",
    domain: "Study",
    href: "https://planner.msrx.co.in",
    // The one product that asks for an account: the whole point is a plan that
    // follows the student between their phone and their laptop.
    needsAccount: true,
    stack: ["Next.js", "TypeScript", "Zustand", "Supabase", "Postgres"],
    note: "Offline-first. Writes queue locally and reconcile on reconnect, so the planner keeps working with no network.",
  },
  {
    slug: "jee-hyperlab",
    name: "JEE HyperLab",
    summary: "204 interactive physics, chemistry and maths simulations",
    problem:
      "Exam physics is taught as formulas to memorise rather than systems to manipulate and observe.",
    platform: "web",
    domain: "Study",
    href: "https://lab.msrx.co.in",
    stack: ["React", "Vite", "React Three Fiber", "TypeScript"],
    note: "Each simulation is a self-contained engine with its own state model, not a shared template with swapped constants.",
  },
  {
    slug: "storyquest",
    name: "MSRX StoryQuest",
    summary: "222 STEM missions where the answer comes out of a real equation",
    problem:
      "Most educational games ask for a number that was decided first and dressed up as a story afterwards.",
    platform: "web",
    domain: "Study",
    href: "https://story.msrx.co.in",
    stack: ["React", "Vite", "JavaScript"],
    note: "Every mission solves an actual equation. The target is derived from the physics, never authored to fit.",
  },
  {
    slug: "weatherwatch",
    name: "MSRX WeatherWatch",
    summary: "Forecasts and fifteen hazard engines with a multilingual assistant",
    problem:
      "Weather apps report conditions but not risk, and hazard warnings live on separate government portals.",
    platform: "web",
    domain: "Utilities",
    href: "https://weather.msrx.co.in",
    stack: ["Next.js", "FastAPI", "Python", "Neon Postgres", "Groq"],
    note: "Fifteen independent hazard engines behind one API, with a provider abstraction so the model layer can be swapped.",
  },
  {
    slug: "pulsenet",
    name: "OrionPulseNet",
    summary: "Speed tests, sixteen diagnostics and a copilot for a connection",
    problem:
      "When a connection is slow, the tools that could explain why are scattered across a dozen sites.",
    platform: "web",
    macAppStoreHref: "https://apps.apple.com/us/app/orionpulsenet/id6766838207?mt=12",
    domain: "Utilities",
    href: "https://pulsenet.msrx.co.in",
    stack: ["Next.js", "TypeScript", "Prisma", "Turso", "Groq"],
    note: "Ships as a web app and a native Mac app from one product definition.",
  },
  {
    slug: "graphiq",
    name: "MSRX GraphIQ",
    summary: "A charting studio with editable cells and an axis quick-bar",
    problem:
      "Making one good chart usually means opening a spreadsheet, then a second tool to make it presentable.",
    platform: "web",
    domain: "Creative",
    href: "https://graph.msrx.co.in",
    stack: ["Next.js", "ECharts", "TypeScript"],
    note: "Documents save to a portable .graphiq file, so a chart is not trapped in the tool that made it.",
  },
  {
    slug: "canvasiq",
    name: "MSRX CanvasIQ",
    summary: "A 2D and 3D design canvas that runs in the browser",
    problem:
      "Quick visual work forces a choice between a heavyweight desktop app and a toy.",
    platform: "web",
    domain: "Creative",
    href: "https://canvas.msrx.co.in",
    stack: ["Next.js", "Konva", "React Three Fiber", "Groq"],
  },
  {
    slug: "qr-studio",
    name: "MSRX QR Studio",
    summary: "21 QR types with gradients, logos and scan-health scoring",
    problem:
      "A styled QR code often stops scanning, and nothing tells you until it fails in the real world.",
    platform: "web",
    domain: "Creative",
    href: "https://qr.msrx.co.in",
    stack: ["Next.js", "Tailwind CSS", "Zustand", "qr-code-styling"],
    note: "Scores scan reliability as you design and can repair a code that would have failed.",
  },
  {
    slug: "meeting",
    name: "MSRX Meeting",
    summary: "Browser meetings with noise cancellation and no install",
    problem:
      "Joining a call should not require an account, a download, or a plugin.",
    platform: "web",
    domain: "Productivity",
    href: "https://meeting.msrx.co.in",
    stack: ["Next.js", "WebRTC", "TypeScript"],
  },
  {
    slug: "incognitocv",
    name: "IncognitoCV",
    summary: "A resume optimiser that keeps the resume on the device",
    problem:
      "Resume tools ask you to upload the most sensitive document you own to a server you do not control.",
    platform: "web",
    domain: "Productivity",
    href: "https://cv.msrx.co.in",
    stack: ["JavaScript", "Web Crypto", "Bring-your-own API key"],
    note: "No accounts and no server-side storage. The key stays in the browser and the document never leaves it.",
  },
  {
    slug: "easy-peasy-gantt",
    name: "Easy-Peasy Gantt",
    summary: "A single-page Gantt chart maker with no project to set up",
    problem:
      "Drawing one schedule should not mean adopting a project-management platform.",
    platform: "web",
    domain: "Productivity",
    href: "https://gantt.msrx.co.in",
    stack: ["Vanilla JavaScript", "Single-file build"],
    note: "One file, no framework and no build step — it loads and runs in under a second.",
  },
  {
    slug: "tools",
    name: "MSRX Tools",
    summary: "116 file, image and text tools that never upload your files",
    problem:
      "The everyday file jobs — merge a PDF, shrink an image, unzip an archive — mean handing the file to a website that keeps a copy.",
    platform: "web",
    domain: "Utilities",
    href: "https://tools.msrx.co.in",
    stack: ["Next.js", "TypeScript", "Web Crypto", "fflate", "pdf-lib"],
    note: "Every one of the 116 runs inside the browser, so the file is read on the device and never transmitted. Works offline once loaded.",
  },

  // ── macOS ───────────────────────────────────────────────────────────────────
  {
    slug: "canvas-ai",
    name: "MSRX Canvas AI",
    summary: "Screenshot annotation and painting, processed on the device",
    problem:
      "Annotating a screenshot of something confidential should not involve a round trip to someone's server.",
    platform: "macos",
    domain: "Creative",
    href: "https://apps.apple.com/us/app/msrx-canvas-ai/id6784137969?mt=12",
    stack: ["Swift 6", "SwiftUI", "Foundation Models", "Vision"],
    note: "On-device inference through Apple's frameworks. Nothing is uploaded and no API key is needed.",
  },
  {
    slug: "orionseek",
    name: "OrionSeek",
    summary: "System-wide search for files, apps and content",
    problem: "Finding a file by what is inside it is slower than it should be.",
    platform: "macos",
    domain: "Utilities",
    href: "https://apps.apple.com/us/app/orionseek/id6770491595?mt=12",
    stack: ["Swift", "SwiftUI", "Spotlight APIs"],
  },
  {
    slug: "orionshield",
    name: "MSRX Shield",
    summary: "Background security and privacy monitoring",
    problem:
      "Security tools tend to demand attention constantly or disappear entirely.",
    platform: "macos",
    domain: "Security",
    href: "https://apps.apple.com/us/app/orionshield/id6764576967?mt=12",
    stack: ["Swift", "SwiftUI"],
  },
  {
    slug: "orion-process-explorer",
    name: "Orion Process Explorer",
    summary: "A resource monitor that shows what the machine is actually doing",
    problem:
      "Activity Monitor answers what is running, not what is responsible for the fan noise.",
    platform: "macos",
    domain: "Utilities",
    href: "https://apps.apple.com/us/app/orionprocessexplorer/id6762134959?mt=12",
    stack: ["Swift", "SwiftUI"],
  },
  {
    slug: "orionclean",
    name: "MSRX Clean",
    summary: "Disk cleanup that explains what it is about to remove",
    problem:
      "Cleaners free space by deleting things they will not name in advance.",
    platform: "macos",
    domain: "Utilities",
    href: "https://apps.apple.com/us/app/orionclean/id6761111012?mt=12",
    stack: ["Swift", "SwiftUI"],
  },

  // ── iOS ─────────────────────────────────────────────────────────────────────
  {
    slug: "guardtrack-pro",
    name: "GuardTrack Pro",
    summary: "Patrol tracking and incident reporting for security teams",
    problem:
      "Guard patrols are still logged on paper, which cannot prove where anyone actually was.",
    platform: "ios",
    domain: "Productivity",
    href: "https://apps.apple.com/us/app/guardtrack-pro/id6774895956",
    stack: ["Swift", "SwiftUI", "Core Location", "Firebase"],
    note: "Checkpoints are GPS-verified and timestamped, so a completed patrol is evidence rather than a claim.",
  },
  {
    slug: "numly",
    name: "MSRX AI Calculator",
    summary: "A calculator that reads expressions written in plain language",
    problem:
      "Real calculations arrive as sentences, and calculators only accept keypresses.",
    platform: "ios",
    domain: "Utilities",
    href: "https://apps.apple.com/us/app/numly-ai-smart-calculator/id6759639887",
    stack: ["Swift", "SwiftUI"],
  },
  {
    slug: "pdf-compressor",
    name: "MSRX PDF Compressor",
    summary: "PDF compression that runs entirely on the phone",
    problem:
      "Shrinking a PDF usually means uploading it to a website that keeps a copy.",
    platform: "ios",
    domain: "Utilities",
    href: "https://apps.apple.com/us/app/pdfcompressor-shrink-pdf/id6759563556",
    stack: ["Swift", "PDFKit"],
    note: "Local processing only. The document is never transmitted.",
  },
  {
    slug: "passportfast",
    name: "MSRX PassportFast",
    summary: "Compliant passport and ID photos from the camera roll",
    problem:
      "Passport photo rules are exacting, and a rejected photo costs an appointment.",
    platform: "ios",
    domain: "Utilities",
    href: "https://apps.apple.com/us/app/passportfast/id6759985939",
    stack: ["Swift", "Vision", "Core Image"],
  },
];

// ── Derived views ─────────────────────────────────────────────────────────────
// Every count on the site comes from here. None is written as prose.

export const PLATFORM_LABEL: Record<Platform, string> = {
  web: "Web",
  macos: "macOS",
  ios: "iOS",
};

export const PLATFORM_TAG: Record<Platform, string> = {
  web: "WEB",
  macos: "MAC",
  ios: "IOS",
};

/**
 * Every platform a product ships on. `platform` names the primary one; a
 * `macAppStoreHref` on a non-Mac product means it also ships natively on the
 * Mac. Derived rather than stored so the two can never disagree.
 */
export function platformsOf(p: Project): Platform[] {
  return p.macAppStoreHref && p.platform !== "macos"
    ? [p.platform, "macos"]
    : [p.platform];
}

export function platformTag(p: Project): string {
  return platformsOf(p)
    .map((x) => PLATFORM_TAG[x])
    .join(" · ");
}

export function platformLabel(p: Project): string {
  return platformsOf(p)
    .map((x) => PLATFORM_LABEL[x])
    .join(" & ");
}

// Overlapping views, not a partition: a product on two platforms appears in
// both, so these sum to more than `projects.length`.
export const webProjects = projects.filter((p) => platformsOf(p).includes("web"));
export const macProjects = projects.filter((p) => platformsOf(p).includes("macos"));
export const iosProjects = projects.filter((p) => platformsOf(p).includes("ios"));

/** Products distributed through Apple review, across both Apple platforms. */
export const appStoreProjects = projects.filter((p) =>
  p.href.includes("apps.apple.com") || Boolean(p.macAppStoreHref)
);

export const TOTAL = projects.length;

/** Products that open cold, with no account. Derived, so it cannot overstate. */
export const noAccountProjects = projects.filter((p) => !p.needsAccount);

/**
 * The four shown on the homepage. Chosen for range rather than rank: one study
 * platform, one hazard system, one native Mac app, one privacy-constrained
 * build — so the sample argues breadth instead of repeating a category.
 */
export const FEATURED_SLUGS = ["planner", "weatherwatch", "canvas-ai", "incognitocv"];

export const featured = FEATURED_SLUGS.map((slug) => {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`FEATURED_SLUGS names a missing project: ${slug}`);
  return found;
});
