// Starter content. Built from lib/data.ts so nothing is duplicated.
// Photos are `null` until real images exist. To add one, drop the file in
// /public/images/... and set e.g.
//   photo: { src: "/images/coaches/belven.jpg", alt: "Coach Belven Hope" }
import {
  COACHES,
  PROGRAMS,
  AWARDS,
  SPONSORS,
  DONATION_FUNDS,
  SESSION_BREAKDOWN,
  CONTACT,
} from "@/lib/data";
import type {
  CoachItem,
  AgeGroupItem,
  AwardItem,
  SponsorItem,
  FundItem,
  NewsItem,
  SessionStepItem,
  HeadingContent,
  AlertItem,
  EventItem,
  FaqItem,
  BringItem,
  GalleryItem,
} from "./types";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const COACH_ITEMS: CoachItem[] = COACHES.map((c, i) => ({
  id: slug(c.name) + "-" + i,
  order: i,
  published: true,
  ...c,
  photo: null,
}));

export const AGE_GROUP_ITEMS: AgeGroupItem[] = PROGRAMS.map((p, i) => ({
  id: slug(p.name),
  order: i,
  published: true,
  ...p,
  photo: null,
}));

export const AWARD_ITEMS: AwardItem[] = AWARDS.map((a, i) => ({
  id: slug(a.title),
  order: i,
  published: true,
  ...a,
  photo: null,
}));

export const SPONSOR_ITEMS: SponsorItem[] = SPONSORS.map((s, i) => ({
  id: slug(s.name),
  order: i,
  published: true,
  ...s,
  logo: null,
}));

export const FUND_ITEMS: FundItem[] = DONATION_FUNDS.map((f, i) => ({
  id: slug(f.name),
  order: i,
  published: true,
  ...f,
}));

export const SESSION_STEP_ITEMS: SessionStepItem[] = SESSION_BREAKDOWN.map((s, i) => ({
  id: slug(s.title),
  order: i,
  published: true,
  ...s,
  photo: null,
}));

// Only facts that are already true on the site — edit or replace freely.
export const NEWS_ITEMS: NewsItem[] = [
  {
    id: "training-every-friday",
    order: 0,
    published: true,
    title: "Training every Friday",
    excerpt: `${CONTACT.trainingTime} at ${CONTACT.venue}. No sign-up, no cost, no experience needed.`,
    date: "2026-09-24",
    category: "training",
    photo: null,
    href: "/contact",
  },
  {
    id: "now-accepting-players",
    order: 1,
    published: true,
    title: "Now accepting players",
    excerpt: "Every child from U8 to U14 is welcome, whatever their experience.",
    date: "2026-09-24",
    category: "players",
    photo: null,
    href: "/training",
  },
  {
    id: "support-the-funds",
    order: 2,
    published: true,
    title: "Help us keep it free",
    excerpt: "The General and Equipment funds keep coaching, transport and kit going for every player.",
    date: "2026-09-24",
    category: "sponsors",
    photo: null,
    href: "/donate",
  },
];

export const ALERT_ITEMS: AlertItem[] = [
  {
    id: "default-welcome",
    order: 10,
    published: true,
    severity: "info",
    message: `Free & open to every child, U8–U14 · Training ${CONTACT.trainingDay.toLowerCase()}, ${CONTACT.trainingTime}`,
    linkLabel: "Details",
    linkHref: "/training",
  },
  // Example of an urgent alert (uncomment to test):
  // {
  //   id: "wet-weather",
  //   order: 0,
  //   published: true,
  //   severity: "urgent",
  //   message: "Training cancelled this Friday — wet weather.",
  //   endsAt: "2026-10-03T00:00:00+02:00",
  // },
];

// Empty on purpose: add real fixtures here (or in the CMS). Example:
// {
//   id: "spring-tournament",
//   order: 0,
//   published: true,
//   title: "Spring Tournament",
//   type: "tournament",
//   start: "2026-10-10T09:00:00+02:00",
//   end: "2026-10-10T14:00:00+02:00",
//   venue: CONTACT.venue,
//   address: CONTACT.address,
//   description: "All age groups play.",
//   photo: null,
// },
export const EVENT_ITEMS: EventItem[] = [];

// Photos need guardian consent. Example:
// { id: "match-day-1", order: 0, published: true, caption: "Match day",
//   photo: { src: "/images/gallery/match-day-1.jpg", alt: "Players warming up" },
//   photoConsent: true },
export const GALLERY_ITEMS: GalleryItem[] = [];

// DRAFT answers built only from facts already on the site — please review.
export const FAQ_ITEMS: FaqItem[] = [
  { id: "cost", order: 0, published: true, question: "Does it cost anything?", answer: "No. Hope Rugby Academy is free for every player. Donations and sponsors cover coaching, transport and equipment." },
  { id: "who", order: 1, published: true, question: "Who can join?", answer: "Any child from U8 to U14, whatever their experience. First-timers train alongside kids who have played for years." },
  { id: "when-where", order: 2, published: true, question: "When and where do you train?", answer: `${CONTACT.trainingDay}, ${CONTACT.trainingTime}, at ${CONTACT.venue}, ${CONTACT.address}.` },
  { id: "signup", order: 3, published: true, question: "Do we need to sign up first?", answer: "You can simply show up on a Friday. If you'd like to talk first, send an enquiry on the Join page or message us on WhatsApp and a coach will get back to you." },
  { id: "bring", order: 4, published: true, question: "What should my child bring?", answer: "See the “What to bring” list above. If you're unsure about anything, ask a coach before buying kit." },
  { id: "help", order: 5, published: true, question: "How can I help the academy?", answer: "Donations to the General and Equipment funds keep training free, and businesses can become sponsors. Get in touch to talk about other ways to help." },
  { id: "contact", order: 6, published: true, question: "Who do I contact with a question?", answer: `Call ${CONTACT.phone}, WhatsApp ${CONTACT.whatsapp}, or email ${CONTACT.email}.` },
];

// DRAFT — please review.
export const BRING_ITEMS: BringItem[] = [
  { id: "boots", order: 0, published: true, icon: "👟", title: "Rugby boots", description: "Boots with studs if you have them. Not sure? Ask a coach before you buy anything." },
  { id: "mouthguard", order: 1, published: true, icon: "🦷", title: "Mouthguard", description: "Protects teeth during contact drills. Ask a coach if you're unsure which to get." },
  { id: "water", order: 2, published: true, icon: "💧", title: "Water bottle", description: "Bring a full bottle — sessions run for two hours." },
  { id: "attitude", order: 3, published: true, icon: "😄", title: "A great attitude", description: "No experience needed. Just bring energy and a willingness to have fun." },
];

export const HEADINGS: Record<string, HeadingContent> = {
  coaches: {
    eyebrow: "Coaches",
    titleBefore: "Volunteers who show up ",
    highlight: "every Friday.",
    intro:
      "Every coach at Hope Rugby Academy gives their time freely — bringing real playing experience and genuine care to every session at Zwaanswyk Academy Primary.",
  },
  players: {
    eyebrow: "Players",
    titleBefore: "A pathway from ",
    highlight: "U8 to U14.",
    intro: "Every age group trains together on Fridays, with coaching tailored to where each player is at.",
  },
  training: {
    eyebrow: "Training",
    titleBefore: "One session, ",
    highlight: "every Friday.",
    intro:
      "All age groups train together at the same time and place — no need to check a separate schedule per group.",
  },
  sponsors: {
    eyebrow: "Sponsors",
    titleBefore: "Supported by our ",
    highlight: "community.",
    intro:
      "Hope Rugby Academy runs for free because these partners help cover what the academy can’t on its own.",
  },
  "players.awards": {
    titleBefore: "End-of-season ",
    highlight: "awards.",
    intro: "Recognising more than just talent — effort, spirit, and growth all get celebrated.",
  },
  "training.session": {
    titleBefore: "What a session ",
    highlight: "looks like.",
    intro: "Five blocks, two hours, every Friday.",
  },
  "sponsors.partners": {
    titleBefore: "Our ",
    highlight: "partners.",
  },
  news: {
    eyebrow: "Updates",
    titleBefore: "Latest ",
    highlight: "news.",
  },
  events: {
    eyebrow: "Events",
    titleBefore: "Match days, tournaments & ",
    highlight: "more.",
    intro: "Add any event to your calendar so you never miss a date.",
  },
  faq: {
    eyebrow: "FAQ",
    titleBefore: "Good questions, ",
    highlight: "quick answers.",
    intro: "Everything parents ask before their first Friday.",
  },
  "faq.bring": {
    titleBefore: "What to ",
    highlight: "bring.",
    intro: "Keep it simple — here is what your child needs on the day.",
  },
  gallery: {
    eyebrow: "Gallery",
    titleBefore: "Friday nights, ",
    highlight: "in pictures.",
    intro: "Photos are shared with parent or guardian consent.",
  },
  join: {
    eyebrow: "Join",
    titleBefore: "Let's get your child ",
    highlight: "playing.",
    intro: "Send us a few details and a coach will get back to you — usually within a couple of days. You can also just show up on a Friday.",
  },
};
