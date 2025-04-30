import { defineCollection, z } from "astro:content";
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/blog" }),
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
    heroImage: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().optional(),
    demoURL: z.string().optional(),
    repoURL: z.string().optional(),
  }),
});



export const collections = { blog, 
  projects 

};
