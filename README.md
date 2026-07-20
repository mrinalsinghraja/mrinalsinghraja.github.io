# mrinalsinghraja.github.io

Personal site for Mrinal Singh Raja. Next.js 16, statically exported, served by
GitHub Pages at the domain root.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export → ./out
```

## How it is put together

**`lib/work.ts` is the single source of truth.** Every product, its platform,
its stack and its links live there, and the homepage ledger, `/work`, the
JSON-LD and every count on the site are derived from it. No count is written as
prose anywhere, so the copy cannot drift from the data.

The rule for that file: nothing goes in that a stranger cannot verify. All 21
outbound product links returned HTTP 200 when they were added. There are no
download numbers, revenue figures or user counts, because there is no public
source for them.

**Theming.** `html[data-theme]` is stamped before first paint by an inline
script in `app/layout.tsx`, so neither theme flashes. A saved choice wins; the
OS preference is consulted only when there is no saved choice. Light is the
default. Every text/surface pairing in `app/globals.css` carries its measured
contrast ratio in a comment — measured in-browser against the real surface
rather than calculated against white, because the two disagree by enough to
fail an accessibility check.

**Static export.** `output: "export"` with `trailingSlash: true`. Metadata
routes (`robots.ts`, `sitemap.ts`, `opengraph-image.tsx`) each need
`export const dynamic = "force-static"`, since a static export has no request
time and the build fails without it.

**Open Graph.** Next shallow-merges metadata, so a page declaring its own
`openGraph` replaces the parent's object outright — which silently drops
`og:image`. Every page builds its block through the `og()` helper in
`lib/site.ts` to make that impossible to forget.

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`. The repository needs
Settings → Pages → Source set to **GitHub Actions**.

Project Pages at `mrinalsinghraja.github.io/<repo>/` are served from their own
repositories and are unaffected by this site — including the ten that back the
App Store Support and Privacy URLs.
