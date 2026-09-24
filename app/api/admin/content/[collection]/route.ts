import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";

const MAP:any = {
  coaches:"coach", players:"ageGroup", events:"event", gallery:"galleryItem",
  sponsors:"sponsor", news:"news", funds:"fund", faqs:"faq"
};
const model=(name:string)=>(prisma as any)[MAP[name]];

function clean(collection:string, body:any) {
  const b={...body};
  delete b.id; delete b.createdAt; delete b.updatedAt;
  if (b.order !== undefined) b.order=Number(b.order)||0;
  if (b.published !== undefined) b.published=Boolean(b.published);
  if (["contributed","goal","raised"].some(k=>k in b)) {
    for (const k of ["contributed","goal","raised"]) if (b[k] !== undefined && b[k] !== "") b[k]=Number(b[k]);
  }
  for (const k of ["start","end","date","startsAt","endsAt"]) if (b[k] !== undefined && b[k] !== null && b[k] !== "") b[k]=new Date(b[k]);
  return b;
}

export async function GET(_req:NextRequest,{params}:{params:Promise<{collection:string}>}) {
  try {
    await requireAdmin();
    const {collection}=await params;
    if(!model(collection)) return NextResponse.json({error:"Unknown collection"},{status:404});
    const items=await model(collection).findMany({orderBy:[{order:"asc"},{createdAt:"desc"}]});
    return NextResponse.json({items});
  } catch(e:any){console.error(e);return NextResponse.json({error:e.message||"Unauthorized"},{status:e.message==="Unauthorized"?401:500});}
}

export async function POST(req:NextRequest,{params}:{params:Promise<{collection:string}>}) {
  try {
    await requireAdmin();
    const {collection}=await params;
    const m=model(collection); if(!m) return NextResponse.json({error:"Unknown collection"},{status:404});
    const body=clean(collection,await req.json());
    const item=await m.create({data:body});
    return NextResponse.json({item},{status:201});
  } catch(e:any){console.error(e);return NextResponse.json({error:e.message||"Create failed"},{status:400});}
}
