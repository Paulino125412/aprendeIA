export interface SitioConfig {
  nombre: string;
  eslogan: string;
  autor: string;
  pais: string;
  emailContacto: string;
  ultimaActualizacionLegal: string;
}

export const SITIO: SitioConfig = {
  nombre: 'AprendeIA',
  eslogan: 'Educación práctica, ética y accesible para colaborar con la Inteligencia Artificial.',
  autor: 'Equipo AprendeIA',
  pais: 'Perú',
  // REEMPLAZAR ANTES DE PUBLICAR
  emailContacto: 'contacto@tudominio.com',
  ultimaActualizacionLegal: '6 de octubre de 2026',
};

if (SITIO.emailContacto.includes('tudominio.com')) {
  console.warn('[AprendeIA] Reemplaza emailContacto en src/config.ts antes de publicar.');
}

