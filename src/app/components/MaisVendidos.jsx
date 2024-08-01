"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { BsHandbag } from "react-icons/bs";


const MaisVendidos = () => {
    return (
        <div className="container mx-auto py-8 px-10">
            <h2 className="text-center text-2xl font-bold mb-6">Mais Vendidos</h2>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
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
            >
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/brinco.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <p className="text-gray-500">2x de R$ 37,95</p>
                        <p className="text-gray-800 font-bold">R$ 75,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/limpador.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Refil Creme Acetinado Hidratante Desodorante Corporal Lily 250g</h3>
                        <p className="text-gray-500">2x de R$ 37,95</p>
                        <p className="text-gray-800 font-bold">R$ 75,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/bolsa.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Gloss Labial Vermelho Morango Intense Bubbaloo 5ml</h3>
                        <p className="text-gray-800 font-bold">R$ 42,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/brinco.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Sabonete Líquido Corpo Nativa SPA Ameixa Negra 200ml</h3>
                        <p className="text-gray-800 font-bold">R$ 49,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/limpador.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Sabonete Líquido Corpo Nativa SPA Ameixa Negra 200ml</h3>
                        <p className="text-gray-800 font-bold">R$ 49,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/path-to-image1.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Sabonete Líquido Corpo Nativa SPA Ameixa Negra 200ml</h3>
                        <p className="text-gray-800 font-bold">R$ 49,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/path-to-image1.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Sabonete Líquido Corpo Nativa SPA Ameixa Negra 200ml</h3>
                        <p className="text-gray-800 font-bold">R$ 49,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center text-center">
                        <img
                            src="/path-to-image1.jpg"
                            alt="Product 1"
                            className="mb-4"
                        />
                        <h3 className="text-lg font-medium">Sabonete Líquido Corpo Nativa SPA Ameixa Negra 200ml</h3>
                        <p className="text-gray-800 font-bold">R$ 49,90</p>
                        <button className="mt-2 py-2 px-4 rounded-full flex bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all"><BsHandbag className='text-xl mr-1'/>Comprar</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MaisVendidos;
