import Image from "next/image";
import SeemoreSection from "./SeemoreSection";
import HastagSection from "./HastagSection";

const HeroSectionSection = () => {
  return (
    // Mobile Hero
    <div className="mt-20">
      <Image
        src="/images/hero-image-mobile.png"
        alt="hero image"
        width={408}
        height={402}
        priority
      />

      {/* Mobile Hastag */}
      <HastagSection />

      <span className="block h-px w-full bg-[#7B7B7B] mt-20"></span>

      {/* movile seemore */}
      <SeemoreSection />
    </div>
  );
};

export default HeroSectionSection;
