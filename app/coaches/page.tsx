import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import CoachGrid from "../components/Coaches/CoachGrid";
import { getCoaches, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Coaches — Hope Rugby Academy",
  description: "Meet the volunteer coaching staff at Hope Rugby Academy, led by founder Coach Belven Hope.",
};

export default async function CoachesPage() {
  const [heading, coaches] = await Promise.all([getHeading("coaches"), getCoaches()]);
  return (
    <main>
      <Section top heading={heading}>
        <CoachGrid coaches={coaches} />
      </Section>
    </main>
  );
}
