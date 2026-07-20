"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Theme = "light" | "dark";

/**
 * Reads the theme the pre-paint script already applied, rather than deciding it
 * again. Renders no icon until mounted: the server cannot know which theme this
 * visitor gets, so guessing would put the wrong icon in the first paint.
 */
export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // Private mode or blocked storage: the theme still applies for this page
      // view, it just will not be remembered. Nothing to recover from.
    }
    setTheme(next);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="grid h-9 w-9 place-items-center rounded-[var(--radius)] text-[var(--ink-2)] transition-colors hover:bg-[var(--sunk)] hover:text-[var(--ink)]"
    >
      {theme === "dark" ? (
        <Sun size={16} aria-hidden="true" />
      ) : theme === "light" ? (
        <Moon size={16} aria-hidden="true" />
      ) : null}
    </button>
  );
}
