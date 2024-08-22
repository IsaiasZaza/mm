"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <>

      <div className=" justify-center items-center w-full overflow-hidden h-auto bg-cover bg-gray-100 hidden lg:block py-12">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full bg-cover"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src="/banner01.png"
              layout="responsive"
              width={1900}
              height={1080}
              alt="Logo da MM"
              className="object-cover w-full h-auto rounded-lg shadow-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/banner02.png"
              layout="responsive"
              width={1900}
              height={600}
              alt="Logo da MM"
              className="object-cover w-full h-auto rounded-lg shadow-md"
            />
          </SwiperSlide>
        </Swiper>

        <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #7c3aed; /* Roxo */
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background-color: #5b21b6; /* Roxo escuro */
        }
      `}</style>
      </div>

      

      <div className=" justify-center items-center w-full overflow-hidden h-auto bg-cover bg-gray-100 pt-12 lg:pt-11 lg:hidden">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[Navigation, Autoplay, Pagination]}
          className="mySwiper w-full bg-cover"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <Image
              src="/BANNER_EX.png"
              layout="responsive"
              width={1900}
              height={1080}
              alt="Logo da MM"
              className="object-cover w-full h-auto rounded-lg shadow-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/banner-teste.png"
              layout="responsive"
              width={1900}
              height={600}
              alt="Logo da MM"
              className="object-cover w-full h-auto rounded-lg shadow-md"
            />
          </SwiperSlide>
        </Swiper>

        <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ffc0cb; /* Roxo */
          opacity: 0.7;
        }
        .swiper-pagination-bullet-active {
          background-color: #5b21b6; /* Roxo escuro */
        }
      `}</style>
      </div>
    </>


  );
};

export default Slider;
