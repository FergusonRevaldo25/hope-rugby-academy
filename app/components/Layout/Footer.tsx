"use client";

import Image from "next/image";
import Link from "next/link";
import { CONTACT } from "@/lib/data";
import { usePathname } from "next/navigation";

function InstagramIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function WhatsappIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;
  return (
    <footer className="border-t border-white/8 bg-ink/70 py-12 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-start sm:justify-between lg:px-10">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/10">
            <Image
              src="/logo.png"
              alt="Hope Rugby Academy"
              width={36}
              height={36}
              className="h-[88%] w-[88%] object-contain"
            />
          </span>
          <div>
            <p className="font-display text-[15px] font-bold text-bone">
              Hope Rugby Academy
            </p>
            <p className="text-[13px] text-mist">
              Building champions of tomorrow.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-mist">
          <Link
            href="/players"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Players
          </Link>
          <Link
            href="/coaches"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Coaches
          </Link>
          <Link
            href="/training"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Training
          </Link>
          <Link
            href="/events"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Events
          </Link>
          <Link
            href="/gallery"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Gallery
          </Link>
          <Link
            href="/faq"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            FAQ
          </Link>
          <Link
            href="/sponsors"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Sponsors
          </Link>
          <Link
            href="/donate"
            className="transition-colors duration-300 ease-silk hover:text-crimson-bright"
          >
            Donate
          </Link>
          <Link
            href="/contact"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Contact
          </Link>
          <Link
            href="/privacy"
            className="transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            Privacy
          </Link>
        </div>

        <div className="flex gap-4">
          <a
            href={CONTACT.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-mist transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            <WhatsappIcon />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-mist transition-colors duration-300 ease-silk hover:text-crimson-bright"
          >
            <InstagramIcon />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="text-mist transition-colors duration-300 ease-silk hover:text-red-soft"
          >
            <FacebookIcon />
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl px-6 text-[12px] text-mist/50 lg:px-10">
        Â© {new Date().getFullYear()} Hope Rugby Academy Â· {CONTACT.venue},{" "}
        {CONTACT.address}
      </p>
    </footer>
  );
}
