"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const DETAILS = [
  { icon: MapPin, label: "Venue", value: `${CONTACT.venue}, ${CONTACT.address}`, href: CONTACT.mapsHref },
  { icon: Phone, label: "Phone", value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappHref },
  { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function Contact() {
  return (
    <section className="relative bg-ink/55 pt-40 pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 max-w-lg"
        >
          <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-red-soft">Contact</p>
          <h1 className="mt-4 text-balance font-display text-4xl font-extrabold tracking-tight text-bone lg:text-5xl">
            Want your child to <span className="text-crimson-bright text-glow-red">join in?</span>
          </h1>
          <p className="mt-4 text-[16px] leading-relaxed text-mist">
            Just show up on a Friday, or reach out first — a real coach
            answers, not a call center.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.a
                key={d.label}
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel={d.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease }}
                className="rounded-2xl border border-white/8 bg-navy-900/50 p-6 transition-colors duration-300 hover:bg-navy-900"
              >
                <Icon size={20} className="text-red-soft" />
                <p className="mt-4 text-[12px] font-medium uppercase tracking-wide text-mist/70">{d.label}</p>
                <p className="mt-1 text-[15px] font-medium text-bone">{d.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="mt-10 text-[14px] text-mist"
        >
          Training happens {CONTACT.trainingDay.toLowerCase()}, {CONTACT.trainingTime}, at {CONTACT.venue}, {CONTACT.address}. Prefer to write?{" "}
          <Link href="/join" className="font-semibold text-red-soft underline">Send an enquiry</Link>.
        </motion.p>
      </div>
    </section>
  );
}
