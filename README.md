# AprendeIA

Plataforma educativa estática en español sobre Inteligencia Artificial, orientada al aprendizaje práctico y ético para el público general de Latinoamérica. Construida con Astro 5 y Tailwind CSS v4, con componentes interactivos en JavaScript nativo (sin framework).

---

## Requisitos

- **Node.js**: versión 20.x o superior.
- **npm**: gestor de paquetes estándar de Node.

---

## Comandos disponibles

```bash
# Instalar dependencias
npm install

# Iniciar entorno de desarrollo local (puerto 3000)
npm run dev

# Compilar el sitio estático para producción (en dist/)
npm run build

# Previsualizar la compilación de producción localmente
npm run preview

# Validar tipos de TypeScript y componentes Astro
npm run check
```

---

## Variables de entorno

Copia el archivo `.env.example` a `.env` si necesitas configurar integraciones en despliegue:

```env
# ID de editor de Google AdSense (ejemplo: ca-pub-XXXXXXXXXXXXXXXX)
# Opcional: si no se define, no se inyecta ningún script ni bloque de anuncios.
PUBLIC_ADSENSE_CLIENT=

# URL canónica pública del sitio (ejemplo: https://aprendeia.com)
# Opcional: cuando está definida, habilita el sitemap XML en /sitemap-index.xml
# y la directiva correspondiente en robots.txt.
PUBLIC_SITE_URL=
```

---

## Estructura de carpetas

```text
├── public/               # Archivos estáticos públicos (favicon, etc.)
├── src/
│   ├── components/       # Componentes Astro con interactividad en JavaScript nativo
│   │   ├── Anuncio.astro           # Componente de publicidad controlada
│   │   ├── ArticulosRelacionados.astro # Artículos recomendados por categoría
│   │   ├── AvisoCookies.astro      # Banner de privacidad y consentimiento
│   │   ├── BeneficiosIA.astro      # Explorador interactivo por profesión
│   │   ├── Cabecera.astro          # Navegación principal, categorías y temas
│   │   ├── ConstructorPrompts.astro# Taller interactivo de prompts
│   │   ├── ContactoCopiar.astro    # Botón interactivo para copiar correo
│   │   ├── HeroDemo.astro          # Comparativa interactiva de prompts
│   │   ├── Pestana.astro           # Pestaña individual
│   │   ├── Pestanas.astro          # Contenedor de pestañas accesibles
│   │   ├── TablaContenido.astro    # Tabla de contenidos lateral
│   │   └── TarjetaArticulo.astro   # Tarjeta de artículo para listados
│   ├── content/
│   │   └── articulos/    # Artículos editoriales en formato MDX
│   ├── data/
│   │   ├── categorias.ts # Definición centralizada de las 9 categorías
│   │   └── beneficiosIA.ts # Datos del explorador profesional
│   ├── layouts/
│   │   ├── Layout.astro            # Layout base con cabecera, footer y meta tags
│   │   ├── ArticuloLayout.astro    # Layout específico para artículos con TOC
│   │   └── PaginaLegalLayout.astro # Layout para términos y privacidad
│   ├── pages/            # Rutas y páginas estáticas del sitio
│   │   ├── articulos/    # Índice y páginas dinámicas de artículos
│   │   ├── categoria/    # Páginas por categoría temática
│   │   ├── buscar.astro  # Buscador de artículos con vanilla JS
│   │   ├── buscar.json.ts# Endpoint que genera el índice de búsqueda
│   │   ├── robots.txt.ts # Endpoint para robots.txt dinámico
│   │   └── index.astro   # Portada editorial
│   ├── styles/
│   │   └── global.css    # Estilos globales, tokens de color y tipografía
│   └── config.ts         # Configuración general del sitio (nombre, autor, email)
├── astro.config.mjs      # Configuración de Astro, Tailwind v4 y Vite
└── package.json          # Dependencias y scripts del proyecto
```

---

## Cómo agregar un nuevo artículo

Crea un archivo `.mdx` dentro de `src/content/articulos/` (por ejemplo: `mi-nuevo-articulo.mdx`).

### Ejemplo completo de frontmatter

```mdx
---
titulo: "Título claro y directo del artículo"
descripcion: "Resumen breve de la guía que no supere los 160 caracteres para optimización editorial y motores de búsqueda."
categoria: "prompting"
fecha: 2026-10-06
orden: 1
destacado: false
etiquetas: ["aprendizaje", "herramientas", "productividad"]
---

import Pestanas from '../../components/Pestanas.astro';
import Pestana from '../../components/Pestana.astro';
import ConstructorPrompts from '../../components/ConstructorPrompts.astro';

## Primera sección

Texto del artículo utilizando prosa estándar.

<Pestanas>
  <Pestana titulo="Resumen">
    Puntos clave explicados de manera concisa.
  </Pestana>
  <Pestana titulo="Recomendaciones">
    Consejos prácticos para implementar la técnica.
  </Pestana>
</Pestanas>

## Práctica interactiva

Puedes integrar componentes interactivos cuando sea pertinente:

<ConstructorPrompts />
```

### Slugs válidos para `categoria`

El valor de `categoria` debe ser uno de los 9 slugs definidos en `src/data/categorias.ts`:
1. `fundamentos`
2. `prompting`
3. `profesion`
4. `estudiar`
5. `vida-diaria`
6. `etica`
7. `herramientas`
8. `automatizacion`
9. `recursos`

---

## Regla de anuncios: Máximo 2 por página

Para mantener la calidad editorial y la experiencia de lectura:
- Los artículos administran sus anuncios a través de `ArticuloLayout.astro`.
- Solo se renderizan **2 posiciones**:
  1. `inicio`: después de la cabecera del artículo.
  2. `final`: al terminar el contenido del artículo, antes de los artículos relacionados.
- **No** se deben intercalar anuncios en medio del texto (`posicion="medio"` ha sido retirado).
- Si `PUBLIC_ADSENSE_CLIENT` no está definido en el entorno, no se genera espacio en blanco ni scripts publicitarios en producción.

---

## Datos a reemplazar en `src/config.ts` antes de publicar

Antes de desplegar en producción, verifica y actualiza los siguientes campos en `src/config.ts`:

- `emailContacto`: reemplaza la dirección de ejemplo (`contacto@tudominio.com`) por tu correo real de contacto. Si contiene `tudominio.com`, la compilación emitirá un aviso recordatorio en consola.
- `nombre`: nombre oficial de la plataforma (`AprendeIA`).
- `eslogan`: descripción breve para metadatos y Open Graph.
- `autor`: nombre de la entidad u organización editora.
- `pais`: país de origen del proyecto.
- `ultimaActualizacionLegal`: fecha de revisión de las páginas legales.
