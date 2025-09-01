import Image from "next/image";
import HastagSection from "./HastagSection";
import SeemoreSection from "./SeemoreSection";

const HeroSectionSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="md:flex md:justify-center md:items-center md:gap-x-8 lg:gap-x-12 xl:gap-x-16 max-w-7xl mx-auto">
          {/* Hero Image */}
          <div className="flex justify-center md:justify-end md:flex-1 order-1 md:order-2">
            <Image
              src="/images/hero-image-mobile.png"
              alt="hero image"
              width={408}
              height={402}
              priority
              className="w-[280px] h-[276px] sm:w-[320px] sm:h-[315px] md:w-[350px] md:h-[345px] lg:w-[400px] lg:h-[394px] xl:w-[408px] xl:h-[402px] object-contain"
            />
          </div>

          {/* Hashtag Section */}
          <div className="md:flex-1 order-2 md:order-1 md:self-end">
            <HastagSection className="md:self-end" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <span className="block h-px w-full bg-[#7B7B7B] mt-12 sm:mt-16 md:mt-20 max-w-7xl mx-auto"></span>
      </div>

      {/* See More Section */}
      <div className="px-3 sm:px-4 md:px-6 lg:px-8">
        <SeemoreSection />
      </div>
    </>
  );
};

export default HeroSectionSection;
