import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import { OfficeRelocation, HomeRelocation, FurnitureInstallationImage, LongTermStorageImage, ShortTermStorageImage, CommercialSpaceImage, PackingImage } from '../../../assets';
import HeroButton from '../../ui/HeroButton';

const Section2 = () => {
    const swiperRef = useRef(null);

    const services = [
        {
            id: 1,
            title: "Local Residential Moving",
            image: OfficeRelocation,
            link: "/services/office-movers-in-abu-dhabi"
        },
        {
            id: 2,
            title: "Long Distance Relocation",
            image: HomeRelocation,
            link: "/services/house-movers-in-abu-dhabi"
        },
        {
            id: 3,
            title: "Office & Commercial Moving",
            image: FurnitureInstallationImage,
            link: "/services/handyman"
        },
        {
            id: 4,
            title: "Professional Packing & Unpacking",
            image: PackingImage,
            link: "/services/corporate-services"
        },
        {
            id: 6,
            title: "Furniture Wrapping & Protection",
            image: ShortTermStorageImage,
            link: "/services/short-term-storage-solutions-in-abu-dhabi"
        },
       
    ]

    return (
        <section className="bg-white pt-16 md:pt-24 font-poppins relative">
            <div className="container mx-auto px-4 md:px-0">
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight max-w-5xl mx-auto">
                        Moving & Packing Service in Abu Dhabi
                    </h2>
                    <p className="text-gray-600 md:max-w-5xl mx-auto text-base md:text-lg leading-relaxed mb-4 md:mb-8">
                        We use quality packing materials and proven techniques to ensure fragile and valuable items
                        remain safe throughout the journey. Our moving and packing service in abu dhabi includes.
                    </p>
                </div>

                <div className=' md:w-9/12 mx-auto flex flex-wrap gap-4 items-center justify-center'>
                        {
                            services.map((service) => (
                                <div className='border border-primary p-4 rounded-lg shadow-lg bg-white text-primary font-bold text-center w-full md:w-[49%] ' key={service.id}>
                                    <h3>{service.title}</h3>
                                </div>
                            ))
                        }
                </div>
                <div className='flex items-center justify-center mt-8'>
                    <HeroButton name='Get Moving Quote' to='tel:+971509393081'/>
                </div>
            </div>
        </section>
    );
};

export default Section2;