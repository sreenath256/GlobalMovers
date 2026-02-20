import { motion } from 'framer-motion';
import {
    ArrowRight
} from 'lucide-react';
import { CommercialSpaceImage, OfficeRelocation2 } from '../../assets'; // Reusing OfficeRelocation2 as a secondary image
import HeroButton from '../../components/ui/HeroButton';

const CommercialSpacePage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <title>Commercial Space Storage Services in Abu Dhabi | Global Icon</title>
            <meta name="description" content="Transform your business with customizable commercial space storage services in Abu Dhabi with brand-aligned workspace solutions." />
            <link rel="canonical" href="https://globaliconmovers.com/services/commercial-space" />

            <div className="font-poppins bg-white">

                {/* Hero Section - Image 1 */}
                <section className="relative h-screen md:h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${CommercialSpaceImage})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Commercial Space
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                        >
                            Stunning commercial space solutions designed to provide a world-class environment in the heart of Abu Dhabi.
                        </motion.p>
                    </div>
                </section>

                {/* Section 1 - Image 2 */}
                <section className="py-8 md:py-12">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                Global Icon Storage
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
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
                                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                                alt="Global Icon Storage"
                                className="w-full h-full object-cover"
                            />
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
                            Design Your Perfect Workspace
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed"
                        >
                            Contact us to explore our fully customizable commercial space solutions.
                        </motion.p>
                        <HeroButton name='Enquire Now' link='/contact-us' />
                    </div>
                </section>

            </div>
        </>
    );
};

export default CommercialSpacePage;
