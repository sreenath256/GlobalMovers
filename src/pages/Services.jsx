
import { motion } from 'framer-motion';
import ServicesSection from '../components/sections/home4/Services';
import HeroButton from '../components/ui/HeroButton';

const Services = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <>
            <title>Reliable, Safe & Professional Moving Services in Abu Dhbai</title>
            <meta name="description" content="Global Icon Movers offers the best moving services for residential and commercial needs. Provides safe, efficient personalized solutions." />
            <link rel="canonical" href="https://globaliconmovers.com/services" />
            <div className="font-poppins bg-white">

                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Smart Moving & Storage Solutions
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Our dedicated team of experts will handle your belongings with the utmost care and make moving stress-free and efficient Services. Being a leading Movers & Packers in Abu Dhabi and across the UAE, Global Icon Movers provides the best relocation solutions in the emirate.
                        </motion.p>
                        <HeroButton name="Explore More" to="/gallery" />
                    </div>
                </section>
                <ServicesSection />

            </div >

        </>
    );
};

export default Services;
