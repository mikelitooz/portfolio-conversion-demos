# Apex Plumbing London Prototype

Conversion-focused, SEO-ready Next.js prototype for a UK local service business demo.

## Stack

- Next.js (App Router)
- React
- Tailwind CSS
- TypeScript

## Included Routes

- `/`
- `/about`
- `/services`
- `/services/[slug]`
- `/areas`
- `/areas/[area]/[service]`
- `/contact`
- `/faq`
- `/blog`
- `/blog/[slug]`
- `/thank-you`
- `/reviews`
- `/pricing`
- `/privacy-policy`
- `/terms`
- `/cookie-policy`
- `sitemap.xml`
- `robots.txt`

## Core Reusable Components

- `src/components/ServicePageTemplate.tsx`
- `src/components/AreaPageTemplate.tsx`
- `src/components/MiniLeadForm.tsx`
- `src/components/TrustBadgeRow.tsx`
- `src/components/CallToActionPanel.tsx`

## Commands

If your Windows path includes `&`, `npm run ...` may fail. Use direct Next binary commands:

```bash
npm.cmd install --ignore-scripts
node .\node_modules\next\dist\bin\next dev
node .\node_modules\next\dist\bin\next lint
node .\node_modules\next\dist\bin\next build
```

## Notes

- Copy is realistic placeholder copy designed for SEO and lead conversion.
- Structured data hooks are included via `SchemaScript`.
- Layout is modular and intended for easy visual redesign in Google Stitch.

## Analytics Story

This prototype is structured to support:

- SEO traffic growth through service pages + area pages + internal linking.
- Conversion tracking for phone calls, quote form submissions, and CTA click paths.
- Lead qualification using captured form fields (`postcode`, `problemType`, `urgency`).

Suggested event map for production:

- `hero_call_click`
- `hero_quote_click`
- `form_submit_quote`
- `sticky_call_click`
- `sticky_quote_click`
- `exit_intent_offer_submit`

## Presentation Message Template

Hi, I took your feedback seriously and built a demo based on the kind of clients you likely work with.

This is a WordPress-style local SEO lead generation site for a London plumbing business.

I focused on:

- SEO page structure (services + area pages)
- conversion optimization (calls, forms, urgency)
- realistic content and trust elements

Would appreciate your feedback on whether this aligns with what you deliver for clients.
