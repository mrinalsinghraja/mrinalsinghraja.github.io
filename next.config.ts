import type { NextConfig } from "next";

// Static export: this site is served by GitHub Pages, so there is no Node
// runtime at request time. Everything must be prerendered at build.
//
// The repo is `mrinalsinghraja.github.io` — a GitHub *user* site, served from
// the domain root — so no basePath or assetPrefix. Moving this to a project
// repo would require both, or every asset URL 404s.
const nextConfig: NextConfig = {
  output: "export",
  // Pages serves /work as /work/index.html. Without this, /work 404s.
  trailingSlash: true,
  // next/image needs a server to optimise; a static export has none.
  images: { unoptimized: true },
  turbopack: { root: __dirname },
};

export default nextConfig;
