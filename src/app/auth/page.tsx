'use client';
import Image from 'next/image';
import Link from 'next/link';
import { use, useEffect, useState } from 'react';
import { useAuth } from '@/context/Auth';

// Components
import { Login } from '@/components/auth/Login';
import { Register } from '@/components/auth/Register';

export default function page() {
  const { isLogin, setIsLogin } = useAuth();

  return (
    <section className="w-full h-[100vh] bg-gradient-to-r from-[#56245F] to-[#000000] flex justify-center items-center">
      <div className="bg-white w-[85%] md:w-[95%] md:max-w-[800px] rounded-3xl flex shadow-2xl justify-center items-center relative">
        <Link
          href="/"
          className="absolute top-5 left-9 md:hidden cursor-pointer"
        >
          <Image
            src="/logo-login.png"
            width={19}
            height={26}
            alt="logo-login"
            className="invert"
          />
        </Link>
        <a
          onClick={() => setIsLogin(!isLogin)}
          className="font-bold absolute top-5 right-5 md:hidden flex gap-1"
        >
          {isLogin ? 'SIGN IN' : 'LOGIN'}
          <Image
            src="/arrow.png"
            width={17}
            height={16}
            alt="icon-arrow-right"
          />
        </a>
        <div className="relative">
          <Link href="/" className="absolute top-5 left-9">
            <Image
              src="/logo-login.png"
              width={19}
              height={26}
              alt="logo-login"
            />
          </Link>
          <img
            src="/login.png"
            alt="login-img"
            className="hidden md:block w-full h-full md:min-w-[370px]"
          />
          <div className="menu absolute top-[35%] right-0 flex flex-col gap-4">
            <a
              href="#login"
              id="login"
              onClick={() => setIsLogin(true)}
              className="cursor-pointer hidden md:block "
            >
              LOGIN
            </a>
            <a
              href="#register"
              id="register"
              onClick={() => setIsLogin(false)}
              className="cursor-pointer hidden md:block"
            >
              SIGN IN
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center w-[54%]">
          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </section>
  );
}
