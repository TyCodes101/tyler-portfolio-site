# Resume Source Artifacts

This directory contains editable HTML and other source files for resumes tailored for different targets.

## Files

- `Tyler-Cox-Resume.html` — General SWE/Full-Stack Product Engineer resume (prior main version)
- `Tyler-Cox-Resume-AI-Product.html` — ATS/recruiter-optimized AI Product Engineer resume (2026 trends)

## Creating New Versions
- Copy the html file and edit for new target roles (SWE, AI/agent, startup, etc.)
- Use the provided PDF generation script from root: `bash scripts/generate-resume-pdf.sh` to create a PDF from the target HTML.
- PDF files are output to `/public` for portfolio and application download purposes.

## Guidelines
- Keep formatting single-column, header-rich, no graphics unless required.
- Major sections: Header with contact/GitHub/LinkedIn, Summary, Skills, Projects, Experience, Education.
- Use metrics/quants for all work/project/impact bullets if possible.
- Update links and titles as appropriate per version.

See `/public` for output resumes. For LinkedIn, consider a 2–4 sentence summary blending the best sentences from your top two targeted HTMLs.