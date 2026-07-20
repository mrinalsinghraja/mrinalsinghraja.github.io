import Link from "next/link";
import { NAME, EMAIL, SOCIALS, LOCATION } from "@/lib/site";

const ELSEWHERE = [
  { label: "GitHub", href: SOCIALS.github },
  { label: "LinkedIn", href: SOCIALS.linkedin },
  { label: "App Store", href: SOCIALS.appStore },
  { label: "MSRX", href: SOCIALS.msrx },
];

const PAGES = [
  { label: "Work", href: "/work/" },
  { label: "Stack", href: "/stack/" },
  { label: "About", href: "/about/" },
];

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--rule)] sm:mt-32">
      <div className="mx-auto max-w-[68rem] px-5 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="display-sm mb-1.5 text-[15px] text-[var(--ink)]">{NAME}</p>
            <p className="mono text-[12.5px] text-[var(--ink-3)]">{LOCATION}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="mono mt-3 inline-flex min-h-6 items-center text-[12.5px] text-[var(--accent)] underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
          </div>

          <div className="flex gap-12">
            <nav aria-label="Pages">
              <p className="label mb-3">Pages</p>
              <ul className="space-y-2">
                {PAGES.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="inline-flex min-h-6 items-center text-[13.5px] text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Elsewhere">
              <p className="label mb-3">Elsewhere</p>
              <ul className="space-y-2">
                {ELSEWHERE.map((e) => (
                  <li key={e.href}>
                    <a
                      href={e.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-6 items-center text-[13.5px] text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
                    >
                      {e.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <p className="mono mt-12 text-[11.5px] text-[var(--ink-3)]">
          © {new Date().getFullYear()} {NAME}
        </p>
      </div>
    </footer>
  );
}
