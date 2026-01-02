import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { ExpertAssessmentImage, ProperQuotationImage, ProfessionalCrewImage, Image4, Image2, Image3 } from '../../../assets';

const ProjectGallery = () => {
    const projects = [
        {
            id: 1,
            title: "Villa Relocation",
            category: "Residential",
            image: ExpertAssessmentImage
        },
        {
            id: 2,
            title: "Corporate Office Move",
            category: "Commercial",
            image: ProperQuotationImage
        },
        {
            id: 3,
            title: "Review & Assessment",
            category: "Consultation",
            image: ProfessionalCrewImage
        },
        {
            id: 4,
            title: "Storage Solutions",
            category: "Warehousing",
            image: Image4
        },
        {
            id: 5,
            title: "International Move",
            category: "Logistics",
            image: Image2
        },
        {
            id: 6,
            title: "Furniture Installation",
            category: "Assembly",
            image: Image3
        }
    ];

    return (
        <section className="py-24 bg-white font-poppins text-black w-11/12 mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <h4 className="text-primary font-medium tracking-wider uppercase mb-2">Our Portfolio</h4>
                    <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                        Recent Projects
                    </h2>
                </div>
                <button className="hidden md:flex items-center gap-2 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                    View All Projects <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group relative overflow-hidden rounded-2xl h-[400px] cursor-pointer"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: `url(${project.image})` }}
                        ></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                        {/* Content Overlay - Slide Up on Hover */}
                        <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl text-white">
                                <span className="text-sm font-medium tracking-wider text-gray-200 mb-2 block">{project.category}</span>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-2xl font-bold uppercase">{project.title}</h3>
                                    <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center transform -rotate-45 group-hover:rotate-0 transition-transform duration-300">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-12 flex justify-center md:hidden">
                <button className="flex items-center gap-2 border border-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">
                    View All Projects <ArrowUpRight className="w-5 h-5" />
                </button>
            </div>
        </section>
    );
};

export default ProjectGallery;
