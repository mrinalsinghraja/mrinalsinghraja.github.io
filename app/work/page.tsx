import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import {
  webProjects,
  macProjects,
  iosProjects,
  platformLabel,
  type Project,
} from "@/lib/work";
import { COUNTS, NAME, og, workJsonLd, breadcrumbJsonLd } from "@/lib/site";

const DESCRIPTION = `All ${COUNTS.total} apps ${NAME} has shipped — ${COUNTS.web} web apps, plus ${COUNTS.appStore} on the Apple App Store across macOS and iOS. Each one live, with the problem it solves and what it is built with.`;

export const metadata: Metadata = {
  title: "Work",
  description: DESCRIPTION,
  alternates: { canonical: "/work/" },
  openGraph: og({
    title: `Work — ${NAME}`,
    description: `${COUNTS.total} shipped apps across the web, macOS and iOS.`,
    path: "/work/",
  }),
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Work", path: "/work/" },
];

const SECTIONS = [
  {
    id: "web",
    heading: "Web",
    note: "Free to open, no account required.",
    list: webProjects,
  },
  {
    id: "macos",
    heading: "macOS",
    note: "Native Mac apps, distributed through the Mac App Store.",
    list: macProjects,
  },
  {
    id: "ios",
    heading: "iOS",
    note: "Native iPhone apps, distributed through the App Store.",
    list: iosProjects,
  },
];

function Entry({ project }: { project: Project }) {
  return (
    <article className="border-t border-[var(--rule)] py-7">
      <div className="grid gap-x-10 gap-y-4 lg:grid-cols-[minmax(0,1fr)_15rem]">
        <div>
          <div className="mb-2 flex items-center gap-2.5">
            <span className="dot-live" aria-hidden="true" />
            <h3 className="display-sm text-[18px] text-[var(--ink)]">
              {project.name}
            </h3>
          </div>

          <p className="mb-3 text-[15px] text-[var(--ink)]">{project.summary}</p>

          <p className="mb-3 max-w-[42rem] text-[14px] leading-relaxed text-[var(--ink-2)]">
            {project.problem}
          </p>

          {project.note && (
            <p className="max-w-[42rem] border-l-2 border-[var(--rule-strong)] pl-3 text-[13.5px] leading-relaxed text-[var(--ink-2)]">
              {project.note}
            </p>
          )}
        </div>

        <aside className="lg:pt-1">
          <dl className="space-y-3">
            <div>
              <dt className="label mb-1">Runs on</dt>
              <dd className="mono text-[12.5px] text-[var(--ink-2)]">
                {platformLabel(project)}
              </dd>
            </div>
            <div>
              <dt className="label mb-1">Built with</dt>
              <dd className="mono text-[12.5px] leading-relaxed text-[var(--ink-2)]">
                {project.stack.join(", ")}
              </dd>
            </div>
          </dl>

          <a
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-4 inline-flex min-h-6 items-center gap-1.5 text-[13.5px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
          >
            {project.platform === "web" ? "Open it" : "View on the App Store"}
            <ArrowUpRight
              size={13}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
            <span className="sr-only">(opens in a new tab)</span>
          </a>

          {project.macAppStoreHref && (
            <a
              href={project.macAppStoreHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-6 items-center text-[13.5px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
            >
              Mac App Store
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </aside>
      </div>
    </article>
  );
}

export default function Work() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />

      <div className="mx-auto max-w-[68rem] px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
        <p className="label mb-5">Work</p>
        <h1 className="display mb-5 text-[clamp(30px,5.4vw,52px)] text-[var(--ink)]">
          {COUNTS.total} apps, all of them live
        </h1>
        <p className="max-w-[40rem] text-[16.5px] leading-relaxed text-[var(--ink-2)]">
          {COUNTS.web} run in the browser and need no account. {COUNTS.appStore} went
          through Apple review and ship natively on macOS or iOS. Each entry below
          says what problem it solves and what it is built with — every link goes to
          the running product.
        </p>

        {/* Jump links, not a JavaScript filter: the sections stay in the HTML so
            they are crawlable and work without scripts. */}
        <nav aria-label="Jump to platform" className="mt-8 flex flex-wrap gap-2">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-[var(--rule-strong)] px-4 py-1.5 text-[13.5px] text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
            >
              {s.heading}
              <span className="mono ml-2 text-[11px] text-[var(--ink-3)]">
                {s.list.length}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <div className="mx-auto max-w-[68rem] space-y-16 px-5 pb-8 sm:px-8">
        {SECTIONS.map((section) => (
          <section key={section.id} id={section.id} aria-labelledby={`${section.id}-h`}>
            <div className="mb-1 flex flex-wrap items-baseline justify-between gap-2">
              <h2
                id={`${section.id}-h`}
                className="display text-[clamp(20px,2.6vw,26px)] text-[var(--ink)]"
              >
                {section.heading}
              </h2>
              <p className="text-[13.5px] text-[var(--ink-3)]">{section.note}</p>
            </div>

            {section.list.map((p) => (
              <Entry key={`${section.id}-${p.slug}`} project={p} />
            ))}
          </section>
        ))}
      </div>
    </>
  );
}
