const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const requiredIds = ['home', 'about', 'competencies', 'experience', 'projects', 'resume', 'contact'];
const requiredText = [
  'Tyler Cox builds dependable software and brings calm, organized leadership to real-world work.',
  'Resident Advisor (RA)',
  'Office Assistant',
  'Stride Fitness Dashboard',
  'Portfolio Site',
  'MapReduce Word Count Lab',
  'Download Resume',
  'Columbus, Ohio',
  'TyCodes101'
];

for (const id of requiredIds) {
  if (!html.includes(`id="${id}"`)) {
    throw new Error(`Missing required section: ${id}`);
  }
}

for (const text of requiredText) {
  if (!html.includes(text)) {
    throw new Error(`Missing required text: ${text}`);
  }
}

console.log('Portfolio smoke test passed.');
