import React, { useState } from "react";
import { Image2 } from "../../assets";

const tabs = [
  { title: "100% Safe and Secure", img: Image2 },
  { title: "24/7 Services", img: Image2 },
  { title: "Professional Packing", img: Image2 },
  { title: "Safe Handling", img: Image2 },
  { title: "Experienced Team", img: Image2 },
  { title: "Transparent Pricing", img: Image2 },
];

const BestMoversAndPackers = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full px-6 lg:px-28 relative overflow-hidden">

      {/* TOP TEXT */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <h2 className="text-5xl md:text-6xl font-medium leading-tight">
          Best Movers and Packers Matters Most
        </h2>

        <div className="flex justify-end">
          <p className="text-gray-700 text-lg leading-relaxed max-w-md">
            Global Icon Movers is a leading name among the best movers and packers in Abu Dhabi, delivering safe, secure, and on-time relocation services by an expert team.
          </p>
        </div>
      </div>

      {/* GRID TABS — desktop 2 columns, mobile 1 column */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative overflow-visible">
        {tabs.map((item, index) => {
          const isActive = active === index;

          return (
            <div
              key={index}
              onMouseEnter={() => window.innerWidth > 768 && setActive(index)}
              onMouseLeave={() => window.innerWidth > 768 && setActive(null)}
              onClick={() => window.innerWidth < 768 && setActive(isActive ? null : index)}
              className={`
                relative w-full p-8 rounded-3xl cursor-pointer 
                border transition-all duration-300 overflow-visible
                ${isActive ? "bg-blue-600 text-white border-blue-600 shadow-lg" : "bg-white text-gray-800 border-gray-300"}
              `}
            >
              {/* TEXT + ARROW */}
              <div className="flex items-center justify-between">
                <h3 className={`text-3xl font-semibold ${isActive ? "text-white" : "text-gray-700"}`}>
                  {item.title}
                </h3>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  className={`
                    w-7 h-7 transition-transform duration-300
                    ${isActive ? "stroke-white rotate-45" : "stroke-gray-700 rotate-0"}
                  `}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14m-6-6l6 6m-6 6l6-6"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestMoversAndPackers;
