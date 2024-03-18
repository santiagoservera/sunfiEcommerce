'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
export const Carousel = () => {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{ delay: 1000 }}
        modules={[Pagination, Autoplay]}
        className="mb-10"
      >
        <SwiperSlide className="relative">
          <img
            src="/slider1.png"
            alt="banner-1"
            className="w-full h-[420px] lg:h-[620px] object-cover"
          />
          <div className="containerWidth">
            <img
              src="/suinfiHero.png"
              alt="banner-1"
              className="w-[100px] bottom-10 object-cover absolute lg:bottom-20 lg:w-[250px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/slider2.png"
            alt="banner-1"
            className="w-full h-[420px] lg:h-[620px] object-cover"
          />
          <div className="containerWidth">
            <img
              src="/suinfiHero.png"
              alt="banner-1"
              className="w-[100px] bottom-10 object-cover absolute lg:bottom-20 lg:w-[250px]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="/slider3.png"
            alt="banner-1"
            className="w-full h-[420px] lg:h-[620px] object-cover"
          />
          <div className="containerWidth">
            <img
              src="/suinfiHero.png"
              alt="banner-1"
              className="w-[100px] bottom-10 object-cover absolute lg:bottom-20 lg:w-[250px]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="flex w-full h-[200px] gap-10 justify-between containerWidth">
        <div className="flex gap-4">
          <div className="flex items-center">
            <img className="w-[50px]" src="/Audit.png" alt="audit-icon" />
          </div>
          <div className="flex justify-center flex-col leading-none">
            <h1 className="text-white font-bold text-xl">PERMANENT LICENSES</h1>
            <p className="text-white text-lg">on all our products</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <img
              className="w-[50px]"
              src="/Online Support.png"
              alt="audit-icon"
            />
          </div>
          <div className="flex justify-center flex-col leading-none">
            <h1 className="text-white font-bold text-xl">
              PERSONALIZED ATTENTION
            </h1>
            <p className="text-white text-lg">on our social medias</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center">
            <img className="w-[50px]" src="/Money Bag.png" alt="audit-icon" />
          </div>
          <div className="flex justify-center flex-col leading-none">
            <h1 className="text-white font-bold text-xl">EXCLUSIVE OFFERS</h1>
            <p className="text-white text-lg">every day</p>
          </div>
        </div>
      </div>
    </>
  );
};
