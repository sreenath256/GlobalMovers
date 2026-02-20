
import { Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10 } from '../../../assets';

const Clients = () => {

    const clients = [Client1, Client2, Client3, Client4, Client5, Client6, Client7, Client8, Client9, Client10];


    return (

        <div className="w-full pt-16 md:pt-24 border-t border-gray-200 overflow-hidden relative">
            <style>
                {`
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                        .animate-marquee {
                            animation: marquee 30s linear infinite;
                        }
                        .animate-marquee:hover {
                            animation-play-state: paused;
                        }
                    `}
            </style>

            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full z-10 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-32 h-full z-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

            <div className="flex w-max animate-marquee">
                {[...clients, ...clients].map((logo, index) => (
                    <div key={index} className="mx-8 h-20 flex items-center justify-center transition-all duration-300">
                        <img src={logo} alt={`Client ${index}`} className="max-w-full max-h-full object-contain" />
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Clients