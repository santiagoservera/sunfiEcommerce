'use client';
import { useAuth } from '@/context/Auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

export const Register = () => {
  const { register } = useAuth();
  const [userData, setUserData] = useState({
    username: '',
    nombre: '',
    apellido: '',
    email: '',
    tipCedula: 'dni',
    cedula: '12345678',
    celular: '',
    direccion: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await register(userData);
    } catch (error) {
      console.log(error);
    }
  };

  function YourComponent() {
    const [step, setStep] = useState(1); // Estado para controlar el paso actual

    const handleChangeStep = () => {
      setStep((prevStep) => (prevStep === 1 ? 2 : 1)); // Cambia entre el paso 1 y el paso 2
    };
  }

  
  return (
    <div className="w-full h-[442px] flex justify-center items-center relative">
      <h1 className="absolute top-[12%] font-bold text-4xl md:hidden">
        SIGN IN
      </h1>
      <div className="w-full h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center w-full md:w-[75%] mx-auto"
        >
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
              {/* username */}
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.username}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
               {/* name*/}
              <input
                type="text"
                name="nombre"
                placeholder="Name"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.nombre}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
               {/* lastname */}
              <input
                type="text"
                name="apellido"
                placeholder="Lastname"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.apellido}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
               {/* email */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
               {/* cellphone */}
              <input
                type="text"
                name="celular"
                placeholder="Number of cellphone"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.celular}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
               {/* Direccion */}
              <input
                type="text"
                name="direccion"
                placeholder="Direccion"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.direccion}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
               {/* password */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.password}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
              {/* confirm password */}
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
                value={userData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex flex-row justify-end items-center w-full">
            <button
              type="submit"
              className="text-white rounded-full bg-black w-32 h-8 shadow-md hover:shadow-xl font-semibold"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
      {/* <div className="absolute bottom-5 w-full md:w-[75%] flex justify-between text-gray-400 text-xs">
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
      </div> */}
    </div>
  );
};
