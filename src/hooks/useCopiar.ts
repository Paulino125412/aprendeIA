import { useState, useCallback, useRef, useEffect } from 'react';

export interface UseCopiarReturn {
  copiado: boolean;
  error: string | null;
  copiar: (texto: string) => Promise<boolean>;
}

export function useCopiar(duracionFeedbackMs: number = 2000): UseCopiarReturn {
  const [copiado, setCopiado] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const temporizadorRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (temporizadorRef.current) {
        clearTimeout(temporizadorRef.current);
      }
    };
  }, []);

  const copiar = useCallback(
    async (texto: string): Promise<boolean> => {
      if (!texto || texto.trim() === '') {
        setError('No hay contenido para copiar.');
        return false;
      }

      if (temporizadorRef.current) {
        clearTimeout(temporizadorRef.current);
      }
      setError(null);

      let exito = false;

      // Intento primario con API moderna de Clipboard
      if (typeof navigator !== 'undefined' && navigator.clipboard && window.isSecureContext) {
        try {
          await navigator.clipboard.writeText(texto);
          exito = true;
        } catch {
          exito = false;
        }
      }

      // Fallback tradicional con document.execCommand('copy')
      if (!exito && typeof document !== 'undefined') {
        try {
          const elementoOculto = document.createElement('textarea');
          elementoOculto.value = texto;
          elementoOculto.setAttribute('readonly', '');
          elementoOculto.style.position = 'fixed';
          elementoOculto.style.left = '-9999px';
          elementoOculto.style.top = '-9999px';
          elementoOculto.style.opacity = '0';
          document.body.appendChild(elementoOculto);

          elementoOculto.focus();
          elementoOculto.select();

          exito = document.execCommand('copy');
          document.body.removeChild(elementoOculto);
        } catch (errorFallback) {
          console.error('Fallo en fallback de copiado:', errorFallback);
          exito = false;
        }
      }

      if (exito) {
        setCopiado(true);
        temporizadorRef.current = setTimeout(() => {
          setCopiado(false);
        }, duracionFeedbackMs);
        return true;
      } else {
        setError('No se pudo copiar al portapapeles. Copia el texto manualmente.');
        return false;
      }
    },
    [duracionFeedbackMs]
  );

  return { copiado, error, copiar };
}
