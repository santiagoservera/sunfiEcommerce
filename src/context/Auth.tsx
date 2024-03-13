// contexts/MyContext.tsx
'use client';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MyContextType {
  value: string;
  setValue: (value: string) => void;
}

const AuthContext = createContext<MyContextType | undefined>(undefined);

export const MyAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<string>('Valor inicial');

  return (
    <AuthContext.Provider value={{ value, setValue }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): MyContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};
