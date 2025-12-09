import { BsThreeDots } from "react-icons/bs";
import { LuBox } from "react-icons/lu";
import { MdOutlineShareLocation } from "react-icons/md";

export default function ServicesSection() {
  const services = [
    {
      icon: <MdOutlineShareLocation className="w-12 h-12" />,
      title: "Relocation",
      description: "One morning, when transformed in his bed into a horrible vermin cover it and seemed ready.",
      link: "Learn More »"
    },
    {
      icon: <LuBox className="w-12 h-12" />,
      title: "Storage",
      description: "One morning, when transformed in his bed into a horrible vermin cover it and seemed ready.",
      link: "Learn More »",
      offset: true
    },
    {
      icon: <BsThreeDots className="w-12 h-12" />,
      title: "Other Service​s",
      description: "One morning, when transformed in his bed into a horrible vermin cover it and seemed ready.",
      link: "Learn More »"
    },

  ];

  return (
    <div className="bg-gray-100 py-16 px-6 sm:px-12 lg:px-20">
      <div className="w-11/12 mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
            OUR SERVICES
          </p>
          <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Global Icon Packers & Movers provides
          </h2>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed md:max-w-3xl mx-auto">
            Global Icon Movers makes every move in the UAE smooth and stress-free, with a dedicated team providing trusted relocation services and top-quality care as the best movers and packers in Abu Dhabi.          </p>

        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 bg-white border-2 border-white hover:border-primary transition-all duration-300 shadow-sm hover:shadow-lg `}
            >
              <div className="text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="text-primary font-semibold hover:text-primary transition-colors inline-flex items-center"
              >
                {service.link}
              </a>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-primary hover:bg-primary text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </div>
  );
}