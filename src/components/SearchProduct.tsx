//We indicate that we are working on the client side
'use client';
//Imports
//Service import
import fetchArticles from '@/services/Articles';
//Native imports
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
//Components imports
import { Loader } from './Loader';
import imgAlt from '../../public/altImgProduct.jpeg';
import { Router } from 'next/router';
export const SearchProduct = () => {
  const searchParams = useParams();
  const [dataSearch, setDataSearch] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false); // Inicializar isLoading en false
  const router = useRouter();
  // Búsqueda por consulta
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await fetchArticles(searchParams.query);

        if (results) {
          const dataNew = results.map((img: any) => {
            // Procesamiento de imágenes (igual al código anterior)
            const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;
            const uint8Array = new Uint8Array(arrayBuffer);
            let binaryString = '';
            uint8Array.forEach((byte) => {
              binaryString += String.fromCharCode(byte);
            });
            const base64Data = btoa(binaryString);
            const dataUrl = `data:image/png;base64,${base64Data}`;

            return {
              id: img.id,
              imagenNew: dataUrl,
            };
          });
          const data = results.map((item: any) => {
            return {
              ...item,
              imagen: dataNew.map((itemImg: any) => {
                return itemImg;
              }),
            };
          });
          setDataSearch(data);
        }
      } catch (error) {
        console.error(error); // Manejar el error de forma adecuada
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [searchParams.query]);
  console.log(dataSearch);

  const handleClickById = (productId: number) => {
    router.push(`/product-detail/${productId}`);
  };

  return (
    <>
      <div className="w-full items-center flex justify-center bgnewProduct ">
        {isLoading && <Loader />}
      </div>
      <div className="w-full h-full min-h-screen bgnewProduct">
        <div className="lg:w-full lg:flex lg:flex-row h-full ">
          <div className=" lg:w-[30%] h-full flex items-center ">
            {dataSearch.length >= 1 && (
              <div className="text-white bg-[#37133E] min-h-screen  h-full w-full my-auto">
                <div className="py-10 px-7 h-full">
                  <h1 className="text-xl font-semibold">
                    BUSQUEDAS RELACIONADAS:
                  </h1>
                </div>
                <div className="h-full px-7">
                  <div className="flex flex-row gap-3">
                    {' '}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#ffffff"
                        d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"
                      />
                    </svg>
                    BUSQUEDA
                  </div>
                  <div className="lg:pt-10">
                    <div className="flex flex-row gap-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#ffffff"
                          d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"
                        />
                      </svg>
                      FILTROS
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full h-full bgSearch p-7">
            {/* Map of products */}
            {dataSearch.map((item: any) => (
              <div className="bg-white lg:h-[300px] lg:w-full rounded-lg shadow-[0px_4px_4px_0px_#00000040] border border-[#0000004D] lg:mt-5">
                <div className="lg:w-full lg:flex lg:flex-row lg:py-5">
                  <div className="lg:w-[25%] lg:px-5 lg:h-full">
                    <div className="">
                      {item.imagen.map(
                        (itemCard: any) =>
                          itemCard.id === item.id && (
                            <div className="">
                              <img
                                src={itemCard.imagenNew}
                                alt="article img"
                                className=" rounded-full"
                              />
                            </div>
                          )
                      )}
                    </div>
                    {/* } } */}
                  </div>

                  <div className="lg:h-full lg:w-full lg:flex lg:flex-col ">
                    <div className="flex flex-col gap-10 pt-10 pb-5 ">
                      <p className="text-2xl font-semibold uppercase">
                        {item.nombre}
                      </p>
                      <p className="text-2xl font-normal flex flex-row text-start">
                        <td>$</td>
                        {item.precio}
                      </p>
                    </div>
                    <div className="w-full flex justify-end pr-10">
                      <button
                        onClick={() => handleClickById(item.id)}
                        className="w-[150px] text-center border-black border p-3 rounded-3xl font-bold"
                      >
                        VER
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!isLoading && (!dataSearch || dataSearch.length === 0) && (
          <div className="containerWidth lg:w-full text-center bg-white shadow-lg rounded-lg lg:flex lg:justify-between">
            <div className="lg:w-[100%] flex flex-row py-10 px-5">
              <div className="w-[30%]">
                <img
                  src="/noResultsEcommerce.jpg"
                  alt="No Results img"
                  className="w-[300px] h-[300px]"
                />
              </div>
              <div className="">
                <h1 className="lg:font-bold lg:text-2xl">
                  No hay publicaciones que coincidan con tu busqueda
                </h1>
                <p className="text-lg font-semibold">
                  * Revisá la ortografía de la palabra
                </p>
                <p className="text-lg font-semibold">
                  * Utilizá palabras más genéricas o menos palabras.
                </p>
              </div>

              <p></p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
