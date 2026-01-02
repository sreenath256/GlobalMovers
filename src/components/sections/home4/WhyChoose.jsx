import { Play, ClipboardCheck, FileText, Users, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { ProfessionalCrewImage } from '../../../assets';

const WhyChoose = () => {

    const steps = [
        {
            id: 1,
            title: "Expert Assessment",
            description: "Our team evaluates your items, location, and requirements to plan a smooth and efficient move.",
            icon: <ClipboardCheck className="w-6 h-6" />
        },
        {
            id: 2,
            title: "Proper Quotation",
            description: "We provide clear, upfront pricing with no hidden charges, tailored to your moving needs.",
            icon: <FileText className="w-6 h-6" />
        },
        {
            id: 3,
            title: "Professional Crew",
            description: "Skilled and experienced movers handle packing, loading, and transport with utmost care.",
            icon: <Users className="w-6 h-6" />
        },
        {
            id: 4,
            title: "Safe & Secure Relocation",
            description: "From packing to final delivery, we ensure your belongings arrive safely and on time.",
            icon: <ShieldCheck className="w-6 h-6" />
        }
    ];

    return (
        <section className="relative w-full py-20 bg-white font-poppins text-black w-11/12 mx-auto">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left Column: Content & Steps */}
                    <div className="w-full lg:w-1/2 flex flex-col gap-10">
                        <h1
                            className="text-4xl md:text-6xl font-medium uppercase leading-tight max-w-4xl mx-auto"
                        >
                            Simplify Your Move with
                            <span className="text-primary pl-2">Global Icon</span>
                        </h1>

                        <div className="flex flex-col gap-2">
                            {steps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    // Change 1: y: 30 pushes the element down initially
                                    initial={{ opacity: 0, y: 30 }}
                                    // Change 2: y: 0 brings it up to its natural position
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    // Optional: Added duration for a smoother slide-up effect
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex gap-6 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 group cursor-pointer border border-transparent hover:border-gray-100"
                                >
                                    <div className="shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {step.icon}
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-2xl font-semibold text-black group-hover:text-primary transition-colors">{step.title}</h3>
                                        <p className="text-gray-600 leading-relaxed max-w-lg">
                                            {step.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>


                    </div>

                    {/* Right Column: Video/Image Placeholder */}
                    <div
                        className="w-full lg:w-1/2 flex items-center justify-center "
                    >
                        <div className="relative w-full aspect-square md:aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer shadow-2xl">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105 rounded-xl"
                                style={{ backgroundImage: `url(${ProfessionalCrewImage})` }}
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
};

export default WhyChoose;
