import { motion } from 'framer-motion';
import {  Image2, Image3, Image4 } from '../../../assets'; // Assuming these are people, or use placeholders

const TeamSection = () => {
    const team = [
        { name: "John Doe", role: "Founder & CEO", image: Image3 },
        { name: "Jane Smith", role: "Operations Manager", image: Image2 },
        { name: "Mike Johnson", role: "Logistics Head", image: Image3 },
        { name: "Sarah Connor", role: "Customer Relations", image: Image4 },
    ];

    return (
        <section className="py-20 bg-white font-poppins text-black w-11/12 mx-auto">
            <div className="text-center mb-16">
                <h4 className="text-primary font-medium tracking-wider uppercase mb-2">Our Experts</h4>
                <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
                    Meet The Team
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group text-center"
                    >
                        <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4] bg-gray-200">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{ backgroundImage: `url(${member.image})` }}
                            ></div>
                        </div>
                        <h3 className="text-xl font-bold uppercase mb-1">{member.name}</h3>
                        <p className="text-gray-500 text-sm tracking-wide uppercase">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
