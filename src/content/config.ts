import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!_*/**'] }),
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
