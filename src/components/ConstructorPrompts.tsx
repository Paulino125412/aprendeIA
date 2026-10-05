import React, { useState, useId } from 'react';
import { useCopiar } from '../hooks/useCopiar';

export type TonoOption =
  | 'Profesional'
  | 'Directo y Conciso'
  | 'Amigable'
  | 'Explicación para niños';

const TONOS_MAPA: Record<TonoOption, string> = {
  Profesional: 'Mantén un tono profesional, riguroso y objetivo.',
  'Directo y Conciso': 'Sé directo, conciso y ve al grano sin introducciones ni rodeos.',
  Amigable: 'Responde en un tono amigable, cercano y pedagógico.',
  'Explicación para niños':
    'Explica con analogías sencillas, ejemplos cotidianos y lenguaje comprensible para un niño de 10 años.',
};

const PLACEHOLDERS_DEFECTO = {
  rol: 'Diseñador instruccional sénior experto en microaprendizaje',
  contexto: 'Tengo un equipo de ventas que necesita aprender un CRM nuevo en sesiones de 15 minutos diarios.',
  tarea: 'Diseña una estructura curricular de 5 micromódulos prácticos con ejercicios aplicados.',
};

export default function ConstructorPrompts(): React.JSX.Element {
  const [rol, setRol] = useState<string>('');
  const [contexto, setContexto] = useState<string>('');
  const [tarea, setTarea] = useState<string>('');
  const [tono, setTono] = useState<TonoOption>('Profesional');

  const rolId = useId();
  const contextoId = useId();
  const tareaId = useId();
  const tonoId = useId();

  const { copiado, error: errorCopia, copiar } = useCopiar(2000);

  // Textos finales y placeholders
  const textoRol = rol.trim() || PLACEHOLDERS_DEFECTO.rol;
  const textoContexto = contexto.trim() || PLACEHOLDERS_DEFECTO.contexto;
  const textoTarea = tarea.trim() || PLACEHOLDERS_DEFECTO.tarea;
  const textoInstruccionTono = TONOS_MAPA[tono];

  // Prompt completo ensamblado
  const promptEnsamblado = `[ROL]: ${textoRol}
[CONTEXTO]: ${textoContexto}
[TAREA]: ${textoTarea}
[INSTRUCCIÓN DE TONO]: ${textoInstruccionTono}`;

  const cantidadCaracteres = promptEnsamblado.length;
  const botonDeshabilitado = rol.trim() === '' && tarea.trim() === '';

  const handleCopiarPrompt = async () => {
    if (botonDeshabilitado) return;
    await copiar(promptEnsamblado);
  };

  return (
    <section
      aria-labelledby="titulo-constructor-prompts"
      className="w-full max-w-4xl mx-auto my-8 p-6 md:p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
    >
      <header className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-2 text-xs font-semibold tracking-wide uppercase text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 rounded-full border border-emerald-200 dark:border-emerald-800">
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
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
          Taller Práctico
        </div>
        <h2
          id="titulo-constructor-prompts"
          className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-50"
        >
          Constructor de Prompts Efectivos (Regla de 4 Pasos)
        </h2>
        <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
          Aprende a comunicarte con cualquier modelo de IA estructurando tu solicitud paso a paso: Rol, Contexto, Tarea y Tono.
        </p>
      </header>

      {/* Formulario controlado sin recarga de página */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Paso 1: Rol */}
        <div>
          <label
            htmlFor={rolId}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-600 rounded-full">
              1
            </span>
            <span>Rol (¿Quién debe ser la IA?)</span>
          </label>
          <span className="block text-xs text-slate-500 dark:text-slate-400 mb-2">
            Pista: asígnale una profesión o especialidad concreta.
          </span>
          <input
            id={rolId}
            type="text"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            placeholder={`ej. ${PLACEHOLDERS_DEFECTO.rol}`}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        {/* Paso 2: Contexto */}
        <div>
          <label
            htmlFor={contextoId}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-purple-600 rounded-full">
              2
            </span>
            <span>Contexto (Situación actual)</span>
          </label>
          <span className="block text-xs text-slate-500 dark:text-slate-400 mb-2">
            Pista: antecedentes, audiencia o restricciones importantes.
          </span>
          <textarea
            id={contextoId}
            rows={2}
            value={contexto}
            onChange={(e) => setContexto(e.target.value)}
            placeholder={`ej. ${PLACEHOLDERS_DEFECTO.contexto}`}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
          />
        </div>

        {/* Paso 3: Tarea */}
        <div>
          <label
            htmlFor={tareaId}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-emerald-600 rounded-full">
              3
            </span>
            <span>Tarea (Acción exacta)</span>
          </label>
          <span className="block text-xs text-slate-500 dark:text-slate-400 mb-2">
            Pista: verbo imperativo y entregable esperado.
          </span>
          <input
            id={tareaId}
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder={`ej. ${PLACEHOLDERS_DEFECTO.tarea}`}
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 text-sm text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        {/* Paso 4: Tono */}
        <div>
          <label
            htmlFor={tonoId}
            className="flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-slate-100 mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-amber-600 rounded-full">
              4
            </span>
            <span>Tono deseado</span>
          </label>
          <span className="block text-xs text-slate-500 dark:text-slate-400 mb-2">
            Pista: define el estilo y la complejidad del lenguaje.
          </span>
          <div className="relative">
            <select
              id={tonoId}
              value={tono}
              onChange={(e) => setTono(e.target.value as TonoOption)}
              className="w-full appearance-none rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 px-4 py-2.5 pr-10 text-sm font-medium text-slate-900 dark:text-slate-100 transition-colors focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-500/20"
            >
              <option value="Profesional">Profesional</option>
              <option value="Directo y Conciso">Directo y Conciso</option>
              <option value="Amigable">Amigable</option>
              <option value="Explicación para niños">Explicación para niños</option>
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

      {/* Contenedor de resultado en vivo */}
      <div
        aria-live="polite"
        className="min-h-[320px] rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-950 p-5 md:p-6 text-slate-100 shadow-md flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-800 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-200">
                Resultado ensamblado en tiempo real
              </h3>
            </div>

            {/* Contador de caracteres */}
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 text-slate-400 border border-slate-800">
              {cantidadCaracteres} caracteres
            </span>
          </div>

          {/* Bloque visual con secciones diferenciadas por colores */}
          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-3">
            {/* Sección Rol */}
            <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-800/40">
              <span className="font-bold text-blue-400">[ROL]: </span>
              {rol.trim() ? (
                <span className="text-blue-100 font-semibold">{rol}</span>
              ) : (
                <span className="italic text-blue-300/50">{PLACEHOLDERS_DEFECTO.rol}</span>
              )}
            </div>

            {/* Sección Contexto */}
            <div className="p-2.5 rounded-lg bg-purple-950/40 border border-purple-800/40">
              <span className="font-bold text-purple-400">[CONTEXTO]: </span>
              {contexto.trim() ? (
                <span className="text-purple-100">{contexto}</span>
              ) : (
                <span className="italic text-purple-300/50">{PLACEHOLDERS_DEFECTO.contexto}</span>
              )}
            </div>

            {/* Sección Tarea */}
            <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
              <span className="font-bold text-emerald-400">[TAREA]: </span>
              {tarea.trim() ? (
                <span className="text-emerald-100 font-semibold">{tarea}</span>
              ) : (
                <span className="italic text-emerald-300/50">{PLACEHOLDERS_DEFECTO.tarea}</span>
              )}
            </div>

            {/* Sección Tono */}
            <div className="p-2.5 rounded-lg bg-amber-950/40 border border-amber-800/40">
              <span className="font-bold text-amber-400">[INSTRUCCIÓN DE TONO]: </span>
              <span className="text-amber-100 font-medium">{textoInstruccionTono}</span>
            </div>
          </div>
        </div>

        {/* Barra inferior con botón de copiado */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs text-slate-400">
            {botonDeshabilitado
              ? 'Introduce al menos un Rol o una Tarea para habilitar el copiado.'
              : 'Prompt listo para pegar en ChatGPT, Claude o Gemini.'}
          </span>

          <div className="flex items-center gap-3">
            {errorCopia && (
              <span role="alert" className="text-xs text-rose-400 font-medium">
                {errorCopia}
              </span>
            )}
            <button
              type="button"
              disabled={botonDeshabilitado}
              onClick={handleCopiarPrompt}
              aria-label="Copiar prompt completo ensamblado"
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 ${
                botonDeshabilitado
                  ? 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-60'
                  : copiado
                  ? 'bg-emerald-600 text-white focus:ring-emerald-500'
                  : 'bg-indigo-600 text-white hover:bg-indigo-500 focus:ring-indigo-500'
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
        </div>
      </div>
    </section>
  );
}
