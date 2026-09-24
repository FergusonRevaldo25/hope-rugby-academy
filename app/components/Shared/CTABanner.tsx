"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type CTABannerProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CTABanner({
  eyebrow,
  title,
  subtitle,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="relative overflow-hidden bg-hope-gradient py-24">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(242,35,62,0.25),transparent_65%)]" />
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.1]"
        viewBox="0 0 1440 400"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-100 120 L520 40 L360 90 L700 30 L520 90 L820 60" stroke="#F2233E" strokeWidth="4" strokeLinecap="round" />
      </svg>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex max-w-3xl flex-col items-center px-6 text-center lg:px-10"
      >
        {eyebrow && (
          <span className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">
            {eyebrow}
          </span>
        )}
        <h2 className="text-balance font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-bone lg:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 max-w-lg text-balance text-[16px] leading-relaxed text-mist">
            {subtitle}
          </p>
        )}

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href={primaryHref}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-7 py-4 text-[15px] font-semibold text-white shadow-crimson transition-transform duration-300 ease-silk hover:scale-[1.02] active:scale-[0.98]"
          >
            {primaryLabel}
            <ArrowRight size={17} className="transition-transform duration-300 ease-silk group-hover:translate-x-1" />
          </Link>
          {secondaryLabel && secondaryHref && (
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-[15px] font-medium text-bone transition-colors duration-300 hover:bg-white/5"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
