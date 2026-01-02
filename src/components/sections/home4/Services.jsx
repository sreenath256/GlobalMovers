import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { OfficeRelocation, HomeRelocation, FurnitureInstallationImage, StorageImage, PackingImage } from '../../../assets';

const Services = () => {
    const swiperRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "Office Relocation",
            description: "Professional corporate moving services designed to minimize downtime and ensure a smooth transition for your business operations.",
            image: OfficeRelocation
        },
        {
            id: 2,
            title: "House Relocation",
            description: "Seamless residential moving experiences ensuring your personal belongings and household items arrive safely at your new home.",
            image: HomeRelocation
        },
        {
            id: 3,
            title: "Furniture Installation & Handyman Services",
            description: "Expert disassembly, reassembly, and installation services for furniture, along with general handyman assistance for mounting and fixtures.",
            image: FurnitureInstallationImage
        },
        {
            id: 4,
            title: "Corporate Services",
            description: "Comprehensive B2B solutions including employee relocation programs, asset management, and ongoing logistics support tailored for large organizations.",
            image: PackingImage
        },
        {
            id: 5,
            title: "Short Term & Long Term Storage",
            description: "Secure, climate-controlled warehouse facilities providing flexible storage solutions for the safekeeping of your valuables for any duration.",
            image: StorageImage
        },
        {
            id: 6,
            title: "Commercial Space",
            description: "Specialized logistics for retail stores, showrooms, and industrial properties, handling inventory and heavy equipment with precision.",
            image: PackingImage
        }
    ]

    return (
        <section className="bg-white py-24 font-poppins relative">
            <div className="container mx-auto px-4 md:px-0 ">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-6xl font-medium uppercase leading-tight max-w-4xl mx-auto">
                        Global Icon Packers & <br /> Movers provides
                    </h2>
                </div>

                <div className='relative'>

                    {/* Custom Navigation Arrows - positioned absolute on sides */}
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 -ml-4 md:-ml-12 text-gray-400 hover:text-black transition-colors"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={48} strokeWidth={1} />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 -mr-4 md:-mr-12 text-gray-400 hover:text-black transition-colors"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={48} strokeWidth={1} />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                            1536: {
                                slidesPerView: 3,
                            },
                            1920: {
                                slidesPerView: 4,
                            },
                        }}
                        className="h-full"
                    >
                        {services.map((service) => (
                            <SwiperSlide key={service.id} className="h-auto">
                                <div className="relative group h-[600px] w-full overflow-hidden text-white rounded-2xl">
                                    {/* Background Image */}
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                        style={{ backgroundImage: `url(${service.image})` }}
                                    />

                                    {/* Overlay gradient - darker at bottom for text readability */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/80" />

                                    {/* Content */}
                                    <div className="absolute inset-0 p-8 flex flex-col justify-end pt-16">
                                        <h3 className="text-3xl md:text-4xl font-normal uppercase leading-tight mb-2 tracking-wide transition-all duration-500 group-hover:-translate-y-2">
                                            {service.title}
                                        </h3>

                                        <p className="text-sm md:text-base text-gray-100 leading-relaxed opacity-90 font-light pr-4 pt-2">
                                            {service.description}
                                        </p>
                                        <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[300px] group-hover:opacity-100 transition-all duration-1000 ease-in-out">

                                            {/* Buttons positioned at bottom */}
                                            <div className="w-fit gap-4 pt-8 pb-2">
                                                <button className="w-full  rounded-full border border-white/50 text-black bg-white hover:bg-primary hover:border-primary hover:text-white transition-colors py-3 px-4 text-sm uppercase tracking-wider backdrop-blur-sm">
                                                    Learn more
                                                </button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;
