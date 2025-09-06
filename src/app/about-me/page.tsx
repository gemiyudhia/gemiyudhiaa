import AboutCard from "@/components/AboutCard";
import GetInTouch from "@/components/GetInTouch";
import IntroductionSection from "@/components/IntroductionSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/ui/Footer";

const AboutMePage = () => {
  return (
    <>
      <div className="container mx-auto px-3">
        <div className="md:grid md:grid-cols-2 md:gap-x-8 lg:grid lg:grid-cols-3 lg:gap-2 mt-20">
          <div className="md:col-span-1 md:col-start-1 lg:col-span-1 lg:row-span-3">
            <AboutCard />
          </div>

          <div className="md:col-span-2 md:row-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-1">
            {/* Introduction section */}
            <IntroductionSection />
          </div>

          {/* Divider */}
          <div className="md:col-span-2 md:row-start-3 lg:col-span-2 lg:col-start-2 lg:row-start-2">
            <div className="px-3 sm:px-4 md:px-6 lg:px-0">
              <span className="block h-px w-full bg-[#7B7B7B] mt-8 mb-4"></span>
            </div>
          </div>

          <div className="md:col-span-1 md:row-start-1 md:col-start-2 lg:col-span-2 lg:col-start-2 lg:row-start-3">
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
