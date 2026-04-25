# SunyaOne — Marketing Site

Next.js 14 (App Router) + TypeScript + Tailwind CSS landing page for **SunyaOne**, a contract software studio.

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm start
```

## Project structure

```
app/
  layout.tsx        # root layout, fonts, global metadata
  page.tsx          # composes the landing page sections
  globals.css       # Tailwind base + small set of utility classes
components/
  Header.tsx        # sticky nav with mobile menu
  Hero.tsx          # headline + CTAs + stats strip
  Services.tsx      # six-card services grid
  TechStack.tsx     # stack badges
  Process.tsx       # 5-step process
  WhyUs.tsx         # dark "why us" section with 4 reasons
  Portfolio.tsx     # case study cards (placeholders)
  Testimonials.tsx  # 3 client quotes (placeholders)
  CTA.tsx           # gradient call-to-action banner
  Contact.tsx       # contact info + form
  Footer.tsx        # footer w/ link columns + socials
  Logo.tsx          # "01" + SunyaOne wordmark
CONTENT.md          # single-source-of-truth content brief — fill this in
tailwind.config.ts  # brand color palette + animations
```

## Editing content

All copy lives directly in the component files. To replace placeholders with real content, follow [`CONTENT.md`](./CONTENT.md) — it lists every section, what it currently says, and what needs to be filled in before launch.

## Brand colors

Edit `tailwind.config.ts` → `theme.extend.colors.brand` to swap the primary colour. The default is a violet ramp (`#8b5cf6` → `#7c3aed`).

## Deploying

Stock Next.js — works on Vercel, Cloudflare Pages, Netlify, or any Node host. See `CONTENT.md` § 15.
