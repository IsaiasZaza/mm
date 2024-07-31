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
        <div className="flex justify-center items-center w-full overflow-hidden">
            <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper w-full"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                <SwiperSlide>
                    <Image
                        src="/banner-1.jpg"
                        width={1000}
                        height={1500}
                        alt="Logo da MM"
                        className="w-full h-auto"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src="/banner-2.jpg"
                        width={1000}
                        height={1500}
                        alt="Logo da MM"
                        className="w-full h-auto"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider