import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import SponsorGrid from "../components/Sponsors/SponsorGrid";
import FundProgress from "../components/Shared/FundProgress";
import NewsGrid from "../components/Shared/NewsGrid";
import CTABanner from "../components/Shared/CTABanner";
import { getSponsors, getFunds, getNews, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Sponsors — Hope Rugby Academy",
  description: "The partners and sponsors who help keep Hope Rugby Academy free for every player.",
};

export default async function SponsorsPage() {
  const [heading, partnersHeading, newsHeading, sponsors, funds, news] = await Promise.all([
    getHeading("sponsors"),
    getHeading("sponsors.partners"),
    getHeading("news"),
    getSponsors(),
    getFunds(),
    getNews("sponsors"),
  ]);
  return (
    <main>
      <Section top heading={heading}>
        <FundProgress funds={funds} />
      </Section>
      <Section tone="dim" heading={partnersHeading}>
        <SponsorGrid sponsors={sponsors} />
      </Section>
      {news.length > 0 && (
        <Section heading={newsHeading}>
          <NewsGrid items={news} />
        </Section>
      )}
      <CTABanner
        eyebrow="Partner with us"
        title="Want to partner with the academy?"
        subtitle="Get in touch to talk about sponsoring the academy."
        primaryLabel="Contact Us"
        primaryHref="/contact"
        secondaryLabel="Donate"
        secondaryHref="/donate"
      />
    </main>
  );
}
