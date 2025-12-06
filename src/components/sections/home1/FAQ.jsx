import React, { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const faqData = [
    {
        q: "What payment methods are available ?",
        a: "Cash, cheque, bank transfer, and other convenient options are provided by Global Icon, the best movers and packers in Abu Dhabi, to make your payment process smooth and hassle-free.",
    },
    {
        q: "What nationalities are Global Icon Movers and Packers in Abu Dhabi laborers from?",
        a: "Our workforce is diverse, with 70% of our team members coming from India, and the rest from various Asian countries. As one of the best movers and packers in Abu Dhabi, we value professionalism, skill, and cultural diversity in our team.",
    },
    {
        q: "Does Global Icon Packers & Movers offer relocation and storage services in Abu Dhabi?",
        a: "Yes, Global Icon Packers & Movers offers relocation and storage services in Abu Dhabi. They are recognized as one of the best movers and packers in Abu Dhabi, providing comprehensive solutions for home, villa, and office moves, as well as secure short-term and long-term storage options. Their services include professional packing, safe transportation, flexible storage, and expert handling for a seamless moving experience.",
    },
    {
        q: "How do Global Icon Movers pack the fragile items?",
        a: "For fragile items, we will provide the required packing material, especially bubble paper as a Best Movers and Packers in Abu dhabi.",
    },
    {
        q: "How is your packing process for refrigerator items at Global Icon Movers and Packers in Abu Dhabi?",
        a: "We use cooler boxes for temperature-sensitive items during the move.",
    },
    {
        q: "During the move or relocation if anything breaks, how does Global Icon Movers treat it?",
        a: "If anything breaks during the move, Global Icon, as one of the best movers and packers in Abu Dhabi, UAE, will either repair or replace the damaged item to ensure customer satisfaction and trust.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="w-full px-4 md:px-6 lg:px-28">

            {/* Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-12">
                <h2 className="
                    text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                    font-semibold text-black leading-tight
                ">
                    Got Questions?<br />We’ve Got Answers.
                </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-2">
                {faqData.map((faq, i) => {
                    const isOpen = openIndex === i;

                    return (
                        <div key={i} className="border-b border-gray-200 pb-4">

                            {/* Question Row */}
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between py-4 text-left"
                            >
                                <h3 className="
                                    text-lg sm:text-xl md:text-2xl 
                                    font-medium text-black
                                ">
                                    {faq.q}
                                </h3>

                                {isOpen ? (
                                    <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-black transition-all duration-300 rotate-90" />
                                ) : (
                                    <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-gray-500 transition-all duration-300" />
                                )}
                            </button>

                            {/* Animated Answer */}
                            <div
                                className={`
                                    overflow-hidden transition-all duration-500
                                    ease-[cubic-bezier(0.25,0.46,0.45,0.94)]
                                    ${isOpen ? "max-h-[400px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}
                                `}
                            >
                                <p className="
                                    text-gray-600 text-base sm:text-lg 
                                    leading-relaxed max-w-3xl pb-4
                                ">
                                    {faq.a}
                                </p>
                            </div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQ;
