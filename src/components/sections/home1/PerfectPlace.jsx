import {
    LuShieldCheck,
    LuCalendarRange,
    LuLock,
    LuDollarSign,
    LuCctv,
    LuSnowflake,
    LuBuilding2,
    LuSparkles
} from "react-icons/lu";


const PerfectPlace = () => {
    const featurePoints = [
        { title: "24 Hours Security", icon: <LuShieldCheck className="w-10 h-10" /> },
        { title: "Flexible Tenure", icon: <LuCalendarRange className="w-10 h-10" /> },
        { title: "Lockable Unit", icon: <LuLock className="w-10 h-10" /> },
        { title: "Affordable Price", icon: <LuDollarSign className="w-10 h-10" /> },
        { title: "CCTV Surveillance", icon: <LuCctv className="w-10 h-10" /> },
        { title: "Fully Airconed Zone", icon: <LuSnowflake className="w-10 h-10" /> },
        { title: "Ultra-Modern Facility", icon: <LuBuilding2 className="w-10 h-10" /> },
        { title: "Dust & Pest Free", icon: <LuSparkles className="w-10 h-10" /> },
    ];

    return (
        <div className="w-full px-6 lg:px-28 relative overflow-hidden">

            {/* Heading */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                <h2 className="text-5xl md:text-6xl font-medium text-black leading-tight">
                    A Perfect Place
                    for Your Memories
                </h2>

                <div className="flex justify-end">
                    <p className="text-black text-lg leading-relaxed max-w-md">
                        A one-stop solution for secure storage and safekeeping, with service 
                        quality trusted by countless clients and recognized among the best 
                        movers and packers in Abu Dhabi.
                    </p>
                </div>
            </div>

            {/* MARQUEE */}
            <div className="marquee-container py-10">
                <div className="marquee-content">
                    {[...featurePoints, ...featurePoints].map((item, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center text-center gap-3 min-w-[200px]"
                        >
                            <div className="text-primary">{item.icon}</div>
                            <p className="text-black text-lg whitespace-nowrap">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default PerfectPlace;
