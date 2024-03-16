'use client';
import { useEffect, useState } from 'react';
import { fetchProductById } from '@/services/Articles';
import { useParams, useRouter } from 'next/navigation';
import { Loader } from './Loader';
import { Navbar } from './Navbar';
import { useAuth } from '@/context/Auth';
import { addProductToCart } from '@/services/Carrito';
import { privateDecrypt } from 'crypto';

type typeDetail = {
  id: number;
  nombre: string;
  descripcion: null;
  precio: number;
  imagen1: string;
  categoria: typeCategoria;
};

type typeCategoria = {
  id: number;
  codigo: string;
  nombre: string;
};

const ProductDetail = () => {
  const { dataLogin, setCartResponse, setShowModal } = useAuth();
  const { payload } = dataLogin;
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<typeDetail>();
  const [isLoading, setIsLoading] = useState(false);
  const [cantidad, setCantidad] = useState(1);

  const handleIncrement = () => {
    setCantidad(cantidad + 1);
  };

  const handleDecrement = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleAddToCart = () => {
    if (dataLogin?.userLogin) {
      addProductToCart(payload.carritoId, {
        articuloId: product?.id,
        precio: product?.precio,
        cantidad: cantidad,
      }).then((response) => {
        if (response) {
          setCartResponse(true);
          setShowModal(true);
        }
      });
    } else {
      router.push('/auth#login');
    }
  };

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
      setIsLoading(false);
    };

    fetchProduct();
  }, [id]);

  return (
    <>
      <Navbar></Navbar>
      <div className="bg-gradient-to-tr from-[#9378a5] to-[#f6eef9] w-full h-[100vh] flex items-center justify-center">
        <div className="container-width-ecommerce flex flex-row justify-between items-center">
          {isLoading && <Loader />}
          {!isLoading && (
            <div className="flex justify-center items-center">
              <div className="w-[50%] flex flex-col gap-9">
                <h2 className="text-4xl font-bold">{product?.nombre}</h2>
                <p className="-mt-8">
                  {product?.descripcion}Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Vestibulum dictum laoreet ipsum, ac efficitur
                  erat tempus ut. Nam ut aliquet metus, sit amet.
                </p>
                <h2 className="text-4xl font-bold">${product?.precio}</h2>
                <div className="flex flex-row">
                  <div className="flex flex-row mr-7 bg-[#f6eef9] gap-3 items-center px-4 rounded-xl font-semibold">
                    <button onClick={handleIncrement}>+</button>
                    <p className="w-4">{cantidad}</p>
                    <button onClick={handleDecrement}>-</button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="bg-black text-white px-10 py-2 rounded-full focus:shadow-2xl"
                  >
                    AGREGAR AL CARRITO
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
