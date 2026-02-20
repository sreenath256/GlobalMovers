import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Youtube, MapPin, Phone, Smartphone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GlobalLogo } from '../../assets';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-20 pb-10 font-poppins">
            <div className="w-11/12 mx-auto">

                {/* Top Row - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">


                    <div>
                        <img src={GlobalLogo} alt="Global Movers Logo" className="h-16 md:h-20 w-auto" />
                        <p className="text-gray-700 text-sm">Global Icon Packers & Movers is one of UAE’s premier relocation and storage service providers. In 2008 Global Icon Packers & Movers was established with the vision of delivering high-standard relocation and storage services throughout United Arab Emirates.</p>
                    </div>

                    {/* Menu Column */}
                    <div className="flex flex-col gap-4 md:gap-8">
                        <h3 className="text-xl font-normal uppercase">Menu</h3>
                        <ul className="space-y-3 text-base text-gray-700">
                            <li><Link to="/" className="hover:text-black transition-colors">Home</Link></li>
                            <li><Link to="/storage-solutions-in-abu-dhabi" className="hover:text-black transition-colors">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-black transition-colors">Our Services</Link></li>
                            <li><Link to="/gallery" className="hover:text-black transition-colors">Gallery</Link></li>
                            <li><Link to="/blog" className="hover:text-black transition-colors">Blog</Link></li>
                            <li><Link to="/contact-us" className="hover:text-black transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>


                    {/* Contact Column */}
                    <div className="flex flex-col gap-4 md:gap-8">
                        <h3 className="text-xl font-normal uppercase">Contact</h3>
                        <div className="space-y-4 text-base text-gray-700">
                            <a href="#" className="flex items-start gap-3 hover:text-black transition-colors">
                                <MapPin className="w-5 h-5 shrink-0 mt-1 text-primary" />
                                <p>Al-Sireef Street, <br />Musaffah-M20, Abu Dhabi, UAE</p>
                            </a>

                            <a href="tel:+971024417357" className="flex items-center gap-3 hover:text-black transition-colors group">
                                <Phone className="w-5 h-5 shrink-0 text-primary" />
                                <span className="relative">
                                    +971 02-4417357
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </a>

                            <div className="flex items-start gap-3">
                                <Smartphone className="w-5 h-5 shrink-0 mt-1 text-primary" />
                                <div className="flex flex-col items-start">
                                    <a href="tel:+971509393081" className="hover:text-black transition-colors relative group">
                                        +971 509-393-081 - Moving
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <a href="tel:+971569393015" className="hover:text-black transition-colors relative group">
                                        +971 569-393-015 - Storage
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </div>
                            </div>

                            <a href="mailto:info@globaliconmoversae.com" className="flex items-center gap-3 hover:text-black transition-colors group">
                                <Mail className="w-5 h-5 shrink-0 text-primary" />
                                <span className="relative">
                                    info@globaliconmoversae.com
                                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                </span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Row - Copyright & Socials */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-transparent">
                    <p className="text-sm font-medium uppercase tracking-wide">
                        Copyright © 2025 Globaliconmovers
                    </p>

                    <div className="flex items-center gap-6 mt-6 md:mt-0">
                        <a href="https://www.facebook.com/globaliconmoversabudhabi/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><Facebook className="w-6 h-6 fill-black" strokeWidth={0} /></a>
                        <a href="https://x.com/movers_icon" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><FaXTwitter className="w-6 h-6 fill-black" strokeWidth={0} /></a>
                        <a href="https://www.linkedin.com/company/global-icon-movers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><Linkedin className="w-6 h-6 fill-black" strokeWidth={0} /></a>
                        <a href="https://www.youtube.com/@globaliconmovers9079" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><Youtube className="w-6 h-6" /></a>
                        <a href="https://www.instagram.com/globaliconmovers/" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><Instagram className="w-6 h-6" /></a>
                        <a href="https://maps.app.goo.gl/mwpFqwmjq8MDYqR59" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><MapPin className="w-6 h-6" /></a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
