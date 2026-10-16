import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import axios from 'axios';
import { URL } from '../../../common/api'; // Make sure this path is correct for your project

// --- SKELETON LOADER COMPONENT ---
const GallerySkeleton = () => (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, i) => (
            <div 
                key={i} 
                className="bg-gray-200 animate-pulse rounded-xl shadow-md aspect-[4/3] w-full" 
            />
        ))}
    </div>
);

const Gallery = () => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filter, setFilter] = useState('All');
    const [index, setIndex] = useState(-1);

    const categories = ['All', 'Moving', 'Storage'];

    useEffect(() => {
        const fetchGalleryItems = async () => {
            setIsLoading(true);
            try {
                // Fetching 'all' so we can filter instantly on the frontend without loading screens
                const res = await axios.get(`${URL}/public/gallery/all`);
                
                if (res.data.success) {
                    // Map the MongoDB data to match exactly what Lightbox and Framer Motion expect
                    const formattedImages = res.data.items.map(item => ({
                        id: item._id,
                        // Update 'item.image' to whatever your MongoDB schema uses for the image URL (e.g., item.imageUrl)
                        src: item.image || item.imageUrl, 
                        // Capitalize category so it matches the filter buttons perfectly
                        category: item.category.charAt(0).toUpperCase() + item.category.slice(1),
                        alt: item.altText || 'Global Icon Movers Gallery'
                    }));
                    
                    setImages(formattedImages);
                }
            } catch (err) {
                console.error("Error fetching gallery:", err);
                setError("Failed to load gallery images.");
            } finally {
                setIsLoading(false);
            }
        };

        fetchGalleryItems();
    }, []);

    // Local filtering ensures Framer Motion's AnimatePresence transitions smoothly
    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    return (
        <section className="pt-16 md:pt-24 pb-8 md:pb-12 min-h-[60vh]">
            <div className="w-11/12 mx-auto">
                <div className="text-center mb-6 md:mb-12">
                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-1 md:gap-4 mb-8">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${filter === cat
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* State Handling: Loading, Error, or Data */}
                {isLoading ? (
                    <GallerySkeleton />
                ) : error ? (
                    <div className="text-center py-20 text-red-500 font-medium">
                        {error}
                        <button 
                            onClick={() => window.location.reload()} 
                            className="block mx-auto mt-4 px-6 py-2 bg-primary text-white rounded-lg"
                        >
                            Try Again
                        </button>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 text-gray-400 font-medium">
                        No images found in the gallery.
                    </div>
                ) : (
                    <>
                        {/* Gallery Grid */}
                        <motion.div
                            layout
                            className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            <AnimatePresence mode="popLayout">
                                {filteredImages.map((image, i) => (
                                    <motion.div
                                        layout
                                        key={image.id}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.4 }}
                                        onClick={() => setIndex(i)}
                                        className="group relative overflow-hidden rounded-xl shadow-md bg-gray-100 aspect-[4/3] cursor-pointer"
                                    >
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>

                        {/* Lightbox */}
                        <Lightbox
                            index={index}
                            open={index >= 0}
                            close={() => setIndex(-1)}
                            slides={filteredImages.map(img => ({ src: img.src, alt: img.alt }))}
                        />
                    </>
                )}
            </div>
        </section>
    );
};

export default Gallery;