"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoWhatsapp } from "react-icons/io";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Section 1: About Us */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-bold mb-4">Sobre Nós</h3>
                        <p className='text-gray-400 font-semibold'>Somos uma loja especializada em maquiagem, oferecendo produtos de alta qualidade para realçar sua beleza.</p>
                    </div>

                    {/* Section 3: Contato */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-bold mb-4">Contato</h3>
                        <p className="mb-2 text-gray-400 font-semibold" >Email: <a href="mailto:memmakedf@gmail.com" className="hover:text-red-300">memmakedf@gmail.com</a></p>
                        <p className='text-gray-400 font-semibold'>Telefone: <a href="tel:+556198227447" className="hover:text-red-300">+55 61 98227447</a></p>
                    </div>

                    {/* Section 4: Redes Sociais */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-bold mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-700 p-1 rounded-md flex items-center justify-center h-8 w-8 transform transition-all duration-500 ease-in-out hover:scale-110 ">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white bg-pink-600 p-1 rounded-md flex items-center justify-center h-8 w-8 transform transition-all duration-500 ease-in-out hover:scale-110 ">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white bg-blue-500 p-1 rounded-md flex items-center justify-center h-8 w-8 transform transition-all duration-500 ease-in-out hover:scale-110 ">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white bg-green-500 p-1 rounded-md flex items-center justify-center h-8 w-8 transform transition-all duration-500 ease-in-out hover:scale-110 ">
                                <IoLogoWhatsapp className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="text-center mt-8">
                    <p className="text-sm font-semi-bold">&copy; 2024 Criado por <Link target="_blank" href="https://wa.link/b4voez" className='font-bold hover:text-red-400'>Cefas</Link> - Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer
