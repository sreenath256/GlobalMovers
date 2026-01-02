import Header4 from "../components/sections/home4/Header4";
import Footer from "../components/sections/home4/Footer";
import AboutHero from "../components/sections/about/AboutHero";
import CompanyStory from "../components/sections/about/CompanyStory";
import MissionVision from "../components/sections/about/MissionVision";
import TeamSection from "../components/sections/about/TeamSection";

const About = () => {
    return (
        <div className="font-poppins bg-white">
            <Header4 />

            <AboutHero />

            <div className="space-y-0">
                <CompanyStory />
                <MissionVision />
                <TeamSection />
            </div>

            <Footer />
        </div>
    );
};

export default About;
