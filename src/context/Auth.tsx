// contexts/MyContext.tsx
'use client';
import axios from 'axios';
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface MyContextType {
  value: string;
  login: ({ username, password }: any) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const AuthContext = createContext<MyContextType | undefined>(undefined);

export const MyAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<string>('Valor inicial');

  const [isLogin, setIsLogin] = useState<boolean>(true);

  const login = async (data: any) => {
    /* const response = await axios.post('aaaa');
    if (response.status) {
      console.log(response.data);
    } */
  };

  const register = async (data: any) => {
    const response = await axios.post(`${baseUrl}auth/register`, data);
    if (response.status) {
      console.log(response.data);
    }
  };

  return (
    <AuthContext.Provider value={{ value, login, isLogin, setIsLogin }}>
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
