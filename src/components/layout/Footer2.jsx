import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Truck } from 'lucide-react';
import { GlobalLogo } from '../../assets';

const Footer2 = () => {
    return (
        <footer className="bg-[#1C1F2E] text-white overflow-hidden relative border-t border-white/5">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-8">
                            {/* Use logo if available, else text */}
                            <img src={GlobalLogo} alt="Logisk" className="h-10 w-auto" />
                        </div>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            Logisk is a representative logistics operator providing full range of service in the sphere of customs clearance and transportation worldwide.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#2C3040] flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#2C3040] flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#2C3040] flex items-center justify-center hover:bg-blue-600 transition-colors">
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Latest News */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Latest News
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600 top-8"></span>
                        </h4>
                        <div className="flex flex-col gap-6">
                            <div className="group cursor-pointer">
                                <span className="text-blue-500 text-sm font-semibold mb-1 block">Jan 02, 2024</span>
                                <h5 className="font-bold hover:text-blue-500 transition-colors leading-snug">
                                    Logistics Solutions That Deliver Excellence
                                </h5>
                            </div>
                            <div className="border-b border-gray-800"></div>
                            <div className="group cursor-pointer">
                                <span className="text-blue-500 text-sm font-semibold mb-1 block">Dec 28, 2023</span>
                                <h5 className="font-bold hover:text-blue-500 transition-colors leading-snug">
                                    Transport Solutions That Deliver Excellence
                                </h5>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Useful Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Useful Links
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600 top-8"></span>
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {['About Us', 'Company', 'Services', 'Our Team', 'Blog', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-white hover:translate-x-1 transition-all flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Header Office */}
                    <div>
                        <h4 className="text-xl font-bold mb-8 relative inline-block">
                            Header Office
                            <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-600 top-8"></span>
                        </h4>
                        <ul className="flex flex-col gap-6">
                            <li className="flex gap-4">
                                <div className="mt-1 text-blue-500">
                                    <MapPin size={20} />
                                </div>
                                <span className="text-gray-400">
                                    1901 Thornridge Cir. Shiloh, Hawaii 81063
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 text-blue-500">
                                    <Phone size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-400">+56 (201) 555-0124</span>
                                    <span className="text-gray-400">+56 (201) 555-0124</span>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="mt-1 text-blue-500">
                                    <Mail size={20} />
                                </div>
                                <span className="text-gray-400">logisk_support@Custom.com</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 relative z-10 bg-[#151722]">
                <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 Logisk - Logistics & Transportation. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Term & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;
