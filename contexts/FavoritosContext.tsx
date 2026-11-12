import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';

type FavoritosContextType = {
  favoritos: string[];
  alternarFavorito: (id: string) => void;
  possuiFavorito: (id: string) => boolean;
};

const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);

export function FavoritosProvider({ children }: { children: ReactNode }) {
  const [favoritos, setFavoritos] = useState<string[]>([]);

  function alternarFavorito(id: string) {
    setFavoritos((atuais) =>
      atuais.includes(id) ? atuais.filter((item) => item !== id) : [...atuais, id]
    );
  }

  const valor = useMemo(() => ({
    favoritos,
    alternarFavorito,
    possuiFavorito: (id: string) => favoritos.includes(id),
  }), [favoritos]);

  return <FavoritosContext.Provider value={valor}>{children}</FavoritosContext.Provider>;
}

export function useFavoritos() {
  const contexto = useContext(FavoritosContext);
  if (!contexto) throw new Error('useFavoritos deve ser usado dentro de FavoritosProvider');
  return contexto;
}
