import AboutCard from "@/components/AboutCard";
import GetInTouch from "@/components/GetInTouch";
import IntroductionSection from "@/components/IntroductionSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const AboutMePage = () => {
  return (
    <>
      <div className="px-3">
        <Navbar />
        <AboutCard />

        {/* Introduction section */}
        <IntroductionSection />

        {/* Get in touch */}

        <GetInTouch />
      </div>
      <Footer />
    </>
  );
};

export default AboutMePage;
