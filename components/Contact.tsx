"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const SERVICES = [
  "Web app",
  "Mobile app",
  "API / backend",
  "DevOps & cloud",
  "Audit / consulting",
  "Other",
];

const BUDGETS = ["< $5k", "$5k – $20k", "$20k – $50k", "$50k+"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to your form provider (Formspree, Resend, custom API)
    setSubmitted(true);
  }

  return (
    <section id="contact" className="section">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Contact</span>
            <h2 className="section-title mt-4">Let&apos;s build something.</h2>
            <p className="section-sub">
              Drop your project details below, or reach us directly. We respond
              within one business day.
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 text-brand-600" />
                <div>
                  <div className="font-medium text-ink-900">Email</div>
                  <a
                    href="mailto:hello@sunyaone.com"
                    className="text-ink-600 hover:text-ink-900"
                  >
                    hello@sunyaone.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 text-brand-600" />
                <div>
                  <div className="font-medium text-ink-900">Phone</div>
                  <a
                    href="tel:+10000000000"
                    className="text-ink-600 hover:text-ink-900"
                  >
                    +1 (000) 000-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 text-brand-600" />
                <div>
                  <div className="font-medium text-ink-900">Office</div>
                  <div className="text-ink-600">Remote-first · HQ TBD</div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-ink-200 bg-white p-6 sm:p-8"
          >
            {submitted ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-100 text-brand-700">
                    <Send className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink-900">
                    Thanks — message received.
                  </h3>
                  <p className="mt-2 text-sm text-ink-600">
                    We&apos;ll get back to you within one business day.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field label="Full name" name="name" required />
                <Field label="Work email" name="email" type="email" required />
                <Field
                  label="Company"
                  name="company"
                  className="sm:col-span-2"
                />
                <SelectField
                  label="Service"
                  name="service"
                  options={SERVICES}
                />
                <SelectField label="Budget" name="budget" options={BUDGETS} />
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium text-ink-800">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
                    placeholder="Tell us about what you're building, timeline, and any links."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full">
                    Send message
                    <Send className="h-4 w-4" />
                  </button>
                  <p className="mt-3 text-xs text-ink-500">
                    By submitting you agree to our privacy policy. We never
                    share your data.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="text-sm font-medium text-ink-800">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm placeholder:text-ink-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium text-ink-800">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-1.5 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm text-ink-900 shadow-sm focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-200"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
