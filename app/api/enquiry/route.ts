import { validateEnquiry, deliverEnquiry, rateLimited } from "@/lib/enquiry";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return Response.json({ ok: false, errors: { form: "Too many attempts. Please try again later." } }, { status: 429 });
  }

  const text = await req.text();
  if (text.length > 10_000) return Response.json({ ok: false, errors: { form: "Request too large." } }, { status: 413 });

  let body: unknown;
  try {
    body = JSON.parse(text);
  } catch {
    return Response.json({ ok: false, errors: { form: "Invalid request." } }, { status: 400 });
  }

  // Bot traps: a hidden "website" field humans never fill, and a form that
  // was "submitted" faster than a person could type. Pretend success.
  const b = body as Record<string, unknown>;
  const tooFast = typeof b.startedAt === "number" && Date.now() - b.startedAt < 2500;
  if ((typeof b.website === "string" && b.website.length > 0) || tooFast) {
    return Response.json({ ok: true });
  }

  const result = validateEnquiry(body);
  if (!result.ok) return Response.json({ ok: false, errors: result.errors }, { status: 400 });

  try {
    await deliverEnquiry(result.data);
    return Response.json({ ok: true });
  } catch (err) {
    console.error("[enquiry] failed", err);
    return Response.json(
      { ok: false, errors: { form: "We couldn't send your enquiry just now." } },
      { status: 500 },
    );
  }
}
