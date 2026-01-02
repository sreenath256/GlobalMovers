import React from "react";
// Importing icons suitable for the new content
import { LuShieldCheck, LuClock, LuPackage, LuHeartHandshake } from "react-icons/lu";

export default function WhyUsSection() {
    const features = [
        {
            icon: <LuShieldCheck className="w-10 h-10" />,
            title: "100% Safe and Secure",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
        {
            icon: <LuClock className="w-10 h-10" />,
            title: "24/7 Services",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
        {
            icon: <LuPackage className="w-10 h-10" />,
            title: "Professional Packing",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
        {
            icon: <LuHeartHandshake className="w-10 h-10" />,
            title: "Safe Handling",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
    ];

    return (
        <div className="bg-white py-16 px-6 sm:px-12 lg:px-20">
            <div className="w-full w-11/12 mx-auto">
                {/* Header */}
                <div>
                    <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 text-center mx-auto">
                        WHY US
                    </p>
                    <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-12 leading-tight md:max-w-[70%] text-center mx-auto">
                        What makes us the best Movers and Packers in Abu Dhabi
                    </h2>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-11/12 mx-auto">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-start gap-4 p-8 bg-gray-100 rounded-sm transition-transform hover:-translate-y-1 duration-300 h-full"
                        >
                            <div className="text-primary flex-shrink-0 mb-2">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}