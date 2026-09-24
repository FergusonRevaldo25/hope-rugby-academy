"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, Phone, HandCoins } from "lucide-react";

const MORE_LINKS = [
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
];

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Coaches", href: "/coaches" },
  { label: "Players", href: "/players" },
  { label: "Training", href: "/training" },
  { label: "Events", href: "/events" },
  { label: "Sponsors", href: "/sponsors" },
];

function IconNavButton({
  href,
  label,
  icon: Icon,
  variant = "ghost",
}: {
  href: string;
  label: string;
  icon: typeof Phone;
  variant?: "ghost" | "solid";
}) {
  const base =
    "group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ease-silk";
  const styles =
    variant === "solid"
      ? "bg-crimson text-white shadow-crimson hover:scale-105 active:scale-95"
      : "border border-white/10 bg-white/5 text-mist hover:border-crimson-bright/40 hover:bg-crimson-bright/10 hover:text-red-soft";

  return (
    <Link href={href} aria-label={label} className={`${base} ${styles}`}>
      <Icon size={16} />
      <span
        className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-navy-950 px-3 py-1 text-[11px] font-medium text-bone opacity-0 shadow-card transition-all duration-300 ease-silk group-hover:-bottom-10 group-hover:opacity-100"
      >
        {label}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 24);
  });

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(6,13,28,0.72)" : "rgba(6,13,28,0)",
          borderColor: scrolled
            ? "rgba(255,255,255,0.08)"
            : "rgba(255,255,255,0)",
        }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="border-b backdrop-blur-xl supports-[backdrop-filter]:backdrop-blur-xl"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/10 transition-all duration-300 ease-silk hover:ring-crimson-bright/50 lg:h-10 lg:w-10">
              <Image
                src="/logo.png"
                alt="Hope Rugby Academy"
                width={40}
                height={40}
                className="h-[88%] w-[88%] object-contain"
                priority
              />
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight text-bone lg:hidden lg:text-[17px] xl:inline">
              Hope Rugby Academy
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-1.5 py-1.5 lg:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-300 ease-silk ${
                    active ? "text-bone" : "text-mist hover:text-bone"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-crimson/25 to-crimson-bright/25 ring-1 ring-white/10"
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    />
                  ) : (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-crimson/0 to-crimson-bright/0 opacity-0 transition-all duration-300 ease-silk group-hover:from-crimson/10 group-hover:to-crimson-bright/10 group-hover:opacity-100" />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2.5 lg:flex">
            <Link
              href="/join"
              className="rounded-full border border-crimson-bright/60 px-4 py-2 text-[13px] font-semibold text-white transition-all duration-300 ease-silk hover:bg-crimson hover:shadow-crimson"
            >
              Join
            </Link>
            <IconNavButton href="/contact" label="Contact" icon={Phone} />
            <IconNavButton href="/donate" label="Donate" icon={HandCoins} variant="solid" />
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-bone transition-colors duration-300 hover:border-crimson-bright/40 hover:bg-crimson-bright/10 lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="border-b border-white/10 bg-ink/95 px-6 pb-8 pt-4 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-1">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-mist transition-colors duration-300 ease-silk hover:bg-gradient-to-r hover:from-crimson/10 hover:to-crimson-bright/10 hover:text-bone"
                >
                  {link.label}
                </Link>
              ))}

              {MORE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-[15px] font-medium text-mist transition-colors duration-300 ease-silk hover:bg-gradient-to-r hover:from-crimson/10 hover:to-crimson-bright/10 hover:text-bone"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium text-mist transition-colors duration-300 ease-silk hover:bg-gradient-to-r hover:from-crimson/10 hover:to-crimson-bright/10 hover:text-bone"
              >
                <Phone size={16} className="text-red-soft" />
                Contact
              </Link>

              <Link
                href="/join"
                className="mt-2 flex items-center justify-center rounded-full bg-crimson px-5 py-3 text-center text-[15px] font-semibold text-white shadow-crimson"
              >
                Join the Academy
              </Link>

              <Link
                href="/donate"
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-crimson px-5 py-3 text-center text-[15px] font-semibold text-white shadow-crimson"
              >
                <HandCoins size={16} />
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
