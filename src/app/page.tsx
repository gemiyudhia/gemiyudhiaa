import HeroSectionMobile from "@/components/mobile-components/HeroSection";
import Navbar from "@/components/mobile-components/Navbar";

export default function HomePage() {
  return (
    <div className="px-3">
      <Navbar />
      <HeroSectionMobile />
    </div>
  );
}
