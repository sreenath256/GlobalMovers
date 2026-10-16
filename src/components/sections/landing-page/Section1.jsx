import { ArrowRight } from 'lucide-react';
import { Image10, Image14 } from '../../../assets';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import ContactForm from '../home4/ContactForm';



const Section1 = () => {
    const navigate = useNavigate();


    return (
        <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-400 via-gray-800 to-gray-900 overflow-hidden font-poppins text-white">
            <div className={`absolute inset-0 bg-cover bg-top mix-blend-overlay opacity-50 `} style={{ backgroundImage: `url(${Image14})` }}></div>

            <div className="relative w-11/12 mx-auto pt-32 pb-20 min-h-screen lg:h-screen flex flex-col justify-between">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10 md:pt-20">

                    <div className="space-y-3">

                        <div className="relative w-full perspective-1000">
                            <h1
                                className="w-full text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                            >
                                Moving & Secure Storage - All in One Place
                            </h1>
                        </div>
                        <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
                            At Global Icon Movers, we handle every step with care — from careful packing and transport to
                            safe and organized storage in abu dhabi. Our goal is to give you peace of mind knowing your
                            items are in trusted hands
                        </p>
                        {/* Local to Global Card */}
                        <a href="tel:+971509393081" className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl w-fit p-3 px-4 md:px-8 flex items-center justify-center gap-2 group overflow-hidden hover:scale-110 transition-transform transform hover:cursor-pointer">
                            <h3 className="text-lg md:text-xl font-medium uppercase leading-snug text-nowrap">
                                Get a Quote
                            </h3>
                            <div className="p-2 bg-primary rounded-full flex items-center justify-center">
                                <ArrowRight className="w-6 h-6 text-white" />
                            </div>
                        </a>
                    </div>

                    <ContactForm title="Get a Free Quote" desc="Looking for professional." />
                </div>
            </div>
        </div>
    );
}

export default Section1;