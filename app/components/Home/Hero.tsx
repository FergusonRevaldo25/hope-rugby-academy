"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-hope-gradient pt-28 pb-20"
    >
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(242,35,62,0.28),transparent_65%)]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(211,18,42,0.25),transparent_65%)]" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.14]"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <path d="M-100 260 L520 150 L360 210 L700 140 L520 210 L820 170" stroke="#F2233E" strokeWidth="5" strokeLinecap="round" />
        <path d="M-100 340 L470 250 L330 300 L640 240 L470 300 L740 270" stroke="#F2233E" strokeWidth="5" strokeLinecap="round" opacity="0.7" />
      </svg>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-10">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-crimson-bright" />
            <span className="text-[13px] font-medium text-mist">
              Free & open to every child, U8–U14
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 22 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="text-balance font-display text-[13vw] font-extrabold leading-[0.98] tracking-tightest text-bone sm:text-6xl lg:text-[5.2rem]"
          >
            Every champion
            <br />
            starts with <span className="text-crimson-bright text-glow-red">someone</span>
            <br />
            who believes in them.
          </motion.h1>

          <motion.p
            initial={{ y: 18 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-7 max-w-md text-balance text-[17px] leading-relaxed text-mist lg:text-lg"
          >
            Hope Rugby Academy is a free, community-rooted rugby program
            founded by Coach Belven Hope. Every Friday at{" "}
            {CONTACT.venue}, any child — regardless of experience — is
            welcome to train.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28, ease }}
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <Link
              href="/join"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-7 py-4 text-[15px] font-semibold text-white shadow-crimson animate-glow-pulse transition-transform duration-300 ease-silk hover:scale-[1.02] active:scale-[0.98]"
            >
              Join the Academy
              <ArrowRight size={17} className="transition-transform duration-300 ease-silk group-hover:translate-x-1" />
            </Link>

            <Link
              href="/training"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-4 text-[15px] font-medium text-bone transition-colors duration-300 hover:bg-white/5"
            >
              See Training Times
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.94, y: 24 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
        >
          <div className="absolute h-[85%] w-[85%] rounded-full bg-[radial-gradient(circle,rgba(242,35,62,0.25),transparent_65%)]" />
          <div className="relative z-10 aspect-square w-full max-w-sm rounded-full bg-gradient-to-br from-crimson via-navy-800 to-crimson-bright p-[3px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.6)] lg:max-w-md">
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-white p-6">
              <Image
                src="/logo.png"
                alt="Hope Rugby Academy crest"
                width={640}
                height={640}
                priority
                sizes="(min-width: 1024px) 448px, 384px"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
