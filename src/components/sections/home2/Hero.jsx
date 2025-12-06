import React from 'react';
import { ArrowRight, ShieldCheck, Clock, MapPin } from 'lucide-react';
import { Image5 } from '../../../assets';

const Hero = () => {
    return (
        <div className="relative w-full h-[100vh] flex items-center ">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${Image5})`,
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 relative z-10 pt-20">
                <div className="max-w-3xl">
                    <p className="text-white font-semibold mb-4 tracking-wide uppercase text-sm">
                        15+ Years of trusted excellence
                    </p>
                    <h1 className="text-5xl md:text-8xl font-semibold text-white mb-6 leading-tight">

                        Best Movers and Packers in <br />
                        Abu Dhabi

                    </h1>
                    <button className="bg-primary hover:bg-blue-700 text-white px-8 py-3  font-medium transition-colors flex items-center gap-2">
                        Learn more
                    </button>
                </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="absolute w-11/12 -translate-x-1/2 bottom-0 left-1/2  z-20 border-t border-white/10 ">
                <div className="container mx-auto  bg-black/30 backdrop-blur-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                        <div className="flex items-center gap-4 py-12 md:px-6 group transition-colors duration-300 hover:bg-primary">
                            <div className="p-3 bg-white/10 rounded-full text-blue-400 group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                                <ShieldCheck size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg md:text-xl">Safe Delivery</h3>
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">We handle with care</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-12 md:px-6 group transition-colors duration-300 hover:bg-primary">
                            <div className="p-3 bg-white/10 rounded-full text-blue-400 group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg md:text-xl">On Time Delivery</h3>
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">Fastest shipping</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 py-12 md:px-6 group transition-colors duration-300 hover:bg-primary">
                            <div className="p-3 bg-white/10 rounded-full text-blue-400 group-hover:bg-white group-hover:text-primary transition-colors duration-300">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-white font-semibold text-lg md:text-xl">Global Network</h3>
                                <p className="text-gray-300 text-sm group-hover:text-white transition-colors duration-300">We cover the world</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
