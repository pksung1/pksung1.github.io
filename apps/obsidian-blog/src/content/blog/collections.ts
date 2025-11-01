import { defineCollection, z } from 'astro:content';
import { globLoader } from '../common/loader';

const blogPath = 'content/obsidian-content/blog/**/*.md';

export const collections = defineCollection({
  loader: globLoader({ pattern: blogPath }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string().optional(),
    published_date: z.date().optional(),
    updated_date: z.date().optional(),
    tags: z.array(z.string()).default([]).optional(),
    is_published: z.boolean().default(false),
  }),
});
