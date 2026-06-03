/**
 * Generates static SEO image assets in /public.
 * Run: node scripts/generate-seo-assets.mjs
 */

import sharp from "sharp";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

const BRAND = {
  bg: "#0a0a0a",
  gradientStart: "#6366f1",
  gradientEnd: "#8b5cf6",
  text: "#ffffff",
  muted: "rgba(255,255,255,0.72)",
  name: "EmergX",
  tagline: "Automated Hiring. Human Quality.",
  subtitle: "Meet Eva, the AI interviewer.",
  url: "emergx.ai",
};

function iconSvg(size) {
  const radius = Math.round(size * 0.22);
  const fontSize = Math.round(size * 0.47);
  const y = Math.round(size * 0.625);
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${BRAND.gradientStart}"/>
          <stop offset="100%" stop-color="${BRAND.gradientEnd}"/>
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" rx="${radius}" fill="${BRAND.bg}"/>
      <rect x="${size * 0.06}" y="${size * 0.06}" width="${size * 0.88}" height="${size * 0.88}" rx="${radius * 0.8}" fill="url(#g)"/>
      <text x="50%" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${fontSize}" font-weight="700" fill="${BRAND.text}">E</text>
    </svg>
  `);
}

function ogSvg() {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0a0a0a"/>
          <stop offset="45%" stop-color="#171717"/>
          <stop offset="100%" stop-color="#1a1a2e"/>
        </linearGradient>
        <linearGradient id="logo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${BRAND.gradientStart}"/>
          <stop offset="100%" stop-color="${BRAND.gradientEnd}"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <rect x="80" y="72" width="56" height="56" rx="14" fill="url(#logo)"/>
      <text x="108" y="108" text-anchor="middle" font-family="system-ui,sans-serif" font-size="28" font-weight="700" fill="#fff">E</text>
      <text x="156" y="108" font-family="system-ui,sans-serif" font-size="36" font-weight="600" fill="#fff">${BRAND.name}</text>
      <text x="80" y="340" font-family="system-ui,sans-serif" font-size="64" font-weight="700" fill="#fff">${BRAND.tagline.split(".")[0]}.</text>
      <text x="80" y="410" font-family="system-ui,sans-serif" font-size="64" font-weight="700" fill="#fff">${BRAND.tagline.split(".")[1]?.trim()}.</text>
      <text x="80" y="490" font-family="system-ui,sans-serif" font-size="28" fill="${BRAND.muted}">${BRAND.subtitle} Scale hiring without compromising on human quality.</text>
      <text x="80" y="570" font-family="system-ui,sans-serif" font-size="24" fill="rgba(255,255,255,0.5)">${BRAND.url}</text>
    </svg>
  `);
}

async function writePngFromSvg(svg, outputPath, width, height) {
  await sharp(svg).resize(width, height).png().toFile(outputPath);
  console.log(`Created ${outputPath}`);
}

async function writeIco(outputPath) {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map((size) => sharp(iconSvg(size)).resize(size, size).png().toBuffer()),
  );

  const imageCount = pngBuffers.length;
  const headerSize = 6 + imageCount * 16;
  let offset = headerSize;
  const entries = [];

  for (let i = 0; i < pngBuffers.length; i++) {
    const size = sizes[i];
    entries.push({ size, offset, buffer: pngBuffers[i] });
    offset += pngBuffers[i].length;
  }

  const totalSize = offset;
  const buffer = Buffer.alloc(totalSize);

  buffer.writeUInt16LE(0, 0);
  buffer.writeUInt16LE(1, 2);
  buffer.writeUInt16LE(imageCount, 4);

  let entryOffset = 6;
  for (const entry of entries) {
    buffer.writeUInt8(entry.size === 256 ? 0 : entry.size, entryOffset);
    buffer.writeUInt8(entry.size === 256 ? 0 : entry.size, entryOffset + 1);
    buffer.writeUInt8(0, entryOffset + 2);
    buffer.writeUInt8(0, entryOffset + 3);
    buffer.writeUInt16LE(1, entryOffset + 4);
    buffer.writeUInt16LE(32, entryOffset + 6);
    buffer.writeUInt32LE(entry.buffer.length, entryOffset + 8);
    buffer.writeUInt32LE(entry.offset, entryOffset + 12);
    entryOffset += 16;
  }

  for (const entry of entries) {
    entry.buffer.copy(buffer, entry.offset);
  }

  await writeFile(outputPath, buffer);
  console.log(`Created ${outputPath}`);
}

async function main() {
  await mkdir(publicDir, { recursive: true });

  await writePngFromSvg(iconSvg(96), join(publicDir, "favicon-96x96.png"), 96, 96);
  await writePngFromSvg(iconSvg(180), join(publicDir, "apple-touch-icon.png"), 180, 180);
  await writePngFromSvg(ogSvg(), join(publicDir, "og-image.png"), 1200, 630);
  await writeIco(join(publicDir, "favicon.ico"));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
