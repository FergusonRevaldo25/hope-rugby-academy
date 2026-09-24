# Hope Rugby Academy — Multi-Page + Polish Update

This zip contains only the files that are new or changed — copy them into
your existing project at `C:\Users\admin\Desktop\hope-rugby-academy`,
overwriting where paths match. This version includes both the multi-page
rebuild AND a round of animation/design polish (see bottom of this file).

## Latest round — logo, nav icons, hover colors

- Logo is now wrapped in a clean circular badge everywhere it appears
  (Navbar, Footer, Hero) — white circle behind it so nothing gets cropped,
  with a subtle ring; the Hero version gets a crimson-to-blue gradient ring
  for extra presence.
- Navbar's **Contact** and **Donate** are now icon buttons (phone icon /
  hand-coins icon) instead of text — hover over either to see a small
  tooltip label pop up. Donate stays the solid crimson pill so it's still
  the obvious primary action; Contact is a ghost icon that lights up blue
  on hover.
- Nav tabs (About / Coaches / Players / Training / Sponsors) now hover with
  a soft crimson-to-blue gradient tint instead of plain white — matches the
  active-tab pill styling so hover and active states feel like the same
  system.
- Footer links now hover into academy blue (or crimson for Donate)
  instead of plain white.

## What's new in this round (polish pass)

- `app/template.tsx` — smooth fade/slide transition between page navigations
- `app/components/Shared/ScrollProgress.tsx` — thin gradient bar at the top
  of the viewport that fills as you scroll
- `app/components/Shared/AnnouncementBar.tsx` — dismissible banner above the
  navbar ("Free & open... Training every Friday"), remembers dismissal via
  localStorage
- `app/components/Shared/CTABanner.tsx` — reusable gradient CTA section,
  now used at the bottom of Home, Players, and Training
- `app/components/Home/StatsStrip.tsx` — replaces the old fictional Stats;
  numbers are all real/derived (age group count, coach count, sessions/week,
  "Free"), with a count-up animation
- `app/components/Home/Gallery.tsx` — redesigned bento-grid hover gallery.
  Still placeholder tiles (no real photos yet) — each tile has a comment
  showing exactly how to swap in a real `<Image>` once you have photos
- `app/components/Home/SponsorsMarquee.tsx` — auto-scrolling sponsor strip
  with seamless loop, pauses on hover
- `app/components/Layout/Navbar.tsx` — active link now has a smooth sliding
  pill highlight (framer-motion `layoutId`) instead of an instant color swap
- Coach cards, age-group cards, and sponsor cards now lift with a soft blue
  glow on hover instead of a flat background swap
- `app/globals.css` — added the marquee keyframes (respects
  `prefers-reduced-motion`)

## 1. Copy files in

Unzip this into your project root and let it overwrite. It adds:

- `app/about/`, `app/coaches/`, `app/players/`, `app/training/`,
  `app/sponsors/`, `app/donate/`, `app/contact/` — one route each
- `app/components/About/Story.tsx`
- `app/components/Home/QuickLinks.tsx`, `WhyHope.tsx` (new) — `Hero.tsx` (replaced)
- `app/components/Players/` (new — replaces the old `Teams/` usage on the homepage)
- `app/components/Training/Schedule.tsx` (new)
- `app/components/Donate/Donate.tsx` (new — replaces `Membership/`)
- `app/components/Coaches/CoachCard.tsx`, `Coaches.tsx` (fixed — matches the
  real `Coach` type, no more crash on `coach.credentials`)
- `app/components/Contact/Contact.tsx` (real phone/WhatsApp/email)
- `app/components/Sponsors/Sponsors.tsx` (real sponsors with tiers)
- `app/components/Layout/Navbar.tsx`, `Footer.tsx` (now link to real routes)
- `app/layout.tsx` (Navbar/Footer now render globally, once, in the root
  layout — no longer imported per-page)
- `app/page.tsx` (homepage trimmed to Hero + Why Hope + quick links)
- `lib/data.ts` (real content: Coach Belven Hope, U8–U14, Friday sessions,
  real sponsors, awards, donation funds, banking details)
- `package.json` (fixed the `lucide-react` version — it was pinned to a
  version that doesn't exist, `^1.47.0`; now `^0.541.0`, a real published
  version)

## 2. Files you can now delete (no longer used)

- `app/components/Home/Stats.tsx` (folded into `WhyHope` — stats weren't
  real numbers, so removed rather than left fictional)
- `app/components/Home/Gallery.tsx` (placeholder icon tiles, no real photos
  yet — add back once you have real academy photos)
- `app/components/Home/Header.tsx` (was empty, dead file)
- `app/components/Teams/` (replaced by `app/components/Players/`)
- `app/components/News/` (was fictional testimonials — remove until you
  have real quotes from parents/players)
- `app/components/Membership/` (replaced by `app/components/Donate/`)

## 3. Reinstall and run

```powershell
Remove-Item -Recurse -Force node_modules, .next -ErrorAction SilentlyContinue
npm install
npm run dev
```

## 4. Still needed from you

- Real photos for a future Gallery section
- Any real parent/player quotes if you want a testimonials section back
- Confirm the WhatsApp/Instagram/Facebook links in `Footer.tsx` (Instagram
  and Facebook are still `href="#"` placeholders)

## Latest round — red/white theme + animated background

- New `app/components/Shared/BackgroundFX.tsx`: fixed site-wide animated
  background (drifting red glow orbs, moving speed streaks, halftone dots,
  floating neon shapes). Pure CSS, disabled for prefers-reduced-motion.
- `app/layout.tsx` renders it once so every page gets it.
- Section backgrounds made translucent so the motion shows through.
- Blue text/hover/glow accents -> red (`text-red-soft`, red glows); key words
  in each page heading are now red with a soft glow; body copy is whiter.
- `app/globals.css`: added `@theme` colour tokens + background keyframes.
  If your project already defines these tokens elsewhere, delete the
  duplicate block and keep the `.fx-*` styles.

## Performance pass
- Background: removed blur filters, animated box-shadow and animated
  background-position; only transform/opacity animate now. Lighter on phones.
- Removed opacity:0 starts on page template + hero (they delayed LCP).
- Test with `npm run build && npm start` in incognito, not `npm run dev`.

## Features round
New pages: /join, /events, /faq, /gallery, /privacy. Editable alert bar,
map on Training, SEO (Open Graph image from your banner, sitemap, robots,
SportsOrganization + FAQ structured data), photo-consent gate.
See README-CMS.md and .env.example.
