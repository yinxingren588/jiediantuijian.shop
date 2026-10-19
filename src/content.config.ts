import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    updatedDate: z.string(),
    author: z.string().default('节点推荐评测编辑部'),
    tags: z.array(z.string()).default([]),
    category: z.string().default('选购与避坑'),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/guides" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    platform: z.string(),
    publishDate: z.string(),
    updatedDate: z.string(),
    author: z.string().default('节点推荐技术支持组'),
    recommendedClients: z.array(z.string()).default([]),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/glossary" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    term: z.string(),
    category: z.string(),
    publishDate: z.string(),
    updatedDate: z.string(),
  }),
});

export const collections = { blog, guides, glossary };
