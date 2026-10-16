import { Image10, Image8, Image9 } from "../../../assets";
import HeroButton from "../../ui/HeroButton";

const Section3 = () => {
    return (
        <section className="container mx-auto  pt-16 md:pt-24 font-poppins grid md:grid-cols-2 relative">
            <div className="mx-auto px-4 md:px-0">
                <div className="text-left mb-8 md:mb-16 h-full flex flex-col items-start justify-center">
                    <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight max-w-5xl mx-auto mb-4">
                        Storage Services in Abu Dhabi
                    </h2>
                    <p className="text-gray-600 md:max-w-5xl mx-auto text-base md:text-lg leading-relaxed mb-4 md:mb-4">
                        Our storage solutions are designed for both households and businesses, offering flexible
                        options depending on how long you need storage.
                    </p>
                    <ul className="list-disc list-inside text-black text-base font-bold md:text-lg mb-8 space-y-2">
                        <li>Household Storage</li>
                        <li>Business &amp; Inventory Storage</li>
                        <li>Short-Term Storage</li>
                        <li>Long-Term Storage</li>
                    </ul>

                    <HeroButton name="Reserve Storage" to="tel:+971509393081" />
                </div>
            </div>
            <div className='mx-auto flex items-center justify-center'>
                <img src={Image8} alt="" className="w-full h-full object-cover rounded-lg" />
            </div>
        </section>
    );
};

export default Section3;