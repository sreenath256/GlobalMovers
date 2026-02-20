import React from 'react';

import { motion } from 'framer-motion';
import {
    ShieldCheck,
    Thermometer,
    Bug,
    Clock,
    Box,
    Briefcase,
    FileText,
    Sofa,
    ArrowRight,
    CheckCircle2,
    ThermometerSnowflake
} from 'lucide-react';
import { Image7 } from '../assets';
import ContactForm from '../components/sections/home4/ContactForm';
import HeroButton from '../components/ui/HeroButton';

const Aboutus = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const whyStoreFeatures = [
        "24/7 Access to your storage unit",
        "Dust & Pest-Free Environment",
        "Advanced Video Surveillance",
        "Climate-Controlled Storage Units",
        "Affordable Prices with no hidden fees",
        "High-Level Security & dual-lock systems"
    ];

    const specializedServices = [
        {
            icon: Box,
            title: "Personal Storage in Abu Dhabi",
            desc: "Need temporary or long-term storage during a move or home renovation? Our personal storage units are ideal for storing everything from clothes and electronics to seasonal items and valuables."
        },
        {
            icon: Briefcase,
            title: "Business Storage Solutions",
            desc: "We offer customized business storage options for inventory, equipment, documents, and more with flexibility that grows with your business."
        },
        {
            icon: FileText,
            title: "Document Storage",
            desc: "Protect your sensitive records and paperwork in our secure document storage facilities, designed with high-end security systems and controlled environments."
        },
        {
            icon: Sofa,
            title: "Furniture Storage",
            desc: "From single sofas to full sets, our furniture storage in Dubai is perfect for keeping your items in excellent condition until you need them again."
        }
    ];

    const modernFacilities = [
        {
            icon: ShieldCheck,
            title: "Advanced Security Systems",
            desc: "Including CCTV, controlled access, and dual-lock protection."
        },
        {
            icon: Thermometer,
            title: "Climate Control",
            desc: "Essential for preserving electronics, documents, furniture, and more."
        },
        {
            icon: Bug,
            title: "Dust & Pest-Free",
            desc: "Cleaned regularly and serviced by professional pest control."
        },
        {
            icon: ThermometerSnowflake,
            title: "AC & Non-AC Storage",
            desc: "Air-conditioned and standard storage units to match your needs and budget."
        }
    ];

    return (
        <>
            <title>Storage Solutions in Abu Dhabi | Storage Service Abu Dhabi</title>
            <meta name="description" content="Secure and affordable storage solutions in Abu Dhabi with Global Icon Packers & Movers. Offering flexible storage services, 24/7 security." />
            <link rel="canonical" href="https://globaliconmovers.com/storage-solutions-in-abu-dhabi" />
            <div className="bg-white">


                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: `url(${Image7})` }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Top Storage Facilities in Abu Dhabi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Looking for reliable storage solutions in Abu Dhabi? Global Icon Movers stands out as one of the top-rated storage and relocation service providers in the UAE. With more than 15 years of excellence, we have built a reputation for delivering safe, accessible, and affordable storage backed by professional moving expertise.
                        </motion.p>

                        <HeroButton name="Explore More" to="/gallery" />
                    </div>
                </section>

                {/* Section 2: Why Store With Us */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
                    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h4 className="text-primary font-bold tracking-wider uppercase mb-3">Dependable Service</h4>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight md:mb-8 mb-4">
                                Why Store Your Belongings with Global Icon Movers?
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                                When you choose Global Icon Movers, you’re choosing a secure, convenient, and professional experience:
                            </p>
                            <ul className="space-y-4">
                                {whyStoreFeatures.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-4 text-lg font-medium text-gray-800">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={Image7}
                                    alt="Secure Storage"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                        </motion.div>
                    </div>
                </section>

                {/* Section 3: Specialized Services */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="w-11/12 mx-auto">
                        <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto mb-8 md:mb-16">
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Fast, Secure, and Professional Storage</h2>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                                At Global Icon Movers, we go beyond just providing space—we offer total storage and moving solutions customized to fit your lifestyle or business needs. Our mission is to provide seamless, secure, and affordable storage experiences, making us a top choice for both individuals and businesses in the UAE.
                            </p>
                            <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide">Our Specialized Storage Services</h3>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
                            {specializedServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100"
                                >
                                    <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 text-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h4 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h4>
                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                        {service.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 4: Modern Facilities */}
                <section className="py-8 md:py-12 bg-white text-white relative">
                    <div className="absolute inset-0 bg-gray-900"></div>
                    <div className="w-11/12 mx-auto relative z-10">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-4">Modern Storage Facilities with Smart Features</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {modernFacilities.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 hover:border-primary/50 transition-colors"
                                >
                                    <item.icon className="w-10 h-10 text-primary mb-6" />
                                    <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Section 5: Moving Services & CTA */}
                <section className="py-8 md:py-12 bg-primary/5">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Moving Services in Abu Dhabi</h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                Our experienced movers make relocation effortless. Whether you’re moving locally within Dubai or across the UAE, our moving services include packing, transportation, and unpacking, all tailored to your schedule and needs.
                            </p>
                            <a href="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors uppercase tracking-wide shadow-lg shadow-primary/30">
                                Know More
                            </a>
                        </motion.div>

                        <ContactForm />
                    </div>
                </section>

            </div>
        </>
    );
};

export default Aboutus;
