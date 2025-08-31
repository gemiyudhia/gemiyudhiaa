import Image from "next/image";
import HastagSection from "./HastagSection";
import SeemoreSection from "./SeemoreSection";

const HeroSectionSection = () => {
  return (
    <>
      {/* // Mobile Hero */}
      <div className="mt-20 md:flex md:justify-center md:items-center md:gap-x-5">
        <Image
          src="/images/hero-image-mobile.png"
          alt="hero image"
          width={408}
          height={402}
          priority
          className="order-1 md:order-2"
        />

        {/* Mobile Hastag */}
        <HastagSection className="order-2 md:order-1 md:self-end" />
      </div>
      <span className="block h-px w-full bg-[#7B7B7B] mt-20"></span>
      {/* movile seemore */}
      <SeemoreSection />
    </>
  );
};

export default HeroSectionSection;
