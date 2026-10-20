import Link from "next/link";

const skillGroups = [
  {
    "label": "Languages",
    "skills": [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Java",
      "C",
      "Swift"
    ]
  },
  {
    "label": "Frameworks",
    "skills": [
      "React",
      "Next.js",
      "FastAPI",
      "SwiftUI",
      "REST APIs"
    ]
  },
  {
    "label": "Data",
    "skills": [
      "PostgreSQL",
      "SQLAlchemy",
      "Prisma",
      "Alembic"
    ]
  },
  {
    "label": "Tools",
    "skills": [
      "Git",
      "Docker",
      "GitHub Actions",
      "pytest",
      "Vitest",
      "Vercel"
    ]
  }
];

const projects = [
  {
    "name": "IncidentOPS",
    "label": "Security incident management platform",
    "badge": "2026 – Present",
    "stack": "React · TypeScript · Python · FastAPI · PostgreSQL · SQLAlchemy · Docker",
    "href": "https://incidentops-public-demo.vercel.app/",
    "bullets": [
      "Built a React/TypeScript incident workbench backed by FastAPI and PostgreSQL, with searchable queues, analyst assignments, investigation notes, and audit histories.",
      "Enforced Admin, Analyst, and Viewer permissions in the API; implemented Argon2 password hashing, hashed server-side sessions, and CSRF/origin checks.",
      "Committed incident changes and audit events in one database transaction; added Alembic migrations and validated CSV login-event analysis.",
      "Automated frontend and backend checks in GitHub Actions CI, including PostgreSQL integration, container restart persistence, and backup/restore tests."
    ]
  },
  {
    "name": "MacroMesh / Calorie Compass",
    "label": "AI-assisted nutrition logging for web and iOS",
    "badge": "2026 – Present",
    "stack": "Next.js · TypeScript · SwiftUI · PostgreSQL · Prisma · OpenAI API",
    "href": "https://calorie-compass-chi.vercel.app/",
    "bullets": [
      "Built Next.js web and SwiftUI iOS clients for conversational meal logging, review-before-save, meal history, and progress tracking.",
      "Integrated a verified food catalog, USDA FoodData Central, Open Food Facts, and LLM fallback with source labels and structured validation.",
      "Improved branded-food matching from 3/25 to 21/25 passing cases in a fixed offline benchmark; added identity/category regression checks.",
      "Rejected meal saves that reused a user's idempotency key; used Prisma transactions and database uniqueness constraints, with tests for duplicate-key and conflict handling."
    ]
  },
  {
    "name": "CPU Scheduler Visualizer",
    "label": "Interactive operating systems scheduling simulation",
    "badge": "2025",
    "stack": "JavaScript · React · Vite · Vitest · Testing Library",
    "href": "https://tycodes101.github.io/cpu-scheduler-visualizer/",
    "bullets": [
      "Implemented FCFS, non-preemptive shortest-job-first, priority scheduling, and Round Robin; calculated waiting, turnaround, and response times.",
      "Built editable workloads and Gantt-chart playback in React; verified scheduling logic and interface behavior with 7 passing Vitest tests."
    ]
  }
];

const experience = [
  {
    "role": "Resident Advisor",
    "org": "The Ohio State University Housing",
    "dates": "Aug 2023 – Present",
    "bullets": [
      "Respond to resident concerns and on-call incidents, de-escalate conflicts, document reports, and coordinate with housing and campus staff.",
      "Organize community events, explain housing policies and resources, and prioritize time-sensitive issues alongside routine responsibilities."
    ]
  },
  {
    "role": "Office Assistant",
    "org": "The Ohio State University Housing",
    "dates": "Sep 2022 – Present",
    "bullets": [
      "Maintained and updated resident housing records in StarRez, BASIS, and university database systems to support data accuracy and daily operations.",
      "Logged incoming packages, processed pickups and issuance, and used tracking records to investigate missing deliveries and resolve discrepancies.",
      "Supported student and staff requests using Excel, Outlook, Workday, and university housing systems."
    ]
  }
];

function Section({ title, eyebrow, children }: { title: string; eyebrow?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1.75rem] border border-stone-900/10 bg-white/78 p-5 shadow-sm shadow-stone-700/5 print:border-stone-300 print:bg-white print:p-4 print:shadow-none">
      {eyebrow ? (
        <p className="text-[11px] font-black uppercase tracking-[.22em] text-[#b9613d]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-lg font-black tracking-[-.035em] text-[#191f2a] print:text-[12px]">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 grid gap-2 text-sm leading-6 text-stone-700 print:gap-1 print:text-[10.5px] print:leading-[1.35]">
      {items.map((bullet) => (
        <li key={bullet} className="flex gap-2">
          <span className="mt-0.5 text-[#b9613d]">•</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,#fff0e6,transparent_34%),linear-gradient(180deg,#fbf7f0,#f5efe7)] px-4 py-10 sm:px-6 lg:px-8 print:bg-white print:p-0">
      <article className="mx-auto max-w-6xl rounded-[2.25rem] border border-stone-900/10 bg-white/88 p-6 shadow-2xl shadow-stone-700/10 backdrop-blur sm:p-9 print:max-w-none print:rounded-none print:border-0 print:p-6 print:shadow-none">
        <header className="grid gap-6 border-b border-stone-900/10 pb-7 lg:grid-cols-[1fr_auto] lg:items-end print:gap-4 print:pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#b9613d]">
              Software Engineering New Grad 2027 · Full-Stack & Backend Developer
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-[-.07em] text-[#191f2a] sm:text-6xl print:text-4xl">
              Tyler Cox
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-650 print:text-[11px] print:leading-[1.4]">
              Ohio State CSE student graduating May 2027. Builds and tests deployed web, mobile and backend software using React, TypeScript, Python, FastAPI, PostgreSQL and AI-assisted workflows.
            </p>
          </div>
          <div className="rounded-3xl bg-[#191f2a] p-5 text-sm font-semibold leading-6 text-white shadow-xl shadow-stone-700/15 lg:text-right print:bg-white print:p-0 print:text-right print:text-[10px] print:text-stone-700 print:shadow-none">
            <p>Columbus, Ohio</p>
            <p><a href="mailto:cox.1644@osu.edu">cox.1644@osu.edu</a></p>
            <p><a href="https://github.com/TyCodes101">github.com/TyCodes101</a></p>
            <p><a href="https://www.linkedin.com/in/tyler-cox-53b886406">linkedin.com/in/tyler-cox-53b886406</a></p>
            <p><a href="https://tyler-portfolio-site.vercel.app">tyler-portfolio-site.vercel.app</a></p>
          </div>
        </header>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.12fr_.88fr] print:mt-4 print:grid-cols-[1.1fr_.9fr] print:gap-3">
          <div className="grid gap-5 print:gap-3">
            <Section title="Projects" eyebrow="Most important signal">
              <div className="grid gap-4 print:gap-3">
                {projects.map((project) => (
                  <article key={project.name} className="rounded-3xl bg-[#fbf7f0] p-5 print:rounded-none print:bg-white print:p-0">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-xl font-black tracking-tight text-[#191f2a] print:text-[12px]">
                            {project.name}
                          </h3>
                          <span className="rounded-full border border-stone-900/10 px-2.5 py-1 text-[11px] font-black uppercase tracking-[.12em] text-stone-500 print:hidden">
                            {project.badge}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-bold text-stone-700 print:text-[10px]">
                          {project.label}
                        </p>
                        <p className="mt-1 text-xs font-semibold text-stone-500 print:text-[10px]">
                          {project.stack}
                        </p>
                      </div>
                      <a className="text-sm font-black text-[#8f3d27] print:text-[9.5px]" href={project.href}>
                        Live
                      </a>
                    </div>
                    <BulletList items={project.bullets} />
                  </article>
                ))}
              </div>
            </Section>

            <Section title="Experience" eyebrow="Leadership + operations">
              <div className="grid gap-4 print:gap-3">
                {experience.map((item) => (
                  <article key={item.role}>
                    <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                      <h3 className="text-xl font-black tracking-tight text-[#191f2a] print:text-[12px]">
                        {item.role} · {item.org}
                      </h3>
                      <p className="text-sm font-black text-[#8f3d27] print:text-[10px]">
                        {item.dates}
                      </p>
                    </div>
                    <BulletList items={item.bullets} />
                  </article>
                ))}
              </div>
            </Section>
          </div>

          <aside className="grid content-start gap-5 print:gap-3">
            <Section title="Education">
              <h3 className="text-lg font-black tracking-tight text-[#191f2a] print:text-[12px]">
                The Ohio State University
              </h3>
              <p className="mt-1 text-sm font-bold text-stone-700 print:text-[10.5px]">
                B.S. Computer Science & Engineering
              </p>
              <p className="mt-1 text-sm text-stone-600 print:text-[10.5px]">
                Expected May 2027
              </p>
              <p className="mt-3 text-sm leading-6 text-stone-600">Coursework: Data Structures &amp; Algorithms, Operating Systems, Database Design &amp; SQL, Object-Oriented Programming</p>
            </Section>

            <Section title="Technical Skills">
              <div className="grid gap-4 print:gap-2">
                {skillGroups.map((group) => (
                  <div key={group.label}>
                    <p className="text-sm font-black text-[#191f2a] print:text-[10.5px]">
                      {group.label}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2 print:gap-1">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-full bg-[#fff0e6] px-3 py-1.5 text-xs font-bold text-[#8f3d27] print:rounded-none print:bg-white print:p-0 print:text-[9.5px] print:text-stone-700">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Additional Training">
              <p className="text-sm leading-6 text-stone-700">Cisco Python Essentials 2; IBM Cloud Computing Fundamentals; IBM Cybersecurity Fundamentals</p>
              <a className="mt-3 inline-block text-sm font-bold text-[#8f3d27]" href="https://www.credly.com/users/tyler-cox.e044ef47">View credentials on Credly</a>
            </Section>

            <Section title="Download">
              <p className="text-sm leading-6 text-stone-700">
                Use the PDF for applications. It is intentionally cleaner and more ATS-friendly than this visual page.
              </p>
              <a className="mt-4 inline-flex rounded-full bg-[#191f2a] px-4 py-2 text-sm font-black text-white" href="/Tyler-Cox-Resume.pdf">
                Download PDF resume
              </a>
            </Section>
          </aside>
        </div>

        <footer className="mt-7 flex flex-col justify-between gap-3 border-t border-stone-900/10 pt-5 text-sm font-bold text-stone-600 sm:flex-row print:hidden">
          <Link href="/">← Portfolio</Link>
          <a href="/Tyler-Cox-Resume.pdf">Download ATS-friendly PDF resume</a>
        </footer>
      </article>
    </main>
  );
}
