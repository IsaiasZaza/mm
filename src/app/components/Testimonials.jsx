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
        <div className="bg-slate-100 mt-3 py-8">
            <div className="container mx-auto">
                <h2 className="text-center text-2xl font-semibold mb-6 cursor-default">
                    Clientes Felizes -
                    <Link
                        target="_blank"
                        href="https://www.google.com/search?client=firefox-b-d&q=M%26M+MAKE+E+ACESSORIOS&dlnr=1&sei=XomqZvr0Nqqu5OUP_MeQsQo#dlnr=1&lrd=0x935bd38d8ad84ae3:0x82686e69468205c8,3,,,,"
                        className="hover:text-pink-500 transition-all border-b-2 border-pink-700 text-pink-700 hover:border-b-4 font-bold ml-2"
                    >
                        Nos Avalie
                    </Link>
                </h2>
                <Swiper
                    spaceBetween={30}
                    navigation={true}
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
                            slidesPerView: 3,
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
                            <p className="italic mb-4 font-bold">"A loja é incrível, tem produtos para todos os gostos e bolsos!"</p>
                            <p>Manoela - Duque de Caxias/RJ</p>
                            <div className="text-pink-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4 font-bold">"O produto chegou perfeitamente, bem embalado e rápido."</p>
                            <p>Ana Carolina - São Paulo/SP</p>
                            <div className="text-pink-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4 font-bold">"A loja é maravilhosa, os produtos são ótimos e o atendimento melhor ainda!"</p>
                            <p>Gabriela - Viamão/RS</p>
                            <div className="text-pink-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4 font-bold">"Os produtos chegaram bem embalados. Amei!!!"</p>
                            <p>Laura - Toledo/PR</p>
                            <div className="text-pink-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4 font-bold">"Atendimento excelente, recomendo para todos."</p>
                            <p>Mariana - Rio de Janeiro/RJ</p>
                            <div className="text-pink-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4 font-bold">"Produtos de qualidade, voltarei a comprar com certeza."</p>
                            <p>Felipe - Belo Horizonte/MG</p>
                            <div className="text-pink-500">
                                ★★★★★
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-white p-6 shadow-md rounded-lg text-center">
                            <p className="italic mb-4 font-bold">"Melhor loja de acessórios que já comprei."</p>
                            <p>Camila - Salvador/BA</p>
                            <div className="text-pink-500">
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
