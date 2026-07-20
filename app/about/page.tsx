import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { COUNTS, NAME, EMAIL, LOCATION, SOCIALS, og, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `${NAME} is an independent software engineer in ${LOCATION} who designs, builds and ships production apps end to end across the web, macOS and iOS.`,
  alternates: { canonical: "/about/" },
  openGraph: og({
    title: `About — ${NAME}`,
    description: `Independent software engineer in ${LOCATION}.`,
    path: "/about/",
  }),
};

const trail = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about/" },
];

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />

      <div className="mx-auto max-w-[68rem] px-5 pt-14 pb-12 sm:px-8 sm:pt-20">
        <p className="label mb-5">About</p>
        <h1 className="display mb-8 text-[clamp(30px,5.4vw,52px)] text-[var(--ink)]">
          Independent, and shipping
        </h1>

        <div className="grid gap-x-14 gap-y-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
          <div className="max-w-[42rem] space-y-5 text-[16.5px] leading-[1.7] text-[var(--ink-2)]">
            <p>
              I am a software engineer in {LOCATION}. I work on my own, which means
              every app under my name went from an empty repository to a live URL or
              an approved App Store listing without anyone to hand the hard parts to
              — the schema, the layout, the release notes, the support email.
            </p>
            <p>
              The work ships under{" "}
              <a
                href={SOCIALS.msrx}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--accent)] underline-offset-4 hover:underline"
              >
                MSRX
              </a>
              , a brand covering {COUNTS.total} apps across three runtimes. They are
              small on purpose. Each one does a single job, and most of them do it
              without asking who you are first.
            </p>
            <p>
              What I care about in a build, roughly in order: that it is correct,
              that it is fast enough to feel immediate, that it is usable by keyboard
              and screen reader, and that it does not collect anything it does not
              need. The last one costs real engineering time — on-device processing
              is harder than posting a file to a server — and it is still the right
              default.
            </p>
            <p>
              I am open to consulting, contract work, and full-time roles where the
              job is to own something end to end. If you have a product that is stuck
              somewhere between prototype and shipped, that is the part I am good at.
            </p>
          </div>

          <aside>
            <dl className="space-y-5">
              <div>
                <dt className="label mb-1.5">Based in</dt>
                <dd className="text-[14.5px] text-[var(--ink)]">{LOCATION}</dd>
              </div>
              <div>
                <dt className="label mb-1.5">Shipped</dt>
                <dd className="text-[14.5px] text-[var(--ink)]">
                  {COUNTS.total} apps, all live
                </dd>
              </div>
              <div>
                <dt className="label mb-1.5">Through Apple review</dt>
                <dd className="text-[14.5px] text-[var(--ink)]">
                  {COUNTS.appStore} listings
                </dd>
              </div>
              <div>
                <dt className="label mb-1.5">Open to</dt>
                <dd className="text-[14.5px] text-[var(--ink)]">
                  Consulting, contract, full-time
                </dd>
              </div>
              <div>
                <dt className="label mb-1.5">Email</dt>
                <dd>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="mono inline-flex min-h-6 items-center text-[13px] text-[var(--accent)] underline-offset-4 hover:underline"
                  >
                    {EMAIL}
                  </a>
                </dd>
              </div>
            </dl>

            <ul className="mt-7 space-y-2 border-t border-[var(--rule)] pt-5">
              {[
                { label: "GitHub", href: SOCIALS.github },
                { label: "LinkedIn", href: SOCIALS.linkedin },
                { label: "App Store", href: SOCIALS.appStore },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex min-h-6 items-center gap-1.5 text-[14px] text-[var(--ink-2)] transition-colors hover:text-[var(--ink)]"
                  >
                    {l.label}
                    <ArrowUpRight
                      size={13}
                      aria-hidden="true"
                      className="text-[var(--ink-3)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  );
}
