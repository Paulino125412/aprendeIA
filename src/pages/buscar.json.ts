import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getCategoria } from '../data/categorias';

export const GET: APIRoute = async () => {
  const articulos = await getCollection('articulos');

  const indice = articulos.map((art) => {
    const infoCat = getCategoria(art.data.categoria);
    const palabras = art.body ? art.body.split(/\s+/).filter(Boolean).length : 0;
    const minutos = Math.max(1, Math.ceil(palabras / 200));

    return {
      titulo: art.data.titulo,
      descripcion: art.data.descripcion,
      categoria: {
        slug: art.data.categoria,
        nombre: infoCat ? infoCat.nombre : art.data.categoria,
      },
      etiquetas: art.data.etiquetas || [],
      url: `/articulos/${art.id}`,
      minutos,
      fecha: art.data.fecha.toISOString(),
    };
  });

  return new Response(JSON.stringify(indice), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
