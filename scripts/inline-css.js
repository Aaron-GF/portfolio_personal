import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DIST_DIR = path.join(__dirname, "../dist");
const INDEX_HTML_PATH = path.join(DIST_DIR, "index.html");

async function inlineCss() {
  console.log("Starting CSS inlining...");

  if (!fs.existsSync(INDEX_HTML_PATH)) {
    console.error("index.html not found in dist directory. Run build first.");
    return;
  }

  let html = fs.readFileSync(INDEX_HTML_PATH, "utf-8");

  // Find the CSS file link injected by Vite
  // It usually looks like <link rel="stylesheet" crossorigin href="/assets/index-XXXX.css">
  const cssLinkRegex =
    /<link rel="stylesheet" crossorigin href="\/assets\/index-[^"]+\.css">/;
  const match = html.match(cssLinkRegex);

  if (!match) {
    console.log("No CSS link found in index.html to inline.");
    return;
  }

  const linkTag = match[0];
  const hrefMatch = linkTag.match(/href="([^"]+)"/);

  if (!hrefMatch) {
    console.error("Could not extract href from link tag.");
    return;
  }

  const cssRelativePath = hrefMatch[1]; // e.g., /assets/index-XXXX.css
  const cssAbsolutePath = path.join(DIST_DIR, cssRelativePath);

  if (!fs.existsSync(cssAbsolutePath)) {
    console.error(`CSS file not found at ${cssAbsolutePath}`);
    return;
  }

  console.log(`Inlining CSS from ${cssRelativePath}...`);
  const cssContent = fs.readFileSync(cssAbsolutePath, "utf-8");

  // Create style tag
  const styleTag = `<style>${cssContent}</style>`;

  // Replace link tag with style tag
  html = html.replace(linkTag, styleTag);

  // Write back to index.html
  fs.writeFileSync(INDEX_HTML_PATH, html);

  console.log("CSS inlined successfully!");
}

inlineCss();
