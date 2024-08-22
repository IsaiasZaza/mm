"use client"

import Image from "next/image";

const AboutUs = () => {
    return (
        <>
<div className="relative bg-slate-100 cursor-default">
    <section 
        className="flex flex-col md:flex-row items-center p-6 text-gray-800 mx-auto container py-16 relative z-10"
    >
        <div className="md:w-1/3 mx-auto p-4 rounded-lg">
            <h2 className="lg:text-3xl text-xl font-bold lg:text-start text-center text-pink-950">Quem somos nos?</h2>
            <div className="bg-rose-700 h-1 w-64 mb-4 lg:mx-0 mx-auto"></div>
            <h3 className="lg:text-xl text-base text-pink-950 mb-4 font-semibold">Somos a M&M</h3>

            <p className="mb-4 font-semibold text-pink-950 lg:text-lg text-base">
                Uma loja localizada em Samambaia Norte, especializada em
                produtos de beleza e acessórios femininos. Temos como compromisso
                oferecer a você produtos de alta qualidade que realçam sua autoestima,
                beleza e estilo.
            </p>
            <p className="mb-4 font-semibold text-pink-950 lg:text-lg text-base">
                Nossa missão é proporcionar uma experiência única de compras,
                oferecendo produtos  de beleza e acessórios que atendam às
                necessidades e desejos das nossas clientes.
            </p>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-0">
            <Image
                src="/quem2.png"
                alt="About Us"
                width={600}
                height={600}
                className="rounded-3xl shadow-sm transition-all shadow-slate-600"
            />
        </div>
    </section>

    {/* Background com opacidade */}
    <div 
        className="absolute top-0 left-0 w-full h-full"
        style={{ 
            backgroundImage: 'url(/teste3.jpg)', 
            backgroundAttachment: 'fixed', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            opacity: 0.5, // Controle da opacidade do fundo
            zIndex: 1 
        }} 
    />
</div>

        </>


    );
}

export default AboutUs