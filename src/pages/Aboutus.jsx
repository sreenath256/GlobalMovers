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
import FAQ from '../components/sections/home4/Faq';

const Aboutus = () => {

    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const whyStoreFeatures = [
        "24/7 CCTV surveillance and round-the-clock security",
        "Climate-controlled units protecting items from Abu Dhabi's extreme heat",
        "Flexible rental terms — weekly, monthly, or long-term",
        "Transparent pricing with no hidden fees",
        "Easy access to your belongings whenever needed",
        "Short-term and long-term options under one roof",
        "Integrated packing and moving services"
    ];

    const specializedServices = [
        {
            icon: Clock,
            title: "Short-Term Storage",
            desc: "Ideal for home renovations, between-move gaps, seasonal items, or student breaks. No long-term commitment — just flexible, secure space when you need it."
        },
        {
            icon: Box,
            title: "Long-Term Storage",
            desc: "Storing household furniture, business inventory, vehicles, or important documents for an extended period? Our long-term units offer climate control, 24/7 security, and flexible access — all at affordable monthly rates."
        },
        {
            icon: Sofa,
            title: "Personal Storage Units",
            desc: "Private, clean, and easy to access. Choose your unit size and store clothes, electronics, valuables, or seasonal items with complete confidence."
        },
        {
            icon: Briefcase,
            title: "Business & Commercial Storage",
            desc: "Scalable warehousing and commercial storage for startups to large enterprises. Customisable layouts, robust security, and logistical support keep your operations running smoothly."
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
            <meta name="description" content="Secure and affordable storage solutions in Abu Dhabi with Global Icon Movers & Packers. Offering flexible storage services, 24/7 security." />
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
                           Storage Solutions in Abu Dhabi
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Looking for reliable storage solutions in Abu Dhabi? Global Icon Movers offers secure, climate-controlled storage for individuals and businesses across the UAE — whether you need space for a week or a year.
                        </motion.p>

                        <HeroButton name="Get a quote" to="/contact-us" />
                    </div>
                </section>

                <section>
                    <div className="py-8 px-2 md:py-16 mx-auto">
                        <div className="text-center max-w-7xl mx-auto">
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-4">15+ Years of Storage & Moving Excellence in Abu Dhabi</h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Since 2008, Global Icon Movers has helped thousands of families and businesses across Abu Dhabi and Dubai store and move with confidence. Our certified, background-verified team operates under strict quality and safety protocols, and our facilities meet international storage standards. Fully licensed in the UAE — we don't just store things, we build trust.
                            </p>
                           
                            <a href="tel:+971024417357" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors uppercase tracking-wide shadow-lg shadow-primary/30">
                                Get A Quote
                            </a>
                        </div>
                    </div>
                </section>


                {/* Section 3: Specialized Services */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="w-11/12 mx-auto">
                        <motion.div {...fadeInUp} className="text-center max-w-5xl mx-auto mb-8 md:mb-16">
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Storage Solutions in Abu Dhabi That Work Around You</h2>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-10">
                                Every storage need is different, so we tailor our solutions to fit yours. Homeowner between properties, business with overflow stock, or expat heading overseas — we build a plan around you, not the other way around. With locations accessible from Khalidiyah, Al Reem Island, Mussafah, and Al Ain, plus doorstep pick-up and delivery, we make storage effortless from start to finish.
                            </p>
                            <h3 className="text-xl md:text-2xl font-bold text-primary uppercase tracking-wide">Our Storage Services in Abu Dhabi</h3>
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

                {/* Section 2: Why Store With Us */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12 bg-white">
                    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h4 className="text-primary font-bold tracking-wider uppercase mb-3">Dependable Service</h4>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight md:mb-8 mb-4">
                                Why Choose Global Icon for Storage Services in Abu Dhabi?
                            </h2>
                            <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                                With 15+ years of experience, we go beyond providing space — we deliver peace of mind. Here's what makes us the preferred storage company in Abu Dhabi:
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


                


                <section>
                    <div className=" mx-auto">
                        <FAQ
                            title="Frequently Asked Questions"
                            description="Have questions about our storage services in Abu Dhabi? We’re here to give you answers and the right support at every step."
                            buttonShow={false}
                            faqs={[
                                {
                                    question: "What types of storage does Global Icon offer in Abu Dhabi?",
                                    answer: "We offer short-term, long-term, personal, and commercial storage — all climate-controlled, secured with 24/7 CCTV, and accessible on your schedule."
                                },
                                {
                                    question: "Are your storage units climate-controlled?",
                                    answer: "Yes. All units maintain stable temperature and humidity levels year-round, protecting furniture, electronics, documents, and other sensitive items from Abu Dhabi's extreme heat."
                                },
                                {
                                    question: "How much does storage cost in Abu Dhabi?",
                                    answer: "Pricing depends on unit size and rental duration. We offer transparent, competitive rates with no hidden fees. Contact us for a free, tailored quote."
                                },
                                {
                                    question: "Can I access my items at any time?",
                                    answer: "Yes. Schedule access at your convenience or request doorstep delivery — we bring your stored items back to you when you're ready."
                                },
                                {
                                    question: "Do you offer both residential and commercial storage?",
                                    answer: "Absolutely. We serve homeowners, expats, and families as well as businesses needing scalable warehousing and commercial storage solutions across Abu Dhabi."
                                }
                            ]}
                        />
                    </div>
                </section>


                {/* Section 5: Moving Services & CTA */}
                <section className="py-8 md:py-12 bg-primary/5">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Get a Free Storage Quote in Abu Dhabi Today</h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                Need storage space in Abu Dhabi? Get in touch with Global Icon Movers for a free, no-obligation quote. Whether it's for a few weeks or several years, we have the right solution — and the right team — to make it effortless.
                            </p>
                            <a href="/contact-us" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors uppercase tracking-wide shadow-lg shadow-primary/30">
                                Contact Now
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
