"use client";

import { useEffect, useState } from "react";
import { Loader2, Trash2, Check, RefreshCw } from "lucide-react";
import AdminShell from "@/lib/admin/AdminShell";

type Enquiry = {
  id: string;
  childName: string;
  ageGroup: string | null;
  parentName: string;
  phone: string | null;
  email: string | null;
  message: string | null;
  status: "new" | "contacted" | "closed" | string;
  createdAt: string;
};

const statusOptions = ["new", "contacted", "closed"];

export default function EnquiriesPage() {
  const [items, setItems] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function load() {
    setLoading(true);
    setError("");
    try {
      const r = await fetch("/api/admin/enquiries", { cache: "no-store" });
      const j = await r.json();
      if (!r.ok) throw new Error(j.error || "Failed to load enquiries");
      setItems(j.items || []);
    } catch (e: any) {
      setError(e.message || "Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => { load(); }, []);

  async function setStatus(id: string, status: string) {
    const r = await fetch(`/api/admin/enquiries/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      alert(j.error || "Could not update status");
      return;
    }
    setItems(prev => prev.map(x => x.id === id ? { ...x, status } : x));
  }

  async function remove(id: string) {
    if (!confirm("Delete this enquiry permanently?")) return;
    const r = await fetch(`/api/admin/enquiries/${id}`, { method: "DELETE" });
    if (!r.ok) {
      const j = await r.json().catch(() => ({}));
      alert(j.error || "Could not delete enquiry");
      return;
    }
    setItems(prev => prev.filter(x => x.id !== id));
  }

  return (
    <AdminShell>
      <div className="max-w-6xl">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold">Enquiries</h1>
            <p className="text-white/45 text-sm mt-1">Parent and guardian enquiries submitted through the website.</p>
          </div>
          <button onClick={load} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm">
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} /> Refresh
          </button>
        </div>

        {error && <div className="mb-5 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-sm">{error}</div>}

        {loading ? (
          <div className="text-white/40 flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Loading…</div>
        ) : !items.length ? (
          <div className="rounded-2xl border border-white/10 bg-[#12121a] p-10 text-center text-white/35">No enquiries yet.</div>
        ) : (
          <div className="space-y-4">
            {items.map(item => (
              <article key={item.id} className="rounded-2xl border border-white/10 bg-[#12121a] p-5">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="font-semibold text-lg">{item.childName}</h2>
                      <span className="px-2 py-1 rounded-full bg-white/5 text-xs text-white/55">{item.ageGroup || "Age group not supplied"}</span>
                      <span className={`px-2 py-1 rounded-full text-xs ${item.status === "new" ? "bg-red-500/10 text-red-300" : item.status === "contacted" ? "bg-amber-500/10 text-amber-300" : "bg-emerald-500/10 text-emerald-300"}`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-white/65 mt-2">{item.parentName}</p>
                    <div className="flex flex-wrap gap-x-5 gap-y-1 mt-2 text-sm text-white/45">
                      {item.phone && <a className="hover:text-white" href={`tel:${item.phone}`}>{item.phone}</a>}
                      {item.email && <a className="hover:text-white" href={`mailto:${item.email}`}>{item.email}</a>}
                    </div>
                    {item.message && <p className="mt-4 whitespace-pre-wrap text-white/70 text-sm leading-6">{item.message}</p>}
                    <p className="mt-4 text-xs text-white/30">{new Date(item.createdAt).toLocaleString()}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 shrink-0">
                    {statusOptions.map(status => (
                      <button key={status} onClick={() => setStatus(item.id, status)}
                        className={`px-3 py-2 rounded-lg text-xs border ${item.status === status ? "border-white/20 bg-white/10" : "border-white/5 bg-white/[.02] hover:bg-white/5"}`}>
                        {status === item.status && <Check className="inline w-3 h-3 mr-1" />}
                        {status}
                      </button>
                    ))}
                    <button onClick={() => remove(item.id)} className="p-2 rounded-lg text-red-400 hover:bg-red-500/10" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </AdminShell>
  );
}
