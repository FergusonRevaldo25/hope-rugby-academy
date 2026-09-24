"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { FundItem } from "@/lib/content/types";

const zar = new Intl.NumberFormat("en-ZA", { style: "currency", currency: "ZAR", maximumFractionDigits: 0 });

export default function FundProgress({ funds }: { funds: FundItem[] }) {
  const raised = funds.reduce((n, f) => n + f.raised, 0);
  const goal = funds.reduce((n, f) => n + f.goal, 0);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4 rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-red-soft">Total raised</p>
          <p className="mt-1 font-display text-4xl font-extrabold text-bone">{zar.format(raised)}</p>
          <p className="text-[13px] text-mist">of {zar.format(goal)} across all funds</p>
        </div>
        <Link
          href="/donate"
          className="animate-glow-pulse rounded-full bg-crimson px-6 py-3 text-[14px] font-semibold text-white shadow-crimson transition-transform duration-300 ease-silk hover:scale-[1.03]"
        >
          Donate now
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {funds.map((f, i) => {
          const pct = f.goal > 0 ? Math.min(100, Math.round((f.raised / f.goal) * 100)) : 0;
          return (
            <motion.div
              key={f.id}
              initial={{ y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="font-display text-lg font-bold text-bone">{f.name}</h3>
                <span className="ml-auto font-display text-lg font-extrabold text-crimson-bright">{pct}%</span>
              </div>
              <p className="mt-2 text-[14px] leading-relaxed text-mist">{f.description}</p>

              <div
                className="mt-5 h-3 overflow-hidden rounded-full bg-white/10"
                role="progressbar"
                aria-valuenow={pct}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={`${f.name} progress`}
              >
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: pct / 100 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="h-full w-full rounded-full bg-gradient-to-r from-crimson to-crimson-bright"
                />
              </div>
              <p className="mt-3 text-[13px] text-mist">
                <span className="font-semibold text-bone">{zar.format(f.raised)}</span> raised of {zar.format(f.goal)}
                {f.raised === 0 && <span className="text-red-soft"> · be the first to give</span>}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
