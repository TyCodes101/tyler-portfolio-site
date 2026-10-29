export const skillGroups = [
  {
    label: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "SQL", "Java", "C", "Swift"],
  },
  {
    label: "Frameworks",
    skills: ["React", "Next.js", "FastAPI", "SwiftUI", "REST APIs"],
  },
  {
    label: "Data",
    skills: ["PostgreSQL", "SQLAlchemy", "Prisma", "Alembic"],
  },
  {
    label: "Tools",
    skills: ["Git", "Docker", "GitHub Actions", "pytest", "Vitest", "Vercel"],
  },
];

export const projects = [
  {
    name: "IncidentOPS",
    label: "Security incident management platform",
    badge: "2026 – Present",
    stack:
      "React · TypeScript · Python · FastAPI · PostgreSQL · SQLAlchemy · Docker",
    href: "https://incidentops-public-demo.vercel.app/",
    bullets: [
      "Built a React/TypeScript incident workbench backed by FastAPI and PostgreSQL, with searchable queues, analyst assignments, investigation notes, and audit histories.",
      "Enforced Admin, Analyst, and Viewer permissions in the API; implemented Argon2 password hashing, hashed server-side sessions, and CSRF/origin checks.",
      "Committed incident changes and audit events in one database transaction; added Alembic migrations and validated CSV login-event analysis.",
      "Automated frontend and backend checks in GitHub Actions CI, including PostgreSQL integration, container restart persistence, and backup/restore tests.",
    ],
  },
  {
    name: "MacroMesh / Calorie Compass",
    label: "AI-assisted nutrition logging for web and iOS",
    badge: "2026 – Present",
    stack: "Next.js · TypeScript · SwiftUI · PostgreSQL · Prisma · OpenAI API",
    href: "https://calorie-compass-chi.vercel.app/",
    bullets: [
      "Built Next.js web and SwiftUI iOS clients for conversational meal logging, review-before-save, meal history, and progress tracking.",
      "Integrated a verified food catalog, USDA FoodData Central, Open Food Facts, and LLM fallback with source labels and structured validation.",
      "Improved branded-food matching from 3/25 to 21/25 passing cases in a fixed offline benchmark; added identity/category regression checks.",
      "Rejected meal saves that reused a user's idempotency key; used Prisma transactions and database uniqueness constraints, with tests for duplicate-key and conflict handling.",
    ],
  },
  {
    name: "CPU Scheduler Visualizer",
    label: "Interactive operating systems scheduling simulation",
    badge: "2025",
    stack: "JavaScript · React · Vite · Vitest · Testing Library",
    href: "https://tycodes101.github.io/cpu-scheduler-visualizer/",
    bullets: [
      "Implemented FCFS, non-preemptive shortest-job-first, priority scheduling, and Round Robin; calculated waiting, turnaround, and response times.",
      "Built editable workloads and Gantt-chart playback in React; verified scheduling logic and interface behavior with 7 passing Vitest tests.",
    ],
  },
];

export const experience = [
  {
    role: "Resident Advisor",
    org: "The Ohio State University Housing",
    dates: "Aug 2023 – Present",
    bullets: [
      "Respond to resident concerns and on-call incidents, de-escalate conflicts, document reports, and coordinate with housing and campus staff.",
      "Organize community events, explain housing policies and resources, and prioritize time-sensitive issues alongside routine responsibilities.",
    ],
  },
  {
    role: "Office Assistant",
    org: "The Ohio State University Housing",
    dates: "Sep 2022 – Present",
    bullets: [
      "Maintained and updated resident housing records in StarRez, BASIS, and university database systems to support data accuracy and daily operations.",
      "Logged incoming packages, processed pickups and issuance, and used tracking records to investigate missing deliveries and resolve discrepancies.",
      "Supported student and staff requests using Excel, Outlook, Workday, and university housing systems.",
    ],
  },
];
