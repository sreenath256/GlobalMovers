import { ArrowRight } from 'lucide-react';
import { Image7 } from '../../../assets';
import { Image10 } from '../../../assets';
import { motion, useInView, animate, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const heroTexts = [
    { first: "Packed with Care" },
    { first: "Moved Safely" },
    { first: "Placed Perfectly" },
];

const StatItem = ({ value, suffix, label }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 1,
                onUpdate: (latest) => setCount(Math.floor(latest))
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return (
        <div ref={ref} className="flex flex-col">
            <span className="text-3xl md:text-5xl font-light mb-2">{count.toLocaleString()}{suffix}</span>
            <span className="text-sm md:text-base tracking-wider uppercase text-gray-400">{label}</span>
        </div>
    );
};

const Hero = () => {
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % heroTexts.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-400 to-black overflow-hidden font-poppins text-white">
            {/* Background Image Placeholder */}
            <div className={`absolute inset-0 bg-cover bg-top mix-blend-overlay opacity-50 `} style={{ backgroundImage: `url(${Image10})` }}></div>

            <div className="relative w-11/12 mx-auto pt-32 pb-20 min-h-screen lg:h-screen flex flex-col justify-between">

                <div className="grid grid-cols-1 gap-12 items-center pt-10 md:pt-20">

                    {/* Left Content */}
                    <div className="space-y-3">
                        <h1 className="text-sm md:text-base uppercase tracking-widest text-white -mb-4">
                            Best Movers and Packers in Abu Dhabi
                        </h1>
                        <div className="relative h-[90px] sm:h-[70px] w-full perspective-1000">
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={textIndex}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: { staggerChildren: 0.3 }
                                        },
                                        exit: {
                                            transition: { staggerChildren: 0.1 }
                                        }
                                    }}
                                    className="absolute top-0 left-0 w-full text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                                >
                                    <motion.span
                                        className="block origin-center"
                                        variants={{
                                            hidden: { opacity: 0, rotateX: -90 },
                                            visible: { opacity: 1, rotateX: 0, transition: { duration: 0.6, ease: "backOut" } },
                                            exit: { opacity: 0, rotateX: 90, transition: { duration: 0.3 } }
                                        }}
                                    >
                                        {heroTexts[textIndex].first}
                                    </motion.span>
                                </motion.h2>
                            </AnimatePresence>
                        </div>
                        <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                            Global Icon Movers stands as the best movers and packers in Abu Dhabi, offering relocation, packing, and storage services across the UAE since 2008 with 15+ years of proven expertise.
                        </p>
                        {/* Local to Global Card */}
                        <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl w-fit p-3 px-4 md:px-8 flex items-center justify-center gap-2 group overflow-hidden hover:scale-110 transition-transform transform hover:cursor-pointer">
                            <h3 className="text-lg md:text-2xl font-medium uppercase leading-snug text-nowrap">
                                Get a Quote
                            </h3>
                            <div className="p-2 bg-primary rounded-full flex items-center justify-center">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Contact Form */}
                    {/* <ContactForm /> */}
                </div>
                <div className='flex w-full gap-10 items-center'>


                    {/* Bottom Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mt-10 md:mt-20 grid grid-cols-2 md:grid-cols-4 place-items-center gap-8  w-full "
                    >
                        <StatItem value={10} suffix="K+" label="Happy Clients" />
                        <StatItem value={15} suffix="+" label="Years Business" />
                        <StatItem value={10} suffix="K+" label="Projects Done" />
                        <StatItem value={80000} suffix="+" label="Sq. ft. Storage" />
                    </motion.div>

                </div>
            </div>
        </div>
    );
}

export default Hero;