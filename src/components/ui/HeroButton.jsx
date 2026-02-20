import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroButton = ({ name = "Explore More", to = "/gallery" }) => {
    return (
        <motion.a
            href={to}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary hover:bg-white hover:text-primary text-white px-5 md:px-10 py-4 rounded-full font-bold tracking-wider transition-all duration-300 uppercase"
        >
            {name} <ArrowRight className="w-5 h-5" />
        </motion.a>
    )
}

export default HeroButton
