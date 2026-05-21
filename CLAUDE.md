# Son CRE — Compliance Website for Son Hai Vo

## What This Is
Son Hai Vo's commercial real estate compliance website. Built for A2P SMS registration and general web presence.
Live at: https://son-cre.vercel.app
GitHub: WJSchratt/son-cre
Vercel project under: walter-schratts-projects

## Son's Info
- **Name:** Son Hai Vo
- **License:** SL3372693 (Florida real estate)
- **Focus:** Commercial real estate — St. Petersburg / Pinellas County, FL
- **Asset classes:** Retail, office, industrial, multifamily, restaurant

## Pages
- `/` — Home (hero, services, about)
- `/about` — About Son
- `/contact` — Contact form with SMS opt-in checkbox
- `/privacy-policy` — Full privacy policy with SMS section
- `/terms-of-service` — ToS with SMS program terms
- `/sms-terms` — Standalone SMS terms (STOP/HELP, carrier disclaimer, no third-party sharing)

## Stack
Next.js 14, Tailwind v3, shadcn/ui, deployed on Vercel

## Known Gotchas
- Encoding artifacts have been a problem — use HTML entities (&mdash; &middot; &ldquo; etc.), never copy-paste curly quotes or em-dashes directly
- Florida RE license must appear on all pages (in footer)

## Relationship to Other Projects
- This site is Son's public-facing compliance page
- Walt's A2P SMS is registered under schratt-automation (separate repo) — Walt is the service provider
- Holly CRM (separate repo) is Son's private lead management tool
- Keep all Son work completely separate from Profit Hexagon / PH infra
