import React, { useState, useRef } from 'react';

type TabTipo = 'vago' | 'armado';

export default function HeroDemo(): React.JSX.Element {
  const [tabActiva, setTabActiva] = useState<TabTipo>('vago');
  const tabVagoRef = useRef<HTMLButtonElement>(null);
  const tabArmadoRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>, tabActual: TabTipo) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      e.preventDefault();
      if (tabActual === 'vago') {
        setTabActiva('armado');
        tabArmadoRef.current?.focus();
      } else {
        setTabActiva('vago');
        tabVagoRef.current?.focus();
      }
    }
  };

  return (
    <div className="w-full">
      {/* Único elemento con radio de 12px en la portada */}
      <div className="rounded-[12px] border border-linea bg-superficie p-5 sm:p-6 transition-colors">
        {/* Pestañas accesibles */}
        <div
          role="tablist"
          aria-label="Comparación de prompts"
          className="flex border-b border-linea gap-4 mb-4"
        >
          <button
            ref={tabVagoRef}
            role="tab"
            id="tab-prompt-vago"
            aria-controls="panel-prompt-vago"
            aria-selected={tabActiva === 'vago'}
            tabIndex={tabActiva === 'vago' ? 0 : -1}
            onClick={() => setTabActiva('vago')}
            onKeyDown={(e) => handleKeyDown(e, 'vago')}
            className={`pb-2.5 text-xs font-semibold cursor-pointer border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo ${
              tabActiva === 'vago'
                ? 'border-rosa text-rosa font-bold'
                : 'border-transparent text-tinta-suave hover:text-tinta'
            }`}
          >
            Prompt vago
          </button>

          <button
            ref={tabArmadoRef}
            role="tab"
            id="tab-prompt-armado"
            aria-controls="panel-prompt-armado"
            aria-selected={tabActiva === 'armado'}
            tabIndex={tabActiva === 'armado' ? 0 : -1}
            onClick={() => setTabActiva('armado')}
            onKeyDown={(e) => handleKeyDown(e, 'armado')}
            className={`pb-2.5 text-xs font-semibold cursor-pointer border-b-2 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo ${
              tabActiva === 'armado'
                ? 'border-esmeralda text-esmeralda font-bold'
                : 'border-transparent text-tinta-suave hover:text-tinta'
            }`}
          >
            Prompt armado
          </button>
        </div>

        {/* Panel 1: Prompt vago */}
        <div
          role="tabpanel"
          id="panel-prompt-vago"
          aria-labelledby="tab-prompt-vago"
          hidden={tabActiva !== 'vago'}
          className={`space-y-4 transition-opacity duration-150 motion-reduce:transition-none ${
            tabActiva === 'vago' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-tinta-suave uppercase tracking-wider block">
              Instrucción sin contexto
            </span>
            <div className="p-3 bg-papel border border-linea text-sm font-mono text-tinta">
              "Hazme un plan de ahorro."
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-tinta-suave uppercase tracking-wider block">
              Respuesta del modelo
            </span>
            <div className="p-3 bg-papel border border-linea border-l-[3px] border-l-rosa text-xs sm:text-sm text-tinta leading-relaxed">
              Claro. Algunas ideas generales: ahorra una parte de tus ingresos, reduce gastos innecesarios y abre una cuenta de ahorros.
            </div>
          </div>
        </div>

        {/* Panel 2: Prompt armado */}
        <div
          role="tabpanel"
          id="panel-prompt-armado"
          aria-labelledby="tab-prompt-armado"
          hidden={tabActiva !== 'armado'}
          className={`space-y-4 transition-opacity duration-150 motion-reduce:transition-none ${
            tabActiva === 'armado' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-tinta-suave uppercase tracking-wider block">
              Instrucción estructurada en 4 bloques
            </span>
            <div className="p-3 bg-papel border border-linea text-xs sm:text-sm space-y-2">
              <div>
                <span className="font-bold text-tinta">Rol: </span>
                <span className="text-tinta-suave">Actúa como asesor de finanzas personales.</span>
              </div>
              <div>
                <span className="font-bold text-tinta">Contexto: </span>
                <span className="text-tinta-suave">Tengo una tienda de barrio y mis ingresos cambian cada mes.</span>
              </div>
              <div>
                <span className="font-bold text-tinta">Tarea: </span>
                <span className="text-tinta-suave">Hazme un plan de ahorro para 3 meses.</span>
              </div>
              <div>
                <span className="font-bold text-tinta">Tono: </span>
                <span className="text-tinta-suave">Explícalo directo y sin tecnicismos.</span>
              </div>
            </div>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-semibold text-tinta-suave uppercase tracking-wider block">
              Respuesta del modelo
            </span>
            <div className="p-3 bg-papel border border-linea border-l-[3px] border-l-esmeralda text-xs sm:text-sm text-tinta leading-relaxed">
              Plan para ingresos variables: 1. Separa primero lo fijo (alquiler, proveedores). 2. Define un ahorro mínimo por semana, no por mes. 3. Guarda más en las semanas buenas y no toques ese fondo en las malas.
            </div>
          </div>
        </div>
      </div>

      {/* Aclaración bajo la tarjeta */}
      <p className="text-[11px] text-tinta-suave mt-2 leading-normal">
        Ejemplo ilustrativo de cómo cambia una respuesta. No es asesoría financiera.
      </p>
    </div>
  );
}
