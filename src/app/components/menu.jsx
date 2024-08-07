import Image from "next/image"
import { FaHome } from "react-icons/fa";
import Link from "next/link";

const Menu = () => {
    return (
        <nav className="bg-black flex items-center  fixed w-full z-50">
            <div className="flex-shrink-0 lg:ml-3 ml-0">
                <Image
                    src="/mmLogo.png"
                    width={50}
                    height={50}
                    alt="Logo da MM"
                />
            </div>
            <ul className="flex-1 flex justify-center space-x-4 text-white font-semibold cursor-pointer">
                <li className="hover:text-red-300 flex"><FaHome className="text-xl mr-1 text-red-300" /> <Link href="" className="">Home</Link></li>
                <li className="hover:text-red-300">Sobre Nós</li>
                <li className="hover:text-red-300">Produtos</li>
                <li className="hover:text-red-300">Contato</li>
            </ul>
        </nav>
    );
};

export default Menu