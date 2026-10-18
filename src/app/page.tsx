import Link from "next/link";
import Image from "next/image";

const incidentScreens = [
  ["overview", "Security overview", "IncidentOps overview with unresolved cases, triage queue and audit activity"],
  ["queue", "Incident workspace", "Searchable IncidentOps case queue with severity, status and assignment columns"],
  ["investigation", "Investigation", "IncidentOps investigation with case properties, notes and chronological history"],
  ["analyzer", "Login-event analyzer", "IncidentOps CSV analyzer showing the documented suspicious-login rule"],
];

const calorieFeatures = [
  "Conversational meal logging",
  "Correction-aware assistant",
  "Trusted nutrition pipeline",
  "Verified vs estimated trust system",
  "Macro dashboard",
  "Mobile-first UX",
  "Conversational memory",
  "AI intent classification",
  "Intelligent nutrition reconciliation",
];

const engineeringHighlights = [
  "Next.js architecture",
  "Structured AI outputs",
  "Conversation state handling",
  "Testing infrastructure",
  "Deployment workflows",
  "Vercel deployment",
  "Mobile-first engineering",
  "UX-focused iteration",
];

const credibility = [
  ["AI conversational systems", "Designing assistant flows that preserve intent, corrections, and user context."],
  ["Full-stack architecture", "Building product surfaces across UI, API routes, data models, and deployment workflows."],
  ["API integrations", "Connecting modern interfaces to AI and backend services with structured data contracts."],
  ["Testing & QA", "Using regression checks and build gates to protect polished experiences as features evolve."],
  ["Mobile-first development", "Prioritizing thumb-friendly layouts, responsive typography, and native-feeling spacing."],
  ["Product iteration", "Improving flows based on clarity, trust, speed, and real user experience — not just code."],
];

const skillGroups = [
  ["Product engineering", ["React / Next.js", "TypeScript", "Node.js", "PostgreSQL", "Git/GitHub"]],
  ["AI systems", ["OpenAI APIs", "Structured AI outputs", "Intent classification", "Conversational UX"]],
  ["Core development", ["Java", "JavaScript", "Python", "HTML/CSS", "Full-stack development"]],
  ["Experience design", ["UI/UX design", "Responsive design", "Mobile-first UX", "Accessibility basics"]],
];

function Button({ href, children, variant = "primary" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary" | "ghost" }) {
  const styles = {
    primary: "bg-[#b9613d] text-white shadow-[0_18px_34px_rgba(185,97,61,.28)] hover:bg-[#8f3d27]",
    secondary: "border border-[rgba(47,38,28,.13)] bg-white/75 text-[#191f2a] hover:bg-white",
    ghost: "border border-[rgba(111,141,119,.22)] bg-[#6f8d77]/10 text-[#3d6248] hover:bg-[#6f8d77]/15",
  }[variant];

  return (
    <a className={`inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition hover:-translate-y-0.5 ${styles}`} href={href} target={href.startsWith("http") || href.endsWith(".pdf") ? "_blank" : undefined} rel={href.startsWith("http") || href.endsWith(".pdf") ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

function PhoneMockup() {
  return (
    <div className="float-slow relative mx-auto w-[245px] rounded-[2.2rem] border-[9px] border-[#202636] bg-white/90 p-4 shadow-2xl shadow-stone-700/20">
      <div className="mx-auto mb-5 h-1.5 w-20 rounded-full bg-stone-200" />
      <div className="rounded-3xl bg-gradient-to-br from-[#fff7ed] to-[#e7efe8] p-4">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.18em] text-[#b9613d]">Today</p>
            <p className="text-xl font-black tracking-tight">1,842 cal</p>
          </div>
          <span className="rounded-full bg-[#6f8d77]/15 px-3 py-1 text-xs font-bold text-[#3d6248]">Trusted</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {['Protein', 'Carbs', 'Fat'].map((item, index) => (
            <div key={item} className="rounded-2xl bg-white/85 p-2 text-center shadow-sm">
              <div className="mx-auto mb-2 h-10 w-10 rounded-full" style={{ background: `conic-gradient(#b9613d ${55 + index * 12}%, #efe5d7 0)` }} />
              <p className="text-[10px] font-bold text-stone-500">{item}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-2xl bg-[#191f2a] p-3 text-sm font-semibold text-white">
          Was that a small, regular, or sharing-size bag?
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="float-delay absolute -bottom-8 -left-8 hidden w-72 rounded-[2rem] border border-white/70 bg-white/80 p-4 shadow-2xl shadow-stone-700/10 backdrop-blur md:block">
      <div className="mb-4 flex items-center justify-between">
        <p className="font-black tracking-tight">Nutrition confidence</p>
        <span className="rounded-full bg-[#fff0e6] px-2.5 py-1 text-xs font-bold text-[#8f3d27]">92%</span>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full rounded-full bg-stone-200"><div className="h-3 w-[82%] rounded-full bg-[#b9613d]" /></div>
        <div className="h-3 w-full rounded-full bg-stone-200"><div className="h-3 w-[64%] rounded-full bg-[#6f8d77]" /></div>
        <div className="h-3 w-full rounded-full bg-stone-200"><div className="h-3 w-[74%] rounded-full bg-[#e2b56d]" /></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-stone-900/5 bg-[#fbf7f0]/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary navigation">
          <a href="#top" className="flex items-center gap-3 font-black tracking-tight">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#191f2a] text-sm text-[#fff3e2] shadow-lg">TC</span>
            Tyler Cox
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-stone-900/10 bg-white/60 p-1 text-sm font-bold text-stone-600 md:flex">
            <a className="rounded-full px-4 py-2 hover:bg-white" href="#projects">Projects</a>
            <a className="rounded-full px-4 py-2 hover:bg-white" href="#credibility">Engineering</a>
            <a className="rounded-full px-4 py-2 hover:bg-white" href="#resume">Resume</a>
            <a className="rounded-full px-4 py-2 hover:bg-white" href="#contact">Contact</a>
          </div>
          <a className="rounded-full bg-[#191f2a] px-4 py-2 text-sm font-bold text-white transition hover:-translate-y-0.5" href="https://github.com/TyCodes101" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.02fr_.98fr]">
          <div className="reveal">
            <p className="mb-5 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">AI Product Engineer · Full Stack Product Builder</p>
            <h1 className="max-w-4xl text-6xl font-black leading-[.88] tracking-[-.08em] text-[#191f2a] sm:text-7xl lg:text-8xl">
              Building AI-powered apps that feel human.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-600 sm:text-xl">
              I’m Tyler Cox, an Ohio State Computer Science & Engineering student graduating in May 2027. I build full-stack software with React, TypeScript, Python, PostgreSQL, and practical AI workflows. I’m seeking 2027 new-grad software engineering roles where I can contribute to reliable products and grow with an engineering team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects">View Projects</Button>
              <Button href="#incidentops" variant="secondary">Explore IncidentOps</Button>
              <Button href="/Tyler-Cox-Resume.pdf" variant="secondary">View Resume</Button>
              <Button href="https://github.com/TyCodes101" variant="secondary">GitHub</Button>
              <Button href="https://www.linkedin.com/in/tyler-cox-53b886406" variant="ghost">LinkedIn</Button>
            </div>
            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {["Full-stack · Backend", "Graduating May 2027", "Seeking 2027 new-grad roles"].map((item) => (
                <div key={item} className="glass rounded-3xl p-4 text-sm font-bold text-stone-700">{item}</div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[560px] reveal" style={{ animationDelay: '.12s' }}>
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#fff3e7] via-white/30 to-[#dfe9e1] blur-3xl" />
            <div className="glass relative mx-auto flex min-h-[540px] max-w-lg items-center justify-center rounded-[3rem] p-8">
              <PhoneMockup />
              <DashboardMockup />
              <div className="absolute right-6 top-8 rounded-3xl bg-white/85 p-4 shadow-xl shadow-stone-700/10">
                <p className="text-xs font-black uppercase tracking-[.18em] text-[#8f3d27]">AI UX</p>
                <p className="mt-1 text-sm font-bold text-stone-700">Correction-aware flows</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {['Conversational AI', 'Full-stack systems', 'Mobile-first UX', 'Testing workflows', 'Product iteration'].map((item) => (
            <div key={item} className="rounded-full border border-stone-900/10 bg-white/55 px-5 py-4 text-center text-sm font-extrabold text-stone-600 soft-shadow">{item}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">Product case studies</p>
            <h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">Not just projects — product stories.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">Featured work is framed around the user problem, product decision-making, and engineering systems underneath the interface.</p>
          </div>

          <article className="glass overflow-hidden rounded-[2.5rem]">
            <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
              <div className="relative min-h-[520px] bg-gradient-to-br from-[#f6d8c4] via-[#fff5e7] to-[#dce9dd] p-8">
                <PhoneMockup />
                <div className="absolute bottom-8 left-8 right-8 rounded-[2rem] bg-white/80 p-5 shadow-2xl shadow-stone-700/10 backdrop-blur">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[.18em] text-[#8f3d27]">Trust system</p>
                      <h3 className="text-2xl font-black tracking-tight">Verified vs estimated</h3>
                    </div>
                    <span className="rounded-full bg-[#6f8d77]/15 px-3 py-1 text-sm font-bold text-[#3d6248]">Source-aware</span>
                  </div>
                </div>
              </div>
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#191f2a] px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-white">Centerpiece</span>
                  <span className="rounded-full bg-[#6f8d77]/15 px-4 py-2 text-xs font-black uppercase tracking-[.18em] text-[#3d6248]">Live product</span>
                </div>
                <h3 className="text-4xl font-black tracking-[-.055em] sm:text-5xl">Calorie Compass</h3>
                <p className="mt-5 text-xl font-semibold leading-8 text-[#191f2a]">An AI-powered conversational nutrition assistant focused on speed, trust, natural interaction, and intelligent meal tracking.</p>

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-white/65 p-5">
                    <p className="text-sm font-black uppercase tracking-[.18em] text-[#b9613d]">Problem</p>
                    <p className="mt-2 text-stone-600">Most calorie trackers feel robotic, tedious, and disconnected from natural conversation.</p>
                  </div>
                  <div className="rounded-3xl bg-white/65 p-5">
                    <p className="text-sm font-black uppercase tracking-[.18em] text-[#6f8d77]">Solution</p>
                    <p className="mt-2 text-stone-600">A conversational assistant that helps users log meals quickly while preserving nutrition trust and context.</p>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 font-black text-[#191f2a]">Key features</p>
                  <div className="flex flex-wrap gap-2">
                    {calorieFeatures.map((feature) => <span key={feature} className="rounded-full bg-[#fff0e6] px-3 py-2 text-sm font-bold text-[#8f3d27]">{feature}</span>)}
                  </div>
                </div>

                <div className="mt-8">
                  <p className="mb-3 font-black text-[#191f2a]">Engineering highlights</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {engineeringHighlights.map((item) => <div key={item} className="rounded-2xl border border-stone-900/10 bg-white/55 px-4 py-3 text-sm font-bold text-stone-700">{item}</div>)}
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button href="https://calorie-compass-chi.vercel.app/">Live deployment</Button>
                  <Button href="https://github.com/TyCodes101/calorie-compass" variant="secondary">GitHub repo</Button>
                </div>
              </div>
            </div>
          </article>

          <article id="incidentops" aria-labelledby="incidentops-title" className="glass mt-6 overflow-hidden rounded-[2.5rem]">
            <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:gap-12 lg:p-12">
              <div>
                <p className="mb-3 text-sm font-black uppercase tracking-[.18em] text-[#6f8d77]">Featured full-stack engineering</p>
                <h3 id="incidentops-title" className="text-3xl font-black tracking-tight sm:text-4xl">IncidentOPS — Security Incident Management Platform</h3>
                <p className="mt-5 leading-7 text-stone-600">Developed a full-stack incident management application featuring secure authentication, role-based permissions, searchable case queues, audit-backed investigations, and CSV login-event analysis.</p>
                <p className="mt-5 text-sm font-semibold leading-7 text-stone-600"><strong className="text-[#191f2a]">Stack:</strong> React, TypeScript, Python, FastAPI, SQLAlchemy, PostgreSQL, GitHub Actions, Docker</p>
                <ul className="mt-6 list-disc space-y-3 pl-5 leading-7 text-stone-600">
                  <li>REST API with server-side sessions, CSRF checks and Admin, Analyst and Viewer permissions.</li>
                  <li>Persistent investigations, notes and audit events, with PostgreSQL restart and backup/restore checks in CI.</li>
                  <li>Responsive case workflows and deterministic CSV analysis, backed by frontend, API and browser tests.</li>
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button href="https://incidentops-public-demo.vercel.app">Try IncidentOPS</Button>
                  <Button href="https://github.com/TyCodes101/incidentops" variant="secondary">IncidentOPS on GitHub</Button>
                </div>
                <p className="mt-4 text-sm leading-6 text-stone-600">Verified live sandbox with shared Analyst and Viewer accounts. Use fictional data only; changes are visible to other visitors and shared action quotas apply.</p>
              </div>
              <div className="grid content-start gap-5 sm:grid-cols-2" aria-label="Verified IncidentOPS screenshots">
                {incidentScreens.map(([file, title, alt]) => (
                  <figure key={file} className="min-w-0">
                    <a href={`/assets/incidentops/${file}.png`} target="_blank" rel="noreferrer" aria-label={`Open full-size ${title.toLowerCase()} screenshot`} className="block overflow-hidden rounded-xl border border-stone-900/15 bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8f3d27]">
                      <Image src={`/assets/incidentops/${file}.png`} alt={alt} width={2880} height={2122} sizes="(min-width: 1024px) 270px, (min-width: 640px) 42vw, 85vw" className="aspect-[4/3] w-full object-contain object-top" />
                    </a>
                    <figcaption className="mt-2 text-sm font-bold text-stone-600">{title} <span className="font-normal">· open full size</span></figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>

          <div className="mt-6">
            <article className="glass rounded-[2.2rem] p-8">
              <p className="mb-3 text-sm font-black uppercase tracking-[.18em] text-[#b9613d]">Supporting product</p>
              <h3 className="text-3xl font-black tracking-tight">Stride Fitness</h3>
              <p className="mt-4 leading-7 text-stone-600">A fitness/productivity experience focused on step tracking, routine visibility, responsive design, and helping users keep momentum through simple daily feedback.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {['Fitness UX', 'Responsive frontend', 'Habit concepts', 'Consumer product thinking'].map((item) => <span key={item} className="rounded-full bg-white/70 px-3 py-2 text-sm font-bold text-stone-700">{item}</span>)}
              </div>
              <div className="mt-7"><Button href="https://stride-step-tracker-tyler-cox-s-projects1.vercel.app/" variant="secondary">Live Stride demo</Button></div>
            </article>

          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass mx-auto max-w-7xl rounded-[2.5rem] p-8 sm:p-12">
          <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">Currently Building</p>
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
            <h2 className="text-4xl font-black tracking-[-.055em] sm:text-5xl">Active, ambitious, and product-focused.</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {['Calorie Compass', 'Conversational AI systems', 'AI UX exploration', 'Mobile-first engineering', 'Product-focused development', 'Trustworthy consumer workflows'].map((item) => <div key={item} className="rounded-3xl bg-white/62 p-5 font-bold text-stone-700">{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="credibility" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">Engineering credibility</p>
            <h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">Technical depth with product instincts.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">The goal is not just to make software work — it is to make it trustworthy, understandable, responsive, and good enough for real users.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {credibility.map(([title, text]) => (
              <article key={title} className="glass rounded-[2rem] p-6 transition hover:-translate-y-1">
                <h3 className="text-xl font-black tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">Skill system</p>
          <h2 className="max-w-3xl text-4xl font-black tracking-[-.055em] sm:text-5xl">A modern stack organized around products, AI, and experience quality.</h2>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(([group, skills]) => (
              <article key={group as string} className="glass rounded-[2rem] p-6">
                <h3 className="text-xl font-black tracking-tight">{group}</h3>
                <div className="mt-5 space-y-2">
                  {(skills as string[]).map((skill) => <div key={skill} className="rounded-2xl bg-white/65 px-4 py-3 text-sm font-bold text-stone-700">{skill}</div>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">About</p>
            <h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">I build from both sides: the system and the experience.</h2>
          </div>
          <div className="glass rounded-[2.5rem] p-8 text-lg leading-8 text-stone-600 sm:p-10">
            <p>
              I’m a builder focused on creating intuitive, polished, real-world experiences through engineering and thoughtful UX. My work is moving toward the intersection of AI systems, full-stack product architecture, and consumer-grade interfaces — the kind of software that feels simple on the surface because the underlying system is carefully designed.
            </p>
            <p className="mt-6">
              At Ohio State, I’m developing the engineering foundation. Through shipped products like Calorie Compass, I’m developing the product judgment: how to clarify user intent, reduce friction, design trustworthy flows, and keep iterating until the experience feels ready for real people.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="glass mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2.5rem] p-8 sm:p-12 lg:flex-row lg:items-center">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">Resume</p>
            <h2 className="text-4xl font-black tracking-[-.055em] sm:text-5xl">A recruiter-ready resume built for quick review.</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-600">Download my one-page software engineering résumé featuring IncidentOps, MacroMesh, engineering skills, and campus leadership.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Button href="/resume" variant="secondary">View web resume</Button>
            <Button href="/Tyler-Cox-Resume.pdf">Download PDF</Button>
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div>
            <p className="mb-3 text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">Contact</p>
            <h2 className="text-4xl font-black tracking-[-.055em] sm:text-6xl">Let’s build something useful.</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">I’m seeking 2027 entry-level software engineering opportunities in full-stack, backend, applied AI, and security-focused development, especially in Ohio and on remote teams.</p>
          </div>
          <div className="glass grid gap-3 rounded-[2.5rem] p-5">
            {[
              ['Email', 'cox.1644@osu.edu', 'mailto:cox.1644@osu.edu'],
              ['LinkedIn', 'linkedin.com/in/tyler-cox-53b886406', 'https://www.linkedin.com/in/tyler-cox-53b886406'],
              ['GitHub', 'github.com/TyCodes101', 'https://github.com/TyCodes101'],
              ['Live product', 'Calorie Compass', 'https://calorie-compass-chi.vercel.app/'],
            ].map(([label, value, href]) => (
              <a key={label} className="flex flex-col gap-1 rounded-3xl bg-white/65 p-5 transition hover:-translate-y-1 sm:flex-row sm:items-center sm:justify-between" href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}>
                <span className="text-sm font-black uppercase tracking-[.16em] text-stone-500">{label}</span>
                <strong className="text-[#191f2a]">{value}</strong>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="px-4 pb-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-stone-900/10 pt-8 text-sm font-semibold text-stone-500 sm:flex-row">
          <p>© 2026 Tyler Cox. AI Product Engineer / Full Stack Product Builder.</p>
          <Link href="#top" className="text-[#8f3d27]">Back to top ↑</Link>
        </div>
      </footer>
    </main>
  );
}
