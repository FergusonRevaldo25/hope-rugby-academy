import type { Metadata } from "next";
import Section from "../components/Shared/Section";
import GalleryGrid from "../components/Gallery/GalleryGrid";
import CTABanner from "../components/Shared/CTABanner";
import { getGallery, getHeading } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery — Hope Rugby Academy",
  description: "Photos from training sessions, match days and awards at Hope Rugby Academy.",
};

export default async function GalleryPage() {
  const [heading, items] = await Promise.all([getHeading("gallery"), getGallery()]);
  return (
    <main>
      <Section top heading={heading}>
        {items.length > 0 ? (
          <GalleryGrid items={items} />
        ) : (
          <p className="rounded-2xl border border-dashed border-white/15 p-10 text-center text-[15px] text-mist">
            Photos are coming soon.
          </p>
        )}
      </Section>
      <CTABanner
        eyebrow="Be in the next photo"
        title="Bring your boots this Friday."
        primaryLabel="Join the Academy"
        primaryHref="/join"
        secondaryLabel="Training Details"
        secondaryHref="/training"
      />
    </main>
  );
}
