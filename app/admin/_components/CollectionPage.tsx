"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Trash2, Upload, Loader2, ArrowLeft } from "lucide-react";
import { getCollection, type Field } from "@/lib/admin/collection-config";

type Item = Record<string, any> & { id:string; order:number; published:boolean };

function inputValue(field:Field, value:any) {
  if (value == null) return "";
  if (field.type === "datetime-local") {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "";
    const pad=(n:number)=>String(n).padStart(2,"0");
    return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  }
  if (field.type === "date") return String(value).slice(0,10);
  return value;
}

export default function CollectionPage({ collection }:{collection:string}) {
  const config = getCollection(collection);
  const [items,setItems]=useState<Item[]>([]);
  const [editing,setEditing]=useState<Item|null>(null);
  const [loading,setLoading]=useState(true);
  const [saving,setSaving]=useState(false);
  const [error,setError]=useState("");

  async function load(){
    setLoading(true); setError("");
    try {
      const r=await fetch(`/api/admin/content/${collection}`,{cache:"no-store"});
      const j=await r.json();
      if(!r.ok) throw new Error(j.error||"Failed to load");
      setItems(j.items||[]);
    } catch(e:any){setError(e.message||"Failed to load");}
    finally{setLoading(false);}
  }
  useEffect(()=>{load()},[collection]);

  if(!config) return <div className="p-8 text-red-400">Unknown collection.</div>;

  async function remove(id:string){
    if(!confirm("Delete this item? This cannot be undone.")) return;
    const r=await fetch(`/api/admin/content/${collection}/${id}`,{method:"DELETE"});
    if(!r.ok){const j=await r.json().catch(()=>({})); alert(j.error||"Delete failed"); return;}
    load();
  }

  return (
    <div className="max-w-7xl">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">{config.title}</h1>
          <p className="text-white/45 text-sm mt-1">Create, edit, publish and reorder {config.title.toLowerCase()}.</p>
        </div>
        <button onClick={()=>setEditing({id:"",order:items.length,published:true})}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 font-semibold text-sm">
          <Plus className="w-4 h-4"/> Add {config.singular}
        </button>
      </div>

      {error && <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">{error}</div>}

      {loading ? <div className="text-white/40 flex items-center gap-2"><Loader2 className="animate-spin w-4 h-4"/> Loading…</div> :
      <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#12121a]">
        <table className="w-full text-sm">
          <thead className="text-white/40 border-b border-white/10">
            <tr><th className="text-left p-4">Order</th><th className="text-left p-4">Item</th><th className="text-left p-4">Status</th><th className="p-4 text-right">Actions</th></tr>
          </thead>
          <tbody>
            {items.map((item,i)=>(
              <tr key={item.id} className="border-b border-white/5 last:border-0">
                <td className="p-4 text-white/40">{item.order ?? i}</td>
                <td className="p-4 font-medium">{item.name||item.title||item.question||item.childName||item.caption||"Untitled"}</td>
                <td className="p-4"><span className={item.published===false?"text-amber-400":"text-emerald-400"}>{item.published===false?"Draft":"Published"}</span></td>
                <td className="p-4 text-right">
                  <button onClick={()=>setEditing(item)} className="p-2 rounded-lg hover:bg-white/10 mr-1"><Pencil className="w-4 h-4"/></button>
                  <button onClick={()=>remove(item.id)} className="p-2 rounded-lg hover:bg-red-500/10 text-red-400"><Trash2 className="w-4 h-4"/></button>
                </td>
              </tr>
            ))}
            {!items.length && <tr><td colSpan={4} className="p-10 text-center text-white/35">No items yet.</td></tr>}
          </tbody>
        </table>
      </div>}

      {editing && <Editor config={config} collection={collection} item={editing} onClose={()=>setEditing(null)} onSaved={()=>{setEditing(null);load()}} />}
    </div>
  );
}

function Editor({config,collection,item,onClose,onSaved}:{config:any;collection:string;item:Item;onClose:()=>void;onSaved:()=>void}) {
  const [form,setForm]=useState<Record<string,any>>({...item});
  const [saving,setSaving]=useState(false);
  const [uploading,setUploading]=useState(false);
  const set=(k:string,v:any)=>setForm(x=>({...x,[k]:v}));

  async function upload(file:File, field:string){
    setUploading(true);
    try{
      const fd=new FormData(); fd.append("file",file);
      const r=await fetch("/api/admin/upload",{method:"POST",body:fd});
      const j=await r.json(); if(!r.ok) throw new Error(j.error||"Upload failed");
      set(field,j.url);
    }catch(e:any){alert(e.message||"Upload failed")}
    finally{setUploading(false)}
  }

  async function save(e:React.FormEvent){
    e.preventDefault(); setSaving(true);
    try{
      const id=form.id;
      const method=id?"PUT":"POST";
      const url=id?`/api/admin/content/${collection}/${id}`:`/api/admin/content/${collection}`;
      const payload={...form};
      delete payload.id; delete payload.createdAt; delete payload.updatedAt;
      const r=await fetch(url,{method,headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)});
      const j=await r.json(); if(!r.ok) throw new Error(j.error||"Save failed");
      onSaved();
    }catch(e:any){alert(e.message||"Save failed")}
    finally{setSaving(false)}
  }

  return <div className="fixed inset-0 z-50 bg-black/70 p-4 overflow-y-auto">
    <div className="max-w-2xl mx-auto my-8 rounded-2xl border border-white/10 bg-[#111118] shadow-2xl">
      <form onSubmit={save} className="p-6 space-y-5">
        <div className="flex items-center justify-between"><h2 className="text-xl font-bold">{form.id?"Edit":"Add"} {config.singular}</h2><button type="button" onClick={onClose} className="text-white/50 hover:text-white">✕</button></div>
        <div className="grid gap-4">
          {config.fields.map((f:Field)=>{
            if(f.type==="checkbox") return <label key={f.key} className="flex items-center gap-3 p-3 rounded-xl bg-white/5"><input type="checkbox" checked={!!form[f.key]} onChange={e=>set(f.key,e.target.checked)} className="w-4 h-4"/><span className="text-sm">{f.label}</span></label>;
            if(f.type==="image") return <div key={f.key}><label className="block text-sm text-white/60 mb-2">{f.label}</label>
              <div className="flex gap-3 items-center"><input className="flex-1 input" value={form[f.key]||""} onChange={e=>set(f.key,e.target.value)} placeholder="Image URL"/>
              <label className="shrink-0 inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/15 cursor-pointer text-sm"><Upload className="w-4 h-4"/>{uploading?"Uploading…":"Upload"}<input type="file" accept="image/*" className="hidden" disabled={uploading} onChange={e=>{const f=e.target.files?.[0];if(f)upload(f,f.key)}}/></label></div>
              {form[f.key] && <img src={form[f.key]} alt="" className="mt-3 w-28 h-20 object-cover rounded-lg border border-white/10"/>}</div>;
            const common={value:inputValue(f,form[f.key]),required:f.required,onChange:(e:any)=>set(f.key,e.target.value),className:"input"};
            return <label key={f.key} className="block"><span className="block text-sm text-white/60 mb-2">{f.label}</span>
              {f.type==="textarea"?<textarea {...common} rows={5}/>:f.type==="select"?<select {...common}>{f.options?.map((o:any)=><option key={o.value} value={o.value}>{o.label}</option>)}</select>:<input {...common} type={f.type||"text"}/>}</label>
          })}
          <div className="grid grid-cols-2 gap-4">
            <label><span className="block text-sm text-white/60 mb-2">Order</span><input className="input" type="number" value={form.order??0} onChange={e=>set("order",Number(e.target.value))}/></label>
            <label className="flex items-center gap-3 mt-7"><input type="checkbox" checked={form.published!==false} onChange={e=>set("published",e.target.checked)}/><span className="text-sm">Published</span></label>
          </div>
        </div>
        <div className="flex justify-end gap-3 pt-2"><button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-white/5">Cancel</button><button disabled={saving} className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-500 font-semibold">{saving?"Saving…":"Save"}</button></div>
      </form>
    </div>
    <style jsx>{`.input{width:100%;padding:.7rem .85rem;border-radius:.7rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);color:white;outline:none}.input:focus{border-color:rgba(239,68,68,.6);box-shadow:0 0 0 2px rgba(239,68,68,.15)}select.input option{background:#111118;color:white}`}</style>
  </div>;
}
