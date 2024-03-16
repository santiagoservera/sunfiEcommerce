'use client';
import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/Auth';
import { fetchProductById } from '@/services/Articles';
import { fetchOneCart } from '@/services/Carrito';

export const ModalCarrito = () => {
  const { cartResponse, dataLogin } = useAuth();
  useEffect(() => {
    const fetchCarrito = async () => {
      try {
        const carritoData = await fetchOneCart(dataLogin.payload.carritoId);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchCarrito();
  }, [cartResponse]);
  return (
    <div className="w-[300px] h-[200px] bg-white rounded-xl">
      <div>carrito</div>
    </div>
  );
};
