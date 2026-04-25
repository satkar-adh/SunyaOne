import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid-fade">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(15,23,42,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,23,42,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      <div className="container-px py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <span className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Contract software studio
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            We build the{" "}
            <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent">
              web & mobile products
            </span>{" "}
            your business runs on.
          </h1>
          <p className="mt-6 text-lg text-ink-600 sm:text-xl">
            SunyaOne is a senior engineering team you can hire on contract. From
            zero to one — design, build, ship, and maintain — across React,
            Next.js, React Native, Python, and Go.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Book a discovery call
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#services" className="btn-secondary">
              Explore services
            </a>
          </div>
          <p className="mt-6 text-xs text-ink-500">
            Trusted by founders & teams from seed to series B.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:grid-cols-4">
          {[
            { k: "50+", v: "Projects shipped" },
            { k: "12+", v: "Engineers on call" },
            { k: "99.95%", v: "Avg uptime" },
            { k: "< 2 wks", v: "To first deploy" },
          ].map((s) => (
            <div
              key={s.v}
              className="rounded-2xl border border-ink-200 bg-white/60 p-4 text-center backdrop-blur"
            >
              <div className="text-2xl font-semibold text-ink-900">{s.k}</div>
              <div className="mt-1 text-xs text-ink-600">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
