import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const coaches = await prisma.coach.count();
    const events = await prisma.event.count();
    const enquiries = await prisma.enquiry.count();
    return NextResponse.json({ ok: true, coaches, events, enquiries });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    );
  }
}
