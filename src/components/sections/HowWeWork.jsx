import React from "react";
import {
    BarChart3,
    Smartphone,
    PenLine,
    ShieldCheck
} from "lucide-react";
import { Image4 } from "../../assets";

const HowWeWork = () => {
    const features = [
        {
            title: "Expert Assessment",
            desc: "Our team conducts a detailed pre-move inspection to understand your requirements, item volume, and special handling needs for an accurate and smooth relocation plan.",
            icon: <BarChart3 className="w-6 h-6 text-white" />,
        },
        {
            title: "Proper Quotation",
            desc: "We provide a transparent, accurate, and obligation-free quotation based on your move size, distance, and service preferences—ensuring no hidden charges.",
            icon: <Smartphone className="w-6 h-6 text-white" />,
        },
        {
            title: "Professional Crew",
            desc: "Your move is handled by trained and experienced movers who pack, lift, transport, and unload your belongings with expert care at every stage.",
            icon: <PenLine className="w-6 h-6 text-white" />,
        },
        {
            title: "Safe & Secure Relocation",
            desc: "We ensure complete safety with high-quality packing materials, secure loading, GPS-tracked vehicles, and safe delivery of all items to your new location.",
            icon: <ShieldCheck className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <div className="w-full px-6 lg:px-28 relative overflow-hidden ">

            {/* TOP Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-12 md:mb-16">
                <h2 className="text-4xl md:text-6xl font-medium text-black leading-tight">
                    How We Work: Best Movers
                    and Packers in Abu Dhabi
                </h2>

                <p className="text-black text-base md:text-lg leading-relaxed max-w-md md:ml-auto">
                    A clear, step-by-step approach ensures a seamless move. Each home
                    shifting project starts with a detailed inspection, followed by an
                    accurate quote and careful assignment of skilled movers who handle
                    belongings with expert care at every stage.
                </p>
            </div>

            {/* 3 Column Layout (stack on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-start">

                {/* LEFT CARDS */}
                <div className="flex flex-col gap-6 md:gap-10 order-2 md:order-1">
                    {features.slice(0, 2).map((item, i) => (
                        <div
                            key={i}
                            className="p-6 md:p-8 bg-[#f2f2f2] rounded-3xl shadow-sm flex flex-col gap-4 
                            h-auto md:h-[260px]"
                        >
                            <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <p className="text-xl font-semibold text-black">{item.title}</p>
                            <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CENTER IMAGE */}
                <div className="rounded-3xl overflow-hidden shadow-lg 
                    h-[250px] md:h-[550px] w-full order-1 md:order-2">
                    <img
                        src={Image4}
                        alt="How We Work"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* RIGHT CARDS */}
                <div className="flex flex-col gap-6 md:gap-10 order-3">
                    {features.slice(2, 4).map((item, i) => (
                        <div
                            key={i}
                            className="p-6 md:p-8 bg-[#f2f2f2] rounded-3xl shadow-sm flex flex-col gap-4 
                            h-auto md:h-[260px]"
                        >
                            <div className="bg-primary w-12 h-12 rounded-xl flex items-center justify-center">
                                {item.icon}
                            </div>
                            <p className="text-xl font-semibold text-black">{item.title}</p>
                            <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default HowWeWork;
