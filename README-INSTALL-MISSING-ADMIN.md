# Missing Hope Rugby Admin pages

Copy these files into the existing Next.js project.

## 1. Install Blob package

```bash
pnpm add @vercel/blob
```

You already have `BLOB_READ_WRITE_TOKEN` from Vercel.

## 2. Copy files

Merge the folders in this package into the project root.

This adds:
- Coaches
- Age Groups / Players
- Events
- Gallery
- Sponsors
- News
- Funds
- FAQs
- Reusable CRUD editor
- Protected CRUD API
- Image upload to Vercel Blob

## 3. Make sure `lib/prisma.ts` exports `prisma`

The API expects:

```ts
import { prisma } from "@/lib/prisma";
```

## 4. Test

```bash
pnpm dev
```

Then visit:

- `/admin/coaches`
- `/admin/players`
- `/admin/events`
- `/admin/gallery`
- `/admin/sponsors`
- `/admin/news`
- `/admin/funds`
- `/admin/faqs`

Log in first at `/admin/login`.

## Important

The public site still needs the next step: changing `lib/content/index.ts` from seed/CMS loading to Prisma loading. These admin pages write to Postgres, but the public pages will not automatically show those records until that content-layer change is made.
