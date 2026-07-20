import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { COUNTS } from "@/lib/site";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[68rem] px-5 py-24 sm:px-8 sm:py-32">
      <p className="mono mb-5 text-[13px] tracking-[0.16em] text-[var(--ink-3)]">
        404
      </p>
      <h1 className="display mb-5 text-[clamp(30px,5.4vw,52px)] text-[var(--ink)]">
        That page is not here
      </h1>
      <p className="mb-9 max-w-[34rem] text-[16.5px] leading-relaxed text-[var(--ink-2)]">
        The link may be out of date, or the page may have moved. The work is the
        thing worth finding, so here is the way back to it.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/work/"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-[var(--ink)] px-5 py-2.5 text-[14.5px] font-medium text-[var(--paper)] transition-opacity hover:opacity-90"
        >
          All {COUNTS.total} apps
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-[var(--rule-strong)] px-5 py-2.5 text-[14.5px] font-medium text-[var(--ink)] transition-colors hover:bg-[var(--sunk)]"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
