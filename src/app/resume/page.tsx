import Link from "next/link";

const projectBullets = [
  "Built and deployed a full-stack nutrition tracking app with conversational meal logging, macro tracking, and a mobile-first dashboard.",
  "Designed user flows for natural food entry, serving-size clarification, and correction handling to reduce friction during logging.",
  "Implemented trust-focused nutrition presentation that separates verified food data from estimated values for clearer user confidence.",
  "Organized the product around practical user needs: speed, clarity, responsive interaction, and understandable nutrition feedback.",
];

const experience = [
  {
    role: "Resident Advisor",
    org: "The Ohio State University Housing",
    bullets: [
      "Led and supported a residential community through high-trust communication, conflict response, and student-centered problem solving.",
      "Documented incidents, escalations, and operational updates with clear written communication and procedural accuracy.",
      "Coordinated community logistics, safety expectations, and resident support while balancing confidentiality and professionalism.",
      "Built leadership habits directly relevant to engineering teams: judgment, reliability, communication, and calm execution under pressure.",
    ],
  },
  {
    role: "Office Assistant",
    org: "OSU Housing",
    bullets: [
      "Supported front-desk operations across student, family, and staff interactions with organized communication and service quality.",
      "Managed package, mail, scheduling, and administrative workflows using tools including Excel, Outlook, and Workday.",
      "Maintained accurate records and handled sensitive information with consistency, professionalism, and operational care.",
      "Improved systems-oriented thinking through daily logistics, prioritization, documentation, and cross-functional coordination.",
    ],
  },
];

export default function ResumePage() {
  return (
    <main className="min-h-screen px-4 py-10 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-5xl rounded-[2rem] border border-stone-900/10 bg-white/86 p-6 shadow-2xl shadow-stone-700/10 backdrop-blur sm:p-10 print:shadow-none">
        <header className="border-b border-stone-900/10 pb-7">
          <p className="text-sm font-black uppercase tracking-[.22em] text-[#b9613d]">AI Product Engineer · Full Stack Developer · Product-focused Software Engineer</p>
          <div className="mt-3 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <h1 className="text-5xl font-black tracking-[-.07em] text-[#191f2a] sm:text-6xl">Tyler Cox</h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-stone-600">
                Ohio State Computer Science & Engineering student building deployed full-stack web products with conversational AI, responsive UI, and practical product thinking. Seeking software engineering internships where I can contribute to user-facing features, reliable systems, and thoughtful product execution. GPA: 3.1 · Expected graduation: May 2027.
              </p>
            </div>
            <div className="text-sm font-semibold text-stone-600 lg:text-right">
              <p>Columbus, Ohio</p>
              <p><a href="mailto:Tyler.cox66@yahoo.com">Tyler.cox66@yahoo.com</a></p>
              <p><a href="https://github.com/TyCodes101">github.com/TyCodes101</a></p>
              <p><a href="https://www.linkedin.com/in/tyler-cox-53b886406">linkedin.com/in/tyler-cox-53b886406</a></p>
            </div>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-sm font-black uppercase tracking-[.2em] text-[#8f3d27]">Featured Product</h2>
          <div className="mt-4 rounded-3xl bg-[#fbf7f0] p-5">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
              <div>
                <h3 className="text-2xl font-black tracking-tight">Calorie Compass — AI Conversational Nutrition Platform</h3>
                <p className="mt-1 text-sm font-bold text-stone-600">Next.js · React · TypeScript · Node.js · PostgreSQL · OpenAI APIs · Prisma · Vercel</p>
              </div>
              <a className="text-sm font-black text-[#8f3d27]" href="https://calorie-compass-chi.vercel.app/">Live deployment</a>
            </div>
            <ul className="mt-4 grid gap-2 text-stone-700">
              {projectBullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="text-[#b9613d]">•</span><span>{bullet}</span></li>)}
            </ul>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <h2 className="text-sm font-black uppercase tracking-[.2em] text-[#8f3d27]">Technical Strengths</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {["AI conversational systems", "Full-stack architecture", "API integrations", "Deployment pipelines", "Testing & QA", "Mobile-first development", "UX-focused engineering", "Product iteration workflows", "Java", "JavaScript / TypeScript", "React / Next.js", "Node.js", "Python", "PostgreSQL", "HTML/CSS", "Git/GitHub"].map((skill) => <span key={skill} className="rounded-full bg-[#fff0e6] px-3 py-2 text-sm font-bold text-[#8f3d27]">{skill}</span>)}
            </div>
          </div>
          <div>
            <h2 className="text-sm font-black uppercase tracking-[.2em] text-[#8f3d27]">Supporting Product</h2>
            <div className="mt-4 rounded-3xl bg-[#fbf7f0] p-5">
              <h3 className="text-xl font-black tracking-tight">Stride Fitness</h3>
              <p className="mt-2 text-stone-700">Fitness/productivity web experience focused on step tracking, routine visibility, responsive UX, and simple progress feedback for daily consistency.</p>
              <a className="mt-3 inline-block text-sm font-black text-[#8f3d27]" href="https://stride-step-tracker-tyler-cox-s-projects1.vercel.app/">Live deployment</a>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-sm font-black uppercase tracking-[.2em] text-[#8f3d27]">Experience</h2>
          <div className="mt-4 grid gap-4">
            {experience.map((item) => (
              <div key={item.role} className="rounded-3xl border border-stone-900/10 p-5">
                <h3 className="text-xl font-black tracking-tight">{item.role}</h3>
                <p className="text-sm font-bold text-stone-600">{item.org}</p>
                <ul className="mt-3 grid gap-2 text-stone-700">
                  {item.bullets.map((bullet) => <li key={bullet} className="flex gap-2"><span className="text-[#b9613d]">•</span><span>{bullet}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-8 flex flex-col justify-between gap-3 border-t border-stone-900/10 pt-6 text-sm font-bold text-stone-600 sm:flex-row">
          <Link href="/">← Portfolio</Link>
          <a href="/Tyler-Cox-Resume.pdf">Download ATS-friendly PDF resume</a>
        </footer>
      </article>
    </main>
  );
}
