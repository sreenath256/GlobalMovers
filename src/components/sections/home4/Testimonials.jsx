import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

import { GlobalLogo } from '../../../assets';
import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10 } from '../../../assets';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
    const swiperRef = useRef(null);

    const testimonials = [
        {
            id: 1,
            text: "They are just amazing, the best movers and packers in Abu Dhabi, UAE. Our shifting was not possible in one day, but they managed to do it, not only in one day but also helped us hang all of our paintings, pictures, lights, every single thing. They are extremely helpful and not once did they say no to anyone. I’m so pleased with their services and will always use them.",
            name: "Dr. Samina Ashiq",
        },
        {
            id: 2,
            text: "I utilized the services of Global Icon Movers Team for the first time based on my friend's recommendation. Their storage service in Abu Dhabi was excellent, and everyone in the team was professionally handling each and every activity in my packing and moving process.",
            name: "Soundra Pandian"
        },
        {
            id: 3,
            text: "Excellent and very professional service. The team was skilled, fast and at the same time, ensured the quality doesn't drop. Special mention to Mr Rasheed for good communication and the way he handled his team. Definitely recommend, the best movers and packers in Abu Dhabi!",
            name: "Sriram Sekar"
        },
        {
            id: 4,
            text: "Last week I made a move. The team was very professional, fast, and well organised. Everyone knows the job assigned to them. They were meticulous in their work. Fully satisfied and happy to recommend their storage service in Abu Dhabi. Truly the best movers and packers in Abu Dhabi.",
            name: "John Samuel"
        },
        {
            id: 5,
            text: "The whole process was smooth. The contact person was very cooperative and understanding. The packing/ moving team had good manners and attitude and were extremely cooperative and willing to finish the job as needed, they are the best movers and packers in Abu Dhabi.",
            name: "Ahmed Batman"
        }
    ];

    const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10];



    return (
        <section className=" font-poppins text-black w-11/12 mx-auto py-20 rounded-3xl  overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                <div className=''>
                    <h2 className="text-4xl md:text-6xl font-medium uppercase leading-tight ">
                        What Our Customers Are <br /> Saying About Our Services?
                    </h2>
                </div>
                {/* Custom Navigation Buttons */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-gray-600 hover:text-primary hover:bg-primary"
                    >
                        <ArrowLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="w-14 h-14 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-gray-600 hover:text-primary hover:bg-primary"
                    >
                        <ArrowRight className="w-6 h-6" />
                    </button>
                </div>

            </div>

            <div className="relative mb-20">

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        }
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="!overflow-visible"
                >
                    {testimonials.map((item) => (
                        <SwiperSlide key={item.id} className="!h-auto">
                            <div className="bg-white p-10 rounded-3xl h-full flex flex-col justify-between shadow-sm border border-gray-600 relative">
                                {/* Quote Icon */}
                                <div className="content-start mb-6">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                        <Quote className="w-6 h-6 text-white fill-white" />
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                                    {item.text}
                                </p>
                                <div className="flex items-center gap-2 text-gray-500 font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                                    <span>{item.name}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Client Icons Marquee */}
            <div className="w-full py-10 border-t border-gray-200 overflow-hidden relative">
                <style>
                    {`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 30s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}
                </style>

                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

                <div className="flex w-max animate-marquee">
                    {[...clients, ...clients].map((logo, index) => (
                        <div key={index} className="mx-8 h-32 flex items-center justify-center transition-all duration-300">
                            <img src={logo} alt={`Client ${index}`} className="max-w-full max-h-full object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
