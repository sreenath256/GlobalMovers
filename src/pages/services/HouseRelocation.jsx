import React from 'react';

import { motion } from 'framer-motion';
import {
    Package,
    Truck,
    UserCheck,
    Warehouse,
    ArrowRight,
    CheckCircle
} from 'lucide-react';
import { HomeRelocation1, HomeRelocation2, HomeRelocation3 } from '../../assets'; // Reusing generic assets or placeholders to keep it simple, checking limit.
import HeroButton from '../../components/ui/HeroButton';

const HouseRelocationPage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            title: "Packing Expertise",
            description: "Our professional team make use of high quality packing materials and waterproofing safeguarding your valuables are safe and sound.",
            icon: Package
        },
        {
            title: "Secure Transportation",
            description: "Modern, well-maintained vehicles guarantee the secure transit of your belongings.",
            icon: Truck
        },
        {
            title: "Professional Handling",
            description: "As the Best house movers in Abu Dhabi that trains movers who treat your items equally the way you would.",
            icon: UserCheck
        },
        {
            title: "Storage Solutions",
            description: "Short or long-term secure, climate-controlled storage facilities.",
            icon: Warehouse
        }
    ];

    const trustPoints = [
        "Fully licensed and insured",
        "Transparent pricing",
        "No hidden charges",
        "Professional and courteous staff",
        "Cutting-edge moving technology"
    ];

    const processPoints = [
        { title: "Initial Consultation", desc: "Detailed assessment of your moving needs" },
        { title: "Customized Planning", desc: "Developing a strategic moving plan" },
        { title: "Precise Execution", desc: "Efficient and careful relocation of your belongings" },
        { title: "Post-Move Support", desc: "Ensuring your complete satisfaction" }
    ];

    return (
        <>
            <title>House Movers in Abu Dhabi | House Relocation Services</title>
            <meta name="description" content="Professional house movers in Abu Dhabi offering comprehensive relocation services, secure packing & storage solutions." />
            <link rel="canonical" href="https://globaliconmovers.com/services/house-movers-in-abu-dhabi" />

            <div className="font-poppins bg-white">
                {/* Hero Section - Image 1 */}
                <section className="relative h-screen md:h-[60vh] md:min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${HomeRelocation1})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-6xl font-medium uppercase leading-tight tracking-wide mb-6"
                        >
                            House Movers in Abu Dhabi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-200 max-w-4xl mx-auto leading-relaxed"
                        >
                            Since 2008 Global Icon Movers has been the leading House Movers in Abu Dhabi, providing excellent services from moving to make it easy and stress free. We understand that moving is more than just transporting belongings, it’s a matter of moving your life with care, precision and professionalism.
                        </motion.p>
                    </div>
                </section>

                {/* Why Choose Us - Image 2 */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                Why choose <span className="text-primary">Global Icon Movers?</span>
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                When you choose Global Icon Movers for your House Moving service, you are choosing one of the best House Moving Company in Abu Dhabi. And we offer service that is experienced and committed to the total satisfaction of customers.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                Our house movers in Abu Dhabi are a team of professional house movers who have the most modern tools and some comprehensive training that makes sure they can handle every part of your move in the best precise manner.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <img
                                src={HomeRelocation2}
                                alt="House Moving"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="w-11/12 max-w-7xl mx-auto">
                        <div className="text-center mb-4 md:mb-16">
                            <motion.h2
                                {...fadeInUp}
                                className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-4"
                            >
                                Comprehensive House Moving Services
                            </motion.h2>
                            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">Our House Moving Service in Abu Dhabi covers every stage of your relocation.</p>
                            <div className="h-1 w-20 bg-primary mx-auto rounded-full mt-4"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                                >
                                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 text-primary">
                                        <feature.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                                    <p className="text-gray-600 leading-relaxed text-base">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Trusted & Tailored - Image 3 */}
                <section className="py-8 md:py-12">
                    <div className="w-11/12 max-w-7xl mx-auto space-y-20">

                        {/* How we became trusted */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src={HomeRelocation3}
                                    alt="Trusted Movers"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                {...fadeInUp}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">How we became the trusted House movers</h2>
                                <p className="text-gray-600 leading-relaxed mb-6  text-base md:text-lg">
                                    Our House Moving Service in Abu Dhabi runs over 15 years and is the leading one with perfect reliability, efficiency and unmatched customer care. We don’t just move your belongings, we helps and make your memories, your dreams and your future. And we are committed to:
                                </p>
                                <ul className="space-y-3">
                                    {trustPoints.map((point, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle className="w-5 h-5 text-primary shrink-0 " />
                                            <span className="text-gray-700 font-medium text-base md:text-lg">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* Tailored Solutions - No Image (Max 3 reached) */}
                        <div className=" bg-gray-50 rounded-3xl md:p-12">
                            <div className="max-w-4xl mx-auto text-center mb-12 ">
                                <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">Tailored moving solutions for every home</h2>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    Our House Movers in Abu Dhabi ensure that we have tailored services to meet your needs whether you’re moving to a studio apartment or a large family home. However, we understand that each move is unique, and our House Moving Company in Abu Dhabi aims to do it exceptionally in every unique case.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                {processPoints.map((step, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                                        <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                                            {idx + 1}
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
                                        <p className="text-sm text-gray-600">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-8 md:py-12 bg-gray-900 text-white text-center">
                    <div className="w-11/12 max-w-4xl mx-auto">
                        <motion.h2
                            {...fadeInUp}
                            className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6"
                        >
                            Get your free moving quote today
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed"
                        >
                            Let’s go live with the most reliable House Movers in Abu Dhabi! Contact Global Icon Movers for a free, no obligation moving quote today. We aim to turn your moving experience from chaotic to a breeze.
                        </motion.p>
                        <HeroButton name='Get a Free Quote' link='/contact-us' />
                    </div>
                </section>
            </div>
        </>
    );
};

export default HouseRelocationPage;
