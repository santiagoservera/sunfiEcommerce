import React from "react";

export const Account = () => {
  return (
    <div className="pl-4 w-11/12 ml-10 mr-4">
      <div className="bg-white border shadow-lg p-4 rounded-xl flex items-center mt-8 mr-4 h-2/6">
        <div className="relative w-1/5 h-1/5 p-0 my-6 ml-10 mr-12">
          <img
            src="/Ellipse 3.png"
            alt="Fondo"
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-full">
            <img src="/Group 225.png" alt="Superpuesta" className="px-8 py-2" />
          </div>
        </div>

        <div className="p-0">
          <div className="mb-6 ml-6">
            <h2 className="text-4xl font-bold mb-2">SUINFI</h2>
          </div>
          <div className="mt-0 ml-6">
            <p className="p-2 text-[#5D5D5D]">Se unio en Agosto de 2019</p>
          </div>
          <div className="mt-0 ml-6">
            <p className="p-2 text-[#5D5D5D]">Córdoba Argentina</p>
          </div>
        </div>
      </div>

      <div className="ml-8">
        <div className="p-4 mt-2 font-bold text-3xl">
          <h4>Información de la cuenta</h4>
        </div>
        <div className=" py-0 px-4 ">
          <h2 className="font-bold py-2 px-0 ">Nombre y apellido</h2>
          <span>Suinfi</span>
          <h2 className="font-bold py-2 px-0 mt-4">Telefono</h2>
          <span className="mb-0">3541 643680</span>
          <h2 className="font-bold py-2 px-0 mt-4">Mail</h2>
          <span>Suinfigmail.com</span>
        </div>
      </div>
    </div>
  );
};
