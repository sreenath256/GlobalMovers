import { useRef, useState, useEffect } from 'react';
import { GlobalLogo } from '../../../assets';
import { useLocation } from 'react-router-dom';

const Header4 = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const bgClass = isHome ? 'bg-white/10' : 'bg-white/70';

    return (
        <header className={`absolute top-0 left-0 right-0 z-50 w-11/12 mx-auto ${bgClass} backdrop-blur-lg border border-white/20 mt-6 rounded-full px-6 transition-colors duration-300`}>
            <div className="flex items-center justify-between">
                <div>
                    <img className='w-44' src={GlobalLogo} alt="" />
                </div>
                <div>
                    <ul className='flex gap-6 text-black text-lg font-medium'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <a className='bg-primary text-white px-6 py-3 rounded-full uppercase' href="tel:+971024417357">+971 024417357</a>
                </div>
            </div>



        </header>
    );
};

export default Header4;
