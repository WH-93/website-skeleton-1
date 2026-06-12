# BC Financial — Brand Implementation Handover

## Repo
**Path:** `/Users/warrenhayes/Documents/bc-recruitment`
**Branch:** `feat/brand-implementation` (commit `92be83c`)
**Main:** `eef9e10` — untouched, old site safe

## Tech stack
- Next.js 14 (App Router), TypeScript, Tailwind CSS 3.4
- Dev server: `npm run dev` → http://localhost:3000 (currently running)
- Build check: `npx tsc --noEmit` (clean)
- No test framework — pre-existing

## What's been done (12 GitHub issues)

| # | What | Status |
|---|------|--------|
| #4 | Font swap: Montserrat → Inter | ✓ Committed |
| #5 | SVG logo component (`bc-logo.tsx`) — professional vector in header/footer/admin | ✓ Committed |
| #6 | Warm-white `#F5F0EB` in Tailwind config | ✓ Committed |
| #7 | Brand icons (`bc-icon.tsx`) — 13 geometric SVGs, 37 emojis removed | ✓ Committed |
| #8 | Hero: split layout 38/62, tagline + CTAs stacked, headshot placeholder | ✓ Committed |
| #9 | Stats bar: 5 real stats (12, 200+, UK Wide, Long-Term, Proven) with white icons | ✓ Committed |
| #10 | Why BC Financial Search? 5-column grid on warm-white | ✓ Committed |
| #11 | 4-step contrarian process (Understand/Search/Curate/Stay Involved) with dotted connector | ✓ Committed |
| #12 | Footer: tagline, Manchester location, company number, privacy/terms links | ✓ Committed |
| #14 | Copy: fabricated testimonial removed, approved phrases deployed, no "Ben Copsey" literally | ✓ Committed |
| — | Candidate/Client dual-column split on white (matches mockup) | ✓ Committed |
| — | Pill-shaped CTA buttons (rounded-full), mockup-aligned hero proportions | ✓ Committed |

## Brand assets (in repo `public/` and `~/Documents/whay1/bc-financial-brand/assets/`)

| File | Note |
|------|------|
| `bc-financial-logo-full.svg` | Professional vector — 10KB |
| `bc-financial-logo-transparent.png` | 7616×2052, for overlays |
| `bc-financial-logo-white.png` | 7616×2052, for light BGs |
| `placeholder-headshot-ben.png` | OpenAI-generated, 1024×1536 portrait — swap with real photography |
| `placeholder-manchester-cityscape.png` | OpenAI-generated, 1536×1024 — in brand assets folder only |

## Key decisions

- **Hero image = Ben's headshot** (not Manchester cityscape). Headshot stays; cityscape moves to About page secondary and footer.
- **Single point of contact messaging = remix from Ben's phrases**, not literal "Ben Copsey". Current: "No handoffs. No scripts." / "Specialist knowledge, applied personally."
- **No standalone "gold C mark"** as brand asset — just the full logo.
- **No 90-day timeline** in the strategy deck.
- **Buttons are `rounded-full` (pill-shaped)** — matching ChatGPT mockups.
- **Job board, CV submission, contact form flows** — NOT touched. Only marketing pages modified.

## Pending tickets (not started)

| # | Issue |
|---|-------|
| #13 | SEO metadata audit |
| #15 | Site visual redesign — About/Candidates/Clients/Contact pages to match mockups |
| #16 | Visual polish — exact spacing, typography scale, card styling, interactions |

## Files changed

```
Modified (12): tailwind.config.ts, globals.css, layout.tsx,
               page.tsx, about/page.tsx, services/page.tsx,
               candidates/page.tsx, clients/page.tsx, contact/page.tsx,
               header.tsx, footer.tsx, admin/layout.tsx
New (6):      bc-logo.tsx, bc-icon.tsx,
              public/bc-financial-logo-full.svg,
              public/bc-financial-logo-transparent.png,
              public/bc-financial-logo-white.png,
              public/placeholder-headshot-ben.png
```

## Running locally
```bash
cd /Users/warrenhayes/Documents/bc-recruitment
git checkout feat/brand-implementation
npm run dev
# → http://localhost:3000
```
