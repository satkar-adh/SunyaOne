import {
  Globe,
  Smartphone,
  Server,
  Cloud,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const SERVICES = [
  {
    icon: Globe,
    title: "Web Applications",
    body: "Marketing sites, dashboards, SaaS products. Built with Next.js and React for speed, SEO, and great DX.",
    points: ["Next.js / React", "Server-side rendering", "Headless CMS"],
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    body: "Cross-platform iOS and Android apps that share a codebase but feel native on both.",
    points: ["React Native", "Push & deep links", "App Store launch"],
  },
  {
    icon: Server,
    title: "APIs & Backends",
    body: "Robust services in Python (Django, FastAPI), Node.js, and Go — designed for scale and observability.",
    points: ["REST & GraphQL", "Auth & billing", "Background jobs"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    body: "We handle infra so you don't have to — AWS, GCP, and bare metal, with CI/CD baked in.",
    points: ["IaC (Terraform)", "Docker & K8s", "Zero-downtime deploys"],
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    body: "Long-term partnership. We monitor, patch, and evolve your product after launch.",
    points: ["SLA-backed support", "Security patches", "Roadmap planning"],
  },
  {
    icon: ShieldCheck,
    title: "Audits & Consulting",
    body: "Code reviews, architecture audits, and rescue missions for projects that need a second pair of eyes.",
    points: ["Tech audits", "Performance tuning", "Hiring help"],
  },
];

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Services</span>
          <h2 className="section-title mt-4">
            Everything you need to ship — under one roof.
          </h2>
          <p className="section-sub">
            Hire us for a single sprint or a long-term engagement. We embed with
            your team, or run the whole build end-to-end.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, body, points }) => (
            <div
              key={title}
              className="group rounded-2xl border border-ink-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-brand-100 transition group-hover:bg-brand-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink-900">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-600">{body}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-ink-700">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
