import { motion } from 'framer-motion';
import {
    Home,
    Building2,
    PackageCheck,
    Wrench,
    Warehouse,
    Truck
} from 'lucide-react';
import ContactForm from '../components/sections/home4/ContactForm';
import HeroButton from '../components/ui/HeroButton';
import { Image2, Image13, ProfessionalCrewImage } from '../assets';

const AboutPage = () => {
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    const services = [
        { icon: Home, title: "Home Relocation", desc: "Moving apartments, villas, and other residential properties with care." },
        { icon: Building2, title: "Office & Commercial Moving", desc: "Organized relocation solutions for offices and business spaces." },
        { icon: PackageCheck, title: "Professional Packing", desc: "Careful packing to help protect furniture, household items, and other belongings during transit." },
        { icon: Wrench, title: "Furniture Dismantling & Assembly", desc: "Assistance with furniture handling before and after relocation." },
        { icon: Warehouse, title: "Storage Solutions", desc: "Short-term and long-term storage options for belongings that need a secure place during a move or beyond." },
        { icon: Truck, title: "Local & Long-Distance Moving", desc: "Moving support for relocations within Abu Dhabi and journeys to other destinations." }
    ];

    return (
        <>
            <title>About Global Icon Movers | Movers & Packers in Abu Dhabi Since 2008</title>
            <meta name="description" content="Global Icon Movers has helped customers across Abu Dhabi with home relocation, office moving, packing, furniture handling and storage since 2008." />
            <link rel="canonical" href="https://globaliconmovers.com/about" />

            <div className="bg-white">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{ backgroundImage: `url(${Image13})` }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Moving Made Simple, Every Step of the Way
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto"
                        >
                            At Global Icon Movers, we help individuals, families, and businesses move with confidence. From home relocations to office moves, packing, and storage, we provide practical moving solutions designed around your needs. Our focus is on careful handling, organized planning, and dependable service to make every move easier.
                        </motion.p>
                        <HeroButton name="Get a quote" to="/contact-us" />
                    </div>
                </section>

                {/* Experience */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">
                                Experience You Can Trust Since 2008
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Since 2008, Global Icon Movers has been helping customers across Abu Dhabi with their moving and relocation needs. Over the years, we have built our experience by understanding what matters most during a move: protecting belongings, meeting schedules, and keeping the process as stress-free as possible.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Our knowledge of local areas, residential communities, and business locations across Abu Dhabi helps us plan relocations with greater care and attention. We aim to build lasting relationships with our customers through honest communication, consistent service, and a commitment to handling every move responsibly.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="h-[350px] md:h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={Image2}
                                    alt="Global Icon Movers team handling a move in Abu Dhabi"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Services */}
                <section className="py-8 md:py-12 bg-gray-50">
                    <div className="w-11/12 mx-auto">
                        <motion.div {...fadeInUp} className="text-center max-w-5xl mx-auto mb-8 md:mb-16">
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Complete Moving and Storage Solutions</h2>
                            <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                                From the first stage of planning to the final delivery, our goal is to provide a practical solution that suits your requirements.
                            </p>
                        </motion.div>

                        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none -mx-[4.1667%] px-[4.1667%] md:mx-0 md:px-0 pb-4 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="bg-white p-8 md:p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100 shrink-0 w-[85%] sm:w-[60%] md:w-auto snap-center"
                                >
                                    <div className="w-16 h-16 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <service.icon className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-gray-500 text-base md:text-lg leading-relaxed">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <div className="text-center mt-8 md:mt-12">
                            <a href="/services" className="inline-block bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-gray-900 transition-colors uppercase tracking-wide shadow-lg shadow-primary/30">
                                View Our Services
                            </a>
                        </div>
                    </div>
                </section>

                {/* Careful Handling */}
                <section className="pt-16 md:pt-24 pb-8 md:pb-12">
                    <div className="w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-2 lg:order-1"
                        >
                            <div className="h-[350px] md:h-[500px] w-full bg-gray-100 rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src={ProfessionalCrewImage}
                                    alt="Professional crew carefully handling belongings"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </motion.div>
                        <motion.div {...fadeInUp} className="order-1 lg:order-2">
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Careful Handling at Every Stage</h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Your belongings are more than just items to transport. They include furniture, personal possessions, business equipment, and things that hold value for you. That is why careful handling is an important part of our approach.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                We focus on proper packing, organized loading, suitable transportation, and thoughtful unloading. By paying attention to the details throughout the moving process, we aim to reduce avoidable damage and help your belongings reach their destination in good condition.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* CTA */}
                <section className="py-8 md:py-12 bg-primary/5">
                    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div {...fadeInUp}>
                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-6">Let Global Icon Movers Help You Move Forward</h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4">
                                Planning a move in Abu Dhabi? Let Global Icon Movers help you take the next step with confidence. With experience dating back to 2008 and services covering relocation, packing, furniture handling, and storage, we are here to make your move more manageable.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
                                Contact Global Icon Movers today to discuss your requirements and get a moving solution tailored to your needs.
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

export default AboutPage;
