import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { HandymanImage, PackingImage, StorageImage, StorageUnitImage } from '../../../assets';

// Custom Previous Arrow Component
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 bg-gray-900/50 hover:bg-primary text-white rounded-full p-3 transition-all duration-300"
      aria-label="Previous Slide"
    >
      <FiChevronLeft size={24} />
    </button>
  );
};

// Custom Next Arrow Component
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 bg-gray-900/50 hover:bg-primary text-white rounded-full p-3 transition-all duration-300"
      aria-label="Next Slide"
    >
      <FiChevronRight size={24} />
    </button>
  );
};

export default function ServicesSection() {
  const services = [
    {
      title: "OFFICE RELOCATION",
      description: "Seamless business transitions with minimal downtime. We handle IT infrastructure, furniture, and files with precision so you can get back to work faster.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "HOUSE RELOCATION",
      description: "Moving your home is personal. Our dedicated team ensures every item, from fragile heirlooms to heavy furniture, is packed and transported with care.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "UNIQUE RELOCATION",
      description: "Specialized handling for fine art, pianos, antiques, and pets. We provide custom crating and climate-controlled transport for your most precious assets.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "SHORT-TERM STORAGE",
      description: "Flexible storage solutions for those in-between moments. Perfect for home renovations or temporary travel, with 24/7 security monitoring.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "LONG-TERM STORAGE",
      description: "Secure, climate-controlled warehousing for extended periods. Keep your belongings safe from dust, pests, and heat for as long as you need.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "COMMERCIAL SPACE",
      description: "Logistics support and warehousing for commercial inventory. scalable solutions to help manage your stock and distribution effectively.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "HANDYMAN SERVICES",
      description: "Expert assistance for mounting TVs, hanging curtains, painting, and minor repairs. We help turn your new house into a home instantly.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "FURNITURE INSTALLATION",
      description: "Professional assembly and disassembly of all furniture types. From flat-pack IKEA items to complex modular office systems.",
      image: StorageUnitImage,
      link: "Learn more"
    },
    {
      title: "PACKING MATERIALS",
      description: "High-quality boxes, bubble wrap, and protective covers. We supply the same professional-grade materials our experts use to keep your goods safe.",
      image: StorageUnitImage,
      link: "Learn more"
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    autoplay: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20 overflow-hidden">
      <div className="w-11/12 mx-auto relative">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Global Icon Packers & Movers Provides
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed md:max-w-3xl mx-auto">
            Global Icon Movers makes every move in the UAE smooth and stress-free, with a dedicated team providing trusted relocation services and top-quality care.
          </p>
        </div>

        {/* Carousel */}
        <div className="px-4">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-3 py-6 h-full ">
                <div className="group relative  aspect-square w-full overflow-hidden shadow-lg rounded-lg ">

                  {/* Background Image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${service.image})` }}
                  />

                  {/* Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                  {/* Card Content Wrapper */}
                  <div className="relative z-10 flex flex-col h-full justify-end p-8 text-white">

                    {/* Text Container: Moves UP on hover */}
                    {/* 'translate-y-0' is default, 'group-hover:-translate-y-16' moves it up approx 64px */}
                    <div className="transform transition-transform duration-500 group-hover:-translate-y-14">
                      <h3 className="text-2xl font-bold uppercase mb-4 tracking-wide leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-gray-200 text-sm leading-relaxed opacity-90 line-clamp-4">
                        {service.description}
                      </p>
                    </div>

                    {/* Button Container: Pops UP from bottom */}
                    {/* Absolute positioning places it at the bottom. 
                        Start: opacity-0 and pushed down (translate-y-8).
                        Hover: opacity-100 and moves to normal position (translate-y-0). */}
                    <div className="absolute bottom-8 left-8 right-8 opacity-0 translate-y-8 transform transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      <a
                        href="#"
                        className="flex items-center justify-center w-full py-3 px-2 border border-white/40 text-sm font-medium text-white hover:bg-white hover:text-gray-900 transition-colors duration-300 text-center"
                      >
                        {service.link}
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Global CTA */}
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}