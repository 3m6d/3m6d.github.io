import { defineCollection, z } from 'astro:content';

// One card per role. New roles = new markdown files; no layout changes needed.
const experience = defineCollection({
  type: 'content',
  schema: z.object({
    role: z.string(),
    org: z.string(),
    location: z.string().optional(),
    startDate: z.string(), // e.g. "Jan 2025"
    endDate: z.string(),   // e.g. "Present"
    bullets: z.array(z.string()),
    order: z.number(), // lower = more recent, controls display order
  }),
});

// One card per project. New projects = new markdown files; no layout changes needed.
const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(), // one/two-line card description
    stack: z.array(z.string()).default([]),
    period: z.string().optional(),
    role: z.string().optional(),
    repoUrl: z.string().url().optional(),
    demoUrl: z.string().url().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const publications = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    location: z.string().optional(),
    date: z.string(),
    doi: z.string().optional(),
    doiUrl: z.string().url().optional(),
    summary: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { experience, projects, publications };
