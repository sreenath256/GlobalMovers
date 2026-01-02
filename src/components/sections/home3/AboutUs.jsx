import { Image9 } from "../../../assets";

export default function AboutUs() {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="w-11/12 mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-10">
          {/* Left Column - Images */}
            
            <div className="">
              <img
                src={Image9}
                alt="Professional mover"
                className="w-full h-full object-cover"
              />
            </div>
         
          {/* Right Column - Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Your Trusted Partner for Stress-Free Moving
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Global Icon Movers is a top-rated choice among the best movers and packers in Abu Dhabi, trusted for safe, efficient relocations and secure storage across the UAE. Every move is unique, so our experienced team tailors moving solutions to fit your needs – from careful packing and safe transport to flexible, secure storage options for homes, villas, and offices.             </p>

            <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              More About Us
            </button>
          </div>
        </div>

        
      </div>
    </div>
  );
}