const STEPS = [
  {
    n: "01",
    title: "Discover",
    body: "We talk through goals, users, constraints, and success metrics. You leave with a clear scope and a fixed quote.",
  },
  {
    n: "02",
    title: "Design",
    body: "Wireframes, prototypes, and a technical architecture. We agree on the contract before we write production code.",
  },
  {
    n: "03",
    title: "Build",
    body: "Weekly demos, a staging environment from day one, and a Slack/Discord channel with the engineers actually shipping.",
  },
  {
    n: "04",
    title: "Launch",
    body: "Production deploy with monitoring, alerts, and rollback. App Store / Play Store submission included for mobile.",
  },
  {
    n: "05",
    title: "Maintain",
    body: "Monthly retainer or on-demand. We patch, monitor, and evolve the product as your business grows.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Process</span>
          <h2 className="section-title mt-4">
            How we work — predictable, transparent, fast.
          </h2>
          <p className="section-sub">
            Most projects go from kickoff to first production deploy in under
            two weeks.
          </p>
        </div>

        <ol className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map((s) => (
            <li
              key={s.n}
              className="relative rounded-2xl border border-ink-200 bg-white p-5"
            >
              <div className="font-mono text-xs font-semibold text-brand-600">
                {s.n}
              </div>
              <h3 className="mt-2 text-base font-semibold text-ink-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
