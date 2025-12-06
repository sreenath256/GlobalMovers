import React from 'react';
import { Package, Truck, Settings, ArrowRight, Smartphone, Factory } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    {/* Left Side - Image */}
                    <div className="w-full lg:w-1/3 relative h-full h-64 md:h-[70vh]">
                        <div className="relative overflow-hidden h-full ">
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
                                alt="Logistics Worker"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Card */}
                            <div className="absolute bottom-0 left-0 bg-black/80 p-8 flex flex-col justify-center items-center text-center w-48 h-48">
                                <div className="text-white text-5xl font-bold mb-1">
                                    15<span className="text-white text-3xl align-top">+</span>
                                </div>
                                <div className="text-white text-sm uppercase tracking-wider font-medium">
                                    Years <br /> Experience
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full lg:w-2/3">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-0.5 w-6 bg-primary"></span>
                            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
                                About Company
                            </span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                            Best Movers and Packers in Abu Dhabi
                        </h2>
                        <p className="text-gray-500 mb-8 leading-relaxed text-base">
                            Global Icon Movers has been a trusted name in relocation and storage across the UAE since 2008. As one of the best movers and packers in Abu Dhabi, we deliver reliable, professional moving services for homes and businesses, ensuring every relocation is smooth, secure, and stress-free.

                            15+ years’ experience in providing seamless, secure relocations throughout Abu Dhabi and the UAE
                        </p>

                        <div className="grid grid-cols-1 gap-8 ">
                            <div className="flex  gap-8 ">
                                {/* Tile 1: Projects Done */}
                                <div className="flex justify-start items-center gap-5 text-center p-6 bg-gray-50 rounded-lg shadow-sm w-fit border-[1px] border-gray-">
                                     <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clipboard-list text-primary mb-4"><rect width="8" height="4" x="8" y="2" rx="1" ry="1" /><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" /><path d="M12 11h4" /><path d="M12 16h4" /><path d="M8 11h.01" /><path d="M8 16h.01" /></svg>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 mb-1">10k<span className="text-primary text-2xl align-top">+</span></h3>
                                        <p className="text-gray-600 text-sm uppercase tracking-wide font-medium">Projects Done</p>
                                    </div>
                                </div>

                                {/* Tile 2: Years Business */}
                                <div className="flex justify-start items-center gap-5 text-center p-6 bg-gray-50 rounded-lg shadow-sm w-fit border-[1px] border-gray-">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-award text-primary mb-4"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17.18 21l-5.18-3-5.18 3 1.703-8.11" /></svg>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 mb-1">15<span className="text-primary text-2xl align-top">+</span></h3>
                                        <p className="text-gray-600 text-sm uppercase tracking-wide font-medium">Years Business</p>
                                    </div>
                                </div>


                            </div>
                            <div className="flex  gap-8 ">


                                {/* Tile 3: Happy Clients */}
                                <div className="flex justify-start items-center gap-5 text-center p-6 bg-gray-50 rounded-lg shadow-sm w-fit border-[1px] border-gray-200 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users text-primary mb-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 mb-1">100k<span className="text-primary text-2xl align-top">+</span></h3>
                                        <p className="text-gray-600 text-sm uppercase tracking-wide font-medium">Happy Clients</p>
                                    </div>
                                </div>

                                {/* Tile 4: Sq. ft. Storage */}
                                <div className="flex justify-start items-center gap-5 text-center p-6 bg-gray-50 rounded-lg shadow-sm w-fit border-[1px] border-gray-200  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-warehouse text-primary mb-4"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5L12 2l8.74 4.5A2 2 0 0 1 22 8.35Z" /><path d="M6 18h12" /><path d="M6 14h12" /><path d="M10 10h4" /></svg>
                                    <div className="flex flex-col items-start">
                                        <h3 className="text-4xl font-bold text-gray-900 mb-1">80,000<span className="text-primary text-2xl align-top">+</span></h3>
                                        <p className="text-gray-600 text-sm uppercase tracking-wide font-medium">Sq. ft. Storage</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 border-t border-gray-100 pt-8">
                            <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3  font-medium transition-colors flex items-center gap-2">
                                Know more <ArrowRight size={18} />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
