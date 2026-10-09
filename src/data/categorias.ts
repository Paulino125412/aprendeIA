export type CategoriaSlug =
  | 'fundamentos'
  | 'tipos-de-ia'
  | 'ia-texto'
  | 'ia-imagenes'
  | 'ia-video'
  | 'ia-audio'
  | 'ia-codigo'
  | 'ia-productividad'
  | 'prompting'
  | 'etica';

export interface CategoriaClases {
  texto: string;
  bordeLateral: string;
  subrayado: string;
  badge?: string;
  borde?: string;
  fondoSuave?: string;
}

export interface Categoria {
  slug: CategoriaSlug;
  nombre: string;
  descripcion: string;
  emoji?: string;
  clases: CategoriaClases;
}

export const CATEGORIAS: readonly Categoria[] = [
  {
    slug: 'fundamentos',
    nombre: 'Fundamentos',
    descripcion: 'Qué es la IA, cómo funciona y por qué importa',
    emoji: '🧠',
    clases: {
      texto: 'text-indigo-700 dark:text-indigo-400',
      bordeLateral: 'border-l-indigo-600 dark:border-l-indigo-400',
      subrayado: 'border-b-indigo-600 dark:border-b-indigo-400',
      badge: 'text-indigo-700 dark:text-indigo-400',
      borde: 'border-indigo-600 dark:border-indigo-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'tipos-de-ia',
    nombre: 'Tipos de IA',
    descripcion: 'Todas las IAs que existen y para qué sirve cada una',
    emoji: '🗺️',
    clases: {
      texto: 'text-emerald-700 dark:text-emerald-400',
      bordeLateral: 'border-l-emerald-600 dark:border-l-emerald-400',
      subrayado: 'border-b-emerald-600 dark:border-b-emerald-400',
      badge: 'text-emerald-700 dark:text-emerald-400',
      borde: 'border-emerald-600 dark:border-emerald-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'ia-texto',
    nombre: 'IAs de Texto',
    descripcion: 'ChatGPT, Gemini, Claude, Copilot y más',
    emoji: '💬',
    clases: {
      texto: 'text-blue-700 dark:text-blue-400',
      bordeLateral: 'border-l-blue-600 dark:border-l-blue-400',
      subrayado: 'border-b-blue-600 dark:border-b-blue-400',
      badge: 'text-blue-700 dark:text-blue-400',
      borde: 'border-blue-600 dark:border-blue-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'ia-imagenes',
    nombre: 'IAs de Imagen',
    descripcion: 'Midjourney, DALL-E, Stable Diffusion y más',
    emoji: '🎨',
    clases: {
      texto: 'text-rose-700 dark:text-rose-400',
      bordeLateral: 'border-l-rose-600 dark:border-l-rose-400',
      subrayado: 'border-b-rose-600 dark:border-b-rose-400',
      badge: 'text-rose-700 dark:text-rose-400',
      borde: 'border-rose-600 dark:border-rose-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'ia-video',
    nombre: 'IAs de Video',
    descripcion: 'Sora, Runway, Pika, Kling y más',
    emoji: '🎬',
    clases: {
      texto: 'text-orange-700 dark:text-orange-400',
      bordeLateral: 'border-l-orange-600 dark:border-l-orange-400',
      subrayado: 'border-b-orange-600 dark:border-b-orange-400',
      badge: 'text-orange-700 dark:text-orange-400',
      borde: 'border-orange-600 dark:border-orange-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'ia-audio',
    nombre: 'IAs de Audio',
    descripcion: 'Suno, ElevenLabs, Whisper y más',
    emoji: '🎵',
    clases: {
      texto: 'text-violet-700 dark:text-violet-400',
      bordeLateral: 'border-l-violet-600 dark:border-l-violet-400',
      subrayado: 'border-b-violet-600 dark:border-b-violet-400',
      badge: 'text-violet-700 dark:text-violet-400',
      borde: 'border-violet-600 dark:border-violet-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'ia-codigo',
    nombre: 'IAs para Código',
    descripcion: 'GitHub Copilot, Cursor, Replit y más',
    emoji: '💻',
    clases: {
      texto: 'text-green-700 dark:text-green-400',
      bordeLateral: 'border-l-green-600 dark:border-l-green-400',
      subrayado: 'border-b-green-600 dark:border-b-green-400',
      badge: 'text-green-700 dark:text-green-400',
      borde: 'border-green-600 dark:border-green-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'ia-productividad',
    nombre: 'Productividad',
    descripcion: 'Gamma, Canva AI, Notion AI y más',
    emoji: '⚡',
    clases: {
      texto: 'text-amber-700 dark:text-amber-400',
      bordeLateral: 'border-l-amber-600 dark:border-l-amber-400',
      subrayado: 'border-b-amber-600 dark:border-b-amber-400',
      badge: 'text-amber-700 dark:text-amber-400',
      borde: 'border-amber-600 dark:border-amber-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'prompting',
    nombre: 'Prompting',
    descripcion: 'Cómo hablarle a cualquier IA para obtener mejores resultados',
    emoji: '✍️',
    clases: {
      texto: 'text-cyan-700 dark:text-cyan-400',
      bordeLateral: 'border-l-cyan-600 dark:border-l-cyan-400',
      subrayado: 'border-b-cyan-600 dark:border-b-cyan-400',
      badge: 'text-cyan-700 dark:text-cyan-400',
      borde: 'border-cyan-600 dark:border-cyan-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'etica',
    nombre: 'Ética y Responsabilidad',
    descripcion: 'Uso responsable, privacidad y derechos de autor',
    emoji: '⚖️',
    clases: {
      texto: 'text-zinc-700 dark:text-zinc-400',
      bordeLateral: 'border-l-zinc-600 dark:border-l-zinc-400',
      subrayado: 'border-b-zinc-600 dark:border-b-zinc-400',
      badge: 'text-zinc-700 dark:text-zinc-400',
      borde: 'border-zinc-600 dark:border-zinc-400',
      fondoSuave: 'bg-superficie',
    },
  },
] as const;

export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((cat) => cat.slug === slug);
}
