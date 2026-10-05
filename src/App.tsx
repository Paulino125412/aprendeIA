import React, { useState, useEffect } from 'react';
import BeneficiosIA from './components/BeneficiosIA';
import ConstructorPrompts from './components/ConstructorPrompts';

export default function App(): React.JSX.Element {
  const [tabActual, setTabActual] = useState<'inicio' | 'beneficios' | 'prompts' | 'arquitectura'>('inicio');
  const [esOscuro, setEsOscuro] = useState<boolean>(false);

  useEffect(() => {
    if (esOscuro) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [esOscuro]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans transition-colors duration-200">
      {/* Barra de Navegación */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <button
            type="button"
            onClick={() => setTabActual('inicio')}
            className="flex items-center gap-2.5 font-bold text-lg text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-extrabold text-sm shadow-sm">
              IA
            </span>
            <div className="flex flex-col text-left">
              <span className="leading-tight">AprendeIA</span>
              <span className="text-[10px] font-normal text-slate-500 dark:text-slate-400">
                Astro 5 + React 19 Islas
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2 sm:gap-4">
            <nav aria-label="Navegación de artículos" className="flex items-center gap-1 sm:gap-2">
              <button
                type="button"
                onClick={() => setTabActual('inicio')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  tabActual === 'inicio'
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                Inicio
              </button>
              <button
                type="button"
                onClick={() => setTabActual('beneficios')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  tabActual === 'beneficios'
                    ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                Beneficios IA
              </button>
              <button
                type="button"
                onClick={() => setTabActual('prompts')}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                  tabActual === 'prompts'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                Constructor Prompts
              </button>
            </nav>

            {/* Alternador de Modo Oscuro */}
            <button
              type="button"
              onClick={() => setEsOscuro(!esOscuro)}
              aria-label={esOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              {esOscuro ? (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              ) : (
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {tabActual === 'inicio' && (
          <div className="space-y-12">
            <section className="text-center py-8 md:py-12 max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-700 bg-indigo-50 dark:text-indigo-300 dark:bg-indigo-950/60 rounded-full border border-indigo-200 dark:border-indigo-800">
                Astro 5 + React 19 + Tailwind v4
              </div>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Plataforma Educativa de <span className="text-indigo-600 dark:text-indigo-400">Inteligencia Artificial</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                Arquitectura de islas interactivas (Astro Islands). Todo el contenido se procesa estáticamente en el servidor con cero JavaScript en el cliente, salvo las islas reactivas hidratadas bajo demanda.
              </p>
            </section>

            <section aria-labelledby="articulos-disponibles" className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <h2 id="articulos-disponibles" className="sr-only">Artículos interactivos</h2>

              <article className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950/80 flex items-center justify-center text-indigo-600 dark:text-indigo-400 font-bold text-sm">
                    01
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Beneficios de la IA en cualquier profesión
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Explora las 15 combinaciones exactas entre tu ámbito laboral (Educación, Programación, Negocios, Vida Cotidiana y Diseño) y tu objetivo de automatización, creatividad o análisis.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Isla &lt;BeneficiosIA /&gt;</span>
                  <button
                    type="button"
                    onClick={() => setTabActual('beneficios')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 cursor-pointer"
                  >
                    Abrir artículo
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>

              <article className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 flex items-center justify-center text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                    02
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                    Hablar con la IA correctamente: La regla de 4 pasos
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    Aprende a formular prompts efectivos estructurando Rol, Contexto, Tarea y Tono con un taller interactivo que ensambla la instrucción en tiempo real con resaltado por colores.
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Isla &lt;ConstructorPrompts /&gt;</span>
                  <button
                    type="button"
                    onClick={() => setTabActual('prompts')}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 cursor-pointer"
                  >
                    Abrir taller
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </article>
            </section>
          </div>
        )}

        {tabActual === 'beneficios' && (
          <div className="space-y-6">
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-semibold">
              <button
                type="button"
                onClick={() => setTabActual('inicio')}
                className="hover:underline cursor-pointer"
              >
                Inicio
              </button>
              <span>/</span>
              <span className="text-slate-500 dark:text-slate-400">src/pages/articulos/beneficios-ia.astro</span>
            </nav>

            <article className="space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Beneficios de la IA en cualquier profesión: Guía práctica y personalizada
                </h1>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                  La Inteligencia Artificial se adapta a las particularidades de cada industria. Utiliza esta isla interactiva para obtener la herramienta y el prompt exacto para tu caso.
                </p>
              </div>

              {/* Isla React */}
              <BeneficiosIA />
            </article>
          </div>
        )}

        {tabActual === 'prompts' && (
          <div className="space-y-6">
            <nav aria-label="Ruta de navegación" className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
              <button
                type="button"
                onClick={() => setTabActual('inicio')}
                className="hover:underline cursor-pointer"
              >
                Inicio
              </button>
              <span>/</span>
              <span className="text-slate-500 dark:text-slate-400">src/pages/articulos/hablar-con-la-ia.astro</span>
            </nav>

            <article className="space-y-6">
              <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Hablar con la IA correctamente: La regla de 4 pasos
                </h1>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
                  Aplica la estructura Rol → Contexto → Tarea → Tono para construir solicitudes inequívocas con asistencia visual en tiempo real.
                </p>
              </div>

              {/* Isla React */}
              <ConstructorPrompts />
            </article>
          </div>
        )}
      </main>

      {/* Pie de Página */}
      <footer className="border-t border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 mt-16 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© 2026 AprendeIA. Plataforma educativa interactiva en español neutro.</p>
          <p>Cumple AdSense: sin CLS, HTML semántico, alto contraste y modo oscuro nativo.</p>
        </div>
      </footer>
    </div>
  );
}
