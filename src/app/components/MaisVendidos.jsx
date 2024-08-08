"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { BsHandbag } from "react-icons/bs";


const MaisVendidos = () => {
    return (
        <div className="container mx-auto py-8 px-10">
            <h2 className="text-center lg:text-3xl text-2xl font-bold mb-6 cursor-default text-rose-800 hover:text-pink-800 transition-colors">Mais Vendidos</h2>
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
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/hidratantes.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/volumoso.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/antiacne.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/de-unhas.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/base.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/sombra.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/brincos.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/bolsa.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MaisVendidos;
