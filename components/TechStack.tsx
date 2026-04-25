const STACK = [
  { name: "React", group: "Frontend" },
  { name: "Next.js", group: "Frontend" },
  { name: "JavaScript", group: "Frontend" },
  { name: "TypeScript", group: "Frontend" },
  { name: "React Native", group: "Mobile" },
  { name: "Python", group: "Backend" },
  { name: "Django", group: "Backend" },
  { name: "FastAPI", group: "Backend" },
  { name: "Node.js", group: "Backend" },
  { name: "Go", group: "Backend" },
  { name: "PostgreSQL", group: "Data" },
  { name: "Redis", group: "Data" },
  { name: "Docker", group: "DevOps" },
  { name: "Kubernetes", group: "DevOps" },
  { name: "AWS", group: "DevOps" },
  { name: "GCP", group: "DevOps" },
];

export default function TechStack() {
  return (
    <section id="tech" className="section bg-ink-50/60">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Tech stack</span>
            <h2 className="section-title mt-4">
              A focused stack — chosen for speed, maintainability, and hiring.
            </h2>
            <p className="section-sub">
              We standardize on tools the industry has tested at scale. No
              flavour-of-the-month frameworks, no surprise rewrites.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {STACK.map((t) => (
            <span
              key={t.name}
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-800 shadow-sm transition hover:border-brand-300 hover:text-brand-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              {t.name}
              <span className="text-xs text-ink-400">{t.group}</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
