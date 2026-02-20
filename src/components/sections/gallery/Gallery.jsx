import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GalleryImage1, GalleryImage2, GalleryImage3, GalleryImage4, GalleryImage5, GalleryImage6, GalleryImage7, GalleryImage8, GalleryImage9, GalleryImage10, GalleryImage11, GalleryImage12 } from '../../../assets';



const Gallery = () => {
    const [filter, setFilter] = useState('All');
    const [index, setIndex] = useState(-1);

    const images = [
        { id: 1, src: GalleryImage1,  },
        { id: 2, src: GalleryImage2, category: 'Storage',},
        { id: 3, src: GalleryImage3, category: 'Moving',},
        { id: 4, src: GalleryImage4, category: 'Storage',},
        { id: 5, src: GalleryImage5, category: 'Moving',},
        { id: 6, src: GalleryImage6, category: 'Storage',},
        { id: 7, src: GalleryImage7, category: 'Moving',},
        { id: 8, src: GalleryImage8, category: 'Storage',},
        { id: 9, src: GalleryImage9, category: 'Moving',},
        { id: 10, src: GalleryImage10, category: 'Storage',},
        { id: 11, src: GalleryImage11, category: 'Moving',},
        { id: 12, src: GalleryImage12, category: 'Storage',},
    ];

    const filteredImages = filter === 'All'
        ? images
        : images.filter(img => img.category === filter);

    const categories = ['All', 'Moving', 'Storage'];

    return (
        <section className="pt-16 md:pt-24 pb-8 md:pb-12">
            <div className="w-11/12 mx-auto">
                <div className="text-center mb-6 md:mb-12">
                    {/* <h4 className="text-primary font-bold tracking-wider uppercase mb-3">Our Work</h4>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 uppercase">Project Gallery</h2> */}

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-1 md:gap-4">
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

                {/* Gallery Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
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
            </div>
        </section>
    );
};

export default Gallery;
