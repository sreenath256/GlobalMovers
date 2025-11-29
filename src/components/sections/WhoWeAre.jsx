import React, { useEffect, useRef, useState } from "react";
import { Image3 } from "../../assets";

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    let observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const increment = end / (duration / 16);

          const step = () => {
            start += increment;
            if (start < end) {
              setCount(Math.floor(start));
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };

          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) observer.observe(counterRef.current);

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={counterRef}>{count.toLocaleString()}</span>;
};

const WhoWeAre = () => {
  return (
    <div className="w-full bg-white px-4 sm:px-6 lg:px-28 overflow-hidden py-10">
      
      {/* TOP SECTION */}
      <div className="
        grid grid-cols-1 md:grid-cols-5 
        gap-6 md:gap-10 items-center
      ">
        {/* IMAGE */}
        <div className="w-full h-56 sm:h-64 md:h-80 rounded-2xl col-span-2 overflow-hidden">
          <img
            src={Image3}
            alt="who we are"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* TEXT */}
        <div className="col-span-3">
          <p className="
            text-2xl sm:text-3xl md:text-5xl 
            font-normal text-black 
            leading-snug md:leading-[60px]
          ">
            Global Icon Movers is a top-rated choice among the best movers and
            packers in Abu Dhabi, trusted for safe, efficient relocations and
            secure storage across the UAE.
          </p>
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="
        grid grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-7 
        gap-8 md:gap-10 
        mt-14 sm:mt-16
        text-center md:text-left
        items-center
      ">
        {/* Item 1 */}
        <div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-primary">
            <Counter end={10000} />+
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mt-2">
            Projects Done
          </p>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-px h-16 bg-gray-300"></div>
        </div>

        {/* Item 2 */}
        <div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-primary">
            <Counter end={10000} />+
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mt-2">
            Happy Clients
          </p>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-px h-16 bg-gray-300"></div>
        </div>

        {/* Item 3 */}
        <div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-primary">
            <Counter end={15} />+
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mt-2">
            Years Business
          </p>
        </div>

        <div className="hidden md:flex justify-center">
          <div className="w-px h-16 bg-gray-300"></div>
        </div>

        {/* Item 4 */}
        <div>
          <h3 className="text-4xl sm:text-5xl md:text-7xl font-semibold text-primary">
            <Counter end={80000} />+
          </h3>
          <p className="text-gray-500 text-base sm:text-lg mt-2">
            Sq. ft. Storage
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
