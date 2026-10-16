import { motion } from "framer-motion"
import HeroButton from "../../ui/HeroButton"

const Section6 = () => {
    return (
        <div className="container mx-auto">
            <div className="rounded-3xl p-4 md:p-8 flex h-full items-center justify-center">
                <div className="text-center text-primary w-full h-full">
                    <h2 className="text-3xl md:text-6xl font-medium uppercase leading-tight max-w-5xl mx-auto mb-4 md:mb-8">
                        Need Storage During Your Move?
                    </h2>
                    <p className="md:max-w-5xl mx-auto text-base md:text-lg text-black leading-relaxed mb-4 md:mb-8">
                        Many customers moving within Abu Dhabi require temporary storage during the transition. Our
                        combined moving and storage solutions make the process simple and convenient.
                        Whether you are renovating your home, relocating between properties, or downsizing, we
                        ensure your belongings remain protected.
                    </p>
                    <HeroButton name="Call Now" to="tel:+971509393081"/>
                </div>
            </div>
        </div>
    )
}

export default Section6