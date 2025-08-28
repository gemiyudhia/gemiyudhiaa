import HeroSectionMobile from "@/components/mobile-components/HeroSectionMobile";
import Navbar from "@/components/mobile-components/navbar";

export default function HomePage() {
  return (
    <div className="px-3">
      <Navbar />
      <HeroSectionMobile />
    </div>
  );
}
