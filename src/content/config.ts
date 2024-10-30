import { defineCollection, z } from 'astro:content';

const homeCollection = defineCollection({
  type: 'content',
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().transform((s) => new Date(s)),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    project: z.boolean().default(false),
    link: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  home: homeCollection,
};
