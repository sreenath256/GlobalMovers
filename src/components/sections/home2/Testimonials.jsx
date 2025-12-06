import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Profile } from '../../../assets';

const testimonials = [
   {
       id: 1,
       name: "John Samuel",
       time: "1 week ago",
       text: "Last week I made a move. The team was very professional, fast, and well organised...",
       stars: 5,
       img: Profile,
     },
     {
       id: 2,
       name: "Ahmed Batman",
       time: "1 week ago",
       text: "The whole process was smooth. The contact person was very cooperative...",
       stars: 5,
       img: Profile,
     },
     {
       id: 3,
       name: "Dr. Samina Ashiq",
       time: "2 weeks ago",
       text: "They are just amazing — the best movers and packers in Abu Dhabi...",
       stars: 5,
       img: Profile,
     },
     {
       id: 4,
       name: "Soundra Pandian",
       time: "3 weeks ago",
       text: "I used Global Icon Movers for the first time... very professional...",
       stars: 5,
       img: Profile,
     },
     {
       id: 5,
       name: "Sriram Sekar",
       time: "3 weeks ago",
       text: "Excellent and very professional service. The team was skilled...",
       stars: 5,
       img: Profile,
     },
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const nextTestimonial = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    // Auto-scroll functionality
    useEffect(() => {
        const interval = setInterval(nextTestimonial, 5000);
        return () => clearInterval(interval);
    }, []);

    const getVisibleTestimonials = () => {
        const count = testimonials.length;
        const prevIndex = (activeIndex - 1 + count) % count;
        const nextIndex = (activeIndex + 1) % count;
        return [testimonials[prevIndex], testimonials[activeIndex], testimonials[nextIndex]];
    };

    const visibleItems = getVisibleTestimonials();

    // Swipe handler
    const handleDragEnd = (event, info) => {
        if (info.offset.x < -50) {
            nextTestimonial();
        } else if (info.offset.x > 50) {
            prevTestimonial();
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden select-none">
            <div className="container mx-auto px-4 relative">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="h-0.5 w-6 bg-primary"></span>
                        <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                            Testimonial
                        </span>
                        <span className="h-0.5 w-6 bg-primary"></span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#1C1F2E]">
                        What Our Clients Say About Us
                    </h2>
                </div>

                {/* Carousel */}
                <div className="relative flex justify-center items-center h-[500px]">

                    {/* Previous Button */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 md:left-10 z-20 p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg hidden md:flex"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 md:right-10 z-20 p-3 rounded-full bg-white border border-gray-200 text-gray-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-lg hidden md:flex"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Cards Container - now draggable */}
                    <motion.div
                        className="flex items-center justify-center gap-6 w-full max-w-6xl cursor-grab active:cursor-grabbing"
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }} // Constraints 0 to snap back, but we trigger change on dragEnd
                        dragElastic={0.2}
                        onDragEnd={handleDragEnd}
                    >
                        {visibleItems.map((item, index) => {
                            // index 0 = prev, 1 = active, 2 = next
                            const isActive = index === 1;

                            return (
                                <motion.div
                                    key={item.id} // Stable key for layout animation
                                    layout
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{
                                        opacity: 1,
                                        scale: isActive ? 1.1 : 0.9,
                                        zIndex: isActive ? 10 : 1,
                                    }}
                                    transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 30 }}
                                    className={`
                                        flex-shrink-0 w-[85vw] md:w-[350px] lg:w-[400px] p-8 rounded-lg shadow-xl relative
                                        ${isActive ? 'bg-primary text-white' : 'bg-white text-gray-500 border border-gray-100'}
                                    `}
                                >
                                    {/* Image Bubble */}
                                    <div className={`
                                        absolute -top-10 left-10 w-20 h-20 rounded-full overflow-hidden border-4 
                                        ${isActive ? 'border-primary' : 'border-white'} shadow-md
                                    `}>
                                        <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="mt-10">
                                        <div className="mb-4">
                                            <h4 className={`text-xl font-bold ${isActive ? 'text-white' : 'text-[#1C1F2E]'}`}>
                                                {item.name}
                                            </h4>
                                            <p className={`text-sm ${isActive ? 'text-white' : 'text-primary'}`}>
                                                {item.time}
                                            </p>
                                        </div>
                                        <p className={`leading-relaxed italic ${isActive ? 'text-white' : 'text-gray-500'}`}>
                                            "{item.text}"
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* Dots Navigation */}
                <div className="flex justify-center items-center gap-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                w-3 h-3 rounded-full transition-all duration-300
                                ${index === activeIndex ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary'}
                            `}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
