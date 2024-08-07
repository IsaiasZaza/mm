"use client";
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-8 mt-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* Section 1: About Us */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Sobre Nós</h3>
                        <p>Somos uma loja especializada em maquiagem, oferecendo produtos de alta qualidade para realçar sua beleza.</p>
                    </div>

                    {/* Section 3: Contato */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Contato</h3>
                        <p className="mb-2">Email: <a href="mailto:memmakedf@gmail.com" className="hover:text-red-300">memmakedf@gmail.com</a></p>
                        <p>Telefone: <a href="tel:+556198227447" className="hover:text-red-300">+55 61 98227447</a></p>
                    </div>

                    {/* Section 4: Redes Sociais */}
                    <div className="w-full md:w-1/4 mb-6">
                        <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-blue-700 hover:text-white">
                                <FaFacebookF className="text-xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-pink-600 hover:text-white">
                                <FaInstagram className="text-xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-blue-500 hover:text-white">
                                <FaTwitter className="text-xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 bg-blue-5 hover:text-white">
                                <FaLinkedin className="text-xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section: Copyright */}
                <div className="text-center mt-8">
                    <p className="text-sm">&copy; 2024 Mm make e acessórios. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer
