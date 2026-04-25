import { Clock, Users, LineChart, Lock } from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "Senior, not junior",
    body: "Every engineer on your project has shipped production software for years. No bait-and-switch.",
  },
  {
    icon: Users,
    title: "Embedded with your team",
    body: "We use your tools — Linear, Slack, GitHub — and you'll always know who's working on what.",
  },
  {
    icon: LineChart,
    title: "Outcome-driven",
    body: "We bill against milestones tied to your business goals, not hours spent in meetings.",
  },
  {
    icon: Lock,
    title: "Code is yours, day one",
    body: "Source code, infra, accounts — everything is in your name. We're partners, not gatekeepers.",
  },
];

export default function WhyUs() {
  return (
    <section className="section bg-ink-900 text-white">
      <div className="container-px">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand-300">
              Why SunyaOne
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              The agency model — without the agency overhead.
            </h2>
            <p className="mt-4 max-w-lg text-base text-ink-300 sm:text-lg">
              We are a small, senior team. That means lower cost, higher
              throughput, and decisions made by the people writing the code.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {REASONS.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/20 text-brand-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-ink-300">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
