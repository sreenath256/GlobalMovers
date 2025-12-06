import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"
import BestMoversAndPackers from "../components/sections/home1/BestMoversAndPackers"
import FAQ from "../components/sections/home1/FAQ"
import Hero from "../components/sections/home1/Hero"
import HowWeWork from "../components/sections/home1/HowWeWork"
import LogoMarque from "../components/sections/home1/LogoMarque"
import PerfectPlace from "../components/sections/home1/PerfectPlace"
import Services from "../components/sections/home1/Services"
import Testimonials from "../components/sections/home1/Testimonials"
import WhoWeAre from "../components/sections/home1/WhoWeAre"

const Home1 = () => {
    return (
        <div className='flex flex-col gap-20 '>
            <div className='p-8 absolute top-0 left-0 w-full z-10'>
                <Header />
            </div>
            <Hero />
            <LogoMarque />
            <WhoWeAre />
            <BestMoversAndPackers />
            <Services />
            <PerfectPlace />
            <HowWeWork />
            <Testimonials />
            <FAQ />
            <Footer />

        </div>
    )
}

export default Home1
