import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-10 sm:p-14">
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, white 0, transparent 40%), radial-gradient(circle at 80% 80%, white 0, transparent 40%)",
            }}
          />
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mt-3 text-base text-brand-50 sm:text-lg">
                Tell us what you&apos;re building. We reply within one business
                day with a scoped proposal — no pitch deck required.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
            >
              Start the conversation
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
