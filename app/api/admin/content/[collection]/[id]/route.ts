import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/admin/auth";
import { prisma } from "@/lib/prisma";

const MAP:any={coaches:"coach",players:"ageGroup",events:"event",gallery:"galleryItem",sponsors:"sponsor",news:"news",funds:"fund",faqs:"faq"};
const model=(name:string)=>(prisma as any)[MAP[name]];

function clean(body:any){
 const b={...body}; delete b.id; delete b.createdAt; delete b.updatedAt;
 if(b.order!==undefined)b.order=Number(b.order)||0;
 if(b.published!==undefined)b.published=Boolean(b.published);
 for(const k of ["contributed","goal","raised"]) if(k in b && b[k]!=="" && b[k]!=null)b[k]=Number(b[k]);
 for(const k of ["start","end","date","startsAt","endsAt"]) if(k in b && b[k]) b[k]=new Date(b[k]);
 return b;
}
export async function PUT(req:NextRequest,{params}:{params:Promise<{collection:string;id:string}>}){
 try{await requireAdmin();const {collection,id}=await params;const m=model(collection);if(!m)return NextResponse.json({error:"Unknown collection"},{status:404});
 const item=await m.update({where:{id},data:clean(await req.json())});return NextResponse.json({item});
 }catch(e:any){console.error(e);return NextResponse.json({error:e.message||"Update failed"},{status:400});}
}
export async function DELETE(_req:NextRequest,{params}:{params:Promise<{collection:string;id:string}>}){
 try{await requireAdmin();const {collection,id}=await params;const m=model(collection);if(!m)return NextResponse.json({error:"Unknown collection"},{status:404});
 await m.delete({where:{id}});return NextResponse.json({ok:true});
 }catch(e:any){console.error(e);return NextResponse.json({error:e.message||"Delete failed"},{status:400});}
}
