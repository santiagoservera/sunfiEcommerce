'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/Auth';
import { fetchOneCart, createCart } from '@/services/Carrito';
import { fetchPagos } from '@/services/Pagos';
import { Carrito, Item } from '@/interfaces/Carrito';
import Image from 'next/image';

export const ModalCarrito = () => {
  const { cartResponse, dataLogin, showModal, setShowModal } = useAuth();
  const [cart, setCart] = useState<Carrito>();
  const [verMas, setVerMas] = useState(false);

  const handlePago = async () => {
    try {
      const pagoData = await fetchPagos(1, dataLogin.payload.carritoId);
      if (pagoData) {
        let link = document.createElement('a');
        link.href = pagoData.urlPago;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        const createCarrito = await createCart({
          usuarioId: dataLogin.payload.userId,
        }).then((res) => {
          localStorage.setItem(
            'dataLogin',
            JSON.stringify({
              ...dataLogin,
              payload: { ...dataLogin.payload, carritoId: res.data.id },
            })
          );
        });
        fetchOneCart(dataLogin.payload.userId).then((res) => {
          setCart(res);
        });
      }
    } catch (error) {
      console.error('Error fetching Pago:', error);
    }
  };

  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const carritoData = await fetchOneCart(dataLogin.payload.userId);
        setCart(carritoData);
      } catch (error) {
        console.error('Error fetching Cart:', error);
      }
    };
    fetchCarrito();
  }, [cartResponse]);
  return (
    <div
      className={`w-[500px] ${
        verMas ? 'h-auto' : 'h-[250px]'
      } bg-white rounded-xl text-zinc-900 flex p-8 relative`}
    >
      <p
        onClick={() => {
          setShowModal(!showModal);
        }}
        className="absolute top-0 right-3 cursor-pointer text-2xl font-bold"
      >
        x
      </p>
      {cart?.items && cart?.items?.length === 0 && (
        <div className="flex w-full flex-col justify-center items-center">
          <h1>Carrito</h1>
          <p>No hay productos en el carrito</p>
        </div>
      )}
      {cart && (
        <div className="flex flex-col">
          {cart.items.slice(0, 1).map((item: Item) => {
            return (
              <div key={item.id} className="flex gap-3 mb-3">
                <div className="flex justify-center items-center">
                  <Image
                    width={100}
                    height={70}
                    src="/acad.png"
                    className="object-cover"
                    alt="imagen-producto"
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
                <div key={item.id} className="flex gap-3 mb-3">
                  <div className="flex justify-center items-center">
                    <Image
                      width={100}
                      height={70}
                      src="/acad.png"
                      className="object-cover"
                      alt="imagen-producto"
                    />
                  </div>
                  <div>
                    <p>{item.nombre}</p>
                    <p>
                      {item.CarritoArticulo.cantidad}x{item.precio}
                    </p>
                  </div>
                </div>
              );
            })}
          {verMas && (
            <>
              <button
                onClick={handlePago}
                className="p-[7px] bg-[#009ee3] mt-4 rounded-xl text-white flex justify-center text-center items-center"
              >
                ¡Pagar con MERCADO PAGO!
                <Image
                  width={40}
                  height={40}
                  src="/logo-mp.png"
                  alt="logo-mp"
                />
              </button>
              <button
                onClick={() => {
                  setShowModal(!showModal);
                }}
                className="p-3 mt-4 bg-black text-white rounded-xl"
              >
                Cancelar
              </button>
            </>
          )}
          {cart.items.length > 0 && !verMas && (
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
