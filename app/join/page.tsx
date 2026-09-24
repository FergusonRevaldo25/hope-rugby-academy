import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Phone, MapPin, Clock } from "lucide-react";
import Section from "../components/Shared/Section";
import EnquiryForm from "../components/Join/EnquiryForm";
import { getAgeGroups, getHeading } from "@/lib/content";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Join — Hope Rugby Academy",
  description:
    "Enquire about joining Hope Rugby Academy: free rugby for children aged U8–U14 in Cape Town, every Friday.",
};

export default async function JoinPage() {
  const [heading, groups] = await Promise.all([getHeading("join"), getAgeGroups()]);
  return (
    <main>
      <Section top heading={heading}>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          <EnquiryForm ageGroups={groups.map((g) => g.ageRange)} />

          <aside className="grid h-fit gap-5">
            <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-bone">Prefer to chat?</h2>
              <div className="mt-4 grid gap-3">
                <a
                  href={CONTACT.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-3 rounded-xl border border-white/15 px-4 text-[14px] font-medium text-bone transition-colors hover:border-crimson-bright/50 hover:bg-white/5"
                >
                  <MessageCircle size={18} className="text-red-soft" /> WhatsApp {CONTACT.whatsapp}
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex min-h-11 items-center gap-3 rounded-xl border border-white/15 px-4 text-[14px] font-medium text-bone transition-colors hover:border-crimson-bright/50 hover:bg-white/5"
                >
                  <Phone size={18} className="text-red-soft" /> Call {CONTACT.phone}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-card">
              <h2 className="font-display text-lg font-bold text-bone">Just turn up</h2>
              <ul className="mt-4 grid gap-3 text-[14px] text-mist">
                <li className="flex gap-3"><Clock size={18} className="mt-0.5 shrink-0 text-red-soft" />{CONTACT.trainingDay}, {CONTACT.trainingTime}</li>
                <li className="flex gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-red-soft" />{CONTACT.venue}, {CONTACT.address}</li>
              </ul>
              <p className="mt-4 text-[13px] text-mist">
                Not sure what to pack? See{" "}
                <Link href="/faq" className="font-semibold text-red-soft underline">what to bring</Link>.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </main>
  );
}
