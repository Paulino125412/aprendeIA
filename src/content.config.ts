import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(160, 'La descripción no debe exceder 160 caracteres'),
    categoria: z.enum([
      'fundamentos',
      'tipos-de-ia',
      'ia-texto',
      'ia-imagenes',
      'ia-video',
      'ia-audio',
      'ia-codigo',
      'ia-productividad',
      'prompting',
      'etica',
    ]),
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    orden: z.number().default(100),
    destacado: z.boolean().default(false),
    etiquetas: z.array(z.string()).default([]),
    tags: z.array(z.string()).optional(),
    nivel: z.string().optional(),
  }).transform((data) => ({
    ...data,
    etiquetas: data.etiquetas.length > 0 ? data.etiquetas : (data.tags || []),
  })),
});

export const collections = {
  articulos,
};
