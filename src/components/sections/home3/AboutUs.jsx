import { Image9 } from "../../../assets";

export default function AboutUs() {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-20">
      <div className="w-11/12 mx-auto">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-10">
          {/* Left Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800"
                alt="Moving team"
                className="w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=800"
                alt="Mover with boxes"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="">
              <img
                src={Image9}
                alt="Professional mover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              ABOUT US
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              Your trusted partner for stress-free moving
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Global Icon Movers is a top-rated choice among the best movers and packers in Abu Dhabi, trusted for safe, efficient relocations and secure storage across the UAE. Every move is unique, so our experienced team tailors moving solutions to fit your needs – from careful packing and safe transport to flexible, secure storage options for homes, villas, and offices.             </p>

            <button className="bg-primary hover:bg-primary/80 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300">
              More About Us
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-gray-200">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-7xl font-semibold text-gray-900 mb-2">
              10K<span className="text-primary">+</span>
            </div>
            <p className="text-gray-500 uppercase text-sm tracking-wider">
              Projects Done
            </p>
          </div>

          {/* Stat 2 */}
          <div className="text-center">
            <div className="text-7xl font-semibold text-gray-900 mb-2">
              10K<span className="text-primary">+</span>
            </div>
            <p className="text-gray-500 uppercase text-sm tracking-wider">
              Happy Clients
            </p>
          </div>

          {/* Stat 3 */}
          <div className="text-center">
            <div className="text-7xl font-semibold text-gray-900 mb-2">
              15K<span className="text-primary">+</span>
            </div>
            <p className="text-gray-500 uppercase text-sm tracking-wider">
              Years Business
            </p>
          </div>

          {/* Stat 4 */}
          <div className="text-center">
            <div className="text-7xl font-semibold text-gray-900 mb-2">
              80,000<span className="text-primary">+</span>
            </div>
            <p className="text-gray-500 uppercase text-sm tracking-wider">
              Sq. ft. Storage
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}