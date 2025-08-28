import Image from "next/image";
import HastagSectionMobile from "./HastagSectionMobile";
import SeemoreMobile from "./SeemoreMobile";

const HeroSectionMobile = () => {
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
      <HastagSectionMobile />

      <span className="block h-px w-full bg-[#7B7B7B] mt-20"></span>

      {/* movile seemore */}
      <SeemoreMobile />
    </div>
  );
};

export default HeroSectionMobile;
