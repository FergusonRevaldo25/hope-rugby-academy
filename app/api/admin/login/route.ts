import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createSession } from "@/lib/admin/auth";

// Simple in-memory rate limit (resets on cold start – good enough for small academy)
const attempts = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = attempts.get(ip);

  if (!entry || now > entry.resetAt) {
    attempts.set(ip, { count: 1, resetAt: now + 15 * 60 * 1000 }); // 15 min window
    return false;
  }

  entry.count += 1;
  return entry.count > 8; // max 8 attempts per 15 minutes
}

export async function POST(req: NextRequest) {
  try {
    console.log("[login] env check:", {
      b64: process.env.ADMIN_PASSWORD_HASH_B64?.slice(0, 10) ?? "MISSING",
      b64Len: process.env.ADMIN_PASSWORD_HASH_B64?.length ?? 0,
      secret: process.env.AUTH_SECRET ? "present" : "MISSING",
    });
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const password = typeof body.password === "string" ? body.password : "";

    if (!password) {
      return NextResponse.json(
        { error: "Password is required" },
        { status: 400 },
      );
    }

    const valid = await verifyPassword(password);

    if (!valid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    await createSession();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[admin/login]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
