const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const page = fs.readFileSync(path.join(root, 'src/app/page.tsx'), 'utf8');
const resume = fs.readFileSync(path.join(root, 'src/app/resume/page.tsx'), 'utf8');
const pdfSource = fs.readFileSync(path.join(root, 'resume-source/Tyler-Cox-Resume.html'), 'utf8');
const layout = fs.readFileSync(path.join(root, 'src/app/layout.tsx'), 'utf8');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

const requiredPortfolioText = [
  'AI Product Engineer',
  'Full Stack Product Builder',
  'Building AI-powered apps that feel human.',
  'Ohio State Computer Science & Engineering',
  'Conversational AI',
  'full-stack software with React, TypeScript, Python, PostgreSQL',
  '2027 new-grad software engineering roles',
  'Calorie Compass',
  'https://calorie-compass-chi.vercel.app/',
  'https://github.com/TyCodes101/calorie-compass',
  'Most calorie trackers feel robotic, tedious, and disconnected from natural conversation.',
  'Correction-aware assistant',
  'Verified vs estimated trust system',
  'AI intent classification',
  'Intelligent nutrition reconciliation',
  'Stride Fitness',
  'https://stride-step-tracker-tyler-cox-s-projects1.vercel.app/',
  'Currently Building',
  'Engineering credibility',
  'Seeking 2027 new-grad roles',
  'Graduating May 2027',
  'cox.1644@osu.edu',
  'linkedin.com/in/tyler-cox-53b886406',
];

for (const text of requiredPortfolioText) {
  if (!page.includes(text)) throw new Error(`Missing portfolio text: ${text}`);
}

const requiredResumeText = [
  'Software Engineering New Grad 2027 · Full-Stack & Backend Developer',
  'Ohio State CSE student graduating May 2027',
  'cox.1644@osu.edu',
  'Expected May 2027',
  'Shipped a full-stack nutrition app',
  'Implemented stateful meal interactions',
  'structured intent handling',
  'trust-focused nutrition pipeline',
  'Download ATS-friendly PDF resume',
  'Resident Advisor',
  'Aug 2023 – Present',
  'Office Assistant',
  'Sept 2022 – Present',
  'documentation',
];

for (const text of requiredResumeText) {
  if (!resume.includes(text)) throw new Error(`Missing resume text: ${text}`);
}

const requiredPdfSourceText = [
  'Software Engineering Intern | Full-Stack Developer | AI Product Engineer',
  'TypeScript, JavaScript, Python, Java, SQL, HTML/CSS',
  'OpenAI APIs, intent classification, structured outputs, conversational UX, AI-assisted workflows',
  'Shipped a full-stack nutrition app',
  'Implemented stateful meal interactions',
  'Resident Advisor — The Ohio State University Housing',
  'Office Assistant — OSU Housing',
  'Sept 2022 – Present',
];

for (const text of requiredPdfSourceText) {
  if (!pdfSource.includes(text)) throw new Error(`Missing PDF source text: ${text}`);
}

if (!pkg.dependencies?.next || !pkg.dependencies?.react || !pkg.devDependencies?.tailwindcss) {
  throw new Error('Expected Next.js, React, and Tailwind dependencies.');
}

if (!layout.includes('Software Engineer 2027 | Full-Stack, Backend & AI')) {
  throw new Error('Missing 2027 new-grad engineering metadata.');
}

if (!page.includes('href="#incidentops"') || !page.includes('https://incidentops-public-demo.vercel.app')) {
  throw new Error('IncidentOps evidence links missing from homepage.');
}

if (/Tyler\.cox66@yahoo\.com|tylercoxoh@gmail\.com/i.test(page + resume + layout)) {
  throw new Error('Wrong contact email on active recruiter-facing pages.');
}

if (/placeholder|lorem ipsum|Create Next App|Deploy Now/i.test(page + resume + pdfSource)) {
  throw new Error('Found generic placeholder copy.');
}

console.log('Portfolio brand overhaul smoke test passed.');
