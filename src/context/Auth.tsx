'use client';
// contexts/MyContext.tsx
import axios from 'axios';
import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';
import { set } from 'react-hook-form';

interface MyContextType {
  value: string;
  login: ({ username, password }: any) => void;
  register: ({
    username,
    nombre,
    lastName,
    email,
    tipCedula,
    cedula,
    celular,
    password,
    confirmPassword,
  }: any) => void;
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
  cartResponse: boolean;
  setCartResponse: (value: boolean) => void;
  dataLogin: any;
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
const storedData = localStorage.getItem('dataLogin');
const dataLs = storedData ? JSON.parse(storedData) : {};
const AuthContext = createContext<MyContextType | undefined>(undefined);

export const MyAuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [value, setValue] = useState<string>('Valor inicial');
  const [dataLogin, setDataLogin] = useState<any>(dataLs);
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const [cartResponse, setCartResponse] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('dataLogin', JSON.stringify(dataLogin));
  }, [dataLogin]);

  const login = async (data: any) => {
    const response = await axios.post(`${baseUrl}auth/login`, data);
    if (response.status) {
      localStorage.setItem('dataLogin', JSON.stringify(response.data));
      setDataLogin((prevState: any) => {
        return { ...prevState, userLogin: true };
      });
      console.log('response:', response.data);
    }
  };

  const register = async (data: any) => {
    const response = await axios.post(`${baseUrl}auth/register`, data);
    if (response.status) {
      console.log(response.data);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        value,
        login,
        isLogin,
        setIsLogin,
        register,
        cartResponse,
        setCartResponse,
        dataLogin,
        showModal,
        setShowModal,
      }}
    >
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
