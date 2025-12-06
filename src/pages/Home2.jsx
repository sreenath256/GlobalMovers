import React from 'react';
import Header2 from '../components/layout/Header2';
import Footer2 from '../components/layout/Footer2';
import Hero from '../components/sections/home2/Hero';
import About from '../components/sections/home2/About';
import Services from '../components/sections/home2/Services';
import Features from '../components/sections/home2/Features';
import HowWeWork from '../components/sections/home2/HowWeWork';
import Testimonials from '../components/sections/home2/Testimonials';
import FAQ from '../components/sections/home2/FAQ';
import Footer from '../components/layout/Footer';

const Home2 = () => {
    return (
        <div className="flex flex-col min-h-screen relative ">
            {/* Header2 is absolute positioned inside itself, so we can just place it here. 
                However, to match the layout context, let's just render it. */}
            <Header2 />

            <main>
                <Hero />
                <About />
                <Services />
                <HowWeWork />
                <Features />
                <Testimonials />
                <FAQ />
            </main>

            <Footer />
        </div>
    );
};

export default Home2;
