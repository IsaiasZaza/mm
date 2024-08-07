import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="bg-gray-200">
            <section className="flex flex-col md:flex-row items-center p-6 text-gray-800 mx-auto container">
                <div className="md:w-1/3 mx-auto">
                    <h2 className="text-3xl font-bold">Quem somos nos?</h2>
                    <div className="bg-pink-600 h-1 w-64 mb-4 "> </div>
                    <h3 className="text-xl text-gray-600 mb-4">Somos a M&M</h3>
                    
                    <p className="mb-4">
                    Uma loja localizada em Samambaia Norte, especializada em 
                    produtos de beleza e acessórios femininos. Temos como compromisso
                    oferecer a você produtos de alta qualidade que realçam sua autoestima,
                    beleza e estilo.
                    </p>
                    <p className="mb-4">
                    Nossa missão é proporcionar uma experiência única de compras, 
                    oferecendo produtos  de beleza e acessórios que atendam às
                    necessidades e desejos das nossas clientes.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-">
                    <Image
                        src="/quem2.png"
                        alt="About Us"
                        width={600}
                        height={600}
                        className="rounded shadow-2xl hover:shadow-xl transition-all "
                    />
                </div>
            </section>
        </div>

    );
}

export default AboutUs