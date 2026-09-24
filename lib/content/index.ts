// The ONLY place pages read content from. Every getter is async so it can be
// backed by a CMS without touching any component.
//
// Local mode (default): returns the seed data in ./seed.ts.
// CMS mode: set CMS_URL (and optionally CMS_TOKEN) in .env.local. Each
// collection is then fetched from `${CMS_URL}/<collection>` and must return
// JSON matching the types in ./types.ts. If the CMS is down or errors, the
// site falls back to the seed so it never breaks.
import type {
  Base,
  Media,
  CoachItem,
  AgeGroupItem,
  AwardItem,
  SponsorItem,
  FundItem,
  NewsItem,
  NewsCategory,
  SessionStepItem,
  HeadingContent,
  AlertItem,
  EventItem,
  FaqItem,
  BringItem,
  GalleryItem,
} from "./types";
import {
  COACH_ITEMS,
  AGE_GROUP_ITEMS,
  AWARD_ITEMS,
  SPONSOR_ITEMS,
  FUND_ITEMS,
  SESSION_STEP_ITEMS,
  NEWS_ITEMS,
  ALERT_ITEMS,
  EVENT_ITEMS,
  FAQ_ITEMS,
  BRING_ITEMS,
  GALLERY_ITEMS,
  HEADINGS,
} from "./seed";

const REVALIDATE_SECONDS = 60;

const visible = <T extends Base>(items: T[]) =>
  items.filter((i) => i.published).sort((a, b) => a.order - b.order);

/**
 * Child-safety gate. For collections that can show children, a photo is only
 * kept when the item has `photoConsent: true`. Enforced here on the server,
 * so an unconsented photo never reaches the browser.
 */
function enforceConsent<T extends Base>(collection: string, items: T[]): T[] {
  return items.map((item) => {
    const r = item as T & { photo?: Media; photoConsent?: boolean };
    if (r.photo && r.photoConsent !== true) {
      console.warn(
        `[content] ${collection}/${item.id}: photo hidden — set photoConsent to true once guardian consent is confirmed.`,
      );
      return { ...item, photo: null };
    }
    return item;
  });
}

function cmsFetch(path: string, tag: string) {
  const token = process.env.CMS_TOKEN;
  return fetch(`${process.env.CMS_URL}/${path}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    next: { revalidate: REVALIDATE_SECONDS, tags: [tag] },
  });
}

async function loadList<T extends Base>(
  collection: string,
  seed: T[],
  opts: { consent?: boolean } = {},
): Promise<T[]> {
  let items: T[];
  if (!process.env.CMS_URL) {
    items = seed;
  } else {
    try {
      const res = await cmsFetch(collection, collection);
      if (!res.ok) throw new Error(`CMS ${collection}: ${res.status}`);
      items = (await res.json()) as T[];
    } catch (err) {
      console.error(err);
      items = seed;
    }
  }
  const shown = visible(items);
  return opts.consent ? enforceConsent(collection, shown) : shown;
}

export const getCoaches = () => loadList<CoachItem>("coaches", COACH_ITEMS);
export const getAgeGroups = () => loadList<AgeGroupItem>("age-groups", AGE_GROUP_ITEMS, { consent: true });
export const getAwards = () => loadList<AwardItem>("awards", AWARD_ITEMS, { consent: true });
export const getSponsors = () => loadList<SponsorItem>("sponsors", SPONSOR_ITEMS);
export const getFunds = () => loadList<FundItem>("funds", FUND_ITEMS);
export const getSessionSteps = () =>
  loadList<SessionStepItem>("session-steps", SESSION_STEP_ITEMS, { consent: true });
export const getFaqs = () => loadList<FaqItem>("faqs", FAQ_ITEMS);
export const getBringList = () => loadList<BringItem>("bring-list", BRING_ITEMS);

export async function getGallery(limit?: number): Promise<GalleryItem[]> {
  const all = await loadList<GalleryItem>("gallery", GALLERY_ITEMS, { consent: true });
  const withPhotos = all.filter((g) => g.photo !== null);
  return limit ? withPhotos.slice(0, limit) : withPhotos;
}

export async function getNews(category?: NewsCategory, limit = 3): Promise<NewsItem[]> {
  const all = await loadList<NewsItem>("news", NEWS_ITEMS, { consent: true });
  return all
    .filter((n) => !category || n.category === category || n.category === "general")
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, limit);
}

export async function getEvents(): Promise<{ upcoming: EventItem[]; past: EventItem[] }> {
  const all = await loadList<EventItem>("events", EVENT_ITEMS, { consent: true });
  const now = Date.now();
  // no end time → treat the event as lasting 3 hours
  const endMs = (e: EventItem) =>
    e.end ? new Date(e.end).getTime() : new Date(e.start).getTime() + 3 * 3600_000;
  const startMs = (e: EventItem) => new Date(e.start).getTime();
  const upcoming = all
    .filter((e) => Number.isNaN(endMs(e)) || endMs(e) >= now)
    .sort((a, b) => startMs(a) - startMs(b));
  const past = all.filter((e) => endMs(e) < now).sort((a, b) => startMs(b) - startMs(a));
  return { upcoming, past };
}

/** The single alert to show right now (urgent beats info), or null. */
export async function getActiveAlert(): Promise<AlertItem | null> {
  const all = await loadList<AlertItem>("alerts", ALERT_ITEMS);
  const now = Date.now();
  const live = all.filter((a) => {
    const s = a.startsAt ? new Date(a.startsAt).getTime() : -Infinity;
    const e = a.endsAt ? new Date(a.endsAt).getTime() : Infinity;
    return now >= s && now <= e;
  });
  live.sort((a, b) => Number(b.severity === "urgent") - Number(a.severity === "urgent") || a.order - b.order);
  return live[0] ?? null;
}

export async function getHeading(key: string): Promise<HeadingContent> {
  const fallback = HEADINGS[key] ?? { titleBefore: "" };
  if (!process.env.CMS_URL) return fallback;
  try {
    const res = await cmsFetch(`headings/${key}`, "headings");
    if (!res.ok) throw new Error(`CMS heading ${key}: ${res.status}`);
    return (await res.json()) as HeadingContent;
  } catch (err) {
    console.error(err);
    return fallback;
  }
}
