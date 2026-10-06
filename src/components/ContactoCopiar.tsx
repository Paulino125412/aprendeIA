import { useCopiar } from '../hooks/useCopiar';

interface ContactoCopiarProps {
  email: string;
}

export default function ContactoCopiar({ email }: ContactoCopiarProps) {
  const { copiado, copiar } = useCopiar(2500);

  return (
    <button
      type="button"
      onClick={() => copiar(email)}
      aria-label={copiado ? 'Correo copiado al portapapeles' : 'Copiar correo al portapapeles'}
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-[6px] text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-indigo cursor-pointer ${
        copiado
          ? 'bg-esmeralda text-white'
          : 'bg-papel border border-linea text-tinta hover:bg-superficie'
      }`}
    >
      {copiado ? (
        <>
          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="20 6 9 17 4 12" />
          </svg>
          <span>Correo copiado</span>
        </>
      ) : (
        <>
          <svg className="w-4 h-4 text-tinta-suave" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
          <span>Copiar correo</span>
        </>
      )}
    </button>
  );
}
