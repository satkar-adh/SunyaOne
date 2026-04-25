import { Github, Linkedin, Twitter } from "lucide-react";
import Logo from "./Logo";

const COLS = [
  {
    title: "Services",
    links: [
      { label: "Web Apps", href: "#services" },
      { label: "Mobile Apps", href: "#services" },
      { label: "DevOps & Cloud", href: "#services" },
      { label: "Maintenance", href: "#services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Process", href: "#process" },
      { label: "Work", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-200 bg-white">
      <div className="container-px py-14">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-ink-600">
              SunyaOne is a contract software studio helping teams design,
              build, and ship modern web and mobile products.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition hover:border-ink-300 hover:text-ink-900"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition hover:border-ink-300 hover:text-ink-900"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter / X"
                className="grid h-9 w-9 place-items-center rounded-full border border-ink-200 text-ink-600 transition hover:border-ink-300 hover:text-ink-900"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {COLS.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-ink-900">{c.title}</h4>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-ink-600 hover:text-ink-900"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-ink-100 pt-6 text-xs text-ink-500 sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} SunyaOne. All rights reserved.</div>
          <div className="font-mono">01 — built with Next.js</div>
        </div>
      </div>
    </footer>
  );
}
