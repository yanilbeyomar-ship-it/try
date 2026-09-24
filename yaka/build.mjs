// Construit la version autonome (un seul fichier HTML, images et polices embarquées)
// puis exporte le PDF 16:9.
//   node build.mjs            → dist/YAKA_presentation.html + dist/YAKA_presentation.pdf
//   node build.mjs --no-pdf   → HTML uniquement
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, "dist");
fs.mkdirSync(dist, { recursive: true });

const mime = { ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".webp": "image/webp", ".svg": "image/svg+xml", ".woff2": "font/woff2" };
const dataUri = (rel) => {
  const file = path.join(root, rel);
  return `data:${mime[path.extname(file).toLowerCase()]};base64,${fs.readFileSync(file).toString("base64")}`;
};
const inlineAssets = (txt) => txt.replace(/assets\/[\w\-/.]+\.(jpe?g|png|webp|svg|woff2)/g, (m) => dataUri(m));
const safeScript = (txt) => txt.replace(/<\/script/gi, "<\\/script");

let html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const css = inlineAssets(fs.readFileSync(path.join(root, "styles.css"), "utf8"));
const content = inlineAssets(fs.readFileSync(path.join(root, "content.js"), "utf8"));
const app = fs.readFileSync(path.join(root, "app.js"), "utf8");

html = html
  .replace('<link rel="stylesheet" href="styles.css">', () => `<style>\n${css}\n</style>`)
  .replace('<script src="content.js"></script>', () => `<script>\n${safeScript(content)}\n</script>`)
  .replace('<script src="app.js"></script>', () => `<script>\n${safeScript(app)}\n</script>`);

const out = path.join(dist, "YAKA_presentation.html");
fs.writeFileSync(out, html);
console.log("HTML :", path.relative(process.cwd(), out), (fs.statSync(out).size / 1024).toFixed(0) + " Ko");
// Copie à la racine du dépôt : servie par GitHub Pages sur /try/yaka.html
fs.copyFileSync(out, path.join(root, "..", "yaka.html"));

// Version « artifact » (lien claude.ai à ouvrir sur téléphone) : sans squelette
// <html>/<head>/<body> (ajouté à la publication) et sans bouton PDF (impression bloquée).
const art = html
  .replace(/<!DOCTYPE html>\s*/i, "")
  .replace(/<html[^>]*>\s*|<\/html>\s*/gi, "")
  .replace(/<head>\s*|<\/head>\s*/gi, "")
  .replace(/<meta[^>]*>\s*/gi, "")
  .replace(/<body[^>]*>/i, '<script>window.YAKA_NO_PRINT = true;</script>')
  .replace(/<\/body>\s*/i, "")
  .replace(/<title>[^<]*<\/title>/, "<title>Présentation YAKA</title>");
fs.mkdirSync(path.join(dist, "artifact"), { recursive: true });
fs.writeFileSync(path.join(dist, "artifact", "yaka.html"), art);

// Version téléphone (format stories) : dist/YAKA_mobile.html + racine /yaka-mobile.html
let mob = fs.readFileSync(path.join(root, "mobile.html"), "utf8")
  .replace('<link rel="stylesheet" href="mobile.css">', () => `<style>\n${inlineAssets(fs.readFileSync(path.join(root, "mobile.css"), "utf8"))}\n</style>`)
  .replace('<script src="content.js"></script>', () => `<script>\n${safeScript(content)}\n</script>`)
  .replace('<script src="mobile.js"></script>', () => `<script>\n${safeScript(fs.readFileSync(path.join(root, "mobile.js"), "utf8"))}\n</script>`);
const mobOut = path.join(dist, "YAKA_mobile.html");
fs.writeFileSync(mobOut, mob);
fs.copyFileSync(mobOut, path.join(root, "..", "yaka-mobile.html"));
console.log("MOBILE :", path.relative(process.cwd(), mobOut), (fs.statSync(mobOut).size / 1024).toFixed(0) + " Ko");
// Sur la version en ligne, les téléphones sont redirigés vers la version stories
fs.writeFileSync(path.join(root, "..", "yaka.html"), html.replace("<head>", `<head>
<script>if (!/[?&](desktop|print)/.test(location.search) && matchMedia("(max-width: 820px) and (orientation: portrait)").matches) location.replace("yaka-mobile.html" + location.hash);</script>`));

if (!process.argv.includes("--no-pdf")) {
  let chromium;
  try { ({ chromium } = await import("playwright")); }
  catch { ({ chromium } = await import("/opt/node22/lib/node_modules/playwright/index.mjs")); }
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1600, height: 900 } });
  await page.goto(pathToFileURL(out).href + "?print");
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: "print", reducedMotion: "reduce" });
  const pdf = path.join(dist, "YAKA_presentation.pdf");
  await page.pdf({ path: pdf, width: "1600px", height: "900px", printBackground: true, preferCSSPageSize: true });
  const mb = await browser.newPage({ viewport: { width: 450, height: 800 } });
  await mb.goto(pathToFileURL(mobOut).href + "?print");
  await mb.evaluate(() => document.fonts.ready);
  await mb.waitForTimeout(300);
  await mb.emulateMedia({ media: "print" });
  const mpdf = path.join(dist, "YAKA_mobile.pdf");
  await mb.pdf({ path: mpdf, width: "450px", height: "800px", printBackground: true, preferCSSPageSize: true });
  console.log("PDF mobile :", path.relative(process.cwd(), mpdf), (fs.statSync(mpdf).size / 1024).toFixed(0) + " Ko");
  console.log("PDF  :", path.relative(process.cwd(), pdf), (fs.statSync(pdf).size / 1024).toFixed(0) + " Ko");
  await browser.close();
}
