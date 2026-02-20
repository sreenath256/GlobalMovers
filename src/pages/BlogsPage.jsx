import React from 'react';

import { motion } from 'framer-motion';
import { Image12 } from '../assets';

const BlogsPage = () => {
    return (
        <>
            <title>Global Icon Movers Blog: Moving Tips, Insights, News</title>
            <meta name="description" content="Discover top moving blogs, industry insights, and helpful tips from Global Icon Movers. Learn how to make your next move smooth." />
            <link rel="canonical" href="https://globaliconmovers./blog" />
            
            <div className="font-poppins bg-white flex flex-col min-h-screen">


                {/* Hero Section */}
                <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
                    <div
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${Image12})`
                        }}
                    ></div>

                    <div className="relative z-20 w-11/12 md:w-3/4 mx-auto text-left md:text-center pt-20">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-4xl md:text-7xl font-bold uppercase leading-tight tracking-wide"
                        >
                            Our Blog
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-base md:text-lg text-gray-300  leading-relaxed text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
                        >
                            Insights, tips, and news from the world of moving and storage.
                        </motion.p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="flex-grow py-24 bg-gray-50">
                    <div className="w-11/12 max-w-7xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 inline-block"
                        >
                            <h2 className="text-2xl text-gray-400 font-medium uppercase tracking-widest">No blogs found</h2>
                            <p className="text-gray-400 mt-2 text-sm">Check back later for updates!</p>
                        </motion.div>
                    </div>
                </section>

            </div>
        </>
    );
};

export default BlogsPage;