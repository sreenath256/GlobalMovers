import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';


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




    return (
        <section className=" font-poppins text-black w-11/12 mx-auto pt-16 md:pt-24 rounded-3xl overflow-hidden">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-16 gap-4 md:gap-8">
                <div className=''>
                    <h2 className="text-3xl md:text-6xl text-center font-medium uppercase leading-tight ">
                        What Our Customers Are <br className='hidden md:block' /> Saying About Our Services?
                    </h2>
                </div>
                {/* Custom Navigation Buttons */}
                <div className="flex items-center gap-4">
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

            <div className="relative  md:mb-20">

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
                        },
                        1024: {
                            slidesPerView: 3,
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
                            <div className="bg-white p-10 rounded-3xl h-full flex flex-col justify-start md:justify-between shadow-sm border border-gray-600 relative">
                                {/* Quote Icon */}
                                <div className="content-start mb-6">
                                    <div className="flex items-center gap-3 pb-5">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-lg">
                                            {item.name.charAt(0)}
                                        </div>
                                        <span className="text-gray-900 font-medium text-lg">{item.name}</span>
                                    </div>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star key={star} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-8">
                                    {item.text}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
