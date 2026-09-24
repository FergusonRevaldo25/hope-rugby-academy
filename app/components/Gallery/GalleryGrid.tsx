"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/content/types";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : items[open];

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[200px]">
        {items.map((g, i) => (
          <motion.button
            key={g.id}
            type="button"
            initial={{ scale: 0.96 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => {
              openerRef.current = e.currentTarget;
              setOpen(i);
            }}
            aria-label={g.caption ? `Open photo: ${g.caption}` : "Open photo"}
            className={`group relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-navy-800 transition-shadow duration-500 ease-silk hover:shadow-glow lg:aspect-auto ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <Image
              src={g.photo!.src}
              alt={g.photo!.alt}
              fill
              sizes={i === 0 ? "(min-width:1024px) 50vw, 50vw" : "(min-width:1024px) 25vw, 50vw"}
              className="object-cover transition-transform duration-700 ease-silk group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            {g.caption && (
              <span className="absolute bottom-3 left-4 right-4 text-left text-[13px] font-semibold text-white opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                {g.caption}
              </span>
            )}
          </motion.button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div className="flex justify-end">
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close photo"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-crimson"
            >
              <X size={20} />
            </button>
          </div>
          <div className="relative mx-auto my-2 w-full max-w-5xl flex-1" onClick={(e) => e.stopPropagation()}>
            <Image src={current.photo!.src} alt={current.photo!.alt} fill sizes="100vw" className="object-contain" priority />
          </div>
          {current.caption && <p className="pb-2 text-center text-[14px] text-white">{current.caption}</p>}
          {items.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="absolute left-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-crimson"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="absolute right-3 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-crimson"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}
