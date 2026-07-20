import type { Metadata } from "next";
import { projects } from "@/lib/work";
import { NAME, og, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Stack",
  description: `The tools ${NAME} builds with and the reasoning behind each choice — Swift and SwiftUI on Apple platforms, TypeScript, Next.js and React on the web.`,
  alternates: { canonical: "/stack/" },
  openGraph: og({
    title: `Stack — ${NAME}`,
    description: "What I build with, and why each choice earns its place.",
    path: "/stack/",
  }),
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Stack", path: "/stack/" },
];

// Written as prose with reasoning rather than a wall of logos. A badge grid
// tells a reader what was installed; this tells them how the person thinks.
const GROUPS = [
  {
    heading: "Apple platforms",
    body: "Swift and SwiftUI for everything native. SwiftUI moves fast enough to justify itself once a layout stops fighting it, and dropping to AppKit or UIKit for the parts it handles badly is cheaper than adopting a cross-platform framework and losing the platform's own behaviour.",
    items: ["Swift 6", "SwiftUI", "AppKit", "Vision", "PDFKit", "Core Location", "Foundation Models"],
  },
  {
    heading: "Web",
    body: "Next.js on the App Router with TypeScript in strict mode. Most of these sites are static exports or mostly-static pages, because a personal-scale product should not need a server running to show someone a page. Tailwind handles styling; a small token layer in CSS custom properties handles theming, so light and dark are one system rather than two stylesheets.",
    items: ["TypeScript", "Next.js", "React", "Tailwind CSS", "Zustand", "Vite"],
  },
  {
    heading: "Data and backend",
    body: "Postgres when relations matter, SQLite at the edge when they do not. Prisma where the schema is the source of truth. FastAPI when the work is genuinely Python-shaped — numerical models and hazard engines — rather than reaching for one language everywhere.",
    items: ["Postgres", "Supabase", "Prisma", "Turso", "SQLite", "FastAPI", "Python"],
  },
  {
    heading: "Models",
    body: "Model access sits behind a provider abstraction in every project that uses it, so a model can be swapped without touching feature code. On Apple platforms the preference is on-device inference through Apple's own frameworks: no key to manage, no network round trip, and nothing to explain in a privacy policy.",
    items: ["Anthropic Claude", "Groq", "Apple Foundation Models"],
  },
  {
    heading: "Shipping",
    body: "Vercel for the web, App Store Connect for native, GitHub for everything. Deployment is boring on purpose — the interesting problems should be in the product, not in getting it in front of people.",
    items: ["Vercel", "App Store Connect", "GitHub", "Xcode"],
  },
];

// Derived from the catalog so it cannot contradict the work pages.
const stackFrequency = (() => {
  const counts = new Map<string, number>();
  for (const p of projects) {
    for (const tech of p.stack) counts.set(tech, (counts.get(tech) ?? 0) + 1);
  }
  return [...counts.entries()]
    .filter(([, n]) => n > 1)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
})();

export default function Stack() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />

      <div className="mx-auto max-w-[68rem] px-5 pt-14 pb-12 sm:px-8 sm:pt-20">
        <p className="label mb-5">Stack</p>
        <h1 className="display mb-5 text-[clamp(30px,5.4vw,52px)] text-[var(--ink)]">
          What I build with
        </h1>
        <p className="max-w-[40rem] text-[16.5px] leading-relaxed text-[var(--ink-2)]">
          Tools are a means, so this page gives the reasoning rather than a wall of
          logos. The short version: use the platform's own frameworks, keep the
          number of moving parts low, and make the boring parts boring.
        </p>
      </div>

      <div className="mx-auto max-w-[68rem] px-5 sm:px-8">
        <div className="space-y-0">
          {GROUPS.map((g) => (
            <section
              key={g.heading}
              className="grid gap-x-10 gap-y-4 border-t border-[var(--rule)] py-9 lg:grid-cols-[13rem_minmax(0,1fr)]"
            >
              <h2 className="display-sm text-[17px] text-[var(--ink)]">
                {g.heading}
              </h2>
              <div>
                <p className="mb-4 max-w-[42rem] text-[15px] leading-relaxed text-[var(--ink-2)]">
                  {g.body}
                </p>
                <ul className="flex flex-wrap gap-x-2 gap-y-2">
                  {g.items.map((item) => (
                    <li
                      key={item}
                      className="mono rounded-[var(--radius-sm)] bg-[var(--sunk)] px-2.5 py-1 text-[11.5px] text-[var(--ink-2)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>

        {/* Counted from the catalog, so it reports actual reuse rather than
            claimed familiarity. */}
        <section
          aria-labelledby="reuse-h"
          className="border-t border-[var(--rule)] py-9"
        >
          <h2
            id="reuse-h"
            className="display-sm mb-2 text-[17px] text-[var(--ink)]"
          >
            What actually recurs
          </h2>
          <p className="mb-5 max-w-[42rem] text-[15px] leading-relaxed text-[var(--ink-2)]">
            Counted from the shipped catalog on this site, not from memory. Anything
            used in more than one product appears here, most-used first.
          </p>
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {stackFrequency.map(([tech, n]) => (
              <li
                key={tech}
                className="mono flex items-baseline justify-between gap-3 border-b border-[var(--rule)] py-1.5 text-[12.5px] text-[var(--ink-2)]"
              >
                <span>{tech}</span>
                <span className="text-[var(--ink-3)]">{n}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
