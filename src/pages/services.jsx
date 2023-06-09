import Navbar from "@/Components/Navbar";

const services = () => {
    return (
        <div>
        <Navbar />
        <div className="w-full mt-5 flex justify-center items-center">
            <section className="bg-black text-gray-100">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">This is the
                        <span className="text-violet-400"> Service</span> section
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab amet vero eaque explicabo!</p>
                    <div className="flex flex-wrap justify-center">
                        <button className="px-8 py-3 m-2 text-lg font-semibold rounded bg-violet-400 text-gray-900">Get started</button>
                        <button className="px-8 py-3 m-2 text-lg border rounded text-gray-50 border-gray-700">Learn more</button>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
};

export default services;