import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { StorageImage } from '../../../assets';

const AboutUs = () => {
    const swiperRef = useRef(null);

    const features = [
        {
            id: '01',
            title: '100% Safe and Secure',
            description: 'We ensure your belongings are protected during every move.',
        },
        {
            id: '02',
            title: '24/7 Services',
            description: 'We are available 24/7 to assist you with any questions or concerns.',
        },
        {
            id: '03',
            title: 'Professional Packing',
            description: 'We provide professional packing services to ensure your belongings are protected during every move.',
        },
        {
            id: '04',
            title: 'Safe Handling',
            description: 'We handle your belongings with care and attention to detail to ensure they arrive safely at their destination.',
        },
        {
            id: '05',
            title: 'Experienced Team',
            description: 'Our team of professionals is dedicated to providing you with the best possible service.',
        },
        {
            id: '06',
            title: 'Transparent Pricing',
            description: 'We provide transparent pricing to ensure you know exactly what you are paying for.',
        }
    ];

    const slides = [
        { id: 1, title: 'Transport', image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=2075&auto=format&fit=crop' },
        { id: 2, title: 'Warehousing', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop' },
        { id: 3, title: 'Distribution', image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop' },
        { id: 4, title: 'Freight', image: 'https://images.unsplash.com/photo-1620619767323-b95a89183081?q=80&w=2070&auto=format&fit=crop' }
    ];

    return (
        <section className="bg-white text-black py-20 font-poppins text-black overflow-hidden w-11/12 mx-auto">
            <div className="w-full">
                <h2 className="text-4xl text-center md:text-6xl font-medium uppercase leading-tight max-w-4xl mx-auto mb-24">
                    Moving Forward With Experience And Innovation
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 ">
                    {/* Left Feature List */}
                    <div className="space-y-10">
                        {features.map((feature, index) => (
                            <motion.div
                                key={feature.id}
                                className="group"
                                initial={{ x: -50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="flex flex-col items-start ">
                                    <div className='flex items-center gap-4 pb-3'>

                                        <span className="text-3xl font-bold">{feature.id}</span>
                                        <div className="h-px bg-black w-12"></div>
                                        <h3 className="text-2xl font-medium uppercase">{feature.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm max-w-xl text-left">{feature.description}</p>
                                </div>

                            </motion.div>
                        ))}
                    </div>

                    {/* Right Image */}
                    <div className="relative h-[600px] w-full bg-gray-200 rounded-lg overflow-hidden">
                        <div className={`absolute inset-0 bg-cover bg-center`} style={{ backgroundImage: `url(${StorageImage})` }}></div>
                    </div>
                </div>

                {/* Bottom Slider Section */}
                <div className="relative mt-12 md:mt-0">
                    {/* Swiper Controls & Counter - Positioned absolute or flex */}
                    <div className="flex flex-col md:flex-row items-end md:items-center gap-8 mb-8 md:mb-0">

                        {/* Navigation Buttons */}
                        <div className="flex flex-col gap-4 md:absolute md:-left-20 md:top-1/2 md:-translate-y-1/2 z-10">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-14 h-14 rounded-full bg-[#ff2d0d] text-white flex items-center justify-center hover:bg-black transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#ff2d0d] transition-colors"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="text-6xl font-light md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:transform md:-translate-x-full md:pr-12">
                            01 <span className="text-2xl text-gray-400">/09</span>
                        </div>

                        {/* Swiper Container */}
                        {/* <div className="w-full md:pl-24">
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                onBeforeInit={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                className="w-full"
                            >
                                {slides.map((slide) => (
                                    <SwiperSlide key={slide.id}>
                                        <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
                                            <div
                                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                                style={{ backgroundImage: `url(${slide.image})` }}
                                            ></div>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                                            <div className="absolute top-6 right-6">
                                                <span className="bg-white text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                    {slide.title.toUpperCase()}
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div> */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutUs;
