"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { BsHandbag } from "react-icons/bs";
import Link from 'next/link';

const Lancamento = () => {

    return (
        <div className="container mx-auto py-8 px-10">
            <h2 className="text-center lg:text-3xl text-2xl font-bold mb-6 cursor-default text-rose-800 hover:text-pink-800 transition-colors">Acessorios & Maquiagens</h2>
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
                        <div className="flex flex-col text-start">
                            <img
                                src="/batao-bala.jpg"
                                alt="Product 1"
                                className="mb-4 rounded-md"
                            />
                            <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                            <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                            <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                            <p className='text-sm text-stone-400'>A vista no PIX</p>
                            <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' /><Link target="_blank" href="https://wa.link/wiv0um">Comprar</Link></button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex flex-col text-start">
                            <img
                                src="/limpador.jpg"
                                alt="Product 2"
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
                                src="/base-liquida.jpg"
                                alt="Product 3"
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
                                src="/removedor-de-maquiagem.jpg"
                                alt="Accessory 3"
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
                                src="/gloss.jpg"
                                alt="Accessory 3"
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
                                src="/brinco.jpg"
                                alt="Accessory 3"
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
                                src="/prata.jpg"
                                alt="Accessory 3"
                                className="mb-4 rounded-md"
                            />
                            <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                            <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                            <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                            <p className='text-sm text-stone-400'>A vista no PIX</p>
                            <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                        </div>
                    </SwiperSlide>
                </>
                <>
                    <SwiperSlide> {/*MAQUIAGENS*/}
                        <div className="flex flex-col text-start">
                            <img
                                src="/preta.jpg"
                                alt="Accessory 1"
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
                                src="/sabonete.jpg"
                                alt="Accessory 2"
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
                                src="/unha.jpg"
                                alt="Accessory 3"
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
                                src="/cristal.jpg"
                                alt="Accessory 3"
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
                                src="/caneta.jpg"
                                alt="Accessory 3"
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
                                src="/skin-care.jpg"
                                alt="Accessory 3"
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
                                src="/melancia.jpg"
                                alt="Accessory 3"
                                className="mb-4 rounded-md"
                            />
                            <h3 className="text-base">Refil Creme Acetinado Desodorante Hidratante Corporal Lily Absolu 250g</h3>
                            <span className='flex text-base gap-1 mt-3'> de <p className='text-base line-through'>R$ 90,90</p>por:</span>
                            <p className="text-pink-800 font-bold text-2xl">R$ 75,90</p>
                            <p className='text-sm text-stone-400'>A vista no PIX</p>
                            <button className=" mt-2 py-2 px-4 rounded-full flex bg-pink-500 text-white font-semibold hover:bg-pink-700 hover:text-gray-50 justify-center transition-all"><BsHandbag className='text-xl mr-1' />Comprar</button>
                        </div>
                    </SwiperSlide>
                </>
            </Swiper>
        </div>
    );
};

export default Lancamento;
