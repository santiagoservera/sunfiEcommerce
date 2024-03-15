'use client';
import React, { useState } from 'react';
import { useAuth } from '../../context/Auth';

export const Login = () => {
  const { login } = useAuth();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await login({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-[442px] flex justify-center items-center relative">
      <h1 className="absolute top-[20%] font-bold text-4xl md:hidden">LOGIN</h1>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full md:w-[75%] gap-7 md:gap-6"
        >
          <div className="flex items-center gap-2 border-black border-b-[1px]">
            <img
              src="/userIconLogin.png"
              alt="user-icon"
              className="w-[13px] h-[14px]"
            />
            <input
              type="text"
              placeholder="Username"
              className=" outline-none w-[250px] sm:w-[400px] md:w-[300px]"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 border-black border-b-[1px]">
            <img
              src="/passwordIconLogin.png"
              alt="password-icon"
              className="w-[13px] h-[14px]"
            />
            <input
              type="password"
              placeholder="Password"
              className=" outline-none w-[250px] sm:w-[400px] md:w-[300px]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center w-full">
            <a className="mr-4 font-bold text-xs cursor-pointer">
              Forgot Password?
            </a>
            <button
              type="submit"
              className="text-white rounded-full bg-black w-24 h-8 shadow-md hover:shadow-xl font-semibold"
            >
              LOGIN
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-5 w-full md:w-[75%] flex justify-between text-gray-400 text-xs">
        <div className="flex justify-center items-center font-semibold">
          <p>Or connect with</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <a href="" className="flex items-center gap-2">
            <img
              src="/googleIcon.png"
              alt="google-icon"
              className="w-[12px] h-[12px]"
            />
            <p>Google</p>
          </a>
          <a href="" className="flex items-center gap-2">
            <img
              src="/facebookIcon.png"
              alt="facebook-icon"
              className="w-[12px] h-[12px]"
            />
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </div>
  );
};
