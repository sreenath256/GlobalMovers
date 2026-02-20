import Hero from '../components/sections/home4/Hero.jsx'
import WhyChoose from '../components/sections/home4/WhyChoose.jsx'
import AboutUs from '../components/sections/home4/AboutUs.jsx'
import Services from '../components/sections/home4/Services.jsx'
import Testimonials from '../components/sections/home4/Testimonials.jsx'
import FAQ from '../components/sections/home4/Faq.jsx'
import Clients from '../components/sections/home4/Clients.jsx'
import CTASection from '../components/sections/home4/CTASection.jsx'

const HomePage = () => {


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
                <FAQ />
                <CTASection />

            </div>
        </>
    )
}

export default HomePage
