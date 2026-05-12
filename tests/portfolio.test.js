const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const requiredIds = ['home', 'about', 'competencies', 'experience', 'projects', 'resume', 'contact'];
const requiredText = [
  'Tyler Cox',
  'Computer Science &amp; Engineering Student | Software Developer | Student Leader',
  'I&rsquo;m a Computer Science &amp; Engineering student at The Ohio State University focused on building practical software,',
  'Stride Fitness Dashboard',
  'Tag Cloud Generator',
  'Word Counter',
  'MapReduce Word Count Lab',
  'ESP32 Alarm / Embedded Systems Project',
  'Sorting and Data Structures Projects',
  'Resident Advisor',
  'Office Assistant',
  'Download Resume',
  'Tyler.cox66@yahoo.com',
  'linkedin.com/in/tyler-cox-53b886406',
  'github.com/TyCodes101',
  'Columbus, Ohio'
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

if (html.includes('Tyler Cx') || html.includes('Tyl C')) {
  throw new Error('Found old placeholder name in portfolio.');
}

if (!html.includes('mailto:Tyler.cox66@yahoo.com')) {
  throw new Error('Missing working mailto link.');
}

if (!html.includes('https://www.linkedin.com/in/tyler-cox-53b886406')) {
  throw new Error('Missing working LinkedIn link.');
}

console.log('Portfolio smoke test passed.');
