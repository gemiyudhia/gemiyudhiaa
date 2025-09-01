import AboutCard from "@/components/AboutCard";
import GetInTouch from "@/components/GetInTouch";
import IntroductionSection from "@/components/IntroductionSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const AboutMePage = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <Navbar />
        <div className="md:grid md:grid-cols-2 md:gap-x-8">
          <div className="md:col-span-1 md:col-start-1">
            <AboutCard />
          </div>

          <div className="md:col-span-2 md:row-start-2">
            {/* Introduction section */}
            <IntroductionSection />
          </div>

          <div className="md:col-span-1 md:row-start-1 md:col-start-2">
            {/* Get in touch */}
            <GetInTouch />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutMePage;
