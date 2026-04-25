import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    tag: "SaaS · Web",
    title: "Realtime analytics dashboard",
    body: "Next.js + FastAPI platform serving 4M events/day. Cut p95 latency by 70% over the legacy stack.",
    stack: ["Next.js", "FastAPI", "ClickHouse"],
  },
  {
    tag: "Mobile · iOS & Android",
    title: "On-demand services marketplace",
    body: "React Native app with Stripe Connect, push, and offline-first sync. Launched in 4 months.",
    stack: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    tag: "DevOps · Migration",
    title: "Heroku → AWS migration",
    body: "Containerised a 6-service monolith, moved to ECS with Terraform, and cut hosting cost by 55%.",
    stack: ["AWS", "Terraform", "Docker"],
  },
];

export default function Portfolio() {
  return (
    <section id="work" className="section">
      <div className="container-px">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Selected work</span>
            <h2 className="section-title mt-4">
              Recent projects we&apos;ve shipped.
            </h2>
            <p className="section-sub">
              A small sample of what our team has delivered. Full case studies
              available on request.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-800"
          >
            Request portfolio
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div
                aria-hidden
                className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-brand-100 via-white to-ink-100 ring-1 ring-ink-200/60"
              >
                <div className="grid h-full w-full place-items-center font-mono text-xs uppercase tracking-widest text-ink-400">
                  preview
                </div>
              </div>
              <div className="mt-5 text-xs font-medium uppercase tracking-wider text-brand-700">
                {p.tag}
              </div>
              <h3 className="mt-2 text-lg font-semibold text-ink-900">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{p.body}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full bg-ink-100 px-2.5 py-1 text-xs font-medium text-ink-700"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
