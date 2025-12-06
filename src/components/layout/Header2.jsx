import React from 'react';
import { Mail, Clock, MapPin, Facebook, Twitter, Linkedin, Instagram, Search, Phone, Truck, ArrowRight } from 'lucide-react';
import { GlobalLogo, GlobalLogo2 } from '../../assets';

const Header2 = () => {
    return (
        <header className="absolute top-0 left-0 w-full z-50">
            <div className="flex">
                {/* Logo Section - Spans full height of header interaction area if needed, 
                    but simpler to just have it as a block. 
                    Based on image, it looks like a solid dark block on the left. */}
                <div className="bg-[#1c1f2e] w-[250px] flex-shrink-0 flex items-center justify-center p-4 min-h-[100px] border-r border-white/10">
                    <div className="flex items-center gap-2">
                       <img src={GlobalLogo2} alt="" />
                    </div>
                </div>

                {/* Right Column */}
                <div className="flex-grow flex flex-col">
                    {/* Top Bar */}
                    <div className="bg-[#1c1f2e] text-gray-400 py-3 px-8 flex justify-between items-center text-sm border-b border-white/5">
                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <Mail size={16} className="" />
                                <span>info@globaliconmoversae.com</span>
                            </div>
                            
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="" />
                                <span>Abu Dhabi, UAE</span>
                            </div>
                            <div className="h-4 w-px bg-gray-700"></div>
                            <div className="flex items-center gap-4 ">
                                <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
                                <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
                            </div>
                        </div>
                    </div>

                    {/* Navbar */}
                    <div className="bg-[#1c1f2e]/10 backdrop-blur-md py-4 px-8 flex justify-between items-center">
                        {/* Navigation Links */}
                        <nav>
                            <ul className="flex items-center gap-8 text-white font-medium">
                                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Gallery</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            </ul>
                        </nav>

                        {/* Right Actions */}
                        <div className="flex items-center gap-8">
                            <div className="h-6 w-px bg-gray-600"></div>

                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-gray-700/50 rounded-full text-gray-300">
                                    <Phone size={20} />
                                </div>
                                <div className="text-sm">
                                    <div className="text-gray-400 text-xs">Emergency</div>
                                    <div className="text-white font-bold">+971 02- 4417357</div>
                                </div>
                            </div>

                            <button className="bg-primary hover:bg-primary text-white px-6 py-3  font-medium transition-colors flex items-center gap-2">
                                Enquire Now <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header2;
