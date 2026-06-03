// Root layout — app-wide metadata, fonts, SEO, OG, and global providers

import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { metadata as siteMetadata, viewport as siteViewport } from "@/lib/data/site.data";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ─── Metadata & Viewport (from site.data.ts) ──────────────────────────────────

export const viewport: Viewport = siteViewport;
export const metadata: Metadata = siteMetadata;

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
