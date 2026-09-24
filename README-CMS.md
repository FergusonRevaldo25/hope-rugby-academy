# Content & CMS guide

All page content now flows through **one file: `lib/content/index.ts`**.
Pages never import data directly, so a CMS can be plugged in without
touching any component.

## What an admin can control (per item)
Every list item has `id`, `order` (sort), `published` (hide/show) plus:

| Collection      | Fields |
|-----------------|--------|
| `coaches`       | name, role, bio, focus, photo |
| `age-groups`    | ageRange, name, focus, photo |
| `awards`        | icon, title, description, recipient, season, photo |
| `sponsors`      | name, tier, description, logo, website, contributed (ZAR) |
| `funds`         | name, icon, goal, raised, description  → drives the progress bars |
| `news`          | title, excerpt, date, category (general/training/players/coaches/sponsors), photo, href |
| `session-steps` | time, title, description, photo |
| `alerts`        | message, severity (info/urgent), linkLabel, linkHref, startsAt, endsAt |
| `events`        | title, type, start, end, venue, address, description, photo, photoConsent, result |
| `faqs`          | question, answer |
| `bring-list`    | icon, title, description |
| `gallery`       | photo, caption, photoConsent (**required**) |
| `enquiries`     | (written BY the site) childName, ageGroup, parentName, phone, email, message |
| `headings/<key>`| eyebrow, titleBefore, highlight (red), titleAfter, intro |

Heading keys: `coaches, players, training, sponsors, players.awards,
training.session, sponsors.partners, news, events, faq, faq.bring, gallery, join`.

News shows automatically on the page matching its category (and on every page
if category is `general`). A section with no news hides itself.

## Right now (no CMS)
Edit `lib/data.ts` (text, funds `raised`) or `lib/content/seed.ts`
(photos, news, headings). Drop images in `public/images/...` and set
`photo: { src: "/images/coaches/belven.jpg", alt: "Coach Belven Hope" }`.

## Connecting a CMS
1. Create `.env.local`:
   ```
   CMS_URL=https://your-cms.example.com/api
   CMS_TOKEN=optional-bearer-token
   ```
2. Each collection is fetched from `${CMS_URL}/<collection>` and must return
   JSON matching `lib/content/types.ts`. If your CMS shapes data differently
   (Sanity, Strapi, Contentful…), map it inside `loadList()` in
   `lib/content/index.ts` — that is the only place to change.
3. Content refreshes every 60 s (`REVALIDATE_SECONDS`). If the CMS is down the
   site falls back to the seed data.
4. Remote photos need their host allowed in `next.config.ts`:
   ```ts
   images: { remotePatterns: [{ protocol: "https", hostname: "your-cms-or-cdn.com" }] }
   ```

## Delete these now-unused files
`app/components/Coaches/Coaches.tsx`, `Coaches/CoachCard.tsx`,
`Players/AgeGroups.tsx`, `Players/AgeGroupCard.tsx`, `Players/Awards.tsx`,
`Training/Schedule.tsx`, `Sponsors/Sponsors.tsx`.

## Still on `lib/data.ts` (not CMS-driven yet)
Home page sponsor marquee, Donate page funds/banking, Contact details, founder quote.

## Child-safety rule for photos
Collections that can show children (`age-groups, awards, news, session-steps,
events, gallery`) only show a photo when the item has `photoConsent: true`.
This is enforced on the server in `lib/content/index.ts`; a photo without
consent is stripped before it reaches the browser (a warning is logged).

## Enquiry form (`/join`)
`POST /api/enquiry` validates, rate-limits, blocks bots (honeypot + timing) and
then delivers to every configured channel: the CMS (`POST ${CMS_URL}/enquiries`)
and/or email via Resend. Copy `.env.example` to `.env.local` and fill it in.
In production the form reports an error if no channel is configured.

## Alerts
The bar above the navbar shows the live `alerts` item (urgent beats info,
respecting startsAt/endsAt). Urgent alerts can't be dismissed. Content
refreshes every 60 s; instant updates need an on-demand revalidate webhook
(part of the CMS wiring step).

## Events
`start`/`end` are ISO with offset (e.g. `2026-10-10T09:00:00+02:00`). Upcoming
and past are computed automatically. Each upcoming event has Google Calendar
and .ics buttons.
