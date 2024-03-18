'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/Auth';
import { fetchOneCart } from '@/services/Carrito';
import { Carrito, Item } from '@/interfaces/Carrito';
import Image from 'next/image';

export const ModalCarrito = () => {
  const { cartResponse, dataLogin } = useAuth();
  const [cart, setCart] = useState<Carrito>();
  const [verMas, setVerMas] = useState(false);

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const carritoData = await fetchOneCart(dataLogin.payload.userId);
        console.log(carritoData);
        setCart(carritoData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };
    fetchCarrito();
  }, [cartResponse]);
  return (
    <div
      className={`w-[500px] ${
        verMas ? 'h-auto' : 'h-[230px]'
      } bg-white rounded-xl text-zinc-900 flex p-5 transform ease-in-out transition-all duration-300`}
    >
      {!cart && (
        <div>
          <h1>Carrito</h1>
          <p>No hay productos en el carrito</p>
        </div>
      )}
      {cart && (
        <div className="flex flex-col">
          {cart.items.slice(0, 1).map((item: Item) => {
            return (
              <div key={item.id} className="flex gap-3">
                <div>
                  <img
                    src="acad.png"
                    className="w-[70px] h-[70px] object-cover"
                  />
                </div>
                <div>
                  <p>{item.nombre}</p>
                  <p>
                    {item.CarritoArticulo.cantidad}x{item.precio}
                  </p>
                  {!verMas && (
                    <p className="font-extrabold">
                      ¡Agregado al carrito con éxito!
                    </p>
                  )}
                  <div className="flex justify-between"></div>
                </div>
              </div>
            );
          })}
          {verMas &&
            cart.items.slice(1).map((item: Item) => {
              return (
                <div key={item.id} className="flex gap-3">
                  <div>
                    <img
                      src="acad.png"
                      className="w-[70px] h-[70px] object-cover"
                    />
                  </div>
                  <div>
                    <p>{item.nombre}</p>
                  </div>
                </div>
              );
            })}
          {verMas && (
            <>
              <button className="p-[7px] bg-[#009ee3] mt-4 rounded-xl text-white flex justify-center text-center items-center">
                ¡Pagar con MERCADO PAGO!
                <Image src="logo-mp.png" alt="logo-mp" className="w-10 h-10" />
              </button>
              <button className="p-3 mt-4 bg-black text-white rounded-xl">
                Cancelar
              </button>
            </>
          )}
          {!verMas && (
            <button
              onClick={() => setVerMas(true)}
              className="mt-4 p-3 bg-black text-white rounded-xl"
            >
              ¡Ver Mas!
            </button>
          )}
        </div>
      )}
    </div>
  );
};
