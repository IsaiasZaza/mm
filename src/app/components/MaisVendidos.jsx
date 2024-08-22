"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { BsHandbag } from "react-icons/bs";
import Link from 'next/link';


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
                        <h3 className="text-base font-semibold">Hidratante para o rosto e corpo 200ML - Colornow</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 30,00</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 23,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex bg-pink-500 
                        text-white font-semibold hover:bg-pink-700 
                        hover:text-gray-50 justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/ox2xvq">Comprar</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/volumoso.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base font-semibold">Gloss lip volumoso vegano</h3>
                        <p className='text-sm'>Auxilia no aumento do volume dos lábios</p>
                        <span className='flex text-base gap-1 mt-4'> de <p className='text-base line-through'>R$ 15,00</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 13,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex 
                        bg-pink-500 text-white font-semibold 
                        hover:bg-pink-700 hover:text-gray-50 
                        justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/pry5j6">Comprar</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/antiacne.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base font-semibold">Sérum Facial Bioativo Antiacne 30ml <p>10 em 1</p></h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 18,00</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 15,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex 
                        bg-pink-500 text-white font-semibold 
                        hover:bg-pink-700 hover:text-gray-50 
                        justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/afzu0n">Comprar</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/de-unhas.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base font-semibold">Tratamento De Unha Minhas Unhas Minhas Regras - Super Poderes</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 10,00</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 8,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex 
                        bg-pink-500 text-white font-semibold 
                        hover:bg-pink-700 hover:text-gray-50 
                        justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/9mas24">Comprar</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/base.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base font-semibold">Base Liquida Matte New - Lua e Neve</h3>
                        <p className='text-sm'>Proporcionar uma cobertura impecável</p>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 20,00</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl mt-1">R$ 17,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex 
                        bg-pink-500 text-white font-semibold 
                        hover:bg-pink-700 hover:text-gray-50 
                        justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/b648gw">Comprar</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/sombra.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base font-semibold">Rubyrose E HBF572 Quarteto Sombra Sobrancelha</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 22,00</p>por:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 20,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex 
                        bg-pink-500 text-white font-semibold 
                        hover:bg-pink-700 hover:text-gray-50 
                        justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/ei7dls">Comprar</Link></button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col text-start">
                        <img
                            src="/brincos.jpg"
                            alt="Product 1"
                            className="mb-4 rounded-md"
                        />
                        <h3 className="text-base font-semibold">Brincos femininos e modernos de diversos modelos</h3>
                        <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 12,00</p>A partir de:</span>
                        <p className="text-pink-800 font-bold text-2xl">R$ 5,00</p>
                        <p className='text-sm text-stone-400'>A vista no PIX</p>
                        <button 
                        className=" 
                        mt-2 py-2 px-4 
                        rounded-full flex 
                        bg-pink-500 text-white font-semibold 
                        hover:bg-pink-700 hover:text-gray-50 
                        justify-center transition-all">
                        <BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/2gqx73">Comprar</Link></button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default MaisVendidos;
