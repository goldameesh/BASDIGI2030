'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

type GoldContextType = {
  isGoldActive: boolean;
  setGoldActive: (active: boolean) => void;
};

const GoldContext = createContext<GoldContextType | undefined>(undefined);

export function GoldProvider({ children }: { children: ReactNode }) {
  const [isGoldActive, setGoldActive] = useState(false);
  return (
    <GoldContext.Provider value={{ isGoldActive, setGoldActive }}>
      {children}
    </GoldContext.Provider>
  );
}

export function useGoldContext() {
  const context = useContext(GoldContext);
  if (context === undefined) {
    throw new Error('useGoldContext must be used within GoldProvider');
  }
  return context;
}
