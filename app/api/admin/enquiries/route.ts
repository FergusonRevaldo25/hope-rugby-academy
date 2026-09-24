import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    await requireAdmin();
    const items = await prisma.enquiry.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json({ items });
  } catch (e: any) {
    console.error("[admin/enquiries]", e);
    return NextResponse.json({ error: e.message || "Unauthorized" }, { status: e.message === "Unauthorized" ? 401 : 500 });
  }
}
