"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Autoplay } from 'swiper/modules';
import Link from 'next/link';

const Testimonials = () => {
    return (
        <div className='bg-gray-200 mt-3'>
            <div className="container mx-auto py-8">
                <h2 className="text-center text-2xl font-bold mb-6"> Clientes Felizes -
                    <Link
                        href="https://www.google.com/search?client=firefox-b-d&q=M%26M+MAKE+E+ACESSORIOS&dlnr=1&sei=XomqZvr0Nqqu5OUP_MeQsQo#dlnr=1&lrd=0x935bd38d8ad84ae3:0x82686e69468205c8,3,,,,"
                        className='hover:text-red-500 transition-all border-b-2 border-black'
                    >Nos Avalie
                    </Link>
                </h2>
                <Swiper
                    spaceBetween={30}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                    }}
                    className="mySwiper"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >

                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"A loja é incrível, tem produtos para todos os gostos e bolsos!"</p>
                            <p className="font-bold">Manoela - Duque de Caxias/RJ</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"O produto chegou perfeitamente, bem embalado e rápido."</p>
                            <p className="font-bold">Ana Carolina - São Paulo/SP</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"A loja é maravilhosa, os produtos são ótimos e o atendimento melhor ainda!"</p>
                            <p className="font-bold">Gabriela - Viamão/RS</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"Os produtos chegaram bem embalados. Amei!!!"</p>
                            <p className="font-bold">Laura - Toledo/PR</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"Os produtos chegaram bem embalados. Amei!!!"</p>
                            <p className="font-bold">Laura - Toledo/PR</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"Os produtos chegaram bem embalados. Amei!!!"</p>
                            <p className="font-bold">Laura - Toledo/PR</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4">"Os produtos chegaram bem embalados. Amei!!!"</p>
                            <p className="font-bold">Laura - Toledo/PR</p>
                            <div className="text-yellow-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>

    );
};

export default Testimonials;