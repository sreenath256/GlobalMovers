import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    ArrowRight,
    MapPin,
    Smartphone
} from 'lucide-react';
import ContactForm from '../components/sections/home4/ContactForm';
import { Image13 } from '../assets';
import HeroButton from '../components/ui/HeroButton';

const ContactPage = () => {
    return (
        <>
            <title>Contact Global Icon Movers for a Free Moving Quote</title>
            <meta name="description" content="Contact Global Icon Movers for professional moving services. Our team provides reliable assistance & best relocation solutions nationwide." />
            <link rel="canonical" href="https://globaliconmovers.com/contact-us" />

            <div className="font-poppins min-h-screen flex flex-col relative">
                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${Image13})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Get in Touch with Our Experts
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Connect with our professional team for tailored moving solutions and a smooth, stress-free relocation experience.
                        </motion.p>
                        <HeroButton title="Explore More" href="/services" />
                    </div>
                </section>


                {/* Main Background Section */}
                <div className="relative flex-grow flex items-center justify-center pt-16 md:pt-24 pb-8 md:pb-12">


                    <div className="relative z-10 w-11/12 max-w-6xl mx-auto items-center grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                        {/* Left Column: Contact Info */}
                        <div className="text-black">
                            {/* <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-medium uppercase leading-tight mb-12"
                        >
                            Contact Us
                        </motion.h1> */}

                            <div className="space-y-8">
                                {/* Movers Section */}
                                <div>
                                    <div className="border border-white/30 rounded-lg md:p-6 flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-sm">
                                        <div className="flex flex-col gap-4">
                                            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight">Let’s Connect</h2>
                                            <p className="mb-12 text-base md:text-lg text-gray-700">
                                                Have questions about our moving or storage services? Our team is ready to assist you.
                                            </p>


                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <a href="tel:+971024417357" className="font-medium text-base md:text-lg text-nowrap hover:text-primary transition-colors duration-300 relative group">
                                                        +971 024-417-357
                                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                                    <Smartphone className="w-5 h-5" />
                                                </div>
                                                <div className="flex flex-col items-start">
                                                    <a href="tel:+971569393015" className="font-medium text-base md:text-lg text-nowrap hover:text-primary transition-colors duration-300 relative group">
                                                        +971 569-393-015 - Storage
                                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                                    </a>
                                                    <a href="tel:+971509393081" className="font-medium text-base md:text-lg text-nowrap hover:text-primary transition-colors duration-300 relative group">
                                                        +971 509-393-081 - Moving
                                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                                <a href="mailto:info@globaliconmoversae.com" className="font-medium text-base md:text-lg break-all hover:text-primary transition-colors duration-300 relative group">
                                                    info@globaliconmoversae.com
                                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                                </a>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shrink-0">
                                                    <MapPin className="w-5 h-5" />
                                                </div>
                                                <p className="font-medium text-base md:text-lg break-all">Al-Sireef Street, <br />
                                                    Musaffah-M20, Abu Dhabi, UAE</p>
                                            </div>
                                        </div>

                                    </div>



                                </div>
                            </div>
                        </div>

                        {/* Right Column: Contact Form */}
                        <div className=''>

                            <ContactForm title='get a quote' desc='' />
                        </div>


                    </div>
                </div>

            </div>
        </>
    );
};

export default ContactPage;
