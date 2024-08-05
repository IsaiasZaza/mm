import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="bg-gray-200">
            <section className="flex flex-col md:flex-row items-center p-6 text-gray-800 mx-auto container">
                <div className="md:w-1/3 mx-auto">
                    <h2 className="text-3xl font-bold mb-2">Quem somos nos?</h2>
                    <h3 className="text-xl text-gray-600 mb-4">emmmmm?</h3>
                    <p className="mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor
                        consequat ante, non interdum erat tempor sit amet. Ut nec tellus dui.
                        Vivamus auctor eget nibh sed tincidunt. Praesent maximus sem vel ante
                        gravida cursus. Integer tristique lacus nec sodales lobortis. Nullam
                        posuere nulla ut pharetra rhoncus.
                    </p>
                    <p className="mb-4">
                        Nullam pulvinar elit et nisl aliquam sollicitudin. Sed ut sem in
                        tortor aliquet elementum. Proin neque nisi, vestibulum vel laoreet
                        vel, elementum sit amet lacus. Vivamus sed luctus eros. Mauris nec
                        pellentesque ipsum. Curabitur eu pharetra dolor.
                    </p>
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                    <Image
                        src="/banner01.jpg"
                        alt="About Us"
                        width={600}
                        height={600}
                        className="rounded shadow-2x1 hover:shadow-md transition-all "
                    />
                </div>
            </section>
        </div>

    );
}

export default AboutUs