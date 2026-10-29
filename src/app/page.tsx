import Image from "next/image";
import Link from "next/link";
import { ProjectGallery } from "./project-gallery";
import { SchedulerPreview } from "./scheduler-preview";
import { SiteHeader } from "./site-header";

function Arrow() {
  return (
    <span aria-hidden="true" className="link-arrow">
      ↗
    </span>
  );
}
const github = "https://github.com/TyCodes101";
const linkedin = "https://www.linkedin.com/in/tyler-cox-53b886406";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-meta">
            <p>Software engineering / Ohio State ’27</p>
            <p>
              <span className="status-dot" /> Available June / July 2027
            </p>
          </div>
          <h1 id="hero-title" className="hero-name">
            Tyler <em>Cox.</em>
          </h1>
          <div className="hero-bottom">
            <div className="hero-copy">
              <h2>
                I build the interface.
                <br />
                And what’s behind it.
              </h2>
              <p>
                I’m a Computer Science &amp; Engineering student at Ohio State.
                I build full-stack apps with React, TypeScript, Python, and
                PostgreSQL, with care for the details that make them reliable.
              </p>
              <div className="hero-actions">
                <a className="button" href="#projects">
                  Explore my work <span aria-hidden="true">↓</span>
                </a>
                <a
                  className="text-link"
                  href="/Tyler-Cox-Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  View résumé <Arrow />
                </a>
              </div>
              <p className="hero-location">
                Columbus, Ohio · Open to US remote roles
              </p>
            </div>
            <figure className="hero-visual">
              <a
                href="#incidentops"
                aria-label="Explore IncidentOPS, my security incident management project"
              >
                <Image
                  src="/assets/incidentops/overview.png"
                  alt="Actual IncidentOPS dashboard with an incident queue and audit activity using synthetic demo data"
                  width={2880}
                  height={2122}
                  sizes="(max-width: 760px) 92vw, 55vw"
                  preload
                />
              </a>
              <figcaption>
                <span>01 / IncidentOPS</span>
                <span>Built across the stack ↗</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          id="projects"
          className="work-section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <p className="eyebrow">Selected work / 01—03</p>
            <h2 id="work-title">
              Built. Tested.
              <br />
              <em>Explained.</em>
            </h2>
            <p>
              Personal projects, with the engineering decisions behind them.
              Explore the demos, inspect the code, or read how I approached each
              problem.
            </p>
          </div>

          <article className="project" id="incidentops">
            <div className="project-index">
              <span>01</span>
              <span>Full-stack / Security</span>
              <span>2026 — Present</span>
            </div>
            <div className="project-heading">
              <h3>
                IncidentOPS<span className="accent">.</span>
              </h3>
              <p>An incident workbench with an accountable history.</p>
            </div>
            <ProjectGallery />
            <div className="project-details">
              <div>
                <p className="eyebrow">The problem</p>
                <p>
                  Analysts need searchable cases, investigation notes, clear
                  permissions, and a history they can follow. I built these
                  workflows across a React interface, FastAPI service, and
                  PostgreSQL database.
                </p>
                <p className="stack">
                  React · TypeScript · FastAPI · PostgreSQL · Docker
                </p>
              </div>
              <div>
                <p className="eyebrow">What I built</p>
                <ul className="decision-list">
                  <li>
                    <strong>Permissions in the API.</strong> Admin, Analyst, and
                    Viewer roles, hashed server-side sessions, and CSRF checks.
                  </li>
                  <li>
                    <strong>Changes with a record.</strong> Incident updates and
                    audit events commit in the same database transaction.
                  </li>
                  <li>
                    <strong>Checks beyond the happy path.</strong> CI covers API
                    and frontend behavior, PostgreSQL persistence, and
                    backup/restore workflows.
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-footer">
              <div className="project-links">
                <a
                  className="button"
                  href="https://incidentops-public-demo.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live demo <Arrow />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/TyCodes101/incidentops"
                  target="_blank"
                  rel="noreferrer"
                >
                  Explore the code <Arrow />
                </a>
              </div>
              <p className="demo-note">
                Shared sandbox with fictional data. Changes are visible to other
                visitors; shared action limits apply.
              </p>
            </div>
          </article>

          <article className="project nutrition-project" id="macromesh">
            <div className="project-index">
              <span>02</span>
              <span>Web + iOS / Applied AI</span>
              <span>2026 — Present</span>
            </div>
            <div className="project-heading">
              <h3>
                MacroMesh<span className="accent">.</span>
              </h3>
              <p>Calorie Compass: meal logging with a review step.</p>
            </div>
            <div className="nutrition-feature">
              <div className="nutrition-intro">
                <p className="eyebrow">Engineering note / Food matching</p>
                <h4>
                  Useful AI needs
                  <br />
                  <em>room for correction.</em>
                </h4>
                <p>
                  I built conversational meal logging around source labels,
                  structured validation, and review before saving. Users can
                  check a result before it becomes part of their history.
                </p>
              </div>
              <div className="benchmark">
                <span className="benchmark-label">Fixed offline benchmark</span>
                <div className="benchmark-comparison">
                  <div>
                    <span className="benchmark-number old">
                      3<span>/25</span>
                    </span>
                    <span>Before</span>
                  </div>
                  <span className="benchmark-arrow" aria-hidden="true">
                    →
                  </span>
                  <div>
                    <span className="benchmark-number">
                      21<span>/25</span>
                    </span>
                    <span>After</span>
                  </div>
                </div>
                <p>
                  Branded-food matching cases passed in the same 25-case test
                  set. This measures that test set, not general nutrition
                  accuracy.
                </p>
                <a
                  className="text-link"
                  href="https://github.com/TyCodes101/calorie-compass"
                  target="_blank"
                  rel="noreferrer"
                >
                  Inspect the implementation <Arrow />
                </a>
              </div>
            </div>
            <div className="project-details">
              <div>
                <p className="eyebrow">Across web and mobile</p>
                <p>
                  Next.js and SwiftUI clients for conversational logging, meal
                  review, history, and progress tracking.
                </p>
                <p className="stack">
                  Next.js · TypeScript · SwiftUI · Prisma · PostgreSQL · OpenAI
                  API
                </p>
              </div>
              <div>
                <p className="eyebrow">Under the interface</p>
                <ul className="decision-list">
                  <li>
                    <strong>Sources stay visible.</strong> Verified food
                    catalog, USDA FoodData Central, Open Food Facts, and an LLM
                    fallback.
                  </li>
                  <li>
                    <strong>Save once.</strong> Idempotency keys, transactions,
                    and uniqueness constraints protect against duplicate saves.
                  </li>
                  <li>
                    <strong>Keep regressions visible.</strong> Identity and
                    category checks cover food-matching behavior.
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-footer">
              <div className="project-links">
                <a
                  className="button"
                  href="https://calorie-compass-chi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Try Calorie Compass <Arrow />
                </a>
                <a
                  className="text-link"
                  href="https://github.com/TyCodes101/calorie-compass"
                  target="_blank"
                  rel="noreferrer"
                >
                  View repository <Arrow />
                </a>
              </div>
            </div>
          </article>

          <article className="project scheduler-project" id="scheduler">
            <div className="project-index">
              <span>03</span>
              <span>Computer science / Visualization</span>
              <span>2025</span>
            </div>
            <div className="scheduler-layout">
              <div>
                <h3>
                  CPU Scheduler
                  <br />
                  <em>Visualizer.</em>
                </h3>
                <p className="project-summary">
                  A way to see what scheduling decisions do to a workload.
                </p>
                <p>
                  I implemented FCFS, shortest-job-first, priority scheduling,
                  and Round Robin, with editable workloads, Gantt-chart
                  playback, and waiting, turnaround, and response times.
                </p>
                <p className="stack">React · JavaScript · Vite · Vitest</p>
                <div className="project-links">
                  <a
                    className="text-link"
                    href="https://tycodes101.github.io/cpu-scheduler-visualizer/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open the visualizer <Arrow />
                  </a>
                  <a
                    className="text-link"
                    href="https://github.com/TyCodes101/cpu-scheduler-visualizer"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code <Arrow />
                  </a>
                </div>
              </div>
              <SchedulerPreview />
            </div>
          </article>
        </section>

        <section
          className="about-section"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-heading">
            <p className="eyebrow">A little context</p>
            <h2 id="about-title">
              Care for the code.
              <br />
              <em>Care for the people.</em>
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m finishing my B.S. in Computer Science &amp; Engineering at The
              Ohio State University, graduating in May 2027.
            </p>
            <p>
              Outside my personal software projects, I work as a resident
              advisor and office assistant in OSU Housing. I respond to
              incidents, document what happened, maintain records, and help
              students and staff work through problems.
            </p>
            <p>
              I’m looking for a 2027 entry-level software engineering role in
              full-stack, backend, applied AI, or security-focused development.
              I’m based in Columbus and open to US remote teams.
            </p>
            <a
              className="text-link"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              More about me on LinkedIn <Arrow />
            </a>
          </div>
          <div className="skills-row">
            <div>
              <p className="eyebrow">Interfaces</p>
              <p>
                React / Next.js
                <br />
                TypeScript / SwiftUI
              </p>
            </div>
            <div>
              <p className="eyebrow">Services &amp; data</p>
              <p>
                Python / FastAPI
                <br />
                PostgreSQL / SQL
              </p>
            </div>
            <div>
              <p className="eyebrow">Delivery</p>
              <p>
                Docker / GitHub Actions
                <br />
                pytest / Vitest
              </p>
            </div>
            <div>
              <p className="eyebrow">Foundations</p>
              <p>
                Java / C / Git
                <br />
                Data structures / Algorithms
              </p>
            </div>
          </div>
        </section>

        <section className="resume-strip" id="resume">
          <div>
            <p className="eyebrow">The one-page version</p>
            <h2>Take my résumé with you.</h2>
            <p>Projects, technical skills, education, and campus experience.</p>
          </div>
          <div className="project-links">
            <a className="button" href="/Tyler-Cox-Resume.pdf" download>
              Download PDF <span aria-hidden="true">↓</span>
            </a>
            <Link className="text-link" href="/resume">
              Read online <Arrow />
            </Link>
          </div>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-top">
            <p className="eyebrow">Have an opportunity in mind?</p>
            <p>
              Graduating May 2027
              <br />
              Available June / July 2027
            </p>
          </div>
          <h2 id="contact-title">
            Let’s <em>talk.</em>
          </h2>
          <a className="contact-email" href="mailto:cox.1644@osu.edu">
            cox.1644@osu.edu <Arrow />
          </a>
          <div className="contact-bottom">
            <p>Columbus, Ohio / US remote</p>
            <div>
              <a href={github} target="_blank" rel="noreferrer">
                GitHub <Arrow />
              </a>
              <a href={linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow />
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <p>© 2026 Tyler Cox</p>
        <p>Built with Next.js. Made with care.</p>
      </footer>
    </>
  );
}
