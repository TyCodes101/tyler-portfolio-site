import Link from "next/link";

const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Java", "SQL", "HTML", "CSS"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Tailwind CSS", "Prisma"],
  },
  {
    label: "AI + Product",
    skills: ["OpenAI APIs", "Intent classification", "Conversational UX", "Prompting", "Structured outputs"],
  },
  {
    label: "Deployment + Tools",
    skills: ["Vercel", "Git/GitHub", "PostgreSQL", "Responsive design", "Testing workflows"],
  },
];

const projects = [
  {
    name: "Calorie Compass",
    label: "AI-powered calorie and macro tracking platform",
    stack: "Next.js · React · TypeScript · PostgreSQL · Prisma · OpenAI APIs · Vercel",
    href: "https://calorie-compass-chi.vercel.app/",
    bullets: [
      "Built and deployed a full-stack nutrition app with conversational meal logging, macro tracking, and a dashboard-first mobile experience.",
      "Designed an AI assistant flow for natural food entry, serving-size clarification, correction handling, and context-aware follow-up questions.",
      "Implemented a trust-focused nutrition pipeline that separates verified food data from estimated values so users can understand confidence and source quality.",
      "Improved the product experience through responsive dashboards, polished logging flows, and UX decisions focused on speed, clarity, and user confidence.",
    ],
  },
  {
    name: "Portfolio Website",
    label: "Recruiter-focused personal product portfolio",
    stack: "Next.js · React · Tailwind CSS · Vercel · Responsive UI",
    href: "https://tyler-portfolio-site.vercel.app/",
    bullets: [
      "Designed and deployed a modern portfolio that presents shipped products, technical ownership, and product-engineering strengths for internship recruiting.",
      "Built a responsive frontend with polished typography, project storytelling, resume access, and recruiter-friendly navigation.",
    ],
  },
  {
    name: "Stride Fitness",
    label: "Deployed step tracking product",
    stack: "Responsive web app · product-focused UX",
    href: "https://stride-step-tracker-tyler-cox-s-projects1.vercel.app/",
    bullets: [
      "Shipped a fitness tracking experience focused on daily step visibility, progress feedback, and lightweight user interaction.",
      "Prioritized simple flows, mobile-friendly presentation, and clear progress states for everyday consistency.",
    ],
  },
];

const experience = [
  {
    role: "Resident Advisor",
    org: "The Ohio State University Housing",
    dates: "Aug 2023 – Present",
    bullets: [
      "Support a residential community through conflict response, student support, policy communication, and operational follow-through.",
      "Respond to on-call and urgent situations with calm triage, accurate documentation, and clear escalation when needed.",
      "Communicate expectations, resolve resident concerns, and translate university procedures into practical day-to-day support.",
      "Coordinate community operations, events, and safety practices while balancing confidentiality, empathy, and accountability.",
    ],
  },
  {
    role: "Office Assistant",
    org: "OSU Housing",
    dates: "Sept 2022 – Present",
    bullets: [
      "Manage front-desk operations across student, family, and staff interactions with organized, service-oriented communication.",
      "Handle package, mail, scheduling, documentation, and administrative workflows using Excel, Outlook, and Workday.",
      "Maintain accurate records and sensitive information in a fast-paced housing environment with high daily request volume.",
      "Support operational logistics, issue routing, and office coordination to keep housing services reliable and responsive.",
    ],
  },
];

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-[1.75rem] border border-stone-900/10 bg-white/72 p-5 shadow-sm shadow-stone-700/5 print:border-stone-300 print:bg-white print:p-4 print:shadow-none">
      <h2 className="text-xs font-black uppercase tracking-[.22em] text-[#8f3d27]">
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
      <article className="mx-auto max-w-6xl rounded-[2.25rem] border border-stone-900/10 bg-white/86 p-6 shadow-2xl shadow-stone-700/10 backdrop-blur sm:p-9 print:max-w-none print:rounded-none print:border-0 print:p-6 print:shadow-none">
        <header className="grid gap-6 border-b border-stone-900/10 pb-7 lg:grid-cols-[1fr_auto] lg:items-end print:gap-4 print:pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-[#b9613d]">
              AI Product Engineer · Software Engineering Intern · Full-Stack Product Builder
            </p>
            <h1 className="mt-3 text-5xl font-black tracking-[-.07em] text-[#191f2a] sm:text-6xl print:text-4xl">
              Tyler Cox
            </h1>
            <p className="mt-4 max-w-4xl text-lg leading-8 text-stone-650 print:text-[11px] print:leading-[1.4]">
              Ohio State Computer Science & Engineering student building deployed full-stack products with conversational AI, polished frontend systems, and practical product judgment. Strong fit for software engineering, AI product engineering, and startup-style roles requiring ownership, speed, and user-facing execution.
            </p>
          </div>
          <div className="rounded-3xl bg-[#191f2a] p-5 text-sm font-semibold leading-6 text-white shadow-xl shadow-stone-700/15 lg:text-right print:bg-white print:p-0 print:text-right print:text-[10px] print:text-stone-700 print:shadow-none">
            <p>Columbus, Ohio</p>
            <p><a href="mailto:Tyler.cox66@yahoo.com">Tyler.cox66@yahoo.com</a></p>
            <p><a href="https://github.com/TyCodes101">github.com/TyCodes101</a></p>
            <p><a href="https://www.linkedin.com/in/tyler-cox-53b886406">linkedin.com/in/tyler-cox-53b886406</a></p>
            <p><a href="https://tyler-portfolio-site.vercel.app">tyler-portfolio-site.vercel.app</a></p>
          </div>
        </header>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1.08fr_.92fr] print:mt-4 print:grid-cols-[1.1fr_.9fr] print:gap-3">
          <div className="grid gap-5 print:gap-3">
            <Section title="Featured Projects">
              <div className="grid gap-4 print:gap-3">
                {projects.map((project) => (
                  <article key={project.name} className="rounded-3xl bg-[#fbf7f0] p-5 print:rounded-none print:bg-white print:p-0">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="text-xl font-black tracking-tight text-[#191f2a] print:text-[12px]">
                          {project.name} — {project.label}
                        </h3>
                        <p className="mt-1 text-sm font-bold text-stone-600 print:text-[10px]">
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

            <Section title="Experience">
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
                Expected May 2027 · GPA 3.1
              </p>
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

            <Section title="Recruiter Snapshot">
              <ul className="grid gap-3 text-sm leading-6 text-stone-700 print:gap-1 print:text-[10.5px] print:leading-[1.35]">
                <li><strong>Builds real products:</strong> multiple deployed apps with live URLs and product-oriented UX.</li>
                <li><strong>AI/product edge:</strong> hands-on conversational AI, intent classification, and user trust systems.</li>
                <li><strong>Frontend strength:</strong> responsive interfaces, mobile-first layouts, polished visual hierarchy.</li>
                <li><strong>Operational maturity:</strong> RA/OA roles show communication, triage, documentation, and reliability.</li>
              </ul>
            </Section>

            <Section title="Focus Areas">
              <div className="flex flex-wrap gap-2">
                {["AI products", "Frontend engineering", "UX systems", "Automation", "Startup execution", "Full-stack apps"].map((item) => (
                  <span key={item} className="rounded-full border border-stone-900/10 px-3 py-2 text-xs font-black text-stone-700 print:rounded-none print:border-0 print:p-0 print:text-[9.5px]">
                    {item}
                  </span>
                ))}
              </div>
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
