import { useState } from 'react';
import { GlobalLogo } from '../../assets';
import { useLocation, NavLink } from 'react-router-dom';
import { Phone, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const isHome = location.pathname === '/';
    const bgClass = isHome ? 'bg-white/10' : 'bg-white/70';

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/storage-solutions-in-abu-dhabi', label: 'About' },
        {
            path: '/services',
            label: 'Services',
            subLinks: [
                { path: '/services/office-movers-in-abu-dhabi', label: 'Office Relocation' },
                { path: '/services/house-movers-in-abu-dhabi', label: 'House Relocation' },
                { path: '/services/furniture-handyman', label: 'Furniture & Handyman' },
                { path: '/services/corporate-services', label: 'Corporate Services' },
                { path: '/services/short-term-storage-solutions-in-abu-dhabi', label: 'Short Term Storage' },
                { path: '/services/long-term-storage-solutions-in-abu-dhabi', label: 'Long Term Storage' },
                { path: '/services/commercial-space', label: 'Commercial Space' }
            ]
        },
        { path: '/gallery', label: 'Gallery' },
        { path: '/blog', label: 'Blog' },
        { path: '/contact-us', label: 'Contact' },
    ];

    return (
        <header className={`absolute top-0 left-0 right-0 z-50 w-11/12 mx-auto ${bgClass} backdrop-blur-lg border border-white/20 mt-6 rounded-full px-6 transition-colors duration-300`}>
            <div className="flex items-center justify-between py-2 lg:py-0">
                <div>
                    <img className='w-32 lg:w-44' src={GlobalLogo} alt="Global Movers Logo" />
                </div>

                {/* Desktop Navigation */}
                <div className='hidden lg:block'>
                    <ul className='flex gap-6 text-black text-lg font-medium'>
                        {navLinks.map((link) => (
                            <li
                                key={link.path}
                                className="relative group"
                                onMouseEnter={() => setActiveDropdown(link.label)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <NavLink
                                    to={link.path}
                                    end={link.path === '/'}
                                    className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors duration-300'}
                                    onClick={() => setActiveDropdown(null)}
                                >
                                    {link.label}
                                </NavLink>
                                {link.subLinks && (
                                    <div className={`absolute top-full left-0 w-64 bg-white/90 backdrop-blur-md rounded-xl shadow-xl flex flex-col gap-2 p-4 transition-all duration-300 transform text-base ${activeDropdown === link.label ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-2'}`}>
                                        {link.subLinks.map((subLink) => (
                                            <NavLink
                                                key={subLink.path}
                                                to={subLink.path}
                                                className="hover:text-primary transition-colors duration-200 block p-2 rounded-lg hover:bg-gray-50"
                                                onClick={() => setActiveDropdown(null)}
                                            >
                                                {subLink.label}
                                            </NavLink>
                                        ))}
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Contact Button */}
                <div className="hidden lg:block">
                    <a href="tel:+971509393081" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <Phone className="w-5 h-5 fill-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs font-bold uppercase text-gray-800 tracking-wider group-hover:text-primary transition-colors">Call us now</span>
                            <span className="font-bold text-primary group-hover:text-primary/80 transition-colors">+971 509-393-081</span>
                        </div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-black focus:outline-none">
                        {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 mt-4 bg-white rounded-2xl shadow-xl p-6 lg:hidden flex flex-col gap-4 z-50 border border-gray-100"
                    >
                        <ul className='flex flex-col gap-4 text-black text-lg font-medium text-center'>
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <NavLink
                                        to={link.path}
                                        end={link.path === '/'}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={({ isActive }) => isActive ? 'text-primary' : 'hover:text-primary transition-colors duration-300'}
                                    >
                                        {link.label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <div className="flex justify-center mt-4">
                            <a href="tel:+971509393081" className="flex items-center gap-3 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors">
                                <Phone className="w-5 h-5 fill-white" />
                                <span className="font-bold">Call Now</span>
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
