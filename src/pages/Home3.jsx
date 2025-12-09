import React from 'react'
import Header3 from '../components/sections/home3/Header3'
import Hero from '../components/sections/home3/Hero'
import AboutUs from '../components/sections/home3/AboutUs'
import Services from '../components/sections/home3/Services'
import WhyChooseUs from '../components/sections/home3/WhyChooseUs'
import Process from '../components/sections/home3/Process'
import Testimonial from '../components/sections/home3/Testimonial'
import FAQ from '../components/sections/home3/Faq'
import Footer from '../components/layout/Footer'
const Home3 = () => {
  return (
    <div>
      <Header3 />
      <Hero />
      <AboutUs />
      <WhyChooseUs />
      <Services />
      <Process />
      <Testimonial/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default Home3
