import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What Payment Methods Are Available ?",
      answer: "Cash, cheque, bank transfer, and other convenient options are provided by Global Icon, the best movers and packers in Abu Dhabi, to make your payment process smooth and hassle-free."
    },
    {
      question: "What Nationalities Are Global Icon Movers And Packers In Abu Dhabi Laborers From?",
      answer: "Our workforce is diverse, with 70% of our team members coming from India, and the rest from various Asian countries. As one of the best movers and packers in Abu Dhabi, we value professionalism, skill, and cultural diversity in our team."
    },
    {
      question: "Does Global Icon Packers & Movers offer relocation and storage services in Abu Dhabi?",
      answer: "Yes, Global Icon Packers & Movers offers relocation and storage services in Abu Dhabi. They are recognized as one of the best movers and packers in Abu Dhabi, providing comprehensive solutions for home, villa, and office moves, as well as secure short-term and long-term storage options. Their services include professional packing, safe transportation, flexible storage, and expert handling for a seamless moving experience."
    },
    {
      question: "How do Global Icon Movers pack the fragile items?",
      answer: "For fragile items, we will provide the required packing material, especially bubble paper as a Best Movers and Packers in Abu dhabi."
    },
    // {
    //   question: "How is your packing process for refrigerator items at Global Icon Movers and Packers in Abu Dhabi?",
    //   answer: "We use cooler boxes for temperature-sensitive items during the move."
    // },
    // {
    //   question: "During the move or relocation if anything breaks, how does Global Icon Movers treat it?",
    //   answer: "If anything breaks during the move, Global Icon, as one of the best movers and packers in Abu Dhabi, UAE, will either repair or replace the damaged item to ensure customer satisfaction and trust."
    // },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-white py-20 w-11/12 mx-auto">
      <div className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-4xl md:text-6xl font-medium uppercase leading-tight mb-10">
              Any questions?<br />We got you.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Yet bed any for assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
            </p>
            <button className="w-fit bg-primary hover:bg-primaryHover text-white font-medium py-3 px-5 rounded-full uppercase tracking-wide transition-colors mt-2">
              Contact Us
            </button>
          </div>

          {/* Right Column - FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 ">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between py-6 text-left transition-all duration-300"
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