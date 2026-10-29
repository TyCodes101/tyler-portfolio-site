# Tyler Cox — portfolio

Next.js portfolio for Tyler's May 2027 Ohio State graduation and June/July 2027 availability. Live site: https://tyler-portfolio-site.vercel.app

## Current site

- Warm editorial design, responsive navigation, visible keyboard focus and reduced-motion support.
- IncidentOPS case study with four original screenshots and documented provenance.
- MacroMesh / Calorie Compass case study with its fixed offline benchmark clearly scoped.
- CPU Scheduler Visualizer case study and a working scheduling sketch.
- Updated online resume, unchanged approved PDF, live demos, repositories and direct contact.
- Social sharing artwork, route metadata, sitemap and robots rules.

Personal projects are distinct from campus employment. The approved PDF in `public/Tyler-Cox-Resume.pdf` retains SHA256 `057276b351f0600a6aed2bd76dc3e7d163f7703f7e289e3b5fd970641c36ec9d`.

## Development

Use Node.js 22.12+ and npm:

```sh
npm ci
npm run dev
npm test
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

Tests verify factual content, project links, the approved PDF checksum and scheduling behavior. Desktop/mobile browser review checks navigation, screenshot switching and scheduling interactions without Playwright. The runtime dependency audit passed with zero vulnerabilities during this update; this does not describe development dependencies.

## Content and release

`src/app/page.tsx` contains the homepage; `content.ts` holds detailed resume content. `globals.css` defines the editorial layout. Small client components handle navigation, screenshot selection and the scheduling sketch. Site metadata and social sharing artwork live in `layout.tsx` and `opengraph-image.tsx`.

See [screenshot provenance](public/assets/incidentops/PROVENANCE.md) and [design notes](DESIGN.md).

Historical HTML and resume-generation files remain in the repository. The active site uses `src/app` and the approved PDF in `public`; do not regenerate the approved PDF from historical sources. Deployment uses the existing Vercel project.
