import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import BringGrid from "../components/Faq/BringGrid";
import FaqList from "../components/Faq/FaqList";
import CTABanner from "../components/Shared/CTABanner";
import JsonLd from "../components/Shared/JsonLd";
import { getBringList, getFaqs, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "FAQ & What to Bring — Hope Rugby Academy",
  description: "Answers to common questions from parents, plus what your child needs to bring to training.",
};

export default async function FaqPage() {
  const [heading, bringHeading, bring, faqs] = await Promise.all([
    getHeading("faq"),
    getHeading("faq.bring"),
    getBringList(),
    getFaqs(),
  ]);
  return (
    <main>
      {faqs.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }}
        />
      )}
      <Section top heading={bringHeading}>
        <BringGrid items={bring} />
      </Section>
      <Section tone="dim" heading={heading}>
        <FaqList items={faqs} />
      </Section>
      <CTABanner
        eyebrow="Still curious?"
        title="Ask a coach directly."
        subtitle="A real person answers — usually the same day."
        primaryLabel="Send an Enquiry"
        primaryHref="/join"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </main>
  );
}
