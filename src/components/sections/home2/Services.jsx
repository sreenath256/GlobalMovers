import React from 'react';
import { Truck, Archive, MoreHorizontal, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: <Truck size={50} strokeWidth={1} />,
        title: "Relocation",
        description: "Comprehensive relocation services for homes and businesses, ensuring a smooth transition.",
        link: "#"
    },
    {
        icon: <Archive size={50} strokeWidth={1} />,
        title: "Storage",
        description: "Secure and flexible storage solutions for short-term or long-term needs.",
        link: "#"
    },
    {
        icon: <MoreHorizontal size={50} strokeWidth={1} />,
        title: "Other Services",
        description: "A wide range of additional logistics and moving services tailored to your requirements.",
        link: "#"
    }
];

const Services = () => {
    return (
        <section className="py-24 bg-[#F4F6F9]">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="h-0.5 w-6 bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">
                                Our Services
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#1C1F2E]">
                            Global Icon Packers & Movers provides
                        </h2>
                        <div className="w-full md:w-2/3 text-gray-600 leading-relaxed mt-4">
                            Global Icon Movers makes every move in the UAE smooth and stress-free, with a dedicated team providing trusted relocation services and top-quality care as the best movers and packers in Abu Dhabi.
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-10 group hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                            {/* Hover Blue Bar */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-primary transition-colors"></div>

                            <div className="text-gray-400 group-hover:text-primary transition-colors mb-8 transform group-hover:scale-110 duration-300 origin-left">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-semibold text-[#1C1F2E] mb-4 group-hover:text-primary transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 mb-8 text-[15px] leading-relaxed">
                                {service.description}
                            </p>
                            <a href={service.link} className="inline-flex items-center text-[#1C1F2E] font-bold text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                                Read More <ArrowRight size={16} className="ml-2" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
