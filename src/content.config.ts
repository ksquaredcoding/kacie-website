// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const projects = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/projects" }),
    schema: z.object({
        title: z.string(),
        blurb: z.string(),
        client: z.string(),
        images: z.array(z.string()),
        year: z.array(z.number()).optional(),
        order: z.number(),
        iframe: z.string().optional(),
        projectType: z.string().optional(),
    }),
 });

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };