import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

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
    // We can allow multiple open items or keep it single. 
    // For a grid, independent opening often feels better so one side doesn't collapse when interacting with the other.
    // Let's use an array or just simple index if strictly accordion. 
    // Let's stick to single open index for now to minimize complex logic, but initialized to null so none are pre-open (cleaner look).
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 mb-3">
                        <span className="h-0.5 w-6 bg-primary"></span>
                        <span className="text-primary font-semibold tracking-widest uppercase text-sm">
                            FAQ
                        </span>
                        <span className="h-0.5 w-6 bg-primary"></span>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-[#1C1F2E]">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-start">
                    {faqData.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`
                                    bg-white rounded-xl overflow-hidden transition-all duration-300
                                    ${isOpen ? 'shadow-lg ring-2 ring-primary ring-opacity-10' : 'shadow-sm hover:shadow-md border border-gray-100'}
                                `}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-start justify-between p-6 text-left"
                                >
                                    <h3 className={`text-lg font-semibold pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-[#1C1F2E]'}`}>
                                        {faq.q}
                                    </h3>
                                    <span className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500'}`}>
                                        {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                                    </span>
                                </button>

                                <div
                                    className={`
                                        overflow-hidden transition-all duration-300 ease-in-out
                                        ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
                                    `}
                                >
                                    <div className="px-6 pb-6 pt-0 text-gray-600 leading-relaxed text-sm">
                                        {faq.a}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
