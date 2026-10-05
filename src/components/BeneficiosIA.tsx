import React, { useState } from 'react';
import {
  AMBITOS,
  OBJETIVOS,
  BENEFICIOS_DATA,
  type Ambito,
  type Objetivo,
  type BeneficioDetalle,
} from '../data/beneficiosIA';
import { useCopiar } from '../hooks/useCopiar';

export default function BeneficiosIA(): React.JSX.Element {
  const [ambito, setAmbito] = useState<Ambito | ''>('');
  const [objetivo, setObjetivo] = useState<Objetivo | ''>('');
  const { copiado, error: errorCopia, copiar } = useCopiar(2000);

  const seleccionCompleta = ambito !== '' && objetivo !== '';
  const detalle: BeneficioDetalle | null =
    seleccionCompleta ? BENEFICIOS_DATA[ambito as Ambito][objetivo as Objetivo] : null;

  const handleCopiar = async () => {
    if (detalle?.promptEjemplo) {
      await copiar(detalle.promptEjemplo);
    }
  };

  return (
    <section
      aria-labelledby="titulo-beneficios-ia"
      className="w-full max-w-4xl mx-auto my-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <header className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-xs font-semibold tracking-wide uppercase text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-950/60 rounded-full border border-indigo-200 dark:border-indigo-800">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          </svg>
          Explorador Interactivo
        </div>
        <h2
          id="titulo-beneficios-ia"
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
        >
          Beneficios de la IA en cualquier profesión
        </h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
          Personaliza tu perfil profesional y tu meta para descubrir la herramienta ideal, el beneficio clave y un prompt listo para usar.
        </p>
      </header>

      {/* Selectores accesibles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div>
          <label
            htmlFor="select-ambito"
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
          >
            1. Selecciona tu ámbito o profesión:
          </label>
          <div className="relative">
            <select
              id="select-ambito"
              value={ambito}
              onChange={(e) => setAmbito(e.target.value as Ambito | '')}
              className="w-full appearance-none rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 pr-10 text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="">-- Elige un ámbito --</option>
              {AMBITOS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="select-objetivo"
            className="block text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2"
          >
            2. Selecciona tu objetivo principal:
          </label>
          <div className="relative">
            <select
              id="select-objetivo"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value as Objetivo | '')}
              className="w-full appearance-none rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-3 pr-10 text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            >
              <option value="">-- Elige un objetivo --</option>
              {OBJETIVOS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 dark:text-slate-400">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor con altura reservada para evitar Layout Shift (CLS) en AdSense */}
      <div
        aria-live="polite"
        className="min-h-[460px] flex flex-col justify-start rounded-xl transition-all"
      >
        {!seleccionCompleta || !detalle ? (
          <div className="h-full min-h-[460px] flex flex-col items-center justify-center p-8 text-center rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800/30">
            <div className="w-14 h-14 mb-4 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500">
              <svg
                className="w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 16v-4M12 8h.01" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
              Personaliza tu consulta
            </h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 max-w-md">
              Selecciona tanto tu <strong>ámbito</strong> como tu <strong>objetivo</strong> en los desplegables superiores para revelar la recomendación personalizada.
            </p>
          </div>
        ) : (
          <article className="flex flex-col gap-6 p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 shadow-xs">
            {/* a) Mejor herramienta de IA */}
            <div className="p-4 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-1">
                a) Mejor herramienta recomendada
              </span>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
                {detalle.herramienta.nombre}
              </h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {detalle.herramienta.razon}
              </p>
            </div>

            {/* b) Beneficio directo y concreto */}
            <div className="p-4 rounded-lg bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block mb-1">
                b) Beneficio directo y cuantificable
              </span>
              <p className="text-base font-semibold text-emerald-950 dark:text-emerald-200">
                {detalle.beneficioDirecto}
              </p>
            </div>

            {/* c) Prompt de ejemplo estructurado */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 block">
                    c) Prompt de ejemplo optimizado
                  </span>
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Estructura: Rol → Contexto → Tarea → Formato de salida
                  </span>
                </div>
                {/* d) Botón Copiar prompt */}
                <button
                  type="button"
                  onClick={handleCopiar}
                  aria-label="Copiar prompt de ejemplo al portapapeles"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    copiado
                      ? 'bg-emerald-600 text-white focus:ring-emerald-500'
                      : 'bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600'
                  }`}
                >
                  {copiado ? (
                    <>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>¡Copiado!</span>
                    </>
                  ) : (
                    <>
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                      </svg>
                      <span>Copiar prompt</span>
                    </>
                  )}
                </button>
              </div>

              {errorCopia && (
                <div
                  role="alert"
                  className="mb-2 text-xs text-rose-600 dark:text-rose-400 font-medium"
                >
                  {errorCopia}
                </div>
              )}

              <pre className="w-full overflow-x-auto p-4 rounded-lg bg-slate-900 text-slate-100 text-xs md:text-sm font-mono leading-relaxed border border-slate-800 shadow-inner whitespace-pre-wrap">
                <code>{detalle.promptEjemplo}</code>
              </pre>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
