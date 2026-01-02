import Header4 from '../components/sections/home4/Header4.jsx'
import Hero from '../components/sections/home4/Hero.jsx'
import WhyChoose from '../components/sections/home4/WhyChoose.jsx'
import AboutUs from '../components/sections/home4/AboutUs.jsx'
import Services from '../components/sections/home4/Services.jsx'
import Testimonials from '../components/sections/home4/Testimonials.jsx'
import Footer from '../components/sections/home4/Footer.jsx'
import FAQ from '../components/sections/home3/Faq.jsx'
import ProjectGallery from "../components/sections/home4/ProjectGallery";

const Home4 = () => {
    return (
        <div>
            <Header4 />
            <Hero />
            <Services />
            {/* <ProjectGallery /> */}
            <WhyChoose />
            <AboutUs />
            <Testimonials />
            <FAQ />
            <Footer />

        </div>
    )
}

export default Home4
