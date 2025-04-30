import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    slug: z.string().optional(),
    featured: z.boolean().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).optional(),
    author: z.object({
      name: z.string(),
      link: z.string().url(),
    }).optional(),
    reviewedBy: z
      .object({
        name: z.string(),
        link: z.string().url(),
      })
      .optional(),
    heroImage: z.string().optional()
  })
});

export const collections = {
  'blog': blogCollection
};
