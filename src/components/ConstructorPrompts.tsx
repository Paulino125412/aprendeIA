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
      className="w-full max-w-4xl mx-auto my-8 p-6 md:p-8 bg-superficie border border-linea"
    >
      <header className="mb-6">
        <p className="text-xs font-semibold text-tinta-suave mb-1">
          Taller práctico
        </p>
        <h2
          id="titulo-constructor-prompts"
          className="text-2xl md:text-3xl font-bold tracking-tight text-tinta"
        >
          Constructor de prompts efectivos (regla de 4 pasos)
        </h2>
        <p className="mt-2 text-sm text-tinta-suave">
          Aprende a comunicarte con cualquier modelo de IA estructurando tu solicitud paso a paso: Rol, Contexto, Tarea y Tono.
        </p>
      </header>

      {/* Formulario controlado sin recarga de página */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Paso 1: Rol */}
        <div>
          <label
            htmlFor={rolId}
            className="flex items-center gap-2 text-sm font-bold text-tinta mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo rounded-[6px]">
              1
            </span>
            <span>Rol (¿Quién debe ser la IA?)</span>
          </label>
          <span className="block text-xs text-tinta-suave mb-2">
            Pista: asígnale una profesión o especialidad concreta.
          </span>
          <input
            id={rolId}
            type="text"
            value={rol}
            onChange={(e) => setRol(e.target.value)}
            placeholder={`ej. ${PLACEHOLDERS_DEFECTO.rol}`}
            className="w-full rounded-[6px] border border-linea bg-papel px-4 py-2.5 text-sm text-tinta placeholder:text-tinta-suave focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
          />
        </div>

        {/* Paso 2: Contexto */}
        <div>
          <label
            htmlFor={contextoId}
            className="flex items-center gap-2 text-sm font-bold text-tinta mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo rounded-[6px]">
              2
            </span>
            <span>Contexto (Situación actual)</span>
          </label>
          <span className="block text-xs text-tinta-suave mb-2">
            Pista: antecedentes, audiencia o restricciones importantes.
          </span>
          <textarea
            id={contextoId}
            rows={2}
            value={contexto}
            onChange={(e) => setContexto(e.target.value)}
            placeholder={`ej. ${PLACEHOLDERS_DEFECTO.contexto}`}
            className="w-full rounded-[6px] border border-linea bg-papel px-4 py-2 text-sm text-tinta placeholder:text-tinta-suave focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
          />
        </div>

        {/* Paso 3: Tarea */}
        <div>
          <label
            htmlFor={tareaId}
            className="flex items-center gap-2 text-sm font-bold text-tinta mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-esmeralda rounded-[6px]">
              3
            </span>
            <span>Tarea (Acción exacta)</span>
          </label>
          <span className="block text-xs text-tinta-suave mb-2">
            Pista: verbo imperativo y entregable esperado.
          </span>
          <input
            id={tareaId}
            type="text"
            value={tarea}
            onChange={(e) => setTarea(e.target.value)}
            placeholder={`ej. ${PLACEHOLDERS_DEFECTO.tarea}`}
            className="w-full rounded-[6px] border border-linea bg-papel px-4 py-2.5 text-sm text-tinta placeholder:text-tinta-suave focus:border-esmeralda focus:outline-none focus:ring-2 focus:ring-esmeralda/20"
          />
        </div>

        {/* Paso 4: Tono */}
        <div>
          <label
            htmlFor={tonoId}
            className="flex items-center gap-2 text-sm font-bold text-tinta mb-1"
          >
            <span className="flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-indigo rounded-[6px]">
              4
            </span>
            <span>Tono deseado</span>
          </label>
          <span className="block text-xs text-tinta-suave mb-2">
            Pista: define el estilo y la complejidad del lenguaje.
          </span>
          <div className="relative">
            <select
              id={tonoId}
              value={tono}
              onChange={(e) => setTono(e.target.value as TonoOption)}
              className="w-full appearance-none rounded-[6px] border border-linea bg-papel px-4 py-2.5 pr-10 text-sm font-medium text-tinta transition-colors focus:border-indigo focus:outline-none focus:ring-2 focus:ring-indigo/20"
            >
              <option value="Profesional">Profesional</option>
              <option value="Directo y Conciso">Directo y Conciso</option>
              <option value="Amigable">Amigable</option>
              <option value="Explicación para niños">Explicación para niños</option>
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

      {/* Contenedor de resultado en vivo */}
      <div
        aria-live="polite"
        className="min-h-[300px] border border-linea bg-papel p-5 md:p-6 text-tinta flex flex-col justify-between"
      >
        <div>
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-linea flex-wrap">
            <div className="flex items-center gap-2">
              <h3 className="text-xs font-bold text-tinta">
                Resultado ensamblado
              </h3>
            </div>

            {/* Contador de caracteres */}
            <span className="text-xs font-mono px-2 py-0.5 border border-linea text-tinta-suave">
              {cantidadCaracteres} caracteres
            </span>
          </div>

          {/* Bloque visual con secciones diferenciadas */}
          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-2">
            <div className="p-2.5 border border-linea bg-superficie">
              <span className="font-bold text-indigo">[ROL]: </span>
              {rol.trim() ? (
                <span className="font-semibold text-tinta">{rol}</span>
              ) : (
                <span className="italic text-tinta-suave">{PLACEHOLDERS_DEFECTO.rol}</span>
              )}
            </div>

            <div className="p-2.5 border border-linea bg-superficie">
              <span className="font-bold text-indigo">[CONTEXTO]: </span>
              {contexto.trim() ? (
                <span className="text-tinta">{contexto}</span>
              ) : (
                <span className="italic text-tinta-suave">{PLACEHOLDERS_DEFECTO.contexto}</span>
              )}
            </div>

            <div className="p-2.5 border border-linea bg-superficie">
              <span className="font-bold text-esmeralda">[TAREA]: </span>
              {tarea.trim() ? (
                <span className="font-semibold text-tinta">{tarea}</span>
              ) : (
                <span className="italic text-tinta-suave">{PLACEHOLDERS_DEFECTO.tarea}</span>
              )}
            </div>

            <div className="p-2.5 border border-linea bg-superficie">
              <span className="font-bold text-indigo">[INSTRUCCIÓN DE TONO]: </span>
              <span className="text-tinta font-medium">{textoInstruccionTono}</span>
            </div>
          </div>
        </div>

        {/* Barra inferior con botón de copiado */}
        <div className="mt-6 pt-4 border-t border-linea flex items-center justify-between flex-wrap gap-4">
          <span className="text-xs text-tinta-suave">
            {botonDeshabilitado
              ? 'Introduce al menos un Rol o una Tarea para habilitar el copiado.'
              : 'Prompt listo para copiar.'}
          </span>

          <div className="flex items-center gap-3">
            {errorCopia && (
              <span role="alert" className="text-xs text-rosa font-medium">
                {errorCopia}
              </span>
            )}
            <button
              type="button"
              disabled={botonDeshabilitado}
              onClick={handleCopiarPrompt}
              aria-label="Copiar prompt completo ensamblado"
              className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-[6px] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo ${
                botonDeshabilitado
                  ? 'border border-linea bg-papel text-tinta-suave cursor-not-allowed opacity-60'
                  : copiado
                  ? 'bg-esmeralda text-white'
                  : 'bg-indigo text-white hover:opacity-90'
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
        </div>
      </div>
    </section>
  );
}
