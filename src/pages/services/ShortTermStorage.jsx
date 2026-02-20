import { motion } from 'framer-motion';
import {
    Clock,
    ArrowRight
} from 'lucide-react';
import { ShortermStorageImage, ShortTermStorageImage } from '../../assets'; // Using the existing asset
import HeroButton from '../../components/ui/HeroButton';

const ShortTermStoragePage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <title>Short term storage solutions in Abu Dhabi | Storage Services</title>
            <meta name="description" content="Secure short term storage solutions in Abu Dhabi for individuals & businesses. Perfect for renovations, vacations & student breaks." />
            <link rel="canonical" href="https://globaliconmovers.com/services/short-term-storage-solutions-in-abu-dhabi-solutions-in-abu-dhabi" />

            <div className="font-poppins bg-white">

                {/* Hero Section - Image 1 */}
                <section className="relative h-screen md:h-[60vh] min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${ShortTermStorageImage})` // Reusing for hero potentially, or using a generic one if available. Using this for now as it's specific.
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Short-term Storage
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                        >
                            Flexible and secure temporary storage solutions in Abu Dhabi.
                        </motion.p>
                    </div>
                </section>

                {/* Main Content Section - Image 2 (Reuse or omit if close to limit, but we only have 2 images max here effectively) */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>

                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                Flexible Storage
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                At Global Icon Movers & Storage, our short-term storage solutions. Which are designed to meet the temporary needs of individuals and businesses in Abu Dhabi. Whether you’re undergoing a home renovation, heading out for a short vacation. Or a student needing a place to store belongings during the semester break. We offer flexible and secure short-term storage solutions.
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
                                src={ShortermStorageImage}
                                alt="Short Term Storage"
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
                            Need Safe Keeping for a Short While?
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-base md:text-lg text-gray-300 mb-10 leading-relaxed"
                        >
                            Contact us today to secure your short-term storage space.
                        </motion.p>
                        <HeroButton title="Get a Quote" link="/contact-us" />
                    </div>
                </section>

            </div>
        </>
    );
};

export default ShortTermStoragePage;
