# Hope Rugby — Enquiries + Neon content layer + seed

This package is intended to be merged into the existing project that already has:
- Next.js 16.3.6
- Prisma 7 + Neon
- `lib/prisma.ts`
- working admin authentication
- the admin CRUD pages from the previous package
- `lib/content/seed.ts` and `lib/content/types.ts`

## 1. Merge these files

Merge this package into the project root.

It adds:
- `/admin/enquiries`
- `/api/admin/enquiries`
- enquiry persistence to the `Enquiry` Prisma model
- Prisma-backed public content getters
- database seed script

Do NOT replace your existing `lib/admin/auth.ts` or `lib/prisma.ts`.

## 2. Install tsx

From the project root:

```bash
pnpm add -D tsx
```

You do not need to add another Prisma package if Prisma is already working.

## 3. Make sure the Prisma schema is already synced

You already reported that `prisma db push` succeeded. Do not run it again unless the schema has changed.

## 4. Generate Prisma client if needed

```bash
pnpm exec prisma generate
```

## 5. Seed the existing site content

Run:

```bash
pnpm exec tsx scripts/seed-content.ts
```

The script uses `upsert`, so running it again does not create duplicate rows for the seed IDs.

## 6. Start the site

```bash
pnpm dev
```

Check:

- `/admin/enquiries`
- `/admin/coaches`
- `/coaches`
- `/players`
- `/sponsors`
- `/events`
- `/gallery`
- `/faq`

## Important behaviour

The public content layer now reads from Neon first.

If a database read fails, it falls back to `lib/content/seed.ts` so the public site does not go blank.

Photo consent is enforced server-side for age groups, awards, session steps, events, gallery and news where applicable.

New website enquiries are saved to Neon first. Email is optional; if Resend is not configured, the enquiry is still available in `/admin/enquiries`.

## Existing seed limitations

The supplied seed currently has no real events or gallery photos, so those tables will remain empty until you add them through the admin tools.

The schema contains additional collections (awards, session steps, alerts, bring-list and headings). This package seeds them, but the previous CRUD UI package does not yet have admin pages for all of those collections.
