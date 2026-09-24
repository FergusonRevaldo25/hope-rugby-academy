import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";

const VALID = new Set(["new", "contacted", "closed"]);

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin();
    const { id } = await params;
    const body = await req.json();
    const status = String(body.status || "");
    if (!VALID.has(status)) return NextResponse.json({ error: "Invalid status" }, { status: 400 });
    const item = await prisma.enquiry.update({ where: { id }, data: { status } });
    return NextResponse.json({ item });
  } catch (e: any) {
    console.error("[admin/enquiries/:id]", e);
    return NextResponse.json({ error: e.message || "Update failed" }, { status: 400 });
  }
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    await requireAdmin();
    const { id } = await params;
    await prisma.enquiry.delete({ where: { id } });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error("[admin/enquiries/:id]", e);
    return NextResponse.json({ error: e.message || "Delete failed" }, { status: 400 });
  }
}
