import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/data/site.data";

export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 45%, #1a1a2e 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "14px",
              background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            E
          </div>
          <span style={{ fontSize: "36px", fontWeight: 600, letterSpacing: "-0.02em" }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "900px" }}>
          <p
            style={{
              margin: 0,
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            {siteConfig.tagline}
          </p>
          <p
            style={{
              margin: 0,
              fontSize: "28px",
              lineHeight: 1.4,
              color: "rgba(255, 255, 255, 0.72)",
            }}
          >
            Meet {siteConfig.product.name}, {siteConfig.product.tagline.toLowerCase()}. Scale hiring
            without compromising on human quality.
          </p>
        </div>

        <p style={{ margin: 0, fontSize: "24px", color: "rgba(255, 255, 255, 0.5)" }}>
          {siteConfig.url.replace("https://", "")}
        </p>
      </div>
    ),
    { ...size },
  );
}
