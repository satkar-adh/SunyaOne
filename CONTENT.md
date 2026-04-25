# SunyaOne — Website Content Brief

This document is the single source of truth for everything that should appear on the marketing site. Fill in the `TODO:` items, hand the file to whoever is editing copy / configuring the site, and keep it under version control.

The boilerplate components in `components/*` already render placeholder copy in each section. To go live, walk through this doc top-to-bottom and replace placeholders with real values.

---

## 1. Brand & Identity

| Item | Value | Status |
|---|---|---|
| Legal name | TODO: e.g. "SunyaOne Technologies Pvt. Ltd." | needed |
| Trading name | SunyaOne | done |
| Wordmark / logo | "01" monogram + "SunyaOne" wordmark (placeholder in `components/Logo.tsx`) | replace with real SVG |
| Tagline | "We build the web & mobile products your business runs on." | done |
| One-liner (≤ 140 chars) | "Contract software studio for web, mobile, and DevOps. React, Next.js, React Native, Python, Go." | done |
| Founded | TODO: year | needed |
| Founders | TODO: names + 1-line bio each | needed |
| HQ / location | TODO: city, country (currently shows "Remote-first · HQ TBD") | needed |
| Brand colors | Primary `brand-600` (#7c3aed) → `brand-500` (#8b5cf6); Ink scale (slate). Edit in `tailwind.config.ts`. | adjust if needed |
| Typography | Inter (Google Fonts, loaded in `app/layout.tsx`) | done |

### Logo / brand assets to provide
- SVG logo (light + dark variants)
- Favicon (32×32, 192×192, 512×512, `apple-touch-icon`)
- OG / social share image (1200×630)

---

## 2. SEO & metadata

Fill these and update `app/layout.tsx` `metadata`:

- **Page title** — "SunyaOne — Web & Mobile Engineering Partner"
- **Meta description** (≤ 160 chars) — "SunyaOne is a contract software studio building web apps, mobile apps, and the DevOps that runs them. React, Next.js, React Native, Python, Go."
- **Keywords** — software development, web development, mobile app development, Next.js agency, React Native agency, Django, FastAPI, DevOps, contract engineering team
- **Canonical URL** — TODO: e.g. `https://sunyaone.com`
- **OpenGraph image** — TODO: place at `public/og.png`
- **Twitter handle** — TODO
- **robots.txt / sitemap.xml** — generate via `next-sitemap` once domain is fixed
- **Google Analytics / Plausible / Fathom** — TODO: choose one, add tag to `app/layout.tsx`

---

## 3. Hero (`components/Hero.tsx`)

- **Eyebrow:** "Contract software studio"
- **Headline:** "We build the web & mobile products your business runs on."
- **Subhead:** "SunyaOne is a senior engineering team you can hire on contract. From zero to one — design, build, ship, and maintain — across React, Next.js, React Native, Python, and Go."
- **Primary CTA:** "Book a discovery call" → `#contact`
- **Secondary CTA:** "Explore services" → `#services`
- **Trust line:** "Trusted by founders & teams from seed to series B." — TODO: replace with real client logos when ready.
- **Stats strip** — currently shows: 50+ projects, 12+ engineers, 99.95% uptime, < 2 wks to first deploy. **TODO:** replace with real, defensible numbers.

---

## 4. Services (`components/Services.tsx`)

Six cards, each with icon + title + description + 3 bullets:

1. **Web Applications** — Next.js / React, SSR, headless CMS
2. **Mobile Apps** — React Native, push & deep links, App Store launch
3. **APIs & Backends** — REST & GraphQL, auth & billing, background jobs (Python/Django/FastAPI, Node.js, Go)
4. **Cloud & DevOps** — IaC (Terraform), Docker & K8s, zero-downtime deploys (AWS, GCP)
5. **Maintenance & Support** — SLA-backed, security patches, roadmap planning
6. **Audits & Consulting** — Tech audits, performance tuning, hiring help

**TODO if needed:** add or remove cards based on what the team wants to actively sell.

---

## 5. Tech Stack (`components/TechStack.tsx`)

Currently rendered: React, Next.js, JavaScript, TypeScript, React Native, Python, Django, FastAPI, Node.js, Go, PostgreSQL, Redis, Docker, Kubernetes, AWS, GCP.

The user-provided stack was: React, React Native, Python, Django, FastAPI, JavaScript, Node.js, Go, Next.js. The extras (TypeScript, PostgreSQL, Redis, Docker, K8s, AWS, GCP) round out the "DevOps + data" story. Trim if any of these aren't actually offered.

---

## 6. Process (`components/Process.tsx`)

Five steps:

1. **Discover** — scope + fixed quote
2. **Design** — wireframes, prototypes, architecture
3. **Build** — weekly demos, staging, shared Slack/Discord
4. **Launch** — production deploy + monitoring + store submission
5. **Maintain** — retainer or on-demand

**TODO:** confirm these match how the team actually engages clients.

---

## 7. Why SunyaOne (`components/WhyUs.tsx`)

Four reasons:

- Senior, not junior
- Embedded with your team
- Outcome-driven (milestone-based billing)
- Code is yours, day one

---

## 8. Selected Work / Portfolio (`components/Portfolio.tsx`)

Three placeholder case studies. **TODO — REQUIRED before launch:** replace each card with a real project.

For each project gather:
- Tag (e.g. "SaaS · Web", "Mobile · iOS & Android", "DevOps · Migration")
- Project name
- 1-2 sentence outcome
- Stack used (3 chips)
- Hero image / screenshot (16:10 aspect, place under `public/work/<slug>.png`)
- (Optional) link to a longer case study page

If client work is under NDA, anonymise: "Series-A fintech", "EU-based logistics startup", etc.

---

## 9. Testimonials (`components/Testimonials.tsx`)

Three placeholder quotes. **TODO — REQUIRED before launch:** replace with real, attributable testimonials. Each needs:
- Quote (1-3 sentences)
- Name
- Role + company
- (Optional) headshot in `public/people/<slug>.jpg`

If you don't have any yet, **remove the Testimonials section entirely** (just delete `<Testimonials />` from `app/page.tsx`) rather than ship fake quotes — fake quotes are a credibility killer.

---

## 10. CTA banner (`components/CTA.tsx`)

- **Headline:** "Have a project in mind?"
- **Body:** "Tell us what you're building. We reply within one business day with a scoped proposal — no pitch deck required."
- **Button:** "Start the conversation" → `#contact`

---

## 11. Contact (`components/Contact.tsx`)

### Direct contact info — needs to be filled in

| Field | Placeholder | Replace with |
|---|---|---|
| Email | `hello@sunyaone.com` | TODO real address |
| Phone | `+1 (000) 000-0000` | TODO real number |
| Office | "Remote-first · HQ TBD" | TODO city / address |
| Calendly / Cal.com link | (none) | TODO if you want a "book a call" flow |

### Form

The form currently does **not** submit anywhere — it just shows a thank-you state. Choose a backend before launch:

1. **Formspree / Getform / Basin** — easiest, no code; replace `onSubmit` with a `POST` to their endpoint.
2. **Resend + Next.js route handler** — `app/api/contact/route.ts` that sends an email via Resend / Postmark / SES.
3. **CRM hook** — POST to HubSpot / Pipedrive / Notion DB.

Form fields: name, email, company, service (select), budget (select), project details. Add reCAPTCHA / Turnstile if spam becomes an issue.

---

## 12. Footer (`components/Footer.tsx`)

- Tagline (already filled in)
- Service links → `#services`
- Company links → About, Process, Work, Contact
- Legal links → Privacy, Terms, Cookies (**TODO:** create these pages — even short ones — before launch)
- Social: GitHub, LinkedIn, Twitter/X (**TODO:** real URLs)
- Copyright auto-renders current year

---

## 13. Pages still to build (post-MVP)

The current boilerplate is a single landing page. As content grows, consider adding:

- `/about` — team page with photos + bios
- `/work/[slug]` — full case study pages
- `/blog` — engineering writeups (helps SEO; consider MDX or a headless CMS)
- `/careers` — open roles
- `/privacy`, `/terms`, `/cookies` — legal (required for most jurisdictions if you collect form submissions)

---

## 14. Compliance & analytics checklist

- [ ] Privacy policy live at `/privacy`
- [ ] Terms of service live at `/terms`
- [ ] Cookie banner if using analytics that set cookies (skip if using cookieless analytics like Plausible)
- [ ] GDPR-compliant data handling on the contact form
- [ ] Site verified in Google Search Console
- [ ] `sitemap.xml` and `robots.txt` deployed
- [ ] OG image renders correctly (test at https://www.opengraph.xyz)
- [ ] Lighthouse: Performance ≥ 95, Accessibility ≥ 95, SEO = 100

---

## 15. Hosting & deployment

The site is a stock Next.js 14 App Router app. Recommended deploy targets:

- **Vercel** (easiest, free for this site) — connect the git repo; nothing else to configure.
- **Cloudflare Pages** — set framework preset to Next.js.
- **Self-host** — `npm run build` then `npm start` behind a reverse proxy; or `next export` for a fully static build (works because the boilerplate has no server-only routes yet).

Add the production domain to the project, set `NEXT_PUBLIC_SITE_URL`, and update `metadata.openGraph.url`.

---

## 16. Open questions for the founder / team

Answer these before going live — they shape several sections above:

1. What's the legal entity name and country of registration?
2. Where is the team based / what timezone do clients see?
3. Real numbers for the hero stats strip (projects shipped, team size, uptime)?
4. Pricing model — fixed quote, T&M, retainer, or all three?
5. Minimum engagement size? (informs the budget options on the contact form)
6. Which service offerings are *primary* vs *secondary*? (drives card order)
7. Any client logos / case studies we can publish with permission?
8. Preferred contact method — email, Calendly, or both?
