import { Quote } from "lucide-react";

const QUOTES = [
  {
    body: "SunyaOne shipped our v1 in six weeks. The code is clean enough that our in-house team could pick it up day one.",
    name: "Priya Shah",
    role: "CTO, FinflowHQ",
  },
  {
    body: "Best engineering partner we've worked with. They flagged scaling problems before we hit them.",
    name: "Marcus Lee",
    role: "Founder, Routely",
  },
  {
    body: "We hired them for a one-month audit and ended up keeping them on retainer. Exceptional senior team.",
    name: "Aisha Khan",
    role: "VP Engineering, Latcho",
  },
];

export default function Testimonials() {
  return (
    <section className="section bg-ink-50/60">
      <div className="container-px">
        <div className="max-w-2xl">
          <span className="eyebrow">Testimonials</span>
          <h2 className="section-title mt-4">
            What founders & engineering leaders say.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {QUOTES.map((q) => (
            <figure
              key={q.name}
              className="flex h-full flex-col rounded-2xl border border-ink-200 bg-white p-6"
            >
              <Quote className="h-6 w-6 text-brand-500" />
              <blockquote className="mt-4 flex-1 text-sm leading-6 text-ink-700">
                {q.body}
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-100 pt-4">
                <div className="text-sm font-semibold text-ink-900">
                  {q.name}
                </div>
                <div className="text-xs text-ink-500">{q.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
