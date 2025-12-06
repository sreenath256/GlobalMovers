import { BannerImage } from "../../../assets";
import Button from "../../ui/Button";

const Hero = () => {
  return (
    <div className="p-5">
      <div
        className="
          w-full h-[85vh] md:h-screen relative overflow-hidden
          bg-cover bg-bottom bg-no-repeat rounded-3xl
        "
        style={{ backgroundImage: `url(${BannerImage})` }}
      >
        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-3xl"></div>

        {/* MOBILE CONTENT WRAPPER */}
        <div className="absolute inset-0 flex flex-col md:block justify-end p-6 md:p-0">

          {/* Left Heading */}
          <div
            className="
              text-white z-20 
              md:absolute md:bottom-10 md:left-10
              text-center md:text-left
              mb-6 md:mb-0
            "
          >
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Best Movers and Packers <br className="hidden md:block" />
              in Abu Dhabi
            </h1>
          </div>

          {/* Right Block */}
          <div
            className="
              text-white/80 z-20 
              md:absolute md:bottom-10 md:right-10
              max-w-sm
              text-center md:text-left
              flex flex-col items-center md:items-start
              gap-3
            "
          >
            <p className="text-base leading-relaxed">
              15+ years’ experience in providing seamless, secure relocations
              throughout Abu Dhabi and the UAE
            </p>

            <Button name="Start Shipping" to="/shipping" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
