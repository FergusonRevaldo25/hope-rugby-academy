"use client";

import { motion } from "framer-motion";
import CopyButton from "../Shared/CopyButton";
import { DONATION_FUNDS, BANKING } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

function CopyRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/8 py-3 last:border-b-0">
      <div className="min-w-0">
        <p className="text-[12px] font-medium uppercase tracking-wide text-mist/70">{label}</p>
        <p className="mt-0.5 break-words text-[15px] font-medium text-bone">{value}</p>
      </div>
      <CopyButton value={value} ariaLabel={`Copy ${label}`} />
    </div>
  );
}

const ALL_DETAILS = `Account name: ${BANKING.accountName}\nBank: ${BANKING.bank}\nAccount number: ${BANKING.accountNumber}\nReference: ${BANKING.reference}`;

export default function Donate() {
  return (
    <section className="relative bg-hope-gradient pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-lg"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">Donate</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            Keep training <span className="text-crimson-bright text-glow-red">free</span> for every kid.
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            Hope Rugby Academy doesn&rsquo;t charge players a cent. Donations
            cover coaching, transport, and equipment directly.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="grid gap-5">
            {DONATION_FUNDS.map((fund, i) => {
              const pct = fund.goal > 0 ? Math.min(100, Math.round((fund.raised / fund.goal) * 100)) : 0;
              return (
                <motion.div
                  key={fund.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className="rounded-2xl border border-white/10 bg-navy-950/70 p-7 shadow-card backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-2xl">{fund.icon}</span>
                      <h3 className="mt-3 font-display text-lg font-bold text-bone">{fund.name}</h3>
                    </div>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-[12px] font-medium text-mist">
                      {pct}%
                    </span>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-mist">{fund.description}</p>

                  <div className="mt-5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-crimson-gradient transition-all duration-700 ease-silk"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[12px] text-mist/70">
                    <span>R{fund.raised.toLocaleString()} raised</span>
                    <span>Goal: R{fund.goal.toLocaleString()}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="h-fit rounded-2xl border border-white/10 bg-navy-950/70 p-7 shadow-card backdrop-blur-sm lg:p-9"
          >
            <h2 className="font-display text-lg font-bold text-bone">Bank transfer (EFT)</h2>
            <p className="mt-2 text-[13px] text-mist">
              The most direct way to support the academy.
            </p>
            <div className="mt-5">
              <CopyRow label="Account Name" value={BANKING.accountName} />
              <CopyRow label="Bank" value={BANKING.bank} />
              <CopyRow label="Account Number" value={BANKING.accountNumber} />
              <CopyRow label="Reference" value={BANKING.reference} />
            </div>
            <CopyButton value={ALL_DETAILS} label="Copy all banking details" ariaLabel="Copy all banking details" className="mt-5 w-full justify-center" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
