const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const page = fs.readFileSync(path.join(root, 'src/app/page.tsx'), 'utf8');
const resume = fs.readFileSync(path.join(root, 'src/app/resume/page.tsx'), 'utf8');
const layout = fs.readFileSync(path.join(root, 'src/app/layout.tsx'), 'utf8');
const pkg = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

const requiredPortfolioText = [
  'AI Product Engineer',
  'Full Stack Product Builder',
  'Building AI-powered apps that feel human.',
  'Ohio State Computer Science & Engineering',
  'conversational AI systems',
  'polished consumer experiences',
  'production-ready software',
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
  '3.1 GPA',
  'Graduating May 2027',
  'Tyler.cox66@yahoo.com',
  'linkedin.com/in/tyler-cox-53b886406',
];

for (const text of requiredPortfolioText) {
  if (!page.includes(text)) throw new Error(`Missing portfolio text: ${text}`);
}

const requiredResumeText = [
  'AI Product Engineer · Full Stack Developer · Product-focused Software Engineer',
  'GPA: 3.1',
  'Expected graduation: May 2027',
  'Built an AI-powered conversational nutrition tracking platform',
  'Designed a correction-aware conversational assistant',
  'trusted nutrition reconciliation pipelines',
  'Resident Advisor',
  'Office Assistant',
  'operations',
  'documentation',
];

for (const text of requiredResumeText) {
  if (!resume.includes(text)) throw new Error(`Missing resume text: ${text}`);
}

if (!pkg.dependencies?.next || !pkg.dependencies?.react || !pkg.devDependencies?.tailwindcss) {
  throw new Error('Expected Next.js, React, and Tailwind dependencies.');
}

if (!layout.includes('AI Product Engineer & Full Stack Product Builder')) {
  throw new Error('Missing product-engineer metadata.');
}

if (/placeholder|lorem ipsum|Create Next App|Deploy Now/i.test(page + resume)) {
  throw new Error('Found generic placeholder copy.');
}

console.log('Portfolio brand overhaul smoke test passed.');
