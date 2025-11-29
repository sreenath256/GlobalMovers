import { useState } from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import LogoMarque from './components/sections/LogoMarque'
import WhoWeAre from './components/sections/WhoWeAre'
import BestMoversAndPackers from './components/sections/BestMoversAndPackers'
import Services from './components/sections/Services'
import PerfectPlace from './components/sections/PerfectPlace'
import HowWeWork from './components/sections/HowWeWork'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import Footer from './components/layout/Footer'

function App() {

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

export default App
