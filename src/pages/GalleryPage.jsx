import React from 'react';

import { motion } from 'framer-motion';
import {
    ArrowRight,
} from 'lucide-react';
import Gallery from '../components/sections/gallery/Gallery';
import { Image11 } from '../assets';
import HeroButton from '../components/ui/HeroButton';

const GalleryPage = () => {


    return (
        <>
            <title>Global Icon Movers and Packers in Abu Dhabi | Gallery</title>
            <meta name="description" content="Explore our gallery showcasing professional moving, packing, and storage solutions that ensure safe Moving services in Abu Dhabi." />
            <link rel="canonical" href="https://globaliconmovers.com/gallery" />

            <div className="font-poppins bg-white">


                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${Image11})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Our Excellence in Moving and Storage
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Explore our gallery to see the precision, professionalism, and care behind every successful move we deliver.                         </motion.p>
                        <HeroButton name="Explore More" to="/gallery" />
                    </div>
                </section>

                <Gallery />


            </div>
        </>
    );
};

export default GalleryPage;
