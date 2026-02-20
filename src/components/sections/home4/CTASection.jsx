import { motion } from 'framer-motion';
import HeroButton from '../../ui/HeroButton';


const CTASection = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };
    return (

        < section className="py-8 md:py-12 bg-gray-900 text-white text-center" >
            <div className="w-11/12 max-w-4xl mx-auto">
                <motion.h2
                    {...fadeInUp}
                    className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6"
                >
                    Ready to Relocate? <br />
                    Get Fast Movers & Secure Storage in Abu Dhabi Now!
                </motion.h2>
                <motion.p
                    {...fadeInUp}
                    className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed "
                >
                    Move smarter with expert movers and packers in Abu Dhabi -- quick shifting, careful packing, and secure storage guaranteed.                </motion.p>
                <HeroButton name=' Get A Quote' to='/contact-us' />
            </div>
        </section >
    )
}

export default CTASection