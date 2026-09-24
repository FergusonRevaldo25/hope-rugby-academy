import { config } from "dotenv";
config({ path: ".env.local" });
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
} from "../lib/content/seed";
import { prisma } from "../lib/prisma";

async function main() {
  console.log("Seeding Hope Rugby content into Neon…");

  for (const x of COACH_ITEMS)
    await prisma.coach.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        name: x.name,
        role: x.role,
        bio: x.bio,
        focus: x.focus,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        name: x.name,
        role: x.role,
        bio: x.bio,
        focus: x.focus,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
      },
    });

  for (const x of AGE_GROUP_ITEMS)
    await prisma.ageGroup.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        ageRange: x.ageRange,
        name: x.name,
        focus: x.focus,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        photoConsent: x.photoConsent === true,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        ageRange: x.ageRange,
        name: x.name,
        focus: x.focus,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        photoConsent: x.photoConsent === true,
      },
    });

  for (const x of AWARD_ITEMS)
    await prisma.award.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        icon: x.icon,
        title: x.title,
        description: x.description,
        recipient: x.recipient ?? null,
        season: x.season ?? null,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        photoConsent: x.photoConsent === true,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        icon: x.icon,
        title: x.title,
        description: x.description,
        recipient: x.recipient ?? null,
        season: x.season ?? null,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        photoConsent: x.photoConsent === true,
      },
    });

  for (const x of SPONSOR_ITEMS)
    await prisma.sponsor.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        name: x.name,
        tier: x.tier,
        description: x.description,
        logoSrc: x.logo?.src ?? null,
        logoAlt: x.logo?.alt ?? null,
        website: x.website ?? null,
        contributed: x.contributed ?? null,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        name: x.name,
        tier: x.tier,
        description: x.description,
        logoSrc: x.logo?.src ?? null,
        logoAlt: x.logo?.alt ?? null,
        website: x.website ?? null,
        contributed: x.contributed ?? null,
      },
    });

  for (const x of FUND_ITEMS)
    await prisma.fund.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        name: x.name,
        icon: x.icon,
        goal: x.goal,
        raised: x.raised,
        description: x.description,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        name: x.name,
        icon: x.icon,
        goal: x.goal,
        raised: x.raised,
        description: x.description,
      },
    });

  for (const x of SESSION_STEP_ITEMS)
    await prisma.sessionStep.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        time: x.time,
        title: x.title,
        description: x.description,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        time: x.time,
        title: x.title,
        description: x.description,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
      },
    });

  for (const x of NEWS_ITEMS)
    await prisma.news.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        title: x.title,
        excerpt: x.excerpt,
        date: new Date(x.date),
        category: x.category,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        href: x.href ?? null,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        title: x.title,
        excerpt: x.excerpt,
        date: new Date(x.date),
        category: x.category,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        href: x.href ?? null,
      },
    });

  for (const x of ALERT_ITEMS)
    await prisma.alert.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        message: x.message,
        severity: x.severity,
        linkLabel: x.linkLabel ?? null,
        linkHref: x.linkHref ?? null,
        startsAt: x.startsAt ? new Date(x.startsAt) : null,
        endsAt: x.endsAt ? new Date(x.endsAt) : null,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        message: x.message,
        severity: x.severity,
        linkLabel: x.linkLabel ?? null,
        linkHref: x.linkHref ?? null,
        startsAt: x.startsAt ? new Date(x.startsAt) : null,
        endsAt: x.endsAt ? new Date(x.endsAt) : null,
      },
    });

  for (const x of EVENT_ITEMS)
    await prisma.event.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        title: x.title,
        type: x.type,
        start: new Date(x.start),
        end: x.end ? new Date(x.end) : null,
        venue: x.venue ?? null,
        address: x.address ?? null,
        description: x.description ?? null,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        photoConsent: x.photoConsent === true,
        result: x.result ?? null,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        title: x.title,
        type: x.type,
        start: new Date(x.start),
        end: x.end ? new Date(x.end) : null,
        venue: x.venue ?? null,
        address: x.address ?? null,
        description: x.description ?? null,
        photoSrc: x.photo?.src ?? null,
        photoAlt: x.photo?.alt ?? null,
        photoConsent: x.photoConsent === true,
        result: x.result ?? null,
      },
    });

  for (const x of FAQ_ITEMS)
    await prisma.faq.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        question: x.question,
        answer: x.answer,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        question: x.question,
        answer: x.answer,
      },
    });

  for (const x of BRING_ITEMS)
    await prisma.bringItem.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        icon: x.icon,
        title: x.title,
        description: x.description,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        icon: x.icon,
        title: x.title,
        description: x.description,
      },
    });

  for (const x of GALLERY_ITEMS)
    await prisma.galleryItem.upsert({
      where: { id: x.id },
      update: {
        order: x.order,
        published: x.published,
        photoSrc: x.photo?.src ?? "",
        photoAlt: x.photo?.alt ?? null,
        caption: x.caption ?? null,
        photoConsent: x.photoConsent === true,
      },
      create: {
        id: x.id,
        order: x.order,
        published: x.published,
        photoSrc: x.photo?.src ?? "",
        photoAlt: x.photo?.alt ?? null,
        caption: x.caption ?? null,
        photoConsent: x.photoConsent === true,
      },
    });

  for (const [id, x] of Object.entries(HEADINGS))
    await prisma.heading.upsert({
      where: { id },
      update: {
        eyebrow: x.eyebrow ?? null,
        titleBefore: x.titleBefore ?? null,
        highlight: x.highlight ?? null,
        titleAfter: x.titleAfter ?? null,
        intro: x.intro ?? null,
      },
      create: {
        id,
        eyebrow: x.eyebrow ?? null,
        titleBefore: x.titleBefore ?? null,
        highlight: x.highlight ?? null,
        titleAfter: x.titleAfter ?? null,
        intro: x.intro ?? null,
      },
    });

  console.log("Seed complete.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
