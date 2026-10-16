import Hero from '../components/sections/home4/Hero.jsx'
import WhyChoose from '../components/sections/home4/WhyChoose.jsx'
import AboutUs from '../components/sections/home4/AboutUs.jsx'
import Services from '../components/sections/home4/Services.jsx'
import Testimonials from '../components/sections/home4/Testimonials.jsx'
import FAQ from '../components/sections/home4/Faq.jsx'
import Clients from '../components/sections/home4/Clients.jsx'
import CTASection from '../components/sections/home4/CTASection.jsx'

const HomePage = () => {
    const faqs = [
        {
            question: "What services do movers and packers in Abu Dhabi provide?",
            answer: "Professional movers and packers in Abu Dhabi provide complete relocation services including house shifting, office relocation, corporate moving, commercial space moves, packing and unpacking, furniture installation, handyman services, and secure storage solutions. As a trusted moving company in Abu Dhabi, we manage everything from planning to final setup."
        },
        {
            question: "How do I choose the best movers and packers in Abu Dhabi?",
            answer: "To choose the best movers and packers in Abu Dhabi, look for experience, transparent pricing, trained staff, proper packing materials, and secure storage facilities. The best movers in Abu Dhabi will always provide a detailed assessment, clear quotation, and safe handling of your belongings without hidden charges."
        },
        {
            question: "Do movers in Abu Dhabi offer office relocation services?",
            answer: "Yes, professional movers in Abu Dhabi offer complete office relocation services, including packing office equipment, transporting furniture, handling IT assets, and setting up commercial spaces. An experienced moving company in Abu Dhabi ensures minimal downtime and a smooth business transition."
        },
        {
            question: "Do you provide storage solutions during relocation?",
            answer: "Yes. As one of the best movers in Abu Dhabi, we offer both short-term and long-term secure storage options. Our storage facilities are monitored with 24/7 security and CCTV surveillance, ensuring your belongings remain safe during transit or extended storage periods."
        },
        {
            question: "How much does it cost to hire a moving company in Abu Dhabi?",
            answer: "The cost of hiring a moving company in Abu Dhabi depends on factors such as property size, distance, number of items, packing requirements, and storage needs. The best movers and packers in Abu Dhabi provide upfront pricing after a proper assessment, ensuring complete transparency."
        },

    ];


    return (
        <>
            <title>Best Movers and Packers in Abu Dhabi | Movers in Abu Dhabi</title>
            <meta name="description" content="Plan your move to any part with Global Icon - Best Movers and Packers in Abu Dhabi. We will give you the best moving solutions in Abu Dhabi." />
            <link rel="canonical" href="https://globaliconmovers.com" />
            <div>
                <Hero />
                <Services />
                <WhyChoose />
                <AboutUs />
                <Testimonials />
                <Clients />
                <FAQ
                    title="Frequently Asked Questions"
                    description="Have questions about our moving services in Abu Dhabi? We’re here to give you answers and the right support at every step."
                    faqs={faqs} />
                <CTASection />

            </div>
        </>
    )
}

export default HomePage
