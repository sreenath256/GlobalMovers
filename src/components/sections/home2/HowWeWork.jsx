import React from 'react';

const steps = [
    {
        number: "01",
        title: "Expert Assessment",
        description: "Each home shifting project starts with a detailed inspection to understand your specific requirements."
    },
    {
        number: "02",
        title: "Proper Quotation",
        description: "We provide an accurate, transparent quote with no hidden costs, tailored to your moving needs."
    },
    {
        number: "03",
        title: "Professional Crew",
        description: "Our skilled movers are carefully assigned to handle your belongings with expert care and precision."
    },
    {
        number: "04",
        title: "Safe & Secure Relocation",
        description: "We ensure a seamless journey, delivering your items safely and securely to your new destination."
    }
];

const HowWeWork = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col gap-12 items-start mb-20">
                    <div className="">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="h-0.5 w-6 bg-primary"></span>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs">
                                Our Process
                            </span>
                        </div>
                        <h2 className="text-4xl lg:text-5xl font-semibold text-[#1C1F2E] leading-tight">
                            How We Work: Best Movers and Packers in Abu Dhabi
                        </h2>
                    </div>
                    <div className="">
                        <p className="text-gray-500 text-lg leading-relaxed">
                            A clear, step-by-step approach ensures a seamless move. Each home shifting project starts with a detailed inspection, followed by an accurate quote and careful assignment of skilled movers who handle belongings with expert care at every stage.
                        </p>
                    </div>
                </div>
        
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className='group '>

                            <div key={index} className="relative group p-6 hover:bg-gray-50 transition-colors duration-300 border-2 border-[#1C1F2E] group-hover:border-primary">
                                {/* Connecting Line (Desktop only, except last item) */}
                                {index !== steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gray-100 -z-10"></div>
                                )}

                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#1C1F2E] text-white font-bold text-lg mb-6 group-hover:bg-primary transition-colors duration-300 relative z-10 shadow-lg shadow-gray-200">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-[#1C1F2E] mb-4 group-hover:text-primary">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowWeWork;
