import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function FAQ({ title, description, faqs, buttonShow = true }) {
  const [openIndex, setOpenIndex] = useState(0);



  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="  py-8 md:py-12  w-11/12 mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight mb-4 md:mb-10">
              {title}
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-8">
              {description}
            </p>
            {
              buttonShow && (
                <Link to="/services" className="w-fit bg-primary hover:bg-primaryHover text-white font-medium py-3 px-5 rounded-full uppercase tracking-wide transition-colors mt-2">
                  Know More
                </Link>
              )
            }
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 ">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-3 md:py-6 text-left transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                    }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}