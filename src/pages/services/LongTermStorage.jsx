
import { motion } from 'framer-motion';
import {
    ArrowRight
} from 'lucide-react';
import { LongTermStorageImage, StorageUnitImage } from '../../assets';
import HeroButton from '../../components/ui/HeroButton';


const LongTermStoragePage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <title>Long Term Storage Solutions in Abu Dhabi | Storage Services</title>
            <meta name="description" content="Secure, climate-controlled long-term storage solutions in Abu Dhabi. 24/7 security, flexible rental terms & easy access." />
            <link rel="canonical" href="https://globaliconmovers.com/services/long-term-storage-solutions-in-abu-dhabi" />

            <div className="font-poppins bg-white">

                {/* Hero Section - Image 1 */}
                <section className="relative h-screen md:h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${LongTermStorageImage})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Long-term Storage
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                        >
                            Secure, climate-controlled storage solutions for your extended needs in Abu Dhabi.
                        </motion.p>
                    </div>
                </section>

                {/* Main Content Section - Image 2 */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                Extended Storage Solutions
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                For those who require storage for extended periods, Global Icon Movers & Storage offers reliable and secure long-term storage solutions. Whether you’re storing household furniture business inventory. Or important documents, our facilities are equipped to handle your needs. Our climate-controlled units ensure that sensitive items are protected from temperature. Also humidity fluctuations, while 24/7 security guarantees that your belongings are always safe. With flexible rental terms, affordable pricing, and the ability to access your items. Its whenever you need, our long-term storage solutions provide a hassle-free solution. Suiltable for your long-term storage needs.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={StorageUnitImage}
                                alt="Long Term Storage"
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
                            Secure Your Long-term Space
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed"
                        >
                            Contact us for affordable and secure long-term storage plans.
                        </motion.p>

                        <HeroButton name='Get a Quote' link='/contact-us' />
                    </div>
                </section>

            </div>
        </>
    );
};

export default LongTermStoragePage;
