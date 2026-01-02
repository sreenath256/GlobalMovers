import { useState } from "react";
import { Image8 } from "../../../assets";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0); // default = first step active
  const steps = [
    {
      number: "01",
      title: "Expert Assessment",
      description: "Fill out our online form with your for a quick and accurate estimate.",
      active: true
    },
    {
      number: "02",
      title: "Proper Quotation",
      description: "Collaborate with our experts to your schedule and requirements.",
      active: false
    },
    {
      number: "03",
      title: "Professional Crew",
      description: "Our skilled team carefully packs and your with precision and care.",
      active: false
    },
    {
      number: "04",
      title: "Safe & Secure Relocation",
      description: "Once at your new location, we'll help you feel at home instantly.",
      active: false
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-6 sm:px-12 lg:px-20">
      <div className="w-11/12 mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Right - Content */}
          <div>
            <p className="text-primary text-sm font-semibold tracking-wider uppercase mb-4">
              OUR PROCESS
            </p>
            <h2 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
              How We Work: Best Movers and Packers in Abu Dhabi
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A clear, step-by-step approach ensures a seamless move. Each home shifting project starts with a detailed inspection, followed by an accurate quote and careful assignment of skilled movers who handle belongings with expert care at every stage.            </p>
          </div>
          {/* Left - Image */}
          <div>
            <img
              src={Image8}
              alt="Professional movers with boxes"
              className="w-full shadow-lg"
            />
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="space-y-4 group "
              onMouseEnter={() => setActiveStep(index)}
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300  ${activeStep === index ? "bg-primary text-white" : " text-gray-700"}`}
              >
                {step.number}.
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}