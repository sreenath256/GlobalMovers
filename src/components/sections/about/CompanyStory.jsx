import { motion } from 'framer-motion';
import { StorageImage } from '../../../assets'; // Or a relevant history image

const CompanyStory = () => {
    return (
        <section className="py-20 bg-white font-poppins text-black w-11/12 mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h4 className="text-primary font-medium tracking-wider uppercase mb-2">Our Story</h4>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                        A Journey of <br /> Excellence
                    </h2>
                    <div className="space-y-4 text-gray-500 leading-relaxed">
                        <p>
                            Established in 2008, Global Icon Movers started with a simple vision: to make relocation stress-free and reliable for everyone in the UAE. What began as a small team of passionate movers has grown into one of Abu Dhabi's most trusted logistics partners.
                        </p>
                        <p>
                            Over the years, we have handled thousands of moves, from cozy apartments to sprawling corporate offices. Our commitment to quality, safety, and customer satisfaction has fueled our growth, allowing us to expand our fleet and services to meet the evolving needs of our clients.
                        </p>
                        <p>
                            Today, we stand proud as a symbol of trust and efficiency in the moving industry, continuing to innovate and improve with every box we pack and every mile we travel.
                        </p>
                    </div>
                </motion.div>

                {/* Image Grid/Highlight */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    <div className="h-[500px] w-full bg-gray-200 rounded-xl overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: `url(${StorageImage})` }}></div>
                    </div>
                    {/* Floating Badge (Years of Experience) */}
                    <div className="absolute -bottom-10 -left-10 bg-primary text-white p-8 rounded-tr-3xl hidden md:block">
                        <span className="block text-5xl font-bold">15+</span>
                        <span className="text-sm font-medium uppercase tracking-wider">Years of <br /> Success</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CompanyStory;
