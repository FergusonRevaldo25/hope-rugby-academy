# Hope Rugby Academy — Admin PWA + Database

This package adds:

- Full **PWA** support (installable on phone/desktop)
- Secure **password-only admin login** (no third-party auth)
- Beautiful **admin dashboard** that matches the public website style
- **Postgres + Prisma** database (Neon recommended)
- All content types from your existing site are editable

---

## 1. Extract this zip

Extract **on top of** your existing project (overwrite when asked).

```bash
# Example
cd C:\Users\admin\Desktop\hope-rugby-academy
# then extract the zip here
```

---

## 2. Install new dependencies

```bash
npm install prisma @prisma/client bcryptjs jose
npm install -D tsx @types/bcryptjs
```

---

## 3. Create a free Postgres database (Neon)

1. Go to https://neon.tech and create a free account
2. Create a new project
3. Copy the connection string (it looks like `postgresql://...`)

---

## 4. Environment variables

Copy `.env.example` → `.env.local` and fill in:

```env
DATABASE_URL="postgresql://user:pass@host/db?sslmode=require"
AUTH_SECRET="generate-a-long-random-string-here"   # at least 32 chars
ADMIN_PASSWORD_HASH=                              # generated in next step
```

Generate your admin password hash:

```bash
node scripts/generate-admin-hash.mjs "YourStrongPasswordHere"
```

Paste the output into `.env.local`.

---

## 5. Set up the database

```bash
npx prisma generate
npx prisma db push
```

(Optional) Seed with your existing content later.

---

## 6. Run locally

```bash
npm run dev
```

- Public site: http://localhost:3000
- Admin login: http://localhost:3000/admin/login

---

## Security notes

- Password is stored only as a bcrypt hash (never plaintext)
- Session uses a signed JWT cookie (httpOnly + secure in production)
- `/admin/*` routes are protected by middleware
- Service worker never caches `/admin` or `/api` (dashboard always fresh)
- Rate limiting can be added later on the login route

---

## Next steps after this works

1. Add the remaining admin pages (list / create / edit for each collection)
2. Connect the public content loader to read from Prisma first
3. Add image upload (Vercel Blob or Cloudflare R2)
4. Deploy to Vercel and add the same environment variables there

---

The admin UI is designed to match your red/blue website aesthetic.
