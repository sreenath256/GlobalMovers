import React from 'react';
import HeroButton from '../components/ui/HeroButton';

const NotFound = () => {
    return (

        <>
        <title>404 Not Found</title>
        <meta name="description" content="404 Not Found" />
            <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans overflow-hidden text-gray-800">

                {/* Inline style for the custom keyframe animations. */}
                <style>
                    {`
          @keyframes drive {
            0% { left: -150px; }
            100% { left: 100%; }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-2px); }
          }
          .animate-drive {
            position: absolute;
            bottom: 4px;
            /* Animation set to infinite so it loops perfectly across the container */
            animation: drive 6s linear infinite;
          }
          .animate-bounce-truck {
            /* Simulates the bumpy movement of a heavy truck */
            animation: bounce 0.4s infinite;
          }
        `}
                </style>

                <div className="text-center max-w-2xl px-6 w-full relative z-10">
                    {/* 404 Header */}
                    <h1 className="text-[8rem] md:text-[10rem] font-bold text-[#18609e] leading-none">
                        404
                    </h1>

                    <p className="text-gray-500 mb-10 text-lg">
                        The page you are looking for doesn't exist. It may have been moved or removed altogether. Please try searching for some other page, or return to the website's homepage to find what you're looking for.
                    </p>

                    {/* Animated Truck & Road */}
                    <div className="relative w-full h-28 mb-10 border-b-4 border-dashed border-gray-300 overflow-hidden">
                        <div className="animate-drive">
                            <div className="animate-bounce-truck">
                                {/* Upgraded High-Quality Truck SVG */}
                                <svg width="150" height="80" viewBox="0 0 150 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* Truck Box/Trailer */}
                                    <rect x="5" y="15" width="85" height="45" rx="3" fill="#18609e" />
                                    {/* Side Panel Lines on Box */}
                                    <line x1="25" y1="15" x2="25" y2="60" stroke="#124a7a" strokeWidth="2" />
                                    <line x1="45" y1="15" x2="45" y2="60" stroke="#124a7a" strokeWidth="2" />
                                    <line x1="65" y1="15" x2="65" y2="60" stroke="#124a7a" strokeWidth="2" />

                                    {/* Truck Cab */}
                                    <path d="M90 30h15l15 15v15H90V30z" fill="#18609e" />

                                    {/* Window */}
                                    <path d="M95 35h10l8 8v3H95v-11z" fill="#e2e8f0" />

                                    {/* Chassis / Bottom Bumper */}
                                    <rect x="3" y="58" width="120" height="6" rx="2" fill="#64748b" />

                                    {/* Headlight */}
                                    <rect x="117" y="48" width="5" height="6" rx="1" fill="#fbbf24" />

                                    {/* Taillight */}
                                    <rect x="3" y="45" width="4" height="8" rx="1" fill="#ef4444" />

                                    {/* Back Wheel */}
                                    <circle cx="28" cy="65" r="10" fill="#1e293b" />
                                    <circle cx="28" cy="65" r="5" fill="#cbd5e1" />

                                    {/* Front Wheel */}
                                    <circle cx="100" cy="65" r="10" fill="#1e293b" />
                                    <circle cx="100" cy="65" r="5" fill="#cbd5e1" />

                                    {/* Exhaust/Motion Lines */}
                                    <line x1="125" y1="52" x2="140" y2="52" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                                    <line x1="130" y1="42" x2="145" y2="42" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <HeroButton name="Home Page" to="/" />
                </div>
            </div>
        </>
    );
};

export default NotFound;