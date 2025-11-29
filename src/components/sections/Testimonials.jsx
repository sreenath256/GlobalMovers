import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Image2 } from "../../assets";

const reviews = [
  {
    id: 1,
    name: "John Samuel",
    time: "1 week ago",
    text: "Last week I made a move. The team was very professional, fast, and well organised...",
    stars: 5,
    img: Image2,
  },
  {
    id: 2,
    name: "Ahmed Batman",
    time: "1 week ago",
    text: "The whole process was smooth. The contact person was very cooperative...",
    stars: 5,
    img: Image2,
  },
  {
    id: 3,
    name: "Dr. Samina Ashiq",
    time: "2 weeks ago",
    text: "They are just amazing — the best movers and packers in Abu Dhabi...",
    stars: 5,
    img: Image2,
  },
  {
    id: 4,
    name: "Soundra Pandian",
    time: "3 weeks ago",
    text: "I used Global Icon Movers for the first time... very professional...",
    stars: 5,
    img: Image2,
  },
  {
    id: 5,
    name: "Sriram Sekar",
    time: "3 weeks ago",
    text: "Excellent and very professional service. The team was skilled...",
    stars: 5,
    img: Image2,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3); // desktop default

  // 📌 Make it responsive without affecting desktop view
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth >= 1024) setVisibleCards(3); // desktop
      else if (window.innerWidth >= 768) setVisibleCards(2); // tablet
      else setVisibleCards(1); // mobile
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const maxIndex = reviews.length - visibleCards;

  const next = () => setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const prev = () => setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <div className="w-full px-6 lg:px-28 relative overflow-hidden">

      {/* TOP Section */}
      <div className="flex flex-col gap-10 mb-16">
        <h2 className="text-5xl md:text-6xl font-medium text-center text-black leading-tight">
          Reviews of Global Icon Movers <br /> and Packers in Abu Dhabi
        </h2>

        <p className="text-black text-lg leading-relaxed text-center md:max-w-4xl mx-auto">
          Built on a foundation of excellence, every move is designed to help
          clients succeed.
        </p>
      </div>

      {/* MAIN ROW */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

        {/* LEFT PANEL */}
        <div className="flex flex-col gap-6">
          <div className="text-gray-400 text-7xl">“</div>
          <p className="text-3xl font-medium text-gray-900 leading-snug">
            What our customers are saying
          </p>

          {/* Slider Controls */}
          <div className="flex items-center gap-5 mt-4">
            <button
              onClick={prev}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
            >
              <ChevronLeft />
            </button>

            {/* Progress Bar */}
            <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-300"
                style={{
                  width: `${((index + 1) / (reviews.length - visibleCards + 1)) * 100}%`,
                }}
              ></div>
            </div>

            <button
              onClick={next}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        {/* SLIDER — MULTI CARDS RESPONSIVE */}
        <div className="md:col-span-2 overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-500"
            style={{
              transform: `translateX(-${index * (100 / visibleCards)}%)`,
              width: `${(reviews.length * 100) / visibleCards}%`,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.id}
                className="bg-white min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] p-10 rounded-3xl border-[1px] border-primary flex flex-col justify-between"
              >
                <p className="text-gray-700 leading-relaxed mb-6">{r.text}</p>

                <div>
                  {/* Stars */}
                  <div className="flex gap-1 text-green-500 mb-6">
                    {[...Array(r.stars)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={r.img}
                      alt={r.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-lg font-semibold">{r.name}</p>
                      <p className="text-gray-500 text-sm">{r.time}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Testimonials;
