import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Package, Users, ShieldCheck, Video, Thermometer, Lock, DollarSign } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const AboutUs = () => {
    const swiperRef = useRef(null);
    const features = [
        {
            id: '01',
            title: 'PROFESSIONAL PACKING & SAFE HANDLING',
            description: 'Expert packing and careful handling ensure belongings remain protected during moving, loading, unloading, and storage.',
            icon: Package
        },
        {
            id: '02',
            title: 'EXPERIENCED & TRUSTED TEAM',
            description: 'A skilled team with proven experience in residential, commercial, and storage services, delivering consistent and reliable results.',
            icon: Users
        },
        {
            id: '03',
            title: 'MOVING EXPERTISE YOU CAN TRUST',
            description: 'Systematic relocation planning to ensure smooth, timely, and well-coordinated moves.',
            icon: ShieldCheck
        },
        {
            id: '04',
            title: '24/7 SECURITY & CCTV SURVEILLANCE',
            description: 'Round-the-clock security with monitored CCTV systems to safeguard belongings during transit and while in storage.',
            icon: Video
        },
        {
            id: '05',
            title: 'CLIMATE-CONTROLLED STORAGE FACILITIES',
            description: 'Fully air-conditioned storage zones designed to protect furniture, documents, and sensitive items from heat and humidity.',
            icon: Thermometer
        },
        {
            id: '06',
            title: 'LOCKABLE & DUST-FREE UNITS',
            description: 'Secure, lockable storage units maintained in clean, dust-free, and pest-controlled environments for added protection.',
            icon: Lock
        },
        {
            id: '07',
            title: 'TRANSPARENT & AFFORDABLE PRICING',
            description: 'Clear pricing structures for moving and storage services, ensuring reliability and value without hidden costs.',
            icon: DollarSign
        }
    ];

    return (
        <section className="bg-white text-black pt-16 md:pt-24 font-poppins overflow-hidden w-11/12 mx-auto">
            <div className="w-full">
                <h2 className="text-3xl md:text-6xl text-center font-medium uppercase leading-tight max-w-4xl mx-auto md:mb-16">
                    SMART MOVING & SECURE STORAGE SOLUTIONS
                </h2>

                {/* Bottom Slider Section */}
                <div className="relative mt-8">
                    {/* Swiper Controls & Counter */}
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-8 mb-8 md:mb-12">
                        {/* Wrapper for controls to position them nicely */}
                        <div className="w-full flex justify-between items-center px-2">

                            {/* Counter or Title (Optional, keeping it clean or adding if needed) */}
                            {/* For now, just utilizing the space or we can center the buttons if desired. 
                                 Based on previous code, there was a counter. I'll keep the buttons and maybe align them.
                             */}
                            <div className='block'></div>

                            {/* Navigation Buttons */}
                            <div className="flex gap-4 z-10">
                                <button
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    className="w-14 h-14 rounded-full bg-white border border-black hover:border-primary hover:text-white text-black flex items-center justify-center hover:bg-primary transition-colors"
                                >
                                    <ArrowLeft className="w-6 h-6" />
                                </button>
                                <button
                                    onClick={() => swiperRef.current?.slideNext()}
                                    className="w-14 h-14 rounded-full bg-white border border-black hover:border-primary hover:text-white text-black flex items-center justify-center hover:bg-primary transition-colors"
                                >
                                    <ArrowRight className="w-6 h-6" />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Swiper Container */}
                    <div className="w-full">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            loop={true}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                            onBeforeInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="w-full" // Added padding bottom for potential shadows/spacing
                        >
                            {features.map((feature, index) => (
                                <SwiperSlide key={feature.id} className="h-full">
                                    <motion.div
                                        className="bg-gray-50 p-8 rounded-3xl h-[350px] flex flex-col justify-between group bg-primary hover:bg-primaryHover text-white transition-all duration-300 border border-gray-100"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <div className="space-y-6">
                                            <feature.icon className="w-12 h-12 text-white transition-colors" />
                                            <h3 className= " text-xl md:text-2xl font-medium uppercase leading-snug">
                                                {feature.title}
                                            </h3>
                                        </div>

                                        <div className="space-y-6">
                                            <p className="text-gray-100 text-base leading-relaxed">
                                                {feature.description}
                                            </p>
                                            <div className="w-12 h-px bg-gray-100 transition-colors"></div>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
