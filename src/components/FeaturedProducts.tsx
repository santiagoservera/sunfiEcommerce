import React from 'react';

export const FeaturedProducts = () => {
  return (
    <>
      <div className="">
        <h1 className="text-white text-center font-bold text-xl mt-24 mb-9">
          FEATURED PRODUCTS
        </h1>
      </div>

      <div className="containerWidth  w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-full justify-between items-center relative">
        <div className="card  rounded-xl shadow-2xl overflow-hidden relative text-center">
          <img src="/acad.png" alt="Imagen 3" className="mx-auto" />
          <div className="p-4">
            <h1 className="text-white text-xl font-bold mb-2">AUTOCAD 2023</h1>
            <h2 className="text-white text-xl mb-2">Autodesk</h2>
            <p className="text-white text-xl mb-2">$0000</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100">
            <button className="w-[120px] h-[45px] bg-black text-white font-bold rounded-full">
              COMPRAR
            </button>
            <button className="w-[120px] h-[45px] bg-[#8f8690] text-black font-bold rounded-full">
              VER
            </button>
          </div>
        </div>

        <div className="card  rounded-xl shadow-2xl overflow-hidden relative text-center">
          <img src="/ap2025.png" alt="Imagen 3" className="mx-auto" />
          <div className="p-4">
            <h1 className="text-white text-xl font-bold mb-2">
              ADOBE PHOTOSHOP 2023
            </h1>
            <h2 className="text-white text-xl mb-2">Photoshop cc</h2>
            <p className="text-white text-xl mb-2">$0000</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100">
            <button className="w-[120px] h-[45px] bg-black text-white font-bold rounded-full">
              COMPRAR
            </button>
            <button className="w-[120px] h-[45px] bg-[#8f8690] text-black font-bold rounded-full">
              VER
            </button>
          </div>
        </div>

        <div className="card  rounded-xl shadow-2xl overflow-hidden relative text-center">
          <img src="/opp.png" alt="Imagen 3" className="mx-auto" />
          <div className="p-4">
            <h1 className="text-white text-xl font-bold mb-2">
              OFFICE PROFESSIONAL PLUS
            </h1>
            <h2 className="text-white text-xl mb-2">2021</h2>
            <p className="text-white text-xl mb-2">$0000</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full flex items-center justify-center opacity-0 transition-all duration-300 hover:opacity-100">
            <button className="w-[120px] h-[45px] bg-black text-white font-bold rounded-full">
              COMPRAR
            </button>
            <button className="w-[120px] h-[45px] bg-[#8f8690] text-black font-bold rounded-full">
              VER
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
