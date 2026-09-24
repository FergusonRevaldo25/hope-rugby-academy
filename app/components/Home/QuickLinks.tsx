"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users, Shield, Clock, HandCoins, ArrowUpRight } from "lucide-react";

const CARDS = [
  { icon: Users, title: "Meet the coaches", copy: "The staff behind every session.", href: "/coaches" },
  { icon: Shield, title: "Age groups", copy: "U8 through U14, and the awards players earn.", href: "/players" },
  { icon: Clock, title: "Training schedule", copy: "Every Friday, 16h00–18h00.", href: "/training" },
  { icon: HandCoins, title: "Support the academy", copy: "See how a donation is used.", href: "/donate" },
];

export default function QuickLinks() {
  return (
    <section className="relative bg-navy-950/45 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={c.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/8 bg-navy-900/50 p-6 transition-colors duration-300 hover:bg-navy-900"
                >
                  <div>
                    <Icon size={20} className="text-red-soft" />
                    <h3 className="mt-4 font-display text-lg font-bold text-bone">{c.title}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-mist">{c.copy}</p>
                  </div>
                  <ArrowUpRight size={18} className="mt-6 text-mist transition-all duration-300 ease-silk group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-crimson-bright" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
