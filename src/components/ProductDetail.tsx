'use client';
import { useEffect, useState } from 'react';
import { fetchProductById } from '@/services/Articles';
import { useParams } from 'next/navigation';
import { Loader } from './Loader';
import { Navbar } from './Navbar';

type typeDetail = {
  id:          number;
  nombre:      string;
  descripcion: null;
  precio:      number;
  imagen1:     string;
  categoria:   typeCategoria;
}

type typeCategoria = {
  id:     number;
  codigo: string;
  nombre: string;
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<typeDetail>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      setIsLoading(true);
      try {
        const productData = await fetchProductById(id);
        setProduct(productData);
        console.log(productData)
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
          {isLoading && <Loader/>}
          {!isLoading && (
          <div className='flex justify-center items-center'>
        <div className="w-[50%] flex flex-col gap-9">
          <h2 className="text-4xl font-bold">{product?.nombre}</h2>
          <p className="-mt-8">{product?.descripcion}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dictum laoreet ipsum, ac efficitur erat tempus ut. Nam ut aliquet metus, sit amet.</p>
          <h2 className="text-4xl font-bold">${product?.precio}</h2>
          <div className="flex flex-row">
            <div className="flex flex-row mr-7 bg-[#f6eef9] gap-3 items-center px-4 rounded-xl font-semibold">
              <button>+</button>
              <p className="w-4">10</p>
              <button>-</button>
            </div>
            <button className="bg-black text-white px-10 py-2 rounded-full focus:shadow-2xl">
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
