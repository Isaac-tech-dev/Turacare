# TuraCare website

Next.js (App Router) + TypeScript + Tailwind.

## Run
    npm install
    cp .env.example .env.local
    npm run dev

## How it evolves
- `src/config/site.ts`: set `phase` to `building`, `testing` or `launch`. Hero, header button and journey update.
- `src/content/content.ts`: all copy. Replace with Sanity/Contentful fetchers when ready.
- `src/lib/waitlist.ts`: `console` for dev, `mailchimp` built in. Add Supabase/MailerLite as a new branch.
- Deploy to Vercel and set the env vars from `.env.example`.

## Still to add
Logo and brand colours/fonts (current palette is a proposal), privacy policy and terms pages, analytics, favicon and OG image, real waitlist count.
