"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Flag, Dumbbell, Users, Sunrise, Trophy, Handshake, ArrowRight } from "lucide-react";
import type { GalleryItem } from "@/lib/content/types";
import GalleryGrid from "../Gallery/GalleryGrid";

// Shown only until the first real (consented) photo is published.
const PLACEHOLDERS = [
  { icon: Flag, label: "Match day", span: "lg:col-span-2 lg:row-span-2", bg: "bg-hope-gradient" },
  { icon: Dumbbell, label: "Conditioning", span: "", bg: "bg-navy-800" },
  { icon: Users, label: "Team huddle", span: "", bg: "bg-crimson-gradient" },
  { icon: Sunrise, label: "Friday sessions", span: "lg:col-span-2", bg: "bg-navy-700" },
  { icon: Trophy, label: "Season awards", span: "", bg: "bg-navy-800" },
  { icon: Handshake, label: "Off the field", span: "", bg: "bg-navy-700" },
];

export default function Gallery({ items, hasMore = false }: { items: GalleryItem[]; hasMore?: boolean }) {
  return (
    <section id="gallery" className="relative bg-ink/55 py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ y: 16 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-lg">
            <h2 className="text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
              Inside the <span className="text-crimson-bright text-glow-red">academy.</span>
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-mist">
              A look at what a Friday with Hope Rugby Academy feels like.
            </p>
          </div>
          {hasMore && (
            <Link href="/gallery" className="inline-flex items-center gap-2 text-[14px] font-semibold text-red-soft transition-colors hover:text-bone">
              View all photos <ArrowRight size={16} />
            </Link>
          )}
        </motion.div>

        {items.length > 0 ? (
          <GalleryGrid items={items} />
        ) : (
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[180px]">
            {PLACEHOLDERS.map((tile, i) => {
              const Icon = tile.icon;
              return (
                <motion.div
                  key={tile.label}
                  initial={{ scale: 0.95 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative flex min-h-[140px] cursor-default flex-col justify-end overflow-hidden rounded-2xl border border-white/10 p-5 transition-shadow duration-500 ease-silk hover:shadow-glow ${tile.span} ${tile.bg}`}
                >
                  <Icon size={22} className="relative z-10 mb-3 text-white/80 transition-transform duration-500 ease-silk group-hover:scale-110" />
                  <span className="relative z-10 text-[14px] font-semibold text-white">{tile.label}</span>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
