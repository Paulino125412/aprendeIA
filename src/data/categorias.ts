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
  clases: CategoriaClases;
}

export const CATEGORIAS: readonly Categoria[] = [
  {
    slug: 'fundamentos',
    nombre: 'Fundamentos de la IA',
    descripcion: 'Conceptos clave, arquitecturas y funcionamiento básico de los modelos de lenguaje.',
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
    slug: 'prompting',
    nombre: 'Prompting',
    descripcion: 'Técnicas, estructuras y patrones para formular instrucciones precisas y reproducibles.',
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
    slug: 'profesion',
    nombre: 'IA en tu profesión',
    descripcion: 'Casos prácticos de aplicación en educación, programación, negocios, diseño y más.',
    clases: {
      texto: 'text-sky-700 dark:text-sky-400',
      bordeLateral: 'border-l-sky-600 dark:border-l-sky-400',
      subrayado: 'border-b-sky-600 dark:border-b-sky-400',
      badge: 'text-sky-700 dark:text-sky-400',
      borde: 'border-sky-600 dark:border-sky-400',
      fondoSuave: 'bg-superficie',
    },
  },
  {
    slug: 'estudiar',
    nombre: 'IA para estudiar',
    descripcion: 'Métodos de estudio activo, síntesis documental, práctica deliberada y preparación de exámenes.',
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
    slug: 'vida-diaria',
    nombre: 'IA en la vida diaria',
    descripcion: 'Organización doméstica, finanzas personales, planificación de viajes y tareas cotidianas.',
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
    slug: 'etica',
    nombre: 'Ética y uso responsable',
    descripcion: 'Privacidad de datos, sesgos algorítmicos, verificación de fuentes y derechos de autor.',
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
    slug: 'herramientas',
    nombre: 'Herramientas',
    descripcion: 'Comparativas, análisis de modelos, editores y software potenciado por inteligencia artificial.',
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
    slug: 'automatizacion',
    nombre: 'Automatización y agentes',
    descripcion: 'Flujos de trabajo conectados, integraciones con APIs y sistemas con toma de acción autónoma.',
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
    slug: 'recursos',
    nombre: 'Recursos',
    descripcion: 'Glosarios, plantillas descargables, guías de referencia rápida y bibliografía seleccionada.',
    clases: {
      texto: 'text-slate-700 dark:text-slate-400',
      bordeLateral: 'border-l-slate-600 dark:border-l-slate-400',
      subrayado: 'border-b-slate-600 dark:border-b-slate-400',
      badge: 'text-slate-700 dark:text-slate-400',
      borde: 'border-slate-600 dark:border-slate-400',
      fondoSuave: 'bg-superficie',
    },
  },
] as const;

export function getCategoria(slug: string): Categoria | undefined {
  return CATEGORIAS.find((cat) => cat.slug === slug);
}
