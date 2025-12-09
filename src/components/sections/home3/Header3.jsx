import { useState } from 'react';
import { Menu, X, Phone, MapPin, ChevronDown } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { GlobalLogo } from '../../../assets';

const Header3 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="w-full font-sans   bg-[#0B1E40]">


            {/* Main Navigation */}
            <nav className="w-full bg-white px-4 md:px-8 shadow-sm relative z-50">
                <div className="md:w-11/12 mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src={GlobalLogo} className='w-52' alt="" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#" className="text-gray-600 hover:text-primary font-medium">Home</a>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium">About Us</a>
                        <div className="relative group">
                            <button className="flex items-center gap-1 text-gray-600 hover:text-primary font-medium bg-transparent border-none cursor-pointer">
                                Services
                            </button>
                            {/* Dropdown would go here */}
                        </div>
                        <a href="#" className="text-gray-600 hover:text-primary font-medium">Contact Us</a>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-4">
                        <button className="hidden md:block bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                            Get a Quote
                        </button>
                        <button
                            className="md:hidden text-slate-800 hover:text-primary transition-colors"
                            onClick={toggleMenu}
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-4 flex flex-col gap-4">
                        <a href="#" className="text-slate-800 hover:text-primary font-medium py-2 border-b border-gray-50">Home</a>
                        <a href="#" className="text-slate-800 hover:text-primary font-medium py-2 border-b border-gray-50">About Us</a>
                        <button className="flex items-center justify-between text-slate-800 hover:text-primary font-medium py-2 border-b border-gray-50 bg-transparent border-none w-full text-left">
                            Services <ChevronDown size={14} />
                        </button>
                        <button className="flex items-center justify-between text-slate-800 hover:text-primary font-medium py-2 border-b border-gray-50 bg-transparent border-none w-full text-left">
                            Pages <ChevronDown size={14} />
                        </button>
                        <a href="#" className="text-slate-800 hover:text-primary font-medium py-2 border-b border-gray-50">Contact Us</a>
                        <div className="pt-2">
                            <button className="w-full bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-full font-medium transition-colors">
                                Get a Quote
                            </button>
                        </div>
                        {/* Mobile Top Bar Info */}
                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 text-sm text-gray-500">
                            <div className="flex items-center gap-2">
                                <Phone size={14} />
                                <span>(+62) 8912 3456 7890</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin size={14} />
                                <span>1234 Wellness Avenue, Suite 567</span>
                            </div>
                            <div className="flex gap-4 mt-2 text-lg">
                                <FaFacebookF /> <FaInstagram /> <FaTwitter /> <FaTiktok />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header3;
