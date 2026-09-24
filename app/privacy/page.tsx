import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import { CONTACT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — Hope Rugby Academy",
  description: "How Hope Rugby Academy collects, uses and protects personal information, including photos of children.",
};

const UPDATED = "24 September 2026";

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl font-bold text-bone">{children}</h2>
);
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="mt-3 text-[15px] leading-relaxed text-mist">{children}</p>
);
const Li = ({ children }: { children: React.ReactNode }) => <li className="ml-5 list-disc pl-1">{children}</li>;

export default function PrivacyPage() {
  return (
    <main>
      <Section top heading={{ eyebrow: "Legal", titleBefore: "Privacy ", highlight: "Policy.", intro: `Last updated ${UPDATED}.` }}>
        <div className="max-w-3xl">
          <P>
            Hope Rugby Academy (“we”, “us”) respects your privacy and the privacy of your children. This policy explains
            what personal information we collect through this website, why, and what your rights are under South
            Africa&rsquo;s Protection of Personal Information Act (POPIA).
          </P>

          <H>What we collect</H>
          <ul className="mt-3 grid gap-2 text-[15px] leading-relaxed text-mist">
            <Li>Through the Join / enquiry form: your child&rsquo;s name and age group, your name and phone number, and optionally your email address and a message.</Li>
            <Li>If you contact us by phone, WhatsApp or email: the details you choose to share with us.</Li>
            <Li>Photos of players, only as described under “Photos” below.</Li>
          </ul>

          <H>Why we collect it</H>
          <P>
            Only to respond to your enquiry, place your child in the right age group, and contact you about training. We
            do not sell your information or use it for unrelated marketing.
          </P>

          <H>Who can see it</H>
          <P>
            Our coaching and admin team. We use trusted service providers to run the website and to deliver enquiries
            to us (for example hosting, email delivery and our content management system). They may only process
            information on our behalf and to provide those services.
          </P>

          <H>Children&rsquo;s information</H>
          <P>
            Enquiries must be submitted by a parent or guardian. We only collect what we need to run the academy and we
            do not publish children&rsquo;s names alongside their photos unless a parent or guardian has agreed.
          </P>

          <H>Photos</H>
          <P>
            We publish photos of players on this website only with the consent of a parent or guardian. You can
            withdraw that consent at any time and we will remove the photo from the website. Contact us using the
            details below.
          </P>

          <H>How long we keep it</H>
          <P>
            We keep enquiry details only for as long as needed to respond and to manage your child&rsquo;s
            participation, and we delete them when you ask us to.
          </P>

          <H>Security</H>
          <P>
            We take reasonable steps to protect personal information, including limiting who can access it and using
            secure connections. No system is perfectly secure, so please do not include sensitive details in your
            message that you are not comfortable sharing.
          </P>

          <H>Your rights</H>
          <P>
            You may ask us to tell you what information we hold about you or your child, to correct it, or to delete it,
            and you may object to our processing of it. Email{" "}
            <a href={`mailto:${CONTACT.email}`} className="font-semibold text-red-soft underline">{CONTACT.email}</a> or
            call {CONTACT.phone}. If you are unhappy with how we handle your information, you may complain to South
            Africa&rsquo;s Information Regulator (inforegulator.org.za).
          </P>

          <H>Changes</H>
          <P>We may update this policy and will change the date at the top when we do.</P>
        </div>
      </Section>
    </main>
  );
}
