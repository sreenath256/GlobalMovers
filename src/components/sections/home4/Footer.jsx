import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Youtube, MapPin } from 'lucide-react';
import { GlobalLogo } from '../../../assets';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-white text-black pt-20 pb-10 font-poppins">
            <div className="w-11/12 mx-auto">

                {/* Top Row - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 ">


                    <div>
                        <img src={GlobalLogo} alt="Global Movers Logo" className="h-16 md:h-20 w-auto" />
                        <p className="text-gray-400 text-sm">Global Icon Packers & Movers is one of UAE’s premier relocation and storage service providers. In 2008 Global Icon Packers & Movers was established with the vision of delivering high-standard relocation and storage services throughout United Arab Emirates.</p>
                    </div>

                    {/* Menu Column */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-xl font-normal uppercase">Menu</h3>
                        <ul className="space-y-4 text-base text-gray-400">
                            <li><a href="#" className="hover:text-black transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Gallery</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
                        </ul>
                    </div>


                    {/* Contact Column */}
                    <div className="flex flex-col gap-8">
                        <h3 className="text-xl font-normal uppercase">Contact</h3>
                        <div className="space-y-4 text-base text-gray-400">
                            <p>Al-Sireef Street, Compound: 22,<br />Musaffah-M20, Abu Dhabi, UAE</p>
                            <p>+971 02-4417357<br />+971 509-393-081</p>
                            <p>info@globaliconmoversae.com</p>
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
                        <a href="https://x.com/movers_icon" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff2d0d] transition-colors"><FaXTwitter  className="w-6 h-6 fill-black" strokeWidth={0} /></a>
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
