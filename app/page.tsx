import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Ledger } from "@/components/Ledger";
import {
  featured,
  webProjects,
  macProjects,
  iosProjects,
  platformLabel,
} from "@/lib/work";
import { NAME, EMAIL, COUNTS, SOCIALS } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* ── Nameplate ──────────────────────────────────────────────────────────
          The hero states who and what, then hands straight to the evidence. No
          portrait, no headline claim: the ledger below is a stronger opening
          argument than any sentence about being passionate. */}
      <section className="mx-auto max-w-[68rem] px-5 pt-16 pb-14 sm:px-8 sm:pt-24 sm:pb-20">
        <div className="enter">
          <p className="label mb-6">Built after hours · {COUNTS.total} shipped · Bengaluru</p>

          <h1 className="nameplate mb-7 text-[clamp(38px,8.4vw,86px)] text-[var(--ink)]">
            Mrinal
            <br />
            Singh Raja
          </h1>

          <p className="max-w-[38rem] text-[clamp(16.5px,2.1vw,20px)] leading-[1.55] text-[var(--ink-2)]">
            I build and ship production software on my own — design, engineering,
            release and support. {COUNTS.total} apps are live right now across the
            web, macOS and iOS; {COUNTS.appStore} of them went through Apple review.
            Every one is free, everywhere, with nothing to buy.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-3 gap-y-3">
            <Link
              href="/work/"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--ink)] px-5 py-2.5 text-[14.5px] font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
            >
              See the work
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--rule-strong)] px-5 py-2.5 text-[14.5px] font-medium text-[var(--ink)] transition-colors hover:bg-[var(--sunk)]"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </section>

      {/* ── The ledger: the signature element ─────────────────────────────────*/}
      <section
        aria-labelledby="ledger-h"
        className="mx-auto max-w-[68rem] px-5 pb-20 sm:px-8 sm:pb-28"
      >
        <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3">
          <h2 id="ledger-h" className="display text-[clamp(22px,3vw,28px)]">
            Everything currently running
          </h2>
          <p className="mono flex items-center gap-2 text-[12px] text-[var(--ink-3)]">
            <span className="dot-live" aria-hidden="true" />
            All {COUNTS.total} live and reachable
          </p>
        </div>

        <Ledger
          tracks={[
            { platform: "web", list: webProjects },
            { platform: "macos", list: macProjects },
            { platform: "ios", list: iosProjects },
          ]}
        />

        <p className="mt-7 max-w-[36rem] text-[13.5px] leading-relaxed text-[var(--ink-3)]">
          All free, no paid tier anywhere. One product ships on both the web and
          the Mac, so the three columns count {COUNTS.total + 1} entries for{" "}
          {COUNTS.total} apps. Every link goes to the live product, not a
          screenshot.
        </p>
      </section>

      {/* ── Selected work ─────────────────────────────────────────────────────*/}
      <section
        aria-labelledby="featured-h"
        className="mx-auto max-w-[68rem] px-5 pb-20 sm:px-8 sm:pb-28"
      >
        <h2 id="featured-h" className="display mb-2 text-[clamp(22px,3vw,28px)]">
          Four worth opening
        </h2>
        <p className="mb-8 max-w-[36rem] text-[15px] text-[var(--ink-2)]">
          Picked for range rather than rank — a study platform, a hazard system, a
          native Mac app, and one built around a hard privacy constraint.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {featured.map((p) => (
            <a
              key={p.slug}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card group flex flex-col p-6"
            >
              <div className="mb-3 flex items-center justify-between gap-3">
                <h3 className="display-sm text-[17px] text-[var(--ink)]">{p.name}</h3>
                <ArrowUpRight
                  size={15}
                  aria-hidden="true"
                  className="shrink-0 text-[var(--ink-3)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>

              <p className="mb-4 text-[14px] leading-relaxed text-[var(--ink-2)]">
                {p.problem}
              </p>

              {p.note && (
                <p className="mb-5 border-l-2 border-[var(--rule-strong)] pl-3 text-[13.5px] leading-relaxed text-[var(--ink-2)]">
                  {p.note}
                </p>
              )}

              <div className="mt-auto flex flex-wrap items-center gap-x-2 gap-y-1.5 pt-1">
                <span className="mono text-[10.5px] tracking-[0.1em] text-[var(--ink-3)]">
                  {platformLabel(p).toUpperCase()}
                </span>
                <span aria-hidden="true" className="text-[var(--rule-strong)]">
                  ·
                </span>
                <span className="mono text-[11.5px] text-[var(--ink-3)]">
                  {p.stack.slice(0, 3).join(" · ")}
                </span>
              </div>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>

        <Link
          href="/work/"
          className="mt-7 inline-flex min-h-6 items-center gap-1.5 text-[14.5px] font-medium text-[var(--accent)] underline-offset-4 hover:underline"
        >
          All {COUNTS.total}, grouped by platform
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </section>

      {/* ── How I work ────────────────────────────────────────────────────────
          Three claims that the ledger above already proves, stated plainly so a
          recruiter reading top-to-bottom gets the argument in words too. */}
      <section
        aria-labelledby="how-h"
        className="mx-auto max-w-[68rem] px-5 pb-20 sm:px-8 sm:pb-28"
      >
        <h2 id="how-h" className="display mb-8 text-[clamp(22px,3vw,28px)]">
          How I work
        </h2>

        <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              t: "End to end, alone",
              d: "Each of these went from an empty repository to a live URL or an approved App Store listing without a team to hand it off to. Design, build, ship, then support it.",
            },
            {
              t: "Three runtimes, one standard",
              d: "Swift and SwiftUI on Apple platforms, TypeScript and React on the web. Different tools, same expectations for correctness, accessibility and speed.",
            },
            {
              t: "Free, and not the trial kind",
              d: `All ${COUNTS.total} are free everywhere, with no paid tier, no subscription and no upsell. ${COUNTS.noAccount} of them do not even ask for an account — open one in a private window and it works.`,
            },
            {
              t: "Privacy as a constraint",
              d: "Several process entirely on the device — no account, no upload, no server-side copy. It is harder to build that way and it is the right default.",
            },
          ].map((item) => (
            <div key={item.t}>
              <dt className="display-sm mb-2 text-[16px] text-[var(--ink)]">
                {item.t}
              </dt>
              <dd className="text-[14px] leading-relaxed text-[var(--ink-2)]">
                {item.d}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Contact ───────────────────────────────────────────────────────────*/}
      <section
        aria-labelledby="contact-h"
        className="mx-auto max-w-[68rem] px-5 sm:px-8"
      >
        <div className="rounded-[var(--radius-lg)] border border-[var(--rule)] bg-[var(--sunk)] px-6 py-10 sm:px-10 sm:py-12">
          <h2 id="contact-h" className="display mb-3 text-[clamp(21px,2.8vw,26px)]">
            Building something, or hiring someone to?
          </h2>
          <p className="mb-7 max-w-[34rem] text-[15px] leading-relaxed text-[var(--ink-2)]">
            Email is the fastest route and it reaches me directly. Tell me what you
            are trying to build and where it is stuck — that is a more useful first
            message than a request for a call.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--ink)] px-5 py-2.5 text-[14.5px] font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
            >
              {EMAIL}
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--rule-strong)] bg-[var(--surface)] px-5 py-2.5 text-[14.5px] font-medium text-[var(--ink)] transition-colors hover:border-[var(--ink-3)]"
            >
              GitHub
              <ArrowUpRight size={14} aria-hidden="true" className="opacity-50" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="sr-only">Contact {NAME} by email at {EMAIL}.</p>
        </div>
      </section>
    </>
  );
}
