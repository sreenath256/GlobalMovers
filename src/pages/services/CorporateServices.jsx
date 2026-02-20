import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Layout,
    ArrowRight
} from 'lucide-react';
import { CorporateService1, CorporateService2, OfficeRelocation1, OfficeRelocation3 } from '../../assets';
import HeroButton from '../../components/ui/HeroButton';

const CorporateServicesPage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <div className="font-poppins bg-white">

            {/* Hero Section - Image 1 */}
            <section className="relative h-screen md:h-[60vh] md:min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                        backgroundImage: `url(${OfficeRelocation1})`
                    }}
                ></div>

                <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-4xl md:text-6xl font-medium uppercase leading-tight tracking-wide mb-6"
                    >
                        Corporate Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                    >
                        Stunning commercial space solutions designed to provide a world-class environment in the heart of Abu Dhabi.
                    </motion.p>
                </div>
            </section>

            {/* Introduction Section - Image 2 */}
            <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div {...fadeInUp}>

                        <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                            Global Icon Storage
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            Global Icon Storage, carved from the heart of Abu Dhabi’s bustling business hub, stands as a conspicuous symbol of stunning commercial space solutions. In our sophisticated commercial spaces, we design our spaces to provide a world class environment that is functional, innovative and prestigious with respect to the changing business needs.
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
                            src={CorporateService1}
                            alt="Global Icon Storage"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Custom Layouts Section - Image 3 */}
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
                            src={CorporateService2}
                            alt="Customizable Layouts"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                    <motion.div
                        {...fadeInUp}
                        className="order-1 lg:order-2"
                    >

                        <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                            Fully Customizable Layouts
                        </h2>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We provide fully customizable layouts, that adapt to your specific business needs, so there’s no need to understand how every business is implemented. Whether you are a startup that needs an agile workspace or an enterprise that needs complex configurations, our commercial spaces are the nimble of transformation to put you into reality.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Commercial Space Storage Services in Abu Dhabi designs the space in sync with the brand identity and operational strategy for your company. From open plan designs to segmented work areas; we ensure that your space answers to your brand’s identity.
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
                        Elevate Your Business Environment
                    </motion.h2>
                    <motion.p
                        {...fadeInUp}
                        className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed"
                    >
                        Contact Global Icon Storage today to discuss your commercial space requirements in Abu Dhabi.
                    </motion.p>
                    <HeroButton text="Enquire Now" link="/contact-us" />
                </div>
            </section>

        </div>
    );
};

export default CorporateServicesPage;
