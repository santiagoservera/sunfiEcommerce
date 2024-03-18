'use client';
import img1 from '../../public/Adobe Photoshop 2024.png';
import { useRouter } from 'next/navigation';
import fetchArticles from '@/services/Articles';
import React from 'react';
import { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';

export const Products = () => {
  const [articles, setArticles] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchArticles();
        const dataImg = data.map((img: any) => {
          const arrayBuffer = new Uint8Array(img?.imagen1?.data).buffer;

          // Convertir el ArrayBuffer a Uint8Array
          const uint8Array = new Uint8Array(arrayBuffer);

          // Convertir los datos binarios en una cadena base64
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
        const dataNew = data.map((item: any) => {
          return {
            ...item,
            imagen: dataImg.map((itemImg: any) => {
              return itemImg;
            }),
          };
        });
        setArticles(dataNew);
      } catch (error) {
        // Manejar el error si es necesario
      }
    };

    fetchData();
  }, []);

  const handleClickById = (productId: number) => {
    router.push(`/product-detail/${productId}`);
  };

  return (
    <>
      <div className="bg-white  bg-opacity-90 w-fit mx-auto rounded-t-3xl py-2 px-7">
        <h1 className="text-2xl lg:text-lg font-semibold  text-center text-black">
          Lista de Productos
        </h1>
      </div>

      <section className="containerWidth px-10 py-10 lg:py-10 bg-white  bg-opacity-90 rounded-2xl ">
        <Swiper
          slidesPerView={3}
          spaceBetween={320}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(0, 9).map((item: any) => (
            <SwiperSlide className="flex items-center justify-center">
              <div className="w-[300px] h-[460px] flex flex-col justify-center items-center gap-2">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
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

                  <div className="text-center">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          spaceBetween={320}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(10, 20).map((item: any) => (
            <SwiperSlide className="flex items-center justify-center">
              <div className="w-[300px] h-[460px] flex flex-col justify-center items-center gap-2">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
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
                  <div className="text-center">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={3}
          spaceBetween={320}
          navigation={true}
          modules={[Navigation]}
          className="w-full mr-0 ml-0"
          breakpoints={{
            '@0.00': {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            '@0.75': {
              slidesPerView: 1,
            },
            '@1.00': {
              slidesPerView: 2,
            },
            '@1.50': {
              slidesPerView: 3,
            },
            '@2': {
              slidesPerView: 3,
            },
          }}
        >
          {articles.slice(21, 31).map((item: any) => (
            <SwiperSlide className="flex items-center justify-center">
              <div className="w-[300px] h-[460px] flex flex-col justify-center items-center gap-2">
                <a
                  onClick={() => handleClickById(item.id)}
                  className="cursor-pointer"
                >
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
                  <div className="text-center">
                    <p className="font-semibold text-sm lg:w-[100%] text-black">
                      {item.nombre}
                    </p>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};
