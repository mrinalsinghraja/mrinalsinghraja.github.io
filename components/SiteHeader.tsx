"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { NAME } from "@/lib/site";

const NAV = [
  { href: "/work/", label: "Work" },
  { href: "/stack/", label: "Stack" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="nav-blur sticky top-0 z-50 border-b border-[var(--rule)]">
      <div className="mx-auto flex h-15 max-w-[68rem] items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* The wordmark is the initials in mono — the same voice the ledger uses,
            so the identity and the data read as one system. */}
        <Link
          href="/"
          className="mono inline-flex h-9 items-center text-[13px] font-medium tracking-[0.06em] text-[var(--ink)]"
          aria-label={`${NAME} — home`}
        >
          MSR<span className="text-[var(--accent)]">.</span>
        </Link>

        <nav aria-label="Main" className="flex items-center gap-1">
          {NAV.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                // inline-flex + a fixed height: padding alone does not grow an
                // inline <a>'s box, which left these at 18px — under the 24px
                // minimum target size.
                className={`inline-flex h-9 items-center rounded-[var(--radius)] px-3 text-[14px] transition-colors ${
                  active
                    ? "text-[var(--ink)]"
                    : "text-[var(--ink-2)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <span aria-hidden="true" className="mx-1 h-4 w-px bg-[var(--rule-strong)]" />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
