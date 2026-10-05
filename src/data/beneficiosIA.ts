export type Ambito =
  | 'Educación'
  | 'Programación'
  | 'Negocios/Ventas'
  | 'Vida Cotidiana'
  | 'Diseño Visual';

export type Objetivo =
  | 'Automatizar tareas repetitivas'
  | 'Generar ideas creativas'
  | 'Analizar datos complejos';

export interface BeneficioDetalle {
  herramienta: {
    nombre: string;
    razon: string;
  };
  beneficioDirecto: string;
  promptEjemplo: string;
}

export type BeneficiosMapa = Record<Ambito, Record<Objetivo, BeneficioDetalle>>;

export const AMBITOS: readonly Ambito[] = [
  'Educación',
  'Programación',
  'Negocios/Ventas',
  'Vida Cotidiana',
  'Diseño Visual',
] as const;

export const OBJETIVOS: readonly Objetivo[] = [
  'Automatizar tareas repetitivas',
  'Generar ideas creativas',
  'Analizar datos complejos',
] as const;

export const BENEFICIOS_DATA: BeneficiosMapa = {
  Educación: {
    'Automatizar tareas repetitivas': {
      herramienta: {
        nombre: 'Claude 3.5 Sonnet / ChatGPT Plus',
        razon: 'Excelente procesamiento de lenguaje natural para estructurar rúbricas analíticas y generar retroalimentación formativa uniforme.',
      },
      beneficioDirecto:
        'Ahorra hasta un 70% del tiempo de evaluación rutinaria manteniendo criterios pedagógicos consistentes para cada estudiante.',
      promptEjemplo: `[ROL]: Actúa como un pedagogo especialista en evaluación formativa para nivel secundario y universitario.
[CONTEXTO]: Cuento con 25 ensayos cortos redactados por estudiantes sobre el impacto socioeconómico del cambio climático.
[TAREA]: Diseña una rúbrica analítica rigurosa con 4 criterios clave y genera una plantilla de retroalimentación constructiva personalizable con marcadores de posición.
[FORMATO DE SALIDA]: Tabla Markdown con niveles de logro (Insuficiente, Básico, Competente, Destacado) seguida del párrafo modelo de devolución con instrucciones de inserción.`,
    },
    'Generar ideas creativas': {
      herramienta: {
        nombre: 'NotebookLM / Gemini 1.5 Pro',
        razon: 'Capacidad para sintetizar fuentes bibliográficas extensas y proponer dinámicas de clase gamificadas y debates basados en evidencia.',
      },
      beneficioDirecto:
        'Crea experiencias de aprendizaje activo y proyectos interdisciplinarios motivantes en cuestión de minutos.',
      promptEjemplo: `[ROL]: Actúa como un diseñador instruccional enfocado en metodologías activas y gamificación educativa.
[CONTEXTO]: Los estudiantes muestran desinterés durante las clases teóricas de historia contemporánea (Revolución Industrial).
[TAREA]: Propón 3 dinámicas de rol inmersivas y un reto colaborativo de toma de decisiones históricas para grupos de 4 personas.
[FORMATO DE SALIDA]: Lista numerada con nombre de la dinámica, objetivo pedagógico, reglas claras, duración estimada y pregunta disparadora de reflexión final.`,
    },
    'Analizar datos complejos': {
      herramienta: {
        nombre: 'ChatGPT Advanced Data Analysis',
        razon: 'Permite subir hojas de cálculo de calificaciones y genera diagnósticos estadísticos con gráficos de tendencias de aprendizaje.',
      },
      beneficioDirecto:
        'Identifica tempranamente brechas de aprendizaje y correlaciones entre asistencia y rendimiento sin requerir software estadístico avanzado.',
      promptEjemplo: `[ROL]: Actúa como un analista de datos institucionales enfocado en retención escolar y éxito académico.
[CONTEXTO]: Dispongo de un archivo CSV con calificaciones bimestrales, tasas de asistencia y participación en foros de 120 alumnos.
[TAREA]: Analiza la correlación entre inasistencias y notas bajas, segmenta a los estudiantes en tres perfiles de riesgo y sugiere dos intervenciones preventivas prioritarias.
[FORMATO DE SALIDA]: Resumen ejecutivo en viñetas concisas con porcentajes clave, matriz de riesgo de 3 niveles y plan de acción de 2 pasos.`,
    },
  },
  Programación: {
    'Automatizar tareas repetitivas': {
      herramienta: {
        nombre: 'GitHub Copilot / Cursor',
        razon: 'Generación predictiva de código repetitivo, pruebas unitarias automáticas y documentación de interfaces en tiempo real.',
      },
      beneficioDirecto:
        'Elimina la fricción de escribir código repetitivo y cobertura de tests, permitiendo enfocarse en la arquitectura y lógica central del sistema.',
      promptEjemplo: `[ROL]: Actúa como un ingeniero de software sénior especialista en TypeScript y testing con Vitest.
[CONTEXTO]: Tengo un servicio de autenticación que valida tokens JWT, comprueba expiración y extrae roles de usuario.
[TAREA]: Escribe una suite exhaustiva de pruebas unitarias que cubra casos de éxito, tokens vencidos, firmas alteradas y encabezados ausentes.
[FORMATO DE SALIDA]: Bloque de código TypeScript limpio con describe/it, mocks mínimos necesarios y aserciones estrictas sin dependencias superfluas.`,
    },
    'Generar ideas creativas': {
      herramienta: {
        nombre: 'Claude 3.5 Sonnet',
        razon: 'Lidera en razonamiento arquitectónico de software, proponiendo patrones de diseño limpios y alternativas de refactorización modular.',
      },
      beneficioDirecto:
        'Acelera la exploración de alternativas técnicas y trade-offs arquitectónicos antes de comprometer líneas de código.',
      promptEjemplo: `[ROL]: Actúa como un arquitecto de software de sistemas distribuidos y microservicios resilientes.
[CONTEXTO]: Una plataforma de comercio electrónico colapsa durante picos de compras por consultas concurrentes al inventario en base de datos relacional.
[TAREA]: Plantea 3 estrategias arquitectónicas desacopladas para gestionar reservas de inventario de alta concurrencia con consistencia eventual o transaccional.
[FORMATO DE SALIDA]: Comparativa estructurada con diagrama en texto ASCII, ventajas, desventajas, costo de implementación y recomendación final fundamentada.`,
    },
    'Analizar datos complejos': {
      herramienta: {
        nombre: 'Gemini 1.5 Pro / DeepSeek-V3',
        razon: 'Enorme ventana de contexto capaz de ingerir y depurar volcados de logs masivos, trazas de errores y optimización de consultas SQL lentas.',
      },
      beneficioDirecto:
        'Diagnostica cuellos de botella en producción y fugas de memoria en minutos a partir de volcados complejos de telemetría.',
      promptEjemplo: `[ROL]: Actúa como un especialista en optimización de rendimiento de bases de datos PostgreSQL y diagnóstico de sistemas.
[CONTEXTO]: Se adjunta el resultado de un EXPLAIN ANALYZE de una consulta crítica de 12 segundos que involucra 4 tablas unidas y 2 millones de filas.
[TAREA]: Identifica los escaneos secuenciales innecesarios, calcula el costo relativo de cada etapa y formula los índices y reescritura de consulta requeridos.
[FORMATO DE SALIDA]: Diagnóstico en 3 puntos críticos, sentencia SQL reescrita y sentencias CREATE INDEX optimizadas listas para producción.`,
    },
  },
  'Negocios/Ventas': {
    'Automatizar tareas repetitivas': {
      herramienta: {
        nombre: 'Make.com con OpenAI / Zapier Central',
        razon: 'Clasifica correos de clientes potenciales, extrae datos clave y los sincroniza en el CRM sin intervención manual.',
      },
      beneficioDirecto:
        'Reduce el tiempo de respuesta a prospectos comerciales de horas a segundos, elevando la tasa de conversión en hasta un 40%.',
      promptEjemplo: `[ROL]: Actúa como un especialista en automatización de embudos de ventas y calificación de leads (SDR).
[CONTEXTO]: Ingresan 80 solicitudes diarias de cotización por formulario web con datos heterogéneos y preguntas variadas.
[TAREA]: Diseña el flujo lógico y los criterios de puntuación (lead scoring) de 1 a 100 para categorizar prospectos calificados, tibios y spam, redactando las respuestas automáticas iniciales.
[FORMATO DE SALIDA]: Esquema del flujo en pasos numerados, matriz de puntuación en tabla y dos correos plantilla con campos variables delimitados entre llaves.`,
    },
    'Generar ideas creativas': {
      herramienta: {
        nombre: 'ChatGPT con modo Search / Perplexity Pro',
        razon: 'Investigación en tiempo real de competidores, detección de ángulos de posicionamiento no explotados y creación de ganchos de venta.',
      },
      beneficioDirecto:
        'Descubre propuestas de valor diferenciadoras y ángulos de campaña comercial respaldados por tendencias del mercado.',
      promptEjemplo: `[ROL]: Actúa como un estratega de marketing de producto (PMM) y copywriter de respuesta directa.
[CONTEXTO]: Lanzaremos una suscripción B2B de gestión de inventario para pequeñas cafeterías artesanales saturadas de hojas de cálculo.
[TAREA]: Crea 4 propuestas de valor diferenciales y 5 ganchos de correo en frío orientados a resolver los mayores dolores operativos del propietario.
[FORMATO DE SALIDA]: Matriz con titular, dolor principal abordado, beneficio cuantificable y llamada a la acción (CTA) de baja fricción.`,
    },
    'Analizar datos complejos': {
      herramienta: {
        nombre: 'Julius AI / Power BI Copilot',
        razon: 'Interpreta matrices de cohortes de clientes, calcula el valor de vida (LTV), costo de adquisición (CAC) y proyecta flujos de caja futuros.',
      },
      beneficioDirecto:
        'Transforma hojas de cálculo dispersas en decisiones financieras claras y proyecciones de rentabilidad confiables.',
      promptEjemplo: `[ROL]: Actúa como un director financiero (CFO) interino especializado en métricas SaaS y modelos de suscripción.
[CONTEXTO]: Contamos con datos de facturación mensual de los últimos 18 meses, con una tasa de cancelación (churn) del 4.2% y CAC de 280 USD.
[TAREA]: Evalúa la sostenibilidad unitaria de la empresa, calcula el tiempo de recuperación de CAC y proyecta el impacto de reducir el churn al 2.5%.
[FORMATO DE SALIDA]: Informe financiero ejecutivo con KPIs destacados, tabla de proyección a 12 meses y 3 recomendaciones estratégicas de retención.`,
    },
  },
  'Vida Cotidiana': {
    'Automatizar tareas repetitivas': {
      herramienta: {
        nombre: 'Google Gemini con Workspace / ChatGPT Voice',
        razon: 'Integración nativa con calendario, correos familiares, listas de compras y resúmenes de recetas semanales a partir de ingredientes disponibles.',
      },
      beneficioDirecto:
        'Recupera entre 4 y 6 horas semanales en la gestión doméstica, planificación de menús saludables y organización de finanzas personales.',
      promptEjemplo: `[ROL]: Actúa como un asistente personal y nutricionista enfocado en optimización del tiempo hogareño.
[CONTEXTO]: Somos una familia de 3 personas, disponemos de 45 minutos diarios para cocinar y deseamos evitar el desperdicio de comida fresca.
[TAREA]: Elabora un plan de comidas balanceado de lunes a viernes con la técnica de batch cooking y su lista de compras categorizada por sección de supermercado.
[FORMATO DE SALIDA]: Menú semanal en tabla ordenada por día, guía de preparación previa dominical en 5 pasos y lista de compras en viñetas agrupadas.`,
    },
    'Generar ideas creativas': {
      herramienta: {
        nombre: 'Perplexity / ChatGPT',
        razon: 'Generador versátil de itinerarios de viaje personalizados, planes de ocio no convencionales y resolución de problemas cotidianos.',
      },
      beneficioDirecto:
        'Diseña experiencias de ocio y viajes a medida adaptadas exactamente a gustos particulares, tiempos y presupuestos reales.',
      promptEjemplo: `[ROL]: Actúa como un guía turístico local experimentado y curador de experiencias culturales auténticas.
[CONTEXTO]: Viajaré en pareja durante 4 días a Kioto con presupuesto moderado; queremos evitar multitudes turísticas y valorar la arquitectura y gastronomía local.
[TAREA]: Diseña un itinerario día por día con recorridos a pie eficientes, paradas gastronómicas económicas recomendadas y consejos de transporte local.
[FORMATO DE SALIDA]: Cronograma diario con bloques matutino, vespertino y nocturno, incluyendo costos estimados en yenes y alternativas en caso de lluvia.`,
    },
    'Analizar datos complejos': {
      herramienta: {
        nombre: 'Claude 3.5 Sonnet',
        razon: 'Capacidad para desglosar contratos de alquiler, pólizas de seguros intrincadas y extractos bancarios en lenguaje claro y accesible.',
      },
      beneficioDirecto:
        'Comprende cláusulas legales en letra chica y detecta cobros ocultos sin necesidad de asesoría legal preliminar.',
      promptEjemplo: `[ROL]: Actúa como un asesor financiero personal y especialista en derechos del consumidor.
[CONTEXTO]: He recibido un contrato de préstamo hipotecario de 35 páginas con múltiples cláusulas sobre tasas variables y penalizaciones.
[TAREA]: Identifica las 5 cláusulas con mayor riesgo económico potencial, explica su significado en español simple y enumera las preguntas clave que debo hacer al oficial de crédito.
[FORMATO DE SALIDA]: Lista numerada con título de la cláusula, explicación sin tecnicismos, nivel de riesgo (Bajo/Medio/Alto) y pregunta de negociación sugerida.`,
    },
  },
  'Diseño Visual': {
    'Automatizar tareas repetitivas': {
      herramienta: {
        nombre: 'Photoshop Generative Fill / Figma AI',
        razon: 'Eliminación y extensión de fondos automática, redimensionamiento adaptativo para múltiples redes sociales y generación de variantes.',
      },
      beneficioDirecto:
        'Multiplica por cinco la entrega de piezas gráficas y formatos derivados para campañas publicitarias multicanal.',
      promptEjemplo: `[ROL]: Actúa como un director de arte digital y retocador fotográfico comercial.
[CONTEXTO]: Tenemos una fotografía vertical de producto (botella de aceite de oliva) sobre fondo blanco de estudio.
[TAREA]: Define las instrucciones exactas y el encuadre para extender el lienzo a formato horizontal panorámico (16:9) agregando una mesa de madera rústica, ramas de olivo desenfocadas y luz solar cálida de tarde.
[FORMATO DE SALIDA]: Parámetros técnicos de composición, prompt descriptivo en inglés y español para el modelo generativo y verificación de iluminación en 3 puntos.`,
    },
    'Generar ideas creativas': {
      herramienta: {
        nombre: 'Midjourney v6 / Recraft.ai',
        razon: 'Generación líder en estética visual, moodboards conceptuales, coherencia cromática e ilustración vectorial de alta definición.',
      },
      beneficioDirecto:
        'Crea tableros de inspiración y conceptos visuales disruptivos en horas en lugar de semanas de bocetado manual.',
      promptEjemplo: `[ROL]: Actúa como un diseñador de identidad de marca enfocado en packaging ecológico y minimalista.
[CONTEXTO]: Una nueva línea de cosmética botánica necesita una dirección visual que evoque serenidad, pureza y sofisticación natural.
[TAREA]: Diseña 3 direcciones de arte conceptuales con paletas de color hex, tratamientos tipográficos recomendados y descripción detallada de textura de empaques.
[FORMATO DE SALIDA]: Ficha de cada concepto con nombre del concepto, paleta en códigos hexadecimales, tipografías complementarias y prompt generativo para prototipar el render 3D.`,
    },
    'Analizar datos complejos': {
      herramienta: {
        nombre: 'Attention Insight / Claude Vision',
        razon: 'Mapas de calor predictivos con IA para evaluar la jerarquía visual, la legibilidad y el recorrido ocular antes del lanzamiento de un diseño.',
      },
      beneficioDirecto:
        'Valida la eficacia de interfaces gráficas y portadas con métricas de atención visual antes de gastar presupuesto en pauta publicitaria.',
      promptEjemplo: `[ROL]: Actúa como un experto en heurísticas de diseño UX/UI y psicología de la percepción visual.
[CONTEXTO]: Se evaluará la captura de una página de destino (landing page) que busca maximizar el registro a un seminario web gratuito.
[TAREA]: Evalúa la jerarquía visual de los elementos (titular, video, formulario y botón CTA), detecta puntos de fricción cognitiva y predice el recorrido del ojo del usuario.
[FORMATO DE SALIDA]: Auditoría heurística en tabla con elemento evaluado, puntaje de visibilidad (1 a 10), problema detectado y recomendación concreta de rediseño.`,
    },
  },
};
