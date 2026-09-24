import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import InfoTiles from "../components/Training/InfoTiles";
import SessionGrid from "../components/Training/SessionGrid";
import NewsGrid from "../components/Shared/NewsGrid";
import MapEmbed from "../components/Shared/MapEmbed";
import CTABanner from "../components/Shared/CTABanner";
import { getSessionSteps, getNews, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Training — Hope Rugby Academy",
  description: "Hope Rugby Academy trains every Friday, 16h00–18h00, at Zwaanswyk Academy Primary School.",
};

export default async function TrainingPage() {
  const [heading, sessionHeading, newsHeading, steps, news] = await Promise.all([
    getHeading("training"),
    getHeading("training.session"),
    getHeading("news"),
    getSessionSteps(),
    getNews("training"),
  ]);
  return (
    <main>
      <Section top heading={heading}>
        <InfoTiles />
      </Section>
      <Section heading={{ titleBefore: "Find us ", highlight: "here." }}>
        <MapEmbed />
      </Section>
      <Section tone="dim" heading={sessionHeading}>
        <SessionGrid steps={steps} />
      </Section>
      {news.length > 0 && (
        <Section heading={newsHeading}>
          <NewsGrid items={news} />
        </Section>
      )}
      <CTABanner
        eyebrow="Support the academy"
        title="Free for players. Not free to run."
        subtitle="Coaching, transport, and equipment all rely on donations."
        primaryLabel="Join the Academy"
        primaryHref="/join"
        secondaryLabel="Donate"
        secondaryHref="/donate"
      />
    </main>
  );
}
