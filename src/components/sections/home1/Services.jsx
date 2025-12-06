import React, { useState } from "react";
import { Image2 } from "../../../assets";

const services = [
    {
        title: "Relocation",
        desc: "We provide smooth and reliable relocation services tailored to homes, offices, and specialized moves. Our team ensures safe packing, secure transportation, and a hassle-free shifting experience from start to finish.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                <path d="M3 13V6a2 2 0 0 1 2-2h9v9H3z" />
                <path d="M16 8h4l1 3v4h-5V8z" />
                <circle cx="7.5" cy="17.5" r="2.5" />
                <circle cx="17.5" cy="17.5" r="2.5" />
            </svg>
        ),
    },

    {
        title: "Storage",
        desc: "Our storage solutions offer both short-term and long-term options in secure, well-maintained facilities. Ideal for personal and commercial needs, with complete safety, accessibility, and peace of mind.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                <path d="M3 10L12 3l9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V10z" />
                <path d="M7 21v-8h10v8" />
            </svg>
        ),
    },

    {
        title: "Other Services",
        desc: "We offer additional support services including Handyman assistance, Furniture Installation, and High-quality Packing Materials — all designed to make your moving and setup process easier and more efficient.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                <path d="M15 6l-1.5 1.5 3 3L18 9l-3-3z" />
                <path d="M2 22l6-6" />
                <path d="M3 12l3-3 7.5 7.5-3 3L3 12z" />
                <path d="M17 16l4 4" />
            </svg>
        ),
    },
];


const Services = () => {
    const [active, setActive] = useState(null);

    return (
        <div className="w-full relative overflow-hidden">

            <div
                className="
                    relative w-full 
                    px-4 md:px-10 lg:px-28 
                    py-10 md:py-28
                    bg-cover bg-center
                "
                style={{ backgroundImage: `url(${Image2})` }}
            >
                <div className="absolute inset-0 bg-black/30"></div>

                {/* TOP SECTION */}
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12">
                    <h2 className="
                        text-4xl sm:text-5xl md:text-6xl 
                        font-medium text-white leading-tight
                    ">
                        Global Icon Packers & <br /> Movers provides
                    </h2>

                    <p className="
                        text-white/90 
                        text-base sm:text-lg 
                        leading-relaxed 
                        max-w-md md:ml-auto
                        text-start md:text-end
                    ">
                        Global Icon Movers makes every move in the UAE smooth and stress-free,
                        with a dedicated team providing trusted relocation services and top-quality care.
                    </p>
                </div>

                {/* SERVICE CARDS */}
                <div className="
                    relative z-10 
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                    gap-6 md:gap-8
                ">
                    {services.map((service, index) => {
                        const isActive = active === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(null)}
                                className={`
                                    p-6 sm:p-8 
                                    rounded-3xl shadow-xl cursor-pointer 
                                    transition-all duration-300 border 
                                    backdrop-blur-xl
                                    ${isActive
                                        ? "bg-blue-600 border-blue-600 text-white"
                                        : "bg-white/20 border-white/30 text-white"
                                    }
                                `}
                            >
                                <div className="
                                    w-12 h-12 rounded-full 
                                    bg-white/20 flex items-center justify-center mb-4
                                ">
                                    {service.icon}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                                    {service.title}
                                </h3>

                                <p className="text-white/80 sm:text-base text-sm leading-relaxed">
                                    {service.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Services;
