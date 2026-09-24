"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { Media } from "@/lib/content/types";

const ASPECT = {
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/10]",
  square: "aspect-square",
} as const;

export type PhotoCardProps = {
  photo: Media;
  /** shown when there is no photo (emoji, initials, icon…) */
  fallback?: ReactNode;
  aspect?: keyof typeof ASPECT;
  /** "contain" is for logos: white background, padded, never cropped */
  fit?: "cover" | "contain";
  /** chip on the top-left of the photo (age group, time, date…) */
  badge?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  body?: string;
  tags?: string[];
  /** small line under the body (e.g. amount contributed) */
  meta?: ReactNode;
  href?: string;
  cta?: string;
  index?: number;
  /** slightly faded (past events) */
  dim?: boolean;
};

function Wrapper({ href, children }: { href?: string; children: ReactNode }) {
  if (!href) return <>{children}</>;
  const external = /^https?:\/\//.test(href);
  const cls = "block h-full w-full focus-visible:outline-offset-4";
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export default function PhotoCard({
  photo,
  fallback,
  aspect = "landscape",
  fit = "cover",
  badge,
  eyebrow,
  title,
  subtitle,
  body,
  tags,
  meta,
  href,
  cta,
  index = 0,
  dim = false,
}: PhotoCardProps) {
  return (
    <motion.div
      initial={{ y: 18 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className={`flex w-full ${dim ? "opacity-75" : ""}`}
    >
      <Wrapper href={href}>
        <article className="group relative flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 shadow-card transition-all duration-500 ease-silk hover:-translate-y-1.5 hover:border-crimson-bright/50 hover:shadow-glow">
          <div className={`relative ${ASPECT[aspect]} overflow-hidden ${fit === "contain" ? "bg-white" : "bg-navy-800"}`}>
            {photo ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                className={
                  fit === "contain"
                    ? "object-contain p-8"
                    : "object-cover transition-transform duration-700 ease-silk group-hover:scale-105"
                }
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy-800 via-navy-900 to-crimson/40">
                <div className="font-display text-6xl font-extrabold text-white/25">
                  {fallback ?? <Camera size={40} strokeWidth={1.5} />}
                </div>
              </div>
            )}
            {fit === "cover" && (
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent" />
            )}
            {badge && (
              <span className="absolute left-3 top-3 rounded-full bg-crimson px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white shadow-crimson">
                {badge}
              </span>
            )}
          </div>

          <div className="flex flex-1 flex-col p-5">
            {eyebrow && (
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-soft">{eyebrow}</span>
            )}
            <h3 className="mt-1 font-display text-lg font-bold leading-snug text-bone">{title}</h3>
            {subtitle && <p className="mt-0.5 text-[13px] font-medium text-red-soft">{subtitle}</p>}
            {body && <p className="mt-3 text-[14px] leading-relaxed text-mist">{body}</p>}
            {meta && <div className="mt-3 text-[13px] font-semibold text-bone">{meta}</div>}
            {tags && tags.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-[11px] text-mist">
                    {t}
                  </span>
                ))}
              </div>
            )}
            {href && cta && (
              <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-[13px] font-semibold text-red-soft">
                {cta}
                <ArrowRight size={14} className="transition-transform duration-300 ease-silk group-hover:translate-x-1" />
              </span>
            )}
          </div>
        </article>
      </Wrapper>
    </motion.div>
  );
}
