import React from 'react';
import { motion } from 'framer-motion';
import {
    ClipboardList,
    Truck,
    Users,
    Clock,
    ShieldCheck,
    ArrowRight
} from 'lucide-react';
import { OfficeRelocation1, OfficeRelocation2, OfficeRelocation3 } from '../../assets'; // Assuming this image exists or I'll use a placeholder URL if not found, let's use a URL for now to be safe as I'm not sure about assets
import HeroButton from '../../components/ui/HeroButton';

const OfficeRelocationPage = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const features = [
        {
            title: "Comprehensive Planning",
            description: "Our expert team conducts detailed pre-move assessments to create customized relocation strategies",
            icon: ClipboardList
        },
        {
            title: "Advanced Equipment",
            description: "State-of-the-art moving equipment and specialized vehicles designed for office furniture and technology",
            icon: Truck
        },
        {
            title: "Trained Professional Staff",
            description: "Highly skilled movers trained in handling delicate office equipment and sensitive documents",
            icon: Users
        },
        {
            title: "Minimal Business Disruption",
            description: "Efficient moving processes that ensure quick and organized relocation",
            icon: Clock
        },
        {
            title: "Comprehensive Insurance",
            description: "Full protection and coverage for your office assets during the entire moving process",
            icon: ShieldCheck
        }
    ];

    return (
        <>
            <title>Office Movers in Abu Dhabi | Office Relocation in Abu Dhabi</title>
            <meta name="description" content="Abu Dhabi's premier office moving service with 15+ years of experience. Expert Office Moving Services in Abu Dhabi." />
            <link rel="canonical" href="https://globaliconmovers.com/services/office-movers-in-abu-dhabi" />

            <div className="font-poppins bg-white">

                {/* Hero Section */}
                <section className="relative h-screen md:h-[60vh] md:min-h-[500px] flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${OfficeRelocation2})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Office Movers in Abu Dhabi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Smooth and hassle-free office relocation services tailored to minimize disruption and maximize efficiency for your business.
                        </motion.p>
                    </div>
                </section>

                {/* Introduction Section */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">
                                <span className="text-primary"> the Best Office Movers</span> in Abu Dhabi
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 text-base md:text-lg">
                                Global Icon Movers is the best Office Movers in Abu Dhabi as we provide the best comprehensive and efficient relocation services to businesses in the UAE. Having served more than 15 years in a capacity of over 15 years we offer a smooth and hassle free Abu Dhabi office relocation thereby minimising disruption to your business operations as well as upholding the most standards of professionalism.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                As we are office movers in Abu Dhabi, we know that every business has special demands. Our Office Moving Service in Abu Dhabi that we offer is built on the concept of flexibility and adaptability to deliver solutions to businesses of all sizes. We manage every aspect of your move in a precision and care from small startup offices to large corporate environments.
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
                                src={OfficeRelocation1}
                                alt="Office Meeting"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-8 md:py-12">
                    <div className="w-11/12 max-w-7xl mx-auto">
                        <div className="text-center mb-4 md:mb-16">
                            <motion.h2
                                {...fadeInUp}
                                className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-4"
                            >
                                Why Choose Our Office Moving Service
                            </motion.h2>
                            <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                    <p className="text-gray-600 leading-relaxed text-base md:text-base">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Approach & Commitment Section */}
                <section className="py-8 md:py-12">
                    <div className="w-11/12 max-w-7xl mx-auto space-y-20">

                        {/* Approach */}
                        <div className="flex justify-center text-center gap-12 items-center">

                            <motion.div
                                {...fadeInUp}
                                className="order-1 lg:order-2"
                            >
                                <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">Our Comprehensive Moving Approach</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    We crafted our Office relocation in Abu Dhabi process so that our transition is as smooth as possible. Upon clearing this out in detail, we start with a thorough discussion of your precise needs, follow by extensively planning and the execution. Advanced packing methods are used by our team to protect your office equipment, electronics, furniture and important documents.
                                </p>
                            </motion.div>
                        </div>

                        {/* Commitment */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center md:text-left items-center">
                            <motion.div {...fadeInUp}>
                                <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight text-gray-900 mb-6">Commitment to Excellence</h2>
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    Reliable office movers in Abu Dhabi, Global Icon Movers has become reputedly known as one of the best. In the fiercely competitive relocation industry we believe in set business standards of quality and punctuality and customer satisfaction.
                                </p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative h-[300px] rounded-2xl overflow-hidden shadow-xl"
                            >
                                <img
                                    src={OfficeRelocation3}
                                    alt="Teamwork"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
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
                            Contact us for your Office move
                        </motion.h2>
                        <motion.p
                            {...fadeInUp}
                            className="text-base md:text-xl text-gray-300 mb-10 leading-relaxed "
                        >
                            It is ready to have your stress free Office Moving Service in Abu Dhabi. Get in touch with Global Icon Movers for an individual consultation. We have done office relocation with professionalism and care, let our experts do yours.
                        </motion.p>
                        <HeroButton name='Get a Free Quote' to='/contact-us' />
                    </div>
                </section>

            </div>
        </>
    );
};

export default OfficeRelocationPage;
