import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { BackQuotes, Profile } from '../../../assets';

export default function TestimonialsSection() {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const testimonials = [
        {
            name: "Dr. Samina Ashiq",
            role: "Interior Designer",
            image: Profile,
            quote: "They are just amazing, the best movers and packers in Abu Dhabi, UAE. Our shifting was not possible in one day, but they managed to do it, not only in one day but also helped us hang all of our paintings, pictures, lights, every single thing. They are extremely helpful and not once did they say no to anyone. I'm so pleased with their services and will always use them."
        },
        {
            name: "Soundra Pandian",
            role: "Marketing Manager",
            image: Profile,
            quote: "I utilized the services of Global Icon Movers Team for the first time based on my friend's recommendation. Their storage service in Abu Dhabi was excellent, and everyone in the team was professionally handling each and every activity in my packing and moving process."
        },
        {
            name: "Sriram Sekar",
            role: "Software Engineer",
            image: Profile,
            quote: "Excellent and very professional service. The team was skilled, fast and at the same time, ensured the quality doesn't drop. Special mention to Mr Rasheed for good communication and the way he handled his team. Definitely recommend, the best movers and packers in Abu Dhabi!"
        },
        {
            name: "Dr. Samina Ashiq",
            role: "Interior Designer",
            image: Profile,
            quote: "They are just amazing, the best movers and packers in Abu Dhabi, UAE. Our shifting was not possible in one day, but they managed to do it, not only in one day but also helped us hang all of our paintings, pictures, lights, every single thing. They are extremely helpful and not once did they say no to anyone. I'm so pleased with their services and will always use them."
        },
        {
            name: "Soundra Pandian",
            role: "Marketing Manager",
            image: Profile,
            quote: "I utilized the services of Global Icon Movers Team for the first time based on my friend's recommendation. Their storage service in Abu Dhabi was excellent, and everyone in the team was professionally handling each and every activity in my packing and moving process."
        },
        {
            name: "Sriram Sekar",
            role: "Software Engineer",
            image: Profile,
            quote: "Excellent and very professional service. The team was skilled, fast and at the same time, ensured the quality doesn't drop. Special mention to Mr Rasheed for good communication and the way he handled his team. Definitely recommend, the best movers and packers in Abu Dhabi!"
        },

    ];

    return (
        <div className="bg-white py-16 px-6 sm:px-12 lg:px-20">

            <div className="w-11/12 mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                        happy clients
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-4">
                        Real stories from our valued customers
                    </h2>
                    <p className="text-gray-600 text-lg mb-10 leading-relaxed md:max-w-3xl mx-auto">
                        Built on a foundation of excellence, every move is designed to help clients succeed. By treating each customer as a partner, the focus is on making relocation a smooth and empowering part of their journey, setting a standard among the best movers and packers in Abu Dhabi, UAE.
                    </p>
                </div>
                <div className="relative">
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        grabCursor={true}
                        onSwiper={setSwiperInstance}
                        className="testimonials-swiper"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-gray-50 p-8 rounded-lg relative h-full">
                                    {/* Quote Icon */}
                                    <div className="absolute -top-6 right-8 bg-primary text-white w-16 h-16 rounded-lg flex items-center justify-center text-4xl font-serif shadow-lg">
                                        <img src={BackQuotes} alt="quotes" className="w-10 h-10" />
                                    </div>

                                    {/* Profile */}
                                    <div className="flex items-center mb-6">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-20 h-20 rounded-full object-cover mr-4"
                                        />
                                        <div>
                                            <h3 className="text-2xl font-semibold text-gray-900">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-primary">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quote */}
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        "{testimonial.quote}"
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Arrows */}
                    <button
                        onClick={() => swiperInstance?.slidePrev()}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 hover:scale-110"
                        aria-label="Previous testimonials"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => swiperInstance?.slideNext()}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 bg-white hover:bg-gray-100 text-gray-800 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 hover:scale-110"
                        aria-label="Next testimonials"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Custom Dots */}
                    <div className="flex justify-center mt-8 gap-2">
                        {testimonials.slice(0, Math.ceil(testimonials.length / 2)).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => swiperInstance?.slideTo(index * 2)}
                                className="w-3 h-3 rounded-full bg-gray-300 hover:bg-primary transition-all duration-300"
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                <style jsx>{`
          .testimonials-swiper {
            padding: 2rem 0;
          }
        `}</style>
            </div>
        </div>
    );
}