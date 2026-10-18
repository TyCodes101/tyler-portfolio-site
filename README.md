# Tyler Cox portfolio — current Next.js application

The published portfolio uses React, TypeScript and Tailwind. This update is based on `feature/ai-product-brand-overhaul`, the source matching the live site's cream, terracotta and sage design. The repository's older static `main` branch is not substituted for the published interface.

IncidentOPS is featured alongside the existing projects with an engineering summary, repository link and four real application screenshots. Its live link is shown only after the actual deployment passes acceptance. Existing project content, navigation, resume and visual language are preserved.

## Current local startup and validation

Use Node.js 22.12+ and npm:

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Production validation and startup:

```sh
npm test
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

The GitHub Actions `portfolio` job runs these checks plus a runtime dependency audit. No API credentials or database configuration are needed for this static portfolio.

## Dependency review

The existing Next.js 16.2.6 dependency produced a critical advisory during this integration. Next.js and its ESLint configuration were updated to 16.4.2, and compatible transitive patches were applied. The resulting `npm audit --omit=dev` reports zero vulnerabilities at verification time.

The full audit retains five high-severity development-only occurrences from the same `braces` → `micromatch` → `fast-glob` → Next ESLint plugin/config chain (GHSA-vfj7-8cjw-p6xm). The audit offers a breaking downgrade to ESLint config 14, not a compatible patched release. Linting uses trusted repository inputs; these packages are not part of the deployed runtime. No suppressions, forced downgrades or clean-full-audit claim are made.

Screenshot provenance: [public/assets/incidentops/PROVENANCE.md](public/assets/incidentops/PROVENANCE.md). Public screenshots contain only fictional cases and synthetic test users.

## Historical static-site notes

The instructions below describe the older HTML implementation retained in this repository, rather than the current Next.js app.

A recruiter-friendly personal portfolio built with plain HTML, CSS, and JavaScript.

## Included
- `index.html` - main landing page with hero, competencies, experience, projects, resume, and contact sections
- `styles.css` - responsive styling and dark theme
- `script.js` - mobile navigation toggle and active section highlighting
- `resume.html` - web version of the resume
- `Tyler-Cox-Resume.pdf` - downloadable PDF resume
- `assets/tyler-photo.png` - profile image used on the site
- `tests/portfolio.test.js` - smoke test for key sections and text

## Run locally

```bash
cd portfolio-site
python3 -m http.server 8000
```

Open `http://127.0.0.1:8000`.

## Verify

```bash
node tests/portfolio.test.js
```

## Publish
This site is static, so it works well with:
- GitHub Pages
- Vercel
- Netlify

## Contact info used on the site
- Columbus, Ohio
- Tyler.cox66@yahoo.com
- LinkedIn: `tyler-cox-53b886406`
- GitHub: `TyCodes101`
