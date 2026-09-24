import "server-only";

import type {
  Base, Media, CoachItem, AgeGroupItem, AwardItem, SponsorItem, FundItem,
  NewsItem, NewsCategory, SessionStepItem, HeadingContent, AlertItem,
  EventItem, FaqItem, BringItem, GalleryItem,
} from "./types";
import {
  COACH_ITEMS, AGE_GROUP_ITEMS, AWARD_ITEMS, SPONSOR_ITEMS, FUND_ITEMS,
  SESSION_STEP_ITEMS, NEWS_ITEMS, ALERT_ITEMS, EVENT_ITEMS, FAQ_ITEMS,
  BRING_ITEMS, GALLERY_ITEMS, HEADINGS,
} from "./seed";
import { prisma } from "@/lib/prisma";

const visible = <T extends Base>(items: T[]) =>
  items.filter(i => i.published).sort((a, b) => a.order - b.order);

function media(src?: string | null, alt?: string | null): Media {
  return src ? { src, alt: alt || "" } : null;
}

function enforceConsent<T extends Base>(collection: string, items: T[]): T[] {
  return items.map(item => {
    const r = item as T & { photo?: Media; photoConsent?: boolean };
    if ("photo" in r && r.photo && r.photoConsent !== true) {
      console.warn(`[content] ${collection}/${item.id}: photo hidden — consent is not true.`);
      return { ...item, photo: null };
    }
    return item;
  });
}

async function dbList<T extends Base>(
  collection: string,
  seed: T[],
  loader: () => Promise<any[]>,
  map: (row: any) => T,
  opts: { consent?: boolean } = {},
): Promise<T[]> {
  try {
    const rows = await loader();
    const items = rows.map(map);
    const shown = visible(items);
    return opts.consent ? enforceConsent(collection, shown) : shown;
  } catch (err) {
    console.error(`[content] database read failed for ${collection}; using seed fallback`, err);
    const shown = visible(seed);
    return opts.consent ? enforceConsent(collection, shown) : shown;
  }
}

const base = (r: any): Base => ({ id: r.id, order: r.order, published: r.published });

export const getCoaches = () => dbList("coaches", COACH_ITEMS,
  () => prisma.coach.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] }),
  r => ({ ...base(r), name:r.name, role:r.role, bio:r.bio, focus:r.focus, photo:media(r.photoSrc,r.photoAlt) }));

export const getAgeGroups = () => dbList("age-groups", AGE_GROUP_ITEMS,
  () => prisma.ageGroup.findMany({ orderBy: [{ order: "asc" }, { createdAt: "desc" }] }),
  r => ({ ...base(r), ageRange:r.ageRange, name:r.name, focus:r.focus, photo:media(r.photoSrc,r.photoAlt), photoConsent:r.photoConsent }),
  { consent:true });

export const getAwards = () => dbList("awards", AWARD_ITEMS,
  () => prisma.award.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
  r => ({ ...base(r), icon:r.icon, title:r.title, description:r.description, recipient:r.recipient || undefined, season:r.season || undefined, photo:media(r.photoSrc,r.photoAlt), photoConsent:r.photoConsent }),
  { consent:true });

export const getSponsors = () => dbList("sponsors", SPONSOR_ITEMS,
  () => prisma.sponsor.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
  r => ({ ...base(r), name:r.name, tier:r.tier, description:r.description, logo:media(r.logoSrc,r.logoAlt), website:r.website || undefined, contributed:r.contributed ?? undefined }));

export const getFunds = () => dbList("funds", FUND_ITEMS,
  () => prisma.fund.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
  r => ({ ...base(r), name:r.name, icon:r.icon, goal:r.goal, raised:r.raised, description:r.description }));

export const getSessionSteps = () => dbList("session-steps", SESSION_STEP_ITEMS,
  () => prisma.sessionStep.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
  r => ({ ...base(r), time:r.time, title:r.title, description:r.description, photo:media(r.photoSrc,r.photoAlt) }),
  { consent:true });

export const getFaqs = () => dbList("faqs", FAQ_ITEMS,
  () => prisma.faq.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
  r => ({ ...base(r), question:r.question, answer:r.answer }));

export const getBringList = () => dbList("bring-list", BRING_ITEMS,
  () => prisma.bringItem.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
  r => ({ ...base(r), icon:r.icon, title:r.title, description:r.description }));

export async function getGallery(limit?: number): Promise<GalleryItem[]> {
  const all = await dbList("gallery", GALLERY_ITEMS,
    () => prisma.galleryItem.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
    r => ({ ...base(r), photo:media(r.photoSrc,r.photoAlt), caption:r.caption || undefined, photoConsent:r.photoConsent }),
    { consent:true });
  const withPhotos = all.filter(g => g.photo !== null);
  return limit ? withPhotos.slice(0, limit) : withPhotos;
}

export async function getNews(category?: NewsCategory, limit = 3): Promise<NewsItem[]> {
  const all = await dbList("news", NEWS_ITEMS,
    () => prisma.news.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
    r => ({ ...base(r), title:r.title, excerpt:r.excerpt, date:new Date(r.date).toISOString().slice(0,10), category:r.category as NewsCategory, photo:media(r.photoSrc,r.photoAlt), href:r.href || undefined }),
    { consent:true });
  return all.filter(n => !category || n.category === category || n.category === "general")
    .sort((a,b) => b.date.localeCompare(a.date)).slice(0,limit);
}

export async function getEvents(): Promise<{ upcoming: EventItem[]; past: EventItem[] }> {
  const all = await dbList("events", EVENT_ITEMS,
    () => prisma.event.findMany({ orderBy: [{ start:"asc" }, { order:"asc" }] }),
    r => ({ ...base(r), title:r.title, type:r.type as EventItem["type"], start:new Date(r.start).toISOString(), end:r.end ? new Date(r.end).toISOString() : undefined, venue:r.venue || "", address:r.address || undefined, description:r.description || "", photo:media(r.photoSrc,r.photoAlt), photoConsent:r.photoConsent, result:r.result || undefined }),
    { consent:true });
  const now = Date.now();
  const endMs = (e:EventItem) => e.end ? new Date(e.end).getTime() : new Date(e.start).getTime() + 3*3600_000;
  const startMs = (e:EventItem) => new Date(e.start).getTime();
  return {
    upcoming: all.filter(e => Number.isNaN(endMs(e)) || endMs(e) >= now).sort((a,b)=>startMs(a)-startMs(b)),
    past: all.filter(e => endMs(e) < now).sort((a,b)=>startMs(b)-startMs(a)),
  };
}

export async function getActiveAlert(): Promise<AlertItem | null> {
  const all = await dbList("alerts", ALERT_ITEMS,
    () => prisma.alert.findMany({ orderBy: [{ order:"asc" }, { createdAt:"desc" }] }),
    r => ({ ...base(r), message:r.message, severity:r.severity as AlertItem["severity"], linkLabel:r.linkLabel || undefined, linkHref:r.linkHref || undefined, startsAt:r.startsAt?.toISOString(), endsAt:r.endsAt?.toISOString() }));
  const now=Date.now();
  const live=all.filter(a => now >= (a.startsAt ? new Date(a.startsAt).getTime() : -Infinity) && now <= (a.endsAt ? new Date(a.endsAt).getTime() : Infinity));
  live.sort((a,b)=>Number(b.severity==="urgent")-Number(a.severity==="urgent") || a.order-b.order);
  return live[0] ?? null;
}

export async function getHeading(key:string):Promise<HeadingContent> {
  const fallback=HEADINGS[key] ?? { titleBefore:"" };
  try {
    const row=await prisma.heading.findUnique({ where:{ id:key } });
    if (!row) return fallback;
    return { eyebrow:row.eyebrow || undefined, titleBefore:row.titleBefore || "", highlight:row.highlight || undefined, titleAfter:row.titleAfter || undefined, intro:row.intro || undefined };
  } catch(err) {
    console.error(`[content] heading ${key} failed; using seed fallback`,err);
    return fallback;
  }
}
