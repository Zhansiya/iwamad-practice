import { createContext, useContext, useState } from 'react';

type LikesContextValue = { likes: number; addLike: () => void }

const LikesContext = createContext<LikesContextValue | undefined>(undefined);

function LikesProvider({ children }: { children: React.ReactNode }) {
  const [likes, setLikes] = useState(0);
  const addLike = () => setLikes(likes + 1);

  return (
    <LikesContext.Provider value={{ likes, addLike }}>
      {children}
    </LikesContext.Provider>
  );
}

function useLikes() {
  const context = useContext(LikesContext);
  if (context === undefined) {
    throw new Error('useLikes must be used within a LikesProvider');
  }
  return context;
}

export { LikesProvider, useLikes };