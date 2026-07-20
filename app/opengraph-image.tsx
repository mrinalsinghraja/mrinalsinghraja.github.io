import { ImageResponse } from "next/og";
import { NAME, COUNTS } from "@/lib/site";

export const alt = `${NAME} — independent software engineer, ${COUNTS.total} apps shipped across web, macOS and iOS`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
// See the note in robots.ts — static export has no request time.
export const dynamic = "force-static";

// Satori counts each JSX interpolation as a separate child node and rejects a
// <div> with several children unless it declares a display mode. Precomputing
// the strings keeps every node below single-child, which is simpler to read
// than scattering display:flex over text elements.
const EYEBROW = `Independent · ${COUNTS.total} shipped · Bengaluru`;
const WEB_COUNT = `${COUNTS.web} web`;
const STORE_COUNT = `${COUNTS.appStore} on the App Store`;

// Rendered once at build time. Light, like the site itself — a dark social card
// in front of a light page is a small broken promise before anyone arrives.
export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#fcfcfd",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#0f7b52",
            }}
          />
          <div
            style={{
              fontSize: 22,
              letterSpacing: 3,
              color: "#74787f",
              textTransform: "uppercase",
            }}
          >
            {EYEBROW}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1,
              color: "#101114",
            }}
          >
            Mrinal Singh Raja
          </div>
          <div
            style={{
              marginTop: 26,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#55595f",
              maxWidth: 900,
            }}
          >
            Designs and ships production software end to end — across the web,
            macOS and iOS.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "#74787f",
            borderTop: "1px solid rgba(16,17,20,0.12)",
            paddingTop: 26,
          }}
        >
          <div style={{ display: "flex" }}>mrinalsinghraja.github.io</div>
          <div style={{ display: "flex", gap: 26 }}>
            <div style={{ display: "flex" }}>{WEB_COUNT}</div>
            <div style={{ display: "flex" }}>{STORE_COUNT}</div>
          </div>
        </div>
      </div>
    ),
    size
  );
}
