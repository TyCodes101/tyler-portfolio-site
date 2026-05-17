const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, '..', 'index.html');
const cssPath = path.join(__dirname, '..', 'styles.css');
const jsPath = path.join(__dirname, '..', 'script.js');

const html = fs.readFileSync(htmlPath, 'utf8');
const css = fs.readFileSync(cssPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

const requiredIds = ['home', 'work', 'skills', 'about', 'resume', 'contact'];
const requiredText = [
  'Tyler Cox',
  'Software engineer · product-focused builder · AI/full-stack developer',
  'I build polished real-world software products that feel clear, useful, and human.',
  'The Ohio State University',
  'Calorie Compass',
  'https://calorie-compass-chi.vercel.app/',
  'https://github.com/TyCodes101/calorie-compass',
  'Stride Fitness',
  'JavaScript / TypeScript',
  'React / Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'OpenAI APIs',
  'UI/UX craft',
  'Responsive design',
  'Full-stack development',
  'Tyler-Cox-Resume.pdf',
  'Tyler.cox66@yahoo.com',
  'linkedin.com/in/tyler-cox-53b886406',
  'github.com/TyCodes101',
  'Columbus, OH'
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

if (/placeholder|lorem ipsum|View Demo|View Code|Code Link Placeholder|Demo Placeholder/i.test(html)) {
  throw new Error('Portfolio should not include generic placeholder/demo/code copy.');
}

if (!html.includes('aria-label="Primary navigation"')) {
  throw new Error('Missing accessible primary navigation label.');
}

if (!html.includes('class="skip-link"')) {
  throw new Error('Missing skip link for keyboard users.');
}

if (!css.includes('@media (max-width: 760px)')) {
  throw new Error('Missing mobile responsive breakpoint.');
}

if (!css.includes('prefers-reduced-motion')) {
  throw new Error('Missing reduced motion support.');
}

if (!js.includes('IntersectionObserver')) {
  throw new Error('Missing progressive reveal/nav observer behavior.');
}

console.log('Portfolio smoke test passed.');
