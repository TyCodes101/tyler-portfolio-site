import Link from "next/link";
import { projects, experience, skillGroups } from "../content";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Résumé | Tyler Cox, Software Engineering 2027",
  description:
    "Tyler Cox’s projects, technical skills, Ohio State education and campus experience. Expected May 2027 graduation; available June/July 2027.",
  alternates: { canonical: "/resume" },
};

export default function ResumePage() {
  return (
    <>
      <a className="skip-link" href="#resume-content">
        Skip to résumé
      </a>
      <header className="site-header resume-site-header">
        <Link className="wordmark" href="/" aria-label="Tyler Cox, portfolio">
          TC<span className="brand-dot">.</span>
        </Link>
        <Link className="text-link" href="/">
          Back to portfolio ↗
        </Link>
        <a className="button" href="/Tyler-Cox-Resume.pdf" download>
          Download PDF ↓
        </a>
      </header>
      <main className="resume-page" id="resume-content">
        <header className="resume-header">
          <div>
            <p className="eyebrow">
              Software Engineering New Grad 2027 · Full-Stack &amp; Backend
            </p>
            <h1>
              Tyler <em>Cox.</em>
            </h1>
            <p>
              Ohio State CSE student graduating May 2027.
              <br />
              Columbus, Ohio · US remote · Available June / July 2027
            </p>
          </div>
          <address>
            <a href="mailto:cox.1644@osu.edu">cox.1644@osu.edu</a>
            <a href="https://github.com/TyCodes101">GitHub / TyCodes101 ↗</a>
            <a href="https://www.linkedin.com/in/tyler-cox-53b886406">
              LinkedIn ↗
            </a>
            <a href="/Tyler-Cox-Resume.pdf">
              Download ATS-friendly PDF resume ↓
            </a>
          </address>
        </header>
        <div className="resume-layout">
          <div>
            <section className="resume-section">
              <h2>Personal projects</h2>
              {projects.map((project) => (
                <article className="resume-entry" key={project.name}>
                  <div className="resume-entry-heading">
                    <h3>{project.name}</h3>
                    <span>{project.badge}</span>
                  </div>
                  <p className="resume-label">{project.label}</p>
                  <p className="stack">{project.stack}</p>
                  <ul>
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                  <a
                    className="text-link"
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open project ↗
                  </a>
                </article>
              ))}
            </section>
            <section className="resume-section">
              <h2>Campus experience</h2>
              {experience.map((item) => (
                <article className="resume-entry" key={item.role}>
                  <div className="resume-entry-heading">
                    <h3>{item.role}</h3>
                    <span>{item.dates}</span>
                  </div>
                  <p className="resume-label">{item.org}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </section>
          </div>
          <aside>
            <section className="resume-section">
              <h2>Education</h2>
              <h3>The Ohio State University</h3>
              <p>B.S. Computer Science &amp; Engineering</p>
              <p className="stack">Expected May 2027</p>
              <p>
                Coursework: Data Structures &amp; Algorithms, Operating Systems,
                Database Design &amp; SQL, Object-Oriented Programming.
              </p>
            </section>
            <section className="resume-section">
              <h2>Technical skills</h2>
              {skillGroups.map((group) => (
                <div className="resume-skill" key={group.label}>
                  <h3>{group.label}</h3>
                  <p>{group.skills.join(" · ")}</p>
                </div>
              ))}
            </section>
            <section className="resume-section">
              <h2>Additional training</h2>
              <p>
                Cisco Python Essentials 2<br />
                IBM Cloud Computing Fundamentals
                <br />
                IBM Cybersecurity Fundamentals
              </p>
              <a
                className="text-link"
                href="https://www.credly.com/users/tyler-cox.e044ef47"
                target="_blank"
                rel="noreferrer"
              >
                View credentials ↗
              </a>
            </section>
            <section className="resume-section">
              <h2>For your records</h2>
              <p>
                Download the one-page PDF for applications or save this page for
                a detailed view of my work.
              </p>
              <a className="text-link" href="/Tyler-Cox-Resume.pdf" download>
                Download PDF resume ↓
              </a>
            </section>
          </aside>
        </div>
      </main>
      <footer className="site-footer">
        <p>© 2026 Tyler Cox</p>
        <Link href="/">Return to portfolio ↑</Link>
      </footer>
    </>
  );
}
