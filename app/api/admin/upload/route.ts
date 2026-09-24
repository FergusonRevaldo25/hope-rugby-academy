import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";
import { requireAdmin } from "@/lib/admin/auth";

export const runtime="nodejs";

export async function POST(req:NextRequest){
  try{
    await requireAdmin();
    const form=await req.formData();
    const file=form.get("file");
    if(!(file instanceof File)) return NextResponse.json({error:"No file supplied"},{status:400});
    if(!file.type.startsWith("image/")) return NextResponse.json({error:"Only image files are allowed"},{status:400});
    if(file.size>8*1024*1024) return NextResponse.json({error:"Maximum image size is 8MB"},{status:400});
    const safe=file.name.replace(/[^a-zA-Z0-9._-]/g,"-");
    const blob=await put(`hope-rugby/${Date.now()}-${safe}`,file,{access:"public"});
    return NextResponse.json({url:blob.url});
  }catch(e:any){console.error("[admin/upload]",e);return NextResponse.json({error:e.message||"Upload failed"},{status:500});}
}
