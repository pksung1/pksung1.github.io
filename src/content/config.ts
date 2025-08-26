import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

import path from 'path';

const blogPath = path.join(import.meta.dirname, 'blog');

const blogCollection = defineCollection({
  loader: glob({ pattern: [
    `${blogPath}/**/*.md`,
    `!${blogPath}/_*/**`,
    `!${blogPath}/.git/**`,
    `!${blogPath}/node_modules/**`,
    `!${blogPath}/.obsidian/**`,
  ] }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  'blog': blogCollection,
};
