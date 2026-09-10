import type { Metadata } from "next";
import { NAME, EMAIL, LOCATION, SOCIALS, og, breadcrumbJsonLd } from "@/lib/site";

export const metadata: Metadata = {
  title: "Legal",
  description: `Terms, privacy and disclaimer for ${NAME}'s site: it collects nothing, the apps are free and unwarranted, and published code carries no guarantee.`,
  alternates: { canonical: "/legal/" },
  openGraph: og({
    title: `Legal — ${NAME}`,
    description:
      "This site collects nothing. The apps are free and provided as they are. Published code comes with no warranty.",
    path: "/legal/",
  }),
};

const trail = [
  { name: "Home", path: "/" },
  { name: "Legal", path: "/legal/" },
];

/**
 * One page rather than three.
 *
 * A personal site that collects nothing does not need a separate privacy
 * policy, terms of use and disclaimer — splitting a page's worth of true
 * statements across three routes makes it look like there is more to hide
 * than there is. The apps each carry their own terms, which is where the
 * detail belongs.
 */
const SECTIONS: { h: string; p: string[] }[] = [
  {
    h: "Who this is",
    p: [
      `This site belongs to ${NAME}, an individual in ${LOCATION}. The apps are published under the name "MSRX", which is a brand name and not a registered company — there is no company, no partnership and no LLP behind it, and nothing here should be read as implying one.`,
      `Anything on this page can be raised at ${EMAIL}, which is answered by the person who wrote the software.`,
    ],
  },
  {
    h: "This site collects nothing",
    p: [
      "There is no account, no cookie set by this site, no analytics, no tracking pixel, no advertising network and no fingerprinting. Nothing you do here is recorded, because there is nothing here to record it with — the whole site is static files.",
      "It is hosted on GitHub Pages, and GitHub records its own standard server logs under its own privacy policy. That is outside my control and is the only place a request to this site leaves a trace.",
      "There is nothing to request access to, correct or erase, because nothing about you is held. If you write and ask, that will be the answer.",
    ],
  },
  {
    h: "The apps",
    p: [
      "Every app listed here is free — no fee, no subscription, no paid tier and no advertising — and most need no account. They are provided as they are, without warranty of any kind, and they may change or stop at any time.",
      "Each app carries its own terms, privacy notice and, where it matters, its own disclaimer. Those are the ones that apply to that app; this page does not override them.",
      "Several use AI. Anything a model produces in one of them is a draft to check, never a result to rely on, and none of it is professional advice of any kind.",
    ],
  },
  {
    h: "The code",
    p: [
      "Source published on GitHub is offered for reading and reuse under whatever licence sits in that repository. Where a repository has no licence file, no licence is granted — that is what the absence means, not an oversight to be read around.",
      "Published code comes with no warranty and no support commitment. It is what I run, not a product, and a repository going quiet is normal rather than a signal that something is wrong.",
      "Some repositories exist only to serve a support or privacy URL registered with the App Store. Those stay published for compliance reasons even when the code in them is old.",
    ],
  },
  {
    h: "No warranty, and the limit of what I owe",
    p: [
      "To the fullest extent the law allows, this site, the apps and the published code are provided on an “as is” and “as available” basis without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, accuracy and non-infringement.",
      "To the fullest extent the law allows, I am not liable for any indirect, incidental, special or consequential loss, nor for lost profits, data, goodwill or opportunity, arising from your use of any of it. Where liability cannot lawfully be excluded, my total aggregate liability for all claims is limited to one thousand Indian rupees (₹1,000).",
      "Nothing here excludes liability for death or personal injury caused by my negligence, for fraud, or for anything else that cannot lawfully be excluded under Indian law.",
    ],
  },
  {
    h: "Governing law",
    p: [
      "These terms are governed by the laws of India, and the courts at Bengaluru, Karnataka have exclusive jurisdiction over any dispute arising out of them.",
      "If you are a consumer somewhere else, this does not take away rights your local law gives you that cannot be taken away by agreement. If any part of this page is unenforceable, the rest continues to apply.",
    ],
  },
  {
    h: "Trade marks",
    p: [
      "Product names, logos and brands mentioned anywhere on this site belong to their respective owners. Naming one is a factual reference and is not a claim of ownership, affiliation or endorsement in either direction.",
    ],
  },
];

export default function Legal() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd(trail)) }}
      />

      <div className="mx-auto max-w-[68rem] px-5 pt-14 pb-12 sm:px-8 sm:pt-20">
        <p className="label mb-5">Legal</p>
        <h1 className="display mb-8 text-[clamp(30px,5.4vw,52px)] text-[var(--ink)]">
          Nothing collected, nothing warranted
        </h1>

        <div className="max-w-[42rem] space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.h}>
              <h2 className="mb-3 text-[17px] font-semibold text-[var(--ink)]">{section.h}</h2>
              {section.p.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mb-3 text-[16.5px] leading-[1.7] text-[var(--ink-2)] last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          <p className="border-t border-[var(--rule)] pt-8 text-[14px] leading-[1.7] text-[var(--ink-3)]">
            Last updated 10 September 2026. This page describes how things actually work,
            in plain language. It is not legal advice and has not been reviewed by a
            lawyer. Questions go to{" "}
            <a
              href={`mailto:${EMAIL}`}
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              {EMAIL}
            </a>
            , or see the app terms on{" "}
            <a
              href={SOCIALS.msrx}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--accent)] underline-offset-4 hover:underline"
            >
              MSRX
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
