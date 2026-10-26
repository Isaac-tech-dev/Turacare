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

## Images
- `src/content/images.ts`: every image on the site. Brand mockups (from the brand guidelines, slides 34 to 37) live in `public/images/mockups`; stock photos (Unsplash, Pexels, free for commercial use) load from their CDNs through `next/image`.
- The EarthPant packaging mockups show claims that are still being confirmed and a retail shelf, so they are flagged `concept: true` and always carry a "Packaging concept · Not yet in stores" badge. Remove the flag only once the claims on the box are substantiated and the product is on sale.

## Still to add
Logo and brand colours/fonts (current palette is a proposal), privacy policy and terms pages, analytics, favicon and OG image, real waitlist count.
