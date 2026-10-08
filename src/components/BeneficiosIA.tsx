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
      className="w-full max-w-4xl mx-auto my-8 p-6 md:p-8 bg-superficie border border-linea"
    >
      <header className="mb-6">
        <p className="text-xs font-semibold text-tinta-suave mb-1">
          Explorador interactivo
        </p>
        <h2
          id="titulo-beneficios-ia"
          className="text-2xl md:text-3xl font-bold tracking-tight text-tinta"
        >
          Beneficios de la IA en cualquier profesión
        </h2>
        <p className="mt-2 text-sm text-tinta-suave">
          Personaliza tu perfil profesional y tu meta para descubrir la herramienta ideal, el beneficio clave y un prompt listo para usar.
        </p>
      </header>

      {/* Selectores accesibles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
        <div>
          <label
            htmlFor="select-ambito"
            className="block text-sm font-semibold text-tinta mb-2"
          >
            1. Selecciona tu ámbito o profesión:
          </label>
          <div className="relative">
            <select
              id="select-ambito"
              value={ambito}
              onChange={(e) => setAmbito(e.target.value as Ambito | '')}
              className="w-full appearance-none rounded-[6px] border border-linea bg-papel px-4 py-3 pr-10 text-sm font-medium text-tinta transition-colors focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
            >
              <option value="">-- Elige un ámbito --</option>
              {AMBITOS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-tinta-suave">
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
            className="block text-sm font-semibold text-tinta mb-2"
          >
            2. Selecciona tu objetivo principal:
          </label>
          <div className="relative">
            <select
              id="select-objetivo"
              value={objetivo}
              onChange={(e) => setObjetivo(e.target.value as Objetivo | '')}
              className="w-full appearance-none rounded-[6px] border border-linea bg-papel px-4 py-3 pr-10 text-sm font-medium text-tinta transition-colors focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
            >
              <option value="">-- Elige un objetivo --</option>
              {OBJETIVOS.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-tinta-suave">
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

      {/* Contenedor con altura reservada para evitar Layout Shift (CLS) */}
      <div
        aria-live="polite"
        className="min-h-[440px] flex flex-col justify-start transition-all"
      >
        {!seleccionCompleta || !detalle ? (
          <div className="h-full min-h-[440px] flex flex-col items-center justify-center p-8 text-center border border-dashed border-linea bg-papel">
            <h3 className="text-base font-semibold text-tinta">
              Personaliza tu consulta
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-tinta-suave max-w-md">
              Selecciona tu ámbito y tu objetivo en los desplegables para ver la recomendación y el prompt adaptado.
            </p>
          </div>
        ) : (
          <article className="flex flex-col gap-6 p-6 border border-linea bg-papel">
            {/* a) Mejor herramienta de IA */}
            <div className="p-4 border border-linea bg-superficie">
              <span className="text-xs font-bold text-indigo block mb-1">
                Herramienta recomendada
              </span>
              <h3 className="text-lg font-bold text-tinta">
                {detalle.herramienta.nombre}
              </h3>
              <p className="mt-1 text-sm text-tinta-suave">
                {detalle.herramienta.razon}
              </p>
            </div>

            {/* b) Beneficio directo y concreto */}
            <div className="p-4 border border-linea bg-superficie border-l-[3px] border-l-esmeralda">
              <span className="text-xs font-bold text-esmeralda block mb-1">
                Beneficio directo y cuantificable
              </span>
              <p className="text-sm sm:text-base font-semibold text-tinta">
                {detalle.beneficioDirecto}
              </p>
            </div>

            {/* c) Prompt de ejemplo estructurado */}
            <div>
              <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                <div>
                  <span className="text-xs font-bold text-tinta block">
                    Prompt de ejemplo optimizado
                  </span>
                  <span className="text-xs text-tinta-suave">
                    Estructura: Rol, Contexto, Tarea, Formato de salida
                  </span>
                </div>

                {/* d) Botón Copiar prompt */}
                <button
                  type="button"
                  onClick={handleCopiar}
                  aria-label="Copiar prompt de ejemplo al portapapeles"
                  className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-[6px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo ${
                    copiado
                      ? 'bg-esmeralda text-sobre-acento'
                      : 'bg-indigo text-sobre-acento hover:opacity-90'
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
                      <span>Copiado</span>
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
                  className="mb-2 text-xs text-rosa font-medium"
                >
                  {errorCopia}
                </div>
              )}

              <pre className="w-full overflow-x-auto p-4 border border-linea bg-superficie text-tinta text-xs md:text-sm font-mono leading-relaxed whitespace-pre-wrap">
                <code>{detalle.promptEjemplo}</code>
              </pre>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
