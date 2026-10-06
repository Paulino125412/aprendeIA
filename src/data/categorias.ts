export type CategoriaSlug =
  | 'fundamentos'
  | 'prompting'
  | 'profesion'
  | 'estudiar'
  | 'vida-diaria'
  | 'etica'
  | 'herramientas'
  | 'automatizacion'
  | 'recursos';

export interface CategoriaClases {
  badge: string;
  borde: string;
  fondoSuave: string;
  texto: string;
}

export interface Categoria {
  slug: CategoriaSlug;
  nombre: string;
  descripcion: string;
  emoji: string;
  clases: CategoriaClases;
}

export const CATEGORIAS: readonly Categoria[] = [
  {
    slug: 'fundamentos',
    nombre: 'Fundamentos de la IA',
    descripcion: 'Conceptos clave, arquitecturas y funcionamiento básico de los modelos de lenguaje.',
    emoji: '🧠',
    clases: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-300 dark:border-indigo-800',
      borde: 'border-indigo-200 dark:border-indigo-800',
      fondoSuave: 'bg-indigo-50/50 dark:bg-indigo-950/30',
      texto: 'text-indigo-600 dark:text-indigo-400',
    },
  },
  {
    slug: 'prompting',
    nombre: 'Prompting',
    descripcion: 'Técnicas, estructuras y patrones para formular instrucciones precisas y reproducibles.',
    emoji: '✍️',
    clases: {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800',
      borde: 'border-emerald-200 dark:border-emerald-800',
      fondoSuave: 'bg-emerald-50/50 dark:bg-emerald-950/30',
      texto: 'text-emerald-600 dark:text-emerald-400',
    },
  },
  {
    slug: 'profesion',
    nombre: 'IA en tu profesión',
    descripcion: 'Casos prácticos de aplicación en educación, programación, negocios, diseño y más.',
    emoji: '💼',
    clases: {
      badge: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-300 dark:border-sky-800',
      borde: 'border-sky-200 dark:border-sky-800',
      fondoSuave: 'bg-sky-50/50 dark:bg-sky-950/30',
      texto: 'text-sky-600 dark:text-sky-400',
    },
  },
  {
    slug: 'estudiar',
    nombre: 'IA para estudiar',
    descripcion: 'Métodos de estudio activo, síntesis documental, práctica deliberada y preparación de exámenes.',
    emoji: '📚',
    clases: {
      badge: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800',
      borde: 'border-amber-200 dark:border-amber-800',
      fondoSuave: 'bg-amber-50/50 dark:bg-amber-950/30',
      texto: 'text-amber-600 dark:text-amber-400',
    },
  },
  {
    slug: 'vida-diaria',
    nombre: 'IA en la vida diaria',
    descripcion: 'Organización doméstica, finanzas personales, planificación de viajes y tareas cotidianas.',
    emoji: '🌱',
    clases: {
      badge: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-300 dark:border-rose-800',
      borde: 'border-rose-200 dark:border-rose-800',
      fondoSuave: 'bg-rose-50/50 dark:bg-rose-950/30',
      texto: 'text-rose-600 dark:text-rose-400',
    },
  },
  {
    slug: 'etica',
    nombre: 'Ética y uso responsable',
    descripcion: 'Privacidad de datos, sesgos algorítmicos, verificación de fuentes y derechos de autor.',
    emoji: '⚖️',
    clases: {
      badge: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-300 dark:border-violet-800',
      borde: 'border-violet-200 dark:border-violet-800',
      fondoSuave: 'bg-violet-50/50 dark:bg-violet-950/30',
      texto: 'text-violet-600 dark:text-violet-400',
    },
  },
  {
    slug: 'herramientas',
    nombre: 'Herramientas',
    descripcion: 'Comparativas, análisis de modelos, editores y software potenciado por inteligencia artificial.',
    emoji: '🛠️',
    clases: {
      badge: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-300 dark:border-cyan-800',
      borde: 'border-cyan-200 dark:border-cyan-800',
      fondoSuave: 'bg-cyan-50/50 dark:bg-cyan-950/30',
      texto: 'text-cyan-600 dark:text-cyan-400',
    },
  },
  {
    slug: 'automatizacion',
    nombre: 'Automatización y agentes',
    descripcion: 'Flujos de trabajo conectados, integraciones con APIs y sistemas con toma de acción autónoma.',
    emoji: '⚡',
    clases: {
      badge: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800',
      borde: 'border-orange-200 dark:border-orange-800',
      fondoSuave: 'bg-orange-50/50 dark:bg-orange-950/30',
      texto: 'text-orange-600 dark:text-orange-400',
    },
  },
  {
    slug: 'recursos',
    nombre: 'Recursos',
    descripcion: 'Glosarios, plantillas descargables, guías de referencia rápida y bibliografía seleccionada.',
    emoji: '📦',
    clases: {
      badge: 'bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700',
      borde: 'border-slate-300 dark:border-slate-700',
      fondoSuave: 'bg-slate-100/60 dark:bg-slate-800/40',
      texto: 'text-slate-600 dark:text-slate-400',
    },
  },
] as const;

export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((cat) => cat.slug === slug);
}
