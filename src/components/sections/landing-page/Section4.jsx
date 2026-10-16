import { Users, Truck, Warehouse, MapPin } from "lucide-react";
import HeroButton from "../../ui/HeroButton";

const Section4 = () => {

    const points = [
        {
            id: 1,
            title: "Experienced movers and packers",
            description: "A trained relocation team ensuring efficient handling and smooth coordination throughout the moving process.",
            icon: Users
        },
        {
            id: 2,
            title: "Modern moving trucks and equipment",
            description: "Equipped with well-maintained vehicles and professional moving tools for safe and efficient transportation.",
            icon: Truck
        },
        {
            id: 3,
            title: "Secure monitored storage facilities",
            description: "Well-managed storage spaces designed to keep your belongings safe and protected.",
            icon: Warehouse
        },
        {
            id: 4,
            title: "Reliable service across Abu Dhabi",
            description: "Providing dependable relocation support across all areas of Abu Dhabi.",
            icon: MapPin
        },
    ]

    return (
        <div className="container mx-auto  pt-16 md:pt-24 ">

            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight max-w-5xl mx-auto mb-2 md:mb-4">
                        Why Choose Global Icon Movers in Abu Dhabi
                    </h2>
                    <p className="text-gray-600 md:max-w-5xl mx-auto text-base md:text-lg leading-relaxed mb-4 md:mb-8">
                        Choosing the right moving company in Abu Dhabi means working with professionals who value
                        safety, reliability, and customer satisfaction.
                        Our team combines professional packing, careful transportation, and secure storage facilities to
                        deliver a relocation experience you can trust.

                    </p>
                </div>
            </div>

            <div className='grid md:grid-cols-4 gap-4 px-4 md:px-0'>
                {
                    points.map((point) => {
                        const Icon = point.icon;
                        return (
                            <div className='border border-primary p-4 rounded-lg shadow-lg bg-white text-black text-center w-full flex flex-col items-center justify-start' key={point.id}>
                                <div className="bg-primary/10 p-4 rounded-full mb-4">
                                    <Icon className="w-10 h-10 text-primary" />
                                </div>
                                <h3 className="text-xl md:text-2xl font-medium leading-tight mx-auto mb-4">{point.title}</h3>
                                <p className="text-gray-600 md:max-w-5xl mx-auto text-base md:text-lg leading-relaxed mb-4 md:mb-8">{point.description}</p>
                            </div>
                        );
                    })
                }
            </div>
            <div className='flex items-center justify-center mt-8'>
                <HeroButton name='Know More' to='/storage-solutions-in-abu-dhabi'/>
            </div>
        </div>
    )
}

export default Section4