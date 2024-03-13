import React from 'react';

export const Register = () => {
  return (
    <div className="w-full h-[442px] flex justify-center items-center relative">
      <h1 className="absolute top-[12%] font-bold text-4xl md:hidden">
        SIGN IN
      </h1>
      <div className="w-full h-full flex justify-center items-center">
        <form action="" className="flex flex-col items-center w-[75%] mx-auto">
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src="/arrowIconSignUp.png"
                alt=""
                className="absolute left-0 top-1/2 transform -translate-y-1/2"
              />
              <input
                type="text"
                placeholder="Nombre"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
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
              <input
                type="text"
                placeholder="Apellido"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
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
              <input
                type="email"
                placeholder="Email"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
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
              <input
                type="password"
                placeholder="Password"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
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
              <input
                type="password"
                placeholder="Confirm Password"
                className="border-black border-b-[1px] pl-8 w-[250px] sm:w-[400px] md:w-[300px] outline-none"
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
      <div className="absolute bottom-5 w-[75%] flex justify-between text-gray-400 text-xs">
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
