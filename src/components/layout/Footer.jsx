import React from "react";
import { FaInstagram, FaFacebookF, FaXTwitter, FaGoogle } from "react-icons/fa6";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { GlobalLogo, GlobalLogo2 } from "../../assets";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1c1f2e] pt-10">
      <div className="
        px-6 lg:px-28
        grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-10 md:gap-14
      ">

        {/* LOGO + TEXT */}
        <div className="space-y-4 pb-5">
          <img src={GlobalLogo2} alt="logo" className="h-16 md:h-20" />

          <p className="text-gray-300 text-sm md:text-base leading-snug max-w-xs">
            Global Icon Packers & Movers is one of UAE’s premier relocation and
            storage service providers. Established in 2008 with the vision to
            deliver high-standard relocation and storage services across the UAE.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex items-center gap-4 mt-6">
            {[FaInstagram, FaFacebookF, FaXTwitter, FaGoogle].map((Icon, i) => (
              <div
                key={i}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-300 flex items-center justify-center"
              >
                <Icon className="text-lg md:text-xl text-black" />
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT - MOVERS */}
        <div className="space-y-4 pb-5">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
            Contact Us 
          </h3>

          <ul className="space-y-4 text-gray-300 text-base md:text-lg">

            <li className="flex items-start gap-3">
              <FaPhoneAlt className="text-primary mt-1" />
              <div>
                <p>+971 02- 4417357</p>
                <p>+971 509-393-081</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaEnvelope className="text-primary mt-1" />
              <p>info@globaliconmoversae.com</p>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <p>
                Al-Sireef Street, Compound 22, <br />
                Musaffah-M20, Abu Dhabi, UAE
              </p>
            </li>

          </ul>
        </div>

       

        {/* QUICK LINKS */}
        <div className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-gray-300">
            Quick Links
          </h3>

          <ul className="space-y-3 text-gray-300 text-base md:text-lg">
            <li>Home</li>
            <li>About</li>
            <li>Our Services</li>
            <li>Blog</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="
        border-t py-6 px-6 lg:px-28 
        flex flex-col md:flex-row 
        justify-center text-center 
        text-gray-300 text-sm md:text-lg
      ">
        <p>
          Copyright © {new Date().getFullYear()}
          {" "}Global Icon Movers. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
