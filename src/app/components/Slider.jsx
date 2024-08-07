"use client"

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { Navigation, Autoplay } from 'swiper/modules';

const Slider = () => {
    return (
        <div className="flex justify-center items-center w-full overflow-hidden lg:h-auto h-96 p-4 bg-gray-100 pt-16">
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full "
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
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
        </div>
    );
};

export default Slider;
