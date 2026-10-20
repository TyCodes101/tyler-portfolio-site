# Resume Source Artifacts

This directory contains historical HTML résumé drafts. They do not reproduce the approved October 2026 résumé and must not overwrite the published PDF.

The approved application résumé is `public/Tyler-Cox-Resume.pdf`, verified against the live approved file on October 19, 2026 (SHA-256 `057276b351f0600a6aed2bd76dc3e7d163f7703f7e289e3b5fd970641c36ec9d`). The current web summary is `src/app/resume/page.tsx` and follows its projects, employment wording and skills. Preserve the PDF unless a replacement is approved.

## Files

- `Tyler-Cox-Resume.html` — General SWE/Full-Stack Product Engineer resume (prior main version)
- `Tyler-Cox-Resume-AI-Product.html` — ATS/recruiter-optimized AI Product Engineer resume (2026 trends)

## Historical generation workflow (not the approved résumé)
- Copy the html file and edit for new target roles (SWE, AI/agent, startup, etc.)
- Use the provided PDF generation script from root: `bash scripts/generate-resume-pdf.sh` to create a PDF from the target HTML.
- PDF files are output to `/public` for portfolio and application download purposes.

## Guidelines
- Keep formatting single-column, header-rich, no graphics unless required.
- Major sections: Header with contact/GitHub/LinkedIn, Summary, Skills, Projects, Experience, Education.
- Use metrics/quants for all work/project/impact bullets if possible.
- Update links and titles as appropriate per version.

See `/public` for output resumes. For LinkedIn, consider a 2–4 sentence summary blending the best sentences from your top two targeted HTMLs.
