import Image from "next/image";

const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-200">
                <section className="flex flex-col md:flex-row items-center p-6 text-gray-800 mx-auto container py-16">
                    <div className="md:w-1/3 mx-auto">
                        <h2 className="lg:text-3xl text-2xl font-bold text-gray-800 lg:text-start text-center">Quem somos nos?</h2>
                        <div className="bg-pink-600 h-1 w-64 mb-4 lg:mx-0 mx-auto"></div>
                        <h3 className="text-xl text-gray-600 mb-4">Somos a M&M</h3>

                        <p className="mb-4 font-semibold">
                            Uma loja localizada em Samambaia Norte, especializada em
                            produtos de beleza e acessórios femininos. Temos como compromisso
                            oferecer a você produtos de alta qualidade que realçam sua autoestima,
                            beleza e estilo.
                        </p>
                        <p className="mb-4 font-semibold">
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
        </>


    );
}

export default AboutUs