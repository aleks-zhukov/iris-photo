import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const portfolio = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
	schema: z.object({
		title: z.string(),
		image: z.string(),
		order: z.number().default(0),
		category: z.string().optional(),
		alt: z.string().optional(),
	}),
});

export const collections = { portfolio };
