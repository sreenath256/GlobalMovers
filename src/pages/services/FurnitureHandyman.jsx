import React from 'react';
import { motion } from 'framer-motion';
import {
    Hammer,
    Wrench,
    ArrowRight
} from 'lucide-react';
import { FurnitureInstallation1, FurnitureInstallation2, FurnitureInstallation3 } from '../../assets';

const FurnitureHandymanPage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <title>Furniture Installation & Handyman Services In Abu Dhabi</title>
            <meta name="description" content="Expert furniture installation and handyman services for homes & offices. Quick, affordable repairs, assembly, mounting & maintenance." />
            <link rel="canonical" href="https://globaliconmovers.com/services/furniture-handyman" />


            <div className="font-poppins bg-white">

                {/* Hero Section - Image 1 */}
                <section className="relative h-screen md:h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${FurnitureInstallation1})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Furniture Installation & Handyman Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                        >
                            Professional assembly, installation, and maintenance services to transform your space into a functional and beautiful environment.
                        </motion.p>
                    </div>
                </section>

                {/* Furniture Installation Section - Image 2 */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>

                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                Furniture Installation
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-xl ">
                                Installation isn’t about just putting things in a room, there is more to it at Global Icon Movers and Packers. It’s about designing a place that is both practical while being beautiful. A space that is yours and one that fits your vision. We are located in the heart of Abu Dhabi, and we’ve become the international premium destination. For professional furniture installation service in Abu Dhabi that stand out from the basics.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base md:text-xl">
                                As we recognize every piece of furniture has a story and should be handled with care. At Furniture Installation Service in Abu Dhabi our specialized service is to provide the space you dreamed of. From furnishing a new home to updating an office, or redesigning a commercial space. Our team draws upon unparalleled expertise, attention to detail and results on every project.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={FurnitureInstallation2}
                                alt="Furniture Installation"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Handyman Services Section - Image 3 */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="order-2 lg:order-1 relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={FurnitureInstallation3}
                                alt="Handyman Services"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            {...fadeInUp}
                            className="order-1 lg:order-2"
                        >

                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                Handyman Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-xl">
                                As a reliable Handyman Services provider in UAE, Global Icon Movers specializes in providing our customers with the best Handyman Services in Abu Dhabi. On depending on the changing dynamics of the emirate, our team of highly skilled handymen are what has been considered in some circles. When it comes to servicing homes and offices within professional reach and to the best of their abilities.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base md:text-xl">
                                For years we’ve worked with the Abu Dhabi community and know that with modern living. Which come versatile and efficient maintenance demands. Our handymen are not just workers, they are trained professionals. Where all can handle a sophisticated list of home and office repair and installation tasks. Whatever size project you have with regard to the smallest home repair to the most complex installation projects is. Our team is ready to provide exceptional service at unparalleled professionalism.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-8 md:py-12 bg-gray-900 text-white text-center">
                    <div className="w-11/12 max-w-4xl mx-auto">
                        <motion.h2
                            {...fadeInUp}
                            className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6"
                        >
                            Ready to Transform Your Space?
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed"
                        >
                            Contact Global Icon Movers today for expert furniture installation and reliable handyman services in Abu Dhabi.
                        </motion.p>
                        <motion.a
                            href="/contact-us"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-primary hover:bg-white hover:text-primary text-white px-10 py-4 rounded-full font-bold tracking-wider transition-all duration-300 uppercase"
                        >
                            Book Now <ArrowRight className="w-5 h-5" />
                        </motion.a>
                    </div>
                </section>

            </div>
        </>
    );
};

export default FurnitureHandymanPage;
