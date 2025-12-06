import React from 'react';
import { Camera, Clock, DollarSign, Shield, Calendar, Lock, Cloud, Zap, CheckCircle } from 'lucide-react';
import { Image7 } from '../../../assets';

const Features = () => {
    return (
        <section className="bg-[#1C1F2E] pt-24 pb-24 lg:pb-0 text-white overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="w-full lg:w-1/2 lg:pr-8 lg:pb-24">
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-0.5 w-6 bg-white"></span>
                            <span className="text-white font-semibold tracking-widest uppercase text-xs">
                                Why Choose Us
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-8 leading-tight">

                            A perfect place
                            <br className="hidden lg:block" /> for your memories
                        </h2>
                        <p className="text-gray-400 mb-10 leading-relaxed text-lg">
A one-stop solution for secure storage and safekeeping, with service quality trusted by countless clients and recognized among the best movers and packers in Abu Dhabi.                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <Shield size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">24 Hours Security</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <Calendar size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">Flexible Tenure</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <Lock size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">Lockable Unit</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <DollarSign size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">Affordable Price</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <Camera size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">CCTV Surveillance</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <Cloud size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">Fully Aircone Zone</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <Zap size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">Ultra Modern Facility</h4>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="p-4 bg-[#2C3040] rounded-sm text-white h-fit shadow-lg">
                                    <CheckCircle size={32} strokeWidth={1.5} />
                                </div>
                                <h4 className="font-semibold text-white text-xl mb-3">Dust and Pest Free</h4>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-1/2 relative lg:absolute lg:right-0 lg:bottom-0 lg:h-full lg:w-[45%]">
                        <div className="h-full w-full">
                            <img
                                src={Image7}
                                alt="Logistics Team"
                                className="w-full h-full object-cover lg:object-centerg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
