import { readFile, stat } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const distRoot = path.join(projectRoot, "dist");
const expectedPages = [
  "index.html",
  "assets/codex-cto-command-template/index.html",
  "assets/ai-project-brief-template/index.html",
  "assets/ai-revenue-experiment-dashboard-template/index.html",
  "assets/ai-daily-operating-workflow-template/index.html",
  "assets/ai-project-kill-criteria-review-template/index.html",
];

async function assertFile(relativePath) {
  const target = path.join(distRoot, relativePath);
  const details = await stat(target);
  if (!details.isFile()) {
    throw new Error(`Expected a file at ${relativePath}`);
  }
}

for (const page of expectedPages) {
  await assertFile(page);
}

const homepage = await readFile(path.join(distRoot, "index.html"), "utf8");
const requiredText = [
  "AI Self-Funding Starter Pack",
  "Payment link pending approval.",
  "This is an experiment system. It does not guarantee income.",
];

for (const text of requiredText) {
  if (!homepage.includes(text)) {
    throw new Error(`Homepage is missing required text: ${text}`);
  }
}

const internalLinks = [...homepage.matchAll(/href="(\/[^"#?]+)"/g)].map((match) => match[1]);
for (const href of new Set(internalLinks)) {
  const relativePath = href === "/" ? "index.html" : `${href.replace(/^\/|\/$/g, "")}/index.html`;
  await assertFile(relativePath);
}

if (/https?:\/\/[^"' ]*paypal\./i.test(homepage)) {
  throw new Error("Built page contains a real PayPal URL.");
}

console.log(`Build check passed: ${expectedPages.length} pages and ${new Set(internalLinks).size} internal links verified.`);
