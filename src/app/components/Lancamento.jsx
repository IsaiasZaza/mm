"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { BsHandbag } from "react-icons/bs";

const Lancamento = () => {

    return (
        <div className="container mx-auto py-8 px-10">
            <h2 className="text-center text-3xl font-bold mb-6 cursor-pointer text-red-600 hover:text-red-800 transition-colors">Acessorios & Maquiagens</h2>
            <Swiper
                spaceBetween={30}
                navigation={true}
                modules={[Navigation]}
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
               
                    <>
                        <SwiperSlide>  {/*ACESSORIOSSSSS*/}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/batao-bala.jpg"
                                    alt="Product 1"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">a Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                                <p className="text-gray-800 font-bold">R$ 75,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/limpador.jpg"
                                    alt="Product 2"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Refil Creme Acetinado Hidratante Desodorante Corporal Lily 250g</h3>
                                <p className="text-gray-800 font-bold">R$ 75,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Product 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Gloss Labial Vermelho Morango Intense Bubbaloo 5ml</h3>
                                <p className="text-gray-800 font-bold">R$ 42,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                    </>
                    <>
                        <SwiperSlide> {/*MAQUIAGENS*/}
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 1"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Brinco de Argola Grande</h3>
                                <p className="text-gray-800 font-bold">R$ 39,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 2"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Bolsa de Couro Preta</h3>
                                <p className="text-gray-800 font-bold">R$ 149,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="flex flex-col items-center text-center">
                                <img
                                    src="/base-liquida.jpg"
                                    alt="Accessory 3"
                                    className="mb-4"
                                />
                                <h3 className="text-lg font-medium">Óculos de Sol Estiloso</h3>
                                <p className="text-gray-800 font-bold">R$ 89,90</p>
                                <button className="mt-2 py-2 px-4 rounded-full flex items-center bg-red-500 text-white font-semibold hover:bg-red-700 hover:text-gray-50 transition-all">
                                    <BsHandbag className='text-xl mr-1' /> Comprar
                                </button>
                            </div>
                        </SwiperSlide>
                    </>
            </Swiper>
        </div>
    );
};

export default Lancamento;
