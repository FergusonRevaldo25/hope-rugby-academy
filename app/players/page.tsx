import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import AgeGroupGrid from "../components/Players/AgeGroupGrid";
import AwardGrid from "../components/Players/AwardGrid";
import NewsGrid from "../components/Shared/NewsGrid";
import CTABanner from "../components/Shared/CTABanner";
import { getAgeGroups, getAwards, getNews, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Players — Hope Rugby Academy",
  description: "Age groups from U8 to U14 and the end-of-season awards players earn at Hope Rugby Academy.",
};

export default async function PlayersPage() {
  const [heading, awardsHeading, newsHeading, groups, awards, news] = await Promise.all([
    getHeading("players"),
    getHeading("players.awards"),
    getHeading("news"),
    getAgeGroups(),
    getAwards(),
    getNews("players"),
  ]);
  return (
    <main>
      <Section top heading={heading}>
        <AgeGroupGrid groups={groups} />
      </Section>
      <Section tone="dim" heading={awardsHeading}>
        <AwardGrid awards={awards} />
      </Section>
      {news.length > 0 && (
        <Section heading={newsHeading}>
          <NewsGrid items={news} />
        </Section>
      )}
      <CTABanner
        eyebrow="Ready to join?"
        title="Every age group is welcome, any experience level."
        primaryLabel="See Training Times"
        primaryHref="/training"
        secondaryLabel="Meet the Coaches"
        secondaryHref="/coaches"
      />
    </main>
  );
}
