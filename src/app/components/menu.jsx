"use client"
import Image from "next/image"
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import React, { useState, useEffect } from 'react';

const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 700) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={` fixed flex items-center w-full z-50 transition duration-300 ${isScrolled ? 'bg-black shadow-2xl opacity-80 transition-all' : 'bg-black'}`}>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex-shrink-0 lg:ml-3 ml-0">
                    <Image
                        src="/mmLogo.png"
                        width={50}
                        height={50}
                        alt="Logo da MM"
                    />
                </div>
                <ul className="flex-1 flex justify-center space-x-4 text-white font-semibold cursor-pointer">
                    <li className="hover:text-pink-300 flex"><Link href="#" className="">Home</Link></li>
                    <li className="hover:text-pink-300"> <Link href="#sobre">Sobre Nós</Link></li>
                    <li className="hover:text-pink-300"> <Link href="#produtos">Produtos</Link></li>
                    <li className="hover:text-pink-300"> <Link href="#contato">Contato</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu