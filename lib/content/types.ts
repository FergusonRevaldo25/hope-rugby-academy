// Content model. Every collection item has the same 3 admin-controlled
// fields (id / order / published) so a CMS can reorder, hide or show
// anything without a code change.

export type Media = { src: string; alt: string } | null;

export type Base = {
  id: string;
  /** lower numbers show first */
  order: number;
  /** false = hidden from the public site (draft) */
  published: boolean;
};

export type CoachItem = Base & {
  name: string;
  role: string;
  bio: string;
  focus: string;
  photo: Media;
};

export type AgeGroupItem = Base & {
  ageRange: string;
  name: string;
  focus: string;
  photo: Media;
  /** must be true for the photo to show (guardian consent) */
  photoConsent?: boolean;
};

export type AwardItem = Base & {
  icon: string;
  title: string;
  description: string;
  /** optional: name of this season's winner */
  recipient?: string;
  /** optional: e.g. "2026 season" */
  season?: string;
  /** optional: photo of the winner (falls back to the icon) */
  photo: Media;
  photoConsent?: boolean;
};

export type SponsorItem = Base & {
  name: string;
  tier: string;
  description: string;
  logo: Media;
  website?: string;
  /** optional: amount contributed in ZAR, shown on the card when set */
  contributed?: number;
};

export type FundItem = Base & {
  name: string;
  icon: string;
  goal: number;
  raised: number;
  description: string;
};

export type NewsCategory = "general" | "training" | "players" | "coaches" | "sponsors";

export type NewsItem = Base & {
  title: string;
  excerpt: string;
  /** ISO date, e.g. 2026-09-24 */
  date: string;
  category: NewsCategory;
  photo: Media;
  photoConsent?: boolean;
  href?: string;
};

export type SessionStepItem = Base & {
  time: string;
  title: string;
  description: string;
  photo: Media;
  photoConsent?: boolean;
};

/** Editable heading block: used for page headers and section headings. */
export type HeadingContent = {
  eyebrow?: string;
  titleBefore: string;
  /** rendered in red with a glow */
  highlight?: string;
  titleAfter?: string;
  intro?: string;
};

// ---------------------------------------------------------------------------
// Alerts, events, FAQ, gallery
// ---------------------------------------------------------------------------

export type AlertSeverity = "info" | "urgent";

/** The bar above the navbar. Only one shows at a time (urgent wins). */
export type AlertItem = Base & {
  message: string;
  severity: AlertSeverity;
  linkLabel?: string;
  linkHref?: string;
  /** ISO datetime; alert is hidden before this */
  startsAt?: string;
  /** ISO datetime; alert is hidden after this */
  endsAt?: string;
};

export type EventType = "match" | "tournament" | "awards" | "clinic" | "other";

export type EventItem = Base & {
  title: string;
  type: EventType;
  /** ISO with offset, e.g. 2026-10-10T09:00:00+02:00 */
  start: string;
  end?: string;
  venue: string;
  address?: string;
  description: string;
  photo: Media;
  photoConsent?: boolean;
  /** optional: filled in after the event, e.g. "Won 24–12" */
  result?: string;
};

export type FaqItem = Base & {
  question: string;
  answer: string;
};

export type BringItem = Base & {
  icon: string;
  title: string;
  description: string;
};

export type GalleryItem = Base & {
  photo: Media;
  caption?: string;
  /** REQUIRED: photo is never published unless this is true */
  photoConsent: boolean;
};

export type Enquiry = {
  childName: string;
  ageGroup: string;
  parentName: string;
  phone: string;
  email?: string;
  message?: string;
  consent: true;
};
