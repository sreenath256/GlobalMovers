import { Image4, Image5, Image7 } from "../../../assets";

export default function WhyUsSection() {
    const features = [
        {
            number: "01",
            title: "100% Safe and Secure",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
        {
            number: "02",
            title: "24/7 Services",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
        {
            number: "03",
            title: "Professional Packing",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
        {
            number: "04",
            title: "Safe Handling",
            description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the."
        },
    ];

    return (
        <div className="bg-white py-16 px-6 sm:px-12 lg:px-20">
            <div className="w-11/12 mx-auto">
                <div className="grid lg:grid-cols-1 gap-12 items-start">
                    {/* Left Column - Header and Image */}
                    <div>
                        <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
                            WHY US
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-2 leading-tight md:max-w-[70%]">
                            What Makes Us the Best Movers and Packers in Abu Dhabi
                        </h2>
                    </div>

                    {/* Right Column - Features */}
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div className="col-span-1">
                            <div className=" h-[550px] overflow-hidden">
                                <img
                                    src={Image7}
                                    alt="Professional mover with boxes"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="col-span-1 space-y-6">
                            {features.map((feature, index) => (
                                <div key={index} className="space-y-3">
                                    <div className="bg-primary text-white inline-block px-6 py-3 font-semibold text-lg">
                                        {feature.title}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}