import { Image7 } from "../../../assets";

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Image7})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen px-6 py-20 sm:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Heading */}
            <div>
              <p className="text-white text-sm font-semibold tracking-wider uppercase mb-4">
                TRUSTED EXPERTS
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-8">
                Best Movers and Packers in Abu Dhabi
              </h1>
            </div>

            {/* Right Column - Description and CTAs */}
            <div className="lg:pl-8">
              <p className="text-white/90 text-lg sm:text-xl mb-8 leading-relaxed">
Global Icon Movers has been a trusted name in relocation and storage across the UAE since 2008. As one of the best movers and packers in Abu Dhabi, we deliver reliable, professional moving services for homes and businesses, ensuring every relocation is smooth, secure, and stress-free.              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Get A Quote
                </button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-semibold px-8 py-4 rounded-full transition-all duration-300">
                  Explore Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}