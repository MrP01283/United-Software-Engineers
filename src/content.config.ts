import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Текст на трёх языках (для проектов). */
const localized = z.object({ ru: z.string(), kk: z.string(), en: z.string() });

/**
 * Блог: src/content/blog/<язык>/<slug>.md
 * Один и тот же slug в папках ru/kk/en = одна запись на трёх языках
 * (переключатель языков ведёт между ними).
 */
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

/** Проекты: src/content/projects/<slug>.md — один файл, тексты на трёх языках внутри. */
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: localized,
    description: localized,
    stack: z.array(z.string()),
    status: z.enum(['active', 'done', 'idea']),
    repo: z.string().optional(),
    demo: z.string().optional(),
    order: z.number().default(100),
  }),
});

export const collections = { blog, projects };
