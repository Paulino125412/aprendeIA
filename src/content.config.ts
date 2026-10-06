import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articulos = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articulos' }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().max(160, 'La descripción no debe exceder 160 caracteres'),
    categoria: z.enum([
      'fundamentos',
      'prompting',
      'profesion',
      'estudiar',
      'vida-diaria',
      'etica',
      'herramientas',
      'automatizacion',
      'recursos',
    ]),
    fecha: z.coerce.date(),
    actualizado: z.coerce.date().optional(),
    orden: z.number().default(100),
    destacado: z.boolean().default(false),
    etiquetas: z.array(z.string()).default([]),
  }),
});

export const collections = {
  articulos,
};
