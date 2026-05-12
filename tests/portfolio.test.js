const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const requiredIds = ['home', 'about', 'competencies', 'experience', 'projects', 'resume', 'contact'];
const requiredText = [
  'Tyler Cx',
  'Computer Science student, student leader, and builder focused on practical technology',
  'Computer Science &amp; Engineering student, Resident Advisor, and aspiring software developer building useful tools with real-world purpose.',
  'The Ohio State University',
  'Gymst / Fitness Tracking App Concept',
  'Relevant Coursework',
  'Software Components',
  'Tag Cloud Generator',
  'Word Counter',
  'MapReduce Word Count Lab',
  'ESP32 Alarm / Embedded Project',
  'Sorting / Data Structures Projects',
  'Resident Advisor',
  'Office Assistant',
  'Resume',
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

if (!html.includes('Tyler Cx / Tyl C')) {
  throw new Error('Missing personal name styling in snapshot.');
}

if (!html.includes('Gymst')) {
  throw new Error('Missing Gymst featured project content.');
}

if (!html.includes('mailto:Tyler.cox66@yahoo.com')) {
  throw new Error('Missing working mailto link.');
}

if (!html.includes('https://www.linkedin.com/in/tyler-cox-53b886406')) {
  throw new Error('Missing working LinkedIn link.');
}

if (!html.includes('Interested in working together or learning more about my work? Feel free to reach out.')) {
  throw new Error('Missing contact call to action.');
}

console.log('Portfolio smoke test passed.');
