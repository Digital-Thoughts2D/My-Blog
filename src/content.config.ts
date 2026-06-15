import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    // טעינת קבצי המרקדאון מהתיקייה
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    
    // הגדרת הסכמה של ה-Frontmatter
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            featuredImage: image().optional(),
            heroImage: image().optional(),
            tags: z.array(z.string()).optional(),
            featured: z.boolean().optional().default(false),
        }),
});

export const collections = { blog };