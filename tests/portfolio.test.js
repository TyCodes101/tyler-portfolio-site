const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const page = fs.readFileSync(path.join(root, "src/app/page.tsx"), "utf8");
const resume = fs.readFileSync(
  path.join(root, "src/app/resume/page.tsx"),
  "utf8",
);
const pdfSource = fs.readFileSync(
  path.join(root, "resume-source/Tyler-Cox-Resume.html"),
  "utf8",
);
const layout = fs.readFileSync(path.join(root, "src/app/layout.tsx"), "utf8");
const pkg = JSON.parse(
  fs.readFileSync(path.join(root, "package.json"), "utf8"),
);

const requiredPortfolioText = [
  "Tyler ",
  "Ohio State",
  "May 2027",
  "June / July 2027",
  "IncidentOPS",
  "MacroMesh",
  "CPU Scheduler",
  "Fixed offline benchmark",
  "cox.1644@osu.edu",
  "linkedin.com/in/tyler-cox-53b886406",
  "https://incidentops-public-demo.vercel.app/",
  "https://github.com/TyCodes101/incidentops",
  "https://calorie-compass-chi.vercel.app/",
  "https://github.com/TyCodes101/calorie-compass",
  "https://tycodes101.github.io/cpu-scheduler-visualizer/",
  "idempotency keys",
  "Personal projects",
];
for (const text of requiredPortfolioText) {
  if (!page.toLowerCase().includes(text.toLowerCase()))
    throw new Error("Missing portfolio fact/link: " + text);
}
for (const text of [
  "Expected May 2027",
  "Personal projects",
  "June / July 2027",
  "cox.1644@osu.edu",
  "Download ATS-friendly PDF resume",
]) {
  if (!resume.includes(text)) throw new Error("Missing résumé fact: " + text);
}
const content = fs.readFileSync(path.join(root, "src/app/content.ts"), "utf8");
for (const text of [
  "IncidentOPS",
  "MacroMesh / Calorie Compass",
  "CPU Scheduler Visualizer",
  "idempotency key",
  "StarRez",
  "BASIS",
  "Resident Advisor",
  "Office Assistant",
  "Aug 2023",
  "Sep 2022",
]) {
  if (!content.includes(text))
    throw new Error("Lost approved résumé content: " + text);
}
const crypto = require("crypto");
const pdfHash = crypto
  .createHash("sha256")
  .update(fs.readFileSync(path.join(root, "public/Tyler-Cox-Resume.pdf")))
  .digest("hex");
if (
  pdfHash !== "057276b351f0600a6aed2bd76dc3e7d163f7703f7e289e3b5fd970641c36ec9d"
)
  throw new Error("Approved PDF changed");
const ts = require("typescript");
const scheduleSource = fs.readFileSync(
  path.join(root, "src/app/scheduling.ts"),
  "utf8",
);
const compiled = ts.transpileModule(scheduleSource, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const scheduleModule = { exports: {} };
new Function("exports", compiled)(scheduleModule.exports);
const assert = require("node:assert/strict");
assert.equal(scheduleModule.exports.schedule("FCFS").join(""), "AAAABBC");
assert.equal(scheduleModule.exports.schedule("SJF").join(""), "CBBAAAA");
assert.equal(
  scheduleModule.exports.schedule("Round Robin").join(""),
  "AABBCAA",
);
console.log("Approved PDF, factual content and scheduling behavior verified.");

if (
  !pkg.dependencies?.next ||
  !pkg.dependencies?.react ||
  !pkg.devDependencies?.tailwindcss
) {
  throw new Error("Expected Next.js, React, and Tailwind dependencies.");
}

if (!layout.includes("Software Engineer 2027 | Full-Stack, Backend & AI")) {
  throw new Error("Missing 2027 new-grad engineering metadata.");
}

if (
  !page.includes('href="#incidentops"') ||
  !page.includes("https://incidentops-public-demo.vercel.app")
) {
  throw new Error("IncidentOps evidence links missing from homepage.");
}

if (
  /Tyler\.cox66@yahoo\.com|tylercoxoh@gmail\.com/i.test(page + resume + layout)
) {
  throw new Error("Wrong contact email on active recruiter-facing pages.");
}

for (const relativePath of [
  "index.html",
  "resume.html",
  "resume-source/Tyler-Cox-Resume.html",
  "resume-source/Tyler-Cox-Resume-AI-Product.html",
  "README.md",
]) {
  const source = fs.readFileSync(path.join(root, relativePath), "utf8");
  if (/Tyler\.cox66@yahoo\.com|tylercoxoh@gmail\.com/i.test(source)) {
    throw new Error(`Outdated or unintended email in ${relativePath}`);
  }
}

if (
  /placeholder|lorem ipsum|Create Next App|Deploy Now/i.test(
    page + resume + pdfSource,
  )
) {
  throw new Error("Found generic placeholder copy.");
}

console.log("Portfolio brand overhaul smoke test passed.");
