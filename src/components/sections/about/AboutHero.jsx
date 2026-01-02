import { Image7 } from "../../../assets";

const AboutHero = () => {
    return (
        <div className="relative w-full h-[50vh] bg-black flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-40"
                style={{ backgroundImage: `url(${Image7})` }}
            ></div>
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Content */}
            <div className="relative z-10 text-center text-white mt-16">
                <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">About Us</h1>
                <div className="flex items-center justify-center gap-2 text-sm md:text-base text-gray-300 font-medium">
                    <span>Home</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    <span className="text-white">About Us</span>
                </div>
            </div>
        </div>
    );
};

export default AboutHero;
