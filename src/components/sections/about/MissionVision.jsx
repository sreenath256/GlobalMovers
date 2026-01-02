import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const MissionVision = () => {
    const items = [
        {
            icon: Target,
            title: "Our Mission",
            desc: "To provide seamless, safe, and efficient relocation solutions that exceed customer expectations, ensuring peace of mind with every move.",
            color: "bg-blue-50 text-blue-600"
        },
        {
            icon: Eye,
            title: "Our Vision",
            desc: "To be the most trusted and innovative logistics partner in the Middle East, setting global standards for quality and care in the moving industry.",
            color: "bg-purple-50 text-purple-600"
        },
        {
            icon: Heart,
            title: "Our Values",
            desc: "Integrity, Transparency, and Customer-Centricity. We believe in building lasting relationships through honest service and unwavering dedication.",
            color: "bg-rose-50 text-rose-600"
        }
    ];

    return (
        <section className="py-20 bg-gray-50 font-poppins w-full">
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center mb-6`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold uppercase mb-4 text-black">{item.title}</h3>
                            <p className="text-gray-500 leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;
