'use client';
import LayoutEcommerce from '@/layout/LayoutEcommerce';
import Image from 'next/image';

//Components

import { Login } from '@/components/Login';
import { useAuth } from '@/context/Auth';

export default function page() {
  const { value, setValue } = useAuth();
  return <h1>Login</h1>;
}
